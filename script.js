// Smooth scrolling
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({behavior: 'smooth'});
  });
});

// Fade in sections on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight / 5 * 4;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerBottom){
      section.classList.add('show');
    } else {
      section.classList.remove('show');
    }
  });
});
