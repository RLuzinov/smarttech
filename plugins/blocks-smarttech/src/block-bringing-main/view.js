(function () {
	const DESIGN_WIDTH = 1200;

	function updateScale() {
		document.querySelectorAll(".projects-scaler").forEach((scaler) => {
			const parent = scaler.parentElement;
			const w = parent.clientWidth;
			scaler.style.zoom = w <= 640 ? "1" : w / DESIGN_WIDTH;
		});
	}

	function setMarqueeVariables() {
		document.querySelectorAll(".projects__card").forEach((card) => {
			const inner = card.querySelector(".projects__card-inner");
			if (!inner) return;
			const set = inner.querySelector(".projects__card-set");
			if (!set) return;

			const height = set.scrollHeight;
			inner.style.setProperty("--set-height", height + "px");
			const speed = height / 40; // 40px/с
			inner.style.setProperty("--scroll-speed", speed + "s");
		});
	}

	function initLinesAnimation() {
		// Добавляем класс animated сразу ко всем блокам (линии появятся мгновенно)
		document.querySelectorAll(".projects-block").forEach((block) => {
			block.classList.add("animated");
		});
	}

	window.addEventListener("load", () => {
		// updateScale();
		setMarqueeVariables();
		initLinesAnimation();
	});

	window.addEventListener("resize", () => {
		// updateScale();
		setMarqueeVariables();
	});
})();
