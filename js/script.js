// console.log("online");


const rotatingSvg = document.getElementById('rotating-svg');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const rotation = scrollY * 0.5; // Cambia el 0.5 para ajustar la velocidad de rotación
    rotatingSvg.style.transform = `translateX(-50%) rotate(${rotation}deg)`;
});