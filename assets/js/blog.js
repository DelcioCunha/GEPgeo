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
      image: "assets/img/blog/p7.jpg",
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
    },

    p8: {
      image: "assets/img/blog/p8.jpg",
      pt: {
        cat: "SIG/GIS", date: "5 min de leitura",
        title: "O que é um Sistema de Informação Geográfica (SIG)?",
        body: `
          <p>Um Sistema de Informação Geográfica (SIG, ou GIS em inglês) é um sistema de computador que analisa e exibe informação geograficamente referenciada. Ele usa dados anexados a um local exclusivo, e permite capturar, armazenar, verificar e exibir dados relacionados a posições na superfície da Terra.</p>
          <h3>O que o SIG consegue mostrar</h3>
          <p>O SIG pode representar num único mapa muitos tipos diferentes de dados — ruas, prédios, vegetação, cursos de água — permitindo às pessoas ver, analisar e compreender padrões e relações com muito mais facilidade do que olhando para tabelas de números.</p>
          <p>Perguntas como "onde estão localizados os cursos de água de uma base de dados geográfica?", "onde foi colhida uma determinada amostra de rocha?" ou "onde estão, exactamente, todas as bocas de incêndio de uma cidade?" são o tipo de resposta que um SIG dá com precisão e rapidez.</p>
          <h3>Um exemplo prático</h3>
          <p>Se, por exemplo, uma planta rara for observada em três lugares diferentes, a análise SIG pode mostrar que essas plantas estão todas em encostas voltadas a norte, acima de uma determinada elevação, e em zonas que recebem mais de uma certa quantidade de chuva por ano. O SIG consegue então destacar todos os outros locais na área com condições semelhantes — para que os investigadores saibam exactamente onde procurar mais exemplares.</p>
          <p>Outro exemplo: conhecendo a localização das machambas que usam um determinado fertilizante, a análise SIG cruzando essas localizações com riachos, elevações e precipitação permite prever quais os cursos de água que provavelmente vão receber esse fertilizante rio abaixo.</p>
          <h3>Onde se aplica</h3>
          <p>Estes são apenas alguns exemplos dos muitos usos do SIG em ciências da terra, biologia, gestão de recursos naturais, planeamento urbano, cadastro, engenharia civil e muitos outros campos — incluindo o trabalho técnico que desenvolvemos diariamente na GEPGEO.</p>
          <p><em>Referência: USGS, Biblioteca de Recursos.</em></p>
        `
      },
      en: {
        cat: "GIS", date: "5 min read",
        title: "What is a Geographic Information System (GIS)?",
        body: `
          <p>A Geographic Information System (GIS) is a computer system that analyses and displays geographically referenced information. It uses data attached to a unique location, and lets you capture, store, check and display data related to positions on the Earth's surface.</p>
          <h3>What GIS can show</h3>
          <p>GIS can represent many different kinds of data on a single map — streets, buildings, vegetation, waterways — letting people see, analyse and understand patterns and relationships far more easily than by looking at tables of numbers.</p>
          <p>Questions like "where are the waterways in a given geographic database?", "where was a particular rock sample collected?" or "exactly where are all the fire hydrants in a city?" are exactly the kind of answer a GIS delivers quickly and accurately.</p>
          <h3>A practical example</h3>
          <p>If, for example, a rare plant is observed in three different places, GIS analysis can reveal that these plants are all on north-facing slopes, above a certain elevation, and in areas receiving more than a certain amount of rainfall per year. GIS can then highlight every other location in the area with similar conditions — so researchers know exactly where to look for more specimens.</p>
          <p>Another example: knowing the location of farms that use a specific fertiliser, GIS analysis combining those locations with streams, elevation and rainfall can show which streams are likely to carry that fertiliser downstream.</p>
          <h3>Where it's applied</h3>
          <p>These are just a few examples of the many uses of GIS in earth sciences, biology, natural resource management, urban planning, land registry and civil engineering — including the technical work we carry out every day at GEPGEO.</p>
          <p><em>Reference: USGS, Resource Library.</em></p>
        `
      }
    },

    p9: {
      image: "assets/img/blog/p9.jpg",
      pt: {
        cat: "Topografia", date: "4 min de leitura",
        title: "Conheça os tipos de norte: magnético, geográfico e de quadrícula",
        body: `
          <p>Nem todos os "nortes" apontam exactamente para o mesmo sítio. Na topografia e na navegação, é essencial saber distinguir três tipos diferentes de norte.</p>
          <h3>Norte Magnético</h3>
          <p>É o norte indicado pela bússola — muito utilizado na navegação e na Astronomia. Segue as linhas do campo magnético terrestre, que não coincidem exactamente com o eixo de rotação do planeta.</p>
          <h3>Norte Geográfico</h3>
          <p>Também conhecido como norte verdadeiro, é a direcção que tem em conta o eixo da Terra — a linha imaginária que passa no centro do planeta entre os polos Norte e Sul. Como o eixo de rotação não varia com o tempo, esta é a referência perfeita para orientações precisas, e pode ser encontrado com ferramentas giroscópicas buscadoras de norte.</p>
          <h3>Norte de Quadrícula</h3>
          <p>É a direcção que se obtém quando se desenha um mapa da Terra num papel plano. Nos mapas, vemos linhas paralelas que marcam os meridianos — vistas de perto podem parecer rectas, mas na realidade não são verdadeiramente paralelas, porque convergem nas regiões dos polos Norte e Sul.</p>
          <p>Compreender a diferença entre estes três nortes é essencial para qualquer trabalho topográfico rigoroso, especialmente quando se cruzam dados de bússola, GPS e cartografia num mesmo projecto.</p>
        `
      },
      en: {
        cat: "Surveying", date: "4 min read",
        title: "Types of north: magnetic, geographic and grid",
        body: `
          <p>Not every "north" points to exactly the same place. In surveying and navigation, it's essential to tell three different types of north apart.</p>
          <h3>Magnetic North</h3>
          <p>This is the north shown by a compass — widely used in navigation and astronomy. It follows the lines of the Earth's magnetic field, which don't exactly coincide with the planet's rotation axis.</p>
          <h3>Geographic North</h3>
          <p>Also known as true north, this is the direction that accounts for the Earth's axis — the imaginary line running through the centre of the planet between the North and South Poles. Because the rotation axis doesn't change over time, this is the perfect reference for precise orientation, and can be found using gyroscopic north-seeking instruments.</p>
          <h3>Grid North</h3>
          <p>This is the direction obtained when a map of the Earth is drawn on flat paper. On maps we see parallel lines marking the meridians — up close they may look straight, but they aren't truly parallel, since they converge at the North and South Pole regions.</p>
          <p>Understanding the difference between these three norths is essential for any rigorous surveying work, especially when combining compass, GPS and cartographic data in the same project.</p>
        `
      }
    },

    p10: {
      image: "assets/img/blog/p10.jpg",
      pt: {
        cat: "Geoprocessamento", date: "6 min de leitura",
        title: "Benefícios do Cadastro Técnico Multifinalitário (CTM)",
        body: `
          <p>Um registo cadastral é um registo técnico de imóveis, ligações de água potável, lagos, monumentos e outros elementos situados num território. Garante a segurança jurídica dos indivíduos e do Estado, promovendo o desenvolvimento da sociedade.</p>
          <h3>O que é o Cadastro Técnico Multifinalitário</h3>
          <p>Segundo Blachut et al. (1974), o Cadastro Técnico Multifinalitário (CTM) pode ser entendido como um sistema de registo dos elementos espaciais que representam a estrutura urbana, constituído por uma componente geométrica e outra descritiva, que lhe conferem agilidade e diversidade no fornecimento de dados para diferentes funções — incluindo o planeamento urbano.</p>
          <h3>Principais benefícios de um cadastro actualizado</h3>
          <ul>
            <li>Melhor gestão de resíduos sólidos</li>
            <li>Conservação do património público</li>
            <li>Melhoria na prestação de serviços básicos (escolas, centros profissionais, gestão de mercados informais)</li>
            <li>Segurança jurídica</li>
            <li>Desenvolvimento de infra-estrutura (parques, ciclovias)</li>
          </ul>
          <h3>Porque isto importa para os municípios</h3>
          <p>A única forma que o poder público de qualquer nação tem para solucionar os problemas que afectam as suas populações é compreender o que acontece, através de estudos, análises e pesquisas. Por isso, podemos afirmar que muitos dos nossos municípios carecem de uma estrutura que é a base para todo e qualquer serviço destinado à população.</p>
          <p>Para minimizar este problema, é necessário que os municípios tenham um Cadastro Técnico Multifinalitário actualizado, bem elaborado e com uma representação cartográfica acurada — a base sobre a qual assenta uma gestão territorial eficaz.</p>
        `
      },
      en: {
        cat: "Geoprocessing", date: "6 min read",
        title: "Benefits of a Multipurpose Technical Cadastre (CTM)",
        body: `
          <p>A cadastral register is a technical record of properties, drinking-water connections, lakes, monuments and other elements located within a territory. It guarantees legal certainty for individuals and the State, and promotes the development of society.</p>
          <h3>What a Multipurpose Technical Cadastre is</h3>
          <p>According to Blachut et al. (1974), a Multipurpose Technical Cadastre (CTM) can be understood as a registration system for the spatial elements that represent the urban structure, made up of a geometric component and a descriptive one, which together give it the agility and versatility to supply data for different functions — including urban planning.</p>
          <h3>Key benefits of an up-to-date cadastre</h3>
          <ul>
            <li>Better solid-waste management</li>
            <li>Conservation of public assets</li>
            <li>Improved delivery of basic services (schools, professional centres, management of informal markets)</li>
            <li>Legal certainty</li>
            <li>Infrastructure development (parks, cycle paths)</li>
          </ul>
          <h3>Why this matters for municipalities</h3>
          <p>The only way any nation's public authorities can solve the problems affecting their population is to understand what's happening, through studies, analysis and research. That's why we can say many of our municipalities lack a structure that is the foundation for every service aimed at the population.</p>
          <p>To minimise this problem, municipalities need an up-to-date, well-built Multipurpose Technical Cadastre with accurate cartographic representation — the foundation on which effective territorial management is built.</p>
        `
      }
    },

    p11: {
      image: "assets/img/blog/p11.jpg",
      pt: {
        cat: "Topografia", date: "3 min de leitura",
        title: "Planimetria e Altimetria: as duas faces da topografia plana",
        body: `
          <p>O estudo da topografia plana divide-se em duas áreas complementares: a planimetria e a altimetria.</p>
          <h3>Planimetria</h3>
          <p>Na planimetria, os elementos da cadeia são projectados num plano horizontal, sem considerar a sua diferença de elevação — ou seja, estuda superfícies planas. É o tipo de levantamento usado, por exemplo, para determinar a área de uma poligonal.</p>
          <h3>Altimetria</h3>
          <p>A altimetria estuda as diferenças de elevação de pontos na superfície da Terra, dando a sua posição absoluta em altura. É o levantamento usado, por exemplo, na obtenção de cotas de um terreno.</p>
          <h3>Porque as duas são necessárias</h3>
          <p>Na prática, quase todos os projectos de engenharia precisam das duas — a planimetria dá a forma e a posição do terreno vista de cima, e a altimetria dá o relevo e as diferenças de nível que determinam como a água escoa, onde se corta ou aterra, e como uma estrada, edifício ou rede de infra-estruturas se vai encaixar no terreno real.</p>
        `
      },
      en: {
        cat: "Surveying", date: "3 min read",
        title: "Planimetry and Altimetry: the two sides of plane surveying",
        body: `
          <p>The study of plane surveying is divided into two complementary areas: planimetry and altimetry.</p>
          <h3>Planimetry</h3>
          <p>In planimetry, the survey elements are projected onto a horizontal plane, without accounting for differences in elevation — in other words, it studies flat surfaces. This is the type of survey used, for example, to determine the area of a boundary polygon.</p>
          <h3>Altimetry</h3>
          <p>Altimetry studies the differences in elevation between points on the Earth's surface, giving their absolute position in height. This is the survey used, for example, to obtain a site's elevation levels.</p>
          <h3>Why both are needed</h3>
          <p>In practice, almost every engineering project needs both — planimetry gives the shape and position of the terrain seen from above, while altimetry gives the relief and level differences that determine how water drains, where to cut or fill, and how a road, building or infrastructure network will actually fit the real terrain.</p>
        `
      }
    },

    p12: {
      image: "assets/img/blog/p12.jpg",
      pt: {
        cat: "Formação", date: "5 min de leitura",
        title: "O que é preciso para ser um topógrafo?",
        body: `
          <p>Ser topógrafo envolve compreender a geografia e a topografia de áreas específicas. Trata-se de interpretar os relevos do terreno, além de realizar medições precisas para o mapear.</p>
          <h3>Conhecimentos essenciais</h3>
          <ul>
            <li>Cartografia — para interpretar mapas correctamente</li>
            <li>Geometria — para ter noção visual de distância e ângulo</li>
            <li>Princípios de medição, como a fotogrametria — para que o trabalho topográfico seja realizado com eficácia e os dados recolhidos com precisão</li>
            <li>Boa noção de escalas — para calcular e interpretar correctamente a área de um lote ou terreno</li>
          </ul>
          <h3>Como começar</h3>
          <p>O curso de Topografia prestado pela GEPGEO ensina o que é preciso para adquirir um conhecimento base e caminhar para se tornar topógrafo — desde a interpretação de gráficos e mapas até ao levantamento de terrenos.</p>
          <p>No final do curso, é emitido um certificado que pode ser usado para atestar o conhecimento adquirido na área — uma mais-valia para quem quer entrar ou avançar na profissão.</p>
        `
      },
      en: {
        cat: "Training", date: "5 min read",
        title: "What does it take to become a surveyor?",
        body: `
          <p>Being a surveyor means understanding the geography and topography of specific areas. It involves interpreting the terrain's relief, as well as taking precise measurements to map it.</p>
          <h3>Essential knowledge</h3>
          <ul>
            <li>Cartography — to correctly interpret maps</li>
            <li>Geometry — for a visual sense of distance and angle</li>
            <li>Measurement principles, such as photogrammetry — so that surveying work is carried out effectively and data is collected accurately</li>
            <li>A solid grasp of scales — to correctly calculate and interpret the area of a plot or lot</li>
          </ul>
          <h3>How to get started</h3>
          <p>The Surveying course offered by GEPGEO teaches what's needed to build a foundational knowledge and work towards becoming a surveyor — from reading charts and maps to carrying out land surveys.</p>
          <p>A certificate is issued at the end of the course, which can be used to attest to the knowledge gained in the field — a real asset for anyone looking to enter or advance in the profession.</p>
        `
      }
    },

    p13: {
      image: "assets/img/blog/p13.jpg",
      pt: {
        cat: "Engenharia Civil", date: "6 min de leitura",
        title: "Aterro sanitário: o que é e porque é importante",
        body: `
          <p>Um aterro sanitário é um método de engenharia para a disposição de resíduos sólidos no solo, com o objectivo de proteger o meio ambiente: os resíduos são espalhados em pequenas camadas, compactados ao menor volume prático e cobertos com terra ao final da jornada de trabalho, evitando efeitos adversos no ambiente.</p>
          <h3>Tipos de aterro sanitário</h3>
          <ul>
            <li>Aterro convencional</li>
            <li>Aterro em valas</li>
          </ul>
          <h3>Vantagens da implementação de aterros sanitários</h3>
          <ul>
            <li>Redução das emissões de gases de efeito estufa</li>
            <li>Criação de novos postos de trabalho e geração de rendimento para catadores</li>
            <li>Valorização dos resíduos, com possibilidade de reciclar, reaproveitar e gerar energia a partir dos gases de decomposição ou de resíduos de alto poder calorífico</li>
            <li>Melhoria da imagem das cidades, com redução de lixeiras a céu aberto</li>
            <li>Redução da poluição atmosférica, visual, dos solos e aquática</li>
            <li>Melhoria da saúde pública</li>
          </ul>
          <h3>Porque são importantes</h3>
          <p>Os aterros são importantes porque solucionam parte dos problemas causados pelo excesso de lixo gerado nas grandes cidades, e diminuem os impactos ambientais dos resíduos. Minimizam os resíduos produzidos e agregam valor aos materiais que podem ser reutilizados na indústria — por reciclagem ou agricultura orgânica, através da compostagem — reduzindo assim a extracção de matéria-prima e a energia gasta no fabrico de novos produtos.</p>
          <p>Do ponto de vista ecológico, os aterros sanitários são considerados os locais mais adequados para a disposição final e tratamento de resíduos sólidos. A escolha do local para a construção de um aterro sanitário é, por isso, determinante para o seu sucesso, evitando gastos não previstos com infra-estrutura.</p>
        `
      },
      en: {
        cat: "Civil Engineering", date: "6 min read",
        title: "Sanitary landfills: what they are and why they matter",
        body: `
          <p>A sanitary landfill is an engineering method for disposing of solid waste in the ground, aimed at protecting the environment: waste is spread in thin layers, compacted to the smallest practical volume, and covered with soil at the end of each working day, preventing adverse effects on the environment.</p>
          <h3>Types of sanitary landfill</h3>
          <ul>
            <li>Conventional landfill</li>
            <li>Trench landfill</li>
          </ul>
          <h3>Advantages of sanitary landfills</h3>
          <ul>
            <li>Reduced greenhouse gas emissions</li>
            <li>New jobs and income generation for waste pickers</li>
            <li>Value recovery from waste, with the potential to recycle, reuse and generate energy from decomposition gases or high-calorific waste</li>
            <li>Improved image of cities, with fewer open-air dumps</li>
            <li>Reduced air, visual, soil and water pollution</li>
            <li>Improved public health</li>
          </ul>
          <h3>Why they matter</h3>
          <p>Landfills matter because they solve part of the problems caused by the excess waste generated in large cities, and reduce the environmental impact of that waste. They minimise the waste produced and add value to materials that can be reused in industry — through recycling or organic farming via composting — reducing the extraction of raw materials and the energy spent manufacturing new products.</p>
          <p>From an ecological standpoint, sanitary landfills are considered the most suitable sites for the final disposal and treatment of solid waste. Choosing the right site for building a sanitary landfill is therefore decisive for its success, avoiding unplanned infrastructure costs.</p>
        `
      }
    },

    p14: {
      image: "assets/img/blog/p14.jpg",
      pt: {
        cat: "Geoprocessamento", date: "5 min de leitura",
        title: "Satélites geoestacionários vs. deteção remota: qual a diferença?",
        body: `
          <p>Os satélites geoestacionários são aqueles cujo tempo de órbita é igual a 24 horas — o mesmo que o período de rotação da Terra. É por essa razão que parecem pontos fixos no céu quando observados a partir do solo.</p>
          <h3>Para que servem os satélites geoestacionários</h3>
          <p>São muito utilizados em comunicações, porque o seu movimento acompanha o do planeta e, assim, podem oferecer o serviço de forma ininterrupta. Têm ainda uma larga área de actuação, conseguindo atingir regiões distantes. Satélites de comunicação e de meteorologia — como o ANGOSAT-2 — utilizam este tipo de órbita.</p>
          <h3>E os satélites de deteção remota?</h3>
          <p>Já os satélites de deteção remota seguem uma órbita à volta da Terra que depende das características e objectivos dos sensores a bordo. Em geral, as órbitas são definidas pela altitude, orientação e rotação relativamente à Terra.</p>
          <p>A maioria dos satélites de deteção remota é desenhada para descrever uma órbita de Norte para Sul. Esta órbita, combinada com o movimento de rotação da Terra (de Oeste para Este), permite-lhes cobrir grande parte da superfície terrestre num determinado período de tempo. Por causa da sua inclinação relativamente a uma linha traçada entre os Polos Norte e Sul, estas órbitas são chamadas de quase-polares.</p>
          <h3>Porque a diferença importa para a gestão territorial</h3>
          <p>Perceber esta diferença é fundamental para quem trabalha com dados geoespaciais: os satélites geoestacionários dão-nos comunicação e observação contínua de uma mesma área (como meteorologia em tempo quase real), enquanto os satélites de deteção remota em órbita quase-polar são os que fornecem, ao longo do tempo, as imagens detalhadas de todo o território que alimentam o mapeamento, o cadastro e o planeamento territorial.</p>
        `
      },
      en: {
        cat: "Geoprocessing", date: "5 min read",
        title: "Geostationary satellites vs. remote sensing: what's the difference?",
        body: `
          <p>Geostationary satellites are those whose orbital period equals 24 hours — the same as the Earth's rotation period. That's why they appear as fixed points in the sky when observed from the ground.</p>
          <h3>What geostationary satellites are used for</h3>
          <p>They're widely used for communications, because their movement matches the planet's, letting them provide uninterrupted service. They also cover a wide operating area, reaching distant regions. Communication and weather satellites — such as ANGOSAT-2 — use this type of orbit.</p>
          <h3>What about remote-sensing satellites?</h3>
          <p>Remote-sensing satellites, on the other hand, follow an orbit around the Earth that depends on the characteristics and objectives of the sensors on board. In general, orbits are defined by altitude, orientation and rotation relative to the Earth.</p>
          <p>Most remote-sensing satellites are designed to follow a North-to-South orbit. Combined with the Earth's own rotation (West to East), this lets them cover most of the Earth's surface over a given period. Because of their inclination relative to a line drawn between the North and South Poles, these orbits are called near-polar.</p>
          <h3>Why the difference matters for territorial management</h3>
          <p>Understanding this difference is essential for anyone working with geospatial data: geostationary satellites give us communication and near-continuous observation of the same area (such as near real-time weather), while near-polar remote-sensing satellites are the ones that, over time, supply the detailed imagery of an entire territory that feeds mapping, land registry and territorial planning.</p>
        `
      }
    },

    p15: {
      image: "assets/img/blog/p15.jpg",
      pt: {
        cat: "Topografia", date: "3 min de leitura",
        title: "Os 5 tipos de medições feitas em topografia",
        body: `
          <p>A matéria-prima da topografia são as medições. Independentemente da finalidade do trabalho, são sempre realizados cinco tipos de medição:</p>
          <ul>
            <li>Distâncias horizontais</li>
            <li>Distâncias verticais</li>
            <li>Distâncias inclinadas</li>
            <li>Ângulos horizontais</li>
            <li>Ângulos verticais</li>
          </ul>
          <p>É a combinação destes cinco tipos de medição, recolhidos com instrumentos como a Estação Total ou o GPS Geodésico RTK, que permite reconstituir com precisão a forma e o relevo de qualquer terreno — seja para um levantamento cadastral, uma implantação de obra ou um cálculo de volumes.</p>
        `
      },
      en: {
        cat: "Surveying", date: "3 min read",
        title: "The 5 types of measurements taken in surveying",
        body: `
          <p>Measurements are the raw material of surveying. Regardless of the purpose of the work, five types of measurement are always carried out:</p>
          <ul>
            <li>Horizontal distances</li>
            <li>Vertical distances</li>
            <li>Slope (inclined) distances</li>
            <li>Horizontal angles</li>
            <li>Vertical angles</li>
          </ul>
          <p>It's the combination of these five measurement types, collected with instruments such as the Total Station or RTK Geodetic GPS, that makes it possible to accurately reconstruct the shape and relief of any terrain — whether for a cadastral survey, a construction setting-out, or a volume calculation.</p>
        `
      }
    },

    p16: {
      image: "assets/img/blog/p16.jpg",
      pt: {
        cat: "SIG/GIS", date: "5 min de leitura",
        title: "Coordenadas UTM vs. coordenadas geográficas: qual a diferença?",
        body: `
          <p>O sistema de coordenadas UTM é o mais utilizado em trabalhos que envolvem sistemas de informação geográfica, por apresentar facilidades no manuseamento e adoptar uma projecção cartográfica que trabalha com paralelos e meridianos rectos e equidistantes.</p>
          <h3>Coordenadas UTM</h3>
          <p>Essa projecção foi concebida por Gerhard Kremer, mais conhecido como Mercator, e publicada em 1569, dando origem ao sistema UTM (Universal Transversa de Mercator). Caracteriza-se por adoptar coordenadas métricas, planas ou rectangulares, e utiliza um tipo particular de projecção cilíndrica para representar a Terra sobre um plano — permitindo referenciar qualquer ponto da superfície terrestre.</p>
          <h3>Coordenadas Geográficas</h3>
          <p>As coordenadas geográficas (latitude e longitude geográficas) são determinadas a partir da adopção de um modelo esférico — de raio constante — para a Terra. Este modelo esférico é uma simplificação do modelo elipsoidal, e permite expressar com exactidão um lugar na superfície da Terra. Estas coordenadas são representadas por meio da latitude e da longitude, dadas em medidas angulares.</p>
          <h3>Qual escolher</h3>
          <p>Na prática, as coordenadas geográficas são ideais para localizar um ponto em qualquer parte do globo de forma universal, enquanto as coordenadas UTM, por serem métricas e planas, facilitam muito o cálculo de distâncias e áreas — por isso são a escolha habitual em projectos de topografia, cadastro e engenharia civil.</p>
        `
      },
      en: {
        cat: "GIS", date: "5 min read",
        title: "UTM coordinates vs. geographic coordinates: what's the difference?",
        body: `
          <p>The UTM coordinate system is the most widely used in work involving geographic information systems, since it's easy to handle and uses a cartographic projection built on straight, equidistant parallels and meridians.</p>
          <h3>UTM Coordinates</h3>
          <p>This projection was devised by Gerhard Kremer, better known as Mercator, and published in 1569, giving rise to the UTM (Universal Transverse Mercator) system. It's characterised by the use of metric, plane or rectangular coordinates, and uses a particular type of cylindrical projection to represent the Earth on a plane — allowing any point on the Earth's surface to be referenced.</p>
          <h3>Geographic Coordinates</h3>
          <p>Geographic coordinates (geographic latitude and longitude) are determined using a spherical model — of constant radius — for the Earth. This spherical model is a simplification of the ellipsoidal model, and lets a location on the Earth's surface be expressed accurately. These coordinates are represented through latitude and longitude, given in angular measurements.</p>
          <h3>Which one to choose</h3>
          <p>In practice, geographic coordinates are ideal for locating a point anywhere on the globe in a universal way, while UTM coordinates, being metric and planar, make calculating distances and areas much easier — which is why they're the usual choice in surveying, cadastre and civil engineering projects.</p>
        `
      }
    },

    p17: {
      image: "assets/img/blog/p17.jpg",
      pt: {
        cat: "Topografia", date: "3 min de leitura",
        title: "Para que servem os perfis topográficos?",
        body: `
          <p>Os perfis topográficos são gráficos feitos a partir dos mapas de curvas de nível, que representam de forma mais detalhada as variações do relevo de um terreno.</p>
          <h3>Onde são usados</h3>
          <p>São normalmente utilizados em obras como redes de esgoto, gasodutos, construção de estradas, túneis e outras obras de engenharia civil — sempre que é preciso analisar o relevo de um local antes ou durante o projecto.</p>
          <h3>Porque são importantes</h3>
          <p>Um perfil topográfico bem elaborado permite prever, ainda em fase de projecto, onde vão surgir cortes e aterros, qual o declive de uma linha de esgoto ou de uma via, e onde uma infra-estrutura enterrada vai atravessar diferentes camadas de terreno — evitando surpresas dispendiosas já em obra.</p>
          <p>Para saber mais sobre os nossos serviços de levantamento topográfico, fale com a nossa equipa.</p>
        `
      },
      en: {
        cat: "Surveying", date: "3 min read",
        title: "What are topographic profiles used for?",
        body: `
          <p>Topographic profiles are charts produced from contour-line maps, representing the variations in a terrain's relief in much greater detail.</p>
          <h3>Where they are used</h3>
          <p>They are normally used in projects such as sewage networks, gas pipelines, road construction, tunnels and other civil-engineering works — whenever it's necessary to analyse a site's relief before or during the project.</p>
          <h3>Why they matter</h3>
          <p>A well-built topographic profile lets you predict, still at the design stage, where cuts and fills will occur, the slope of a sewer line or road, and where a buried pipeline will cross different terrain layers — avoiding costly surprises once construction is underway.</p>
          <p>To learn more about our topographic surveying services, get in touch with our team.</p>
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
