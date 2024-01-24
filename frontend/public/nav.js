document.addEventListener('DOMContentLoaded',
function (){
    
    const dropdownToogle = document.querySelector('#dropdown-toogle');
    const dropdownMenu = document.querySelector('#dropdown-menu');
    const dropdownToogleClose = document.querySelector('#dropdown-toogleclose')

    let clickCounter = 0;

    dropdownToogle.addEventListener("click", e => {
        e.preventDefault();

        clickCounter++;

        if(clickCounter % 2 === 1)
        {
            dropdownMenu.style.display = 'flex';
            dropdownToogle.style.display = 'none';

        }
        else
        {
            dropdownMenu.style.display = 'none'
        }

    });

    dropdownToogleClose.addEventListener("click", e => {
        e.preventDefault();

        if(clickCounter % 2 === 1)
        {
            dropdownMenu.style.display = 'none';
            dropdownToogle.style.display = 'flex';

        }
        clickCounter++;
    });
    
});