const hamburger = document.querySelector('.hamburger');
const navnavMenu = document.querySelector('.navnav-menu');
const contactLink = document.querySelector('.contact-link');
const aboutLink = document.querySelector('.about-link');
const portfolioLink = document.querySelector('.portfolio-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navnavMenu.classList.toggle('active');
});

document.querySelectorAll('navnav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  hamburger.classList.remove('active');
  contactLink.classList.remove('active');
  aboutLink.classList.remove('active');
  portfolioLink.classList.remove('active');
}));
