(() => {
  const header = document.getElementById('siteHeader');
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('primaryNav');
  const backTop = document.getElementById('backTop');
  const toast = document.getElementById('toast');
  const year = document.getElementById('currentYear');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (year) year.textContent = new Date().getFullYear();

  // Reading progress line — subtle editorial detail.
  const progress = document.createElement('div');
  progress.className = 'scroll-progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.appendChild(progress);

  if (menuToggle && nav) {
    const closeMenu = () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
    };
    menuToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
    document.addEventListener('click', event => {
      if (nav.classList.contains('open') && !nav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
    });
  }

  const updateScrollUI = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const amount = max > 0 ? (window.scrollY / max) * 100 : 0;
    progress.style.width = `${amount}%`;
    if (header) header.classList.toggle('scrolled', window.scrollY > 12);
    if (backTop) backTop.classList.toggle('visible', window.scrollY > 500);
  };
  window.addEventListener('scroll', updateScrollUI, { passive: true });
  window.addEventListener('resize', updateScrollUI, { passive: true });
  updateScrollUI();
  if (backTop) backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' }));

  // Reveal full sections and individual content in a deliberate stagger.
  const revealItems = document.querySelectorAll(
    '.practice-row, .person-card, .content-card, .process-grid article, .insight-feature, .insight-list article, .attorney-grid article, .insight-page-item, .contact-box, .consult-form, .firm-copy, .intro-grid > *, .section-heading, .page-content > .container-wide > *, .page-cta .container-wide > *'
  );
  revealItems.forEach((element, index) => {
    element.classList.add('fade-up');
    if (!element.style.getPropertyValue('--reveal-delay')) {
      const delay = Math.min((index % 4) * 85, 255);
      element.style.setProperty('--reveal-delay', `${delay}ms`);
      element.style.transitionDelay = `${delay}ms`;
    }
  });
  document.querySelectorAll('.hero-image-wrap, .firm-photo, .insight-feature img, .attorney-grid img').forEach(element => element.classList.add('reveal-image'));
  const revealTargets = [...revealItems, ...document.querySelectorAll('.reveal-image')];
  if ('IntersectionObserver' in window && !reducedMotion) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    revealTargets.forEach(element => observer.observe(element));
  } else {
    revealTargets.forEach(element => element.classList.add('in-view'));
  }

  let toastTimer;
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('show'), 4500);
  }

  const form = document.getElementById('consultForm');
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      showToast('Thank you — this is a demo form. No information was sent or saved.');
      form.reset();
    });
  }
  document.querySelectorAll('[data-demo-form]').forEach(demoForm => {
    demoForm.addEventListener('submit', event => {
      event.preventDefault();
      if (!demoForm.reportValidity()) return;
      showToast('Demo only: this form is not connected to a server.');
      demoForm.reset();
    });
  });

  // Give the first viewport a gentle entrance without blocking interaction.
  if (!reducedMotion) document.body.classList.add('motion-ready');
})();
