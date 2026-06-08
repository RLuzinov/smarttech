document.addEventListener("DOMContentLoaded", () => {
	const animateHeaders = document.querySelectorAll(
		".st-header--overlay .st-header__menu a, .st-header--overlay .st-header__phone, .st-header--overlay .st-header__lang",
	);
	animateHeaders.forEach((el) => {
		const text = el.innerText.trim();
		el.innerHTML = ""; // очищаем
		const wrapper = document.createElement("span");
		wrapper.style.display = "inline-block";
		text.split("").forEach((char) => {
			const span = document.createElement("span");
			span.className = "letter";
			span.textContent = char === " " ? "\u00A0" : char;
			wrapper.appendChild(span);
		});
		el.appendChild(wrapper);
	});
});
