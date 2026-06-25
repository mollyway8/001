# 001

使用 **Vue 3 + Vite + Tailwind** 构建的炫酷静态落地页，通过 GitHub Actions 自动部署到 GitHub Pages。

> 纯静态项目，无需真实后端即可完美运行。所有 API 交互均为前端模拟。

## ✨ 项目亮点

- **极致视觉设计**：动态粒子背景 + 浮动光球 + 玻璃态卡片 + 高级渐变
- **完整 API 实验室**：可交互式调用模拟接口（状态 + 随机语录），支持复制 JSON
- **Vue 3 驱动**：响应式、组件化、现代化开发体验
- **一键部署**：推送 `main` 后自动构建并发布到 GitHub Pages

## 技术栈

- Vue 3 (Composition API)
- Vite 5
- Tailwind CSS
- GitHub Actions + Pages

## 快速开始

```bash
# 克隆
git clone https://github.com/mollyway8/001.git
cd 001

# 安装依赖
npm install

# 本地开发（热更新）
npm run dev

# 构建生产版本
npm run build

# 本地预览构建结果
npm run preview
```

## 部署说明

1. 推送任意代码到 `main` 分支
2. GitHub Actions 自动执行构建并部署
3. 访问：`https://<你的用户名>.github.io/001/`

> 注意：项目页面需要正确设置 `base: '/001/'`（已在 `vite.config.js` 配置）。

## 页面结构

- 炫酷导航 + Hero（粒子效果）
- 特性展示
- **API 实验室**（核心交互）
- 3 步快速开始
- 接口说明

## 模拟接口（前端）

| 方法 | 路径           | 说明                     |
|------|----------------|--------------------------|
| GET  | `/api/status`  | 服务状态 + 时间 + uptime |
| GET  | `/api/quote`   | 随机中文励志语录         |

所有响应在浏览器内生成，无需后端。

## 本地后端（可选）

如需演示真实后端，可使用 `backend/` 目录：

```bash
cd backend
npm install
npm start
```

## License

MIT
