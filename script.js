let navbar = document.querySelector(".header .navbar");
let menu = document.querySelector("#menu-btn");

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let cart = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cart.classList.add('active');
}

document.querySelector('#close-form').onclick = () => {
    cart.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    grabCursor: true,
    loop: true,
    cntereSlides:true,
    navigation: {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev",
    },
});