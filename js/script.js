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

    setTimeout(function(){
        $("#newsletter_popup").fadeIn();
      }, 15000);
    
    $("#acceptButton, #closeButton").click(function() {
        $("#newsletter_popup").fadeOut();
        // Guardar en localStorage que el popup fue cerrado
        localStorage.setItem("newsletterClosed", "true");
    });
});


// FORMULARIO SAZÓN PREMIUM

// Obtener el botón y el formulario
const accessButton = document.getElementById("accessForumButton");
const forumForm = document.getElementById("forumForm");

// Mostrar el formulario cuando se hace clic en el botón
accessButton.addEventListener("click", function() {
forumForm.style.display = "flex"; // Cambiar a 'flex' para centrar
});

// Si deseas un botón para cerrar el formulario, puedes agregar uno en el HTML y usarlo así:
const closeButton = document.createElement("button");
closeButton.textContent = "Cerrar";
closeButton.id = "closeButton";
forumForm.appendChild(closeButton);

closeButton.addEventListener("click", function() {
forumForm.style.display = "none"; // Ocultar el formulario
});




