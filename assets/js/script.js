const navLinks = document.querySelectorAll('.navItens a');
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(function(entries) {
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];

    if (entry.isIntersecting) {
      const id = entry.target.id;

      for (let j = 0; j < navLinks.length; j++) {
        navLinks[j].classList.remove('active');
      }

      const activeLink = document.querySelector(`.navItens a[href="#${id}"]`);
      activeLink.classList.add('active');
    }
  }
}, {
    rootMargin: '-40% 0px -40% 0px'
});

for (let i = 0; i < sections.length; i++) {
  observer.observe(sections[i]);
}

const menuButton = document.querySelector('.menu');
const navList = document.querySelector('#navbar ul');

menuButton.addEventListener('click', function(){
  navList.classList.toggle('open');
});

const themeToggle = document.getElementById('themeToggle');
const htmlEl = document.documentElement;

function setTheme(theme) {
  htmlEl.setAttribute('data-theme', theme);
  themeToggle.setAttribute('aria-pressed', theme === 'dark');
}

const savedTheme = localStorage.getItem('theme') || htmlEl.getAttribute('data-theme') || 'light';
setTheme(savedTheme);

themeToggle.addEventListener('click', function() {
  const isLight = htmlEl.getAttribute('data-theme') === 'light';
  const newTheme = isLight ? 'dark' : 'light';
  setTheme(newTheme);
  localStorage.setItem('theme', newTheme);
});

const elementsToTranslate = document.querySelectorAll('[data-i18n]');
const langToggle = document.getElementById('langToggle');
const cvDownload = document.querySelector('.cv-download');

function setLanguage(lang) {
  for (let i = 0; i < elementsToTranslate.length; i++) {
    const el = elementsToTranslate[i];
    const key = el.getAttribute('data-i18n');

    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  }

  cvDownload.href = translations[lang]['cv-file'];
  document.documentElement.lang = lang === 'pt' ? 'pt-br' : 'en';
  langToggle.textContent = lang === 'pt' ? 'EN' : 'PT';
  localStorage.setItem('lang', lang);
}

const savedLang = localStorage.getItem('lang') || 'pt';
setLanguage(savedLang);

langToggle.addEventListener('click', function() {
  const currentLang = localStorage.getItem('lang') || 'pt';
  const newLang = currentLang === 'pt' ? 'en' : 'pt';
  setLanguage(newLang);
});