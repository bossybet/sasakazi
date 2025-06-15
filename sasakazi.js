const navToggle = document.querySelector('.nav-toggle') ;
const navLinks = document.querySelector('.nav-links') ;

navToggle.addEventListener('click', () => {

    navLinks.classList.toggle('active') ;

}) ;

navLinks.querySelectorAll('a') .forEach(link => {

    link.addEventListener('click', () => {

        if (navLinks.classList.contains('active')) {

            navLinks.classList.remove('active') ;
        }
    
    
    }) ;
}) ;