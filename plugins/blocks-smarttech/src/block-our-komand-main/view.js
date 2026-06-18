(function () {
	const DESIGN_WIDTH = 1200;
	const SPEED = 60; // пикселей в секунду

	function updateScale() {
		document.querySelectorAll(".team-scaler").forEach((scaler) => {
			const parent = scaler.parentElement;
			const w = parent.clientWidth;
			scaler.style.zoom = w <= 640 ? "1" : w / DESIGN_WIDTH;
		});
	}

	function waitForImages(container) {
		const images = Array.from(container.querySelectorAll("img"));
		return Promise.all(
			images.map((img) => {
				if (img.complete) return Promise.resolve();
				return new Promise((resolve) => {
					img.onload = resolve;
					img.onerror = resolve; // не застреваем на битых картинках
				});
			}),
		);
	}

	function equalizeAndAnimate() {
		const marquees = document.querySelectorAll(".team__marquee");
		if (marquees.length === 0) return;

		// Ждём загрузки всех картинок в блоке
		const block = document.querySelector(
			".wp-block-blocks-smarttech-block-team",
		);
		const allImagesPromise = block ? waitForImages(block) : Promise.resolve();

		allImagesPromise.then(() => {
			const tracks = [];
			marquees.forEach((marquee) => {
				const track = marquee.querySelector(".team__track");
				if (!track) return;
				const firstSet = track.querySelector(".team__card-set");
				if (!firstSet) return;
				const cards = firstSet.querySelectorAll(".team__card");
				if (cards.length === 0) return;
				const cardNodes = Array.from(cards).map((c) => c.cloneNode(true));
				tracks.push({
					track,
					firstSet,
					cardCount: cards.length,
					cardNodes,
				});
			});

			if (tracks.length === 0) {
				setTimeout(equalizeAndAnimate, 200);
				return;
			}

			const maxCards = Math.max(...tracks.map((t) => t.cardCount));

			// Уравниваем количество карточек во всех строках
			tracks.forEach(({ firstSet, cardCount, cardNodes }) => {
				if (cardCount >= maxCards) return;
				firstSet.innerHTML = "";
				for (let i = 0; i < maxCards; i++) {
					const clone = cardNodes[i % cardCount].cloneNode(true);
					firstSet.appendChild(clone);
				}
			});

			// Дублируем набор для бесшовной анимации
			tracks.forEach(({ track, firstSet }) => {
				const allSets = track.querySelectorAll(".team__card-set");
				allSets.forEach((set, index) => {
					if (index > 0) set.remove();
				});
				const cloneSet = firstSet.cloneNode(true);
				track.appendChild(cloneSet);
			});

			// Измеряем ширину набора
			const tracksData = [];
			tracks.forEach(({ track, firstSet }) => {
				const setWidth = firstSet.scrollWidth;
				if (setWidth <= 0) return;
				tracksData.push({ track, setWidth, offset: 0 });
			});

			if (tracksData.length === 0) {
				setTimeout(equalizeAndAnimate, 200);
				return;
			}

			let lastTime = performance.now();

			function animate(now) {
				const delta = (now - lastTime) / 1000;
				lastTime = now;

				tracksData.forEach((data) => {
					data.offset -= SPEED * delta;
					if (data.offset <= -data.setWidth) {
						data.offset += data.setWidth;
					}
					data.track.style.transform = `translateX(${data.offset}px)`;
				});

				requestAnimationFrame(animate);
			}

			requestAnimationFrame(animate);
		});
	}

	window.addEventListener("load", () => {
		updateScale();
		equalizeAndAnimate();
	});
	window.addEventListener("resize", updateScale);
})();
