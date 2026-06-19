(function () {
	const DESIGN_WIDTH = 1200;

	function updateScale() {
		document.querySelectorAll(".cta-scaler").forEach((scaler) => {
			const parent = scaler.parentElement;
			const w = parent.clientWidth;
			scaler.style.zoom = w <= 640 ? "1" : w / DESIGN_WIDTH;
		});
	}

	function initMobileStackReveal() {
		if (window.innerWidth > 640) return;

		const wrapper = document.querySelector(
			".wp-block-blocks-smarttech-block-cta",
		);
		const block = document.querySelector(".cta-block");
		const card = document.querySelector(".cta__card");
		if (!wrapper || !block || !card) return;

		let phase = "before"; // before | animating | done
		let accumulated = 0; // накопленная дельта скролла во время анимации
		const SCROLL_DISTANCE = window.innerHeight * 0.8; // px для полного выезда

		// Стартовая позиция карточки — за нижним краем
		card.style.transform = "translateY(100%)";
		card.style.willChange = "transform";

		// Placeholder занимает место блока пока он fixed
		const placeholder = document.createElement("div");
		placeholder.style.display = "none";
		wrapper.after(placeholder);

		function setProgress(p) {
			// p: 0 → 1
			p = Math.max(0, Math.min(1, p));
			card.style.transform = `translateY(${(1 - p) * 100}%)`;
			return p;
		}

		function lock() {
			phase = "animating";
			accumulated = 0;

			// Фиксируем блок
			const rect = wrapper.getBoundingClientRect();
			const top = window.pageYOffset + rect.top;

			placeholder.style.cssText = `display:block; height:${wrapper.offsetHeight}px;`;

			wrapper.style.cssText =
				"position:fixed; top:0; left:0; width:100%; z-index:999;";
			block.style.minHeight = window.innerHeight + "px";

			// Запрещаем скролл body
			document.body.style.overflow = "hidden";
			document.body.style.touchAction = "none";
		}

		function unlock() {
			phase = "done";

			// Снимаем fixed
			wrapper.style.cssText = "";
			block.style.minHeight = "";
			placeholder.style.cssText = "display:none;";
			card.style.transform = "translateY(0)";

			// Возвращаем скролл
			document.body.style.overflow = "";
			document.body.style.touchAction = "";

			// Скроллим за блок
			const bottom =
				wrapper.getBoundingClientRect().bottom + window.pageYOffset;
			window.scrollTo({ top: bottom, behavior: "instant" });
		}

		function feedDelta(delta) {
			if (phase === "done") return;

			if (phase === "before") {
				// Проверяем — блок достиг верха вьюпорта?
				const rect = wrapper.getBoundingClientRect();
				if (rect.top <= 1) {
					lock();
				} else {
					return;
				}
			}

			// phase === "animating"
			accumulated += delta;
			const p = setProgress(accumulated / SCROLL_DISTANCE);
			if (p >= 1) unlock();
		}

		// ── wheel (десктоп/мышь) ──────────────────────────────────────────────
		window.addEventListener(
			"wheel",
			(e) => {
				if (phase === "before") {
					const rect = wrapper.getBoundingClientRect();
					if (rect.top > 1) return; // блок не достиг верха
				}
				if (phase === "done") return;

				e.preventDefault();
				feedDelta(e.deltaY);
			},
			{ passive: false },
		);

		// ── touch ─────────────────────────────────────────────────────────────
		let touchStartY = 0;
		let lastTouchY = 0;

		window.addEventListener(
			"touchstart",
			(e) => {
				touchStartY = e.touches[0].clientY;
				lastTouchY = touchStartY;
			},
			{ passive: true },
		);

		window.addEventListener(
			"touchmove",
			(e) => {
				if (phase === "before") {
					const rect = wrapper.getBoundingClientRect();
					if (rect.top > 1) return;
				}
				if (phase === "done") return;

				e.preventDefault();
				const y = e.touches[0].clientY;
				const delta = lastTouchY - y; // вниз = положительная дельта
				lastTouchY = y;
				feedDelta(delta);
			},
			{ passive: false },
		);

		// ── обычный скролл (клавиши, тачпад без wheel) ───────────────────────
		window.addEventListener(
			"scroll",
			() => {
				if (phase !== "before") return;
				const rect = wrapper.getBoundingClientRect();
				if (rect.top <= 1) lock();
			},
			{ passive: true },
		);
	}

	window.addEventListener("load", () => {
		// updateScale();
		initMobileStackReveal();
	});
	// window.addEventListener("resize", updateScale);
})();
