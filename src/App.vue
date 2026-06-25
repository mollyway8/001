<template>
  <!-- 导航 -->
  <nav class="nav">
    <div class="max-w-6xl mx-auto px-8 flex items-center justify-between h-20">
      <div class="flex items-center gap-3">
        <div class="w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-400 to-cyan-400 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-violet-500/50">001</div>
        <div>
          <div class="font-semibold tracking-tight text-xl">001</div>
          <div class="text-[10px] text-white/50 -mt-1">VUE × PAGES</div>
        </div>
      </div>

      <div class="hidden md:flex items-center gap-x-9 text-sm text-white/70">
        <a href="#features" class="hover:text-white transition-colors">特性</a>
        <a href="#playground" class="hover:text-white transition-colors">API 实验室</a>
        <a href="#quickstart" class="hover:text-white transition-colors">快速开始</a>
        <a href="#api" class="hover:text-white transition-colors">接口</a>
      </div>

      <a 
        href="https://github.com/mollyway8/001" 
        target="_blank"
        class="btn btn-ghost text-sm gap-2 px-5 py-2.5"
      >
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.16 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
        <span class="hidden sm:inline">GitHub</span>
      </a>
    </div>
  </nav>

  <!-- Hero -->
  <header class="relative max-w-6xl mx-auto px-8 pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 -z-10">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
      <div class="bg-grid absolute inset-0"></div>
    </div>

    <div class="grid md:grid-cols-2 gap-12 items-center relative">
      <!-- 左侧文案 -->
      <div class="relative z-10">
        <div class="badge mb-6">GitHub Actions 自动部署</div>
        
        <h1 class="text-6xl md:text-7xl font-bold tracking-tighter leading-[0.92] mb-6">
          极致炫酷的<br>
          <span class="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">Vue 落地页</span>
        </h1>
        
        <p class="max-w-md text-xl text-white/70 mb-9">
          使用 Vue 3 + Vite 打造现代视觉体验。<br>
          纯静态部署在 GitHub Pages，无需后端。
        </p>

        <div class="flex flex-wrap gap-4">
          <a href="#playground" class="btn btn-primary px-9 text-base">进入 API 实验室</a>
          <a href="#quickstart" class="btn btn-ghost px-8 text-base">快速开始</a>
        </div>

        <div class="flex gap-x-8 text-sm text-white/50 mt-10">
          <div class="flex items-center gap-2">
            <span class="inline-block w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
            零成本部署
          </div>
          <div>纯前端模拟后端</div>
          <div>极致响应式</div>
        </div>
      </div>

      <!-- 右侧视觉面板 -->
      <div class="relative z-10">
        <div class="glass rounded-3xl p-8 md:p-10 border-white/10">
          <div class="flex justify-between items-start mb-8">
            <div>
              <div class="flex items-center gap-2">
                <div class="status-dot"></div>
                <span class="text-emerald-400 font-medium text-sm tracking-wider">已上线</span>
              </div>
              <div class="text-4xl font-semibold tracking-tight mt-2">001 Studio</div>
            </div>
            <div class="text-right text-xs text-white/40 font-mono">v3.4.21</div>
          </div>

          <div class="text-white/60 mb-8">Vue 3 · Vite · Tailwind · GitHub Pages</div>

          <div class="grid grid-cols-3 gap-3">
            <div class="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <div class="text-2xl font-semibold text-white">99.9%</div>
              <div class="text-xs text-white/50 mt-0.5">可用性</div>
            </div>
            <div class="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <div class="text-2xl font-semibold text-white">&lt; 45s</div>
              <div class="text-xs text-white/50 mt-0.5">部署耗时</div>
            </div>
            <div class="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <div class="text-2xl font-semibold text-white">∞</div>
              <div class="text-xs text-white/50 mt-0.5">免费流量</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 粒子画布 -->
    <canvas ref="particlesCanvas" class="particles"></canvas>
  </header>

  <!-- 特性区 -->
  <section id="features" class="max-w-6xl mx-auto px-8 pb-20">
    <div class="flex justify-between items-end mb-10">
      <div>
        <div class="uppercase tracking-[3px] text-xs text-cyan-400 mb-2">WHY 001</div>
        <h2 class="text-4xl font-semibold tracking-tight">科技感与现代感并存</h2>
      </div>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      <div class="feature-card" v-for="f in features" :key="f.icon">
        <div class="text-3xl mb-6">{{ f.icon }}</div>
        <h3 class="text-xl font-semibold mb-3">{{ f.title }}</h3>
        <p class="text-white/65 leading-relaxed">{{ f.desc }}</p>
      </div>
    </div>
  </section>

  <!-- API 实验室（核心亮点） -->
  <section id="playground" class="max-w-6xl mx-auto px-8 py-16 border-y border-white/10 bg-black/20">
    <div class="max-w-3xl mx-auto text-center mb-12">
      <div class="badge mb-4">INTERACTIVE DEMO</div>
      <h2 class="text-5xl font-bold tracking-tighter">API 实验室</h2>
      <p class="mt-4 text-xl text-white/70">点击按钮实时体验接口响应，纯前端模拟。支持复制结果。</p>
    </div>

    <div class="max-w-[860px] mx-auto">
      <!-- 控制按钮 -->
      <div class="flex flex-wrap justify-center gap-3 mb-8">
        <button @click="fetchStatus" class="btn btn-primary px-10 py-5 text-base">
          获取状态<br>
          <span class="text-xs opacity-75 font-normal">GET /api/status</span>
        </button>
        <button @click="fetchQuote" class="btn btn-accent px-10 py-5 text-base">
          随机语录<br>
          <span class="text-xs opacity-90 font-normal">GET /api/quote</span>
        </button>
        <button @click="resetResponse" class="btn btn-ghost px-6 py-5">重置</button>
      </div>

      <!-- 响应区 -->
      <div class="response-panel">
        <div class="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
          <div class="flex items-center gap-3">
            <span class="font-medium">响应结果</span>
            <span 
              class="text-xs px-3 py-px rounded-full border"
              :class="response.badgeClass"
            >
              {{ response.status }}
            </span>
          </div>
          <button 
            v-if="response.data" 
            @click="copyResponse"
            class="text-xs px-4 py-1 rounded-lg bg-white/10 hover:bg-white/15 transition active:bg-white/20"
          >
            复制 JSON
          </button>
        </div>

        <pre class="response-body">{{ responseText }}</pre>

        <div class="px-6 py-3.5 text-xs border-t border-white/10 text-white/40 font-mono flex justify-between">
          <div>{{ response.footer }}</div>
          <div v-if="response.data">Vue 3 响应式 · 模拟</div>
        </div>
      </div>

      <!-- 调用历史 -->
      <div v-if="history.length" class="mt-6">
        <div class="flex items-center justify-between mb-3 px-1">
          <div class="text-xs uppercase tracking-widest text-white/40">最近调用记录</div>
          <button @click="clearHistory" class="text-xs text-white/40 hover:text-white/70">清空</button>
        </div>
        <div class="space-y-2">
          <div 
            v-for="(item, idx) in history" 
            :key="idx"
            @click="loadHistoryItem(item)"
            class="glass flex items-center justify-between px-4 py-3 rounded-2xl text-sm cursor-pointer hover:border-white/25 active:bg-white/5 transition-colors"
          >
            <div class="flex items-center gap-3">
              <span class="font-mono text-xs px-2.5 py-px rounded bg-white/10">{{ item.type }}</span>
              <span class="text-white/80">{{ item.preview }}</span>
            </div>
            <span class="text-xs text-white/40 font-mono">{{ item.time }}</span>
          </div>
        </div>
      </div>

      <div class="text-center mt-5 text-sm text-white/45">
        本地运行后端可获得真实数据：<span class="font-mono text-white/60">cd backend && npm install && npm start</span>
      </div>
    </div>
  </section>

  <!-- 快速开始 -->
  <section id="quickstart" class="max-w-6xl mx-auto px-8 pt-20 pb-16">
    <div class="mb-10">
      <div class="uppercase tracking-[3px] text-xs text-cyan-400 mb-2">3 STEPS</div>
      <h2 class="text-4xl font-semibold tracking-tight">快速开始</h2>
    </div>

    <div class="grid md:grid-cols-3 gap-5">
      <div class="step" v-for="(step, index) in steps" :key="index">
        <div class="text-3xl font-semibold text-cyan-400/90 tabular-nums w-9">{{ String(index + 1).padStart(2, '0') }}</div>
        <div class="flex-1">
          <h4 class="font-semibold text-xl mb-3">{{ step.title }}</h4>
          <div class="text-white/70 text-[15px] leading-relaxed whitespace-pre-line">{{ step.desc }}</div>
          <pre v-if="step.code" class="mt-4 bg-black/60 text-white/80 text-xs p-4 rounded-xl overflow-auto border border-white/10"><code>{{ step.code }}</code></pre>
        </div>
      </div>
    </div>
  </section>

  <!-- 接口文档 -->
  <section id="api" class="max-w-6xl mx-auto px-8 pb-20">
    <div class="mb-8">
      <div class="uppercase tracking-[3px] text-xs text-cyan-400 mb-2">BACKEND SIMULATION</div>
      <h2 class="text-4xl font-semibold tracking-tight">模拟后端接口</h2>
    </div>

    <div class="grid md:grid-cols-3 gap-5">
      <div class="api-card" v-for="api in apis" :key="api.path">
        <div class="uppercase text-[10px] tracking-widest mb-2 text-emerald-400/80">{{ api.method }}</div>
        <div class="font-mono text-xl mb-2">{{ api.path }}</div>
        <p class="text-white/65">{{ api.desc }}</p>
      </div>
    </div>
  </section>

  <footer class="border-t border-white/10 py-12">
    <div class="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between text-sm text-white/50 gap-y-3">
      <div>用 Vue 3 + GitHub Pages 构建 · 免费且酷炫</div>
      <div class="flex gap-x-4">
        <a href="https://github.com/mollyway8/001" class="hover:text-white">仓库</a>
        <a href="https://vuejs.org" target="_blank" class="hover:text-white">Vue 文档</a>
        <a href="https://docs.github.com/zh/pages" target="_blank" class="hover:text-white">Pages 文档</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

// ==================== 粒子背景 ====================
const particlesCanvas = ref(null)
let particles = []

function initParticles() {
  const canvas = particlesCanvas.value
  if (!canvas) return

  const ctx = canvas.getContext('2d', { alpha: true })
  let w = 0, h = 0

  function resize() {
    const rect = canvas.getBoundingClientRect()
    w = canvas.width = rect.width
    h = canvas.height = rect.height
  }
  window.addEventListener('resize', resize, { passive: true })
  resize()

  function create(n) {
    particles = []
    for (let i = 0; i < n; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h * 0.85,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.7 + 0.6,
        a: Math.random() * 0.55 + 0.25
      })
    }
  }
  create(110)

  function draw() {
    ctx.clearRect(0, 0, w, h)
    ctx.fillStyle = '#a5b4fc'

    for (let p of particles) {
      p.x += p.vx
      p.y += p.vy
      if (p.x < 0 || p.x > w) p.vx *= -1
      if (p.y < 0 || p.y > h * 0.9) p.vy *= -1

      ctx.globalAlpha = p.a
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fill()
    }

    // 细线连接
    ctx.strokeStyle = 'rgba(165, 180, 252, 0.1)'
    ctx.lineWidth = 1
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j]
        const d = Math.hypot(a.x - b.x, a.y - b.y)
        if (d < 110) {
          ctx.globalAlpha = (1 - d / 110) * 0.3
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }
    }
    ctx.globalAlpha = 1
    requestAnimationFrame(draw)
  }
  draw()
}

// ==================== 模拟数据 & Playground ====================
const QUOTES = [
  '每天进步一点点，未来会感谢你。',
  '代码如诗，架构如画。',
  '让你的前端更亮，让你的后端更稳。',
  '用行动部署，用页面展示。',
  '简洁即是美，落地页即是入口。',
  '技术改变世界，细节成就极致。',
  '每一个 commit，都在书写未来。',
  '优雅的代码，是最好的文档。'
]

const response = ref({
  status: '等待请求',
  data: null,
  footer: '点击上方按钮体验',
  badgeClass: 'border-white/20 text-white/60'
})

const history = ref([])

const responseText = computed(() => {
  if (!response.value.data) {
    return '// 点击「获取状态」或「随机语录」发起请求\n// 纯前端模拟，零依赖后端'
  }
  return JSON.stringify(response.value.data, null, 2)
})

function setResponse(data, isSuccess = true) {
  response.value.data = data
  response.value.status = isSuccess ? '200 OK' : 'ERROR'
  response.value.footer = `请求时间：${new Date().toLocaleTimeString('zh-CN')} · 模拟响应`
  response.value.badgeClass = isSuccess 
    ? 'border-emerald-400/40 text-emerald-400 bg-emerald-400/10' 
    : 'border-red-400/40 text-red-400'

  // 添加到调用历史
  const type = data.quote ? 'QUOTE' : 'STATUS'
  const preview = data.quote 
    ? data.quote.slice(0, 22) + (data.quote.length > 22 ? '...' : '')
    : `uptime: ${data.uptime}s`

  history.value.unshift({
    type,
    preview,
    time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    data: JSON.parse(JSON.stringify(data))
  })

  // 只保留最近 5 条
  if (history.value.length > 5) history.value.pop()
}

function loadHistoryItem(item) {
  response.value.data = item.data
  response.value.status = '200 OK'
  response.value.footer = `从历史加载 · ${item.time}`
  response.value.badgeClass = 'border-emerald-400/40 text-emerald-400 bg-emerald-400/10'
}

function clearHistory() {
  history.value = []
}

function fetchStatus() {
  const now = Date.now()
  const data = {
    status: 'ok',
    timestamp: now,
    uptime: (Math.random() * 4800 + 320).toFixed(2),
    message: 'Vue 前端模拟服务运行正常',
    version: '3.4.21',
    env: 'github-pages'
  }
  setResponse(data, true)
}

function fetchQuote() {
  const quote = QUOTES[Math.floor(Math.random() * QUOTES.length)]
  const data = {
    quote,
    author: '示例语录',
    id: Math.floor(Math.random() * 88000) + 12000,
    timestamp: Date.now(),
    source: 'local-mock'
  }
  setResponse(data, true)
}

function resetResponse() {
  response.value = {
    status: '等待请求',
    data: null,
    footer: '点击上方按钮体验',
    badgeClass: 'border-white/20 text-white/60'
  }
}

async function copyResponse() {
  if (!response.value.data) return
  const text = JSON.stringify(response.value.data, null, 2)
  try {
    await navigator.clipboard.writeText(text)
    const original = response.value.footer
    response.value.footer = '已复制到剪贴板 ✓'
    setTimeout(() => {
      if (response.value.footer.includes('已复制')) {
        response.value.footer = original
      }
    }, 1800)
  } catch (e) {
    alert('复制失败，请手动复制')
  }
}

// ==================== 静态数据 ====================
const features = [
  { icon: '✨', title: '梦幻视觉', desc: '动态粒子 + 多层光球 + 玻璃态设计，带来高级沉浸体验。' },
  { icon: '⚡', title: '极速部署', desc: '推送代码后 GitHub Actions 自动构建并发布到 Pages。' },
  { icon: '🧩', title: '响应式实验室', desc: '完整的 API Playground，模拟后端接口，纯前端实现。' },
  { icon: '📱', title: '完美适配', desc: '手机、平板、桌面完美布局，过渡流畅自然。' }
]

const steps = [
  {
    title: '克隆仓库',
    desc: '获取最新代码到本地',
    code: 'git clone https://github.com/mollyway8/001.git\ncd 001\nnpm install'
  },
  {
    title: '本地开发',
    desc: '启动 Vite 开发服务器，实时热更新',
    code: 'npm run dev'
  },
  {
    title: '自动部署',
    desc: '推送到 main 分支，Actions 自动上线',
    code: 'git push origin main'
  }
]

const apis = [
  { method: 'GET', path: '/api/status', desc: '返回服务状态、时间戳和运行时长' },
  { method: 'GET', path: '/api/quote', desc: '随机返回一条中文励志语录' },
  { method: '模拟', path: '纯前端', desc: '所有响应均在浏览器内即时生成，无网络请求' }
]

// 生命周期
onMounted(() => {
  initParticles()
})
</script>
