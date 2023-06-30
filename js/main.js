const slideLeft = document.querySelector('.swiper-button-prev');
const slideRight = document.querySelector('.swiper-button-next');
const slideImg = document.querySelector('.swiper-slide');
let index = 0; // Индекс текущего слайда.


slideRight.addEventListener('click', clickLeft);
function clickLeft() {
   index--;
   showSlide();
}

slideLeft.addEventListener('click', clickRight);
function clickRight() {
   index++;
   showSlide();
}


function showSlide() {
   // Отримуємо всі слайди
   const slides = document.querySelectorAll('.swiper-slide');

   if (index < 0) {
      index = slides.length - 1;
   } else if (index >= slides.length) {
      index = 0;
   }

   slides.forEach((slide, i) => {
      if (i === index) {
         slide.style.display = 'block'
      } else {
         slide.style.display = 'none'
      }
   });

   if (index === 0) {
      slideLeft.classList.add('dell');
   } else {
      slideLeft.classList.remove('dell');
   }
   if (index === slides.length - 1) {
      slideRight.classList.add('dell');
   } else {
      slideRight.classList.remove('dell');
   }
}

showSlide()