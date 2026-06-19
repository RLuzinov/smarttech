/******/ (() => { // webpackBootstrap
/*!**************************************!*\
  !*** ./src/block-about-main/view.js ***!
  \**************************************/
(function () {
  const DESIGN_WIDTH = 1200;
  function updateScale() {
    document.querySelectorAll(".about-scaler").forEach(scaler => {
      const parent = scaler.parentElement;
      const w = parent.clientWidth;
      scaler.style.zoom = w <= 640 ? "1" : w / DESIGN_WIDTH;
    });
  }
  function getYouTubeEmbedUrl(url) {
    if (!url) return null;
    if (url.includes("youtube.com/embed/")) return url + "?autoplay=1&rel=0";
    const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
    if (shortMatch) return "https://www.youtube.com/embed/" + shortMatch[1] + "?autoplay=1&rel=0";
    const watchMatch = url.match(/[?&]v=([^?&]+)/);
    if (watchMatch) return "https://www.youtube.com/embed/" + watchMatch[1] + "?autoplay=1&rel=0";
    return null;
  }
  function isYouTubeUrl(url) {
    return url && (url.includes("youtube.com") || url.includes("youtu.be"));
  }
  function activateVideo(btn, block) {
    const placeholder = block.querySelector(".about__video-placeholder");
    const rotatingText = block.querySelector(".about__rotating-text");
    const videoSrc = block.dataset.videoSrc;

    // Скрываем оверлей — видео уже находится в DOM под placeholder
    if (placeholder) placeholder.style.display = "none";
    btn.style.display = "none";
    if (rotatingText) rotatingText.style.display = "none";
    if (isYouTubeUrl(videoSrc)) {
      // YouTube: вставляем iframe в заготовленный контейнер
      const embedUrl = getYouTubeEmbedUrl(videoSrc);
      const container = block.querySelector(".about__youtube-container");
      if (container && embedUrl) {
        const iframe = document.createElement("iframe");
        iframe.src = embedUrl;
        iframe.allow = "autoplay; encrypted-media; fullscreen";
        iframe.allowFullscreen = true;
        iframe.style.cssText = "width:100%;height:100%;border:0;display:block;";
        container.appendChild(iframe);
      }
    } else {
      // Прямой mp4 (URL или файл из медиатеки): просто запускаем,
      // видео уже видно — placeholder убран выше
      const video = block.querySelector("video");
      if (video) {
        video.play().catch(function () {
          // Автовоспроизведение заблокировано — пользователь нажмёт play в контролах
        });
      }
    }
  }
  function initVideoPlayback() {
    document.querySelectorAll(".about__col-video .about__play-icon").forEach(btn => {
      btn.addEventListener("click", function () {
        const block = this.closest(".about__video-block");
        if (block) activateVideo(this, block);
      });
    });
    document.querySelectorAll(".about__philosophy-card .about__philosophy-play").forEach(btn => {
      btn.addEventListener("click", function () {
        const block = this.closest(".about__video-block");
        if (block) activateVideo(this, block);
      });
    });
  }
  window.addEventListener("load", () => {
    // updateScale();
    initVideoPlayback();
  });
  // window.addEventListener("resize", updateScale);
})();
/******/ })()
;
//# sourceMappingURL=view.js.map