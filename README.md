# 001

一个通过 GitHub Actions 自动部署的炫酷前端落地页 + 简洁普通后端示例。

## ✨ 特点

- **炫酷视觉落地页**：玻璃态设计 + 动态粒子 + 梦幻渐变 + 完整 API 交互实验室
- **普通后端**：Node.js + Express，包含 `/api/status` 和 `/api/quote` 等基础接口
- **GitHub Pages 自动部署**：推送 main 即自动上线，无需任何服务器

## 项目结构

```
├── public/                 # GitHub Pages 前端（炫酷落地页）
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── backend/                # 普通 Express 后端
│   ├── index.js
│   ├── quotes.js
│   └── package.json
├── .github/workflows/
│   └── pages.yml           # 自动部署工作流
└── README.md
```

## 🚀 快速开始

### 1. 前端部署（GitHub Pages）
直接 push 到 `main` 分支即可，GitHub Actions 会自动部署 `public/` 目录。

### 2. 本地运行后端
```bash
cd backend
npm install
npm start
```

访问：
- `http://localhost:3000/`
- `http://localhost:3000/api/status`
- `http://localhost:3000/api/quote`

## 页面亮点

- 动态粒子背景 + 浮动光球
- 完整可交互的「API 实验室」（模拟真实响应，支持复制）
- 精致玻璃态卡片与微交互
- 完美响应式（桌面/手机均佳）
- 键盘快捷键支持：`S` 获取状态、`Q` 获取语录

## 后端接口

| 方法 | 路径           | 说明                     |
|------|----------------|--------------------------|
| GET  | `/`            | 服务启动提示             |
| GET  | `/api/status`  | 状态、时间戳、uptime     |
| GET  | `/api/quote`   | 随机中文励志语录         |

## 许可

MIT，自由使用与改造。
