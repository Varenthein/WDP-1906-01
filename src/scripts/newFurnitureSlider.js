var slider = tns({
  container: '.my-slider',
  items: 4,
  slideBy: 'page',
  speed: 600,
  controls: false,
  autoplay: true,
  autoplayButtonOutput: false,
  gutter: 5,
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    768: {
      items: 3
    },
    992: {
      items: 4
    }
  }
});