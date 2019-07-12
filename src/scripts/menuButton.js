const hamburgerButton = document.getElementById('mobile-icon');
const catInXs = document.getElementById('menu-links');
const searchField = document.getElementById('search-input');
const menu = document.getElementById('whole-menu');

hamburgerButton.addEventListener('click', () =>
  catInXs.classList.contains('d-none') ? rollDownMenu() : rollUpMenu()
);

function rollDownMenu () {
  catInXs.classList.remove('d-none');
  searchField.style.visibility = 'hidden';
  menu.style.backgroundColor = '#723636';
}

function rollUpMenu () {
  catInXs.classList.add('d-none');
  searchField.style.visibility = 'visible';
  menu.style.backgroundColor = '#fff';
}
