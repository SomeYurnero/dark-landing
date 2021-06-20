const swiper = new Swiper(".swiper-container", {
    navigation: {
        nextEl: ".slider__button-link-next",
        prevEl: ".slider__button-link-prev"
    },

    pagination: {
        el: ".slider__pagination",
        type: "fraction",
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },

    simulateTouch: true,
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    watchOverflow: true,
    speed: 1000,
    grabCursor: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        1366: {
            slidesPerView: 3,
        }
    }
});