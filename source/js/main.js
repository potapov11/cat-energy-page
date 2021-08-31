const header = document.querySelector('.header');
const headerToggle = document.querySelector('.header__button');

header.classList.remove('header--no-js');

headerToggle.addEventListener('click', function() {
  if (header.classList.contains('header--opened')) {
    header.classList.remove('header--opened');
  } else {
    header.classList.add('header--opened');
  }
});
