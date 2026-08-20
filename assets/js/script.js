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