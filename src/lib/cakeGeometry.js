import * as THREE from "three";

export function createGlowTexture() {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size; canvas.height = size;
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.3, "rgba(255,255,255,0.5)");
  gradient.addColorStop(0.7, "rgba(255,255,255,0.1)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  return canvas;
}

export function sampleMeshSurface(mesh, count) {
  const geometry = mesh.geometry;
  const positions = geometry.attributes.position;
  const normals = geometry.attributes.normal;
  const index = geometry.index;

  const coords = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const faceAreas = [], faceData = [];

  const triCount = index ? index.count / 3 : positions.count / 3;
  for (let i = 0; i < triCount; i++) {
    let ia, ib, ic;
    if (index) { ia = index.getX(i*3); ib = index.getX(i*3+1); ic = index.getX(i*3+2); }
    else { ia = i*3; ib = i*3+1; ic = i*3+2; }
    const va = new THREE.Vector3().fromBufferAttribute(positions, ia);
    const vb = new THREE.Vector3().fromBufferAttribute(positions, ib);
    const vc = new THREE.Vector3().fromBufferAttribute(positions, ic);
    const ab = new THREE.Vector3().subVectors(vb, va);
    const ac = new THREE.Vector3().subVectors(vc, va);
    const area = ab.cross(ac).length() * 0.5;
    const na = new THREE.Vector3().fromBufferAttribute(normals, ia);
    const nb = new THREE.Vector3().fromBufferAttribute(normals, ib);
    const nc = new THREE.Vector3().fromBufferAttribute(normals, ic);
    faceAreas.push(area);
    faceData.push({ ia, ib, ic, fn: na.add(nb).add(nc).normalize().clone() });
  }

  const totalArea = faceAreas.reduce((s,a)=>s+a,0)||1;
  for (let i = 0; i < count; i++) {
    let r = Math.random() * totalArea, fi = 0;
    for (let j = 0; j < faceAreas.length; j++) { r -= faceAreas[j]; if (r <= 0) { fi = j; break; } }
    const { ia, ib, ic, fn } = faceData[fi];
    const va = new THREE.Vector3().fromBufferAttribute(positions, ia);
    const vb = new THREE.Vector3().fromBufferAttribute(positions, ib);
    const vc = new THREE.Vector3().fromBufferAttribute(positions, ic);
    let u = Math.random(), v = Math.random();
    if (u+v > 1) { u = 1-u; v = 1-v; }
    const w = 1-u-v;
    const pt = new THREE.Vector3().addScaledVector(va,w).addScaledVector(vb,u).addScaledVector(vc,v);
    coords[i*3]=pt.x; coords[i*3+1]=pt.y; coords[i*3+2]=pt.z;
    const ny = Math.max(0, fn.y), nx = Math.max(0, fn.x);
    const light = 0.3 + ny * 0.4 + nx * 0.3;
    colors[i*3]=light; colors[i*3+1]=light; colors[i*3+2]=light;
  }
  return { coords, colors };
}

export function makePrismGeometry(radius, height, sides) {
  const shape = new THREE.Shape();
  const step = (Math.PI*2)/sides, off = Math.PI/sides;
  const pts = [];
  for (let i=0; i<sides; i++) { const a = i*step+off; pts.push(new THREE.Vector2(Math.cos(a)*radius, Math.sin(a)*radius)); }
  shape.setFromPoints(pts);
  const g = new THREE.ExtrudeGeometry(shape, { steps:1, depth:height, bevelEnabled:false });
  g.rotateX(-Math.PI/2); g.center();
  return g;
}

export function generateCakeParticles(rBot, rTop, hBot, hTop, layerGap) {
  const allCoords = [], allColors = [];

  const botGeom = makePrismGeometry(rBot, hBot, 8);
  const botMesh = new THREE.Mesh(botGeom); botMesh.position.y = -layerGap;
  const topGeom = makePrismGeometry(rTop, hTop, 8);
  const topMesh = new THREE.Mesh(topGeom); topMesh.position.y = layerGap;

  const capShape = new THREE.Shape();
  const step = (Math.PI*2)/8, off = Math.PI/8;
  const capPts = [];
  for (let i=0; i<8; i++) { const a = i*step+off; capPts.push(new THREE.Vector2(Math.cos(a)*rTop, Math.sin(a)*rTop)); }
  capShape.setFromPoints(capPts);
  const capGeom = new THREE.ShapeGeometry(capShape); capGeom.rotateX(-Math.PI/2);
  const capMesh = new THREE.Mesh(capGeom); capMesh.position.y = hTop + layerGap;

  const botCount = 400, topCount = 250, capCount = 100;
  const { coords:bc, colors:bcol } = sampleMeshSurface(botMesh, botCount);
  const { coords:tc, colors:tcol } = sampleMeshSurface(topMesh, topCount);
  const { coords:cc, colors:ccol } = sampleMeshSurface(capMesh, capCount);

  for (let i=0; i<botCount; i++) { allCoords.push(bc[i*3],bc[i*3+1],bc[i*3+2]); allColors.push(bcol[i*3],bcol[i*3+1],bcol[i*3+2]); }
  for (let i=0; i<topCount; i++) { allCoords.push(tc[i*3],tc[i*3+1],tc[i*3+2]); allColors.push(tcol[i*3],tcol[i*3+1],tcol[i*3+2]); }
  for (let i=0; i<capCount; i++) { allCoords.push(cc[i*3],cc[i*3+1],cc[i*3+2]); allColors.push(ccol[i*3],ccol[i*3+1],ccol[i*3+2]); }

  // Candle
  const candleBaseY = layerGap + hTop/2, candleH = hTop*0.6;
  for (let i=0; i<30; i++) {
    const angle = Math.random()*Math.PI*2, r = rTop*0.05;
    allCoords.push(Math.cos(angle)*r, candleBaseY+Math.random()*candleH, Math.sin(angle)*r);
    allColors.push(0.95, 0.75, 0.35);
  }
  // Flame
  const flameY = candleBaseY + candleH;
  for (let i=0; i<15; i++) {
    const angle = Math.random()*Math.PI*2, r = rTop*0.03;
    allCoords.push(Math.cos(angle)*r, flameY+Math.random()*candleH*0.4, Math.sin(angle)*r);
    allColors.push(1.0, 0.45+Math.random()*0.25, Math.random()*0.15);
  }

  const total = allCoords.length / 3;
  const fcoords = new Float32Array(allCoords);
  const fcolors = new Float32Array(allColors);
  return { coords: fcoords, colors: fcolors, total, candleCount:30, flameCount:15, rTop, hTop, layerGap };
}
