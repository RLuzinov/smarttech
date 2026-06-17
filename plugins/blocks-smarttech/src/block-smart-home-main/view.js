(function () {
	const DESIGN_WIDTH = 1200;

	function updateScale() {
		document.querySelectorAll(".smart-home-scaler").forEach((scaler) => {
			const parent = scaler.parentElement;
			const w = parent.clientWidth;
			scaler.style.zoom = w <= 640 ? "1" : w / DESIGN_WIDTH;
		});
	}

	function initSliders() {
		document.querySelectorAll(".smart-home__slider").forEach((slider) => {
			const viewport = slider.querySelector(".smart-home__slider-viewport");
			const slides = Array.from(
				viewport.querySelectorAll(".smart-home__slide"),
			);
			const leftArrow = slider.querySelector(".smart-home__arrow--left");
			const rightArrow = slider.querySelector(".smart-home__arrow--right");
			let currentIndex = 0;

			function showSlide(index) {
				slides.forEach((slide, i) => {
					slide.style.display = i === index ? "block" : "none";
				});
			}

			if (leftArrow) {
				leftArrow.addEventListener("click", () => {
					currentIndex = (currentIndex - 1 + slides.length) % slides.length;
					showSlide(currentIndex);
				});
			}
			if (rightArrow) {
				rightArrow.addEventListener("click", () => {
					currentIndex = (currentIndex + 1) % slides.length;
					showSlide(currentIndex);
				});
			}
		});
	}

	function initVideoPlayback() {
		document.querySelectorAll(".smart-home__play-icon").forEach((btn) => {
			btn.addEventListener("click", function () {
				const videoBlock = this.closest(".smart-home__video-block");
				if (!videoBlock) return;
				const video = videoBlock.querySelector("video");
				const poster = videoBlock.querySelector(".smart-home__video-poster");
				const rotatingText = videoBlock.querySelector(
					".smart-home__rotating-text",
				);
				if (video) {
					if (poster) poster.style.display = "none";
					video.style.display = "block";
					video.play();
					this.style.display = "none";
					if (rotatingText) rotatingText.style.display = "none";
				}
			});
		});
	}

	window.addEventListener("load", () => {
		updateScale();
		initSliders();
		initVideoPlayback();
	});
	window.addEventListener("resize", updateScale);
})();
