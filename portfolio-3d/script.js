// 3D Portfolio Interactions

console.log("3D Portfolio Loaded");

// Handle Spline Loader (mimicking React Suspense)
const viewer = document.querySelector('spline-viewer');
const loader = document.querySelector('.loader-container');

if (viewer && loader) {
    viewer.addEventListener('load', () => {
        console.log("Spline scene loaded");
        loader.style.opacity = '0';
        viewer.style.opacity = '1';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    });

    // Safety timeout: Force hide loader after 4 seconds if scene takes too long
    setTimeout(() => {
        if (loader.style.opacity !== '0') {
            console.log("Force hiding loader");
            loader.style.opacity = '0';
            viewer.style.opacity = '1';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    }, 4000);
}

// Add simple entrance animations
document.addEventListener('DOMContentLoaded', () => {
    const elements = [
        '.badge',
        'h1',
        '.description',
        '.scroller',
        '.cta-container',
        'footer'
    ];

    elements.forEach((selector, index) => {
        const el = document.querySelector(selector);
        if (el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`;

            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 100);
        }
    });
});
