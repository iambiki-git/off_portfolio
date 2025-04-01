
//Initialization script 
// Wait for everything to load
window.addEventListener('load', function() {
    // Simple configuration that definitely works
    particlesJS('particles-js', {
    "particles": {
        "number": {
        "value": 80,
        "density": {
            "enable": true,
            "value_area": 800
        }
        },
        "color": {
        "value": "#ffffff"
        },
        "shape": {
        "type": "circle"
        },
        "opacity": {
        "value": 0.5,
        "random": false
        },
        "size": {
        "value": 3,
        "random": true
        },
        "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
        },
        "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
        "onhover": {
            "enable": true,
            "mode": "grab"
        },
        "onclick": {
            "enable": true,
            "mode": "push"
        }
        }
    },
    "retina_detect": true
    });
});

// Toggle mobile menu
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
    
    // Optional: Change icon when menu is open
    const icon = this.querySelector('svg');
    if (menu.classList.contains('hidden')) {
    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
    } else {
    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.add('hidden');
    document.getElementById('mobile-menu-button').querySelector('svg').innerHTML = 
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
    });
});

// Scroll-triggered animations
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.content-section');
    const scrollPosition = window.scrollY + window.innerHeight;
    
    sections.forEach(section => {
    const sectionPosition = section.offsetTop;
    if (scrollPosition > sectionPosition + 100) {
        section.classList.add('active');
    }
    });
});

// Trigger initial check in case content is already in view
window.dispatchEvent(new Event('scroll'));



// Form submission simulation
document.getElementById('contactForm').addEventListener('submit', function(e) {
e.preventDefault();

const btn = document.getElementById('submitBtn');
const btnText = document.getElementById('btnText');
const successIcon = document.getElementById('successIcon');

// Show sending state
btnText.textContent = 'Sending...';
btn.disabled = true;

// Simulate form submission (replace with actual AJAX call)
setTimeout(() => {
    // Show success state
    btnText.textContent = 'Sent!';
    successIcon.classList.remove('hidden');
    
    // Clear form
    this.reset();
    
    // Reset button after 2 seconds
    setTimeout(() => {
    btnText.textContent = 'Send Message';
    successIcon.classList.add('hidden');
    btn.disabled = false;
    }, 2000);
}, 1000);
});


// Simple typing animation (can be enhanced with a library like Typed.js)
document.addEventListener('DOMContentLoaded', function() {
    const typedTextSpan = document.querySelector('.typed-text');
    const cursorSpan = document.querySelector('.cursor');
    const texts = typedTextSpan.getAttribute('data-typed').replace(/[\[\]"]/g, '').split(',');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typedTextSpan.textContent = currentText.substring(0, charIndex-1);
            charIndex--;
        } else {
            typedTextSpan.textContent = currentText.substring(0, charIndex+1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 1500);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }
    
    setTimeout(type, 1000);
});
