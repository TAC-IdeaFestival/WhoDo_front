const moveTarget = document.querySelector('.target');
let togle = true;
moveTarget.addEventListener('click', () => {
    if (togle) {
        gsap.to('.main', { duration: 0.3, x: 280, ease: 'bounce' });
        togle = !togle;
    } else {
        gsap.to('.main', { duration: 0.3, x: 0, ease: 'bounce' });
        togle = !togle;
    }
});
