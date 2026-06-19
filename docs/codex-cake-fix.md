# 蛋糕模型修正方案 — Codex 执行文档

## 目标效果

参考图特征（必须全部实现）：
- 两层低多边形蛋糕，暖金色/琥珀色为主色调
- 从右上方打光，受光面明亮温暖，背光面偏深蓝紫色
- 粒子密集，构成清晰的几何棱面（能看出八边形的每个面）
- 顶部有一根蜡烛 + 金色火焰
- 蛋糕周围有散落的白色星点装饰
- 深色宇宙背景
- 稍微俯视角度（能看到一点顶面）
- 蛋糕居中显示

---

## 修改 0：强制横屏（必须第一个做，做不好后面全白搭）

**问题：** 手机竖屏时 viewport 是 390×844，所有内容在竖长框里渲染。蛋糕虽然 3D 是对的，但画面比例是竖的。

**方案：CSS transform 旋转 90°。** 竖屏时把整个页面顺时针旋转 90°，物理上变成横屏画面。这是最可靠的方案，不依赖任何浏览器 API。

**文件：** `src/pages/Birthday.jsx`

```jsx
import { useState, useEffect } from "react";
import ThreeCake from "../components/ThreeCake";

export default function Birthday() {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const check = () => setIsPortrait(window.innerHeight > window.innerWidth);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div style={{
      position: "fixed",
      // 竖屏：旋转 90°，宽高互换
      width: isPortrait ? "100vh" : "100vw",
      height: isPortrait ? "100vw" : "100vh",
      top: isPortrait ? "calc((100vh - 100vw) / 2)" : 0,
      left: isPortrait ? "calc((100vw - 100vh) / 2)" : 0,
      transform: isPortrait ? "rotate(90deg)" : "none",
      transformOrigin: "center center",
      overflow: "hidden",
      background: "#06060F",
      zIndex: 9999,
    }}>
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: "radial-gradient(ellipse at 50% 45%, #12082a 0%, #0a0618 35%, #06060F 100%)",
      }} />
      <div style={{
        position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
        background: [
          "radial-gradient(circle at 30% 35%, rgba(168,85,247,0.10) 0%, transparent 70%)",
          "radial-gradient(circle at 70% 60%, rgba(56,189,248,0.08) 0%, transparent 50%)",
          "radial-gradient(circle at 50% 15%, rgba(236,72,153,0.06) 0%, transparent 40%)",
        ].join(","),
      }} />
      <div className="cosmic-stars" />
      <ThreeCake isPortrait={isPortrait} />
    </div>
  );
}
```

**ThreeCake.jsx 也需要适配：**

收到 `isPortrait` prop 后，内部始终按横屏尺寸渲染：

```jsx
export default function ThreeCake({ isPortrait }) {
  // ...
  const initScene = useCallback(() => {
    // 不管手机方向，始终用横屏尺寸
    const w = isPortrait ? window.innerHeight : window.innerWidth;
    const h = isPortrait ? window.innerWidth : window.innerHeight;

    renderer.setSize(w, h);
    const camera = new THREE.PerspectiveCamera(40, w / h, 10, 2000);
    // ...

    // Canvas 样式填满容器（容器已经被 CSS 旋转成横屏了）
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
  }, [isPortrait]);

  // resize handler 也要用同样的逻辑
  const handleResize = () => {
    const w = isPortrait ? window.innerHeight : window.innerWidth;
    const h = isPortrait ? window.innerWidth : window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  };
}
```

**验证：** 手机竖着拿，画面是横的（需要歪头看）。手机横着拿，画面正常。两种方向蛋糕都居中。

---

## 修改 1：修复蛋糕位置偏移

**文件：** `src/components/ThreeCake.jsx`

```js
// Canvas 必须是 block 元素，不能有默认的 inline 间隙
renderer.domElement.style.display = "block";
renderer.domElement.style.position = "absolute";
renderer.domElement.style.top = "0";
renderer.domElement.style.left = "0";
```

容器 div 必须是 `position: relative` 或 `fixed`，`overflow: hidden`。

---

## 修改 2：颜色方案 — 暖金色 + 深蓝紫背光

**文件：** `src/lib/cakeGeometry.js` → `sampleMeshSurface`

```js
// 替换颜色计算
const ny = Math.max(0, fn.y);
const nx = Math.max(0, fn.x);
const light = 0.3 + ny * 0.4 + nx * 0.3;
colors[i * 3] = light;
colors[i * 3 + 1] = light;
colors[i * 3 + 2] = light;
```

**文件：** `src/components/ThreeCake.jsx`

```js
const colorArr = particleGeom.attributes.color.array;
const posArr = particleGeom.attributes.position.array;
for (let i = 0; i < total; i++) {
  const l = colorArr[i * 3];
  const y = posArr[i * 3 + 1];
  if (y < 0) {
    colorArr[i * 3]     = 0.18 + l * 0.78;  // R: 深紫→金色
    colorArr[i * 3 + 1] = 0.11 + l * 0.66;  // G
    colorArr[i * 3 + 2] = 0.41 - l * 0.15;  // B: 背光偏蓝紫
  } else {
    colorArr[i * 3]     = 0.24 + l * 0.76;  // R
    colorArr[i * 3 + 1] = 0.15 + l * 0.70;  // G
    colorArr[i * 3 + 2] = 0.47 - l * 0.07;  // B
  }
}
particleGeom.attributes.color.needsUpdate = true;
```

---

## 修改 3：粒子密度 + 大小 + 混合模式

**文件：** `src/lib/cakeGeometry.js`

```js
const botCount = 400;
const topCount = 250;
const capCount = 100;
```

**文件：** `src/components/ThreeCake.jsx`

```js
size: 2.5,
blending: THREE.NormalBlending,
opacity: 0.92,
```

---

## 修改 4：三光源

**文件：** `src/components/ThreeCake.jsx`

```js
scene.add(new THREE.AmbientLight(0x1a1040, 0.4));
const dir = new THREE.DirectionalLight(0xfff0dd, 1.5);
dir.position.set(1, 1.5, 0.5);
scene.add(dir);
const fill = new THREE.DirectionalLight(0x6644aa, 0.3);
fill.position.set(-1, -0.5, 0);
scene.add(fill);
```

---

## 修改 5：蜡烛 + 火焰

**文件：** `src/lib/cakeGeometry.js` → `generateCakeParticles` 末尾

```js
const candleBaseY = layerGap + hTop / 2;
const candleH = hTop * 0.6;
for (let i = 0; i < 30; i++) {
  const a = Math.random() * Math.PI * 2;
  const r = rTop * 0.05;
  allCoords.push(Math.cos(a) * r, candleBaseY + Math.random() * candleH, Math.sin(a) * r);
  allColors.push(1.0, 0.85, 0.2);
}
const flameY = candleBaseY + candleH;
for (let i = 0; i < 15; i++) {
  const a = Math.random() * Math.PI * 2;
  const r = rTop * 0.03;
  allCoords.push(Math.cos(a) * r, flameY + Math.random() * candleH * 0.4, Math.sin(a) * r);
  allColors.push(1.0, 0.55 + Math.random() * 0.35, Math.random() * 0.1);
}
```

火焰闪烁（tick 中）：

```js
for (let i = total - 15; i < total; i++) {
  posArr[i * 3 + 1] += Math.sin(elapsed * 10 + i * 2) * 1.5;
  posArr[i * 3]     += Math.cos(elapsed * 8 + i) * 0.5;
}
```

---

## 修改 6：星点装饰

**文件：** `src/components/ThreeCake.jsx`

```js
const starCount = 40;
const starPos = new Float32Array(starCount * 3);
const starCol = new Float32Array(starCount * 3);
for (let i = 0; i < starCount; i++) {
  const a = Math.random() * Math.PI * 2;
  const r = 150 + Math.random() * 200;
  starPos[i * 3] = Math.cos(a) * r;
  starPos[i * 3 + 1] = (Math.random() - 0.5) * 250;
  starPos[i * 3 + 2] = Math.sin(a) * r;
  starCol[i * 3] = 1; starCol[i * 3 + 1] = 0.95; starCol[i * 3 + 2] = 0.85;
}
const starGeom = new THREE.BufferGeometry();
starGeom.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
starGeom.setAttribute("color", new THREE.BufferAttribute(starCol, 3));
const starMat = new THREE.PointsMaterial({
  size: 2, map: glowTex, blending: THREE.AdditiveBlending,
  depthWrite: false, vertexColors: true, transparent: true, opacity: 0.7,
});
scene.add(new THREE.Points(starGeom, starMat)); // 不加入 cakeGroup
```

---

## 修改 7：删除半透明参考 Mesh

删除 `makePrismMesh` 和 `botMesh`、`topMesh`。

---

## 修改 8：相机俯视角度

```js
camera.position.set(0, 200, 550);
camera.lookAt(0, 0, 0);
```

---

## 执行顺序

```
0 (强制横屏) → 1 (位置) → 2 (颜色) → 3 (粒子) → 4 (光照) → 5 (蜡烛) → 6 (星点) → 7 (清理) → 8 (相机)
```

**修改 0 必须第一个做。** 横屏效果做好了再做后面的。

## 验证标准

- [ ] 手机竖拿：画面自动旋转为横屏，蛋糕居中
- [ ] 手机横拿：画面正常，蛋糕居中
- [ ] 暖金色蛋糕，有明暗面
- [ ] 两层 + 蜡烛 + 火焰 + 星点
- [ ] 点击散开，松手回归
- [ ] 帧率流畅
