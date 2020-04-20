/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navbar = document.getElementById('navbar__list');
const sections = document.getElementsByTagName('section');

// Add class 'active' to section when near top of viewport
document.addEventListener("scroll", function () {
    for (const section of sections){
        const sectRect = section.getBoundingClientRect()
        if(sectRect.top <= 188 && sectRect.bottom >= 188){
            section.classList.add('active')
        }
        else{
            section.classList.remove('active')
        }
    }
});

// Build menu 
for (const section of sections) {
    const newNav = document.createElement('li');
    const newLink = document.createElement('a');

    newLink.textContent = section.getAttribute('data-nav');
    newLink.classList.add('menu__link')
    newLink.addEventListener('click', function (){
        document.getElementById(section.getAttribute('id')).scrollIntoView({behavior:'smooth'});
    });

    newNav.appendChild(newLink);
    navbar.appendChild(newNav);

}