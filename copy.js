var typed = new Typed(".text", {
    strings: ["Software Developer", "Graphic Designer", "UI/UX Designer", "Video Editor"], 
    typeSpeed: 50,
    backSpeed: 50, 
    backDelay: 1000, 
    loop: true
});


document.addEventListener("DOMContentLoaded", function () {
    let menuIcon = document.getElementById("menu-icon");
    let navbar = document.querySelector(".navbar");
    let navLinks = document.querySelectorAll(".navbar a"); // Select all nav links

    menuIcon.addEventListener("click", function () {
        navbar.classList.toggle("active");

        // Toggle menu icon between ☰ and ✖
        if (menuIcon.classList.contains("fa-bars")) {
            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-times");
        } else {
            menuIcon.classList.remove("fa-times");
            menuIcon.classList.add("fa-bars");
        }
    });

    // Close navbar when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navbar.classList.remove("active");
            menuIcon.classList.remove("fa-times");
            menuIcon.classList.add("fa-bars");
        });
    });
});






// Scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);

    // Remove toggle icon and navbar when clicking navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
