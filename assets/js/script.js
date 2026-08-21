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