const express = require('express');
const quotes = require('./quotes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('后端服务已启动。访问 /api/status 或 /api/quote 获取演示数据。');
});

app.get('/api/status', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: Date.now(),
    uptime: process.uptime()
  });
});

app.get('/api/quote', (req, res) => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({
    quote,
    author: '示例语录'
  });
});

app.use((req, res) => {
  res.status(404).json({ error: 'API endpoint not found' });
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
