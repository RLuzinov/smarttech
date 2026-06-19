function initHeaderScaleAndAnimation() {
	const scalers = document.querySelectorAll(".header-scaler");
	if (!scalers.length) return;

	const DESIGN_WIDTH = 1200;

	// Масштабирование
	// function updateScale() {
	// 	scalers.forEach((scaler) => {
	// 		const parent = scaler.parentElement;
	// 		const windowWidth = parent.clientWidth;
	// 		if (windowWidth <= 640) {
	// 			scaler.style.zoom = "1";
	// 			return;
	// 		}
	// 		const scale = windowWidth / DESIGN_WIDTH;
	// 		scaler.style.zoom = scale;
	// 	});
	// }

	// updateScale();
	// window.addEventListener("resize", updateScale);

	// Letter‑by‑letter анимация (только для десктопного меню, язык и телефон)
	const items = document.querySelectorAll(
		".st-header__container > .st-header__menu-list a, .st-header__container > .st-header__lang, .st-header__container > .st-header__phone",
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

	// Мобильное меню
	const containers = document.querySelectorAll(".st-header__container");
	containers.forEach((container) => {
		const burger = container.querySelector(
			'[data-action="toggle-mobile-menu"]',
		);
		if (!burger) return;

		// Создаём popup при первом клике
		let popup = null;

		burger.addEventListener("click", () => {
			if (!popup) {
				popup = createMobilePopup(container);
				document.body.appendChild(popup);
				// Ждём следующий кадр, чтобы браузер зафиксировал начальное положение
				requestAnimationFrame(() => {
					popup.classList.add("active");
					document.body.style.overflow = "hidden";
				});
			} else {
				popup.classList.add("active");
				document.body.style.overflow = "hidden";
			}
		});
	});

	function createMobilePopup(container) {
		const logoUrl = container.dataset.logoUrl || "";
		const phone = container.dataset.phoneNumber || "";
		const menuItems = JSON.parse(container.dataset.menuItems || "[]");
		const bgImage = container.dataset.mobileMenuBg || "";

		const popup = document.createElement("div");
		popup.className = "st-header__mobile-popup";

		const inner = document.createElement("div");
		inner.className = "st-header__mobile-popup-inner";
		if (bgImage) {
			inner.style.backgroundImage = `url(${bgImage})`;
		}

		// Верхняя строка: логотип и close
		const header = document.createElement("div");
		header.className = "st-header__mobile-popup-header";

		const logo = document.createElement("a");
		logo.className = "st-header__logo";
		logo.href = "/";
		if (logoUrl) {
			const img = document.createElement("img");
			img.src = logoUrl;
			img.alt = "Logo";
			logo.appendChild(img);
		} else {
			logo.textContent = "Logo";
		}
		header.appendChild(logo);

		const closeBtn = document.createElement("button");
		closeBtn.className = "st-header__mobile-popup-close";
		closeBtn.setAttribute("aria-label", "Close menu");
		closeBtn.addEventListener("click", () => {
			popup.classList.remove("active");
			document.body.style.overflow = "";
		});
		header.appendChild(closeBtn);

		inner.appendChild(header);

		// Меню
		const nav = document.createElement("nav");
		nav.className = "st-header__mobile-popup-menu";
		const ul = document.createElement("ul");
		menuItems.forEach((item) => {
			const li = document.createElement("li");
			const a = document.createElement("a");
			a.href = item.url;
			a.textContent = item.label;
			a.addEventListener("click", () => {
				popup.classList.remove("active");
				document.body.style.overflow = "";
			});
			li.appendChild(a);
			ul.appendChild(li);
		});
		nav.appendChild(ul);
		inner.appendChild(nav);

		// Номер телефона
		const phoneLink = document.createElement("a");
		phoneLink.className = "st-header__mobile-popup-phone";
		phoneLink.href = `tel:${phone.replace(/[^0-9+]/g, "")}`;
		phoneLink.textContent = phone;
		inner.appendChild(phoneLink);

		popup.appendChild(inner);

		// Закрытие по клику на фон
		popup.addEventListener("click", (e) => {
			if (e.target === popup) {
				popup.classList.remove("active");
				document.body.style.overflow = "";
			}
		});

		return popup;
	}
}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", initHeaderScaleAndAnimation);
} else {
	initHeaderScaleAndAnimation();
}
