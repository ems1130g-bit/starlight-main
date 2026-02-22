document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const navLinksContainer = document.getElementById('nav-links');
    const navLinks = document.querySelectorAll('.nav-link');

    const toggleMenu = () => {
        navLinksContainer.classList.toggle('active');
        // Prevent body scroll when menu is open
        document.body.style.overflow = navLinksContainer.classList.contains('active') ? 'hidden' : '';
    };

    menuToggle.addEventListener('click', toggleMenu);
    menuClose.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // --- Intersection Observer for Fade-ins ---
    const fadeElements = document.querySelectorAll('.fade-in');

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: unobserve after showing once
                fadeObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15, // Trigger when 15% visible
        rootMargin: "0px 0px -50px 0px" // Slightly before it reaches the bottom
    });

    fadeElements.forEach(el => fadeObserver.observe(el));

    // --- Dynamic Background Color on Scroll ---
    // Change theme based on sections currently in focus
    const sections = document.querySelectorAll('.section');
    const themeBg = document.getElementById('theme-bg');
    const navHeader = document.querySelector('.nav-header');
    
    // Colors that should match css variables
    const colors = {
        dark: '#0A0F1A', // Midnight Blue
        light: '#F4EFE6' // Cream
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        // Find the section that is most in view
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                if (entry.target.classList.contains('light-theme')) {
                    themeBg.style.backgroundColor = colors.light;
                    document.body.style.color = colors.dark;
                    navHeader.style.color = colors.dark;
                } else {
                    themeBg.style.backgroundColor = colors.dark;
                    document.body.style.color = colors.light;
                    navHeader.style.color = colors.light;
                }
            }
        });
    }, {
        threshold: 0.5 // Trigger when section is 50% in view
    });

    sections.forEach(section => sectionObserver.observe(section));
});
