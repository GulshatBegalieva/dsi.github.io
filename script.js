let navbar = document.querySelector('.nav');

document.querySelector('#head__btn').onclick = () => {
    navbar.classList.add('active');
}

document.querySelector('#nav__close').onclick = () => {
    navbar.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}