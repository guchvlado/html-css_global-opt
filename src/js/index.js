import "./import/modules";
import "./import/components";
import Swiper, { Navigation } from "swiper";

const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 45,
    speed: 1500,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    breakpoints: {
        992: {
            slidesPerView: 3,
        }
    },
});