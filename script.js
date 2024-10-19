// Hamburger Menu Function
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navTablet = document.getElementById('nav-tablet');
    const nameElement = document.querySelector('#name');

    // Array of elements to toggle classes on
    const elementsToToggle = [navTablet, nameElement];

    menuIcon.addEventListener('click', function() {
        // Loop through each element in the array
        elementsToToggle.forEach(element => {
            element.classList.toggle('show');
            element.classList.toggle('hidden');
        });
    });
});