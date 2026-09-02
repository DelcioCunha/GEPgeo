/* ==========================================================================
   GEPGEO — blog.js
   Conteúdo completo dos artigos + modal de leitura (pop-up, sem sair da página)
   ========================================================================== */

(function () {
  "use strict";

  const ARTICLES = {

    featured: {
      image: "assets/img/blog/featured.jpg",
      pt: {
        cat: "Topografia", date: "8 min de leitura",
        title: "GPS RTK vs. Estação Total: quando usar cada equipamento",
        body: `
          <p>Se já pediu um orçamento de topografia, provavelmente já ouviu falar de GPS RTK e de Estação Total. São os dois instrumentos mais usados no levantamento de terreno em Angola — mas não servem exactamente para a mesma coisa, e escolher mal pode custar tempo e dinheiro ao projecto.</p>
          <h3>O que é o GPS Geodésico RTK</h3>
          <p>O RTK (Real-Time Kinematic) usa sinal de satélite corrigido em tempo real para obter coordenadas com precisão centimétrica. O grande trunfo é a velocidade: um técnico consegue recolher centenas de pontos por dia, sem precisar de linha de vista directa entre pontos.</p>
          <h3>O que é a Estação Total</h3>
          <p>A Estação Total mede ângulos e distâncias com um feixe óptico ou laser, ponto a ponto, a partir de uma posição fixa. É mais lenta que o RTK, mas continua a ser insubstituível em espaços fechados, sob coberto vegetal denso ou junto a construções onde o sinal de satélite fica bloqueado ou perde qualidade.</p>
          <h3>Quando usar cada um</h3>
          <ul>
            <li><strong>GPS RTK:</strong> terrenos abertos, grandes áreas, loteamentos, levantamentos rápidos de referência.</li>
            <li><strong>Estação Total:</strong> obra em execução, interiores, zonas com muita vegetação ou edifícios altos por perto, implantações que exigem alta precisão local.</li>
          </ul>
          <h3>Podem trabalhar em conjunto?</h3>
          <p>Sim, e é o mais comum em projectos maiores: o RTK estabelece rapidamente os pontos de controlo em toda a área, e a Estação Total refina os pontos críticos onde a precisão milimétrica é indispensável, como implantação de fundações ou eixos de construção.</p>
          <p>Na prática, a nossa equipa avalia o terreno antes de decidir — nem sempre o equipamento "mais moderno" é o mais indicado para o trabalho.</p>
        `
      },
      en: {
        cat: "Surveying", date: "8 min read",
        title: "RTK GPS vs. Total Station: when to use each instrument",
        body: `
          <p>If you've ever requested a surveying quote, you've probably heard of RTK GPS and Total Stations. They're the two most-used instruments for land surveying in Angola — but they don't serve exactly the same purpose, and choosing the wrong one can cost a project time and money.</p>
          <h3>What is RTK Geodetic GPS</h3>
          <p>RTK (Real-Time Kinematic) uses satellite signal corrected in real time to obtain centimetre-level accuracy. Its big advantage is speed: a technician can collect hundreds of points a day, without needing a direct line of sight between points.</p>
          <h3>What is a Total Station</h3>
          <p>A Total Station measures angles and distances with an optical or laser beam, point by point, from a fixed position. It's slower than RTK, but remains irreplaceable indoors, under dense vegetation, or near buildings where satellite signal gets blocked or loses quality.</p>
          <h3>When to use each one</h3>
          <ul>
            <li><strong>RTK GPS:</strong> open terrain, large areas, subdivisions, fast reference surveys.</li>
            <li><strong>Total Station:</strong> active construction sites, indoors, areas with heavy vegetation or tall nearby buildings, setting-out work that requires high local precision.</li>
          </ul>
          <h3>Can they work together?</h3>
          <p>Yes, and it's actually the most common approach on larger projects: RTK quickly establishes control points across the whole area, while the Total Station refines the critical points where millimetre precision is essential, such as foundation setting-out or construction axes.</p>
          <p>In practice, our team assesses the terrain before deciding — the "most modern" equipment isn't always the right one for the job.</p>
        `
      }
    },

    p1: {
      image: "assets/img/blog/p1.jpg",
      pt: {
        cat: "Geoprocessamento", date: "5 min de leitura",
        title: "O que é georreferenciamento e porque o seu terreno precisa dele",
        body: `
          <p>Georreferenciar um terreno significa associar as suas coordenadas a um sistema de referência oficial — em Angola, isso liga o seu imóvel a um ponto exacto no mapa do país, com validade legal.</p>
          <h3>Porque é que isto importa</h3>
          <p>Um terreno sem georreferenciamento é, na prática, difícil de defender em caso de disputa de limites, sobreposição com outro título, ou processos de licenciamento e legalização. As coordenadas georreferenciadas eliminam a ambiguidade: já não é "o terreno ao lado da igreja", é uma localização exacta e verificável.</p>
          <h3>Benefícios práticos</h3>
          <ul>
            <li>Protecção legal em caso de litígio de limites com vizinhos</li>
            <li>Pré-requisito para escrituração e regularização fundiária</li>
            <li>Facilita processos de licenciamento de construção</li>
            <li>Valoriza o imóvel para venda ou financiamento bancário</li>
          </ul>
          <h3>Como funciona o processo</h3>
          <p>A nossa equipa desloca-se ao terreno com GPS Geodésico RTK, recolhe os pontos-limite com precisão centimétrica, processa os dados em gabinete e entrega um relatório técnico com memória descritiva e planta assinada — o documento que vai apoiar o registo do imóvel.</p>
          <p>O prazo típico depende do tamanho e da complexidade do terreno, mas para um lote residencial normal costuma ser resolvido em poucos dias de trabalho de campo mais processamento.</p>
        `
      },
      en: {
        cat: "Geoprocessing", date: "5 min read",
        title: "What is georeferencing, and why your land needs it",
        body: `
          <p>Georeferencing a plot of land means linking its coordinates to an official reference system — in Angola, that ties your property to an exact point on the country's map, with legal standing.</p>
          <h3>Why this matters</h3>
          <p>A plot without georeferencing is, in practice, hard to defend in a boundary dispute, an overlap with another title, or licensing and legalisation processes. Georeferenced coordinates remove the ambiguity: it's no longer "the plot next to the church", it's an exact, verifiable location.</p>
          <h3>Practical benefits</h3>
          <ul>
            <li>Legal protection in boundary disputes with neighbours</li>
            <li>A prerequisite for deed registration and land regularisation</li>
            <li>Simplifies building permit processes</li>
            <li>Increases the property's value for sale or bank financing</li>
          </ul>
          <h3>How the process works</h3>
          <p>Our team visits the site with RTK Geodetic GPS, collects the boundary points with centimetre precision, processes the data in the office and delivers a technical report with a descriptive summary and a signed plan — the document that supports the property's registration.</p>
          <p>The typical timeline depends on the size and complexity of the plot, but a standard residential lot is usually completed within a few days of fieldwork plus processing.</p>
        `
      }
    },

    p2: {
      image: "assets/img/blog/p2.jpg",
      pt: {
        cat: "Drones", date: "6 min de leitura",
        title: "Mapeamento aerofotogramétrico: mais rapidez em grandes áreas",
        body: `
          <p>Levantar uma grande área a pé, ponto a ponto, pode levar semanas. Com um drone equipado para fotogrametria, a mesma área pode ser sobrevoada em poucas horas — e o resultado é um modelo digital detalhado do terreno, não apenas um conjunto de pontos.</p>
          <h3>Como funciona</h3>
          <p>O drone sobrevoa a área seguindo um plano de voo automático, capturando centenas ou milhares de fotos sobrepostas. Em gabinete, um software de fotogrametria junta essas imagens e reconstrói um modelo 3D preciso — ortofotomapa, modelo digital de superfície e nuvem de pontos.</p>
          <h3>Vantagens face aos métodos tradicionais</h3>
          <ul>
            <li>Cobre grandes áreas em horas, não em dias ou semanas</li>
            <li>Reduz a exposição da equipa a terrenos difíceis ou perigosos</li>
            <li>Gera um registo visual completo da área, não só pontos isolados</li>
            <li>Permite recalcular volumes e áreas sem voltar ao terreno</li>
          </ul>
          <h3>Onde faz mais sentido</h3>
          <p>Loteamentos, pedreiras e cálculo de volumes de terraplanagem, inspecção de obras de grande escala, e qualquer projecto onde a área a cobrir tornaria o levantamento tradicional demasiado lento ou caro.</p>
          <h3>Limitações a ter em conta</h3>
          <p>O drone depende de boas condições meteorológicas e não substitui a precisão pontual da Estação Total em detalhes muito específicos — por isso, muitos dos nossos projectos combinam as duas abordagens.</p>
        `
      },
      en: {
        cat: "Drones", date: "6 min read",
        title: "Aerial photogrammetric mapping: faster coverage for large areas",
        body: `
          <p>Surveying a large area on foot, point by point, can take weeks. With a drone set up for photogrammetry, the same area can be flown over in a few hours — and the result is a detailed digital model of the terrain, not just a set of points.</p>
          <h3>How it works</h3>
          <p>The drone flies over the area following an automatic flight plan, capturing hundreds or thousands of overlapping photos. In the office, photogrammetry software stitches these images together and reconstructs a precise 3D model — orthophoto map, digital surface model and point cloud.</p>
          <h3>Advantages over traditional methods</h3>
          <ul>
            <li>Covers large areas in hours, not days or weeks</li>
            <li>Reduces the team's exposure to difficult or hazardous terrain</li>
            <li>Produces a complete visual record of the area, not just isolated points</li>
            <li>Allows volumes and areas to be recalculated without returning to site</li>
          </ul>
          <h3>Where it makes the most sense</h3>
          <p>Subdivisions, quarries and earthworks volume calculations, large-scale construction inspection, and any project where the area to cover would make traditional surveying too slow or expensive.</p>
          <h3>Limitations to keep in mind</h3>
          <p>Drones depend on good weather conditions and don't replace the point-level precision of a Total Station for very specific details — which is why many of our projects combine both approaches.</p>
        `
      }
    },

    p3: {
      image: "assets/img/blog/p3.jpg",
      pt: {
        cat: "Formação", date: "6 min de leitura",
        title: "5 competências essenciais para um técnico de topografia",
        body: `
          <p>O mercado angolano de engenharia e construção está a crescer, e com ele a procura por técnicos de topografia bem preparados. Eis o que realmente procuramos ao formar novos profissionais.</p>
          <h3>1. Domínio real dos instrumentos de campo</h3>
          <p>Saber a teoria não chega — um bom técnico configura, calibra e opera GPS RTK, Estação Total e Nível Automático com confiança, mesmo em condições de terreno difíceis.</p>
          <h3>2. Leitura e interpretação de projectos</h3>
          <p>Implantar uma obra exige perceber o projecto de engenharia, não só marcar pontos no terreno. Isto evita erros caros de execução.</p>
          <h3>3. Software de gabinete (CAD e SIG)</h3>
          <p>O trabalho de campo é só metade do processo — os dados recolhidos precisam de ser processados em AutoCAD Civil 3D, QGIS ou ArcGIS para se tornarem plantas e relatórios úteis.</p>
          <h3>4. Rigor e atenção ao detalhe</h3>
          <p>Um erro de poucos centímetros na implantação de uma fundação pode significar retrabalho caro. A precisão não é opcional neste ofício.</p>
          <h3>5. Comunicação com o cliente e a equipa de obra</h3>
          <p>Explicar resultados técnicos de forma clara — a engenheiros, empreiteiros ou ao próprio cliente — é o que transforma um bom técnico num profissional de confiança.</p>
          <p>Estas são exactamente as competências que trabalhamos nos nossos cursos práticos, do primeiro dia no terreno até à entrega do relatório final.</p>
        `
      },
      en: {
        cat: "Training", date: "6 min read",
        title: "5 essential skills for a surveying technician",
        body: `
          <p>Angola's engineering and construction market is growing, and with it the demand for well-prepared surveying technicians. Here's what we actually look for when training new professionals.</p>
          <h3>1. Real command of field instruments</h3>
          <p>Knowing the theory isn't enough — a good technician sets up, calibrates and operates RTK GPS, Total Station and Automatic Level with confidence, even in difficult terrain conditions.</p>
          <h3>2. Reading and interpreting designs</h3>
          <p>Setting out a construction site requires understanding the engineering design, not just marking points on the ground. This avoids costly execution errors.</p>
          <h3>3. Office software (CAD and GIS)</h3>
          <p>Fieldwork is only half the process — the collected data needs to be processed in AutoCAD Civil 3D, QGIS or ArcGIS to become useful plans and reports.</p>
          <h3>4. Rigour and attention to detail</h3>
          <p>An error of a few centimetres in a foundation's setting-out can mean costly rework. Precision isn't optional in this trade.</p>
          <h3>5. Communication with clients and the site team</h3>
          <p>Explaining technical results clearly — to engineers, contractors or the client themselves — is what turns a good technician into a trusted professional.</p>
          <p>These are exactly the skills we work on in our hands-on courses, from the first day in the field to delivering the final report.</p>
        `
      }
    },

    p4: {
      image: "assets/img/blog/p4.jpg",
      pt: {
        cat: "Engenharia Civil", date: "5 min de leitura",
        title: "Cálculo de volumes: a base do orçamento de terraplanagem",
        body: `
          <p>Antes de mover um único metro cúbico de terra, um bom projecto começa com um cálculo de volumes rigoroso. É este número que define grande parte do orçamento de terraplanagem — e um erro aqui propaga-se a todo o resto do projecto.</p>
          <h3>Porque é que o cálculo de volumes importa tanto</h3>
          <p>Superestimar o volume de terra a mover encarece o orçamento desnecessariamente. Subestimar leva a pedidos de verba extra a meio da obra — o pior cenário possível para qualquer empreiteiro ou cliente.</p>
          <h3>Como se calcula</h3>
          <p>Fazemos um levantamento topográfico do terreno actual (superfície existente) e comparamos com o projecto de terraplanagem (superfície pretendida). O software de engenharia calcula automaticamente a diferença de volume entre as duas superfícies, secção a secção.</p>
          <h3>Erros comuns que encarecem a obra</h3>
          <ul>
            <li>Usar um levantamento desactualizado ou com poucos pontos</li>
            <li>Não considerar o factor de expansão/compactação do solo</li>
            <li>Ignorar zonas de drenagem que alteram o projecto final</li>
          </ul>
          <p>Um levantamento topográfico rigoroso à partida é sempre mais barato do que corrigir surpresas a meio da obra.</p>
        `
      },
      en: {
        cat: "Civil Engineering", date: "5 min read",
        title: "Volume calculation: the foundation of an earthworks budget",
        body: `
          <p>Before moving a single cubic metre of earth, a good project starts with a rigorous volume calculation. This number defines much of the earthworks budget — and an error here ripples through the rest of the project.</p>
          <h3>Why volume calculation matters so much</h3>
          <p>Overestimating the volume of earth to move unnecessarily inflates the budget. Underestimating leads to requests for extra funds midway through the works — the worst possible scenario for any contractor or client.</p>
          <h3>How it's calculated</h3>
          <p>We carry out a topographic survey of the current terrain (existing surface) and compare it with the earthworks design (target surface). Engineering software automatically calculates the volume difference between the two surfaces, section by section.</p>
          <h3>Common mistakes that raise costs</h3>
          <ul>
            <li>Using an outdated survey or one with too few points</li>
            <li>Not accounting for soil expansion/compaction factors</li>
            <li>Ignoring drainage areas that change the final design</li>
          </ul>
          <p>A rigorous topographic survey up front is always cheaper than fixing surprises halfway through the works.</p>
        `
      }
    },

    p5: {
      image: "assets/img/blog/p5.jpg",
      pt: {
        cat: "SIG/GIS", date: "5 min de leitura",
        title: "QGIS ou ArcGIS: qual escolher para o seu projecto?",
        body: `
          <p>São as duas ferramentas mais usadas em geoprocessamento — mas partem de filosofias diferentes, e a escolha certa depende do projecto, da equipa e do orçamento.</p>
          <h3>QGIS: gratuito e de código aberto</h3>
          <p>O QGIS não custa nada e tem uma comunidade activa a desenvolvê-lo. É uma excelente porta de entrada para estudantes e pequenas equipas, com quase todas as funcionalidades essenciais de um SIG profissional.</p>
          <h3>ArcGIS: o padrão da indústria</h3>
          <p>O ArcGIS (Esri) é pago, mas oferece um ecossistema mais robusto — ferramentas de análise avançada, melhor integração com bases de dados empresariais e suporte técnico dedicado. É muitas vezes o standard exigido em projectos públicos ou de grande escala.</p>
          <h3>Custo</h3>
          <p>QGIS: gratuito. ArcGIS: licenciamento anual, com custo significativo para pequenas empresas ou uso individual.</p>
          <h3>Curva de aprendizagem</h3>
          <p>Ambos exigem formação séria para serem usados com confiança, mas o QGIS tem uma interface ligeiramente mais acessível para quem está a começar.</p>
          <h3>Então, qual escolher?</h3>
          <p>Para estudantes, pequenas equipas ou projectos com orçamento apertado: QGIS. Para empresas com necessidades de análise avançada, integração corporativa ou que trabalham directamente com clientes que já usam Esri: ArcGIS. No nosso curso de Cartografia e SIG ensinamos os dois, para que o formando saiba escolher a ferramenta certa em cada situação.</p>
        `
      },
      en: {
        cat: "GIS", date: "5 min read",
        title: "QGIS or ArcGIS: which one should you choose?",
        body: `
          <p>These are the two most-used geoprocessing tools — but they come from different philosophies, and the right choice depends on the project, the team and the budget.</p>
          <h3>QGIS: free and open-source</h3>
          <p>QGIS costs nothing and has an active community developing it. It's an excellent entry point for students and small teams, with almost every essential feature of a professional GIS.</p>
          <h3>ArcGIS: the industry standard</h3>
          <p>ArcGIS (Esri) is paid, but offers a more robust ecosystem — advanced analysis tools, better integration with enterprise databases and dedicated technical support. It's often the required standard on public or large-scale projects.</p>
          <h3>Cost</h3>
          <p>QGIS: free. ArcGIS: annual licensing, with significant cost for small businesses or individual use.</p>
          <h3>Learning curve</h3>
          <p>Both require serious training to use with confidence, but QGIS has a slightly more approachable interface for beginners.</p>
          <h3>So, which one to choose?</h3>
          <p>For students, small teams or budget-constrained projects: QGIS. For companies with advanced analysis needs, corporate integration, or that work directly with clients already using Esri: ArcGIS. In our Cartography and GIS course we teach both, so that trainees know how to choose the right tool for each situation.</p>
        `
      }
    },

    p6: {
      image: "assets/img/blog/p6.jpg",
      pt: {
        cat: "Fiscalização", date: "6 min de leitura",
        title: "Fiscalização técnica: como evitar desvios de projecto na obra",
        body: `
          <p>Entre o projecto no papel e a obra construída, há sempre espaço para pequenos desvios se acumularem. O papel da fiscalização técnica é garantir que isso não acontece — ou que é corrigido antes de se tornar um problema caro.</p>
          <h3>O que faz um fiscal técnico</h3>
          <p>Acompanha a execução da obra comparando continuamente o que está a ser construído com o que foi projectado — alinhamentos, cotas, dimensões, materiais e métodos construtivos.</p>
          <h3>Principais pontos de controlo</h3>
          <ul>
            <li>Implantação inicial: a obra está exactamente onde deveria estar?</li>
            <li>Cotas e níveis: as alturas de fundação, pisos e coberturas correspondem ao projecto?</li>
            <li>Qualidade dos materiais: cumprem as especificações técnicas?</li>
            <li>Cronograma: a execução está dentro do prazo previsto, e se não, porquê?</li>
          </ul>
          <h3>Boas práticas que fazem diferença</h3>
          <p>Visitas regulares e documentadas (não só quando há um problema), comunicação directa e rápida com o empreiteiro quando surge um desvio, e relatórios claros que o cliente consiga realmente entender — não apenas jargão técnico.</p>
          <h3>Porque compensa investir nisto</h3>
          <p>Corrigir um desvio identificado na semana em que acontece custa uma fracção do que custa demolir e refazer trabalho já avançado. A fiscalização técnica paga-se a si própria muitas vezes ao longo de uma obra.</p>
        `
      },
      en: {
        cat: "Site Supervision", date: "6 min read",
        title: "Technical supervision: how to avoid design deviations on site",
        body: `
          <p>Between the design on paper and the building on the ground, there's always room for small deviations to add up. The role of technical supervision is to make sure that doesn't happen — or that it's corrected before it becomes an expensive problem.</p>
          <h3>What a technical supervisor does</h3>
          <p>Follows the execution of the works, continuously comparing what's being built against what was designed — alignments, elevations, dimensions, materials and construction methods.</p>
          <h3>Main control points</h3>
          <ul>
            <li>Initial setting-out: is the structure exactly where it should be?</li>
            <li>Elevations and levels: do foundation, floor and roof heights match the design?</li>
            <li>Material quality: do they meet the technical specifications?</li>
            <li>Schedule: is execution on track, and if not, why?</li>
          </ul>
          <h3>Good practices that make a difference</h3>
          <p>Regular, documented site visits (not just when there's a problem), fast, direct communication with the contractor when a deviation appears, and clear reports the client can actually understand — not just technical jargon.</p>
          <h3>Why it's worth investing in</h3>
          <p>Fixing a deviation identified the week it happens costs a fraction of demolishing and redoing work that's already progressed. Technical supervision often pays for itself many times over during a project.</p>
        `
      }
    },

    p7: {
      image: "assets/img/campo-01.jpeg",
      pt: {
        cat: "Formação", date: "5 min de leitura",
        title: "Aulas de campo com estudantes de Engenharia de Minas na Lunda Sul",
        body: `
          <p>Gostamos de partilhar com quem nos acompanha parte do trabalho que desenvolvemos. Recentemente estivemos no terreno com estudantes do curso de Engenharia de Minas do Instituto Superior Politécnico da Lunda Sul, numa aula prática de levantamento topográfico.</p>
          <h3>Porque a topografia é essencial na mineração</h3>
          <p>Em qualquer projecto de mineração, os levantamentos planimétricos e altimétricos são a base para medir e aferir áreas de corte, assim como para determinar volumes de material movimentado. Sem dados topográficos rigorosos, é impossível controlar com precisão a saída de minério ou o volume de estéril removido.</p>
          <h3>O que fizemos em campo</h3>
          <p>Com os estudantes, aplicámos o levantamento topográfico directamente a um cenário próximo da realidade de uma lavra: marcação de pontos de controlo, recolha de dados planimétricos e altimétricos, e discussão sobre como estes dados alimentam depois o cálculo de volumes em software como o AutoCAD Civil 3D.</p>
          <ul>
            <li>Levantamento planimétrico e altimétrico de áreas de corte</li>
            <li>Determinação de volumes a partir dos dados recolhidos</li>
            <li>Boas práticas de precisão em contexto de mineração</li>
            <li>Ligação entre o trabalho de campo e o processamento em gabinete</li>
          </ul>
          <h3>Uma forma de retribuir conhecimento</h3>
          <p>Para a GEPGEO, este tipo de parceria com institutos superiores é uma forma natural de retribuir à comunidade académica o conhecimento e a experiência que fomos acumulando em projectos reais — e de ajudar a formar os técnicos e engenheiros que o país vai continuar a precisar.</p>
          <p>Se a sua instituição de ensino tem interesse numa colaboração semelhante, ou se a sua empresa precisa de apoio em consultoria e cálculo de volumes para mineração, terraplanagem ou obras lineares, estamos disponíveis para conversar.</p>
        `
      },
      en: {
        cat: "Training", date: "5 min read",
        title: "Field classes with Mining Engineering students in Lunda Sul",
        body: `
          <p>We enjoy sharing part of our work with everyone who follows us. We recently spent a day in the field with students from the Mining Engineering course at Instituto Superior Politécnico da Lunda Sul, in a hands-on topographic surveying class.</p>
          <h3>Why surveying is essential in mining</h3>
          <p>In any mining project, planimetric and altimetric surveys are the foundation for measuring cut areas and determining the volume of material moved. Without rigorous topographic data, it's impossible to accurately control ore output or the volume of waste removed.</p>
          <h3>What we did in the field</h3>
          <p>With the students, we applied topographic surveying directly to a scenario close to a real mining operation: setting control points, collecting planimetric and altimetric data, and discussing how this data later feeds volume calculations in software such as AutoCAD Civil 3D.</p>
          <ul>
            <li>Planimetric and altimetric surveying of cut areas</li>
            <li>Determining volumes from the collected data</li>
            <li>Good precision practices in a mining context</li>
            <li>The link between fieldwork and office data processing</li>
          </ul>
          <h3>A way of giving back</h3>
          <p>For GEPGEO, this kind of partnership with higher education institutes is a natural way to give back to the academic community the knowledge and experience we've built up on real projects — and to help train the technicians and engineers the country will keep needing.</p>
          <p>If your institution is interested in a similar collaboration, or if your company needs consulting and volume calculation for mining, earthworks or linear projects, we're happy to talk.</p>
        `
      }
    }

  };

  function currentLang() {
    return (window.__gepgeoLang || "pt");
  }
  function t(key, fallback) {
    return window.i18nText ? window.i18nText(key) : fallback;
  }

  function buildModal() {
    const modal = document.createElement("div");
    modal.className = "article-modal";
    modal.id = "articleModal";
    modal.innerHTML = `
      <div class="article-modal-backdrop"></div>
      <div class="article-modal-panel" role="dialog" aria-modal="true">
        <button class="article-modal-close" type="button" aria-label="Fechar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
        <div class="article-modal-media"><img id="articleModalImg" src="" alt=""></div>
        <div class="article-modal-body">
          <div class="post-meta"><span class="cat" id="articleModalCat"></span><span id="articleModalDate"></span></div>
          <h2 id="articleModalTitle"></h2>
          <div class="article-modal-content" id="articleModalContent"></div>
          <div class="article-modal-cta">
            <p id="articleModalCtaText">Precisa deste serviço?</p>
            <a href="contactos.html" class="btn btn-primary btn-sm" id="articleModalCtaBtn">Falar com a equipa</a>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    return modal;
  }

  let currentArticleId = null;

  function openArticle(id) {
    const data = ARTICLES[id];
    if (!data) return;
    currentArticleId = id;
    renderArticle();
    const modal = document.getElementById("articleModal");
    modal.classList.add("is-open");
    document.body.classList.add("article-open");
    modal.querySelector(".article-modal-panel").scrollTop = 0;
  }

  function renderArticle() {
    if (!currentArticleId) return;
    const data = ARTICLES[currentArticleId];
    const lang = currentLang();
    const c = data[lang] || data.pt;
    document.getElementById("articleModalImg").src = data.image;
    document.getElementById("articleModalCat").textContent = c.cat;
    document.getElementById("articleModalDate").textContent = c.date;
    document.getElementById("articleModalTitle").textContent = c.title;
    document.getElementById("articleModalContent").innerHTML = c.body;
    document.getElementById("articleModalCtaText").textContent =
      lang === "en" ? "Need this service?" : "Precisa deste serviço?";
    document.getElementById("articleModalCtaBtn").textContent =
      lang === "en" ? "Talk to our team" : "Falar com a equipa";
  }

  function closeArticle() {
    const modal = document.getElementById("articleModal");
    if (!modal) return;
    modal.classList.remove("is-open");
    document.body.classList.remove("article-open");
    currentArticleId = null;
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (!document.querySelector(".post-card")) return; // só corre em blog.html
    const modal = buildModal();

    document.querySelectorAll(".post-card[data-article]").forEach(function (card) {
      card.addEventListener("click", function (e) {
        e.preventDefault();
        openArticle(card.getAttribute("data-article"));
      });
    });

    modal.querySelector(".article-modal-close").addEventListener("click", closeArticle);
    modal.querySelector(".article-modal-backdrop").addEventListener("click", closeArticle);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeArticle();
    });
    document.addEventListener("gepgeo:langchange", renderArticle);
  });
})();
