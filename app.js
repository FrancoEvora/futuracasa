'use strict';

const STORE_KEY = 'futuraCasaPremiumState.v2';

const images = {
  hero: 'linear-gradient(135deg, rgba(20,22,24,.2), rgba(255,90,20,.1)), radial-gradient(circle at 72% 38%, rgba(255,151,82,.62), transparent 16rem), linear-gradient(120deg, #22272b 0%, #15191d 42%, #8b5e3b 72%, #191b1d 100%)',
  project: 'radial-gradient(circle at 40% 12%, #a4c47b, transparent 18rem), linear-gradient(135deg, #11351f 0%, #234f30 45%, #14221a 100%)',
  lot: 'linear-gradient(135deg, rgba(255,255,255,.18), transparent 40%), repeating-linear-gradient(150deg, rgba(255,255,255,.28) 0 2px, transparent 2px 45px), linear-gradient(135deg, #47723f, #9fb765)',
  houseA: 'radial-gradient(circle at 75% 40%, #e9b06a, transparent 11rem), linear-gradient(135deg, #141719, #5a3e2e 48%, #c1935c)',
  houseB: 'radial-gradient(circle at 25% 20%, #8fc0ff, transparent 12rem), linear-gradient(135deg, #111417, #704f33, #dfb078)',
  houseC: 'radial-gradient(circle at 70% 28%, #ffe0a8, transparent 13rem), linear-gradient(135deg, #1c1f22, #91613d, #bd8c55)',
  houseD: 'radial-gradient(circle at 70% 25%, #fff6df, transparent 11rem), linear-gradient(135deg, #e7e0d6, #a88765, #292b2c)',
  work: 'repeating-linear-gradient(15deg, rgba(74,43,21,.4) 0 8px, transparent 8px 28px), radial-gradient(circle at 35% 30%, #c99761, transparent 12rem), linear-gradient(135deg, #4e2d19, #c49158 60%, #7f512f)',
  marketMat: 'radial-gradient(circle at 25% 35%, #c7a17a, transparent 11rem), linear-gradient(135deg, #2f2a24, #8c755e, #d8c8b6)',
  marketSolar: 'repeating-linear-gradient(90deg, rgba(255,255,255,.18) 0 2px, transparent 2px 28px), linear-gradient(135deg, #12345b, #1e69a8, #df8a37)'
};

const data = {
  lots: [
    {id:45, name:'Lote 45', project:'Solaris Residencial Resort', city:'Monte Carmelo, MG', area:360, dims:'12 x 30 m', price:385000, status:'Disponível'},
    {id:78, name:'Lote 78', project:'Solaris Residencial Resort', city:'Monte Carmelo, MG', area:420, dims:'14 x 30 m', price:448000, status:'Disponível'},
    {id:112, name:'Lote 112', project:'Parque das Árvores', city:'Monte Carmelo, MG', area:502, dims:'18 x 27,9 m', price:535000, status:'Disponível'},
    {id:156, name:'Lote 156', project:'Solaris Residencial Resort', city:'Monte Carmelo, MG', area:650, dims:'20 x 32,5 m', price:690000, status:'Disponível'},
    {id:211, name:'Lote 211', project:'Parque das Árvores', city:'Monte Carmelo, MG', area:300, dims:'10 x 30 m', price:318000, status:'Reservado'},
    {id:233, name:'Lote 233', project:'Solaris Residencial Resort', city:'Monte Carmelo, MG', area:720, dims:'24 x 30 m', price:792000, status:'Disponível'}
  ],
  homes: [
    {id:'essenza', name:'Casa Essenza', style:'Moderna', bedrooms:4, suites:4, area:248, parking:4, price:1890000, img:'houseB'},
    {id:'armonia', name:'Casa Armonia', style:'Contemporânea', bedrooms:3, suites:3, area:210, parking:2, price:1560000, img:'houseC'},
    {id:'horizonti', name:'Casa Horizonti', style:'Contemporânea', bedrooms:3, suites:3, area:196, parking:2, price:1350000, img:'houseA'},
    {id:'vila-bella', name:'Casa Villa Bella', style:'Clássica', bedrooms:4, suites:4, area:276, parking:4, price:2250000, img:'houseD'},
    {id:'terrea-premium', name:'Casa Térrea Premium', style:'Moderna', bedrooms:3, suites:1, area:124, parking:2, price:490000, img:'houseB'},
    {id:'compacta', name:'Casa Compacta Smart', style:'Minimalista', bedrooms:2, suites:1, area:92.45, parking:2, price:290000, img:'houseA'}
  ],
  products: [
    {id:'kit-basico', category:'Materiais', name:'Kit Básico', desc:'Para obras até 120 m²', price:24850, badge:'Mais escolhido', img:'marketMat'},
    {id:'kit-acabamento', category:'Acabamentos', name:'Kit Acabamento Premium', desc:'Padrão elevado de acabamento', price:68900, badge:'Acabamento Premium', img:'houseD'},
    {id:'moveis-planejados', category:'Móveis Planejados', name:'Kit Móveis Planejados', desc:'Cozinhas, banheiros e dormitórios', price:37500, badge:'Mais vendido', img:'houseB'},
    {id:'energia-solar', category:'Energia Solar', name:'Kit Energia Solar', desc:'Gere sua própria energia', price:16900, badge:'Sustentável', img:'marketSolar'},
    {id:'paisagismo', category:'Jardinagem', name:'Projeto de Paisagismo', desc:'Jardim frontal + irrigação', price:9500, badge:'Biofilia', img:'project'},
    {id:'seguranca', category:'Serviços Técnicos', name:'Segurança Eletrônica', desc:'Câmeras, alarme e automação', price:7200, badge:'Casa segura', img:'houseA'},
    {id:'porcelanato', category:'Acabamentos', name:'Porcelanato Portobello 90x90', desc:'Cinza natural, preço por m²', price:89.9, badge:'10% off', img:'marketMat'},
    {id:'metais', category:'Acabamentos', name:'Metais e acessórios Tramontina', desc:'Linha completa para banheiros', price:169.9, badge:'15% off', img:'houseD'}
  ]
};

const defaults = {
  route:'home',
  favorites:[],
  compare:['essenza','armonia'],
  selectedLot:78,
  selectedHome:'compacta',
  cart:[{id:'kit-basico', qty:1},{id:'porcelanato', qty:45},{id:'seguranca', qty:1}],
  proposals:[],
  tickets:[
    {id:101, title:'Dúvida sobre acabamento', status:'Concluído', date:'23/05/2025', owner:'Juliana M.'},
    {id:102, title:'Alteração de tomada', status:'Concluído', date:'20/05/2025', owner:'Juliana M.'},
    {id:103, title:'Prazo da fundação', status:'Concluído', date:'18/05/2025', owner:'Eng. Carlos'}
  ],
  clientTab:'obra',
  filters:{style:'Todos', bedrooms:3, maxArea:1000, maxPrice:3000000, city:'Monte Carmelo, MG'},
  sim:{downPayment:70000, income:15000, months:240, system:'PRICE', rate:0.1025}
};
let state = loadState();

function loadState(){
  try { return {...defaults, ...(JSON.parse(localStorage.getItem(STORE_KEY))||{})}; } catch { return structuredClone(defaults); }
}
function saveState(){ localStorage.setItem(STORE_KEY, JSON.stringify(state)); }
function money(v){ return (Number(v)||0).toLocaleString('pt-BR',{style:'currency',currency:'BRL'}); }
function num(v){ return Number(v).toLocaleString('pt-BR'); }
function pct(v){ return `${Number(v).toLocaleString('pt-BR',{maximumFractionDigits:1})}%`; }
function byId(arr,id){ return arr.find(x => String(x.id) === String(id)); }
function active(route){ return state.route === route ? 'active' : ''; }
function esc(s=''){ return String(s).replace(/[&<>'"]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[m])); }
function slug(s=''){ return String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,''); }

function icon(name, cls='icon'){
  const paths = {
    home:'<path d="M3 11 12 3l9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
    lot:'<rect x="4" y="5" width="16" height="14" rx="2"/><path d="M8 9h8M8 13h3m3 0h2M8 17h8"/>',
    calc:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01"/>',
    bag:'<path d="M6 7h12l1 13H5L6 7Z"/><path d="M9 7a3 3 0 0 1 6 0"/>',
    hardhat:'<path d="M3 17h18"/><path d="M6 17v-4a6 6 0 0 1 12 0v4"/><path d="M9 17V9m6 8V9"/>',
    user:'<path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="7" r="4"/>',
    headset:'<path d="M4 13a8 8 0 0 1 16 0"/><path d="M5 13v4a2 2 0 0 0 2 2h1v-6H5Zm14 0v4a2 2 0 0 1-2 2h-1v-6h3Z"/><path d="M16 19c0 1.1-1.8 2-4 2"/>',
    shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-5"/>',
    sliders:'<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',
    check:'<path d="m20 6-11 11-5-5"/>',
    heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/>',
    map:'<path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z"/><path d="M9 3v15m6-12v15"/>',
    file:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/>',
    bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
    chart:'<path d="M3 3v18h18"/><path d="m7 16 4-5 3 3 5-8"/>',
    arrow:'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.8 2.5Z"/>',
    menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',
    x:'<path d="M18 6 6 18M6 6l12 12"/>',
    plus:'<path d="M12 5v14M5 12h14"/>',
    trash:'<path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/>',
    whatsapp:'<path d="M20 11.5a8 8 0 1 1-14.6 4.5L3 21l5.2-2.2A8 8 0 0 1 20 11.5Z"/><path d="M8.7 8.8c.3 3 2.7 5.5 6 6.4l1.3-1.3"/>',
    save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"/><path d="M17 21v-8H7v8M7 3v5h8"/>',
    calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    settings:'<path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V22a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1A2 2 0 1 1 7.1 3l.1.1a1.7 1.7 0 0 0 1.9.3h.1A1.7 1.7 0 0 0 10 1.8V2a2 2 0 1 1 4 0v-.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1A2 2 0 1 1 19.8 6l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.6 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>'
  };
  return `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${paths[name]||paths.home}</svg>`;
}

function brand(){
  return `<a class="brand" href="#home" data-route="home" aria-label="Futura Casa - Início">
    <span class="brand-lockup"><span>Futura</span><span class="casa">Cas<span class="a">a</span></span><small>Onde tudo começa</small></span>
  </a>`;
}

const navItems = [
  ['home','Início'], ['lotes','Lotes'], ['casas','Casas'], ['simulador','Simulador de Desembolso'], ['marketplace','Marketplace'], ['obras','Obras'], ['cliente','Área do Cliente'], ['atendimento','Atendimento'], ['painel','Painel']
];

function header(){
  return `<header class="topbar">
    <nav class="nav">
      ${brand()}
      <div class="navlinks">${navItems.filter(x=>x[0] !== 'casas' && x[0] !== 'painel').map(([r,l])=>`<a href="#${r}" data-route="${r}" class="navlink ${active(r)}">${l}</a>`).join('')}</div>
      <div class="nav-actions">
        <a class="phone-pill" href="tel:+551140028922">${icon('whatsapp','icon mini')} (11) 4002-8922</a>
        <button class="icon-btn" data-action="open-cart" aria-label="Carrinho">${icon('bag')}<span class="badge">${cartCount()}</span></button>
        <button class="btn btn-primary" data-action="login">Entrar / Cadastrar</button>
        <button class="icon-btn mobile-menu" data-action="mobile-menu" aria-label="Menu">${icon('menu')}</button>
      </div>
      <button class="icon-btn mobile-menu" data-action="mobile-menu" aria-label="Menu">${icon('menu')}</button>
    </nav>
  </header>`;
}

function mobileBottom(){
  const items = [['home','home','Início'],['lotes','lot','Explorar'],['simulador','calc','Simular'],['obras','hardhat','Obras'],['cliente','user','Conta']];
  return `<nav class="mobile-bottom" aria-label="Navegação mobile">${items.map(([r,i,l])=>`<button data-route="${r}" class="${active(r)}">${icon(i,'icon mini')}<span>${l}</span></button>`).join('')}</nav><div class="bottom-safe"></div>`;
}

function render(){
  const route = state.route || 'home';
  const main = route === 'painel' ? pageManage() : page(route);
  document.getElementById('app').innerHTML = route === 'painel' ? `${header()}${main}${mobileBottom()}` : `${header()}${main}${mobileBottom()}`;
  saveState();
}
function page(route){
  switch(route){
    case 'lotes': case 'casas': return pageListings();
    case 'simulador': return pageSimulator();
    case 'marketplace': return pageMarketplace();
    case 'obras': case 'cliente': return pageClient(route);
    case 'atendimento': return pageSupport();
    default: return pageHome();
  }
}

function pageHome(){
  return `<main>
    <section class="hero" style="--hero-image:${images.hero}">
      <div class="hero-inner">
        <div>
          <div class="eyebrow">Do lote à casa pronta</div>
          <h1>O seu sonho começa no lote. A gente entrega <span class="accent">a casa pronta.</span></h1>
          <p>A plataforma completa para escolher o lote ideal, simular o desembolso, contratar a casa, acompanhar a obra e acessar fornecedores selecionados.</p>
          <div class="hero-ctas">
            <button class="btn btn-primary" data-route="lotes">Quero encontrar meu lote ${icon('arrow','icon mini')}</button>
            <button class="btn btn-ghost" data-route="simulador">Simular meu financiamento ${icon('calc','icon mini')}</button>
          </div>
          <div class="benefits">
            ${benefit('shield','Segurança em<br>cada etapa')}
            ${benefit('sliders','Financiamento<br>inteligente')}
            ${benefit('hardhat','Obras com gestão<br>e transparência')}
            ${benefit('check','Do lote à casa<br>sem dor de cabeça')}
          </div>
        </div>
        <div class="floating-sim">
          <div class="top">
            <div style="display:flex;gap:14px;align-items:flex-start"><span class="iconbox">${icon('calc')}</span><div><h3>Simulação de desembolso</h3><p>Escolha lote + casa e veja o plano em poucos passos.</p></div></div>
            <button class="link-action" data-route="simulador">Ver detalhes</button>
          </div>
          <div class="sim-grid">
            <div><span class="label">Valor do imóvel</span><span class="value">${money(530000)}</span></div>
            <div><span class="label">Entrada</span><span class="value">${money(70000)}</span></div>
            <div><span class="label">Parcelas a partir de</span><span class="value">${money(2456)}</span></div>
            <div><span class="label">Prazo</span><span class="value">240 meses</span></div>
          </div>
          <button class="btn btn-primary" data-route="simulador">Fazer simulação gratuita ${icon('arrow','icon mini')}</button>
        </div>
      </div>
    </section>
    <section class="section tight">
      <div class="container module-grid">
        <div class="feature-grid">
          ${feature('lot','Lotes','Encontre o lote ideal em localizações valorizadas.','Ver lotes disponíveis','lotes')}
          ${feature('home','Casas','Projetos modernos para seu estilo de vida.','Conhecer projetos','lotes')}
          ${feature('calc','Simulador de Desembolso','Planeje seu investimento com clareza.','Simular agora','simulador')}
          ${feature('bag','Marketplace','Materiais, serviços e parceiros selecionados.','Acessar marketplace','marketplace')}
          ${feature('hardhat','Obras','Acompanhe o andamento da sua obra em tempo real.','Acessar minhas obras','obras')}
          ${feature('user','Área do Cliente','Contratos, documentos e pagamentos em um só lugar.','Acessar minha conta','cliente')}
          ${feature('headset','Atendimento','Fale com especialistas e tire dúvidas.','Falar com especialista','atendimento')}
          ${feature('chart','Painel Gestor','Visão comercial e operacional do ecossistema.','Ver gestão','painel')}
        </div>
        <div class="project-highlight" style="--project-image:${images.project}">
          <div class="project-highlight-content">
            <span class="tag">Em destaque</span>
            <h3>Solaris Residencial Resort</h3>
            <div style="display:flex;gap:8px;color:rgba(255,255,255,.75);align-items:center">${icon('map','icon mini')} Monte Carmelo, MG</div>
            <div class="project-meta">
              <div><span class="label">Lotes a partir de</span><span class="value">300 m²</span></div>
              <div><span class="label">Infraestrutura</span><span class="value">Em implantação</span></div>
              <div><span class="label">Entrada facilitada</span><span class="value">Em até 24x</span></div>
            </div>
            <button class="btn btn-ghost" data-route="lotes">Ver detalhes do empreendimento ${icon('arrow','icon mini')}</button>
          </div>
        </div>
      </div>
    </section>
    <section class="section journey">
      <div class="container">
        <div class="section-title" style="justify-content:center;text-align:center"><div><div class="eyebrow">Do lote à casa pronta</div><h2>Sua jornada, do início ao fim</h2><p>Um ecossistema integrado para transformar intenção em contrato, obra e relacionamento de longo prazo.</p></div></div>
        <div class="steps">
          ${journey(1,'lot','Escolha do lote','Mapa, filtros, comparação e disponibilidade em tempo real.')}
          ${journey(2,'home','Projeto e casa','Modelos compatíveis com o lote e o padrão de vida desejado.')}
          ${journey(3,'calc','Desembolso','Simulação de entrada, prazo, renda e parcelas.')}
          ${journey(4,'hardhat','Construção com gestão','Cronograma, fotos, documentos e marcos de obra.')}
          ${journey(5,'check','Casa pronta','Entrega, pós-obra, marketplace e relacionamento.')}
        </div>
      </div>
    </section>
  </main>`;
}
function benefit(i,t){ return `<div class="benefit"><span class="benefit-icon">${icon(i)}</span><span>${t}</span></div>`; }
function feature(i,title,desc,link,route){ return `<button class="feature-card" data-route="${route}"><span class="iconbox">${icon(i)}</span><h3>${title}</h3><p>${desc}</p><span class="link-action">${link} ${icon('arrow','icon mini')}</span></button>`; }
function journey(n,i,t,d){ return `<div class="step"><span class="line"></span><span class="step-num">${n}</span><span class="iconbox" style="background:#fff;color:var(--orange);border:1px solid var(--line);box-shadow:none">${icon(i)}</span><h4>${t}</h4><p>${d}</p></div>`; }

function pageHero(title, subtitle, crumb='Início'){
  return `<section class="page-hero" style="--hero-image:${images.hero}"><div class="container"><div class="breadcrumb">${icon('home','icon mini')} ${crumb}</div><h1>${title}</h1><p>${subtitle}</p></div></section>`;
}

function pageListings(){
  const lots = filteredLots();
  const homes = filteredHomes();
  return `<main>${pageHero('Lotes e Casas','Encontre o projeto ideal e transforme uma escolha imobiliária em jornada completa de moradia.','Início / Lotes e Casas')}
    <section class="page-content"><div class="container">
      <div class="toolbar">
        ${statPill('lot','Lotes disponíveis',`${lots.length} unidades`)}
        ${statPill('home','Casas disponíveis',`${homes.length} modelos`)}
        ${statPill('sliders','Combinações possíveis',`+${num(lots.length * homes.length * 64)}`)}
        <button class="btn btn-dark" data-action="clear-filters">Limpar filtros</button>
      </div>
      <div class="market-layout">
        ${filterPanel()}
        <div class="content-stack">
          <section class="card-section darkish"><div class="card-head"><h2>Lotes disponíveis</h2><button class="link-action">Ver todos (${lots.length}) ${icon('arrow','icon mini')}</button></div><div class="lot-grid">${lots.slice(0,4).map(lotCard).join('')}</div></section>
          <section class="card-section darkish"><div class="card-head"><h2>Casas em destaque</h2><button class="link-action">Ver todos (${homes.length}) ${icon('arrow','icon mini')}</button></div><div class="home-grid">${homes.slice(0,4).map(homeCard).join('')}</div></section>
          <section class="card-section darkish"><div class="card-head"><h2>Combinações sugeridas para você</h2><button class="link-action">Ver todas as combinações ${icon('arrow','icon mini')}</button></div><div class="combo-grid">${combos(lots,homes).map(comboCard).join('')}</div></section>
        </div>
        <aside class="panel dark map-panel"><div class="card-head"><h3>Mapa do empreendimento</h3></div><div class="legend"><span><i style="background:var(--green)"></i>Disponível</span><span><i style="background:var(--orange)"></i>Reservado</span><span><i style="background:var(--red)"></i>Vendido</span><span><i style="background:#777"></i>Indisponível</span></div>${siteMap()}${compareBox()}</aside>
      </div>
    </div></section>
  </main>`;
}
function statPill(i,label,value){return `<div class="stat-pill"><span class="iconbox" style="width:36px;height:36px">${icon(i,'icon mini')}</span><div><span>${label}</span><b>${value}</b></div></div>`}
function filterPanel(){
  const f = state.filters;
  return `<aside class="panel dark filter-panel">
    <div class="filter-title"><h3>Filtros de busca</h3><button class="link-action" data-action="clear-filters">Recolher</button></div>
    <div class="form-group"><label>Cidade / Empreendimento</label><select data-filter="city"><option ${f.city==='Monte Carmelo, MG'?'selected':''}>Monte Carmelo, MG</option><option ${f.city==='Uberlândia, MG'?'selected':''}>Uberlândia, MG</option><option ${f.city==='Indaiatuba, SP'?'selected':''}>Indaiatuba, SP</option></select></div>
    <div class="form-group"><label>Metragem do lote</label><input type="range" min="250" max="1000" value="${f.maxArea}" data-filter="maxArea"><div class="slider-labels"><span>250 m²</span><span>${f.maxArea} m²</span></div></div>
    <div class="form-group"><label>Faixa de preço (lote + casa)</label><input type="range" min="500000" max="3000000" step="50000" value="${f.maxPrice}" data-filter="maxPrice"><div class="slider-labels"><span>R$ 500 mil</span><span>${money(f.maxPrice)}</span></div></div>
    <div class="form-group"><label>Estilo da casa</label><div class="pill-row">${['Todos','Contemporânea','Clássica','Moderna','Minimalista'].map(x=>`<button class="chip ${f.style===x?'active':''}" data-action="set-filter" data-filter-key="style" data-filter-value="${x}">${x}</button>`).join('')}</div></div>
    <div class="form-group"><label>Dormitórios</label><div class="pill-row">${[1,2,3,4,5].map(x=>`<button class="chip ${Number(f.bedrooms)===x?'active':''}" data-action="set-filter" data-filter-key="bedrooms" data-filter-value="${x}">${x}${x===5?'+':''}</button>`).join('')}</div></div>
    <div class="form-group"><label>Status</label><label class="checkline"><input type="checkbox" checked> Lotes disponíveis</label><label class="checkline"><input type="checkbox" checked> Casas disponíveis</label><label class="checkline"><input type="checkbox"> Em construção</label><label class="checkline"><input type="checkbox"> Breve lançamento</label></div>
    <button class="btn btn-primary" style="width:100%" data-action="apply-filters">Aplicar filtros (${filteredLots().length} resultados)</button>
  </aside>`;
}
function filteredLots(){ return data.lots.filter(l => l.area <= Number(state.filters.maxArea) && l.price <= Number(state.filters.maxPrice)); }
function filteredHomes(){ return data.homes.filter(h => (state.filters.style==='Todos'||h.style===state.filters.style) && h.bedrooms >= Number(state.filters.bedrooms)); }
function lotCard(l){
  return `<article class="lot-card"><div class="thumb" style="--thumb-image:${images.lot}"><span class="badge-status">${l.status}</span><button class="fav ${state.favorites.includes('lot-'+l.id)?'active':''}" data-action="favorite" data-id="lot-${l.id}">${icon('heart','icon mini')}</button><span class="area">${l.area} m²</span></div><div class="card-body"><h4>${l.name}</h4><p>${l.project}</p><div class="specs"><span>${icon('map','icon mini')} ${l.area} m²</span><span>${l.dims}</span></div><div class="price">${money(l.price)}</div><div class="mini-actions"><button class="mini-btn" data-action="details-lot" data-id="${l.id}">Ver detalhes</button><button class="mini-btn orange" data-action="choose-lot" data-id="${l.id}">Usar no simulador</button></div></div></article>`;
}
function homeCard(h){
  return `<article class="home-card"><div class="thumb house" style="--thumb-image:${images[h.img]}"><span class="tag" style="position:absolute;left:10px;top:10px">Em destaque</span><button class="fav ${state.favorites.includes('home-'+h.id)?'active':''}" data-action="favorite" data-id="home-${h.id}">${icon('heart','icon mini')}</button></div><div class="card-body"><h4>${h.name}</h4><p>${h.style}</p><div class="specs"><span>${h.suites} suítes</span><span>${h.area} m²</span><span>${h.parking} vagas</span></div><div class="price">${money(h.price)}</div><div class="mini-actions"><button class="mini-btn" data-action="details-home" data-id="${h.id}">Ver detalhes</button><button class="mini-btn" data-action="compare-home" data-id="${h.id}">Comparar</button></div></div></article>`;
}
function combos(lots,homes){
  const ls = lots.length ? lots : data.lots; const hs = homes.length ? homes : data.homes;
  return [[ls[0],hs[0]],[ls[1]||ls[0],hs[1]||hs[0]],[ls[2]||ls[0],hs[2]||hs[0]]].filter(c=>c[0]&&c[1]);
}
function comboCard([l,h]){
  return `<article class="combo-card"><div style="display:grid;grid-template-columns:1fr 40px 1fr;gap:8px;padding:10px"><div class="thumb" style="height:82px;border-radius:12px;--thumb-image:${images.lot}"><span class="area" style="font-size:16px">${l.area} m²</span></div><div style="display:grid;place-items:center;font-weight:950;font-size:22px">+</div><div class="thumb house" style="height:82px;border-radius:12px;--thumb-image:${images[h.img]}"></div></div><div class="card-body"><h4>${l.name} + ${h.name}</h4><p>${l.project} • ${h.area} m² | ${h.suites} suítes</p><div class="price">${money(l.price+h.price)}</div><button class="mini-btn orange" data-action="simulate-combo" data-lot="${l.id}" data-home="${h.id}">Simular combinação</button></div></article>`;
}
function siteMap(){
  const ids = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56];
  const rects = ids.map((n,idx)=>{
    const row = Math.floor(idx/10); const col = idx%10; const x=20+col*39+(row%2)*18; const y=35+row*48; const selected = n===45 || n===Number(state.selectedLot);
    const color = [16,26,31].includes(n)?'var(--orange)':[22,38].includes(n)?'var(--red)':'var(--green)';
    return `<g data-action="map-lot" data-id="${n}"><rect class="lot-rect ${selected?'selected':''}" x="${x}" y="${y}" width="34" height="30" rx="6" fill="${color}" opacity=".88"/><text x="${x+17}" y="${y+20}" text-anchor="middle" fill="#fff" font-size="12" font-weight="800">${n}</text></g>`;
  }).join('');
  return `<div class="map-wrap"><svg class="site-map" viewBox="0 0 430 360" role="img" aria-label="Mapa do empreendimento"><defs><filter id="blur"><feGaussianBlur stdDeviation="8"/></filter></defs><rect width="430" height="360" fill="#122318"/><circle cx="370" cy="70" r="64" fill="#4da3bd" opacity=".85"/><circle cx="390" cy="84" r="76" fill="#3b8faf" opacity=".55" filter="url(#blur)"/><path d="M18 32 C100 5,160 42,232 18 S354 18,420 44" stroke="#d9e3d5" stroke-width="10" fill="none" opacity=".55"/><path d="M18 330 C108 300,168 342,248 310 S355 304,420 333" stroke="#d9e3d5" stroke-width="10" fill="none" opacity=".55"/>${rects}<circle cx="390" cy="80" r="16" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M390 55v50M365 80h50" stroke="#fff" stroke-width="1" opacity=".75"/></svg></div>`;
}
function compareBox(){
  const hs = state.compare.map(id=>byId(data.homes,id)).filter(Boolean);
  return `<div class="compare-box"><div class="card-head"><h3>Comparar casas (${hs.length}/3)</h3><button class="link-action" data-action="clear-compare">Limpar</button></div>${hs.map(h=>`<div class="compare-item"><span class="compare-img" style="background:${images[h.img]}"></span><div><b>${h.name}</b><span>${h.style} | ${h.area} m²</span></div><button data-action="remove-compare" data-id="${h.id}" style="margin-left:auto">${icon('x','icon mini')}</button></div>`).join('')}<button class="btn btn-outline" style="width:100%;margin:6px 0 12px" data-action="add-compare">${icon('plus','icon mini')} Adicionar mais uma casa</button><button class="btn btn-primary" style="width:100%" data-action="show-compare">Ver comparação completa</button></div>`;
}

function pageSimulator(){
  const lot = byId(data.lots,state.selectedLot) || data.lots[0];
  const home = byId(data.homes,state.selectedHome) || data.homes[0];
  const s = getSim(lot, home);
  return `<main>${pageHero('Simulador de Desembolso','Simule o investimento completo: lote, casa, entrada, renda, prazo, sistema de amortização e próximos passos.','Início / Simulador')}
  <section class="page-content"><div class="container">
    <div class="sim-card">
      <div class="stepper">${['Lote','Casa','Entrada','Renda','Prazo','Sistema'].map((x,i)=>`<button class="${i===0?'active':''}"><span>${i+1}</span>${x}</button>`).join('')}</div>
      <div class="sim-form">
        <div class="field"><label>Lote</label><select data-sim-field="lot">${data.lots.map(l=>`<option value="${l.id}" ${l.id===lot.id?'selected':''}>${l.project} • ${l.name} • ${l.area} m²</option>`).join('')}</select></div>
        <div class="field"><label>Casa</label><select data-sim-field="home">${data.homes.map(h=>`<option value="${h.id}" ${h.id===home.id?'selected':''}>${h.name} • ${h.area} m²</option>`).join('')}</select></div>
        <div class="field"><label>Entrada</label><input class="input" data-sim-field="downPayment" type="number" value="${state.sim.downPayment}" min="0"><input type="range" min="${Math.round(s.total*.1)}" max="${Math.round(s.total*.5)}" step="1000" value="${state.sim.downPayment}" data-sim-field="downPayment"><div class="slider-labels"><span>10%</span><span>50%</span></div></div>
        <div class="field"><label>Renda Familiar</label><input class="input" type="number" min="2000" step="500" data-sim-field="income" value="${state.sim.income}"><input type="range" min="2000" max="50000" step="500" value="${state.sim.income}" data-sim-field="income"><div class="slider-labels"><span>R$ 2 mil</span><span>R$ 50 mil</span></div></div>
        <div class="field"><label>Prazo</label><input class="input" type="number" min="60" max="360" step="12" data-sim-field="months" value="${state.sim.months}"><input type="range" min="60" max="360" step="12" value="${state.sim.months}" data-sim-field="months"><div class="slider-labels"><span>60</span><span>360</span></div></div>
        <div class="field"><label>Tipo de Sistema</label><div class="toggle-row"><button data-action="set-system" data-system="PRICE" class="${state.sim.system==='PRICE'?'active':''}">PRICE</button><button data-action="set-system" data-system="SAC" class="${state.sim.system==='SAC'?'active':''}">SAC</button></div><button class="link-action" data-action="amortization-help" style="margin-top:8px">Qual a diferença?</button></div>
      </div>
    </div>
    <div class="sim-results">
      <div class="result-dark"><div><span class="label">Total do investimento</span><div class="big-money">${money(s.total)}</div><div class="metric-grid">${metric('lot','Valor do lote',money(lot.price))}${metric('home','Valor da casa',money(home.price))}${metric('save','Entrada',money(s.entry))}${metric('calendar','1ª parcela',money(s.firstPayment))}${metric('chart','Prazo',`${s.months} meses`)}${metric('user','Renda sugerida',money(s.suggestedIncome))}</div></div><div class="chart-box"><h3 style="margin:0 0 8px">Evolução do saldo devedor (${s.system})</h3>${amortizationChart(s)}<p style="font-size:12px;color:rgba(255,255,255,.6);margin:8px 0 0">No ${s.system}, a parcela e a velocidade de redução do saldo mudam conforme o método de amortização.</p></div></div>
      <aside class="side-summary"><div class="panel summary-card"><h3>Seu lote e casa selecionados</h3><div class="selected-item"><span class="summary-img" style="background:${images.project}"></span><div><b>${lot.project}</b><p style="margin:4px 0;color:var(--muted);font-size:13px">${lot.city} • ${lot.name} • ${lot.area} m²</p></div></div><div class="selected-item"><span class="summary-img" style="background:${images[home.img]}"></span><div><b>${home.name}</b><p style="margin:4px 0;color:var(--muted);font-size:13px">${home.area} m² • ${home.style}</p></div></div></div><div class="panel summary-card"><h3>Resumo da proposta</h3><div class="summary-list">${summaryRow('Sistema de amortização',s.system)}${summaryRow('Valor financiado',money(s.financed))}${summaryRow('Taxa de juros (a.a.)','10,25%')}${summaryRow('CET estimado (a.a.)','11,45%')}${summaryRow('1ª parcela',money(s.firstPayment))}<div class="highlight-row"><span>Parcela final estimada</span><span>${money(s.lastPayment)}</span></div></div></div></aside>
    </div>
    <div class="container" style="padding:0"><div class="action-row">${actionCard('save','Salvar proposta','Guarde esta simulação e continue depois onde parou.','save-proposal')}${actionCard('whatsapp','Enviar para WhatsApp','Compartilhe esta simulação com sua família ou parceiro(a).','copy-whatsapp')}${actionCard('user','Falar com especialista','Receba uma proposta personalizada.','talk-specialist')}</div><p style="text-align:center;color:var(--muted);font-size:12px;margin-top:18px">Esta simulação não é aprovação de crédito. Condições sujeitas à análise cadastral, política comercial e disponibilidade de produto.</p></div>
  </div></section></main>`;
}
function getSim(lot,home){
  const total = lot.price + home.price;
  const entry = Math.min(Number(state.sim.downPayment)||0, total*.9);
  const financed = Math.max(total-entry,0);
  const months = Number(state.sim.months)||240;
  const annual = Number(state.sim.rate)||0.1025;
  const i = Math.pow(1+annual,1/12)-1;
  let firstPayment,lastPayment;
  if(state.sim.system==='SAC'){
    const amort = financed/months;
    firstPayment = amort + financed*i;
    lastPayment = amort + amort*i;
  } else {
    firstPayment = financed * (i*Math.pow(1+i,months))/(Math.pow(1+i,months)-1);
    lastPayment = firstPayment;
  }
  const suggestedIncome = Math.ceil((firstPayment/0.28)/500)*500;
  return {total,entry,financed,months,annual,i,firstPayment,lastPayment,suggestedIncome,system:state.sim.system};
}
function metric(i,l,v){return `<div class="metric"><span style="color:var(--orange)">${icon(i)}</span><div><span>${l}</span><b>${v}</b></div></div>`}
function summaryRow(l,v){return `<div class="summary-row"><span>${l}</span><b>${v}</b></div>`}
function actionCard(i,t,d,a){ return `<button class="action-card" data-action="${a}"><span class="iconbox">${icon(i)}</span><span><b>${t}</b><span>${d}</span></span><span style="margin-left:auto;color:var(--orange)">${icon('arrow')}</span></button>`; }
function amortizationChart(s){
  const w=520,h=220,p=28; const pts=[]; const pay=[];
  for(let k=0;k<=s.months;k+=Math.max(1,Math.round(s.months/12))){
    let balance;
    if(s.system==='SAC') balance = s.financed - (s.financed/s.months)*k;
    else balance = s.financed*Math.pow(1+s.i,k) - s.firstPayment*((Math.pow(1+s.i,k)-1)/s.i);
    balance=Math.max(balance,0);
    const x=p+(w-2*p)*(k/s.months); const y=h-p-(h-2*p)*(balance/s.financed);
    pts.push(`${x},${y}`); pay.push(`${x},${h-p-(h-2*p)*(.22)}`);
  }
  return `<svg class="chart-svg" viewBox="0 0 ${w} ${h}"><g opacity=".25" stroke="#fff">${[0,.25,.5,.75,1].map(v=>`<line x1="${p}" x2="${w-p}" y1="${p+(h-2*p)*v}" y2="${p+(h-2*p)*v}"/>`).join('')}</g><polyline points="${pay.join(' ')}" fill="none" stroke="#c7c7c7" stroke-dasharray="5 6" stroke-width="2"/><polyline points="${pts.join(' ')}" fill="none" stroke="#ff5a14" stroke-width="4" stroke-linecap="round"/><polygon points="${pts.join(' ')} ${w-p},${h-p} ${p},${h-p}" fill="rgba(255,90,20,.14)"/><g fill="rgba(255,255,255,.6)" font-size="11"><text x="${p}" y="${h-6}">0</text><text x="${w/2}" y="${h-6}" text-anchor="middle">${Math.round(s.months/2)}</text><text x="${w-p}" y="${h-6}" text-anchor="end">${s.months} meses</text><text x="3" y="${p+4}">${money(s.financed).replace(',00','')}</text><text x="3" y="${h-p}">R$ 0</text></g></svg>`;
}

function pageMarketplace(){
  const cats = ['Todos','Materiais','Acabamentos','Móveis Planejados','Energia Solar','Jardinagem','Decoração','Serviços Técnicos'];
  return `<main><section class="marketplace-hero" style="--hero-image:${images.hero}"><div class="container"><div class="eyebrow">Marketplace Futura Casa</div><h1 style="font-size:48px;letter-spacing:-.045em;margin:0 0 10px">Soluções para construir e viver melhor.</h1><p style="max-width:660px;color:rgba(255,255,255,.72)">Produtos, serviços e fornecedores curados para acelerar a obra, proteger o cliente e monetizar o ecossistema.</p><div class="searchbar"><input class="input" id="marketSearch" placeholder="Buscar produtos, serviços ou marcas..."><button class="btn btn-ghost" data-action="request-quote">${icon('file','icon mini')} Solicitar orçamento</button></div></div></section>
  <section class="section"><div class="container marketplace-layout"><div><div class="category-grid">${cats.map((c,i)=>`<button class="category-card ${i===0?'active':''}" data-action="market-category" data-category="${c}"><span class="iconbox">${icon(i===0?'sliders':i===1?'lot':i===2?'check':i===3?'home':i===4?'chart':i===5?'shield':i===6?'bag':'hardhat','icon mini')}</span><b>${c}</b><small style="display:block;color:var(--muted);margin-top:4px">${categorySub(c)}</small></button>`).join('')}</div><div class="section-title"><div><h2>Kits recomendados para sua obra</h2><p>Soluções completas com curadoria Futura Casa e preços especiais para clientes.</p></div><button class="link-action">Ver todos os kits ${icon('arrow','icon mini')}</button></div><div class="product-grid">${data.products.slice(0,6).map(productCard).join('')}</div></div>${cartPanel()}</div></section></main>`;
}
function categorySub(c){ return ({Todos:'Ver todos',Materiais:'Construção',Acabamentos:'Pisos e revestimentos','Móveis Planejados':'Cozinhas e closets','Energia Solar':'Sustentável',Jardinagem:'Áreas verdes',Decoração:'Estilo e personalidade','Serviços Técnicos':'Mão de obra'})[c]||''; }
function productCard(p){ return `<article class="product-card"><div class="thumb market" style="--thumb-image:${images[p.img]}"><span class="tag" style="position:absolute;left:10px;top:10px">${p.badge}</span></div><div class="card-body"><h4>${p.name}</h4><p>${p.desc}</p><div class="price">A partir de ${money(p.price)}</div><button class="mini-btn" data-action="add-cart" data-id="${p.id}">${icon('bag','icon mini')} Adicionar ao orçamento</button></div></article>`; }
function cartCount(){ return state.cart.reduce((a,c)=>a+(Number(c.qty)||0),0); }
function cartTotal(){ return state.cart.reduce((sum,c)=>sum+(byId(data.products,c.id)?.price||0)*(Number(c.qty)||1),0); }
function cartPanel(){
  const items = state.cart.map(c=>({...c, product:byId(data.products,c.id)})).filter(x=>x.product);
  return `<aside class="cart-panel"><div class="card-head"><h3>Seu orçamento</h3><span>${items.length} itens</span></div>${items.length?items.map(({product,qty})=>`<div class="cart-line"><span class="cart-thumb" style="background:${images[product.img]}"></span><div><b>${product.name}</b><span>${product.desc}</span><span>Qtd: ${qty}</span></div><div class="cart-price">${money(product.price*qty)}<br><button data-action="remove-cart" data-id="${product.id}" style="color:rgba(255,255,255,.55);margin-top:5px">${icon('trash','icon mini')}</button></div></div>`).join(''):'<div class="empty" style="background:rgba(255,255,255,.04);color:rgba(255,255,255,.58);border-color:rgba(255,255,255,.12)">Nenhum item no orçamento.</div>'}<div class="cart-total"><span>Total estimado<br><small>Em até 12x sem juros</small></span><b>${money(cartTotal())}</b></div><button class="btn btn-primary" style="width:100%" data-action="finish-budget">Finalizar orçamento ${icon('arrow','icon mini')}</button><button class="btn btn-ghost" style="width:100%;margin-top:10px" data-action="save-budget">Salvar orçamento</button><div class="reason-list"><div class="reason">${icon('shield')}<span><b>Parceiros verificados</b>Empresas avaliadas e certificadas.</span></div><div class="reason">${icon('check')}<span><b>Preços exclusivos</b>Condições especiais para clientes.</span></div><div class="reason">${icon('headset')}<span><b>Suporte especializado</b>Do planejamento à entrega.</span></div></div></aside>`;
}

function pageClient(route){
  const activeTab = route === 'obras' ? 'obra' : state.clientTab;
  return `<main class="client-layout"><aside class="client-sidebar">${brand()}<div class="client-nav">${[['obra','hardhat','Minha Obra'],['financeiro','calc','Financeiro'],['docs','file','Documentos'],['atendimentos','headset','Atendimentos'],['agenda','calendar','Agenda']].map(([t,i,l])=>`<button class="${activeTab===t?'active':''}" data-action="client-tab" data-tab="${t}">${icon(i)}${l}</button>`).join('')}</div><div class="consultor"><div style="display:flex;gap:12px;align-items:center;margin-bottom:14px"><span class="avatar">JM</span><div><b>Juliana Martins</b><small style="display:block;color:rgba(255,255,255,.58)">Especialista Futura Casa</small></div></div><div style="display:grid;gap:8px;color:rgba(255,255,255,.7);font-size:13px"><span>${icon('phone','icon mini')} (11) 4002-8922</span><span>${icon('file','icon mini')} juliana@futuracasa.com.br</span></div><button class="btn btn-ghost" style="width:100%;margin-top:14px" data-route="atendimento">Enviar mensagem</button></div></aside><section class="client-main">${clientContent(activeTab)}</section></main>`;
}
function clientContent(tab){
  if(tab !== 'obra') return clientSecondary(tab);
  return `<div class="client-top"><div><h1 style="margin:0;letter-spacing:-.04em">Olá, Rodrigo Andrade! 👋</h1><p style="color:var(--muted);margin:5px 0 0">Acompanhe cada etapa da construção da sua casa.</p></div><div style="display:flex;align-items:center;gap:14px"><button class="icon-btn" style="background:#fff;color:var(--dark);border-color:var(--line)">${icon('bell')}<span class="badge">3</span></button><span class="avatar">RA</span></div></div><div class="journey-bar"><div class="card-head"><h3>Sua jornada: do lote à casa pronta</h3><div><span style="color:rgba(255,255,255,.56)">Progresso geral</span><b style="display:block;color:var(--orange);font-size:30px">42%</b></div></div><div class="journey-track">${['Escolha do lote','Projeto e aprovação','Documentação','Início da obra','Estrutura','Acabamentos','Entrega da chave'].map((x,i)=>`<div class="journey-step ${i<3?'done':i===3?'active':''}"><span class="journey-dot">${i<3?icon('check','icon mini'):icon(i===3?'home':'hardhat','icon mini')}</span><b>${x}</b><small>${i<3?'Concluído':i===3?'Em andamento':'Pendente'}</small></div>`).join('')}</div></div><div class="client-grid"><div class="panel summary-card"><h3>Status da obra</h3><small style="color:var(--green)">Atualizado em 24/05/2025</small><div class="progress-number">42%</div><p>da obra concluída</p><div class="progress-bar"><i style="width:42%"></i></div><div style="background:var(--orange-soft);padding:14px;border-radius:14px;margin-top:18px"><b style="color:var(--orange)">Etapa atual: Fundação</b><br><span>Previsão de conclusão: 08/06/2025</span></div></div><div class="panel summary-card"><h3>Linha do tempo</h3><div class="timeline">${timelineItem('08/04/2025','Início da obra')}${timelineItem('22/04/2025','Terraplanagem concluída')}${timelineItem('08/05/2025','Fundação em andamento',true)}${timelineItem('08/06/2025','Conclusão da fundação')}${timelineItem('15/07/2025','Estrutura')}</div><button class="link-action">Ver linha do tempo completa ${icon('arrow','icon mini')}</button></div><div class="panel summary-card wide"><div class="card-head"><h3>Fotos do andamento</h3><button class="link-action">Ver todas ${icon('arrow','icon mini')}</button></div><div class="photo-grid"><span class="photo" style="--work-image:${images.work}"></span><div style="display:grid;gap:10px"><span class="photo" style="--work-image:${images.work}"></span><span class="photo" style="--work-image:${images.work}"></span></div></div></div><div class="panel summary-card"><div class="card-head"><h3>Etapas da construção</h3><button class="link-action">Ver todas</button></div><div class="stage-list">${stage('Terraplanagem','Concluído','done')}${stage('Fundação','Em andamento','active')}${stage('Estrutura','Pendente','wait')}${stage('Alvenaria','Pendente','wait')}${stage('Instalações','Pendente','wait')}${stage('Acabamentos','Pendente','wait')}</div></div><div class="panel summary-card"><div class="card-head"><h3>Documentos e contratos</h3><button class="link-action">Ver todos</button></div>${['Contrato de Construção','Projeto Arquitetônico','Projeto Estrutural','Memorial Descritivo','Alvará de Construção'].map(d=>`<div class="doc-line"><span>${icon('file','icon mini')} ${d}<small style="display:block;color:var(--muted)">Atualizado em 18/03/2025</small></span><button class="chip">PDF</button></div>`).join('')}</div><div class="panel summary-card"><div class="card-head"><h3>Boletos e pagamentos</h3><button class="link-action">Ver todos</button></div><div class="pay-line"><span><b>Próxima parcela</b><br><strong style="font-size:22px">${money(35240)}</strong></span><span><b>Vencimento</b><br>10/06/2025</span><button class="btn btn-primary" data-action="view-boleto">Ver boleto</button></div><div class="chart-bars">${[28,34,42,40,34,33].map((v,i)=>`<i class="bar ${i<3?'paid':''}" style="height:${v*1.7}px"><span>${['Mar','Abr','Mai','Jun','Jul','Ago'][i]}</span></i>`).join('')}</div></div><div class="panel summary-card"><div class="card-head"><h3>Atendimentos recentes</h3><button class="link-action">Ver todos</button></div>${state.tickets.slice(0,3).map(t=>`<div class="ticket-line"><span>${icon('headset','icon mini')} <b>${t.title}</b><small style="display:block;color:var(--muted)">Respondido por ${t.owner}</small></span><span class="status done">${t.status}<br><small>${t.date}</small></span></div>`).join('')}<button class="btn btn-primary" style="width:100%;margin-top:12px" data-route="atendimento">Abrir novo atendimento</button></div><div class="panel summary-card"><h3>Checklist de aprovações</h3><div class="donut"><span class="hole"><b>7</b><small>de 10</small></span></div><div style="display:grid;gap:6px;margin-top:12px;color:var(--muted)"><span>🟢 7 aprovadas</span><span>🟠 2 pendentes</span><span>🔴 1 rejeitada</span></div></div></div>`;
}
function timelineItem(date,text,active=false){return `<div class="timeline-item ${active?'active':''}"><b>${date}</b><br><span style="color:${active?'var(--orange)':'var(--muted)'}">${text}</span></div>`}
function stage(name,status,klass){return `<div class="stage"><span class="iconbox" style="width:32px;height:32px;background:${klass==='active'?'var(--orange)':klass==='done'?'var(--green)':'#ddd'}">${icon(klass==='done'?'check':'hardhat','icon mini')}</span><b>${name}</b><span class="stage-line"></span><span class="status ${klass}">${status}</span></div>`}
function clientSecondary(tab){
  const titles = {financeiro:'Financeiro',docs:'Documentos',atendimentos:'Atendimentos',agenda:'Agenda'};
  return `<div class="client-top"><div><h1 style="margin:0;letter-spacing:-.04em">${titles[tab]||'Área do Cliente'}</h1><p style="color:var(--muted);margin:5px 0 0">Centralize informações, arquivos e próximos passos.</p></div></div><div class="client-grid"><div class="panel summary-card wide"><h3>${titles[tab]}</h3>${tab==='financeiro'?financeiroContent():tab==='docs'?docsContent():tab==='agenda'?agendaContent():ticketsContent()}</div><div class="panel summary-card"><h3>Acesso rápido</h3>${['Minha Obra','Pagamentos','Documentos','Atendimento'].map(x=>`<button class="feature-card" style="min-height:auto;width:100%;margin-bottom:10px;text-align:left" data-action="quick-access"><b>${x}</b><p>Ver detalhes e próximos passos.</p></button>`).join('')}</div></div>`;
}
function financeiroContent(){return `<div class="pay-line"><span>Saldo contratado</span><b>${money(530000)}</b></div><div class="pay-line"><span>Total pago</span><b>${money(210000)}</b></div><div class="pay-line"><span>Próxima parcela</span><b>${money(35240)}</b></div><button class="btn btn-primary" data-action="view-boleto">Gerar segunda via</button>`}
function docsContent(){return ['Contrato de compra e venda','Contrato de construção','Projeto arquitetônico','Memorial descritivo','ART/RRT'].map(x=>`<div class="doc-line"><span>${icon('file','icon mini')} ${x}</span><button class="chip" data-action="download-doc">Baixar PDF</button></div>`).join('')}
function ticketsContent(){return state.tickets.map(t=>`<div class="ticket-card"><div><b>${t.title}</b><span>${t.date} • ${t.owner}</span></div><span class="status done">${t.status}</span></div>`).join('')}
function agendaContent(){return ['Vistoria da fundação - 08/06/2025','Reunião de acabamentos - 20/06/2025','Validação de instalações - 05/07/2025'].map(x=>`<div class="doc-line"><span>${icon('calendar','icon mini')} ${x}</span><button class="chip">Adicionar</button></div>`).join('')}

function pageManage(){
  return `<main class="manage-layout"><aside class="manage-sidebar">${brand()}<div class="manage-nav">${[['Dashboard','home'],['Leads','user'],['Simulações','calc'],['Clientes','user'],['Obras','hardhat'],['Marketplace','bag'],['Financeiro','chart'],['Relatórios','file'],['Atendimento','headset'],['Configurações','settings']].map((x,i)=>`<button class="${i===0?'active':''}">${icon(x[1])}${x[0]}</button>`).join('')}</div><div class="consultor"><b>Precisa de ajuda?</b><p style="color:rgba(255,255,255,.62)">Acesse a central de suporte.</p><button class="btn btn-ghost" style="width:100%" data-route="atendimento">Abrir suporte</button></div></aside><section class="manage-main"><div class="manage-head"><div><h1 style="margin:0;letter-spacing:-.04em">Painel Comercial e Operacional</h1><p style="margin:4px 0 0;color:rgba(255,255,255,.58)">Visão geral da operação e performance do negócio</p></div><div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap"><button class="btn btn-ghost">01/05/2025 – 31/05/2025</button><button class="btn btn-ghost">Comparar período anterior</button><button class="icon-btn">${icon('bell')}<span class="badge">8</span></button><span class="avatar">MS</span></div></div><div class="kpi-row">${kpi('Leads','1.256','↑ 18,6%','up')}${kpi('Propostas geradas','386','↑ 14,3%','up')}${kpi('Simulações','842','↑ 22,1%','up')}${kpi('Conversão','30,7%','↑ 3,2 p.p.','up')}${kpi('Obras em andamento','48','↑ 9,1%','up')}${kpi('Clientes ativos','1.128','↑ 12,7%','up')}${kpi('Marketplace GMV','R$ 2,45M','↑ 16,4%','up')}${kpi('Tickets','192','↓ -8,7%','down')}</div><div class="dash-grid"><div class="dash-panel"><h3>Funil comercial</h3>${funnelSvg()}</div><div class="dash-panel"><h3>Evolução de indicadores</h3>${lineSvg()}</div><div class="dash-panel"><h3>Conversão ao longo do tempo</h3>${areaSvg()}</div><div class="dash-panel"><h3>Distribuição de leads</h3><div class="donut-dark"><span class="hole"><b>1.256</b><small>Total</small></span></div></div><div class="dash-panel"><h3>Leads recentes</h3>${['Ana Flávia Souza','Rafael Pereira','Lucas Martins','Juliana Santos','Marcos Costa'].map((n,i)=>`<div class="list-row"><span><b>${n}</b><small>${['São Paulo','Campinas','Sorocaba','Uberlândia','Monte Carmelo'][i]} • Casa ${i+1}</small></span><span class="mini-tag ${i===2?'red':''}">${i%2?'Morno':'Quente'}</span></div>`).join('')}</div><div class="dash-panel"><h3>Oportunidades</h3>${['Solaris - Casa 24','Parque das Árvores - Casa 16','Villa das Palmeiras - Casa 7','Parque dos Ipês - Casa 3'].map((n,i)=>`<div class="list-row"><span><b>${n}</b><small>Proposta: ${money([780000,650000,920000,540000][i])}</small></span><span class="mini-tag">${[80,60,40,30][i]}%</span></div>`).join('')}</div><div class="dash-panel"><h3>Obras críticas</h3>${['Solaris - Casa 12','Jardim do Sol - Casa 5','Villa das Palmeiras - Casa 9','Parque dos Ipês - Casa 1'].map((n,i)=>`<div class="list-row"><span><b>${n}</b><small>Atraso: ${[7,3,2,1][i]} dias</small></span><span class="mini-tag red">Ver</span></div>`).join('')}</div><div class="dash-panel"><h3>Performance por empreendimento</h3><table class="table"><thead><tr><th>Empreendimento</th><th>Vendas</th><th>VGV</th><th>Conv.</th></tr></thead><tbody>${[['Solaris',28,'14,5M','32,6%'],['Parque das Árvores',21,'10,2M','28,4%'],['Reserva das Águas',17,'8,7M','31,1%'],['Residencial Horizon',12,'7,3M','29,3%']].map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td></tr>`).join('')}</tbody></table></div><div class="dash-panel wide2"><h3>Atividades recentes</h3><table class="table"><tbody><tr><td>Mariana Silva</td><td>Criou nova simulação</td><td>Simulação #8421</td><td>Hoje, 10:25</td></tr><tr><td>João Santos</td><td>Atualizou status da obra</td><td>Solaris - Casa 12</td><td>Hoje, 09:47</td></tr><tr><td>Carla Mendes</td><td>Gerou proposta comercial</td><td>Proposta #3867</td><td>Ontem, 18:33</td></tr></tbody></table></div><div class="dash-panel"><h3>Alertas e notificações</h3>${['5 obras estão com atraso no cronograma','12 propostas aguardam retorno','8 tickets não respondidos','Atualização disponível no Marketplace'].map(x=>`<div class="list-row"><span>${x}</span><button class="link-action">Abrir</button></div>`).join('')}</div><div class="dash-panel"><h3>Resumo financeiro</h3>${summaryDark('Receita bruta','R$ 2.856.400,00','↑ 15,8%')}${summaryDark('Receita líquida','R$ 2.245.300,00','↑ 14,2%')}${summaryDark('Comissões','R$ 312.450,00','↑ 11,7%')}${summaryDark('Margem líquida','25,6%','↑ 1,9 p.p.')}</div></div></section></main>`;
}
function kpi(t,v,tr,dir){return `<div class="kpi"><span>${t}</span><b>${v}</b><small class="trend ${dir}">${tr}</small></div>`}
function funnelSvg(){return `<svg class="funnel" viewBox="0 0 360 190"><defs><linearGradient id="fg" x1="0" x2="0" y1="0" y2="1"><stop stop-color="#ff5a14"/><stop offset="1" stop-color="#ffd1b8"/></linearGradient></defs><polygon points="45,15 315,15 260,65 100,65" fill="url(#fg)"/><polygon points="100,70 260,70 225,115 135,115" fill="#ff8a48"/><polygon points="135,120 225,120 190,170 170,170" fill="#ffd1b8"/><g fill="#fff" font-size="13"><text x="10" y="25">Leads 1.256</text><text x="10" y="80">Qualificados 842</text><text x="10" y="132">Propostas 386</text><text x="315" y="25">100%</text><text x="315" y="80">67%</text><text x="315" y="132">31%</text></g></svg>`}
function lineSvg(){return `<svg class="line-chart" viewBox="0 0 360 190"><g stroke="rgba(255,255,255,.12)">${[35,75,115,155].map(y=>`<line x1="24" x2="340" y1="${y}" y2="${y}"/>`).join('')}</g><polyline points="25,130 60,110 95,116 130,84 165,96 200,70 235,78 270,62 305,74 340,54" fill="none" stroke="#ff5a14" stroke-width="3"/><polyline points="25,150 60,138 95,142 130,125 165,120 200,118 235,104 270,110 305,106 340,96" fill="none" stroke="#65a9ff" stroke-width="3"/><polyline points="25,165 60,160 95,158 130,150 165,148 200,145 235,138 270,142 305,136 340,132" fill="none" stroke="#ddd" stroke-width="3"/></svg>`}
function areaSvg(){return `<svg class="line-chart" viewBox="0 0 360 190"><defs><linearGradient id="ag" x1="0" x2="0" y1="0" y2="1"><stop stop-color="rgba(255,90,20,.55)"/><stop offset="1" stop-color="rgba(255,90,20,0)"/></linearGradient></defs><g stroke="rgba(255,255,255,.12)">${[35,75,115,155].map(y=>`<line x1="24" x2="340" y1="${y}" y2="${y}"/>`).join('')}</g><polyline points="25,130 60,118 95,110 130,100 165,88 200,94 235,84 270,104 305,96 340,82" fill="none" stroke="#ff5a14" stroke-width="3"/><polygon points="25,130 60,118 95,110 130,100 165,88 200,94 235,84 270,104 305,96 340,82 340,170 25,170" fill="url(#ag)"/></svg>`}
function summaryDark(l,v,t){return `<div class="list-row"><span>${l}</span><span><b>${v}</b><small class="trend up" style="display:block;text-align:right">${t}</small></span></div>`}

function pageSupport(){
  return `<main>${pageHero('Atendimento','Central de relacionamento para tirar dúvidas, abrir chamados e acelerar decisões do cliente.','Início / Atendimento')}<section class="section"><div class="container support-grid"><div class="panel support-card"><div class="section-title"><div><h2>Abrir novo atendimento</h2><p>Registre a solicitação e direcione para o especialista correto.</p></div></div><form class="ticket-form" data-action="ticket-form"><div class="field"><label>Nome</label><input class="input" name="name" value="Rodrigo Andrade" required></div><div class="field"><label>Assunto</label><input class="input" name="title" placeholder="Ex.: dúvida sobre acabamento" required></div><div class="field"><label>Categoria</label><select name="category"><option>Obra</option><option>Financeiro</option><option>Documentos</option><option>Marketplace</option></select></div><div class="field"><label>Mensagem</label><textarea name="message" rows="5" placeholder="Descreva sua dúvida com objetividade"></textarea></div><button class="btn btn-primary">Abrir atendimento ${icon('arrow','icon mini')}</button></form><hr style="border:0;border-top:1px solid var(--line);margin:28px 0"><h3>Chamados recentes</h3><div class="ticket-list">${state.tickets.map(t=>`<div class="ticket-card"><div><b>${t.title}</b><span>${t.date} • Respondido por ${t.owner}</span></div><span class="status done">${t.status}</span></div>`).join('')}</div></div><aside class="contact-card"><h2 style="margin-top:0">Fale com um especialista</h2><p style="color:rgba(255,255,255,.68)">Atendimento humano, com histórico da sua jornada e contexto da sua obra.</p><div class="contact-options"><button class="btn btn-primary" data-action="copy-phone">${icon('whatsapp','icon mini')} WhatsApp</button><button class="btn btn-ghost" data-action="schedule-call">${icon('calendar','icon mini')} Agendar chamada</button><button class="btn btn-ghost" data-action="send-email">${icon('file','icon mini')} Enviar e-mail</button></div></aside></div></section></main>`;
}

function openModal(title, body, actions=''){
  const host = document.getElementById('modalHost');
  host.innerHTML = `<div class="modal"><div class="modal-head"><h3 style="margin:0">${title}</h3><button data-action="close-modal" class="icon-btn" style="background:#fff;color:var(--dark);border-color:var(--line)">${icon('x')}</button></div><div class="modal-body">${body}${actions}</div></div>`;
  host.classList.add('show'); host.setAttribute('aria-hidden','false');
}
function closeModal(){ const host=document.getElementById('modalHost'); host.classList.remove('show'); host.setAttribute('aria-hidden','true'); host.innerHTML=''; }
function toast(msg,type='ok'){
  const host = document.getElementById('toastHost');
  const node = document.createElement('div'); node.className=`toast ${type}`; node.innerHTML=`<span class="iconbox">${icon(type==='ok'?'check':'bell','icon mini')}</span><span>${msg}</span>`;
  host.appendChild(node); setTimeout(()=>{ node.style.opacity='0'; node.style.transform='translateY(8px)'; setTimeout(()=>node.remove(),250); }, 3200);
}

function proposalText(){
  const lot = byId(data.lots,state.selectedLot) || data.lots[0];
  const home = byId(data.homes,state.selectedHome) || data.homes[0];
  const s = getSim(lot,home);
  return `Futura Casa - Simulação\nLote: ${lot.project} / ${lot.name} (${lot.area} m²)\nCasa: ${home.name} (${home.area} m²)\nInvestimento total: ${money(s.total)}\nEntrada: ${money(s.entry)}\nValor financiado: ${money(s.financed)}\nSistema: ${s.system}\nPrazo: ${s.months} meses\n1ª parcela estimada: ${money(s.firstPayment)}\nRenda sugerida: ${money(s.suggestedIncome)}`;
}
function saveProposal(){
  const lot = byId(data.lots,state.selectedLot) || data.lots[0]; const home = byId(data.homes,state.selectedHome) || data.homes[0]; const s = getSim(lot,home);
  state.proposals.unshift({id:Date.now(),lot:lot.id,home:home.id,total:s.total,entry:s.entry,payment:s.firstPayment,date:new Date().toLocaleDateString('pt-BR')});
  saveState(); toast('Proposta salva na área do cliente.');
}
async function copyText(text){ try{ await navigator.clipboard.writeText(text); toast('Resumo copiado. Agora é só colar no WhatsApp.'); }catch{ openModal('Resumo da simulação',`<textarea class="input" rows="9">${esc(text)}</textarea><p style="color:var(--muted)">Copie manualmente o texto acima.</p>`); } }

function handleClick(e){
  const routeEl = e.target.closest('[data-route]');
  if(routeEl){ e.preventDefault(); go(routeEl.dataset.route); return; }
  const actionEl = e.target.closest('[data-action]');
  if(!actionEl) return;
  const a = actionEl.dataset.action;
  if(a==='close-modal') return closeModal();
  if(a==='mobile-menu') return openModal('Menu Futura Casa', `<div style="display:grid;gap:8px">${navItems.map(([r,l])=>`<button class="btn btn-outline" data-route="${r}">${l}</button>`).join('')}</div>`);
  if(a==='login') return openModal('Entrar / Cadastrar', `<div class="ticket-form"><input class="input" placeholder="E-mail"><input class="input" placeholder="Senha" type="password"><button class="btn btn-primary" data-action="fake-login">Entrar</button><button class="btn btn-outline" data-action="fake-login">Criar cadastro</button></div>`);
  if(a==='fake-login'){ closeModal(); toast('Acesso demonstrativo ativado.'); return; }
  if(a==='open-cart'){ go('marketplace'); setTimeout(()=>toast('Seu orçamento está no painel lateral.'),50); return; }
  if(a==='favorite'){ toggleArray(state.favorites, actionEl.dataset.id); render(); toast('Favoritos atualizados.'); return; }
  if(a==='clear-filters'){ state.filters = structuredClone(defaults.filters); render(); toast('Filtros limpos.'); return; }
  if(a==='apply-filters'){ toast('Filtros aplicados.'); return; }
  if(a==='set-filter'){ state.filters[actionEl.dataset.filterKey] = isNaN(actionEl.dataset.filterValue) ? actionEl.dataset.filterValue : Number(actionEl.dataset.filterValue); render(); return; }
  if(a==='details-lot'){ const l=byId(data.lots,actionEl.dataset.id); return openModal(`${l.name} • ${l.project}`, `<p><b>Área:</b> ${l.area} m²<br><b>Dimensões:</b> ${l.dims}<br><b>Valor:</b> ${money(l.price)}<br><b>Status:</b> ${l.status}</p><button class="btn btn-primary" data-action="choose-lot" data-id="${l.id}">Usar no simulador</button>`); }
  if(a==='details-home'){ const h=byId(data.homes,actionEl.dataset.id); return openModal(h.name, `<p><b>Estilo:</b> ${h.style}<br><b>Área:</b> ${h.area} m²<br><b>Suítes:</b> ${h.suites}<br><b>Valor estimado:</b> ${money(h.price)}</p><button class="btn btn-primary" data-action="choose-home" data-id="${h.id}">Usar no simulador</button>`); }
  if(a==='choose-lot'){ state.selectedLot = Number(actionEl.dataset.id); closeModal(); go('simulador'); return; }
  if(a==='choose-home'){ state.selectedHome = actionEl.dataset.id; closeModal(); go('simulador'); return; }
  if(a==='compare-home'){ if(!state.compare.includes(actionEl.dataset.id)) state.compare = [...state.compare, actionEl.dataset.id].slice(-3); render(); toast('Casa adicionada à comparação.'); return; }
  if(a==='remove-compare'){ state.compare = state.compare.filter(id=>id!==actionEl.dataset.id); render(); return; }
  if(a==='clear-compare'){ state.compare=[]; render(); return; }
  if(a==='add-compare'){ const next = data.homes.find(h=>!state.compare.includes(h.id)); if(next) state.compare.push(next.id); render(); return; }
  if(a==='show-compare'){ const hs=state.compare.map(id=>byId(data.homes,id)).filter(Boolean); return openModal('Comparação de casas', `<table style="width:100%;border-collapse:collapse">${hs.map(h=>`<tr><td style="padding:10px;border-bottom:1px solid var(--line)"><b>${h.name}</b><br>${h.style}</td><td style="padding:10px;border-bottom:1px solid var(--line)">${h.area} m²</td><td style="padding:10px;border-bottom:1px solid var(--line)">${money(h.price)}</td></tr>`).join('')}</table>`); }
  if(a==='simulate-combo'){ state.selectedLot=Number(actionEl.dataset.lot); state.selectedHome=actionEl.dataset.home; go('simulador'); return; }
  if(a==='map-lot'){ const n=Number(actionEl.dataset.id); const real=data.lots.find(l=>l.id===n) || data.lots[n % data.lots.length]; state.selectedLot=real.id; render(); toast(`${real.name} selecionado para simulação.`); return; }
  if(a==='set-system'){ state.sim.system=actionEl.dataset.system; render(); return; }
  if(a==='amortization-help') return openModal('PRICE x SAC', '<p><b>PRICE</b>: parcelas tendem a ser fixas, com maior previsibilidade mensal.</p><p><b>SAC</b>: a primeira parcela tende a ser maior, mas cai ao longo do tempo porque a amortização é constante.</p>');
  if(a==='save-proposal') return saveProposal();
  if(a==='copy-whatsapp') return copyText(proposalText());
  if(a==='talk-specialist'){ go('atendimento'); return; }
  if(a==='add-cart'){ const item=state.cart.find(c=>c.id===actionEl.dataset.id); if(item) item.qty += 1; else state.cart.push({id:actionEl.dataset.id,qty:1}); render(); toast('Item adicionado ao orçamento.'); return; }
  if(a==='remove-cart'){ state.cart = state.cart.filter(c=>c.id!==actionEl.dataset.id); render(); return; }
  if(a==='finish-budget') return openModal('Orçamento enviado', `<p>O orçamento de <b>${money(cartTotal())}</b> foi preparado para análise comercial.</p><p style="color:var(--muted)">No produto real, esta ação integraria com CRM, WhatsApp e fornecedores parceiros.</p><button class="btn btn-primary" data-action="close-modal">Entendi</button>`);
  if(a==='save-budget'){ toast('Orçamento salvo no histórico do cliente.'); return; }
  if(a==='request-quote'){ toast('Selecione produtos ou serviços para montar o orçamento.'); return; }
  if(a==='client-tab'){ state.clientTab=actionEl.dataset.tab; state.route='cliente'; history.replaceState(null,'','#cliente'); render(); return; }
  if(a==='view-boleto') return openModal('Boleto demonstrativo', `<p><b>Parcela:</b> ${money(35240)}<br><b>Vencimento:</b> 10/06/2025</p><button class="btn btn-primary" onclick="window.print()">Imprimir boleto demonstrativo</button>`);
  if(a==='download-doc'){ toast('Documento demonstrativo pronto para download.'); return; }
  if(a==='copy-phone') return copyText('(11) 4002-8922');
  if(a==='schedule-call') return openModal('Agendar chamada', `<div class="ticket-form"><input class="input" type="date"><select><option>09:00</option><option>11:00</option><option>15:00</option></select><button class="btn btn-primary" data-action="close-modal">Confirmar agenda</button></div>`);
  if(a==='send-email') return copyText('atendimento@futuracasa.com.br');
  if(a==='market-category'){ document.querySelectorAll('.category-card').forEach(el=>el.classList.remove('active')); actionEl.classList.add('active'); toast(`Categoria selecionada: ${actionEl.dataset.category}`); return; }
  if(a==='quick-access'){ toast('Módulo aberto na versão demonstrativa.'); return; }
}
function handleInput(e){
  const el = e.target;
  if(el.matches('[data-filter]')){ const key=el.dataset.filter; state.filters[key] = isNaN(el.value) ? el.value : Number(el.value); render(); return; }
  if(el.matches('[data-sim-field]')){
    const key=el.dataset.simField;
    if(key==='lot') state.selectedLot = Number(el.value);
    else if(key==='home') state.selectedHome = el.value;
    else state.sim[key] = Number(el.value);
    render(); return;
  }
}
function handleSubmit(e){
  const form = e.target.closest('form[data-action="ticket-form"]');
  if(!form) return;
  e.preventDefault();
  const title = new FormData(form).get('title') || 'Novo atendimento';
  state.tickets.unshift({id:Date.now(), title:String(title), status:'Aberto', date:new Date().toLocaleDateString('pt-BR'), owner:'Equipe Futura Casa'});
  saveState(); render(); toast('Atendimento aberto com sucesso.');
}
function toggleArray(arr,id){ const i=arr.indexOf(id); if(i>=0) arr.splice(i,1); else arr.push(id); }
function go(route){ state.route = route || 'home'; closeModal(); history.pushState(null,'',`#${state.route}`); render(); window.scrollTo({top:0,behavior:'smooth'}); }
function initRoute(){ const hash = location.hash.replace('#',''); state.route = hash || state.route || 'home'; if(!navItems.some(([r])=>r===state.route)) state.route='home'; }
window.addEventListener('hashchange',()=>{ initRoute(); render(); });
window.addEventListener('popstate',()=>{ initRoute(); render(); });
document.addEventListener('click', handleClick);
document.addEventListener('input', handleInput);
document.addEventListener('change', handleInput);
document.addEventListener('submit', handleSubmit);

if('serviceWorker' in navigator && location.protocol.startsWith('http')){
  navigator.serviceWorker.register('./service-worker.js').catch(()=>{});
}
initRoute(); render();
