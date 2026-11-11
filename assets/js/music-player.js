import { musicTracks } from './data.js';

const icons = {
  play: '<path d="m8 5 11 7-11 7z"/>', pause: '<path d="M8 5h3v14H8zM15 5h3v14h-3z"/>',
  prev: '<path d="M6 5v14M19 6 8 12l11 6z"/>', next: '<path d="M18 5v14M5 6l11 6-11 6z"/>',
  shuffle: '<path d="m18 14 4 4-4 4M18 2l4 4-4 4M2 18h2.5a5 5 0 0 0 4-2l7-8a5 5 0 0 1 4-2H22M2 6h2.5a5 5 0 0 1 3.7 1.7M14 16l1.5 1.7a5 5 0 0 0 4 2.3H22"/>',
  repeat: '<path d="m17 2 4 4-4 4M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 0 1-3 3H3"/>',
  volume: '<path d="M11 5 6 9H3v6h3l5 4zM15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>',
  close: '<path d="m18 6-12 12M6 6l12 12"/>', back: '<path d="m15 18-6-6 6-6M9 12h12"/>'
};
const svg = (name) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;
const formatTime = (value) => {
  if (!Number.isFinite(value)) return '0:00';
  return `${Math.floor(value / 60)}:${String(Math.floor(value % 60)).padStart(2, '0')}`;
};

const root = document.getElementById('app-music-workspace');
if (root) {
  root.innerHTML = `
    <div class="music-shell" id="music-shell">
      <div class="music-ambient music-ambient--one"></div>
      <div class="music-ambient music-ambient--two"></div>
      <div class="music-ambient music-ambient--three"></div>
      <div class="music-grain"></div>
      <header class="music-topbar">
        <div class="mac-window-controls" aria-label="Window controls"><i></i><i></i><i></i></div>
        <div class="music-window-title">DORI AUDIO <span>·</span> Music</div>
        <button class="music-back" type="button" data-close-music>${svg('back')}<span>Profile</span></button>
      </header>
      <div class="music-content">
        <div class="music-heading"><div><span class="music-eyebrow">PERSONAL AUDIO EXPERIENCE</span><h1>Good evening<span class="music-heading__dot">.</span></h1><p>Âm thanh của riêng bạn, trong một không gian riêng.</p></div><div class="music-heading__disc">${svg('volume')}</div></div>
        <section class="music-feature">
          <div class="music-feature__glow"></div>
          <div class="music-spectrum" aria-hidden="true">${Array.from({length: 30}, (_,i) => `<i style="--bar:${(i%7)+1};--delay:${(i%9)*-.13}s"></i>`).join('')}</div>
          <div class="music-art" id="music-art"><div class="music-art__rings"></div><span class="music-art__label">DORI<br>STUDIO</span><span class="music-art__center"></span></div>
          <div class="music-track-info"><span class="music-eyebrow">NOW PLAYING</span><h2 id="music-title">Chưa phát nhạc</h2><p id="music-artist">Chọn một bài hát trong playlist</p></div>
          <div class="music-progress"><span id="music-current">0:00</span><input id="music-seek" type="range" min="0" max="100" value="0" aria-label="Tiến trình bài hát"><span id="music-duration">0:00</span></div>
          <div class="music-controls">
            <button class="music-icon-btn" id="music-shuffle" type="button" aria-label="Phát ngẫu nhiên">${svg('shuffle')}</button>
            <button class="music-icon-btn" id="music-prev" type="button" aria-label="Bài trước">${svg('prev')}</button>
            <button class="music-play-btn" id="music-play" type="button" aria-label="Phát nhạc">${svg('play')}</button>
            <button class="music-icon-btn" id="music-next" type="button" aria-label="Bài tiếp theo">${svg('next')}</button>
            <button class="music-icon-btn" id="music-repeat" type="button" aria-label="Lặp lại">${svg('repeat')}</button>
          </div>
          <div class="music-volume">${svg('volume')}<input id="music-volume" type="range" min="0" max="1" step="0.01" value="0.8" aria-label="Âm lượng"><span id="music-volume-value">80%</span></div>
        </section>
        <section class="music-playlist-section"><div class="music-list-heading"><div><span class="music-eyebrow">CURATED FOR YOU</span><h2>Danh sách phát</h2></div><span class="music-count" id="music-count">${musicTracks.length} TRACK</span></div><div class="music-track-list" id="music-track-list"></div></section>
        <footer class="music-footer"><span>DESIGNED WITH CARE</span><span>DORI PERSONAL AUDIO</span></footer>
      </div>
      <audio id="music-audio" preload="metadata"></audio>
    </div>`;
}

const musicShell = root?.querySelector('#music-shell');
if (musicShell && window.matchMedia('(pointer:fine)').matches) {
  musicShell.addEventListener('pointermove', (event) => {
    const rect = musicShell.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    musicShell.style.setProperty('--pointer-x', `${x}%`);
    musicShell.style.setProperty('--pointer-y', `${y}%`);
    musicShell.style.setProperty('--pointer-tilt-x', `${(y - 50) * -0.035}deg`);
    musicShell.style.setProperty('--pointer-tilt-y', `${(x - 50) * 0.035}deg`);
  });
  musicShell.addEventListener('pointerleave', () => {
    musicShell.style.setProperty('--pointer-x', '50%');
    musicShell.style.setProperty('--pointer-y', '50%');
    musicShell.style.setProperty('--pointer-tilt-x', '0deg');
    musicShell.style.setProperty('--pointer-tilt-y', '0deg');
  });
}
const audio = root?.querySelector('#music-audio');
if (audio) {
  let current = 0;
  let shuffle = false;
  let repeat = false;
  const $ = (selector) => root.querySelector(selector);
  const tracks = Array.isArray(musicTracks) ? musicTracks : [];
  const list = $('#music-track-list');

  function renderList() {
    $('#music-count').textContent = `${tracks.length} TRACK${tracks.length === 1 ? '' : 'S'}`;
    if (!tracks.length) {
      list.innerHTML = '<div class="music-empty">Chưa có bài hát. Hãy thêm file MP3 vào <code>assets/music/</code> và khai báo trong <code>assets/js/data.js</code>.</div>';
      return;
    }
    list.innerHTML = tracks.map((track, index) => `
      <button class="music-track ${index === current ? 'is-current' : ''}" type="button" data-track-index="${index}">
        <span class="music-track__number">${String(index + 1).padStart(2, '0')}</span>
        <span class="music-track__miniart">${track.cover ? `<img src="${track.cover}" alt="">` : '<span>♪</span>'}</span>
        <span class="music-track__meta"><strong>${escapeText(track.title || 'Untitled')}</strong><small>${escapeText(track.artist || 'Unknown artist')}</small></span>
        <span class="music-track__status">${index === current && !audio.paused ? 'NOW' : 'PLAY'}</span>
      </button>`).join('');
  }
  function escapeText(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  }
  function setPlayIcon(playing) { $('#music-play').innerHTML = svg(playing ? 'pause' : 'play'); $('#music-play').setAttribute('aria-label', playing ? 'Tạm dừng' : 'Phát nhạc'); }
  function loadTrack(index, autoplay = false) {
    if (!tracks.length) return;
    current = (index + tracks.length) % tracks.length;
    const track = tracks[current];
    audio.src = track.src;
    $('#music-title').textContent = track.title || 'Untitled';
    $('#music-artist').textContent = track.artist || 'Unknown artist';
    const art = $('#music-art');
    art.classList.toggle('has-cover', Boolean(track.cover));
    art.style.backgroundImage = track.cover ? `url("${track.cover}")` : '';
    $('#music-seek').value = 0;
    $('#music-current').textContent = '0:00';
    $('#music-duration').textContent = '0:00';
    renderList();
    if (autoplay) play();
  }
  async function play() {
    if (!tracks.length) return;
    try { if (!audio.src) loadTrack(current); await audio.play(); setPlayIcon(true); renderList(); }
    catch (error) { setPlayIcon(false); $('#music-artist').textContent = 'Không thể phát file. Kiểm tra lại đường dẫn MP3.'; }
  }
  function next() {
    if (!tracks.length) return;
    const index = shuffle && tracks.length > 1 ? (current + 1 + Math.floor(Math.random() * (tracks.length - 1))) % tracks.length : current + 1;
    loadTrack(index, true);
  }
  $('#music-play').addEventListener('click', () => audio.paused ? play() : audio.pause());
  $('#music-prev').addEventListener('click', () => { if (audio.currentTime > 3) audio.currentTime = 0; else loadTrack(current - 1, true); });
  $('#music-next').addEventListener('click', next);
  $('#music-shuffle').addEventListener('click', () => { shuffle = !shuffle; $('#music-shuffle').classList.toggle('is-on', shuffle); });
  $('#music-repeat').addEventListener('click', () => { repeat = !repeat; audio.loop = repeat; $('#music-repeat').classList.toggle('is-on', repeat); });
  $('#music-seek').addEventListener('input', (event) => { if (Number.isFinite(audio.duration)) audio.currentTime = audio.duration * Number(event.target.value) / 100; event.target.style.background = `linear-gradient(90deg,#a78bfa ${event.target.value}%,#ffffff25 ${event.target.value}%)`; });
  $('#music-volume').addEventListener('input', (event) => { audio.volume = Number(event.target.value); $('#music-volume-value').textContent = `${Math.round(audio.volume * 100)}%`; });
  audio.volume = 0.8;
  audio.addEventListener('loadedmetadata', () => $('#music-duration').textContent = formatTime(audio.duration));
  audio.addEventListener('timeupdate', () => { $('#music-current').textContent = formatTime(audio.currentTime); const progress = audio.duration ? audio.currentTime / audio.duration * 100 : 0; $('#music-seek').value = progress; $('#music-seek').style.background = `linear-gradient(90deg,#a78bfa ${progress}%,#ffffff25 ${progress}%)`; });
  audio.addEventListener('play', () => { musicShell?.classList.add('is-playing'); setPlayIcon(true); renderList(); });
  audio.addEventListener('pause', () => { musicShell?.classList.remove('is-playing'); setPlayIcon(false); renderList(); });
  audio.addEventListener('ended', () => { if (!repeat) next(); });
  list.addEventListener('click', (event) => { const button = event.target.closest('[data-track-index]'); if (button) loadTrack(Number(button.dataset.trackIndex), true); });
  loadTrack(0);
  renderList();
}

document.addEventListener('click', (event) => {
  if (event.target.closest('[data-open-music]')) {
    document.querySelector('[data-tab-target="personal"]')?.click();
    document.body.classList.add('music-workspace-open');
    document.querySelector('[data-drawer-overlay]')?.classList.remove('is-open');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  if (event.target.closest('[data-close-music]')) document.body.classList.remove('music-workspace-open');
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') document.body.classList.remove('music-workspace-open');
});
