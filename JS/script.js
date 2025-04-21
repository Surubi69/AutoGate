

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});


document.addEventListener('DOMContentLoaded', () => {

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });


    const fadeElements = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(
        (entries, appearOnScroll) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            });
        }, 
        appearOptions
    );

    fadeElements.forEach(element => {
        appearOnScroll.observe(element);
    });


    const animatedBg = document.querySelector('.animated-bg');
    for (let i = 0; i < 10; i++) {
        const span = document.createElement('span');
        span.style.width = `${Math.random() * 30 + 10}px`;
        span.style.height = span.style.width;
        span.style.left = `${Math.random() * 100}%`;
        span.style.animationDelay = `${Math.random() * 5}s`;
        span.style.animationDuration = `${Math.random() * 10 + 15}s`;
        span.style.opacity = Math.random() * 0.5 + 0.1;
        animatedBg.appendChild(span);
    }
});
