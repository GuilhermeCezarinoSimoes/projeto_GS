document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;

    function showImage(index) {
        if (index < 0) {
            index = images.length - 1;
        } else if (index >= images.length) {
            index = 0;
        }
        carousel.style.transform = `translateX(${-index * 100}%)`;
        currentIndex = index;
    }

    prevBtn.addEventListener('click', () => {
        showImage(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        showImage(currentIndex + 1);
    });

    setInterval(() => {
        showImage(currentIndex + 1);
    }, 3000);
});

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

