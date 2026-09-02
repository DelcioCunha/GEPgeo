// ---------------------------------------------------------------
// Mapa 3D interativo no hero, usando MapLibre GL JS (open-source,
// gratuito, SEM chave de API e SEM cartão de crédito):
//   - Satélite: Esri World Imagery (serviço público)
//   - Relevo/terreno 3D: AWS Terrain Tiles (dados públicos, formato "terrarium")
//
// Carrega automaticamente assim que a página abre — substitui a
// antiga imagem estática do hero.
// ---------------------------------------------------------------
(function () {
  const GEPGEO_LOCATION = {
    lng: 13.2302,
    lat: -8.8964,
    zoom: 17,
    pitch: 65,     // inclinação final da câmara, alcançada só depois do mapa carregar
    bearing: -20
  };

  // Vista inicial, mais "achatada" — pede muito menos peças de mapa,
  // por isso carrega rápido mesmo sem nada em cache.
  const INITIAL_VIEW = {
    zoom: 14.5,
    pitch: 0,
    bearing: 0
  };

  const MAPLIBRE_CSS = "https://cdn.jsdelivr.net/npm/maplibre-gl@4.7.1/dist/maplibre-gl.css";
  const MAPLIBRE_JS = "https://cdn.jsdelivr.net/npm/maplibre-gl@4.7.1/dist/maplibre-gl.js";

  // Tempo máximo (ms) que deixamos o indicador "a carregar" visível.
  // Passado isto, escondemo-lo de qualquer forma — o mapa nunca fica
  // preso num ecrã de carregamento infinito.
  const LOADING_TIMEOUT_MS = 6000;

  // Duração da rotação automática de boas-vindas. Depois disto, ou
  // assim que o utilizador tocar no mapa, a rotação pára por completo
  // para não manter o processador/placa gráfica ocupados sem razão.
  const AUTO_SPIN_DURATION_MS = 9000;

  const frame = document.getElementById("hero-map-frame");
  if (!frame) return;

  function loadMapLibre() {
    return new Promise((resolve, reject) => {
      if (window.maplibregl) {
        resolve();
        return;
      }
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = MAPLIBRE_CSS;
      document.head.appendChild(link);

      const script = document.createElement("script");
      script.src = MAPLIBRE_JS;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Falha ao carregar a biblioteca MapLibre GL."));
      document.head.appendChild(script);
    });
  }

  async function init3DMap() {
    const loading = document.createElement("div");
    loading.className = "hero-3d-loading";
    loading.innerHTML = '<div class="spinner"></div><span>A carregar mapa 3D…</span>';
    frame.appendChild(loading);

    // Segurança: nunca deixar o overlay de carregamento preso para sempre,
    // mesmo que a rede esteja lenta ou algum pedido de peças falhe.
    let loadingHidden = false;
    const hideLoading = () => {
      if (loadingHidden) return;
      loadingHidden = true;
      loading.remove();
    };
    const safetyTimer = setTimeout(hideLoading, LOADING_TIMEOUT_MS);

    try {
      await loadMapLibre();

      const mapContainer = document.createElement("div");
      mapContainer.id = "hero-3d-canvas";
      frame.insertBefore(mapContainer, frame.firstChild);

      const map = new maplibregl.Map({
        container: "hero-3d-canvas",
        style: {
          version: 8,
          sources: {
            satelite: {
              type: "raster",
              tiles: [
                "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              ],
              tileSize: 256,
              attribution: "Imagery © Esri, Maxar, Earthstar Geographics"
            },
            terreno: {
              type: "raster-dem",
              tiles: [
                "https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png"
              ],
              tileSize: 256,
              encoding: "terrarium"
            }
          },
          layers: [
            { id: "satelite-layer", type: "raster", source: "satelite" }
          ],
          terrain: { source: "terreno", exaggeration: 1.4 }
        },
        center: [GEPGEO_LOCATION.lng, GEPGEO_LOCATION.lat],
        // Começa numa vista "achatada" — pede poucas peças, carrega depressa.
        zoom: INITIAL_VIEW.zoom,
        pitch: INITIAL_VIEW.pitch,
        bearing: INITIAL_VIEW.bearing,
        maxPitch: 70,
        attributionControl: { compact: true }
      });

      map.addControl(new maplibregl.NavigationControl({ visualizePitch: true }), "top-right");

      new maplibregl.Marker({ color: "#2aab5f" })
        .setLngLat([GEPGEO_LOCATION.lng, GEPGEO_LOCATION.lat])
        .addTo(map);

      let userInteracted = false;
      ["mousedown", "touchstart", "wheel"].forEach((evt) =>
        map.on(evt, () => {
          userInteracted = true;
        })
      );

      map.once("load", () => {
        clearTimeout(safetyTimer);
        hideLoading();

        // Só agora, com a vista inicial já carregada e visível, animamos
        // suavemente até à inclinação/zoom final desejados.
        if (!userInteracted) {
          map.easeTo({
            zoom: GEPGEO_LOCATION.zoom,
            pitch: GEPGEO_LOCATION.pitch,
            bearing: GEPGEO_LOCATION.bearing,
            duration: 3500
          });
        }

        startAutoSpin(map, () => userInteracted);
      });
    } catch (err) {
      console.error(err);
      clearTimeout(safetyTimer);
      loading.innerHTML = "<span>Não foi possível carregar o mapa 3D. Verifica a tua ligação à internet.</span>";
    }
  }

  function startAutoSpin(map, hasUserInteracted) {
    const startTime = performance.now();
    let stopped = false;

    function stopSpin() {
      stopped = true;
      document.removeEventListener("visibilitychange", onVisibilityChange);
    }

    function onVisibilityChange() {
      if (document.hidden) stopped = true;
    }
    document.addEventListener("visibilitychange", onVisibilityChange);

    function spin(now) {
      if (stopped || hasUserInteracted() || now - startTime > AUTO_SPIN_DURATION_MS) {
        stopSpin();
        return;
      }
      map.setBearing((map.getBearing() + 0.08) % 360);
      requestAnimationFrame(spin);
    }
    requestAnimationFrame(spin);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init3DMap);
  } else {
    init3DMap();
  }
})();
