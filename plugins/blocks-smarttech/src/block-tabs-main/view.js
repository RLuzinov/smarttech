document.addEventListener("DOMContentLoaded", function () {
	const DESIGN_WIDTH = 1200;

	function updateScale() {
		const scaler = document.getElementById("profile-tabs-scaler");
		if (!scaler) return;
		const parent = scaler.parentElement;
		const w = parent.clientWidth;
		scaler.style.zoom = w <= 640 ? "1" : w / DESIGN_WIDTH;
	}

	function positionImages(container) {
		if (window.innerWidth <= 640) return;

		const images = container.querySelectorAll(".profile-tabs__image");
		if (!images.length) return;

		let top = 100;
		images.forEach((img, index) => {
			const left = index % 2 === 0 ? 30 : 75;
			img.style.left = left + "px";
			img.style.top = top + "px";
			if (index > 0) top += 40;
		});
	}

	function updateAll() {
		// updateScale();
		document.querySelectorAll(".profile-tabs").forEach((container) => {
			positionImages(container);
		});
	}

	// Ховеры и мобильное отображение
	document.querySelectorAll(".profile-tabs").forEach((container) => {
		const images = container.querySelectorAll(".profile-tabs__image");
		const items = container.querySelectorAll(".profile-tabs__item");

		function activateImage(index) {
			images.forEach((img, i) => {
				img.classList.toggle("active", i === index);
			});
		}

		if (window.innerWidth <= 640) {
			images.forEach((img) => img.classList.add("mobile-visible"));
		}

		items.forEach((item) => {
			item.addEventListener("mouseenter", () => {
				if (window.innerWidth > 640) {
					const index = parseInt(item.getAttribute("data-tab-index"), 10);
					activateImage(index);
				}
			});
		});
	});

	updateAll();
	window.addEventListener("resize", updateAll);
});
