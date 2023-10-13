let currentIndex = 0;
const slides = document.querySelectorAll('.slider img');

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function previousSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Afficher la première image au chargement de la page
showSlide(currentIndex);