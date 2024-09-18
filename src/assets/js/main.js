// Swiper JS
const swiperEl = document.querySelector('swiper-container')
Object.assign(swiperEl, {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    },
});
swiperEl.initialize();

//pagedone JS untuk Top Rating
const swiper = new Swiper(".multiple-slide-carousel", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 16,
    navigation: {
        prevEl: ".multiple-slide-carousel .swiperPrev",
        nextEl: ".multiple-slide-carousel .swiperNext",
    },
    breakpoints: {
        1024: {
            slidesPerView: 5,
            spaceBetween: 24
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 24
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 24
        }
    }
});