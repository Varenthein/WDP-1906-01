const rightPromoSlider = document.querySelector('.slider-images');
const rightPromoSliderImg = document.querySelectorAll('.slider-images > img');

const prevBtn = document.querySelector('#rightSliderPrev');
const nextBtn = document.querySelector('#rightSliderNext');

let counter = 1;

const size = 730;

rightPromoSlider.style.transform = 'translateX(' + -size * counter + 'px)';

// event listeners

nextBtn.addEventListener('click', () => {
  if (counter < rightPromoSliderImg.length - 1) {
    rightPromoSlider.style.transition = 'transform 0.5s ease-in-out';
    counter++;
    rightPromoSlider.style.transform = 'translateX(' + -size * counter + 'px)';
  }
});

prevBtn.addEventListener('click', () => {
  if (counter > 0) {
    rightPromoSlider.style.transition = 'transform 0.5s ease-in-out';
    counter--;
    rightPromoSlider.style.transform = 'translateX(' + -size * counter + 'px)';
  }
});

rightPromoSlider.addEventListener('transitionend', () => {
  if (rightPromoSliderImg[counter].id === 'lastImg') {
    rightPromoSlider.style.transition = 'none';
    counter = rightPromoSliderImg.length - 2;
    rightPromoSlider.style.transform = 'translateX(' + -size * counter + 'px)';
  } else if (rightPromoSliderImg[counter].id === 'firstImg') {
    rightPromoSlider.style.transition = 'none';
    counter = rightPromoSliderImg.length - counter;
    rightPromoSlider.style.transform = 'translateX(' + -size * counter + 'px)';
  }
});
