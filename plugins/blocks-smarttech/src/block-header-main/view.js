function initHeaderScaleAndAnimation() {
	const scalers = document.querySelectorAll(".header-scaler");
	if (!scalers.length) return;

	const DESIGN_WIDTH = 1200;

	// Масштабирование
	function updateScale() {
		scalers.forEach((scaler) => {
			const parent = scaler.parentElement; // .st-header
			const windowWidth = parent.clientWidth;
			if (windowWidth <= 640) {
				scaler.style.zoom = "1";
				return;
			}
			const scale = windowWidth / DESIGN_WIDTH;
			scaler.style.zoom = scale;
		});
	}

	updateScale();
	window.addEventListener("resize", updateScale);

	// Letter‑by‑letter анимация
	const items = document.querySelectorAll(
		".st-header__menu-list a, .st-header__lang, .st-header__phone",
	);

	items.forEach((item) => {
		const text = item.textContent.trim();
		const container = document.createElement("span");
		container.className = "letterbyletter";

		const createBlock = (isLast) => {
			const block = document.createElement("span");
			block.className = "block" + (isLast ? " block-last" : "");
			text.split("").forEach((char, i) => {
				const span = document.createElement("span");
				span.className = "letter";
				span.textContent = char === " " ? "\u00A0" : char;
				span.style.transitionDelay = `${i * 0.015}s`;
				block.appendChild(span);
			});
			return block;
		};

		container.appendChild(createBlock(false));
		container.appendChild(createBlock(true));

		item.innerHTML = "";
		item.appendChild(container);
	});
}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", initHeaderScaleAndAnimation);
} else {
	initHeaderScaleAndAnimation();
}
