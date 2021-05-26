const menu = document.querySelector('.menu-bars');
const nav = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
  console.log(nav);
});