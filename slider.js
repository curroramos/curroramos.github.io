document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector(".slider");
  const slides = document.querySelector(".slides");
  const slideWidth = slides.clientWidth;
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;

  function showSlide(index) {
    if (index < 0) {
      index = slides.childElementCount - 1;
    } else if (index >= slides.childElementCount) {
      index = 0;
    }

    slides.style.transform = `translateX(-${slideWidth * index}px)`;
    currentIndex = index;
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  // Cambiar de slide automáticamente cada 5 segundos
  //setInterval(nextSlide, 7000);
});
