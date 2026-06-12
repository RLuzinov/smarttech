document.addEventListener("DOMContentLoaded", function () {
	const containers = document.querySelectorAll(".profile-tabs");
	const DESIGN_WIDTH = 1200;

	function updateScale() {
		const scaler = document.getElementById("profile-tabs-scaler");
		if (!scaler) return;

		const parent = scaler.parentElement;
		const currentWidth = scaler.clientWidth;

		if (window.innerWidth <= 640) {
			scaler.style.transform = "none";
			parent.style.height = "auto";
			scaler.style.removeProperty("--image-scale");
			return;
		}

		const scale = Math.min(currentWidth / DESIGN_WIDTH, 1);
		scaler.style.transform = `scale(${scale})`;
		// parent.style.height = scaler.scrollHeight * scale + "px";
	}

	function updateImageScale() {
		const scaler = document.getElementById("profile-tabs-scaler");
		if (!scaler || window.innerWidth <= 640) return;

		const currentWidth = scaler.clientWidth;
		let imageScale = 1;
		if (currentWidth > DESIGN_WIDTH) {
			const ratio = (currentWidth - DESIGN_WIDTH) / (1900 - DESIGN_WIDTH);
			imageScale = 1 + ratio * 0.5;
			if (imageScale > 1.5) imageScale = 1.5;
		}
		scaler.style.setProperty("--image-scale", imageScale);
	}

	function positionImages(container) {
		if (window.innerWidth <= 640) return;

		const images = container.querySelectorAll(".profile-tabs__image");
		if (!images.length) return;

		let top = 100;
		images.forEach((img, index) => {
			// Чередование left: 30px и 95px
			const left = index % 2 === 0 ? 150 : 225;
			img.style.left = left + "px";
			img.style.top = top + "px";

			if (index > 0) {
				top += 40;
			}
		});
	}

	function updateAll() {
		updateScale();
		updateImageScale();
		containers.forEach((container) => positionImages(container));
	}

	// Ховеры и мобильное отображение (без изменений)
	containers.forEach((container) => {
		const images = container.querySelectorAll(".profile-tabs__image");
		const items = container.querySelectorAll(".profile-tabs__item");

		function activateImage(index) {
			images.forEach((img, i) => {
				img.classList.toggle("active", i === index);
			});
		}

		if (window.innerWidth <= 640) {
			images.forEach((img) => img.classList.add("mobile-visible"));
		} else {
			images.forEach((img) => img.classList.remove("active"));
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
