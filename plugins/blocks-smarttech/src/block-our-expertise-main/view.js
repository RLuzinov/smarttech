// function initScale() {
// 	const scalers = document.querySelectorAll(".expertise-scaler");
// 	if (!scalers.length) return;

// 	const DESIGN_WIDTH = 1200;

// 	function updateScale() {
// 		scalers.forEach((scaler) => {
// 			const parent = scaler.parentElement;
// 			const windowWidth = parent.clientWidth;
// 			if (windowWidth <= 640) {
// 				scaler.style.zoom = "1";
// 				return;
// 			}
// 			const scale = windowWidth / DESIGN_WIDTH;
// 			scaler.style.zoom = scale;
// 		});
// 	}

// 	updateScale();
// 	window.addEventListener("resize", updateScale);
// }

// if (document.readyState === "loading") {
// 	document.addEventListener("DOMContentLoaded", initScale);
// } else {
// 	initScale();
// }
