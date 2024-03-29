const button = document.querySelector('.header__menu-btn');
const companies = document.querySelector('.header__companies');
const companiesList = document.querySelector('.header__partners-list');

button.onclick = function () {
    button.classList.toggle('active');
}

companies.onclick = function () {
    companiesList.classList.toggle('active');
}