const state = {
  mode: 'race',
  track: [],
  raceLayer: null,
  returnLayer: null,
  boat: null,
  index: 0,
  timer: null,
  dayStarts: [],
};

const returnRoute = [
  { name: 'Río de Janeiro', lat: -22.9515, lon: -43.1722, short: 'RÍO' },
  { name: 'Angra dos Reis', lat: -23.0067, lon: -44.3181, short: 'ANG' },
  { name: 'Ilhabela', lat: -23.7785, lon: -45.3581, short: 'ILH' },
  { name: 'Florianópolis', lat: -27.5949, lon: -48.5482, short: 'FLN' },
  { name: 'Punta del Este', lat: -34.9591, lon: -54.9576, short: 'PDE' },
  { name: 'Buenos Aires', lat: -34.596, lon: -58.3626, short: 'BUE' },
];

const povChapters = [
  {
    place: 'Florianópolis',
    title: 'Las palabras siempre quedarán escuetas',
    routeIndex: 3,
    paragraphs: [
      'Las palabras siempre quedarán escuetas, en el intento de transmitir tanta intensidad.',
      'El Liceo Naval logró dejarme en nivel, marinero de agua dulce. Pero en compañía de avezados camaradas, llegué a sentir la espuma del mar. Fue así, que igual que un grupo de amigos se junta a comer un asado, nosotros tuvimos la enorme dicha de juntarnos a traer de regreso al MAMBO, después de la regata a Río de Janeiro.',
      'La posta iniciaba en Florianópolis. Una noche de persistente temporal, en la que costó hacer entender a la policía aeroportuaria, que acabábamos de entrar a su país, y que no íbamos a regresar por vía aérea… Dije: “Senhor, o senhor entende que estamos voltando à vela?”',
      'Un par de horas más tarde, superado tremendo enigma, logramos pernoctar en el MAMBO. El viento sacudía el Yacht Club de Floria. Ninguna amarra iba a evitar que nos acune con los rolidos más intensos, que fuéramos a experimentar durante el viaje.'
    ]
  },
  {
    place: 'Florianópolis → mar abierto',
    title: 'La tarde caía hermosa',
    routeIndex: 3,
    paragraphs: [
      'Al otro día, la cosa mejoró y paseamos por el mercado. Finalmente arribó la “sombra” del último integrante de la tripulación, que luego de haberse zampado tremenda feijoada, protagonizó una acalorada maratón sobre la autopista, en frustrada búsqueda de un taxi que aceptara cartão de crédito. Fue el primero de sus diez días en coma, que sobrevivió estorbando en el cockpit, hasta el correspondiente reintegro a su pueblo.',
      'La tarde caía hermosa. Entonces la autoridad marítima habilitó la circulación náutica, y en ese momento, pusimos proa a Punta del Este, Uruguay.'
    ]
  },
  {
    place: 'Atlántico Sur',
    title: 'Seis días constantes de navegación',
    routeIndex: 4,
    paragraphs: [
      'Comenzaba una zaga de seis días constantes de navegación, donde la palabra “seco” desapareció de mi diccionario. Donde las cosas que ocurrían, eran de esas que nunca te pasan. Donde la noche era noche, y las estrellas brotaban hasta el horizonte, los 360 grados. Donde la naturaleza te recordaba, que sos ínfimamente pequeño. Donde las charlas eran las más profundas y las risas te dejaban sin aliento. Donde las comidas valían oro, y ponele que tal vez, por esa condición, fue que las mantuve en mi sistema toda la semana.',
      'Lo primero que necesité, al pisar suelo firme, fue un baño. ¡Un baño que se quede quieto! Pero ese jodido baño del club, se movía más que el del MAMBO. Recuerdo esos azulejos amarillos irse y venirse sin piedad… Debo confesar que esa fue mi mayor descompostura.',
      'En el barco, había adquirido unas técnicas para minimizar los mareos. Mirar en lontananza. Estar afuera. Vestirse y desvestirse en cuotas. No grasas, no alcohol. Pero para ese traicionero baño en terreno sólido, no tenía el manual.'
    ]
  },
  {
    place: 'Punta del Este',
    title: 'Un baño que se quede quieto',
    routeIndex: 4,
    paragraphs: [
      'Pasamos entonces dos días en la playa Charrúa Top. ¡Qué noche Teté!',
      'La bitácora fijaba para esa instancia, un relevo en la cuadrilla…',
      'El resultado… Perdimos un experto a cambio de una elegante “boya con sombrero”.',
      'La paz que solía reinar en esa marina, fue aturdida por una turba de inadaptados recordando anécdotas y aventuras, que recién se sofocaron con el segundo cadáver de Chivas Regal…',
      'El alcohol se evaporó, y dio lugar a que la claridad aborde… ¡La conclusión llegó la mañana siguiente! ¡Cómo olvidar!',
      'Salimos luego de turistas. Un “Ricardito”, un par de pizzas… ¡Un sueldo!',
      'Caro, pero todo lindo… ¡Una chivitería! Y fuimos por un chivito. Me dije, ¡acá sí que se come barato! Ya he comido un caprino de estos, pero éramos veinte.',
      'No pude verme la cara de shock cuando trajeron el chivito a la mesa… ¡Yo no pedí un sanguchito! ¡¿Cómo que esto es un chivito?! Callate paisa y comé que está rico…'
    ]
  },
  {
    place: 'Río de la Plata',
    title: 'La última derrota',
    routeIndex: 5,
    paragraphs: [
      'La cuenta regresiva, ya nos mostraba los dientes. Había que prepararse para la última derrota. Al amanecer zarpamos. Un día más de viaje… Empecé a sentir que estábamos muy cerca de Buenos Aires. Que lo bueno se escurría… Si hasta el agua se fue enturbiando… Claro, en ese viaje habíamos tocado el cielo con las manos, y ya estábamos nuevamente con los pies en el Río de la Plata.',
      'La última atracada era inminente… De nuevo en el Centro de Graduados. La maniobra se embarraba con un motor herido, una marea baja y un Gran Capitán crispado…'
    ]
  },
  {
    place: 'Buenos Aires',
    title: 'Esa cascarita de nuez se llama Mambo',
    routeIndex: 5,
    paragraphs: [
      'Una vez más, la amarra fue segura. El rumbo, aquí nos dejaba. La misión, estaba cumplida. ¡Estábamos de regreso, con el barco en una pieza!',
      'Y ese fue el momento. Había que guardar al niño, para cambiar a modo “sólo adulto”. A continuar con la rutina. Cada cual con su uniforme. Pero a no olvidar, toda la riqueza y la unión que nos dejó este encuentro. Fuimos un grupo de almas en una cascarita de nuez. Y esa cascarita de nuez… ¡Se llama MAMBO!',
      '¡Simplemente, GRACIAS!'
    ]
  }
];

const map = window.L ? L.map('map', { zoomControl: false, scrollWheelZoom: false }) : null;
if (map) {
  L.control.zoom({ position: 'bottomleft' }).addTo(map);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap'
  }).addTo(map);
  map.setView([-29, -50], 4);
} else {
  document.getElementById('map').innerHTML = '<p class="map-fallback">No se pudo cargar el mapa base. El resto de la historia sigue disponible.</p>';
}

const nauticalIcon = (label, color = '#153841') => L.divIcon({
  className: '',
  html: `<div class="nautical-icon" style="background:${color}"><span>${label}</span></div>`,
  iconSize: [38, 38],
  iconAnchor: [19, 38],
});

const boatIcon = window.L ? L.divIcon({
  className: '',
  html: '<div class="boat-marker"></div>',
  iconSize: [22, 22],
  iconAnchor: [11, 11],
}) : null;

const formatDate = iso => new Intl.DateTimeFormat('es-AR', {
  day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit', hour12: false
}).format(new Date(iso)).replace(',', ' ·');

const formatCoords = point => {
  const lat = Math.abs(point.lat);
  const lon = Math.abs(point.lon);
  const latD = Math.floor(lat), lonD = Math.floor(lon);
  const latM = Math.round((lat - latD) * 60), lonM = Math.round((lon - lonD) * 60);
  return `${latD}°${String(latM).padStart(2, '0')}′S · ${lonD}°${String(lonM).padStart(2, '0')}′W`;
};

const nearestTrackIndex = (lat, lon) => {
  let best = 0;
  let score = Infinity;
  state.track.forEach((point, index) => {
    const next = (point.lat - lat) ** 2 + (point.lon - lon) ** 2;
    if (next < score) { score = next; best = index; }
  });
  return best;
};

function setTrackIndex(index, pan = false) {
  if (!state.track.length || state.mode !== 'race') return;
  state.index = Math.max(0, Math.min(index, state.track.length - 1));
  const point = state.track[state.index];
  document.getElementById('trackRange').value = state.index;
  document.getElementById('positionTime').textContent = formatDate(point.t);
  document.getElementById('positionCoords').textContent = formatCoords(point);
  state.boat.setLatLng([point.lat, point.lon]);
  state.raceLayer.progress.setLatLngs(state.track.slice(0, state.index + 1).map(item => [item.lat, item.lon]));
  const currentDay = point.t.slice(8, 10);
  document.querySelectorAll('.day-jumps button').forEach(button => button.classList.toggle('active', button.dataset.day === currentDay));
  if (pan) map.panTo([point.lat, point.lon]);
}

function stopPlayback() {
  if (state.timer) window.clearInterval(state.timer);
  state.timer = null;
  document.getElementById('playTrack').textContent = '▶';
  document.getElementById('playTrack').setAttribute('aria-label', 'Reproducir track');
}

function startPlayback() {
  if (state.timer || state.mode !== 'race') return;
  document.getElementById('playTrack').textContent = 'Ⅱ';
  document.getElementById('playTrack').setAttribute('aria-label', 'Pausar track');
  state.timer = window.setInterval(() => {
    const step = Math.max(1, Math.ceil(state.track.length / 420));
    if (state.index + step >= state.track.length) {
      setTrackIndex(state.track.length - 1);
      stopPlayback();
      return;
    }
    setTrackIndex(state.index + step);
  }, 55);
}

function showRaceLayer() {
  if (!map || !state.raceLayer) return;
  state.mode = 'race';
  stopPlayback();
  if (state.returnLayer) map.removeLayer(state.returnLayer.group);
  state.raceLayer.group.addTo(map);
  document.getElementById('racePlayer').hidden = false;
  document.getElementById('dayJumps').hidden = false;
  document.getElementById('panelKicker').textContent = 'TRACK GPS · IDA';
  document.getElementById('panelTitle').textContent = 'Buenos Aires → Río';
  document.getElementById('panelText').textContent = 'Deslizá la derrota o reproducí el track para seguir al Mambo.';
  document.querySelectorAll('.layer-button').forEach(button => {
    const active = button.dataset.layer === 'race';
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', active);
  });
  map.fitBounds(state.raceLayer.bounds, { padding: [34, 34] });
  setTrackIndex(state.index);
}

function showReturnLayer(routeIndex = 3) {
  if (!map || !state.returnLayer) return;
  state.mode = 'return';
  stopPlayback();
  if (state.raceLayer) map.removeLayer(state.raceLayer.group);
  state.returnLayer.group.addTo(map);
  const point = returnRoute[routeIndex];
  state.returnLayer.active.setLatLng([point.lat, point.lon]);
  document.getElementById('racePlayer').hidden = true;
  document.getElementById('dayJumps').hidden = true;
  document.getElementById('panelKicker').textContent = 'RUTA APROXIMADA · REGRESO';
  document.getElementById('panelTitle').textContent = point.name;
  document.getElementById('positionTime').textContent = 'marzo de 2017';
  document.getElementById('positionCoords').textContent = 'escala narrada';
  document.getElementById('panelText').textContent = 'Esta capa ubica las escalas citadas en Proa al Centro y en el POV. No representa un track GPS.';
  document.querySelectorAll('.layer-button').forEach(button => {
    const active = button.dataset.layer === 'return';
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', active);
  });
  map.fitBounds(state.returnLayer.bounds, { padding: [34, 34] });
}

async function loadTrack() {
  try {
    let response = await fetch('track.json');
    if (!response.ok) response = await fetch('data/track.json');
    if (!response.ok) throw new Error('No se pudo leer el track');
    const payload = await response.json();
    state.track = payload.points;
    document.querySelector('.map-note').innerHTML = `<strong>Lectura responsable:</strong> el GPS contiene 1.546 registros originales. La visualización usa ${payload.sample_count.toLocaleString('es-AR')} muestras plausibles y excluye posiciones congeladas o velocidades instrumentales imposibles. No se inventan posiciones para el regreso.`;
    if (!map || !state.track.length) return;

    const all = state.track.map(point => [point.lat, point.lon]);
    const trace = L.polyline(all, { color: '#0c6472', weight: 4, opacity: .44 });
    const progress = L.polyline([], { color: '#c6533b', weight: 5, opacity: .96 });
    state.boat = L.marker(all[0], { icon: boatIcon, zIndexOffset: 600 });
    const start = L.marker(all[0], { icon: nauticalIcon('BA') }).bindPopup('<strong>Buenos Aires</strong><br>Inicio del registro GPS');
    const puntaIndex = nearestTrackIndex(-34.9591, -54.9576);
    const puntaPoint = state.track[puntaIndex];
    const punta = L.marker([puntaPoint.lat, puntaPoint.lon], { icon: nauticalIcon('PDE', '#c49a5a') }).bindPopup(`<strong>Punta del Este</strong><br>${formatDate(puntaPoint.t)}`);
    const finishPoint = state.track[state.track.length - 1];
    const finish = L.marker([finishPoint.lat, finishPoint.lon], { icon: nauticalIcon('RÍO', '#c6533b') }).bindPopup('<strong>Bahía de Guanabara</strong><br>Llegada del Mambo');
    const group = L.layerGroup([trace, progress, state.boat, start, punta, finish]);
    state.raceLayer = { group, progress, bounds: trace.getBounds(), puntaIndex };

    const dayMap = new Map();
    state.track.forEach((point, index) => {
      const day = point.t.slice(8, 10);
      if (!dayMap.has(day)) dayMap.set(day, index);
    });
    state.dayStarts = [...dayMap.entries()];
    document.getElementById('trackRange').max = state.track.length - 1;
    const dayJumps = document.getElementById('dayJumps');
    dayJumps.innerHTML = state.dayStarts.map(([day, index]) => `<button data-day="${day}" data-index="${index}">${Number(day)} feb</button>`).join('');
    dayJumps.addEventListener('click', event => {
      const button = event.target.closest('button[data-index]');
      if (button) setTrackIndex(Number(button.dataset.index), true);
    });

    const returnLine = L.polyline(returnRoute.map(point => [point.lat, point.lon]), {
      color: '#c6533b', weight: 4, opacity: .78, dashArray: '2 11', lineCap: 'round'
    });
    const returnMarkers = returnRoute.map(point => L.marker([point.lat, point.lon], { icon: nauticalIcon(point.short, '#153841') }).bindPopup(`<strong>${point.name}</strong><br>Escala citada en el regreso`));
    const active = L.marker([returnRoute[3].lat, returnRoute[3].lon], { icon: boatIcon, zIndexOffset: 600 });
    const returnGroup = L.layerGroup([returnLine, active, ...returnMarkers]);
    state.returnLayer = { group: returnGroup, active, bounds: returnLine.getBounds() };

    showRaceLayer();
  } catch (error) {
    document.getElementById('panelTitle').textContent = 'Track no disponible';
    document.getElementById('panelText').textContent = 'La historia y las fuentes documentales siguen disponibles más abajo.';
    console.error(error);
  }
}

document.getElementById('playTrack').addEventListener('click', () => state.timer ? stopPlayback() : startPlayback());
document.getElementById('trackRange').addEventListener('input', event => {
  stopPlayback();
  setTrackIndex(Number(event.target.value));
});
document.querySelectorAll('.layer-button').forEach(button => button.addEventListener('click', () => button.dataset.layer === 'race' ? showRaceLayer() : showReturnLayer(3)));
document.querySelector('[data-map-jump="punta"]').addEventListener('click', () => {
  showRaceLayer();
  setTrackIndex(state.raceLayer.puntaIndex, true);
  document.getElementById('ruta').scrollIntoView({ behavior: 'smooth' });
});

let currentPov = 0;
function renderPov(index, updateMap = true) {
  currentPov = Math.max(0, Math.min(index, povChapters.length - 1));
  const chapter = povChapters[currentPov];
  document.getElementById('povPlace').textContent = chapter.place;
  document.getElementById('povCounter').textContent = `${String(currentPov + 1).padStart(2, '0')} / ${String(povChapters.length).padStart(2, '0')}`;
  document.getElementById('povTitle').textContent = chapter.title;
  document.getElementById('povText').innerHTML = chapter.paragraphs.map(text => `<p>${text}</p>`).join('');
  document.getElementById('povPrev').disabled = currentPov === 0;
  document.getElementById('povNext').disabled = currentPov === povChapters.length - 1;
  document.querySelectorAll('.pov-tab').forEach((tab, tabIndex) => {
    const active = tabIndex === currentPov;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', active);
  });
  if (updateMap && state.returnLayer) {
    showReturnLayer(chapter.routeIndex);
    const point = returnRoute[chapter.routeIndex];
    state.returnLayer.active.setLatLng([point.lat, point.lon]);
  }
}

document.querySelectorAll('.pov-tab').forEach(tab => tab.addEventListener('click', () => renderPov(Number(tab.dataset.pov))));
document.getElementById('povPrev').addEventListener('click', () => renderPov(currentPov - 1));
document.getElementById('povNext').addEventListener('click', () => renderPov(currentPov + 1));

renderPov(0, false);
loadTrack();
