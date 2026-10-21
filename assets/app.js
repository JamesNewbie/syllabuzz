/* Syllabuzz 學蜂: shared data, language switch and course player */

var COURSES = {
  cryptography: {
    title: { en: 'Cryptography', zh: '密碼學' },
    subject: { en: 'Computer Science · Exam review', zh: '資訊科學 · 考前複習' },
    chapters: [
      { file: 'Cryptography_Chapter1', dur: '6:39',
        title: { en: 'Introduction & Modular Arithmetic', zh: '導論與模運算' },
        topics: { en: ['Security goals', 'Breaking ciphers', 'Modular math', 'Shift & affine'], zh: ['安全目標', '破解密碼', '模運算', '位移與仿射密碼'] } },
      { file: 'Cryptography_Chapter2', dur: '8:34',
        title: { en: 'Stream Ciphers', zh: '串流加密' },
        topics: { en: ['XOR encryption', 'Randomness & OTP', 'LFSRs', 'Salsa20 · Trivium'], zh: ['XOR 加密', '隨機性與一次性密碼本', 'LFSR', 'Salsa20 · Trivium'] } },
      { file: 'Cryptography_Chapter3', dur: '7:50',
        title: { en: 'The Data Encryption Standard', zh: '資料加密標準 DES' },
        topics: { en: ['Feistel network', 'f function & S-boxes', 'Key schedule', 'Security & 3DES'], zh: ['Feistel 結構', 'f 函數與 S-box', '金鑰排程', '安全性與 3DES'] } },
      { file: 'Cryptography_Chapter4', dur: '8:25',
        title: { en: 'The Advanced Encryption Standard', zh: '進階加密標準 AES' },
        topics: { en: ['Fields & GF(2ⁿ)', 'ByteSub · ShiftRows', 'MixColumn', 'Key schedule'], zh: ['有限體與 GF(2ⁿ)', 'ByteSub · ShiftRows', 'MixColumn', '金鑰排程'] } },
      { file: 'Cryptography_Chapter5', dur: '7:03',
        title: { en: 'More About Block Ciphers', zh: '區塊加密進階' },
        topics: { en: ['ECB · CBC', 'OFB · CFB · CTR', 'XTS · false keys', '2DES · 3DES · whitening'], zh: ['ECB · CBC', 'OFB · CFB · CTR', 'XTS · 假金鑰', '2DES · 3DES · 白化'] } },
      { file: 'Cryptography_Chapter6', dur: '7:40',
        title: { en: 'Introduction to Public-Key Cryptography', zh: '公開金鑰密碼學導論' },
        topics: { en: ['Why public key', 'One-way functions', 'Euclid & EEA', 'Φ · Fermat · Euler'], zh: ['為什麼需要公鑰', '單向函數', '歐幾里得與擴展歐幾里得', 'Φ · 費馬 · 歐拉'] } },
      { file: 'Cryptography_Chapter7', dur: '8:01',
        title: { en: 'The RSA Cryptosystem', zh: 'RSA 密碼系統' },
        topics: { en: ['Keys & toy example', 'Square-and-multiply', 'CRT speed-up', 'Primality tests'], zh: ['金鑰與簡單範例', '平方乘法', '中國餘數定理加速', '質數測試'] } }
    ]
  }
};

var UI = {
  en: {
    navCourses: 'Courses', navHow: 'How it works', navAbout: 'About',
    tag: 'Learning in public',
    heroTitle: 'Every course I take, turned into videos you can learn from.',
    heroBody: 'I rebuild each class I study into short, clear video lessons. Pick a course and start watching.',
    browse: 'Browse courses', startCrypto: 'Start with Cryptography',
    heroCaption: 'Chapter 1 of Cryptography: Introduction & Modular Arithmetic',
    s1: 'Course', s2: 'Video lessons', s3: 'Minutes of content', s4: 'Free to watch',
    howTitle: 'How it works', howBody: 'Explaining a subject is the best way to learn it. Each course goes through three steps.',
    st1n: 'STEP 1', st1t: 'I take the course', st1b: 'I study the material, do the work and note the parts that are hardest to understand.',
    st2n: 'STEP 2', st2t: 'I turn it into videos', st2b: 'Each chapter becomes a short lesson with visuals, examples and a clear summary.',
    st3n: 'STEP 3', st3t: 'You learn at your pace', st3b: 'Watch the chapters in order and review before your exam.',
    libTitle: 'The course library', libBody: 'Courses I’ve finished, rebuilt as video series.',
    lessons: 'lessons', min: 'min', soon: 'More courses coming soon', soonBadge: 'Coming soon',
    aboutTitle: 'Hi, I’m James.',
    aboutBody: 'I graduated from National Taiwan University with a degree in Foreign Languages and Literature, a humanities student through and through, and I’m now pursuing a master’s in Information Management. Here I share the cybersecurity courses I’ve taken, all completely free. Feel free to use them, and I’d love to hear your suggestions!',
    home: 'Home', chapters: 'Chapters', chapter: 'Chapter', prev: '← Previous', next: 'Next →',
    courseIntro: '7 short chapters to review the core of an introductory cryptography course.'
  },
  zh: {
    navCourses: '課程', navHow: '怎麼運作', navAbout: '關於我',
    tag: '邊學邊教',
    heroTitle: '我修過的每一門課，都變成你看得懂的影片。',
    heroBody: '我把每一門修過的課，重新整理成簡短、清楚的影片。選一門課，馬上開始看。',
    browse: '瀏覽課程', startCrypto: '從密碼學開始',
    heroCaption: '密碼學第 1 章：導論與模運算',
    s1: '門課程', s2: '支影片', s3: '分鐘內容', s4: '免費觀看',
    howTitle: '怎麼運作', howBody: '把一門學問講清楚，是學會它最好的方法。每一門課都會經過三個步驟。',
    st1n: '步驟 1', st1t: '我先修課', st1b: '我讀完教材、完成作業，並記下最難懂的地方。',
    st2n: '步驟 2', st2t: '我做成影片', st2b: '每一章都變成一支短片，搭配圖解、例子和重點整理。',
    st3n: '步驟 3', st3t: '你用自己的步調學', st3b: '照章節順序觀看，考前快速複習。',
    libTitle: '課程影片庫', libBody: '我修完的課，重新整理成系列影片。',
    lessons: '支影片', min: '分鐘', soon: '更多課程即將推出', soonBadge: '即將推出',
    aboutTitle: '嗨，我是詹姆士。',
    aboutBody: '我是台大外文系畢業的文組生，目前就讀資管所。這裡會分享我在資安領域修過的課程，全部免費，歡迎大家使用，也很歡迎給我建議！',
    home: '首頁', chapters: '章節', chapter: '第 {n} 章', prev: '← 上一章', next: '下一章 →',
    courseIntro: '7 支短片，複習密碼學入門課程的核心內容。'
  }
};

function getLang() {
  try { var l = localStorage.getItem('sb-lang'); if (l === 'en' || l === 'zh') return l; } catch (e) {}
  return (navigator.language || '').toLowerCase().indexOf('zh') === 0 ? 'zh' : 'en';
}
function saveLang(l) { try { localStorage.setItem('sb-lang', l); } catch (e) {} }

var lang = getLang();
var listeners = [];

function applyLang() {
  var t = UI[lang];
  document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var v = t[el.getAttribute('data-i18n')];
    if (v !== undefined) el.textContent = v;
  });
  document.querySelectorAll('.lang button').forEach(function (b) {
    b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false');
  });
  listeners.forEach(function (fn) { fn(); });
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { lang = b.getAttribute('data-lang'); saveLang(lang); applyLang(); });
  });
  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
  if (document.getElementById('library')) initHome();
  if (document.getElementById('player')) initCourse();
  applyLang();
});

/* Show a frame from ~3s in (the title card) before the viewer presses play,
   then start from the very beginning on first play. */
function peek(v) {
  v.setAttribute('data-peek', '1');
  v.addEventListener('loadedmetadata', function () {
    if (v.getAttribute('data-peek') === '1') v.currentTime = Math.min(3, v.duration || 3);
  });
  v.addEventListener('play', function () {
    if (v.getAttribute('data-peek') === '1') { v.removeAttribute('data-peek'); v.currentTime = 0; }
  });
}
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('video[data-peek]').forEach(peek);
});

function totalMinutes(c) {
  var s = 0; c.chapters.forEach(function (ch) { var p = ch.dur.split(':'); s += +p[0] * 60 + +p[1]; });
  return Math.round(s / 60);
}

/* Home: course cards */
function initHome() {
  var lib = document.getElementById('library');
  var c = COURSES.cryptography;
  document.getElementById('stat-videos').textContent = c.chapters.length;
  document.getElementById('stat-min').textContent = totalMinutes(c);
  function render() {
    var t = UI[lang];
    lib.innerHTML = '';
    Object.keys(COURSES).forEach(function (key) {
      var co = COURSES[key];
      var a = document.createElement('a');
      a.className = 'card'; a.href = key + '.html';
      a.innerHTML = '<div class="thumb title-card"><small>' + co.subject.en.toUpperCase() + '</small><strong></strong><span class="badge"></span></div>' +
        '<div class="body"><span class="subject"></span><h3></h3><span class="meta"></span></div>';
      a.querySelector('.badge').textContent = co.chapters.length + ' ' + t.lessons;
      a.querySelector('.title-card strong').textContent = co.title[lang];
      a.querySelector('.subject').textContent = co.subject[lang];
      a.querySelector('h3').textContent = co.title[lang];
      a.querySelector('.meta').textContent = co.chapters.length + ' ' + t.lessons + ' · ' + totalMinutes(co) + ' ' + t.min;
      lib.appendChild(a);
    });
    var soon = document.createElement('div');
    soon.className = 'card soon';
    soon.innerHTML = '<div class="thumb"></div><div class="body"><span class="subject"></span><h3></h3></div>';
    soon.querySelector('.thumb').textContent = t.soonBadge;
    soon.querySelector('h3').textContent = t.soon;
    lib.appendChild(soon);
  }
  listeners.push(render);
}

/* Course page: player + playlist */
function initCourse() {
  var key = document.body.getAttribute('data-course');
  var c = COURSES[key];
  var video = document.getElementById('player');
  var list = document.getElementById('playlist');
  var params = new URLSearchParams(location.search);
  var idx = Math.min(Math.max((parseInt(params.get('ch'), 10) || 1) - 1, 0), c.chapters.length - 1);

  function chLabel(i) { var t = UI[lang]; return lang === 'zh' ? t.chapter.replace('{n}', i + 1) : t.chapter + ' ' + (i + 1); }

  function load(i, play) {
    idx = i;
    var ch = c.chapters[i];
    video.src = 'videos/' + ch.file + '.mp4';
    if (play) { video.removeAttribute('data-peek'); video.play().catch(function () {}); }
    else peek(video);
    history.replaceState(null, '', '?ch=' + (i + 1));
    render();
  }

  function render() {
    var t = UI[lang], ch = c.chapters[idx];
    document.getElementById('course-title').textContent = c.title[lang];
    document.getElementById('crumb-title').textContent = c.title[lang];
    document.getElementById('now-label').textContent = chLabel(idx) + ' · ' + ch.dur;
    document.getElementById('now-title').textContent = ch.title[lang];
    document.title = ch.title[lang] + ' · ' + c.title[lang] + ' · Syllabuzz 學蜂';
    var tp = document.getElementById('topics'); tp.innerHTML = '';
    ch.topics[lang].forEach(function (x) { var li = document.createElement('li'); li.textContent = x; tp.appendChild(li); });
    document.getElementById('prev').disabled = idx === 0;
    document.getElementById('next').disabled = idx === c.chapters.length - 1;
    list.innerHTML = '';
    c.chapters.forEach(function (chp, i) {
      var li = document.createElement('li');
      var b = document.createElement('button'); b.type = 'button';
      b.setAttribute('aria-current', i === idx ? 'true' : 'false');
      b.innerHTML = '<span class="mini" aria-hidden="true">CH ' + (i + 1) + '</span><span class="t"><b></b><span></span></span>';
      b.querySelector('b').textContent = chp.title[lang];
      b.querySelector('.t span').textContent = chLabel(i) + ' · ' + chp.dur;
      b.addEventListener('click', function () { load(i, true); window.scrollTo({ top: 0, behavior: 'smooth' }); });
      li.appendChild(b); list.appendChild(li);
    });
  }

  document.getElementById('prev').addEventListener('click', function () { if (idx > 0) load(idx - 1, true); });
  document.getElementById('next').addEventListener('click', function () { if (idx < c.chapters.length - 1) load(idx + 1, true); });
  video.addEventListener('ended', function () { if (idx < c.chapters.length - 1) load(idx + 1, true); });
  listeners.push(render);
  load(idx, false);
}
