// script.js
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('header, footer, .circle, .placeholder');
    setTimeout(() => {
        elements.forEach(el => {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        });
    }, 200);
});
