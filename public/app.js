// ==================== 粒子背景 ====================
function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  let w, h, particles = [];

  function resize() {
    const rect = canvas.getBoundingClientRect();
    w = canvas.width = rect.width;
    h = canvas.height = rect.height;
  }
  window.addEventListener('resize', resize, { passive: true });
  resize();

  function createParticles(n) {
    particles = [];
    for (let i = 0; i < n; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.8 + 0.6,
        alpha: Math.random() * 0.6 + 0.3
      });
    }
  }
  createParticles(Math.min(120, Math.floor((w * h) / 18000)));

  function draw() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#c5d2ff';

    for (let p of particles) {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }

    // 轻微连线
    ctx.strokeStyle = 'rgba(180,200,255,0.08)';
    ctx.lineWidth = 1;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.globalAlpha = (1 - dist / 120) * 0.35;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;

    requestAnimationFrame(draw);
  }
  draw();
}

// ==================== API Playground（完美模拟后端） ====================
const QUOTES = [
  '每天进步一点点，未来会感谢你。',
  '代码如诗，架构如画。',
  '让你的前端更亮，让你的后端更稳。',
  '用行动部署，用页面展示。',
  '简洁即是美，落地页即是入口。',
  '技术改变世界，细节成就极致。',
  '每一个 commit，都在书写未来。',
  '优雅的代码，是最好的文档。'
];

let lastResponse = null;

function formatJSON(obj) {
  return JSON.stringify(obj, null, 2);
}

function setResponse(data, type = 'success') {
  const panel = document.getElementById('responsePanel');
  const body = document.getElementById('responseBody');
  const badge = document.getElementById('responseBadge');
  const copyBtn = document.getElementById('btnCopy');
  const footer = document.getElementById('responseFooter');

  lastResponse = data;

  body.textContent = formatJSON(data);
  copyBtn.style.display = 'inline-block';

  if (type === 'success') {
    badge.textContent = '成功';
    badge.style.background = 'rgba(74, 222, 128, 0.15)';
    badge.style.color = '#4ade80';
    footer.textContent = `请求时间：${new Date().toLocaleTimeString('zh-CN')} · 模拟响应`;
  } else {
    badge.textContent = '错误';
    badge.style.background = 'rgba(248, 113, 113, 0.15)';
    badge.style.color = '#f87171';
    footer.textContent = '请求失败';
  }
}

function initPlayground() {
  const btnStatus = document.getElementById('btnStatus');
  const btnQuote = document.getElementById('btnQuote');
  const btnReset = document.getElementById('btnReset');
  const btnCopy = document.getElementById('btnCopy');
  const body = document.getElementById('responseBody');

  if (!btnStatus || !btnQuote) return;

  // 状态接口模拟
  btnStatus.addEventListener('click', () => {
    const now = Date.now();
    const data = {
      status: 'ok',
      timestamp: now,
      uptime: (Math.random() * 3600 + 120).toFixed(2),
      message: '后端运行正常',
      version: '1.0.0'
    };
    setResponse(data);
    
    // 添加一点微动画效果
    btnStatus.style.transform = 'scale(0.96)';
    setTimeout(() => btnStatus.style.transform = '', 120);
  });

  // 语录接口模拟
  btnQuote.addEventListener('click', () => {
    const quote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    const data = {
      quote,
      author: '示例语录',
      id: Math.floor(Math.random() * 90000) + 10000,
      timestamp: Date.now()
    };
    setResponse(data);

    btnQuote.style.transform = 'scale(0.96)';
    setTimeout(() => btnQuote.style.transform = '', 120);
  });

  // 重置
  btnReset.addEventListener('click', () => {
    const bodyEl = document.getElementById('responseBody');
    const badge = document.getElementById('responseBadge');
    const copyBtn = document.getElementById('btnCopy');
    const footer = document.getElementById('responseFooter');

    bodyEl.textContent = '// 点击上方按钮发起模拟请求';
    badge.textContent = '等待请求';
    badge.style.background = 'rgba(255,255,255,0.08)';
    badge.style.color = 'var(--muted)';
    copyBtn.style.display = 'none';
    footer.textContent = '';
    lastResponse = null;
  });

  // 复制功能
  btnCopy.addEventListener('click', async () => {
    if (!lastResponse) return;
    try {
      await navigator.clipboard.writeText(formatJSON(lastResponse));
      const originalText = btnCopy.textContent;
      btnCopy.textContent = '已复制!';
      setTimeout(() => {
        btnCopy.textContent = originalText;
      }, 1600);
    } catch (e) {
      // 降级方案
      const textArea = document.createElement('textarea');
      textArea.value = formatJSON(lastResponse);
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      btnCopy.textContent = '已复制!';
      setTimeout(() => btnCopy.textContent = '复制 JSON', 1600);
    }
  });

  // 键盘快捷键支持（S / Q）
  document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 's' && document.activeElement.tagName === 'BODY') {
      e.preventDefault();
      btnStatus.click();
    }
    if (e.key.toLowerCase() === 'q' && document.activeElement.tagName === 'BODY') {
      e.preventDefault();
      btnQuote.click();
    }
  });
}

// 滚动淡入效果
function initScrollReveal() {
  const cards = document.querySelectorAll('.feature-card, .step, .api-card');
  if (!cards.length || !('IntersectionObserver' in window)) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = (index % 4 * 60) + 'ms';
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  cards.forEach(card => {
    card.style.opacity = '0.01';
    card.style.transform = 'translateY(22px)';
    card.style.transition = 'all 0.55s cubic-bezier(0.4, 0, 0.2, 1)';
    io.observe(card);
  });
}

// 启动所有效果
function init() {
  initParticles();
  initPlayground();
  initScrollReveal();
  
  // 欢迎提示
  console.log('%c[001] 炫酷落地页已加载完成', 'color:#6474b5');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
