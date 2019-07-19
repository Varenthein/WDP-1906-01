const leftPromoSlider = document.querySelector('.left-slider-images');

const promoDotBtns = document.querySelectorAll('#promoDotBtn');

const imgWidth = 348;

leftPromoSlider.style.transform = 'translateX(' + -imgWidth + 'px)';

function slidePromoImages (num) {
  let count = num;
  promoDotBtns.forEach(item => item.classList.remove('active'));
  promoDotBtns[count - 1].classList.add('active');
  leftPromoSlider.style.transition = 'transform 0.5s ease-in-out';
  leftPromoSlider.style.transform = 'translateX(' + -count * imgWidth + 'px)';
}

for (let i = 0; i < promoDotBtns.length; i++) {
  promoDotBtns[i].addEventListener('click', () => slidePromoImages(i + 1));
}

function createInterval () {
  let init = 1;
  setInterval(() => {
    slidePromoImages(init);
    init++;
    if (init > 3) {
      init = 1;
    }
  }, 3000);
}

createInterval();
