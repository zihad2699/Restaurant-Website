// Wait until the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.reservation-form');
    
    form.addEventListener('submit', function(event) {
        // Get the values of form fields
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const date = document.querySelector('#date').value;
        const time = document.querySelector('#time').value;
        const guests = document.querySelector('#guests').value;
        
        // Check if any field is empty
        if (!name || !email || !date || !time || !guests) {
            event.preventDefault();  // Prevent form submission
            alert("Please fill in all fields before submitting.");
        }
    });
});
// Scroll Reveal animations
ScrollReveal().reveal('.hero-text', {
    delay: 200,
    duration: 1000,
    origin: 'top',
    distance: '50px',
    easing: 'ease-in-out',
    reset: true
});

ScrollReveal().reveal('.menu-card', {
    interval: 200,
    duration: 800,
    origin: 'bottom',
    distance: '40px',
    reset: true
});

ScrollReveal().reveal('.about-content, .gallery-grid, .contact, .reservation-form', {
    duration: 1000,
    origin: 'left',
    distance: '60px',
    easing: 'ease-in-out',
    reset: true
});
// Initialize ScrollReveal
ScrollReveal().reveal('.hero', {
    origin: 'top',
    distance: '100px',
    duration: 1500,
    delay: 300
});

ScrollReveal().reveal('.menu', {
    origin: 'bottom',
    distance: '100px',
    duration: 1500,
    delay: 400
});

ScrollReveal().reveal('.about', {
    origin: 'left',
    distance: '100px',
    duration: 1500,
    delay: 500
});

ScrollReveal().reveal('.gallery', {
    origin: 'right',
    distance: '100px',
    duration: 1500,
    delay: 600
});

ScrollReveal().reveal('.contact', {
    origin: 'bottom',
    distance: '100px',
    duration: 1500,
    delay: 700
});
