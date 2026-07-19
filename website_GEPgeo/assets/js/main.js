/* ==========================================================================
   GEPGEO — main.js
   Navegação, WhatsApp, formulários (EmailJS), pesquisa, FAQ, galeria, etc.
   ========================================================================== */

(function () {
  "use strict";

  /* -------------------------------------------------------
     0. CONFIGURAÇÃO GERAL — editar aqui os dados da empresa
  --------------------------------------------------------*/
  window.GEPGEO_CONFIG = {
    whatsappNumber: "244928305960", // formato internacional sem "+" nem espaços
    whatsappDefaultMessage: "Olá GEPGEO, gostaria de mais informações sobre os vossos serviços.",
    email: "gpgeoconsultoria@gmail.com",
    phone: "+244 928 305 960",
    address: "Benfica, Via Expressa (em frente ao Colégio Eduprix), Luanda, Angola",
    // Coordenadas aproximadas de Benfica, Luanda — ajustar para a localização exacta
    lat: -8.8964,
    lng: 13.2302,
    social: {
      facebook: "https://www.facebook.com/gepgeo.engenheria",
      instagram: "https://instagram.com/gepgeoconsultoria",
      linkedin: "https://linkedin.com/company/gepgeoconsultoria",
      youtube: "https://youtube.com/@gepgeoconsultoria"
    },
    // EmailJS — criar conta gratuita em https://www.emailjs.com
    // 1) Adicionar um "Email Service" (Gmail) e obter SERVICE_ID
    // 2) Criar um "Email Template" para cada formulário e obter os TEMPLATE_ID
    // 3) Copiar a PUBLIC_KEY em Account > General
    emailjs: {
      publicKey: "SUBSTITUIR_PUBLIC_KEY",
      serviceId: "SUBSTITUIR_SERVICE_ID",
      templates: {
        contacto: "SUBSTITUIR_TEMPLATE_CONTACTO",
        servico: "SUBSTITUIR_TEMPLATE_SERVICO",
        curso: "SUBSTITUIR_TEMPLATE_CURSO",
        agendamento: "SUBSTITUIR_TEMPLATE_AGENDAMENTO"
      }
    }
  };

  const cfg = window.GEPGEO_CONFIG;

  /* -------------------------------------------------------
     1. Cabeçalho: sombra ao rolar + menu mobile
  --------------------------------------------------------*/
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");

  const onScroll = () => {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
    const top = document.querySelector(".fab-top");
    if (top) top.classList.toggle("is-visible", window.scrollY > 480);
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      const isOpen = document.body.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    document.querySelectorAll(".nav-primary a").forEach((link) => {
      link.addEventListener("click", () => document.body.classList.remove("nav-open"));
    });
  }

  /* -------------------------------------------------------
     2. Ano automático no rodapé
  --------------------------------------------------------*/
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  /* -------------------------------------------------------
     3. Botão flutuante do WhatsApp (injectado em todas as páginas)
  --------------------------------------------------------*/
  (function injectFloatStack() {
    const stack = document.createElement("div");
    stack.className = "float-stack";
    const waLink = `https://wa.me/${cfg.whatsappNumber}?text=${encodeURIComponent(cfg.whatsappDefaultMessage)}`;
    stack.innerHTML = `
      <button class="fab fab-top" type="button" aria-label="Voltar ao topo" data-i18n-aria="a11y.backToTop">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
      </button>
      <a class="fab fab-whatsapp" href="${waLink}" target="_blank" rel="noopener" aria-label="Contactar via WhatsApp">
        <svg viewBox="0 0 32 32" fill="currentColor"><path d="M16.02 3C9.4 3 4 8.37 4 15c0 2.36.7 4.55 1.9 6.4L4 29l7.8-1.85A11.9 11.9 0 0 0 16.02 27C22.63 27 28 21.63 28 15S22.63 3 16.02 3zm0 21.7c-1.94 0-3.75-.55-5.29-1.5l-.38-.23-4.63 1.1 1.13-4.5-.25-.4a9.6 9.6 0 0 1-1.5-5.17c0-5.35 4.37-9.7 9.93-9.7 5.55 0 9.92 4.35 9.92 9.7s-4.37 9.7-9.93 9.7zm5.44-7.27c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.1 4.49.71.31 1.27.49 1.7.62.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z"/></svg>
      </a>
    `;
    document.body.appendChild(stack);
    stack.querySelector(".fab-top").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  })();

  /* -------------------------------------------------------
     3b. Ligações WhatsApp adicionais na página (ex: Contactos)
  --------------------------------------------------------*/
  document.querySelectorAll("#whatsappCta, [data-whatsapp-link]").forEach((el) => {
    el.setAttribute("href", `https://wa.me/${cfg.whatsappNumber}?text=${encodeURIComponent(cfg.whatsappDefaultMessage)}`);
  });

  /* -------------------------------------------------------
     4. FAQ acordeão
  --------------------------------------------------------*/
  document.querySelectorAll(".faq-item").forEach((item) => {
    const q = item.querySelector(".faq-q");
    const a = item.querySelector(".faq-a");
    if (!q || !a) return;
    q.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      document.querySelectorAll(".faq-item.is-open").forEach((el) => {
        if (el !== item) { el.classList.remove("is-open"); el.querySelector(".faq-a").style.maxHeight = null; }
      });
      item.classList.toggle("is-open", !isOpen);
      a.style.maxHeight = !isOpen ? a.scrollHeight + "px" : null;
    });
  });

  const faqCatButtons = document.querySelectorAll(".faq-cats button");
  if (faqCatButtons.length) {
    faqCatButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        faqCatButtons.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        const cat = btn.dataset.cat;
        document.querySelectorAll(".faq-item").forEach((item) => {
          item.style.display = cat === "all" || item.dataset.cat === cat ? "" : "none";
        });
      });
    });
  }

  /* -------------------------------------------------------
     5. Filtro do Portfólio
  --------------------------------------------------------*/
  const filterButtons = document.querySelectorAll(".filter-bar button[data-filter]");
  if (filterButtons.length) {
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        const cat = btn.dataset.filter;
        document.querySelectorAll("[data-cat]").forEach((card) => {
          const match = cat === "all" || card.dataset.cat === cat;
          card.style.display = match ? "" : "none";
        });
      });
    });
  }

  /* -------------------------------------------------------
     6. Galeria — lightbox
  --------------------------------------------------------*/
  const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));
  if (galleryItems.length) {
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML = `
      <button class="lightbox-close" aria-label="Fechar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
      <button class="lightbox-nav lightbox-prev" aria-label="Anterior"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg></button>
      <img src="" alt="">
      <button class="lightbox-nav lightbox-next" aria-label="Seguinte"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg></button>
    `;
    document.body.appendChild(lightbox);
    const imgEl = lightbox.querySelector("img");
    let idx = 0;
    const open = (i) => {
      idx = (i + galleryItems.length) % galleryItems.length;
      const src = galleryItems[idx].querySelector("img").getAttribute("src");
      imgEl.setAttribute("src", src);
      imgEl.setAttribute("alt", galleryItems[idx].querySelector("img").getAttribute("alt") || "");
      lightbox.classList.add("is-open");
    };
    galleryItems.forEach((item, i) => item.addEventListener("click", () => open(i)));
    lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.classList.remove("is-open"));
    lightbox.querySelector(".lightbox-prev").addEventListener("click", () => open(idx - 1));
    lightbox.querySelector(".lightbox-next").addEventListener("click", () => open(idx + 1));
    lightbox.addEventListener("click", (e) => { if (e.target === lightbox) lightbox.classList.remove("is-open"); });
    document.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("is-open")) return;
      if (e.key === "Escape") lightbox.classList.remove("is-open");
      if (e.key === "ArrowLeft") open(idx - 1);
      if (e.key === "ArrowRight") open(idx + 1);
    });
  }

  /* -------------------------------------------------------
     7. Chips de rádio (agendamento)
  --------------------------------------------------------*/
  document.querySelectorAll(".radio-chip").forEach((chip) => {
    const input = chip.querySelector("input");
    if (!input) return;
    const sync = () => {
      document.querySelectorAll(`input[name="${input.name}"]`).forEach((i) => {
        i.closest(".radio-chip").classList.toggle("is-checked", i.checked);
      });
    };
    input.addEventListener("change", sync);
    sync();
  });

  /* -------------------------------------------------------
     8. Contador animado (estatísticas)
  --------------------------------------------------------*/
  const counters = document.querySelectorAll("[data-count]");
  if (counters.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || "";
        let cur = 0;
        const step = Math.max(1, Math.ceil(target / 60));
        const tick = () => {
          cur = Math.min(target, cur + step);
          el.textContent = cur + suffix;
          if (cur < target) requestAnimationFrame(tick);
        };
        tick();
        io.unobserve(el);
      });
    }, { threshold: 0.4 });
    counters.forEach((c) => io.observe(c));
  }

  /* -------------------------------------------------------
     9. Formulários — validação + envio via EmailJS
  --------------------------------------------------------*/
  function loadEmailJS(cb) {
    if (window.emailjs) return cb();
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    s.onload = () => { window.emailjs.init({ publicKey: cfg.emailjs.publicKey }); cb(); };
    s.onerror = () => cb(new Error("emailjs-load-failed"));
    document.head.appendChild(s);
  }

  document.querySelectorAll("form[data-form]").forEach((form) => {
    const statusEl = form.querySelector(".form-status");
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }

      const formType = form.dataset.form; // contacto | servico | curso | agendamento
      const templateId = cfg.emailjs.templates[formType];
      const originalLabel = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = "…";
      statusEl.className = "form-status";

      loadEmailJS((err) => {
        if (err) return showError();
        const data = Object.fromEntries(new FormData(form).entries());
        window.emailjs.send(cfg.emailjs.serviceId, templateId, data).then(showSuccess).catch(showError);
      });

      function showSuccess() {
        statusEl.classList.add("is-success");
        statusEl.textContent = window.i18nText
          ? window.i18nText("form.success")
          : "Mensagem enviada com sucesso! Entraremos em contacto brevemente.";
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
        form.reset();
        document.querySelectorAll(".radio-chip").forEach((c) => c.classList.remove("is-checked"));
      }
      function showError() {
        statusEl.classList.add("is-error");
        statusEl.textContent = window.i18nText
          ? window.i18nText("form.error")
          : "Não foi possível enviar agora. Tente novamente ou contacte-nos via WhatsApp / email.";
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
      }
    });
  });

  /* -------------------------------------------------------
     10. Pesquisa — overlay + índice simples
  --------------------------------------------------------*/
  const SEARCH_INDEX = [
    { title: "Levantamento Topográfico", url: "servicos.html#topografia", cat: "Serviços" },
    { title: "Georreferenciamento", url: "servicos.html#topografia", cat: "Serviços" },
    { title: "Geoprocessamento (SIG/GIS)", url: "servicos.html#geoprocessamento", cat: "Serviços" },
    { title: "Mapeamento com Drone", url: "servicos.html#geoprocessamento", cat: "Serviços" },
    { title: "Fiscalização e Apoio Técnico", url: "servicos.html#fiscalizacao", cat: "Serviços" },
    { title: "Formação Profissional", url: "servicos.html#formacao", cat: "Serviços" },
    { title: "Curso de Topografia (Civil 3D)", url: "produtos.html#civil3d", cat: "Produtos / Cursos" },
    { title: "Curso de Cartografia (ArcGIS e QGIS)", url: "produtos.html#gis", cat: "Produtos / Cursos" },
    { title: "Curso de Medições e Orçamentos", url: "produtos.html#medicoes", cat: "Produtos / Cursos" },
    { title: "Curso de Fiscalização de Empreitadas", url: "produtos.html#fiscalizacao-curso", cat: "Produtos / Cursos" },
    { title: "Portfólio de Projectos", url: "portfolio.html", cat: "Portfólio" },
    { title: "Fazenda Bela Vista — Ambriz", url: "portfolio.html#bela-vista", cat: "Portfólio" },
    { title: "Loteamento Kilamba", url: "portfolio.html#kilamba", cat: "Portfólio" },
    { title: "EN 240 — Corredor Ferroviário CFL", url: "portfolio.html#en240", cat: "Portfólio" },
    { title: "Sobre — Missão, Visão e Valores", url: "sobre-nos.html", cat: "Empresa" },
    { title: "Equipa GEPGEO", url: "sobre-nos.html#equipa", cat: "Empresa" },
    { title: "Solicitar Serviço", url: "contactos.html#servico", cat: "Contactos" },
    { title: "Inscrição em Cursos", url: "contactos.html#curso", cat: "Contactos" },
    { title: "Agendamento de Serviços", url: "contactos.html#agendamento", cat: "Contactos" },
    { title: "Perguntas Frequentes", url: "faq.html", cat: "FAQ" },
    { title: "Blog GEPGEO", url: "blog.html", cat: "Blog" },
    { title: "Notícias e Comunicados", url: "noticias.html", cat: "Notícias" },
    { title: "Galeria de Fotos", url: "galeria.html", cat: "Galeria" }
  ];

  (function buildSearch() {
    const overlay = document.createElement("div");
    overlay.className = "search-overlay";
    overlay.innerHTML = `
      <button class="search-close" aria-label="Fechar pesquisa"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
      <div class="search-box">
        <input type="search" placeholder="Pesquisar serviços, projectos, artigos…" data-i18n-placeholder="search.placeholder" autocomplete="off">
        <p class="search-hint" data-i18n="search.hint">Experimente: "topografia", "drone", "orçamento", "formação"…</p>
        <div class="search-results"></div>
      </div>
    `;
    document.body.appendChild(overlay);
    const input = overlay.querySelector("input");
    const results = overlay.querySelector(".search-results");

    function render(query) {
      const q = query.trim().toLowerCase();
      if (!q) { results.innerHTML = ""; return; }
      const matches = SEARCH_INDEX.filter((it) => it.title.toLowerCase().includes(q) || it.cat.toLowerCase().includes(q));
      results.innerHTML = matches.length
        ? matches.map((m) => `<a href="${m.url}">${m.title}<span>${m.cat}</span></a>`).join("")
        : `<p class="search-hint">Sem resultados para "${query}".</p>`;
    }
    input.addEventListener("input", () => render(input.value));

    function openSearch() {
      overlay.classList.add("is-open");
      document.body.style.overflow = "hidden";
      setTimeout(() => input.focus(), 50);
    }
    function closeSearch() {
      overlay.classList.remove("is-open");
      document.body.style.overflow = "";
    }
    document.querySelectorAll(".search-open-btn").forEach((btn) => btn.addEventListener("click", openSearch));
    overlay.querySelector(".search-close").addEventListener("click", closeSearch);
    document.addEventListener("keydown", (e) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) { e.preventDefault(); openSearch(); }
      if (e.key === "Escape") closeSearch();
    });
  })();

  /* -------------------------------------------------------
     11. Marcar link de navegação activo consoante a página
  --------------------------------------------------------*/
  (function markActiveNav() {
    const path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-primary a").forEach((a) => {
      const href = a.getAttribute("href");
      if (href === path) a.setAttribute("aria-current", "page");
    });
  })();
})();
