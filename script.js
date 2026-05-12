// Nav scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Mobile nav
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.getElementById('nav-links');

  navToggle?.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  // Aroma tabs
  document.querySelectorAll('.aroma-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const panel = tab.dataset.panel;
      document.querySelectorAll('.aroma-tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      document.querySelectorAll('.aromas-panel').forEach(p => {
        p.classList.remove('active');
        p.hidden = true;
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const activePanel = document.getElementById('panel-' + panel);
      activePanel.classList.add('active');
      activePanel.hidden = false;
    });
  });

  // Catalog preview modal
  const modal = document.getElementById('catalogo-modal');
  const modalImg = modal?.querySelector('img');
  const modalClose = modal?.querySelector('.modal-close');

  document.querySelectorAll('.catalogo-card img').forEach(img => {
    img.addEventListener('click', () => {
      if (!modal || !modalImg) return;
      modalImg.src = img.currentSrc || img.src;
      modalImg.alt = img.alt;
      if (typeof modal.showModal === 'function') {
        modal.showModal();
      }
    });
  });

  modalClose?.addEventListener('click', () => modal?.close());
  modal?.addEventListener('click', event => {
    if (event.target === modal) modal.close();
  });

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }
