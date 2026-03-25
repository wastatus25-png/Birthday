let slides = document.querySelectorAll(".slide");
let current = 0;

function nextSlide() {
    slides[current].classList.remove("active");
    current++;
    if (current >= slides.length) current = slides.length - 1;
    slides[current].classList.add("active");
}
