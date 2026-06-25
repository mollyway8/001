# 后端示例

这是一个普通的 Node.js Express 后端示例，可与静态 GitHub Pages 前端配合演示。

## 启动

```bash
cd backend
npm install
npm start
```

## API

- `GET /` - 后端启动提示
- `GET /api/status` - 返回服务健康状态和时间戳
- `GET /api/quote` - 返回随机励志语录

## 本地调试

在浏览器打开 `http://localhost:3000/api/status` 查看 JSON 响应。
