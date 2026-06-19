/******/ (() => { // webpackBootstrap
/*!*********************************************!*\
  !*** ./src/block-blog-carusel-main/view.js ***!
  \*********************************************/
(function () {
  const DESIGN_WIDTH = 1200;
  function updateScale() {
    document.querySelectorAll(".blog-carousel-scaler").forEach(scaler => {
      // Скейлер — корневой элемент блока, его parentElement — враппер WP
      // (.wp-block-blocks-smarttech-block-blog-carousel).
      // Берём offsetWidth родителя — он уже учитывает overflow:hidden.
      const parent = scaler.parentElement;
      if (!parent) return;
      const w = parent.offsetWidth;
      scaler.style.zoom = w <= 640 ? "1" : w / DESIGN_WIDTH;
    });
  }
  function setCSSVariables() {
    document.querySelectorAll(".blog-carousel__slider").forEach(slider => {
      const desktopSlides = parseInt(slider.dataset.desktopSlides, 10) || 4;
      const mobileSlides = parseInt(slider.dataset.mobileSlides, 10) || 1;
      slider.style.setProperty("--desktop-slides", desktopSlides);
      slider.style.setProperty("--mobile-slides", mobileSlides);
    });
  }
  function init() {
    // updateScale();
    setCSSVariables();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
  window.addEventListener("load", init);
  // window.addEventListener("resize", updateScale);
})();
/******/ })()
;
//# sourceMappingURL=view.js.map