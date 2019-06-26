console.log('hello');

var postBox = document.getElementsByClassName('post-box');

for (var i = 0; i < postBox.length; i++) {
  postBox[i].addEventListener('click', function (event) {
    event.preventDefault();
    window.location = this.href;
  });
}
