const hamburgerButton = document.getElementById('mobile-icon');
const catInXs = document.getElementById('menu-links');
const searchForm = document.querySelector('.getcategory-column-2');

hamburgerButton.addEventListener('click', () =>
  catInXs.classList.contains('d-none') ? rollDownMenu() : rollUpMenu()
);

function rollDownMenu () {
  catInXs.classList.remove('d-none');
  searchForm.style.top = '60%';
}

function rollUpMenu () {
  catInXs.classList.add('d-none');
  searchForm.style.top = '0';
}
