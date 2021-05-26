const menu = document.querySelector('.menu-bars')
const nav = document.querySelector('#desktop-nav')

menu.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
})