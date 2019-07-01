console.log('hello');

var featureBox = document.getElementsByClassName('feature-box');

for (var i = 0; i < featureBox.length; i++) {
  featureBox[i].addEventListener('click', function (event) {
    event.preventDefault();
    window.location = this.href;
  });
}
