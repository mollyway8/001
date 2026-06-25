# 001

这是一个 GitHub Pages 前端落地页与普通 Node.js 后端示例仓库。

## 项目结构

- `public/`：静态前端页面，已设计为炫酷落地页。
- `backend/`：简单 Express 后端示例，包含健康检查与随机语录接口。
- `.github/workflows/pages.yml`：GitHub Actions 自动将 `public/` 发布到 `gh-pages`。
- `.gitignore`：忽略 node_modules 和日志文件。

## 使用说明

1. 前端页面部署：
   - 推送到 `main` 分支后，GitHub Actions 会自动部署 `public/` 到 `gh-pages` 分支。
2. 本地启动后端：
   ```bash
   cd backend
   npm install
   npm start
   ```
3. 后端接口列表：
   - `GET /`
   - `GET /api/status`
   - `GET /api/quote`

## 说明

该仓库适合作为个人作品展示页、项目启动页或静态落地页模板。前端页面已增强视觉效果，后端示例简单易扩展。
