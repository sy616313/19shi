# Cosmic Cake 横屏重设计

> 创建：2026-06-19
> 状态：设计完成，待实现

---

## 一、问题总结

| # | 问题 | 根因 |
|---|------|------|
| 1 | 手机竖屏时蛋糕位置偏下，构图崩坏 | 蛋糕锚点用 `42% vh`，竖屏 vh 远大于 vw，蛋糕被推到底部 |
| 2 | 静态背景图（截图）看起来突兀 | 截图分辨率/色调与粒子蛋糕不统一，静态图缺乏层次感 |
| 3 | 没有强制横屏提示 | 缺少 orientation 检测和引导 |
| 4 | 粒子蛋糕在竖屏下太大 | 用 vw 算半径，竖屏 vw=屏幕短边，蛋糕占满宽度 |

---

## 二、新设计：三个核心改动

### 改动 1：CSS 宇宙背景（替代静态图）

移除 `<img>` 背景，改用纯 CSS 生成宇宙氛围：

```
层级结构：
┌─────────────────────────────────┐
│  z-0  深色渐变底色               │  radial-gradient
│  z-1  星云光晕 (2-3团)           │  radial-gradient + filter:blur
│  z-2  CSS 星空 (~80颗星)         │  box-shadow 星点 + twinkle 动画
│  z-3  粒子蛋糕 Canvas            │  现有 CosmicParticleCake
└─────────────────────────────────┘
```

**底色渐变：**
```css
background: radial-gradient(
  ellipse at 50% 45%,
  #12082a 0%,     /* 深紫中心 */
  #0a0618 35%,
  #06060F 100%    /* 接近纯黑边缘 */
);
```

**星云光晕（3 团）：**
```css
/* 粉紫星云 — 蛋糕左上方 */
background: radial-gradient(circle at 30% 35%,
  rgba(168, 85, 247, 0.08) 0%,
  rgba(168, 85, 247, 0.02) 40%,
  transparent 70%
);

/* 青蓝星云 — 蛋糕右下方 */
background: radial-gradient(circle at 70% 60%,
  rgba(56, 189, 248, 0.06) 0%,
  transparent 50%
);

/* 暖粉星云 — 顶部 */
background: radial-gradient(circle at 50% 15%,
  rgba(236, 72, 153, 0.05) 0%,
  transparent 40%
);
```

**CSS 星空：**
```css
/* 用 box-shadow 生成 ~80 颗随机星点 */
.stars::after {
  content: '';
  position: absolute;
  width: 1px; height: 1px;
  background: white;
  box-shadow:
    120px 80px 0 0.5px rgba(255,255,255,0.8),
    340px 200px 0 0.3px rgba(255,255,255,0.6),
    /* ... 80 个坐标 */;
  animation: twinkle 4s ease-in-out infinite alternate;
}
```

**优势：**
- 零网络请求，首屏秒出
- 和粒子蛋糕同色系，视觉统一
- 体积 ~0.5KB CSS vs 3.4MB PNG
- 星云光晕柔和不抢焦点

---

### 改动 2：强制横屏 + 竖屏引导

**策略：CSS `orientation` 查询 + JS Screen Orientation API**

```
横屏 (landscape)：
  → 正常显示全部内容

竖屏 (portrait)：
  → 显示全屏遮罩，提示用户旋转手机
  → 遮罩：半透明深色背景 + 旋转手机 SVG 动画 + "请横屏体验" 文字
  → 如果用户拒绝旋转，蛋糕仍可用但缩小到 60% 并居中
```

**JS 实现：**
```js
// 尝试锁定横屏（仅全屏模式下有效）
if (screen.orientation?.lock) {
  screen.orientation.lock('landscape').catch(() => {});
}

// 监听方向变化
const mql = window.matchMedia('(orientation: portrait)');
// portrait → 显示提示, landscape → 隐藏提示
```

**竖屏提示遮罩设计：**
```
┌────────────────────┐
│                    │
│                    │
│      🔄            │  ← 旋转手机 SVG 图标
│    旋转手机         │     缓慢旋转动画
│   以获得最佳体验    │
│                    │
│   (轻触跳过)        │  ← 点击后关闭遮罩，显示缩小版蛋糕
│                    │
└────────────────────┘
```

---

### 改动 3：蛋糕定位重做

**问题根因：** 当前蛋糕半径用 `vw` 百分比，锚点用 `vh` 百分比。竖屏时 vw 小 vh 大，蛋糕太宽且位置偏下。

**新方案：以短边为基准**

```js
// 核心尺寸变量
const shortSide = Math.min(window.innerWidth, window.innerHeight);
const longSide = Math.max(window.innerWidth, window.innerHeight);

// 蛋糕半径以短边的百分比计算（横屏短边=高，竖屏短边=宽）
const R_BOTTOM = shortSide * 0.22;  // 底层半径
const R_TOP = shortSide * 0.16;     // 顶层半径

// 蛋糕高度以短边的百分比计算
const H_BOTTOM = shortSide * 0.15;
const H_TOP = shortSide * 0.12;

// 锚点：画布中心（不是百分比，而是绝对居中）
const cakeCenterX = window.innerWidth / 2;
const cakeCenterY = window.innerHeight / 2;
```

**效果：**
- 横屏：蛋糕约占屏幕高度 55%，居中，留白充足
- 竖屏（如果用户跳过提示）：蛋糕约占屏幕宽度 55%，居中偏上，不会撑满

---

## 三、文件变更

| 文件 | 操作 | 内容 |
|------|------|------|
| `src/pages/Birthday.jsx` | **重写** | CSS 背景 + 横屏检测 + 蛋糕容器 |
| `src/components/CosmicParticleCake.jsx` | **修改** | 尺寸计算改用 shortSide 基准 |
| `src/components/LandscapeGuard.jsx` | **新建** | 竖屏提示遮罩组件 |
| `public/cosmic-bg.png` | **删除** | 不再需要 |

---

## 四、验收标准

- [ ] 手机横屏：CSS 宇宙背景柔和铺满，蛋糕居中，视觉统一
- [ ] 手机竖屏：显示"请横屏"提示，旋转手机后自动进入正常模式
- [ ] 竖屏点击"跳过"：蛋糕缩小居中显示，不崩坏
- [ ] 无静态图片依赖，零网络请求加载背景
- [ ] 蛋糕在 16:9 和 20:9 两种横屏比例下都比例正确
- [ ] `prefers-reduced-motion` 下星云不闪烁
