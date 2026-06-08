document.addEventListener("DOMContentLoaded", function () {
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

		container.appendChild(createBlock(false)); // верхний (текущий цвет)
		container.appendChild(createBlock(true)); // нижний (зелёный)

		item.innerHTML = "";
		item.appendChild(container);

		// НЕ добавляем класс play – анимация только по hover
	});
});
