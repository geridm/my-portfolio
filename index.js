/* Funcion para cambiar el Navbar cada vez eque el scroll baje */

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

/* Funciones de Animacion (ScrollReveal) */

/* Animacion para la imagen del header */

ScrollReveal().reveal('#imgBoxGD', {
    duration: 2000,
    distance: '150%',
    origin: 'right',
    opacity: null
});

/* Animacion para la card de la seccion Acerca de mí */

ScrollReveal().reveal('.card1', {
    delay: 500,
    duration: 2000,
    distance: '150%',
    origin: 'top',
});
