// ========================================
// Mobile Menu Toggle
// ========================================

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    }
});

// ========================================
// Slideshow Background Handler
// ========================================

const slides = document.querySelectorAll('.slideshow-slide');
let currentSlide = 0;

function showSlide(index) {
    // Remove active class from all slides
    slides.forEach(slide => slide.classList.remove('active'));

    // Add active class to current slide
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Auto-advance slideshow every 5 seconds
if (slides.length > 0) {
    setInterval(nextSlide, 5000);
    console.log(`Slideshow initialized with ${slides.length} slides`);
}

// ========================================
// Navbar Scroll Effect
// ========================================

const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ========================================
// Smooth Scroll for Anchor Links
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Don't prevent default for # links without target
        if (href === '#' || href === '') return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();

            const navbarHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Form Handling
// ========================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Basic validation
        if (!data.name || !data.phone || !data.message) {
            alert('Please fill in all required fields.');
            return;
        }

        // Phone validation
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(data.phone)) {
            alert('Please enter a valid phone number.');
            return;
        }

        // Simulate form submission
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        setTimeout(() => {
            // Show success message
            alert('Thank you for your inquiry! We\'ll contact you shortly via your preferred method.');

            // Reset form
            contactForm.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;

            // In production, integrate with backend:
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(data)
            // })

        }, 1500);
    });
}

// ========================================
// Intersection Observer for Fade-In Animations
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.service-card, .project-card, .feature-item, .testimonial-card');
animateElements.forEach(el => observer.observe(el));

// ========================================
// Track Events (for Analytics)
// ========================================

function trackEvent(eventName, eventData) {
    // Google Analytics 4 event tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }

    // Console log for development
    console.log('Event tracked:', eventName, eventData);
}

// Track call button clicks
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', (e) => {
        trackEvent('contact_call_click', {
            page_path: window.location.pathname,
            phone_number: link.getAttribute('href').replace('tel:', '')
        });
    });
});

// Track SMS button clicks
document.querySelectorAll('a[href^="sms:"]').forEach(link => {
    link.addEventListener('click', (e) => {
        trackEvent('contact_sms_click', {
            page_path: window.location.pathname,
            phone_number: link.getAttribute('href').split('?')[0].replace('sms:', '')
        });
    });
});

// Track form submissions
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        trackEvent('form_submit_quote', {
            page_path: window.location.pathname,
            form_name: 'contact_quote'
        });
    });
}

// ========================================
// Image Lazy Loading
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
        // Skip hero and first few images
        if (index > 2 && !img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
    });
});

// ========================================
// Mobile Bar Visibility
// ========================================

const mobileBar = document.getElementById('mobileBar');
let lastScrollTop = 0;
const mobileBarThreshold = 300;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (window.innerWidth <= 768) {
        if (scrollTop > mobileBarThreshold) {
            mobileBar.style.transform = 'translateY(0)';
        } else {
            mobileBar.style.transform = 'translateY(100%)';
        }
    }

    lastScrollTop = scrollTop;
});

// ========================================
// Project Gallery Click Handlers
// ========================================

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('click', function() {
        const projectTitle = this.querySelector('h3').textContent;
        trackEvent('project_card_click', {
            project_name: projectTitle,
            page_path: window.location.pathname
        });
    });

    // Keyboard accessibility
    card.setAttribute('tabindex', '0');
    card.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
});

// ========================================
// Form Field Enhancements
// ========================================

// Auto-format phone number
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');

        // Format as (XXX) XXX-XXXX
        if (value.length > 0) {
            if (value.length <= 3) {
                value = `(${value}`;
            } else if (value.length <= 6) {
                value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
            } else {
                value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
            }
        }

        e.target.value = value;
    });
}

// ========================================
// Scroll Indicator Animation
// ========================================

const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const mission = document.querySelector('.mission');
        if (mission) {
            mission.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Hide scroll indicator after scrolling
    let hideTimeout;
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 200 && scrollIndicator) {
            scrollIndicator.style.opacity = '0';
            clearTimeout(hideTimeout);
            hideTimeout = setTimeout(() => {
                scrollIndicator.style.display = 'none';
            }, 300);
        }
    }, { once: true });
}

// ========================================
// Slideshow Performance Optimization
// ========================================

// Preload slideshow images for smooth transitions
if (slides.length > 0) {
    slides.forEach(slide => {
        const img = slide.querySelector('img');
        if (img && img.complete) {
            console.log('Image loaded:', img.src);
        }
    });
}

// ========================================
// Back to Top Button
// ========================================

function createBackToTop() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'back-to-top';
    button.setAttribute('aria-label', 'Back to top');
    button.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: var(--primary-teal);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(56, 99, 96, 0.3);
        z-index: 998;
    `;

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px)';
        button.style.boxShadow = '0 6px 20px rgba(56, 99, 96, 0.4)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = '0 4px 12px rgba(56, 99, 96, 0.3)';
    });

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });

    document.body.appendChild(button);
}

// Initialize back to top button on desktop
if (window.innerWidth > 768) {
    createBackToTop();
}

// ========================================
// Performance Monitoring
// ========================================

window.addEventListener('load', () => {
    if ('performance' in window) {
        const perfData = performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${pageLoadTime}ms`);

        trackEvent('page_performance', {
            load_time: pageLoadTime,
            page_path: window.location.pathname
        });
    }
});

// ========================================
// Console Branding
// ========================================

console.log(
    '%c🌊 Rowe Environmental Services',
    'color: #386360; font-size: 20px; font-weight: bold; font-family: "DM Sans", sans-serif;'
);
console.log(
    '%cFriends of the Water • Mechanical Solutions',
    'color: #5F8054; font-size: 14px; font-family: "Heebo", sans-serif;'
);
console.log(
    '%cWebsite designed with modern web standards',
    'color: #707070; font-size: 12px;'
);
