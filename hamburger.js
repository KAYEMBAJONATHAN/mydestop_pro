const hamburger = document.querySelector('.hamburger');
const navnavMenu = document.querySelector('.navnav-menu');
const contactLink = document.querySelector('.contact-link');
const aboutLink = document.querySelector('.about-link');
const portfolioLink = document.querySelector('.portfolio-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navnavMenu.classList.toggle('active');
});


navnavMenu.addEventListener('click', ()=> {
  hamburger.classList.remove('active');
  navnavMenu.classList.remove('active');
})