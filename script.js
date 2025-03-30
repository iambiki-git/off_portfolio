// Mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Active link highlighting based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-blue-600');
        link.classList.add('text-gray-500');
        
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.remove('text-gray-500');
            link.classList.add('text-blue-600');
        }
    });
});

// Form submission with validation
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        if (!data.name || !data.email || !data.message) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Here you would typically send the data to a server
        // For demonstration, we'll just log it and show a success message
        console.log('Form submitted:', data);
        
        // Show success message
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        // Simulate API call
        setTimeout(() => {
            submitButton.textContent = 'Message Sent!';
            
            // Reset form and button after 2 seconds
            setTimeout(() => {
                this.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        }, 1500);
    });
}

// Scroll to top button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
`;
scrollToTopButton.className = 'fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 opacity-0 invisible z-50';
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopButton.classList.remove('opacity-0', 'invisible');
        scrollToTopButton.classList.add('opacity-100', 'visible');
    } else {
        scrollToTopButton.classList.remove('opacity-100', 'visible');
        scrollToTopButton.classList.add('opacity-0', 'invisible');
    }
});

// Project filtering functionality (if you have filter buttons)
const filterButtons = document.querySelectorAll('.filter-button');
const projectItems = document.querySelectorAll('.project-item');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('bg-blue-600', 'text-white'));
            
            // Add active class to clicked button
            button.classList.add('bg-blue-600', 'text-white');
            
            const filterValue = button.getAttribute('data-filter');
            
            projectItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
}

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.classList.add('opacity-100', 'translate-y-0');
            element.classList.remove('opacity-0', 'translate-y-10');
        }
    });
}

// Initialize animations
document.querySelectorAll('.animate-on-scroll').forEach(el => {
    el.classList.add('transition', 'duration-500', 'ease-in-out', 'opacity-0', 'translate-y-10');
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);


// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        
        // Save preference to localStorage
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('darkMode', isDark);
    });
    
    // Check for saved preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.documentElement.classList.add('dark');
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('[data-percent]');
    
    skillBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        setTimeout(() => {
            bar.style.width = percent + '%';
        }, 100);
    });
});




// typewriter effect for hero section
document.addEventListener('DOMContentLoaded', function() {
    const titleElement = document.getElementById('typewriter-title');
    const subtitleElement = document.getElementById('typewriter-subtitle');
    
    const titleText = "Hi, there! I'm BIKI.";
    const subtitleText = "Web Developer";
    
    let titleIndex = 0;
    let subtitleIndex = 0;
    let isDeleting = false;
    let isSubtitleDeleting = false;
    let typingSpeed = 100;
    
    function typeTitle() {
        if (isDeleting) {
            titleElement.textContent = titleText.substring(0, titleIndex - 1);
            titleIndex--;
            typingSpeed = 50;
        } else {
            titleElement.textContent = titleText.substring(0, titleIndex + 1);
            titleIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && titleIndex === titleText.length) {
            typingSpeed = 1500; // Pause at end
            isDeleting = true;
        } else if (isDeleting && titleIndex === 0) {
            isDeleting = false;
            typingSpeed = 500; // Pause at start
        }
        
        setTimeout(typeTitle, typingSpeed);
    }
    
    function typeSubtitle() {
        if (isSubtitleDeleting) {
            subtitleElement.textContent = subtitleText.substring(0, subtitleIndex - 1);
            subtitleIndex--;
            typingSpeed = 50;
        } else {
            subtitleElement.textContent = subtitleText.substring(0, subtitleIndex + 1);
            subtitleIndex++;
            typingSpeed = 100;
        }
        
        if (!isSubtitleDeleting && subtitleIndex === subtitleText.length) {
            typingSpeed = 1500;
            isSubtitleDeleting = true;
        } else if (isSubtitleDeleting && subtitleIndex === 0) {
            isSubtitleDeleting = false;
            typingSpeed = 500;
        }
        
        setTimeout(typeSubtitle, typingSpeed);
    }
    
    // Start animations with slight delay between them
    setTimeout(typeTitle, 500);
    setTimeout(typeSubtitle, 1500);
});


  // Floating indicator animation
 const navItems = document.querySelectorAll('[data-nav-item]');
 const floatingIndicator = document.getElementById('floating-indicator');
 
 function updateIndicator(el) {
   const { width, left } = el.getBoundingClientRect();
   const containerLeft = el.closest('div').getBoundingClientRect().left;
   
   floatingIndicator.style.width = `${width}px`;
   floatingIndicator.style.left = `${left - containerLeft}px`;
 }
 
 navItems.forEach(item => {
   item.addEventListener('mouseenter', () => updateIndicator(item));
   
   item.addEventListener('click', function() {
     navItems.forEach(i => i.classList.remove('text-blue-600'));
     this.classList.add('text-blue-600');
     updateIndicator(this);
   });
 });
 
 // Initialize with first item active
 navItems[0].classList.add('text-blue-600');
 updateIndicator(navItems[0]);



 
 