// console.log("online");

// LIBRERIA AOS

AOS.init({
    duration: 1200,
    // once: true,
});

// GIRO ESTRELLA
const rotatingSvg = document.getElementById('rotating-svg');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const rotation = scrollY * 0.5; // Cambia el 0.5 para ajustar la velocidad de rotación
    rotatingSvg.style.transform = `translateX(-50%) rotate(${rotation}deg)`;
});



$(document).ready(function(){

    // POP UP

    // Muestra el pop-up de cookies después de 2 segundos
    setTimeout(function(){
      $("#cookie-popup").fadeIn();
    }, 2000);

    // Maneja el clic en el botón de aceptar cookies
    $("#accept-cookies").click(function(){
        $("#cookie-popup").fadeOut();
    });   

    // Maneja el clic en el botón de rechazar cookies
    $("#reject-cookies").click(function() {
        $("#cookie-popup").fadeOut();
    });


    // POP UP DE SAZÓN PREMIUM

    // setTimeout(function(){
    //     // Selecciona el toast y lo muestra
    //     var toastElement = document.getElementById('liveToast');
    //     var toast = new bootstrap.Toast(toastElement);
    //     toast.show();
    // }, 15000);

});
