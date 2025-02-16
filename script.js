document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-image');
    fadeElements.forEach(element => {
        element.style.opacity = 0;
    });

    setTimeout(() => {
        fadeElements.forEach(element => {
            element.style.opacity = 1;
        });
    }, 100);
});


document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.navbar-nav a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

