let slides = document.querySelectorAll(".slide");
let current = 0;

function nextSlide() {
  slides[current].classList.remove("active");
  current++;
  slides[current].classList.add("active");
}

function playMusic() {
  document.getElementById("music").play();
  nextSlide();
}

function blow() {
  document.getElementById("cake").src = "images/cake_off.png";

  confetti({
    particleCount: 200,
    spread: 80
  });

  setTimeout(nextSlide, 2000);
}