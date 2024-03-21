document.addEventListener('DOMContentLoaded',
function (){
    
    const dropdownToogle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownToogleClose = document.querySelector('.dropdown-toggleclose')
    const logoContainer = document.querySelector('.logo-container')


    dropdownToogle.addEventListener("click", () => {

        dropdownMenu.classList.toggle('display-drop-down-menu')
        dropdownToogle.classList.toggle('display-dropdown-toggle-and-logo')
        logoContainer.classList.toggle('display-dropdown-toggle-and-logo')
    });

    dropdownToogleClose.addEventListener("click", () => {

        dropdownMenu.classList.toggle('display-drop-down-menu')
        dropdownToogle.classList.toggle('display-dropdown-toggle-and-logo')
        logoContainer.classList.toggle('display-dropdown-toggle-and-logo')
    });
    
});