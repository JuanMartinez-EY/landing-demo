// Variables para el carrusel
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const slider = document.querySelector(".slider");

// Función que actualiza la posición del slider
function showSlide(index) {
    slider.style.transform = "translateX(" + -index * 100 + "%)";
}

// Función para ir a la siguiente slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Función para ir a la slide anterior
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}
