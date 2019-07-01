/*SCRIPTS FOR BUTTON "FAVOURITE" AND "COMPARE" STATE*/
let button = document.querySelector('.btn-outline');
let buttonAll = document.querySelectorAll('.btn-outline');

buttonAll.forEach(item => {
    item.addEventListener('click', e => {
        item.classList.toggle('active');
    });
});
