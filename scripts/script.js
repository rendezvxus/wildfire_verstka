new Swiper('.slider', {
    slidesPerView: 3,
    spaceBetween: 60,
    navigation: {
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom'
    },
    loop: true,
    breakpoints: {
        361: {
            slidesPerView: 3,
            spaceBetween: 60,
            centeredSlides: true,
        },
        360: {
            slidesPerView: 1,
            centeredSlides: true,
        }
    }
});