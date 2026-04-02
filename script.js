// Inicializar Swiper
const swiper = new Swiper(".mySwiper", {
  loop: true, // faz o carrossel rodar em loop
  slidesPerView: 1, // quantos slides aparecem por vez
  spaceBetween: 20, // espaçamento entre slides
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000, // tempo em ms (4s)
    disableOnInteraction: false, // continua mesmo após interação
  },
});
