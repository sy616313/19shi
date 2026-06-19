# Cosmic Particle Cake — 视觉改造实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将现有暖金色低多边形粒子蛋糕改造为青紫宇宙配色，优化手机横屏体验，添加粒子发光、局部触碰散开等效果。

**Architecture:** 修改现有 `CosmicParticleCake.jsx` 的配色函数和粒子参数，添加背景图到 `public/`，调整触碰交互为局部散开。不引入新依赖，保持单 Canvas 层架构。

**Tech Stack:** React 19, Vite, HTML5 Canvas 2D

---

## Global Constraints

- 目标设备：**手机横屏优先**（16:9 ~ 20:9），兼容竖屏和平板
- 触摸交互必须使用 `touchAction: "none"` + `e.preventDefault()` 防止浏览器默认滚动/缩放
- Canvas 的 `devicePixelRatio` 最大为 2，防止高分屏性能爆炸
- `prefers-reduced-motion` 下停用动画，仅静态展示蛋糕
- 所有粒子总数控制在 ~1500 以内，FPS < 45 时自动降级
- 不引入任何新 npm 依赖

---

## File Structure

```
修改:
  src/components/CosmicParticleCake.jsx   ← 核心：配色、粒子大小、触碰、飘散、发光
  src/pages/Birthday.jsx                  ← 背景图路径确认、移除无效 overlay
  src/index.css                           ← 确保 viewport meta、安全区
  index.html                              ← 添加 viewport meta（如缺失）

新增:
  public/cosmic-bg.webp                   ← 宇宙星云背景图（用户提供）
```

---

### Task 1: 手机端基础保障

**目标：** 确保页面在手机端不被缩放、不被地址栏遮挡、触摸不触发浏览器手势。

**Files:**
- Modify: `index.html`
- Modify: `src/index.css`

- [ ] **Step 1: 确认 viewport meta 标签**

打开 `index.html`，确认 `<head>` 中有：
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
```
如果没有 `maximum-scale=1.0, user-scalable=no, viewport-fit=cover`，补上。

- [ ] **Step 2: 确认 CSS 全局禁用触摸行为和选中**

确认 `src/index.css` 包含：
```css
html, body, #root {
  width: 100%;
  height: 100%;
  height: 100dvh; /* 动态视口高度，解决手机地址栏遮挡 */
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: #06060F;
  touch-action: none;        /* 禁止浏览器默认触摸手势 */
  -webkit-user-select: none; /* 禁止长按选中 */
  user-select: none;
  -webkit-tap-highlight-color: transparent; /* 去除点击高亮 */
}
```
注意：`height: 100dvh` 比 `100vh` 更可靠——在手机浏览器中，`100vh` 会包含被地址栏遮挡的区域，`100dvh` 是实际可见区域。

- [ ] **Step 3: 确认 fullscreen wrapper 使用 dvh**

确认 `Birthday.jsx` 的 wrapper style 使用 `height: "100dvh"` 或由 CSS 继承（不要在 inline style 中覆盖 height）。

- [ ] **Step 4: 在手机浏览器中手动测试**

打开 Chrome DevTools → 切换到手机模拟（iPhone 14 Pro, 横屏），确认：
- 页面全屏无白边
- 触摸不触发页面滚动或缩放
- 地址栏收起后页面不跳动

- [ ] **Step 5: Commit**
```bash
git add index.html src/index.css src/pages/Birthday.jsx
git commit -m "fix: ensure mobile viewport uses dvh and disables default touch behaviors"
```

---

### Task 2: 背景图部署

**目标：** 将宇宙星云背景图放入 `public/`，确认 Birthday.jsx 正确加载。

**Files:**
- Create: `public/cosmic-bg.webp`（用户提供的宇宙星云图）
- Modify: `src/pages/Birthday.jsx`

- [ ] **Step 1: 复制背景图到 public/**

将用户提供的宇宙星云图片复制到 `public/cosmic-bg.webp`。

如果是 JPG 格式，先转换为 WebP（Vite 不会自动转换 `public/` 中的文件）：
```bash
# 如果有 cwebp 工具：
cwebp -q 80 cosmic-bg.jpg -o public/cosmic-bg.webp
# 否则直接放 JPG 并改代码中的路径为 .jpg
```

确认文件存在于 `public/cosmic-bg.webp`。

- [ ] **Step 2: 确认 Birthday.jsx 背景图路径**

`Birthday.jsx` 第 4 行已定义：
```js
const COSMIC_BG = "/19shi/cosmic-bg.webp";
```
Vite 构建时 `public/` 目录下的文件会被复制到输出根目录，配合 `vite.config.js` 中的 `base: "/19shi/"`，路径 `/19shi/cosmic-bg.webp` 是正确的。

如果背景图是 JPG，改为：
```js
const COSMIC_BG = "/19shi/cosmic-bg.jpg";
```

- [ ] **Step 3: 移除无效的 touch overlay div**

`Birthday.jsx` 中有一个无效的 overlay div（`pointerEvents: "none"`，不捕获任何事件）。移除它，因为 Canvas 自己已经处理了触摸事件：
```jsx
// 删除这行：
<div style={styles.overlay} />
// 以及 styles.overlay 定义
```

- [ ] **Step 4: 验证**

`npm run dev`，在手机模拟器中确认：
- 背景图正确加载并铺满全屏
- 无拉伸变形（`object-fit: cover` 正常工作）
- 渐变 fallback 在图片加载前显示

- [ ] **Step 5: Commit**
```bash
git add public/cosmic-bg.webp src/pages/Birthday.jsx
git commit -m "feat: add cosmic background image and remove dead overlay"
```

---

### Task 3: 配色改造 — 暖金 → 青紫宇宙

**目标：** 将蛋糕粒子颜色从暖金色系改为青紫宇宙色系。

**Files:**
- Modify: `src/components/CosmicParticleCake.jsx`

- [ ] **Step 1: 替换配色函数**

找到第 62-68 行的配色函数，替换为：

```js
// ─── Cosmic cyan/purple palette ───
function cakeColor(v, layer) {
  const t = clamp(v, 0, 1);
  if (layer === 'top') {
    // 受光面 #67E8F9 → 背光面 #7C3AED
    return [
      Math.round(lerp(103, 124, t)),   // R
      Math.round(lerp(232, 58, t)),    // G
      Math.round(lerp(249, 237, t)),   // B
    ];
  }
  // 底层：受光面 #7DD3FC → 背光面 #6D28D9
  return [
    Math.round(lerp(125, 104, t)),     // R
    Math.round(lerp(211, 40, t)),      // G
    Math.round(lerp(252, 217, t)),     // B
  ];
}
function edgeColor() { return [200, 230, 255]; }   // 淡蓝白棱边
function topColor()  { return [160, 210, 255]; }   // 天蓝顶面
function floaterColor() { return [240, 171, 252]; } // 粉紫飘散粒子 #F0ABFC
```

- [ ] **Step 2: 更新 genParticles 中的调用**

在 `genParticles` 函数中，找到所有 `cakeColor(Math.random())` 调用，加上 layer 参数：

```js
// 侧面粒子（在 addFace 函数内）
color: isEdge ? edgeColor() : cakeColor(Math.random(), topLayer ? 'top' : 'bottom'),

// 内部粒子（同上）
color: cakeColor(Math.random(), topLayer ? 'top' : 'bottom'),
```

- [ ] **Step 3: 更新飘散粒子颜色**

在 `spawnFloater` 函数中，将 `color: p.color` 改为使用专属飘散颜色：
```js
color: floaterColor(),
```

- [ ] **Step 4: 视觉验证**

`npm run dev`，确认：
- 蛋糕顶层偏亮青色，底层偏天蓝色
- 背光面明显变暗（深紫色）
- 棱边有淡蓝白高光
- 飘散粒子是粉紫色，和蛋糕主体色有区分

- [ ] **Step 5: Commit**
```bash
git add src/components/CosmicParticleCake.jsx
git commit -m "feat: change cake color palette from warm gold to cosmic cyan/purple"
```

---

### Task 4: 粒子尺寸缩小 + 发光效果

**目标：** 粒子更精致（1.5-3px），每个粒子带发光光晕。

**Files:**
- Modify: `src/components/CosmicParticleCake.jsx`

- [ ] **Step 1: 缩小粒子尺寸**

在 `genParticles` 函数中修改粒子半径：

```js
// 侧面网格粒子（原来 rnd(2, isEdge ? 3.8 : 3)）
r: rnd(1.5, isEdge ? 2.8 : 2.5),

// 内部粒子（原来 rnd(1.5, 2.8)）
r: rnd(1.2, 2.2),

// 顶面粒子（原来 rnd(1.8, 3.5)）
r: rnd(1.5, 2.8),

// 飘散粒子（原来 rnd(1, 2.5)）
r: rnd(0.8, 2.0),
```

- [ ] **Step 2: 优化发光渲染**

当前的 glow halo 用 `createRadialGradient` 实现，性能很好。调整参数让它更明显：

在渲染循环（`tick` 函数的蛋糕粒子绘制部分），修改 glow halo 的参数：
```js
// Glow halo（原来 gr = pr * 2.8）
const gr = pr * 3.5;  // 光晕更大
const grad = ctx.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, gr);
grad.addColorStop(0, `rgba(${p.color[0]},${p.color[1]},${p.color[2]},${alpha * 0.65})`);  // 原来 0.55
grad.addColorStop(0.4, `rgba(${p.color[0]},${p.color[1]},${p.color[2]},${alpha * 0.15})`); // 原来 0.12
grad.addColorStop(1, "rgba(0,0,0,0)");
```

注意：**不要使用 `ctx.shadowBlur`**。`shadowBlur` 在 Canvas 2D 中非常昂贵（每粒子一次 blur 计算），1500 个粒子会导致严重卡顿。当前的 radial gradient glow 方案是正确的选择，只需调大参数。

- [ ] **Step 3: 视觉验证**

确认粒子更精细，光晕更明显但不过度（不应看到明显的圆形光斑）。

- [ ] **Step 4: Commit**
```bash
git add src/components/CosmicParticleCake.jsx
git commit -m "feat: reduce particle size and enhance glow halos"
```

---

### Task 5: 触碰交互 — 全量爆炸 → 局部散开

**目标：** 触摸只影响触摸点 150px 范围内的粒子，其余粒子不受影响。

**Files:**
- Modify: `src/components/CosmicParticleCake.jsx`

- [ ] **Step 1: 添加触碰半径常量**

在文件顶部常量区添加：
```js
const TOUCH_RADIUS = 150; // px — 触碰影响半径
```

- [ ] **Step 2: 重写散开逻辑**

在 `tick` 函数中，找到散开偏移计算部分（约第 260-278 行），替换为局部散开逻辑：

```js
// ─── Update cake particle offsets (局部散开) ───
const sp = s.scatterProgress;
const tx = s.touchX * s.dpr, ty = s.touchY * s.dpr;

for (const p of s.cakeParticles) {
  // 计算粒子到触摸点的屏幕距离
  const screenDist = Math.sqrt(
    (p.sx - tx) * (p.sx - tx) + (p.sy - ty) * (p.sy - ty)
  );

  if (sp > 0.005 && screenDist < TOUCH_RADIUS * s.dpr) {
    // 在影响范围内：向外散开
    const dx = p.sx - tx, dy = p.sy - ty;
    const dist = screenDist || 1;
    const nx = dx / dist, ny = dy / dist;
    const falloff = 1 - screenDist / (TOUCH_RADIUS * s.dpr); // 近处更强烈
    const scatterDist = SCATTER_FACTOR * Math.max(s.rBot, s.rTop) * sp * falloff;
    const arcUp = sp * 60 * Math.sin(sp * Math.PI) * falloff;
    p.ox = lerp(p.ox, nx * scatterDist, 0.2);
    p.oy = lerp(p.oy, ny * scatterDist - arcUp, 0.2);
    p.oz = lerp(p.oz, (Math.random() - 0.5) * scatterDist * 0.4, 0.2);
  } else {
    // 不在影响范围内或未触碰：回归原位（带阻尼）
    const damp = 0.82;
    p.ox = lerp(p.ox, 0, 0.18) * damp;
    p.oy = lerp(p.oy, 0, 0.18) * damp;
    p.oz = lerp(p.oz, 0, 0.18) * damp;
  }
}
```

- [ ] **Step 3: 触碰位置坐标系修正**

确保触摸坐标和粒子坐标在同一坐标系中。当前 `onDown` 接收的是 CSS 像素坐标（`clientX/clientY`），而粒子投影坐标使用了 DPR。在 `tick` 中用 `s.touchX * s.dpr` 转换。

同时确保 `onDown` / `onMove` 不做 DPR 转换（它们存储的是原始 CSS 像素）：
```js
const onDown = useCallback((cx, cy) => {
  const s = state.current;
  s.touching = true;
  s.touchX = cx;  // CSS pixels
  s.touchY = cy;
  s.scatterTarget = 1;
}, []);
```
这部分当前代码已经是正确的，无需修改。

- [ ] **Step 4: 视觉验证**

在手机模拟器中：
- 触摸蛋糕中心区域 → 只有周围粒子散开，远处粒子不动
- 触摸蛋糕边缘 → 只有边缘粒子散开
- 触摸蛋糕外部 → 无反应
- 松手 → 粒子回归

- [ ] **Step 5: Commit**
```bash
git add src/components/CosmicParticleCake.jsx
git commit -m "feat: change touch interaction from full explosion to local scatter"
```

---

### Task 6: 飘散粒子节奏优化

**目标：** 飘散粒子从"高频密集"改为"低频优雅"，更符合宇宙氛围。

**Files:**
- Modify: `src/components/CosmicParticleCake.jsx`

- [ ] **Step 1: 修改飘散粒子参数**

```js
// 原值
const MAX_FLOATERS = 300;
const FLOATER_SPAWN_RATE = 20;      // 每秒20个
const FLOATER_MIN_LIFE = 2;
const FLOATER_MAX_LIFE = 4;

// 改为
const MAX_FLOATERS = 150;
const FLOATER_BATCH_INTERVAL = [1.5, 2.5]; // 每1.5~2.5秒一批
const FLOATER_BATCH_SIZE = [2, 5];          // 每批2~5个
const FLOATER_MIN_LIFE = 3;
const FLOATER_MAX_LIFE = 5;
```

- [ ] **Step 2: 重写飘散生成逻辑**

在 `tick` 函数中替换飘散生成部分：

```js
// ─── Floaters（批次生成模式）───
if (!reducedMotion) {
  // 更新飘散粒子
  for (let i = s.floaters.length - 1; i >= 0; i--) {
    const f = s.floaters[i];
    f.life += dt;
    f.x += (f.vx + Math.sin(s.elapsed * f.sf + f.sp) * f.sa * 0.35) * dt;
    f.y += f.vy * dt;
    f.opacity = Math.max(0, 1 - f.life / f.maxLife);
    if (f.life >= f.maxLife) s.floaters.splice(i, 1);
  }

  // 批次计时器
  s.floaterSpawnAccum = (s.floaterSpawnAccum || 0) + dt;
  if (!s.nextFloaterBatch) {
    s.nextFloaterBatch = rnd(FLOATER_BATCH_INTERVAL[0], FLOATER_BATCH_INTERVAL[1]);
  }
  if (s.floaterSpawnAccum >= s.nextFloaterBatch && s.floaters.length < MAX_FLOATERS) {
    s.floaterSpawnAccum = 0;
    s.nextFloaterBatch = rnd(FLOATER_BATCH_INTERVAL[0], FLOATER_BATCH_INTERVAL[1]);
    const count = Math.floor(rnd(FLOATER_BATCH_SIZE[0], FLOATER_BATCH_SIZE[1]));
    for (let i = 0; i < count && s.floaters.length < MAX_FLOATERS; i++) {
      const f = spawnFloater(s);
      if (f) s.floaters.push(f);
    }
  }
}
```

- [ ] **Step 3: 调慢飘散粒子速度**

在 `spawnFloater` 函数中，修改垂直速度：
```js
// 原来
vy: -rnd(25, 55),
// 改为
vy: -rnd(18, 35),  // 更慢更优雅
```

- [ ] **Step 4: 视觉验证**

确认飘散粒子更稀疏、更慢，有"星尘缓缓飘散"的感觉，而不是密集的粒子流。

- [ ] **Step 5: Commit**
```bash
git add src/components/CosmicParticleCake.jsx
git commit -m "feat: slow down floater particles to elegant batch rhythm"
```

---

### Task 7: 层间浮游粒子

**目标：** 在蛋糕两层之间的 12px 间隙中加入 20-30 个淡紫浮游粒子。

**Files:**
- Modify: `src/components/CosmicParticleCake.jsx`

- [ ] **Step 1: 添加层间粒子生成**

在 `genParticles` 函数末尾，`return parts;` 之前，添加层间粒子生成：

```js
// ─── 层间浮游粒子 ───
const gapY = anchorY; // 两层交界处
const gapParticles = 25;
for (let i = 0; i < gapParticles; i++) {
  const angle = rnd(0, Math.PI * 2);
  const rr = rnd(rTop * 0.5, rBot * 0.85);
  parts.push({
    hx: rr * Math.cos(angle) + rnd(-5, 5),
    hy: gapY + rnd(-6, 6),
    hz: rr * Math.sin(angle) + rnd(-5, 5),
    ox: 0, oy: 0, oz: 0,
    r: rnd(1.0, 2.0),
    color: [233, 213, 255], // #E9D5FF 淡紫
    bp: rnd(0, Math.PI * 2),
    bT: rnd(2, 3.5),
    fi: -1, fma: 0, cap: true, tl: false,
    isGap: true, // 标记为层间粒子
  });
}
```

- [ ] **Step 2: 层间粒子独立呼吸**

层间粒子（`isGap: true`）使用更大的呼吸幅度（±25%），让它们有更明显的闪烁感：

在渲染循环中，修改呼吸计算：
```js
const breathAmp = p.isGap ? 0.25 : BREATH_AMPLITUDE;
bright *= 1 + breathAmp * Math.sin(s.elapsed * (2 * Math.PI) / p.bT + p.bp);
```

- [ ] **Step 3: 层间粒子半透明**

层间粒子使用更低的基础透明度（0.5），让它们看起来更"虚幻"：
```js
const baseAlpha = p.isGap ? 0.5 : 1;
const alpha = clamp(fb2 * fadeAlpha * pulse * baseAlpha, 0, 1);
```

- [ ] **Step 4: 视觉验证**

确认两层间隙中有淡紫色小粒子缓慢闪烁，不喧宾夺主但填补了空隙。

- [ ] **Step 5: Commit**
```bash
git add src/components/CosmicParticleCake.jsx
git commit -m "feat: add inter-layer gap particles with enhanced breathing"
```

---

### Task 8: 聚合回归弧线路径

**目标：** 粒子回归时不走直线，而是带弧度过冲回弹。

**Files:**
- Modify: `src/components/CosmicParticleCake.jsx`

- [ ] **Step 1: 修改回归逻辑**

在 Task 5 中已经重写了散开逻辑，回归部分在 `else` 分支。当前回归是直线 `lerp` 到原位。改为弧线：

```js
} else {
  // 回归原位（弧线路径 + ease-out-back）
  const returnProgress = 1 - s.scatterProgress; // 1→0 表示散开→回归

  // 计算弧线中间点：法线方向偏移
  const homeX = 0, homeY = 0, homeZ = 0; // 原始偏移是 0
  const midX = p.ox * 0.5;
  const midY = p.oy * 0.5 + 20; // 向下偏移 20px 形成弧线
  const midZ = p.oz * 0.5;

  // ease-out-back: 先快后慢，带微小过冲
  const t = clamp(1 - returnProgress, 0, 1);
  const easeT = 1 - Math.pow(1 - t, 3); // ease-out cubic
  const overshoot = Math.sin(t * Math.PI) * 8; // 过冲

  const damp = 0.85;
  p.ox = lerp(p.ox, homeX + midX * (1 - easeT) + overshoot, 0.15) * damp;
  p.oy = lerp(p.oy, homeY + midY * (1 - easeT) + overshoot, 0.15) * damp;
  p.oz = lerp(p.oz, homeZ, 0.15) * damp;
}
```

注意：这段代码替换 Task 5 中 `else` 分支的回归逻辑。实际实现时需要和 Task 5 的散开逻辑合并到一起。

- [ ] **Step 2: 能量脉冲优化**

在 `onUp` 回调中，确保能量脉冲只在完全回归后触发：

```js
const onUp = useCallback(() => {
  const s = state.current;
  s.touching = false;
  s.scatterTarget = 0;
  // 延迟触发脉冲，等粒子快回来时再闪
  setTimeout(() => { s.energyPulse = 1; }, RETURN_DURATION * 0.6);
}, []);
```

- [ ] **Step 3: 视觉验证**

触摸散开 → 松手 → 粒子带弧度回归 → 快到位时同步闪烁一次。

- [ ] **Step 4: Commit**
```bash
git add src/components/CosmicParticleCake.jsx
git commit -m "feat: add curved return path with ease-out-back and delayed energy pulse"
```

---

### Task 9: 最终集成验证

**目标：** 在真机或高保真模拟器上做完整流程验证。

**Files:**
- 无文件修改，纯验证

- [ ] **Step 1: 构建生产版本**

```bash
npm run build
```

确认无错误、无警告。

- [ ] **Step 2: 本地预览**

```bash
npm run preview
```

在 Chrome DevTools 手机模拟（iPhone 14 Pro 横屏）中验证全部功能。

- [ ] **Step 3: 检查清单**

逐项确认：
- [ ] 手机横屏全屏显示，无白边
- [ ] 宇宙星云背景图铺满，无拉伸
- [ ] 两层八边形棱柱蛋糕居中，青紫配色
- [ ] 蛋糕缓慢旋转（12秒/周），光照随旋转变化
- [ ] 粒子呼吸闪烁，各粒子相位不同
- [ ] 飘散粒子从蛋糕表面缓慢飘出（粉紫色），带正弦摆动
- [ ] 层间淡紫浮游粒子闪烁
- [ ] 触摸蛋糕区域 → 局部粒子散开
- [ ] 松手 → 粒子弧线回归 → 能量脉冲闪烁
- [ ] 触摸蛋糕外部 → 无反应
- [ ] 帧率 ≥ 45fps（在 iPhone 12 及以上）
- [ ] `prefers-reduced-motion` 下动画停止

- [ ] **Step 4: 最终 Commit**
```bash
git add -A
git commit -m "chore: final integration verification for cosmic cake visual overhaul"
```

---

## 实现顺序

建议 Codex 按以下顺序执行，每个 Task 完成后验证再进入下一个：

```
Task 1 (手机基础) → Task 2 (背景图) → Task 3 (配色) → Task 4 (尺寸+发光)
    → Task 5 (局部触碰) → Task 6 (飘散节奏) → Task 7 (层间粒子) → Task 8 (弧线回归) → Task 9 (验证)
```

**Task 1 和 2 是基础设施，必须先做。** Task 3-4 是视觉核心。Task 5-8 是交互细节。Task 9 是验收。

---

## 不在范围内

与设计文档一致：
- ❌ 蜡烛 + 火焰交互
- ❌ 纸屑爆发（Confetti）
- ❌ 电影胶卷（VerticalFilm）
- ❌ 侧边栏导航
- ❌ 其他页面（/mood, /games, /letter）
- ❌ 背景音乐
- ❌ 任何文字内容
