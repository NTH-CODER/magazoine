// show searchbox toggler

const searchToggler = document.getElementById('searchToggler');
const searchField = document.getElementById('searchField');
const seachIcon = document.getElementById('seachIcon');

seachIcon.className = "fa fa-search";

searchToggler.addEventListener('click', ()=> {
    searchField.classList.toggle('active_search_box');
});