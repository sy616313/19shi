# Three.js 粒子蛋糕实现计划

> **目标：** 用 Three.js WebGL 替换当前 Canvas 2D 粒子蛋糕，解决手机端黑屏和性能问题。

**架构：** Three.js 场景叠加在 CSS 宇宙背景上。蛋糕 = 两个八边形棱柱 Mesh（低多边形）+ 粒子点云覆盖表面 + 加法混合发光。飘散粒子 = 独立 Points 图层。触碰 = Raycaster 检测。

**依赖新增：** `three`（~150KB gzip）

---

## 文件变更总览

```
新增:
  src/components/ThreeCake.jsx          ← Three.js 粒子蛋糕组件（核心）
  src/lib/cakeGeometry.js               ← 蛋糕几何体生成 + 粒子采样
  public/textures/glow.png              ← 发光贴图（代码生成，无需手动创建）

修改:
  src/pages/Birthday.jsx                ← 替换 CosmicParticleCake → ThreeCake
  package.json                          ← 添加 three 依赖

删除（可选）:
  src/components/CosmicParticleCake.jsx ← 旧 Canvas 版本，确认新版正常后删除
```

---

### Task 1: 安装 Three.js

- [ ] **Step 1: 安装依赖**

```bash
cd C:\Users\617\Desktop\19shi
npm install three
```

- [ ] **Step 2: 验证安装**

```bash
node -e "const THREE = require('three'); console.log('Three.js version:', THREE.REVISION)"
```

应输出版本号（如 `170`）。

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "deps: add three.js for WebGL particle cake"
```

---

### Task 2: 创建发光贴图生成工具

**为什么：** 粒子的发光效果需要一个圆形渐变贴图。用代码生成，不需要手动创建图片文件。

**Files:**
- Modify: `src/lib/cakeGeometry.js`（在 Task 3 创建，这里先写生成函数）

在 `cakeGeometry.js` 中包含以下函数：

```js
/**
 * 生成发光贴图 Canvas（64×64 圆形渐变）
 * 返回 HTMLCanvasElement，可直接用作 Three.js Texture
 */
export function createGlowTexture() {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createRadialGradient(
    size / 2, size / 2, 0,
    size / 2, size / 2, size / 2
  );
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.3, "rgba(255,255,255,0.5)");
  gradient.addColorStop(0.7, "rgba(255,255,255,0.1)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  return canvas;
}
```

- [ ] 写入 `src/lib/cakeGeometry.js`
- [ ] Commit: `git commit -m "feat: add glow texture generator for particle system"`

---

### Task 3: 创建蛋糕几何体 + 粒子采样模块

**Files:**
- Create: `src/lib/cakeGeometry.js`

```js
import * as THREE from "three";

/**
 * 从 Mesh 表面均匀采样点
 * @param {THREE.Mesh} mesh - 源 mesh
 * @param {number} count - 采样点数量
 * @returns {Float32Array} [x, y, z, x, y, z, ...] 展平坐标数组
 */
export function sampleMeshSurface(mesh, count) {
  const geometry = mesh.geometry;
  const positions = geometry.attributes.position;
  const normals = geometry.attributes.normal;
  const index = geometry.index;

  const coords = new Float32Array(count * 3);
  const normalColors = new Float32Array(count * 3);

  const faceAreas = [];
  const faceIndices = [];

  // 计算所有三角面的面积（用于加权采样）
  const triCount = index ? index.count / 3 : positions.count / 3;
  for (let i = 0; i < triCount; i++) {
    let a, b, c;
    if (index) {
      a = index.getX(i * 3);
      b = index.getX(i * 3 + 1);
      c = index.getX(i * 3 + 2);
    } else {
      a = i * 3;
      b = i * 3 + 1;
      c = i * 3 + 2;
    }

    const va = new THREE.Vector3().fromBufferAttribute(positions, a);
    const vb = new THREE.Vector3().fromBufferAttribute(positions, b);
    const vc = new THREE.Vector3().fromBufferAttribute(positions, c);

    // 三角形面积
    const ab = new THREE.Vector3().subVectors(vb, va);
    const ac = new THREE.Vector3().subVectors(vc, va);
    const area = ab.cross(ac).length() * 0.5;

    faceAreas.push(area);
    faceIndices.push({ a, b, c });
  }

  // 面积加权随机采样
  const totalArea = faceAreas.reduce((s, a) => s + a, 0);
  for (let i = 0; i < count; i++) {
    let r = Math.random() * totalArea;
    let faceIdx = 0;
    for (let j = 0; j < faceAreas.length; j++) {
      r -= faceAreas[j];
      if (r <= 0) { faceIdx = j; break; }
    }

    const { a, b, c } = faceIndices[faceIdx];
    const va = new THREE.Vector3().fromBufferAttribute(positions, a);
    const vb = new THREE.Vector3().fromBufferAttribute(positions, b);
    const vc = new THREE.Vector3().fromBufferAttribute(positions, c);

    // 三角形内随机点（重心坐标）
    let u = Math.random();
    let v = Math.random();
    if (u + v > 1) { u = 1 - u; v = 1 - v; }
    const w = 1 - u - v;

    const point = new THREE.Vector3()
      .addScaledVector(va, w)
      .addScaledVector(vb, u)
      .addScaledVector(vc, v);

    // 加微小随机偏移，打破网格感
    point.x += (Math.random() - 0.5) * 0.02;
    point.y += (Math.random() - 0.5) * 0.02;
    point.z += (Math.random() - 0.5) * 0.02;

    coords[i * 3] = point.x;
    coords[i * 3 + 1] = point.y;
    coords[i * 3 + 2] = point.z;

    // 用法线方向决定颜色亮度（面向光源的粒子更亮）
    const normal = new THREE.Vector3()
      .fromBufferAttribute(normals, a)
      .add(new THREE.Vector3().fromBufferAttribute(normals, b))
      .add(new THREE.Vector3().fromBufferAttribute(normals, c))
      .normalize();

    // 光源方向：右上方
    const lightDir = new THREE.Vector3(0.5, 0.8, 0.3).normalize();
    const brightness = 0.3 + 0.7 * Math.max(0, normal.dot(lightDir));
    normalColors[i * 3] = brightness;
    normalColors[i * 3 + 1] = brightness;
    normalColors[i * 3 + 2] = brightness;
  }

  return { coords, normalColors };
}

/**
 * 创建蛋糕的两层八边形棱柱 Mesh
 * @returns {{ topMesh: THREE.Mesh, bottomMesh: THREE.Mesh }}
 */
export function createCakeMeshes() {
  // 材质：低多边形 + 平面着色
  const topMaterial = new THREE.MeshPhongMaterial({
    color: 0x67e8f9,        // 亮青
    emissive: 0x1a3a4a,     // 自发光暗青
    specular: 0xffffff,
    shininess: 30,
    flatShading: true,       // 关键：平面着色 = 低多边形效果
  });

  const bottomMaterial = new THREE.MeshPhongMaterial({
    color: 0x7dd3fc,        // 天蓝
    emissive: 0x15253a,     // 自发光暗蓝
    specular: 0xffffff,
    shininess: 30,
    flatShading: true,
  });

  // 八边形棱柱（CylinderGeometry 的 segments 参数 = 8 → 八边形）
  const topGeo = new THREE.CylinderGeometry(0.7, 0.7, 0.55, 8);
  const bottomGeo = new THREE.CylinderGeometry(0.95, 0.95, 0.7, 8);

  const topMesh = new THREE.Mesh(topGeo, topMaterial);
  const bottomMesh = new THREE.Mesh(bottomGeo, bottomMaterial);

  // 垂直排列：底层在下，顶层在上，中间留间隙
  const gap = 0.08;
  bottomMesh.position.y = -0.35 - gap / 2;
  topMesh.position.y = 0.275 + gap / 2;

  return { topMesh, bottomMesh };
}

/**
 * 从蛋糕 mesh 采样生成粒子点云
 * @param {THREE.Mesh} mesh - 源 mesh
 * @param {number} count - 粒子数量
 * @param {THREE.Color} baseColor - 基础颜色
 * @param {THREE.Texture} glowTexture - 发光贴图
 * @returns {THREE.Points}
 */
export function createParticlesFromMesh(mesh, count, baseColor, glowTexture) {
  const { coords, normalColors } = sampleMeshSurface(mesh, count);

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(coords, 3));

  // 颜色 = 基础色 × 法线亮度
  const colors = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const brightness = normalColors[i * 3];
    colors[i * 3] = baseColor.r * brightness;
    colors[i * 3 + 1] = baseColor.g * brightness;
    colors[i * 3 + 2] = baseColor.b * brightness;
  }
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 0.035,
    map: glowTexture,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    vertexColors: true,
  });

  const points = new THREE.Points(geometry, material);
  points.position.copy(mesh.position);

  return points;
}

/**
 * 创建飘散粒子系统
 * @param {THREE.Texture} glowTexture - 发光贴图
 * @param {number} count - 飘散粒子数量
 * @returns {{ points: THREE.Points, update: Function }}
 */
export function createFloaterSystem(glowTexture, count) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const velocities = new Float32Array(count * 3);
  const lifetimes = new Float32Array(count); // [0, 1] 生命周期进度
  const maxLifetimes = new Float32Array(count);

  // 初始化所有粒子为"已死亡"状态
  for (let i = 0; i < count; i++) {
    lifetimes[i] = 1; // 1 = 已死亡，等待重生
    positions[i * 3] = 0;
    positions[i * 3 + 1] = -999;
    positions[i * 3 + 2] = 0;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 0.025,
    map: glowTexture,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    vertexColors: true,
    opacity: 0.8,
  });

  const points = new THREE.Points(geometry, material);

  // 飘散粒子颜色：粉紫色
  const floaterColor = new THREE.Color(0xf0abfc);

  let spawnTimer = 0;
  const SPAWN_INTERVAL = 0.15; // 每 0.15 秒尝试生成一个
  const LIFETIME_MIN = 2;
  const LIFETIME_MAX = 4;

  // 蛋糕表面范围（用于随机出生位置）
  const cakeRadius = 1.0;
  const cakeTop = 0.8;
  const cakeBottom = -0.8;

  function update(dt) {
    spawnTimer += dt;

    // 生成新粒子
    if (spawnTimer >= SPAWN_INTERVAL) {
      spawnTimer = 0;
      for (let i = 0; i < count; i++) {
        if (lifetimes[i] >= 1) {
          // 重生
          const angle = Math.random() * Math.PI * 2;
          const r = Math.random() * cakeRadius * 0.7;
          positions[i * 3] = Math.cos(angle) * r;
          positions[i * 3 + 1] = cakeBottom + Math.random() * (cakeTop - cakeBottom);
          positions[i * 3 + 2] = Math.sin(angle) * r;

          velocities[i * 3] = (Math.random() - 0.5) * 0.1;
          velocities[i * 3 + 1] = 0.15 + Math.random() * 0.2; // 向上
          velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.1;

          lifetimes[i] = 0;
          maxLifetimes[i] = LIFETIME_MIN + Math.random() * (LIFETIME_MAX - LIFETIME_MIN);

          colors[i * 3] = floaterColor.r;
          colors[i * 3 + 1] = floaterColor.g;
          colors[i * 3 + 2] = floaterColor.b;
          break;
        }
      }
    }

    // 更新粒子位置
    for (let i = 0; i < count; i++) {
      if (lifetimes[i] >= 1) continue;

      lifetimes[i] += dt / maxLifetimes[i];

      // 正弦横向摆动
      positions[i * 3] += (velocities[i * 3] + Math.sin(lifetimes[i] * 5) * 0.01) * dt;
      positions[i * 3 + 1] += velocities[i * 3 + 1] * dt;
      positions[i * 3 + 2] += velocities[i * 3 + 2] * dt;

      // 透明度随生命周期衰减
      const alpha = 1 - lifetimes[i];
      colors[i * 3] = floaterColor.r * alpha;
      colors[i * 3 + 1] = floaterColor.g * alpha;
      colors[i * 3 + 2] = floaterColor.b * alpha;

      // 超出范围则标记死亡
      if (positions[i * 3 + 1] > 2.0 || lifetimes[i] >= 1) {
        lifetimes[i] = 1;
        positions[i * 3 + 1] = -999;
      }
    }

    geometry.attributes.position.needsUpdate = true;
    geometry.attributes.color.needsUpdate = true;
  }

  return { points, update };
}

/**
 * 生成发光贴图（返回 THREE.CanvasTexture）
 */
export function createGlowTexture() {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createRadialGradient(
    size / 2, size / 2, 0,
    size / 2, size / 2, size / 2
  );
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.3, "rgba(255,255,255,0.5)");
  gradient.addColorStop(0.7, "rgba(255,255,255,0.1)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}
```

- [ ] 创建 `src/lib/cakeGeometry.js`
- [ ] 验证：`node -e "import('./src/lib/cakeGeometry.js')"` 不报错（ESM 检查）
- [ ] Commit: `git commit -m "feat: add Three.js cake geometry and particle sampling module"`

---

### Task 4: 创建 ThreeCake 组件

**Files:**
- Create: `src/components/ThreeCake.jsx`

```jsx
import { useRef, useEffect, useCallback, useState } from "react";
import * as THREE from "three";
import {
  createCakeMeshes,
  createParticlesFromMesh,
  createFloaterSystem,
  createGlowTexture,
} from "../lib/cakeGeometry";

const PARTICLE_PER_LAYER = 250;
const FLOATER_COUNT = 60;
const ROTATION_SPEED = 0.3; // radians per second (~17°/s)
const FADE_IN_DURATION = 1.5;

export default function ThreeCake() {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const stateRef = useRef(null);
  const rafRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check reduced motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const initScene = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    // ─── Scene ───
    const scene = new THREE.Scene();

    // ─── Camera ───
    const aspect = window.innerWidth / window.innerHeight;
    const camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 100);
    camera.position.set(0, 0.3, 3.5);
    camera.lookAt(0, 0, 0);

    // ─── Renderer ───
    const renderer = new THREE.WebGLRenderer({
      alpha: true,            // 透明背景，CSS 背景透过
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // 完全透明
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // ─── Lights ───
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(2, 3, 1);
    scene.add(dirLight);

    const ambientLight = new THREE.AmbientLight(0x334466, 0.6);
    scene.add(ambientLight);

    // ─── Glow Texture ───
    const glowTexture = createGlowTexture();

    // ─── Cake Meshes (for geometry, not directly visible) ───
    const { topMesh, bottomMesh } = createCakeMeshes();

    // ─── Particle point clouds (these ARE the visible cake) ───
    const topParticles = createParticlesFromMesh(
      topMesh,
      PARTICLE_PER_LAYER,
      new THREE.Color(0x67e8f9), // 亮青
      glowTexture
    );
    const bottomParticles = createParticlesFromMesh(
      bottomMesh,
      PARTICLE_PER_LAYER,
      new THREE.Color(0x7dd3fc), // 天蓝
      glowTexture
    );

    // ─── Gap particles (between layers) ───
    const gapGeo = new THREE.BufferGeometry();
    const gapCount = 15;
    const gapPositions = new Float32Array(gapCount * 3);
    const gapColors = new Float32Array(gapCount * 3);
    const gapColor = new THREE.Color(0xe9d5ff);
    for (let i = 0; i < gapCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * 0.6;
      gapPositions[i * 3] = Math.cos(angle) * r;
      gapPositions[i * 3 + 1] = (Math.random() - 0.5) * 0.1;
      gapPositions[i * 3 + 2] = Math.sin(angle) * r;
      gapColors[i * 3] = gapColor.r;
      gapColors[i * 3 + 1] = gapColor.g;
      gapColors[i * 3 + 2] = gapColor.b;
    }
    gapGeo.setAttribute("position", new THREE.BufferAttribute(gapPositions, 3));
    gapGeo.setAttribute("color", new THREE.BufferAttribute(gapColors, 3));
    const gapParticles = new THREE.Points(gapGeo, new THREE.PointsMaterial({
      size: 0.02,
      map: glowTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true,
    }));

    // ─── Floater system ───
    const { points: floaterPoints, update: updateFloaters } =
      createFloaterSystem(glowTexture, FLOATER_COUNT);

    // ─── Cake Group (rotate everything together) ───
    const cakeGroup = new THREE.Group();
    cakeGroup.add(topParticles);
    cakeGroup.add(bottomParticles);
    cakeGroup.add(gapParticles);
    scene.add(cakeGroup);
    scene.add(floaterPoints); // floaters rotate with cake

    // ─── Interaction state ───
    const interaction = {
      touching: false,
      touchX: 0,
      touchY: 0,
      scattered: false,
      scatterProgress: 0, // 0 = home, 1 = scattered
      returnTimer: 0,
    };

    // ─── Store original particle positions for scatter/return ───
    const origPositions = {
      top: new Float32Array(topParticles.geometry.attributes.position.array),
      bottom: new Float32Array(bottomParticles.geometry.attributes.position.array),
    };

    // ─── State object ───
    stateRef.current = {
      scene, camera, renderer, cakeGroup, glowTexture,
      topParticles, bottomParticles, gapParticles,
      floaterPoints, updateFloaters,
      interaction, origPositions,
      elapsed: 0, startTime: performance.now() / 1000,
    };
  }, []);

  // ─── Animation loop ───
  const tick = useCallback(() => {
    const s = stateRef.current;
    if (!s) return;

    const now = performance.now() / 1000;
    const dt = Math.min(now - s.startTime - s.elapsed, 0.1);
    s.elapsed += dt;

    const fadeAlpha = Math.min(s.elapsed / FADE_IN_DURATION, 1);

    if (!reducedMotion) {
      // Rotate cake
      s.cakeGroup.rotation.y += ROTATION_SPEED * dt;

      // Breathing effect on gap particles
      const gapColors = s.gapParticles.geometry.attributes.color;
      for (let i = 0; i < gapColors.count; i++) {
        const breathe = 0.6 + 0.4 * Math.sin(s.elapsed * 2 + i * 1.5);
        gapColors.setXYZ(i,
          0.914 * breathe,
          0.827 * breathe,
          1.0 * breathe
        );
      }
      gapColors.needsUpdate = true;

      // Update floaters
      s.updateFloaters(dt);
    }

    // ─── Touch scatter/return ───
    const inter = s.interaction;
    if (inter.touching && !inter.scattered) {
      inter.scatterProgress = Math.min(inter.scatterProgress + dt * 3, 1);
      if (inter.scatterProgress >= 1) inter.scattered = true;

      // Scatter top particles
      applyScatter(s.topParticles, s.origPositions.top, inter, s.elapsed);
      applyScatter(s.bottomParticles, s.origPositions.bottom, inter, s.elapsed);
    } else if (!inter.touching && inter.scatterProgress > 0) {
      inter.returnTimer += dt;
      if (inter.returnTimer > 0.3) {
        inter.scatterProgress = Math.max(inter.scatterProgress - dt * 1.5, 0);
        applyReturn(s.topParticles, s.origPositions.top, inter);
        applyReturn(s.bottomParticles, s.origPositions.bottom, inter);
        if (inter.scatterProgress <= 0) {
          inter.scattered = false;
          inter.returnTimer = 0;
        }
      }
    }

    // Fade in
    s.topParticles.material.opacity = fadeAlpha;
    s.bottomParticles.material.opacity = fadeAlpha;

    // Render
    s.renderer.render(s.scene, s.camera);
    rafRef.current = requestAnimationFrame(tick);
  }, [reducedMotion]);

  // ─── Scatter helper ───
  function applyScatter(particles, origPos, inter, time) {
    const positions = particles.geometry.attributes.position;
    const sp = inter.scatterProgress;

    for (let i = 0; i < positions.count; i++) {
      const ox = origPos[i * 3];
      const oy = origPos[i * 3 + 1];
      const oz = origPos[i * 3 + 2];

      // Direction from center
      const len = Math.sqrt(ox * ox + oy * oy + oz * oz) || 0.1;
      const nx = ox / len, ny = oy / len, nz = oz / len;

      const dist = sp * 0.8;
      positions.setXYZ(i,
        ox + nx * dist + Math.sin(time * 3 + i) * sp * 0.05,
        oy + ny * dist,
        oz + nz * dist + Math.cos(time * 3 + i) * sp * 0.05
      );
    }
    positions.needsUpdate = true;
  }

  // ─── Return helper ───
  function applyReturn(particles, origPos, inter) {
    const positions = particles.geometry.attributes.position;
    const sp = inter.scatterProgress;

    for (let i = 0; i < positions.count; i++) {
      const ox = origPos[i * 3];
      const oy = origPos[i * 3 + 1];
      const oz = origPos[i * 3 + 2];

      const cx = positions.getX(i);
      const cy = positions.getY(i);
      const cz = positions.getZ(i);

      // Ease-out-back toward original
      const t = 1 - sp;
      const ease = 1 - Math.pow(1 - t, 3);
      positions.setXYZ(i,
        cx + (ox - cx) * ease * 0.15,
        cy + (oy - cy) * ease * 0.15,
        cz + (oz - cz) * ease * 0.15
      );
    }
    positions.needsUpdate = true;
  }

  // ─── Touch handlers ───
  const handleDown = useCallback(() => {
    if (stateRef.current) {
      stateRef.current.interaction.touching = true;
      stateRef.current.interaction.returnTimer = 0;
    }
  }, []);

  const handleUp = useCallback(() => {
    if (stateRef.current) {
      stateRef.current.interaction.touching = false;
    }
  }, []);

  // ─── Init ───
  useEffect(() => {
    initScene();
    rafRef.current = requestAnimationFrame(tick);

    const handleResize = () => {
      const s = stateRef.current;
      if (!s) return;
      const w = window.innerWidth, h = window.innerHeight;
      s.camera.aspect = w / h;
      s.camera.updateProjectionMatrix();
      s.renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
      if (rendererRef.current) {
        rendererRef.current.dispose();
        rendererRef.current.domElement.remove();
      }
    };
  }, [initScene, tick]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 3,
        pointerEvents: "auto",
        touchAction: "none",
      }}
      onTouchStart={(e) => { e.preventDefault(); handleDown(); }}
      onTouchEnd={(e) => { e.preventDefault(); handleUp(); }}
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      onMouseLeave={handleUp}
    />
  );
}
```

- [ ] 创建 `src/components/ThreeCake.jsx`
- [ ] Commit: `git commit -m "feat: add Three.js WebGL particle cake component"`

---

### Task 5: 修改 Birthday.jsx 替换组件

**Files:**
- Modify: `src/pages/Birthday.jsx`

将 import 和组件引用替换：

```jsx
// 修改前
import CosmicParticleCake from "../components/CosmicParticleCake";
// ...
<CosmicParticleCake />

// 修改后
import ThreeCake from "../components/ThreeCake";
// ...
<ThreeCake />
```

删除所有 `isPortrait` / `guardDismissed` / `showGuard` / LandscapeGuard 相关代码。

Birthday.jsx 最终结构：

```jsx
import ThreeCake from "../components/ThreeCake";

export default function Birthday() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.bgBase} />
      <div style={styles.bgNebula} />
      <div className="cosmic-stars" />
      <ThreeCake />
      {/* <style> 标签保留 cosmic-stars 的样式 */}
    </div>
  );
}

// styles 保持不变（bgBase, bgNebula, wrapper）
```

- [ ] 修改 Birthday.jsx
- [ ] 验证：`npm run build` 无错误
- [ ] Commit: `git commit -m "feat: switch from Canvas to Three.js WebGL cake"`

---

### Task 6: 性能优化 + 手机测试

- [ ] **Step 1: 生产构建测试**

```bash
npm run build
# 复制到 19shi/ 子目录
mkdir -p dist/19shi
cp -r dist/assets dist/19shi/
cp dist/index.html dist/19shi/
# 启动静态服务器
cd dist && python -m http.server 5180 --bind 0.0.0.0
```

- [ ] **Step 2: 手机横屏测试**

手机访问 `http://电脑IP:5180/19shi/`，确认：
- [ ] 低多边形蛋糕可见（能看到八边形棱面）
- [ ] 粒子有发光效果（加法混合）
- [ ] 蛋糕缓慢旋转
- [ ] 飘散粒子向上飘出
- [ ] 触碰后粒子散开，松手后回归
- [ ] 帧率流畅（无卡顿）
- [ ] CSS 背景正常显示

- [ ] **Step 3: 手机竖屏测试**

- [ ] 蛋糕缩小并居中显示
- [ ] 不超出屏幕边界
- [ ] 比例正常（不被拉伸）

- [ ] **Step 4: 如果帧率不足，降级方案**

在 `ThreeCake.jsx` 中降低粒子数量：
```js
const PARTICLE_PER_LAYER = 250 → 150
const FLOATER_COUNT = 60 → 30
```

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: complete Three.js WebGL particle cake with mobile optimization"
```

---

### Task 7: 清理旧文件

确认 Three.js 版本在手机上完全正常后：

- [ ] 删除旧 Canvas 组件：`rm src/components/CosmicParticleCake.jsx`
- [ ] 删除旧 LandscapeGuard：`rm src/components/LandscapeGuard.jsx`
- [ ] `npm run build` 确认无错误
- [ ] Commit: `git commit -m "chore: remove old Canvas particle cake and LandscapeGuard"`

---

## 执行顺序

```
Task 1 (安装) → Task 2 (贴图) → Task 3 (几何体) → Task 4 (组件) → Task 5 (替换) → Task 6 (测试) → Task 7 (清理)
```

**Task 1-3 是基础模块，Task 4 是核心组件，Task 5 是集成，Task 6 是验收。**

---

## 给 Codex 的关键提醒

1. **`alpha: true` + `setClearColor(0x000000, 0)`** — Canvas 必须透明，CSS 背景才能透出来
2. **`flatShading: true`** — 这是低多边形效果的关键，没有它就变成光滑圆柱
3. **`AdditiveBlending`** — 粒子重叠区域自动变亮 = 天然发光，比 Canvas gradient 便宜 100 倍
4. **不要用 UnrealBloomPass** — 手机上太重，emissive + additive 够了
5. **`powerPreference: "high-performance"`** — 告诉浏览器用独立 GPU（如果有的话）
6. **`setPixelRatio(Math.min(dpr, 2))`** — 高分屏限制 DPR 为 2，防止性能爆炸
