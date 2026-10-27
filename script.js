const projects = [
  {
    title: 'Atração de talentos',
    meta: 'Recruitment Marketing · Employer Branding · Eureca · 2026',
    intro: 'Estratégias de atração para programas de estágio, trainee e jovem aprendiz de marcas como Bradesco Seguros, Nestlé, Vivo, Serasa Experian e Atvos.',
    body: `ATUAÇÃO — Planejamento e execução de estratégias de Recruitment Marketing e Employer Branding.

ENTREGAS — Campanhas de comunicação multicanal, planejamento de conteúdo, copywriting e e-mail marketing com gestão via RD Station.

INTERFACE — Relacionamento com clientes, acompanhamento dos projetos, análise de KPIs e apoio à otimização da jornada de candidatura.`,
    art: 'art-food',
  },
  {
    title: 'Conteúdo com estratégia',
    meta: 'Social Media · Branding · LinkedIn · Pode Rio Estúdio · 2025–2026',
    intro: 'Planejamento de conteúdo para LinkedIn com foco em branding, marketing de conteúdo e fortalecimento da presença digital da marca.',
    body: `ATUAÇÃO — Estratégia de conteúdo, planejamento editorial e calendário de publicações.

ENTREGAS — Produção de copy, revisão de textos e otimização SEO para ampliar alcance orgânico e engajamento.

OUTRA FRENTE — Gestão de projetos audiovisuais e operações, organização de processos, prioridades, equipe multidisciplinar e entregas.`,
    art: 'art-culture',
  },
  {
    title: 'Comunicação que acompanha',
    meta: 'Marketing · CRM · Customer Experience · Descomplica · 2020–2024',
    intro: 'Comunicação multicanal e gestão de comunidades ao longo da jornada dos alunos, conectando conteúdo, relacionamento e experiência do cliente.',
    body: `ATUAÇÃO — Community management, marketing de conteúdo, CRM, Customer Success e atendimento comercial.

CANAIS — WhatsApp, Instagram, LinkedIn, TikTok, X, e-mail, Telegram, push e notificações.

ENTREGAS — Campanhas e réguas de comunicação via HubSpot, FAQs, cronogramas editoriais, gestão de crises, acompanhamento de projetos e apresentações com indicadores.`,
    art: 'art-wellness',
  },
];

const detail = document.querySelector('#detail');

function openProject(index) {
  const project = projects[index];
  document.querySelector('#dTitle').textContent = project.title;
  document.querySelector('#dMeta').textContent = project.meta;
  document.querySelector('#dIntro').textContent = project.intro;
  document.querySelector('#dBody').innerHTML = project.body.replaceAll('\n', '<br>');
  document.querySelector('#dArt').className = `detail-art art ${project.art}`;
  detail.classList.add('open');
  detail.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.querySelector('.close').focus();
}

function closeProject() {
  detail.classList.remove('open');
  detail.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('.project-card').forEach((card) => {
  card.addEventListener('click', () => openProject(Number(card.dataset.project)));
  card.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'touch') return;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    card.style.transform = `perspective(900px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg) translateY(-3px)`;
  });
  card.addEventListener('pointerleave', () => {
    card.style.transform = '';
  });
});

document.querySelector('.close').addEventListener('click', closeProject);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeProject();
});
document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach((link) => {
  link.addEventListener('click', () => {
    if (detail.classList.contains('open')) closeProject();
  });
});
document.addEventListener('pointermove', (event) => {
  const cursor = document.querySelector('.cursor');
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
});
