window.addEventListener('load', setup);

function setup() {
    setUpBurgerNav()
}

function setUpBurgerNav() {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav');
    burger.addEventListener('click', e => {
        burger.classList.toggle('open');
        nav.classList.toggle('open');
    })
}

