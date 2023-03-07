const hamburger = document.querySelector('.hamburger');
const navnavMenu = document.querySelector('.navnav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navnavMenu.classList.toggle('active');
});

document.querySelectorAll('navnav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  hamburger.classList.remove('active');
}));
