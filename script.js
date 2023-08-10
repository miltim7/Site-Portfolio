let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => 
{
    sections.forEach(sec => 
    {
        if (window.scrollY >= sec.offsetTop - 100 &&
            window.scrollY < sec.offsetTop + sec.offsetHeight)
        {
            navLinks.forEach(links => 
            {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + sec.getAttribute('id') + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 1)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}