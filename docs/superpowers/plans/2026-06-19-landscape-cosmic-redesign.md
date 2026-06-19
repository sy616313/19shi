# Cosmic Cake 横屏重设计 — 实现计划

> **For agentic workers:** Use this plan to implement the cosmic cake landscape redesign.

**Goal:** 移除静态背景图，改用 CSS 宇宙背景；强制横屏体验；修复蛋糕在竖屏下的定位崩坏。

**Architecture:** Birthday.jsx 负责 CSS 背景和横屏检测，新建 LandscapeGuard 处理竖屏提示，CosmicParticleCake 改用短边基准计算尺寸。

---

## Global Constraints

- 不引入新 npm 依赖
- 保持 React 19 + Vite + Canvas 2D 架构
- 手机横屏优先，竖屏降级但不崩坏
- CSS 背景用纯 CSS 实现（无图片、无 Canvas 额外开销）
- `prefers-reduced-motion` 下停止闪烁动画

---

### Task 1: 新建 LandscapeGuard 竖屏提示组件

**Files:**
- Create: `src/components/LandscapeGuard.jsx`

- [ ] **Step 1: 创建组件**

```jsx
import { useState, useEffect } from "react";

export default function LandscapeGuard({ children }) {
  const [isPortrait, setIsPortrait] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(orientation: portrait)");
    setIsPortrait(mql.matches);
    const handler = (e) => setIsPortrait(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  // 尝试锁定横屏（全屏模式下有效，非全屏静默失败）
  useEffect(() => {
    if (screen.orientation?.lock) {
      screen.orientation.lock("landscape").catch(() => {});
    }
  }, []);

  const showGuard = isPortrait && !dismissed;

  return (
    <>
      {children}
      {showGuard && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
            background: "rgba(6, 6, 15, 0.92)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        >
          {/* 旋转图标 SVG */}
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            style={{ animation: "rotateHint 2.5s ease-in-out infinite" }}
          >
            <rect
              x="22"
              y="12"
              width="36"
              height="56"
              rx="6"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="2.5"
              fill="none"
            />
            <path
              d="M58 40 C58 28, 48 18, 36 18"
              stroke="rgba(167,139,250,0.9)"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <polygon
              points="58,32 66,40 58,48"
              fill="rgba(167,139,250,0.9)"
            />
          </svg>

          <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, fontWeight: 500 }}>
            请旋转手机以获得最佳体验
          </div>

          <button
            onClick={() => setDismissed(true)}
            style={{
              marginTop: 16,
              padding: "8px 24px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 20,
              color: "rgba(255,255,255,0.6)",
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            轻触跳过
          </button>
        </div>
      )}

      {/* 旋转动画 keyframes */}
      <style>{`
        @keyframes rotateHint {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(90deg); }
        }
      `}</style>
    </>
  );
}
```

- [ ] **Step 2: 验证**

在手机竖屏打开，确认：
- 显示半透明遮罩 + 旋转手机图标 + 文字
- 旋转手机到横屏 → 遮罩自动消失
- 点击"轻触跳过" → 遮罩消失

- [ ] **Step 3: Commit**
```bash
git add src/components/LandscapeGuard.jsx
git commit -m "feat: add landscape guard with portrait rotation prompt"
```

---

### Task 2: 重写 Birthday.jsx — CSS 宇宙背景 + 横屏包装

**Files:**
- Modify: `src/pages/Birthday.jsx`

- [ ] **Step 1: 完整重写 Birthday.jsx**

```jsx
import CosmicParticleCake from "../components/CosmicParticleCake";
import LandscapeGuard from "../components/LandscapeGuard";

export default function Birthday() {
  return (
    <LandscapeGuard>
      <div style={styles.wrapper}>
        {/* CSS 宇宙背景 — 3 层叠加 */}
        <div style={styles.bgBase} />
        <div style={styles.bgNebula} />
        <div style={styles.bgStars} />

        {/* 粒子蛋糕 */}
        <CosmicParticleCake />
      </div>
    </LandscapeGuard>
  );
}

const styles = {
  wrapper: {
    position: "fixed",
    inset: 0,
    overflow: "hidden",
  },
  // 第 1 层：深色渐变底
  bgBase: {
    position: "absolute",
    inset: 0,
    background: `
      radial-gradient(ellipse at 50% 45%, #12082a 0%, #0a0618 35%, #06060F 100%)
    `,
    zIndex: 0,
  },
  // 第 2 层：星云光晕
  bgNebula: {
    position: "absolute",
    inset: 0,
    background: `
      radial-gradient(circle at 30% 35%, rgba(168,85,247,0.08) 0%, rgba(168,85,247,0.02) 40%, transparent 70%),
      radial-gradient(circle at 70% 60%, rgba(56,189,248,0.06) 0%, transparent 50%),
      radial-gradient(circle at 50% 15%, rgba(236,72,153,0.05) 0%, transparent 40%)
    `,
    zIndex: 1,
    pointerEvents: "none",
  },
  // 第 3 层：CSS 星空
  bgStars: {
    position: "absolute",
    inset: 0,
    zIndex: 2,
    pointerEvents: "none",
    // 星点通过 ::after 伪元素实现（见下方 <style>）
  },
};
```

- [ ] **Step 2: 在 Birthday.jsx 末尾添加星点样式**

在 `Birthday` 组件的 return 中，`</LandscapeGuard>` 之前添加 `<style>` 标签：

```jsx
<style>{`
  .cosmic-stars {
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none;
  }
  .cosmic-stars::after {
    content: '';
    position: absolute;
    width: 1px;
    height: 1px;
    border-radius: 50%;
    background: transparent;
    box-shadow:
      12vw 8vh 0 0.5px rgba(255,255,255,0.8),
      34vw 15vh 0 0.3px rgba(255,255,255,0.5),
      56vw 5vh 0 0.6px rgba(255,255,255,0.7),
      78vw 22vh 0 0.4px rgba(255,255,255,0.6),
      8vw 30vh 0 0.3px rgba(255,255,255,0.4),
      92vw 12vh 0 0.5px rgba(255,255,255,0.7),
      45vw 28vh 0 0.4px rgba(255,255,255,0.5),
      67vw 35vh 0 0.3px rgba(255,255,255,0.6),
      15vw 45vh 0 0.5px rgba(255,255,255,0.4),
      82vw 42vh 0 0.6px rgba(255,255,255,0.7),
      23vw 55vh 0 0.3px rgba(255,255,255,0.5),
      51vw 48vh 0 0.4px rgba(255,255,255,0.6),
      73vw 58vh 0 0.5px rgba(255,255,255,0.4),
      5vw 65vh 0 0.3px rgba(255,255,255,0.7),
      38vw 72vh 0 0.6px rgba(255,255,255,0.5),
      62vw 68vh 0 0.4px rgba(255,255,255,0.6),
      88vw 75vh 0 0.3px rgba(255,255,255,0.4),
      17vw 82vh 0 0.5px rgba(255,255,255,0.7),
      48vw 88vh 0 0.4px rgba(255,255,255,0.5),
      71vw 85vh 0 0.6px rgba(255,255,255,0.6),
      3vw 92vh 0 0.3px rgba(255,255,255,0.4),
      95vw 8vh 0 0.5px rgba(255,255,255,0.7),
      28vw 38vh 0 0.4px rgba(255,255,255,0.5),
      55vw 62vh 0 0.3px rgba(255,255,255,0.6),
      80vw 30vh 0 0.5px rgba(255,255,255,0.4),
      10vw 52vh 0 0.6px rgba(255,255,255,0.7),
      42vw 18vh 0 0.3px rgba(255,255,255,0.5),
      65vw 82vh 0 0.4px rgba(255,255,255,0.6),
      90vw 55vh 0 0.5px rgba(255,255,255,0.4),
      20vw 70vh 0 0.6px rgba(255,255,255,0.7),
      53vw 3vh 0 0.3px rgba(255,255,255,0.5),
      76vw 48vh 0 0.4px rgba(255,255,255,0.6),
      32vw 90vh 0 0.5px rgba(255,255,255,0.4),
      60vw 25vh 0 0.3px rgba(255,255,255,0.7),
      85vw 70vh 0 0.6px rgba(255,255,255,0.5),
      12vw 15vh 0 0.4px rgba(255,255,255,0.6),
      40vw 55vh 0 0.5px rgba(255,255,255,0.4),
      68vw 10vh 0 0.3px rgba(255,255,255,0.7),
      93vw 38vh 0 0.4px rgba(255,255,255,0.5),
      25vw 25vh 0 0.6px rgba(255,255,255,0.6);
    animation: starTwinkle 5s ease-in-out infinite alternate;
  }
  @keyframes starTwinkle {
    0% { opacity: 0.6; }
    100% { opacity: 1; }
  }
  @media (prefers-reduced-motion: reduce) {
    .cosmic-stars::after { animation: none; opacity: 0.8; }
  }
`}</style>
```

同时将 `bgStars` div 改为使用 className：
```jsx
<div className="cosmic-stars" />
```

- [ ] **Step 3: 删除旧的背景图引用**

确认 `Birthday.jsx` 中不再引用 `cosmic-bg.png` 或 `cosmic-bg.webp`。移除 `bgLoaded` 状态和相关的 `<img>` 标签。

- [ ] **Step 4: 验证**

`npm run dev`，在浏览器中确认：
- 无网络图片请求（DevTools Network 面板）
- 深色渐变 + 星云光晕 + 闪烁星点可见
- 视觉层次：底色 → 星云 → 星点 → 蛋糕

- [ ] **Step 5: Commit**
```bash
git add src/pages/Birthday.jsx
git commit -m "feat: replace static bg image with CSS cosmic background + landscape guard"
```

---

### Task 3: CosmicParticleCake 尺寸基准改造

**Files:**
- Modify: `src/components/CosmicParticleCake.jsx`

- [ ] **Step 1: 修改尺寸常量为比例值**

在文件顶部，将 viewport-ratio 常量改为 short-side-ratio：

```js
// 蛋糕尺寸（基于短边的比例）
const R_BOTTOM_RATIO = 0.22;  // 底层半径 = 短边 × 0.22
const R_TOP_RATIO = 0.16;     // 顶层半径 = 短边 × 0.16
const H_BOTTOM_RATIO = 0.15;  // 底层高度 = 短边 × 0.15
const H_TOP_RATIO = 0.12;     // 顶层高度 = 短边 × 0.12
const ANCHOR_Y_CENTER = true; // 锚点 = 画布正中心
```

删除旧的 `R_BOTTOM`、`R_TOP`、`H_BOTTOM`、`H_TOP`、`ANCHOR_Y` 常量。

- [ ] **Step 2: 修改 resize 函数**

```js
const resize = useCallback(() => {
  const canvas = canvasRef.current;
  if (!canvas) return;
  const s = state.current;
  const dpr = Math.min(window.devicePixelRatio || 1, DPR_MAX);
  const w = window.innerWidth, h = window.innerHeight;
  const shortSide = Math.min(w, h);

  canvas.width = w * dpr;
  canvas.height = h * dpr;
  canvas.style.width = w + "px";
  canvas.style.height = h + "px";

  s.W = w * dpr;
  s.H = h * dpr;
  s.dpr = dpr;
  s.cx = s.W / 2;
  s.cy = s.H / 2;
  s.cakeCX = w / 2;
  s.cakeCY = h / 2;  // 正中心，不再是 42%

  // 基于短边计算尺寸
  s.rBot = shortSide * R_BOTTOM_RATIO;
  s.rTop = shortSide * R_TOP_RATIO;
  s.hBot = shortSide * H_BOTTOM_RATIO;
  s.hTop = shortSide * H_TOP_RATIO;

  s.scale = 1; // 不再需要 computeScale，尺寸已基于短边
  s.cakeParticles = genParticles(w, h);
  s.nextFloaterBatch = rnd(FLOATER_BATCH_INTERVAL_MIN, FLOATER_BATCH_INTERVAL_MAX);
}, [genParticles]);
```

- [ ] **Step 3: 修改 genParticles 使用新变量**

在 `genParticles` 函数中，修改尺寸来源：

```js
const genParticles = useCallback((w, h) => {
  const shortSide = Math.min(w, h);
  const rBot = shortSide * R_BOTTOM_RATIO;
  const rTop = shortSide * R_TOP_RATIO;
  const hBot = shortSide * H_BOTTOM_RATIO;
  const hTop = shortSide * H_TOP_RATIO;
  const anchorY = h / 2;  // 画布正中心
  // ... 其余不变
}, []);
```

- [ ] **Step 4: 删除 computeScale 函数**

`computeScale` 函数不再需要，删除它。

- [ ] **Step 5: 验证**

横屏和竖屏下分别检查：
- 横屏：蛋糕约占屏幕高度 55%，居中
- 竖屏：蛋糕约占屏幕宽度 55%，居中
- 旋转设备时蛋糕自动重新定位

- [ ] **Step 6: Commit**
```bash
git add src/components/CosmicParticleCake.jsx
git commit -m "refactor: use short-side-based sizing for proper portrait/landscape scaling"
```

---

### Task 4: 清理旧文件 + 最终验证

**Files:**
- Delete: `public/cosmic-bg.png`

- [ ] **Step 1: 删除旧背景图**

```bash
rm public/cosmic-bg.png
```

- [ ] **Step 2: 生产构建验证**

```bash
npm run build
```

确认无错误。

- [ ] **Step 3: 手机横屏完整验证**

在手机浏览器（横屏模式）中确认：
- [ ] CSS 宇宙背景柔和铺满
- [ ] 星点缓慢闪烁
- [ ] 星云光晕可见但不抢焦点
- [ ] 蛋糕居中，比例正确
- [ ] 触碰散开/回归正常
- [ ] 飘散粒子正常

- [ ] **Step 4: 手机竖屏验证**

- [ ] 显示"请旋转手机"提示
- [ ] 旋转到横屏 → 提示消失
- [ ] 点击"跳过" → 蛋糕缩小居中显示

- [ ] **Step 5: Commit**
```bash
git add -A
git commit -m "chore: remove static bg image, final landscape cosmic cake verification"
```

---

## 执行顺序

```
Task 1 (LandscapeGuard) → Task 2 (Birthday CSS背景) → Task 3 (蛋糕尺寸改造) → Task 4 (清理+验证)
```
