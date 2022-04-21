
document.addEventListener('DOMContentLoaded', function(){

    const bunnerSwiper = new Swiper(".slider-bunner-js", {
        slidesPerView: 1,
        loop: "true",
        speed: 800,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });


    const swiperNew = new Swiper(".slider-js-1", {
        navigation: {
            prevEl: '.content-slider-prev',
            nextEl: '.content-slider-next',
        },
        slidesPerView: 3,
        loop: 'true',
        speed: 800,
        spaceBetween: 10,
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
                loop: 'true',
                speed: 800,
            },
        },

    })



    const swiperFull = new Swiper(".slider-full-js", {
        slidesPerView: 1,
        loop: 'true',
        speed: 800,
        pagination: {
            el: ".swiper-pagination-1",
            clickable: true,
        }

    })




});