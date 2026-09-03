/* ==========================================================================
   GEPGEO — products.js
   Janela pop-up com detalhes de cursos e serviços (produtos.html).
   Abre ao clicar na imagem do curso/serviço ou no botão "Saber mais",
   sem sair da página. Reaproveita os botões "Adicionar ao carrinho"
   existentes (cart.js trata desses cliques via delegação de eventos).
   ========================================================================== */

(function () {
  "use strict";

  /* -------------------------------------------------------
     Conteúdo detalhado por curso/serviço (id do .product-card)
  --------------------------------------------------------*/
  var DETAILS = {

    "cartografia-sig": {
      pt: {
        intro: "Formação orientada à produção cartográfica profissional e à análise espacial, usando ArcGIS e QGIS — as duas ferramentas SIG mais usadas no mercado angolano.",
        highlights: [
          "Criação e gestão de bases de dados geográficos",
          "Georreferenciamento e projecções cartográficas",
          "Análise espacial e geoprocessamento",
          "Produção de mapas temáticos prontos para entrega"
        ],
        audience: "Técnicos de topografia, engenheiros civis, urbanistas e profissionais que trabalham com dados geográficos."
      },
      en: {
        intro: "Training focused on professional map production and spatial analysis, using ArcGIS and QGIS — the two most widely used GIS tools in the Angolan market.",
        highlights: [
          "Creating and managing geographic databases",
          "Georeferencing and map projections",
          "Spatial analysis and geoprocessing",
          "Producing delivery-ready thematic maps"
        ],
        audience: "Survey technicians, civil engineers, urban planners and professionals who work with geographic data."
      }
    },

    "civil3d": {
      pt: {
        intro: "Do básico ao avançado em AutoCAD Civil 3D, aplicado a projectos reais de infraestrutura, terraplanagem e arruamentos.",
        highlights: [
          "Modelação digital de terreno (superfícies)",
          "Perfis longitudinais e transversais",
          "Cálculo de volumes de terraplanagem",
          "Desenho e documentação de projectos de infraestrutura"
        ],
        audience: "Técnicos de desenho, engenheiros civis e topógrafos que precisam de modelar terreno e projectar infraestruturas."
      },
      en: {
        intro: "From basic to advanced AutoCAD Civil 3D, applied to real infrastructure, earthworks and road-design projects.",
        highlights: [
          "Digital terrain modelling (surfaces)",
          "Longitudinal and cross-section profiles",
          "Earthwork volume calculations",
          "Drafting and documenting infrastructure projects"
        ],
        audience: "Drafting technicians, civil engineers and surveyors who need to model terrain and design infrastructure."
      }
    },

    "topografia-geral": {
      pt: {
        intro: "Fundamentos teóricos e prática intensiva de campo com os principais instrumentos de levantamento topográfico, com processamento de dados em AutoCad Civil 3D.",
        highlights: [
          "Operação de estação total, nível e GPS",
          "Métodos de levantamento planimétrico e altimétrico",
          "Processamento de dados de campo e desenho de plantas em AutoCad Civil 3D",
          "Boas práticas de segurança e organização de campo"
        ],
        audience: "Quem está a iniciar-se em topografia ou quer consolidar as bases teóricas e práticas da profissão."
      },
      en: {
        intro: "Theoretical foundations and intensive field practice with the main surveying instruments, with field data processing in AutoCAD Civil 3D.",
        highlights: [
          "Operating total stations, levels and GPS",
          "Planimetric and altimetric survey methods",
          "Field data processing and plan drafting in AutoCAD Civil 3D",
          "Good field safety and organisation practices"
        ],
        audience: "Anyone starting out in surveying, or wanting to consolidate the theoretical and practical basics of the profession."
      }
    },

    "fotogrametria-drone": {
      pt: {
        intro: "Levantamento aerofotogramétrico com drone, do planeamento de voo ao processamento de imagem em software especializado.",
        highlights: [
          "Planeamento de missões e pontos de controlo",
          "Captura de imagem aérea de alta precisão",
          "Processamento fotogramétrico (ortofotomapas e nuvens de pontos)",
          "Geração de modelos digitais de superfície"
        ],
        audience: "Técnicos e operadores que querem mapear grandes áreas com rapidez e precisão."
      },
      en: {
        intro: "Drone aerial-photogrammetry survey, from flight planning to image processing in specialised software.",
        highlights: [
          "Mission planning and ground control points",
          "High-precision aerial image capture",
          "Photogrammetric processing (orthomosaics and point clouds)",
          "Generating digital surface models"
        ],
        audience: "Technicians and operators who want to map large areas quickly and accurately."
      }
    },

    "fiscalizacao-curso": {
      pt: {
        intro: "Preparação prática para o acompanhamento técnico de obras, com foco em controlo de qualidade e conformidade de projecto.",
        highlights: [
          "Leitura e verificação de projectos de execução",
          "Controlo de qualidade de materiais e execução",
          "Registo e reporte técnico de obra",
          "Boas práticas de supervisão e comunicação com empreiteiros"
        ],
        audience: "Fiscais de obra, engenheiros e técnicos que acompanham empreitadas de construção civil."
      },
      en: {
        intro: "Practical preparation for technical site supervision, focused on quality control and design compliance.",
        highlights: [
          "Reading and checking execution drawings",
          "Quality control of materials and execution",
          "Technical site record-keeping and reporting",
          "Good supervision practices and contractor communication"
        ],
        audience: "Site inspectors, engineers and technicians who oversee civil-construction contracts."
      }
    },

    "excel-powerbi": {
      pt: {
        intro: "Análise de dados aplicada ao dia-a-dia técnico e de gestão, com Excel avançado e criação de dashboards em Power BI.",
        highlights: [
          "Fórmulas avançadas e automatização de folhas de cálculo",
          "Tabelas dinâmicas e limpeza de dados",
          "Modelação de dados em Power BI",
          "Criação de dashboards e relatórios interactivos"
        ],
        audience: "Profissionais de qualquer área que lidam com dados e relatórios e querem ganhar eficiência e autonomia."
      },
      en: {
        intro: "Data analysis applied to everyday technical and management work, with advanced Excel and Power BI dashboards.",
        highlights: [
          "Advanced formulas and spreadsheet automation",
          "Pivot tables and data cleaning",
          "Data modelling in Power BI",
          "Building interactive dashboards and reports"
        ],
        audience: "Professionals from any field who work with data and reports and want more efficiency and autonomy."
      }
    },

    "operador-estacao-total": {
      pt: {
        intro: "Formação intensiva e prática, em campo e gabinete, para operar a estação total com autonomia.",
        highlights: [
          "Configuração e calibração do equipamento",
          "Métodos de levantamento e implantação",
          "Transferência e processamento de dados em gabinete",
          "Boas práticas de manutenção do instrumento"
        ],
        audience: "Operadores de equipamento e técnicos de campo sem experiência prévia com estação total."
      },
      en: {
        intro: "Intensive, hands-on training — field and office — to operate a total station with confidence.",
        highlights: [
          "Equipment setup and calibration",
          "Survey and stake-out methods",
          "Data transfer and office processing",
          "Good instrument maintenance practices"
        ],
        audience: "Equipment operators and field technicians with no prior experience using a total station."
      }
    },

    "operador-gps": {
      pt: {
        intro: "Levantamento com GPS geodésico e processamento de coordenadas, do terreno ao gabinete.",
        highlights: [
          "Configuração de receptores GPS/GNSS",
          "Métodos estático e RTK",
          "Processamento e ajuste de coordenadas",
          "Exportação de dados para SIG/CAD"
        ],
        audience: "Operadores e técnicos que vão realizar levantamentos com GPS geodésico no terreno."
      },
      en: {
        intro: "Geodetic GPS surveying and coordinate processing, from the field to the office.",
        highlights: [
          "Configuring GPS/GNSS receivers",
          "Static and RTK methods",
          "Coordinate processing and adjustment",
          "Exporting data to GIS/CAD"
        ],
        audience: "Operators and technicians who will carry out geodetic GPS surveys in the field."
      }
    },

    "operador-nivel": {
      pt: {
        intro: "Nivelamento geométrico com nível automático e cálculo de cotas, com prática de campo orientada.",
        highlights: [
          "Configuração e leitura do nível automático",
          "Métodos de nivelamento simples e composto",
          "Cálculo de cotas e caderneta de campo",
          "Controlo de erros e verificação de fecho"
        ],
        audience: "Operadores de equipamento e técnicos que precisam de dominar o nivelamento geométrico."
      },
      en: {
        intro: "Geometric levelling with an automatic level and elevation calculation, with guided field practice.",
        highlights: [
          "Setting up and reading the automatic level",
          "Simple and compound levelling methods",
          "Elevation calculation and field notebook",
          "Error control and closure checks"
        ],
        audience: "Equipment operators and technicians who need to master geometric levelling."
      }
    },

    "croquis-localizacao": {
      pt: {
        intro: "Elaboração de croquis técnicos de localização, um documento essencial em processos legais e de licenciamento em Angola.",
        highlights: [
          "Recolha de dados de campo para o croquis",
          "Normas e requisitos legais em Angola",
          "Desenho técnico e escala",
          "Apresentação do documento final para submissão"
        ],
        audience: "Técnicos de topografia e desenho que preparam documentação para processos de legalização de terrenos."
      },
      en: {
        intro: "Preparation of technical location sketches — an essential document for legal and licensing processes in Angola.",
        highlights: [
          "Field data collection for the sketch",
          "Legal standards and requirements in Angola",
          "Technical drawing and scale",
          "Presenting the final document for submission"
        ],
        audience: "Survey and drafting technicians who prepare documentation for land-legalisation processes."
      }
    },

    "servico-residencial": {
      pt: {
        intro: "Levantamento topográfico completo e georreferenciamento de lotes e moradias particulares, com visita técnica ao terreno.",
        highlights: [
          "Visita técnica e levantamento no terreno",
          "Georreferenciamento junto das entidades competentes",
          "Planta topográfica e memória descritiva",
          "Apoio na documentação para legalização"
        ],
        audience: "Proprietários de lotes e moradias que precisam de georreferenciar ou legalizar o seu terreno."
      },
      en: {
        intro: "Full topographic survey and georeferencing for private lots and homes, including an on-site technical visit.",
        highlights: [
          "Technical site visit and field survey",
          "Georeferencing with the relevant authorities",
          "Topographic plan and descriptive report",
          "Support with legalisation documentation"
        ],
        audience: "Lot and homeowners who need to georeference or legalise their land."
      }
    },

    "servico-georreferenciamento": {
      pt: {
        intro: "Georreferenciamento de imóveis e terrenos para empresas, com relatório técnico completo pronto para uso legal e financeiro.",
        highlights: [
          "Levantamento e georreferenciamento de múltiplos lotes",
          "Relatório técnico detalhado por imóvel",
          "Coordenação com entidades reguladoras",
          "Prazos ajustados a projectos empresariais"
        ],
        audience: "Empresas, promotores imobiliários e instituições com carteiras de imóveis a regularizar."
      },
      en: {
        intro: "Georeferencing of properties and land for companies, with a full technical report ready for legal and financial use.",
        highlights: [
          "Survey and georeferencing of multiple lots",
          "Detailed technical report per property",
          "Coordination with regulatory authorities",
          "Timelines adapted to business projects"
        ],
        audience: "Companies, real-estate developers and institutions with property portfolios to regularise."
      }
    },

    "servico-drone": {
      pt: {
        intro: "Mapeamento aerofotogramétrico com drone para grandes áreas, loteamentos e obras de infraestrutura, com entrega rápida.",
        highlights: [
          "Cobertura de grandes áreas em poucas horas de voo",
          "Ortofotomapas e modelos digitais de superfície",
          "Cálculo de volumes e áreas",
          "Entregáveis compatíveis com SIG e CAD"
        ],
        audience: "Promotores de loteamentos, construtoras e empresas com obras de infraestrutura de grande escala."
      },
      en: {
        intro: "Drone aerial mapping for large areas, land subdivisions and infrastructure works, with fast turnaround.",
        highlights: [
          "Covering large areas in just a few flight hours",
          "Orthomosaics and digital surface models",
          "Volume and area calculations",
          "Deliverables compatible with GIS and CAD"
        ],
        audience: "Land-subdivision developers, construction companies and large-scale infrastructure projects."
      }
    },

    "servico-topografia-geodesica": {
      pt: {
        intro: "Levantamento topográfico e implantação de projectos com GPS Geodésico RTK e Estação Total — a base de qualquer projecto de engenharia, adaptada à escala e ao tipo de obra.",
        highlights: [
          "Levantamento topográfico e implantação de projectos",
          "Georreferenciamento e nivelamento de precisão",
          "Croquis de localização e determinação de limites",
          "Relatórios técnicos e laudos de verticalidade"
        ],
        audience: "Construtoras, promotores de obras e empresas que precisam de rigor geodésico em qualquer fase do projecto."
      },
      en: {
        intro: "Topographic survey and project setting-out using RTK Geodetic GPS and Total Station — the foundation of any engineering project, adapted to the scale and type of works.",
        highlights: [
          "Topographic survey and project setting-out",
          "Precision georeferencing and levelling",
          "Location sketches and boundary determination",
          "Technical reports and verticality assessments"
        ],
        audience: "Construction companies, project developers and businesses that need geodetic precision at any project stage."
      }
    },

    "servico-volumetria": {
      pt: {
        intro: "Cálculo de volumes de corte e aterro para mineração, terraplanagem e obras lineares, com processamento dos dados em AutoCAD Civil 3D.",
        highlights: [
          "Cálculo de volumes de corte e aterro",
          "Acompanhamento volumétrico de lavra e remoção de estéril",
          "Modelação de superfícies em AutoCAD Civil 3D",
          "Marcação de cortes e projectos de taludes"
        ],
        audience: "Operações de mineração, empresas de terraplanagem e projectos de obras lineares (estradas, drenagem)."
      },
      en: {
        intro: "Cut-and-fill volume calculation for mining, earthworks and linear projects, with data processed in AutoCAD Civil 3D.",
        highlights: [
          "Cut-and-fill volume calculation",
          "Volume tracking for mining and waste-rock removal",
          "Surface modelling in AutoCAD Civil 3D",
          "Cut marking and slope design"
        ],
        audience: "Mining operations, earthworks companies and linear infrastructure projects (roads, drainage)."
      }
    },

    "servico-fiscalizacao": {
      pt: {
        intro: "Acompanhamos a execução de projectos com supervisão geral e controlo de qualidade técnica, assegurando que a obra corresponde exactamente ao projectado.",
        highlights: [
          "Controlo de qualidade técnica em obra",
          "Monitoramento contínuo do avanço do projecto",
          "Supervisão geral de execução",
          "Relatórios claros e regulares para o cliente"
        ],
        audience: "Donos de obra, empresas e entidades públicas que precisam de fiscalização técnica independente."
      },
      en: {
        intro: "We follow project execution with general supervision and technical quality control, ensuring the works match exactly what was designed.",
        highlights: [
          "Technical quality control on site",
          "Continuous monitoring of project progress",
          "General execution supervision",
          "Clear, regular reporting for the client"
        ],
        audience: "Project owners, companies and public entities that need independent technical supervision."
      }
    }

  };

  function currentLang() {
    return (window.__gepgeoLang || "pt");
  }
  function t(key, fallback) {
    return window.i18nText ? window.i18nText(key) : fallback;
  }

  /* -------------------------------------------------------
     Construção do modal
  --------------------------------------------------------*/
  function buildModal() {
    var modal = document.createElement("div");
    modal.className = "product-modal";
    modal.id = "productModal";
    modal.innerHTML =
      '<div class="product-modal-backdrop"></div>' +
      '<div class="product-modal-panel" role="dialog" aria-modal="true">' +
        '<button class="product-modal-close" type="button" aria-label="Fechar">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
        '</button>' +
        '<div class="product-modal-media">' +
          '<img id="productModalImg" src="" alt="">' +
          '<span class="product-tag" id="productModalTag"></span>' +
        '</div>' +
        '<div class="product-modal-body">' +
          '<h2 id="productModalTitle"></h2>' +
          '<div class="product-modal-meta">' +
            '<span id="productModalDuration"></span>' +
          '</div>' +
          '<p class="product-modal-price" id="productModalPrice"></p>' +
          '<div class="product-modal-content">' +
            '<p id="productModalIntro"></p>' +
            '<h3 id="productModalHighlightsTitle"></h3>' +
            '<ul id="productModalHighlights"></ul>' +
            '<h3 id="productModalAudienceTitle"></h3>' +
            '<p id="productModalAudience"></p>' +
          '</div>' +
          '<div class="product-modal-actions" id="productModalActions"></div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(modal);
    return modal;
  }

  var currentProductId = null;

  function openProduct(id) {
    var card = document.getElementById(id);
    if (!card) return;
    currentProductId = id;
    renderProduct();
    var modal = document.getElementById("productModal");
    modal.classList.add("is-open");
    document.body.classList.add("product-open");
    modal.querySelector(".product-modal-panel").scrollTop = 0;
  }

  function renderProduct() {
    if (!currentProductId) return;
    var card = document.getElementById(currentProductId);
    if (!card) return;
    var lang = currentLang();
    var data = DETAILS[currentProductId];
    var d = data ? (data[lang] || data.pt) : null;

    var img = card.querySelector(".product-media img");
    var tag = card.querySelector(".product-tag");
    var title = card.querySelector("h3");
    var duration = card.querySelector(".coord");
    var priceEl = card.querySelector(".price");
    var addBtn = card.querySelector(".add-to-cart-btn");

    document.getElementById("productModalImg").src = img ? img.getAttribute("src") : "";
    document.getElementById("productModalImg").alt = img ? img.getAttribute("alt") || "" : "";
    document.getElementById("productModalTag").textContent = tag ? tag.textContent : "";
    document.getElementById("productModalTitle").textContent = title ? title.textContent : "";
    document.getElementById("productModalDuration").textContent = duration ? duration.textContent : "";
    document.getElementById("productModalDuration").style.display = duration ? "" : "none";
    document.getElementById("productModalPrice").textContent = priceEl ? priceEl.textContent.trim() : "";

    document.getElementById("productModalIntro").textContent = d ? d.intro : "";

    var highlightsTitleEl = document.getElementById("productModalHighlightsTitle");
    var highlightsListEl = document.getElementById("productModalHighlights");
    var audienceTitleEl = document.getElementById("productModalAudienceTitle");
    var audienceEl = document.getElementById("productModalAudience");

    highlightsTitleEl.textContent = lang === "en" ? "What you'll learn" : "O que vai aprender";
    audienceTitleEl.textContent = lang === "en" ? "Who it's for" : "Para quem é";

    highlightsListEl.innerHTML = "";
    if (d && d.highlights) {
      d.highlights.forEach(function (h) {
        var li = document.createElement("li");
        li.textContent = h;
        highlightsListEl.appendChild(li);
      });
    }
    highlightsTitleEl.style.display = (d && d.highlights && d.highlights.length) ? "" : "none";
    highlightsListEl.style.display = (d && d.highlights && d.highlights.length) ? "" : "none";

    audienceEl.textContent = d ? d.audience : "";
    audienceTitleEl.style.display = (d && d.audience) ? "" : "none";
    audienceEl.style.display = (d && d.audience) ? "" : "none";

    var actions = document.getElementById("productModalActions");
    actions.innerHTML = "";
    if (addBtn) {
      var cloned = addBtn.cloneNode(true);
      cloned.classList.add("btn-block");
      actions.appendChild(cloned);
    }
    var contactBtn = document.createElement("a");
    contactBtn.className = "btn btn-outline btn-sm";
    contactBtn.href = "contactos.html";
    contactBtn.textContent = lang === "en" ? "Ask a question" : "Tirar uma dúvida";
    actions.appendChild(contactBtn);
  }

  function closeProduct() {
    var modal = document.getElementById("productModal");
    if (!modal) return;
    modal.classList.remove("is-open");
    document.body.classList.remove("product-open");
    currentProductId = null;
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (!document.querySelector(".product-card")) return; // só corre em produtos.html
    var modal = buildModal();

    document.querySelectorAll("[data-product-open]").forEach(function (el) {
      el.addEventListener("click", function (e) {
        var card = el.closest(".product-card");
        if (!card || !card.id) return;
        e.preventDefault();
        openProduct(card.id);
      });
    });

    modal.querySelector(".product-modal-close").addEventListener("click", closeProduct);
    modal.querySelector(".product-modal-backdrop").addEventListener("click", closeProduct);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeProduct();
    });
    document.addEventListener("gepgeo:langchange", renderProduct);
  });
})();
