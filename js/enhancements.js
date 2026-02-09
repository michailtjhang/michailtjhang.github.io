/**
 * Portfolio Design Enhancements - JavaScript
 * Dark Mode, Project Filters, Scroll Animations, Typing Effect
 */

(function () {
    'use strict';

    // ================================================================
    // DARK MODE TOGGLE
    // ================================================================

    const themeToggle = {
        init: function () {
            // Get saved theme or default to light
            const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
            document.documentElement.setAttribute('data-theme', savedTheme);

            // Listen for toggle clicks
            const toggleBtn = document.querySelector('.theme-toggle');
            if (toggleBtn) {
                toggleBtn.addEventListener('click', this.toggle.bind(this));
            }
        },

        toggle: function () {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('portfolio-theme', newTheme);

            // Dispatch event for other components
            window.dispatchEvent(new CustomEvent('theme-changed', { detail: { theme: newTheme } }));
        }
    };

    // ================================================================
    // PROJECT FILTER SYSTEM
    // ================================================================

    const projectFilter = {
        init: function () {
            const filterBtns = document.querySelectorAll('.filter-btn');
            const projects = document.querySelectorAll('.folio-item');

            if (filterBtns.length === 0) return;

            filterBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const filter = e.target.getAttribute('data-filter');

                    // Update active state
                    filterBtns.forEach(b => b.classList.remove('active'));
                    e.target.classList.add('active');

                    // Filter projects
                    this.filterProjects(filter, projects);
                });
            });
        },

        filterProjects: function (filter, projects) {
            projects.forEach(project => {
                const column = project.closest('.column');
                const category = project.getAttribute('data-category');

                if (filter === 'all' || category === filter || category?.includes(filter)) {
                    column.style.display = 'block';
                    setTimeout(() => {
                        column.style.opacity = '1';
                        column.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    column.style.opacity = '0';
                    column.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        column.style.display = 'none';
                    }, 300);
                }
            });
        }
    };

    // ================================================================
    // TYPING EFFECT
    // ================================================================

    const typingEffect = {
        init: function () {
            const typingElement = document.querySelector('.typing-text');
            if (!typingElement) return;

            const text = typingElement.getAttribute('data-text') || typingElement.textContent;
            typingElement.textContent = '';
            typingElement.style.display = 'inline-block';

            let charIndex = 0;
            const typeSpeed = 100;

            const type = () => {
                if (charIndex < text.length) {
                    typingElement.textContent += text.charAt(charIndex);
                    charIndex++;
                    setTimeout(type, typeSpeed);
                } else {
                    // Remove cursor after typing is done
                    setTimeout(() => {
                        typingElement.style.borderRight = 'none';
                    }, 1000);
                }
            };

            // Start typing after a short delay
            setTimeout(type, 500);
        }
    };

    // ================================================================
    // SCROLL ANIMATIONS
    // ================================================================

    const scrollAnimations = {
        init: function () {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);

            // Observe fade-in elements
            document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
                observer.observe(el);
            });
        }
    };

    // ================================================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ================================================================

    const smoothScroll = {
        init: function () {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    const href = this.getAttribute('href');
                    if (href === '#' || href === '#0') return;

                    const target = document.querySelector(href);
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        }
    };

    // ================================================================
    // LAZY LOADING FOR IMAGES
    // ================================================================

    const lazyLoading = {
        init: function () {
            const images = document.querySelectorAll('img[data-src]');

            if ('IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            img.classList.add('loaded');
                            imageObserver.unobserve(img);
                        }
                    });
                });

                images.forEach(img => imageObserver.observe(img));
            } else {
                // Fallback for browsers without IntersectionObserver
                images.forEach(img => {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                });
            }
        }
    };

    // ================================================================
    // PARTICLE BACKGROUND (Optional - Lightweight version)
    // ================================================================

    const particles = {
        init: function () {
            const canvas = document.getElementById('particles-canvas');
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            let particlesArray = [];

            // Set canvas size
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            window.addEventListener('resize', () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            });

            class Particle {
                constructor() {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                    this.size = Math.random() * 2 + 1;
                    this.speedX = Math.random() * 0.5 - 0.25;
                    this.speedY = Math.random() * 0.5 - 0.25;
                }

                update() {
                    this.x += this.speedX;
                    this.y += this.speedY;

                    if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
                    if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
                }

                draw() {
                    const theme = document.documentElement.getAttribute('data-theme');
                    ctx.fillStyle = theme === 'dark' ? 'rgba(111, 179, 184, 0.3)' : 'rgba(95, 146, 149, 0.3)';
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            const createParticles = () => {
                particlesArray = [];
                const numberOfParticles = (canvas.width * canvas.height) / 15000;
                for (let i = 0; i < numberOfParticles; i++) {
                    particlesArray.push(new Particle());
                }
            };

            const animate = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                particlesArray.forEach(particle => {
                    particle.update();
                    particle.draw();
                });
                requestAnimationFrame(animate);
            };

            createParticles();
            animate();

            // Recreate particles on theme change
            window.addEventListener('theme-changed', () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            });
        }
    };

    // ================================================================
    // INITIALIZE ALL MODULES
    // ================================================================

    const init = () => {
        themeToggle.init();
        projectFilter.init();
        typingEffect.init();
        scrollAnimations.init();
        smoothScroll.init();
        lazyLoading.init();
        particles.init();

        console.log('✨ Portfolio enhancements loaded successfully!');
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
