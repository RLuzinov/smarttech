import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		logoUrl,
		logoUrlDark,
		phoneNumber,
		languageText,
		languageUrl,
		headerStyle,
		menuItems,
	} = attributes;

	const isOverlay = headerStyle === "overlay";
	const activeLogo = isOverlay ? logoUrl : logoUrlDark || logoUrl;
	const textColor = isOverlay ? "#f5f5f5" : "#262626";
	const bgColor = isOverlay ? "transparent" : "#f6f6f6";
	const borderBottom = isOverlay ? "none" : "1px solid rgba(38, 38, 38, 0.3)";

	const blockProps = useBlockProps.save({
		className: `st-header st-header--${headerStyle}`,
		style: {
			backgroundColor: bgColor,
			borderBottom,
			overflow: isOverlay ? "visible" : "hidden",
		},
	});

	const letterSpans = (text) =>
		text.split("").map((char, i) => (
			<span className="letter" key={i}>
				{char === " " ? "\u00A0" : char}
			</span>
		));

	return (
		<div {...blockProps}>
			<div className="header-scaler" id="header-scaler">
				<div className="st-header__container" style={{ color: textColor }}>
					<a className="st-header__logo" href="/">
						{activeLogo ? (
							<img src={activeLogo} alt="Logo" />
						) : (
							<span className="st-header__logo-placeholder">Logo</span>
						)}
					</a>
					<nav className="st-header__menu">
						<ul className="st-header__menu-list">
							{menuItems.map((item, index) => (
								<li key={index}>
									<a href={item.url}>{letterSpans(item.label)}</a>
								</li>
							))}
						</ul>
					</nav>
					<a className="st-header__lang" href={languageUrl}>
						{letterSpans(languageText)}
					</a>
					<a
						className="st-header__phone"
						href={`tel:${phoneNumber.replace(/[^0-9+]/g, "")}`}
					>
						{letterSpans(phoneNumber)}
					</a>
					<button
						className="st-header__burger"
						aria-label="Menu"
						data-action="toggle-menu"
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</div>
		</div>
	);
}
