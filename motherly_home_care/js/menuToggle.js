// js/menuToggle.js

console.log('menuToggle.js loaded'); // Add this line

document.addEventListener('DOMContentLoaded', function () {
    var fullScreenMenuBtn = document.querySelector('.fullScreenMenuBtn');
    var closeBtn = document.querySelector('.closebtn');
    
    if (fullScreenMenuBtn) {
        fullScreenMenuBtn.addEventListener('click', toggleDrawer);
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', toggleDrawer);
    }
});

function toggleDrawer() {
    console.log('toggleDrawer function called'); // Add this line
    var drawer = document.getElementById('fullScreenMenu');
    if (drawer) {
        if (drawer.style.width === '100%') {
            drawer.style.width = '0';
        } else {
            drawer.style.width = '100%';
        }
    }
}
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}
s