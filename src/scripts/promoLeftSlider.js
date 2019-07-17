const leftPromoSlider = document.querySelector('.left-slider-images');

const promoDotBtns = document.querySelectorAll('#promoDotBtn');

const imgWidth = 348;

leftPromoSlider.style.transform = 'translateX(' + -imgWidth + 'px)';

for (let i = 0; i < promoDotBtns.length; i++) {
  promoDotBtns[i].addEventListener('click', () => {
    promoDotBtns.forEach(item => item.classList.remove('active'));
    promoDotBtns[i].classList.add('active');
    leftPromoSlider.style.transition = 'transform 0.5s ease-in-out';
    leftPromoSlider.style.transform = 'translateX(' + -(i + 1) * imgWidth + 'px)';
  });
}

function autoplayPromoSlider () {
  let count = 1;
  setInterval(() => {
    promoDotBtns.forEach(item => item.classList.remove('active'));
    promoDotBtns[count - 1].classList.add('active');
    leftPromoSlider.style.transition = 'transform 0.5s ease-in-out';
    leftPromoSlider.style.transform = 'translateX(' + -count * imgWidth + 'px)';
    count++;
    if (count > 3) {
      count = 1;
    }
  }, 3000);
}

autoplayPromoSlider();
