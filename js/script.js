
let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', ()=>{
    navbar.classList.toggle('nav-toggle');
})

window.onscroll = () =>{
    navbar.classList.remove('nav-toggle');
}