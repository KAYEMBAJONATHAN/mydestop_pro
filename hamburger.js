const hamburger = document.querySelector('.hamburger');
const navnavMenu = document.querySelector('.navnav-menu')


hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navnavMenu.classList.toggle('active')
})



