// ============================================================
// APPS DATA (JSON centralizado)
// ============================================================
const APPS = [
  // GOOGLE
  { name: "Gmail",           desc: "Email do Google",         url: "https://mail.google.com",          icon: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico",                                                                    category: "google", tags: ["email","google","work"] },
  { name: "Google Drive",    desc: "Arquivos na nuvem",       url: "https://drive.google.com",         icon: "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png",                                                  category: "google", tags: ["cloud","storage","google"] },
  { name: "Google Docs",     desc: "Editor de textos online", url: "https://docs.google.com",          icon: "https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico",                                                            category: "google", tags: ["docs","text","google","work"] },
  { name: "Google Sheets",   desc: "Planilhas na web",        url: "https://sheets.google.com",        icon: "https://ssl.gstatic.com/docs/spreadsheets/favicon3.ico",                                                                    category: "google", tags: ["sheets","planilha","google","work"] },
  { name: "Google Forms",    desc: "Formulários e pesquisas", url: "https://forms.google.com",         icon: "https://ssl.gstatic.com/docs/forms/device_home/android_192.png",                                                            category: "google", tags: ["forms","pesquisa","google"] },
  { name: "Google Slides",   desc: "Apresentações",           url: "https://slides.google.com",        icon: "https://ssl.gstatic.com/docs/presentations/images/favicon5.ico",                                                            category: "google", tags: ["slides","apresentacao","google"] },
  { name: "Google Classroom",desc: "Turmas e salas",          url: "https://classroom.google.com",     icon: "https://ssl.gstatic.com/classroom/favicon.png",                                                                             category: "google", tags: ["classroom","aula","google","edu"] },
  { name: "Google Sites",    desc: "Criação de sites",        url: "https://sites.google.com",         icon: "https://ssl.gstatic.com/sites/p/3168b8/system/app/images/favicon.ico",                                                     category: "google", tags: ["sites","web","google"] },
  { name: "Google Calendar", desc: "Agenda e eventos",        url: "https://calendar.google.com",      icon: "https://calendar.google.com/googlecalendar/images/favicon_v2018_256.png",                                                   category: "google", tags: ["calendar","agenda","google"] },
  { name: "Google Meet",     desc: "Reuniões por vídeo",      url: "https://meet.google.com",          icon: "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png",               category: "google", tags: ["meet","video","reuniao","google"] },
  { name: "Google Translate",desc: "Tradução",                url: "https://translate.google.com",     icon: "https://ssl.gstatic.com/translate/favicon.ico",                                                                             category: "google", tags: ["translate","traducao","google"] },
  { name: "Google Photos",   desc: "Fotos e álbuns",          url: "https://photos.google.com",        icon: "https://ssl.gstatic.com/photos/silhouette/favicon.ico",                                                                     category: "google", tags: ["photos","fotos","google"] },
  { name: "Google Tasks",    desc: "Tarefas integradas",      url: "https://tasks.google.com",         icon: "https://ssl.gstatic.com/tasks/favicon.ico",                                                                                 category: "google", tags: ["tasks","tarefas","google"] },
  { name: "Google Earth",    desc: "Mapas 3D",                url: "https://earth.google.com",         icon: "https://earth.google.com/favicon.ico",                                                                                      category: "google", tags: ["earth","mapa","google"] },
  { name: "Google Maps",     desc: "Navegação e mapas",       url: "https://maps.google.com",          icon: "https://maps.gstatic.com/mapfiles/maps_lite/pwa/icons/maps15_bnuw3a_round_192x192.png",                                     category: "google", tags: ["maps","mapa","navegacao","google"] },
  { name: "Google Looker",   desc: "Gestão e análise de dados",url: "https://lookerstudio.google.com", icon: "https://www.gstatic.com/analytics-suite/header/software/intl/1x/looker_studio_64dp.png",                                   category: "google", tags: ["looker","dados","analytics","google"] },
  // SOCIAL
  { name: "YouTube",         desc: "Vídeos",                  url: "https://www.youtube.com",          icon: "https://www.youtube.com/favicon.ico",                                                                                       category: "social", tags: ["youtube","video","social"] },
  { name: "Instagram",       desc: "Rede social",             url: "https://www.instagram.com",        icon: "https://static.cdninstagram.com/rsrc.php/v3/yI/r/VsNE-OHk_8a.png",                                                         category: "social", tags: ["instagram","social","foto"] },
  // DEV
  { name: "GitHub",          desc: "Hospedagem de código-fonte",url: "https://github.com",             icon: "https://github.com/favicon.ico",                                                                                            category: "dev",    tags: ["github","code","dev","git"] },
  // IA
  { name: "Notebook LLM",    desc: "Anotações com IA",        url: "https://notebooklm.google.com",   icon: "https://notebooklm.google.com/favicon.ico",                                                                                 category: "ia",     tags: ["ia","llm","notebook","google","ai"] },
  // OUTROS
  { name: "Canva",           desc: "Designer",                url: "https://www.canva.com",            icon: "https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c14f.svg",                                                  category: "outros", tags: ["canva","design","arte"] },
  { name: "Opal",            desc: "Full streak",             url: "https://www.opal.so",              icon: "https://www.opal.so/favicon.ico",                                                                                           category: "outros", tags: ["opal","focus","produtividade"] },
];

// ============================================================
// COSMOS CANVAS
// ============================================================
const canvas = document.getElementById('cosmosCanvas');
const ctx = canvas.getContext('2d');

let W = canvas.width  = window.innerWidth;
let H = canvas.height = window.innerHeight;

// Criação do canvas da trilha de forma limpa
const trailCanvas = document.createElement('canvas');
trailCanvas.style.cssText = 'position:fixed;inset:0;z-index:9997;pointer-events:none;';
trailCanvas.width  = W;
trailCanvas.height = H;
document.body.appendChild(trailCanvas);
const tctx = trailCanvas.getContext('2d');

window.addEventListener('resize', () => {
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
  initStars();
  trailCanvas.width  = window.innerWidth;
  trailCanvas.height = window.innerHeight;
});

// Apenas UMA variável global mouse compartilhada por ambos os efeitos
let mouse = { x: W / 2, y: H / 2 };
let mouseMoved = false;

document.addEventListener('mousemove', e => { 
  mouse.x = e.clientX; 
  mouse.y = e.clientY; 
  mouseMoved = true;
});

const STAR_COUNT = window.innerWidth < 768 ? 80 : 180;
let stars = [];

function initStars() {
  stars = [];
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.7 + 0.2,
      speed: Math.random() * 0.3 + 0.05,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleDir: Math.random() > 0.5 ? 1 : -1,
      color: ['#a5b4fc','#c4b5fd','#93c5fd','#ffffff'][Math.floor(Math.random()*4)]
    });
  }
}
initStars();

const nebulae = [
  { x: 0.15, y: 0.2,  r: 320, c: 'rgba(124,83,255,0.07)'  },
  { x: 0.8,  y: 0.75, r: 280, c: 'rgba(167,139,250,0.06)' },
  { x: 0.5,  y: 0.5,  r: 200, c: 'rgba(56,189,248,0.05)'  },
  { x: 0.9,  y: 0.1,  r: 180, c: 'rgba(99,102,241,0.06)'  },
];

let shooters = [];
function spawnShooter() {
  shooters.push({
    x: Math.random() * W,
    y: Math.random() * H * 0.5,
    len: Math.random() * 120 + 60,
    speed: Math.random() * 8 + 5,
    angle: Math.PI / 4 + (Math.random() - 0.5) * 0.4,
    alpha: 1,
    life: 1
  });
}
setInterval(spawnShooter, 2800);

function drawCosmos() {
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = '#0a0e1a';
  ctx.fillRect(0, 0, W, H);

  nebulae.forEach(n => {
    const grd = ctx.createRadialGradient(n.x*W, n.y*H, 0, n.x*W, n.y*H, n.r);
    grd.addColorStop(0, n.c);
    grd.addColorStop(1, 'transparent');
    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.arc(n.x*W, n.y*H, n.r, 0, Math.PI*2);
    ctx.fill();
  });

  const mg = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 220);
  mg.addColorStop(0, 'rgba(124,131,255,0.06)');
  mg.addColorStop(1, 'transparent');
  ctx.fillStyle = mg;
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 220, 0, Math.PI*2);
  ctx.fill();

  stars.forEach(s => {
    s.alpha += s.twinkleSpeed * s.twinkleDir;
    if (s.alpha >= 0.95 || s.alpha <= 0.1) s.twinkleDir *= -1;
    const dx = (mouse.x / W - 0.5) * s.speed * 18;
    const dy = (mouse.y / H - 0.5) * s.speed * 18;
    ctx.save();
    ctx.globalAlpha = s.alpha;
    ctx.fillStyle = s.color;
    ctx.shadowColor = s.color;
    ctx.shadowBlur = s.r * 3;
    ctx.beginPath();
    ctx.arc(s.x + dx, s.y + dy, s.r, 0, Math.PI*2);
    ctx.fill();
    ctx.restore();
  });

  shooters = shooters.filter(s => s.life > 0);
  shooters.forEach(s => {
    s.x += Math.cos(s.angle) * s.speed;
    s.y += Math.sin(s.angle) * s.speed;
    s.life -= 0.018;
    s.alpha = s.life;
    const tx = s.x - Math.cos(s.angle) * s.len;
    const ty = s.y - Math.sin(s.angle) * s.len;
    const grad = ctx.createLinearGradient(tx, ty, s.x, s.y);
    grad.addColorStop(0, 'transparent');
    grad.addColorStop(1, `rgba(200,210,255,${s.alpha})`);
    ctx.save();
    ctx.globalAlpha = s.alpha;
    ctx.strokeStyle = grad;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(tx, ty);
    ctx.lineTo(s.x, s.y);
    ctx.stroke();
    ctx.restore();
  });

  requestAnimationFrame(drawCosmos);
}
drawCosmos();


// ============================================================
// TRILHA DO MOUSE (Modo Fluido - Sem travamento)
// ============================================================
const trail = [];
const TRAIL_MAX_POINTS = 24; 
const LERP_FACTOR = 0.16;    
let lastTrailMouse = { x: W / 2, y: H / 2 };

function drawTrail() {
  tctx.clearRect(0, 0, trailCanvas.width, trailCanvas.height);

  if (mouseMoved) {
    // Interpolação elástica (atraso intencional suave)
    lastTrailMouse.x += (mouse.x - lastTrailMouse.x) * LERP_FACTOR;
    lastTrailMouse.y += (mouse.y - lastTrailMouse.y) * LERP_FACTOR;
    trail.push({ x: lastTrailMouse.x, y: lastTrailMouse.y });
  }

  if (trail.length > TRAIL_MAX_POINTS) {
    trail.shift();
  } else if (trail.length > 0 && mouseMoved) {
    // Se o mouse parar de mover, esvazia aos poucos
    if (Math.abs(mouse.x - lastTrailMouse.x) < 0.1 && Math.abs(mouse.y - lastTrailMouse.y) < 0.1) {
      trail.shift();
    }
  }

  if (trail.length > 2) {
    tctx.beginPath();
    tctx.moveTo(trail[0].x, trail[0].y);

    // Conexão por pontos médios reais (Garante curvas perfeitas sem quinas)
    for (let i = 1; i < trail.length - 1; i++) {
      const xc = (trail[i].x + trail[i + 1].x) / 2;
      const yc = (trail[i].y + trail[i + 1].y) / 2;
      tctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
    }

    // Configuração visual no estilo espacial
    const gradient = tctx.createLinearGradient(trail[0].x, trail[0].y, mouse.x, mouse.y);
    gradient.addColorStop(0, 'rgba(129, 140, 248, 0)');    // Desvanece na ponta antiga
    gradient.addColorStop(1, 'rgba(196, 181, 253, 0.75)'); // Brilha perto do mouse

    tctx.strokeStyle = gradient;
    tctx.lineWidth = 2.5;
    tctx.lineCap = 'round';
    tctx.lineJoin = 'round';
    tctx.shadowBlur = 6;
    tctx.shadowColor = '#c4b5fd';

    tctx.stroke();
  }
  requestAnimationFrame(drawTrail);
}
drawTrail();


// ============================================================
// FAVORITOS (localStorage)
// ============================================================
const FAV_KEY = 'myappbox_favs';

function getFavs() {
  return JSON.parse(localStorage.getItem(FAV_KEY)) || [];
}

function saveFavs(favs) {
  localStorage.setItem(FAV_KEY, JSON.stringify(favs));
}

function isFav(name) {
  return getFavs().includes(name.toLowerCase());
}

function toggleFav(name) {
  let favs = getFavs();
  const key = name.toLowerCase();
  if (favs.includes(key)) {
    favs = favs.filter(f => f !== key);
  } else {
    favs.push(key);
  }
  saveFavs(favs);
  renderCards();
}


// ============================================================
// TEMA (localStorage)
// ============================================================
const THEME_KEY = 'myappbox_theme';

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
  document.querySelectorAll('.theme-opt').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === theme);
  });
}

const savedTheme = localStorage.getItem(THEME_KEY) || 'cosmic';
applyTheme(savedTheme);

const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeOptions   = document.getElementById('themeOptions');

if (themeToggleBtn && themeOptions) {
  themeToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    themeOptions.classList.toggle('open');
  });

  document.querySelectorAll('.theme-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      applyTheme(btn.dataset.theme);
      themeOptions.classList.remove('open');
    });
  });

  document.addEventListener('click', () => themeOptions.classList.remove('open'));
}


// ============================================================
// RENDER CARDS (dinâmico)
// ============================================================
const appGrid   = document.getElementById('appGrid');
const noResults = document.getElementById('noResults');
const searchTermEl = document.getElementById('searchTerm');

let activeFilter = 'all';
let searchQuery  = '';

function getCards() {
  return document.querySelectorAll('.card');
}

function renderCards() {
  if (!appGrid) return;
  const favs = getFavs();
  const query = searchQuery.toLowerCase();

  const sorted = [...APPS].sort((a, b) => {
    const af = isFav(a.name) ? 0 : 1;
    const bf = isFav(b.name) ? 0 : 1;
    return af - bf;
  });

  appGrid.innerHTML = '';

  let visible = 0;
  let shortcutIdx = 1;

  sorted.forEach((app, i) => {
    const nameLower = app.name.toLowerCase();
    const tagsStr   = (app.tags || []).join(' ');
    const matchSearch   = !query || nameLower.includes(query) || tagsStr.includes(query) || app.desc.toLowerCase().includes(query);
    const matchCategory = activeFilter === 'all'
      || activeFilter === app.category
      || (activeFilter === 'favoritos' && isFav(app.name));

    if (!matchSearch || !matchCategory) return;

    visible++;
    const fav = isFav(app.name);
    const shortcut = shortcutIdx <= 9 ? shortcutIdx : '';
    shortcutIdx++;

    const card = document.createElement('a');
    card.href = app.url;
    card.target = '_blank';
    card.className = 'card';
    card.dataset.category = app.category;
    card.dataset.name = nameLower;
    card.dataset.tags = tagsStr;
    card.style.animationDelay = `${0.04 * visible + 0.3}s`;

    card.innerHTML = `
      <div class="card-glow"></div>
      <div class="card-fav ${fav ? 'active' : ''}"><i class="fa fa-star"></i></div>
      <img src="${app.icon}" alt="${app.name}" loading="lazy"/>
      <div class="card-info">
        <span class="card-name">${app.name}</span>
        <span class="card-desc">${app.desc}</span>
      </div>
      <div class="card-arrow"><i class="fa fa-arrow-up-right-from-square"></i></div>
      ${shortcut ? `<span class="card-shortcut">${shortcut}</span>` : ''}
    `;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mx', x + '%');
      card.style.setProperty('--my', y + '%');
    });

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      card.style.transform = `translateY(-4px) scale(1.02) rotateX(${-dy*8}deg) rotateY(${dx*8}deg)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });

    card.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width  = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
      ripple.style.top  = (e.clientY - rect.top  - size / 2) + 'px';
      this.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });

    const favBtn = card.querySelector('.card-fav');
    favBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleFav(app.name);
    });

    appGrid.appendChild(card);
  });

  if(noResults) noResults.classList.toggle('visible', visible === 0);
  if (visible === 0 && searchTermEl) searchTermEl.textContent = searchQuery;
}

renderCards();


// ============================================================
// BUSCA
// ============================================================
const searchInput = document.getElementById('searchInput');
const clearBtn    = document.getElementById('clearBtn');

if (searchInput) {
  searchInput.value = localStorage.getItem('myappbox_search') || '';
  searchQuery = searchInput.value;
  renderCards();

  searchInput.addEventListener('input', () => {
    searchQuery = searchInput.value.trim();
    localStorage.setItem('myappbox_search', searchQuery);
    if(clearBtn) clearBtn.classList.toggle('visible', searchQuery.length > 0);
    renderCards();
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      localStorage.removeItem('myappbox_search');
      clearBtn.classList.remove('visible');
      renderCards();
      searchInput.focus();
    });
  }

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const query = searchInput.value.trim();
      if (query.length > 0) {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
      }
    }
  });
}


// ============================================================
// FILTROS
// ============================================================
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderCards();
  });
});


// ============================================================
// ATALHOS DE TECLADO
// ============================================================
document.addEventListener('keydown', (e) => {
  const tag = document.activeElement.tagName;
  const inInput = tag === 'INPUT' || tag === 'TEXTAREA';

  if (e.key === '/' && !inInput) {
    e.preventDefault();
    searchInput?.focus();
    return;
  }

  if (e.key === 'Escape') {
    if (paletteOverlay && paletteOverlay.classList.contains('open')) {
      closePalette();
    } else if (searchInput) {
      searchInput.blur();
      searchInput.value = '';
      searchQuery = '';
      clearBtn?.classList.remove('visible');
      renderCards();
    }
    return;
  }

  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    openPalette();
    return;
  }

  if (!inInput && e.key >= '1' && e.key <= '9') {
    const visibleCards = [...getCards()];
    const index = parseInt(e.key) - 1;
    if (visibleCards[index]) {
      window.open(visibleCards[index].href, '_blank');
    }
  }
});


// ============================================================
// COMMAND PALETTE
// ============================================================
const paletteOverlay = document.getElementById('paletteOverlay');
const paletteInput   = document.getElementById('paletteInput');
const paletteResults = document.getElementById('paletteResults');

const COMMANDS = [
  { type: 'cmd', name: 'Limpar busca',         desc: 'Limpa o campo de pesquisa',       icon: 'fa-times',        action: () => { if(searchInput){searchInput.value=''; searchQuery='';} clearBtn?.classList.remove('visible'); renderCards(); } },
  { type: 'cmd', name: 'Ver Favoritos',         desc: 'Filtra apenas apps favoritos',    icon: 'fa-star',         action: () => { document.querySelector('[data-filter="favoritos"]')?.click(); } },
  { type: 'cmd', name: 'Ver Todos',             desc: 'Remove filtro de categoria',      icon: 'fa-border-all',   action: () => { document.querySelector('[data-filter="all"]')?.click(); } },
  { type: 'cmd', name: 'Tema Cosmic',           desc: 'Aplica tema Cosmic',              icon: 'fa-moon',         action: () => applyTheme('cosmic') },
  { type: 'cmd', name: 'Tema Neon',             desc: 'Aplica tema Neon',                icon: 'fa-bolt',         action: () => applyTheme('neon') },
  { type: 'cmd', name: 'Tema Nature',           desc: 'Aplica tema Nature',              icon: 'fa-leaf',         action: () => applyTheme('nature') },
  { type: 'cmd', name: 'Tema Dark',             desc: 'Aplica tema Dark',                icon: 'fa-circle-half-stroke', action: () => applyTheme('dark') },
];

let paletteSelectedIdx = 0;

function openPalette() {
  if (!paletteOverlay) return;
  paletteOverlay.classList.add('open');
  if(paletteInput) paletteInput.value = '';
  paletteSelectedIdx = 0;
  renderPalette('');
  setTimeout(() => paletteInput?.focus(), 50);
}

function closePalette() {
  if (!paletteOverlay) return;
  paletteOverlay.classList.remove('open');
  if(paletteInput) paletteInput.value = '';
}

function renderPalette(query) {
  if (!paletteResults) return;
  paletteResults.innerHTML = '';
  const q = query.toLowerCase();

  const matchedApps = APPS.filter(a =>
    a.name.toLowerCase().includes(q) ||
    (a.tags || []).join(' ').includes(q) ||
    a.desc.toLowerCase().includes(q)
  ).slice(0, 6);

  const matchedCmds = COMMANDS.filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.desc.toLowerCase().includes(q)
  ).slice(0, 4);

  let allItems = [];

  if (matchedApps.length > 0) {
    const label = document.createElement('div');
    label.className = 'palette-section-label';
    label.textContent = 'Apps';
    paletteResults.appendChild(label);

    matchedApps.forEach(app => {
      const item = document.createElement('div');
      item.className = 'palette-item';
      item.innerHTML = `
        <img src="${app.icon}" alt="${app.name}" loading="lazy"/>
        <div class="palette-item-info">
          <div class="palette-item-name">${app.name}</div>
          <div class="palette-item-desc">${app.desc}</div>
        </div>
        <span class="palette-item-tag">${app.category}</span>
      `;
      item.addEventListener('click', () => {
        window.open(app.url, '_blank');
        closePalette();
      });
      paletteResults.appendChild(item);
      allItems.push(item);
    });
  }

  if (matchedCmds.length > 0) {
    const label = document.createElement('div');
    label.className = 'palette-section-label';
    label.textContent = 'Comandos';
    paletteResults.appendChild(label);

    matchedCmds.forEach(cmd => {
      const item = document.createElement('div');
      item.className = 'palette-item';
      item.innerHTML = `
        <div class="palette-item-icon"><i class="fa ${cmd.icon}"></i></div>
        <div class="palette-item-info">
          <div class="palette-item-name">${cmd.name}</div>
          <div class="palette-item-desc">${cmd.desc}</div>
        </div>
      `;
      item.addEventListener('click', () => {
        cmd.action();
        closePalette();
      });
      paletteResults.appendChild(item);
      allItems.push(item);
    });
  }

  if (allItems.length === 0) {
    paletteResults.innerHTML = '<div style="padding:24px;text-align:center;color:rgba(255,255,255,0.3);font-size:0.85rem;">Nenhum resultado encontrado</div>';
  }

  updatePaletteSelection(allItems);
}

function updatePaletteSelection(items) {
  items = items || [...paletteResults.querySelectorAll('.palette-item')];
  items.forEach((item, i) => item.classList.toggle('selected', i === paletteSelectedIdx));
}

if (paletteInput) {
  paletteInput.addEventListener('input', () => {
    paletteSelectedIdx = 0;
    renderPalette(paletteInput.value);
  });

  paletteInput.addEventListener('keydown', (e) => {
    const items = [...paletteResults.querySelectorAll('.palette-item')];
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      paletteSelectedIdx = Math.min(paletteSelectedIdx + 1, items.length - 1);
      updatePaletteSelection(items);
      items[paletteSelectedIdx]?.scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      paletteSelectedIdx = Math.max(paletteSelectedIdx - 1, 0);
      updatePaletteSelection(items);
      items[paletteSelectedIdx]?.scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter') {
      items[paletteSelectedIdx]?.click();
    }
  });
}

if (paletteOverlay) {
  paletteOverlay.addEventListener('click', (e) => {
    if (e.target === paletteOverlay) closePalette();
  });
}
