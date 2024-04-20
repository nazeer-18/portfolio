document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const container = document.querySelector('.carousel-container');
    const slides = document.querySelector('.carousel-slide');
    const totalSlides = slides.children.length;
    const cardWidth = slides.children[0].offsetWidth;

    function moveSlide(direction) {
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        } else if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }
        const offset = -currentIndex * cardWidth;
        slides.style.transform = `translateX(${offset}px)`;
        // Center the current card
        const containerWidth = container.offsetWidth;
        const centeredOffset = (containerWidth - cardWidth) / 2;
        slides.style.transform = `translateX(calc(${offset}px + ${centeredOffset}px))`;
    }

    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    prevButton.addEventListener('click', function () {
        moveSlide(-1);
    });

    nextButton.addEventListener('click', function () {
        moveSlide(1);
    });

    setInterval(() => {
        moveSlide(1);
    }, 5000);
});
