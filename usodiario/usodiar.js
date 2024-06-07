document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach((box, index) => {
        box.addEventListener('mouseenter', () => {
            const text = box.querySelector('.text');
            text.style.opacity = '1';
        });

        box.addEventListener('mouseleave', () => {
            const text = box.querySelector('.text');
            text.style.opacity = '0';
        });
    });
});
