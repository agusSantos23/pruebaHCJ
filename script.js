document.addEventListener("DOMContentLoaded", function() {
    var footer = document.getElementById('main-footer');
    var windowHeight = window.innerHeight;

    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY + windowHeight;
        var documentHeight = document.body.offsetHeight;

        if (scrollPosition >= documentHeight - 100) { // Muestra el footer cuando el usuario está a 100px del final
            footer.style.bottom = '0'; // Muestra el footer completamente
        } else {
            footer.style.bottom = '-100%'; // Oculta el footer
        }
    });
});
