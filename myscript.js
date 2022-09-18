const searchBtn = document.querySelector('.icon');
const barsBtn = document.querySelector('.bars-btn');
const searchCloseBtn = document.querySelector('.close-btn');
const searchPage = document.querySelector('.search-popup');
const optionBarPage = document.querySelector('.option-bar');
const closeBarBtn = document.querySelector('.close-bar-btn');
const hideScroll = document.querySelector('#page');



searchBtn.addEventListener('click',() => {
    searchPage.classList.add('show-popup');
});

searchCloseBtn.addEventListener('click',() => {
    searchPage.classList.remove('show-popup');
});

barsBtn.addEventListener('click',() => {
    optionBarPage.classList.add('show-option-bar');
    hideScroll.classList.add('overflow');

});

closeBarBtn.addEventListener('click',() => {
    optionBarPage.classList.remove('show-option-bar');
    hideScroll.classList.remove('overflow');
});