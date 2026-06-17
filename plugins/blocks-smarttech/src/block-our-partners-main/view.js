// view.js
(function () {
	const DESIGN_WIDTH = 1200;
	const TOP_OFFSET = 6;
	const BOTTOM_OFFSET = 5;

	function updateScale() {
		document.querySelectorAll(".partner-scaler").forEach((scaler) => {
			const parent = scaler.parentElement;
			const w = parent.clientWidth;
			scaler.style.zoom = w <= 640 ? "1" : w / DESIGN_WIDTH;
		});
	}

	function initTabs() {
		document.querySelectorAll(".partner__tab-btn").forEach((btn) => {
			btn.addEventListener("click", function () {
				const tabIndex = parseInt(this.dataset.tab, 10);
				document
					.querySelectorAll(".partner__tab-btn")
					.forEach((b) => b.classList.remove("partner__tab-btn--active"));
				this.classList.add("partner__tab-btn--active");

				document.querySelectorAll(".partner__tab-panel").forEach((panel) => {
					panel.classList.remove("partner__tab-panel--active");
					if (parseInt(panel.dataset.tab, 10) === tabIndex) {
						panel.classList.add("partner__tab-panel--active");
					}
				});

				setTimeout(drawLines, 50);
			});
		});
	}

	function drawLines() {
		const activePanel = document.querySelector(".partner__tab-panel--active");
		if (!activePanel) return;

		const grid = activePanel.querySelector(".partner__logos-grid");
		if (!grid) return;

		const linesContainer = grid.querySelector(".partner__lines-container");
		if (!linesContainer) return;

		grid
			.querySelectorAll(
				".partner__v-line--top-between, .partner__v-line--bottom-between, .partner__h-line--top-of-row, .partner__h-line--bottom-of-row, .partner__v-line--dynamic",
			)
			.forEach((el) => el.remove());

		const items = Array.from(grid.querySelectorAll(".partner__logo-item"));
		if (items.length === 0) return;

		const scaler = grid.closest(".partner-scaler");
		const zoom = scaler ? parseFloat(scaler.style.zoom) || 1 : 1;

		const gridRect = grid.getBoundingClientRect();
		const getRelRect = (item) => {
			const rect = item.getBoundingClientRect();
			return {
				top: (rect.top - gridRect.top) / zoom,
				bottom: (rect.bottom - gridRect.top) / zoom,
				left: (rect.left - gridRect.left) / zoom,
				right: (rect.right - gridRect.left) / zoom,
			};
		};

		const itemRects = items.map(getRelRect);

		const rows = [];
		itemRects.forEach((rect, idx) => {
			const relTop = rect.top;
			let row = rows.find((r) => Math.abs(r.relTop - relTop) < 2);
			if (!row) {
				row = { relTop, items: [] };
				rows.push(row);
			}
			row.items.push(idx);
		});

		rows.forEach((row) => {
			const indices = row.items;
			indices.sort((a, b) => itemRects[a].left - itemRects[b].left);
			for (let i = 0; i < indices.length - 1; i++) {
				const currentItem = items[indices[i]];
				addBetweenLinesToItem(currentItem);
			}
		});

		for (let r = 1; r < rows.length; r++) {
			const indices = rows[r].items;
			const minLeft = Math.min(...indices.map((i) => itemRects[i].left));
			const maxRight = Math.max(...indices.map((i) => itemRects[i].right));
			const topOfRow = rows[r].relTop;
			const lineY = topOfRow - TOP_OFFSET;

			if (lineY >= 0) {
				const hLine = document.createElement("div");
				hLine.className = "partner__h-line partner__h-line--top-of-row";
				hLine.style.top = lineY + "px";
				hLine.style.left = minLeft + "px";
				hLine.style.width = maxRight - minLeft + "px";
				linesContainer.appendChild(hLine);

				addDynamicVerticalLine(
					linesContainer,
					"partner__v-line--top-left",
					lineY - 19,
					minLeft,
				);
				addDynamicVerticalLine(
					linesContainer,
					"partner__v-line--top-right",
					lineY - 19,
					maxRight,
				);
			}
		}

		for (let r = 0; r < rows.length - 1; r++) {
			const currentIndices = rows[r].items;
			const rowBottom = Math.max(
				...currentIndices.map((i) => itemRects[i].bottom),
			);
			const lineY = rowBottom + BOTTOM_OFFSET;

			const minLeft = Math.min(...currentIndices.map((i) => itemRects[i].left));
			const maxRight = Math.max(
				...currentIndices.map((i) => itemRects[i].right),
			);

			if (lineY <= gridRect.height / zoom) {
				const hLine = document.createElement("div");
				hLine.className = "partner__h-line partner__h-line--bottom-of-row";
				hLine.style.top = lineY + "px";
				hLine.style.left = minLeft + "px";
				hLine.style.width = maxRight - minLeft + "px";
				linesContainer.appendChild(hLine);

				// const bottomOffset = window.innerWidth <= 640 ? 0 : 0;

				addDynamicVerticalLine(
					linesContainer,
					"partner__v-line--bottom-left",
					// lineY + bottomOffset,
					lineY,
					minLeft,
				);
				addDynamicVerticalLine(
					linesContainer,
					"partner__v-line--bottom-right",
					// lineY + bottomOffset,
					lineY,
					maxRight,
				);
			}
		}
	}

	function addDynamicVerticalLine(container, className, top, left) {
		const vLine = document.createElement("div");
		vLine.className = `partner__v-line partner__v-line--dynamic ${className}`;
		vLine.style.top = top + "px";
		vLine.style.left = left + "px";
		container.appendChild(vLine);
	}

	function addBetweenLinesToItem(item) {
		if (item.querySelector(".partner__v-line--top-between")) return;

		const topLine = document.createElement("div");
		topLine.className = "partner__v-line partner__v-line--top-between";
		topLine.style.top = "0px";
		topLine.style.right = "0px";

		const bottomLine = document.createElement("div");
		bottomLine.className = "partner__v-line partner__v-line--bottom-between";
		bottomLine.style.bottom = "0px";
		bottomLine.style.right = "0px";

		item.appendChild(topLine);
		item.appendChild(bottomLine);
	}

	window.addEventListener("load", () => {
		updateScale();
		initTabs();
		setTimeout(drawLines, 100);
	});

	window.addEventListener("resize", () => {
		updateScale();
		setTimeout(drawLines, 100);
	});
})();
