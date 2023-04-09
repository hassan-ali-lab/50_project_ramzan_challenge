// get .search-input element
const searchInput = document.getElementsByClassName('search-input')[0];
// get .search-button element
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function () {
    // add .search-input--active class to .search-input element
    if (searchInput.classList.contains('active')) {
        searchInput.classList.remove('active');
        searchButton.classList.remove('active');

    } else {
        searchInput.classList.add('active');
        searchButton.classList.add('active');
        searchInput.focus();
    }
});