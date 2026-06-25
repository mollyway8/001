const fetchButton = document.getElementById('fetchStatus');
const resultBox = document.getElementById('fetchResult');

const updateResult = (text, isError = false) => {
  resultBox.textContent = text;
  resultBox.style.color = isError ? '#ff9aa8' : '#e9f5ff';
};

fetchButton.addEventListener('click', async () => {
  updateResult('正在连接后端…');
  try {
    const response = await fetch('/api/status', { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    updateResult(`状态: ${data.status}\n时间: ${new Date(data.timestamp).toLocaleString()}`);
  } catch (err) {
    updateResult('后端未连接。请在本地启动后端服务：cd backend && npm install && npm start', true);
    console.warn('Fetch failed:', err);
  }
});

const animateHue = () => {
  const hue = Math.floor((Date.now() / 40) % 360);
  document.documentElement.style.setProperty('--accent', `hsl(${hue}, 92%, 68%)`);
  document.documentElement.style.setProperty('--accent-2', `hsl(${(hue + 90) % 360}, 94%, 67%)`);
  requestAnimationFrame(animateHue);
};

animateHue();
