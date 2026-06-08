import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	RichText,
} from "@wordpress/block-editor";
import {
	PanelBody,
	ToggleControl,
	TextControl,
	Button,
} from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
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

	const blockProps = useBlockProps({
		style: {
			backgroundColor: bgColor,
			borderBottom,
			overflow: isOverlay ? "visible" : "hidden",
		},
	});

	const onSelectLogo = (media) => {
		if (isOverlay) {
			setAttributes({ logoUrl: media.url });
		} else {
			setAttributes({ logoUrlDark: media.url });
		}
	};

	// Функция обновления пункта меню
	const updateMenuItem = (index, key, value) => {
		const newItems = menuItems.map((item, i) =>
			i === index ? { ...item, [key]: value } : item,
		);
		setAttributes({ menuItems: newItems });
	};

	const addMenuItem = () => {
		setAttributes({
			menuItems: [...menuItems, { label: "Новый пункт", url: "#" }],
		});
	};

	const removeMenuItem = (index) => {
		setAttributes({
			menuItems: menuItems.filter((_, i) => i !== index),
		});
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Header Style", "blocks-smarttech")}>
					<ToggleControl
						label={
							isOverlay
								? __("Transparent overlay", "blocks-smarttech")
								: __("Solid background", "blocks-smarttech")
						}
						checked={!isOverlay}
						onChange={(value) =>
							setAttributes({
								headerStyle: value ? "solid" : "overlay",
							})
						}
					/>
				</PanelBody>
				<PanelBody title={__("Logo", "blocks-smarttech")}>
					<MediaUpload
						onSelect={onSelectLogo}
						allowedTypes={["image"]}
						value={activeLogo}
						render={({ open }) => (
							<Button variant="secondary" onClick={open}>
								{__("Choose logo", "blocks-smarttech")}
							</Button>
						)}
					/>
				</PanelBody>
				<PanelBody title={__("Contact & Language", "blocks-smarttech")}>
					<TextControl
						label={__("Phone number", "blocks-smarttech")}
						value={phoneNumber}
						onChange={(value) => setAttributes({ phoneNumber: value })}
					/>
					<TextControl
						label={__("Language button text", "blocks-smarttech")}
						value={languageText}
						onChange={(value) => setAttributes({ languageText: value })}
					/>
					<TextControl
						label={__("Language link", "blocks-smarttech")}
						value={languageUrl}
						onChange={(value) => setAttributes({ languageUrl: value })}
					/>
				</PanelBody>
				<PanelBody
					title={__("Menu Items", "blocks-smarttech")}
					initialOpen={false}
				>
					{menuItems.map((item, index) => (
						<div
							key={index}
							style={{
								marginBottom: "12px",
								borderBottom: "1px solid #eee",
								paddingBottom: "8px",
							}}
						>
							<TextControl
								label={__("Label")}
								value={item.label}
								onChange={(value) => updateMenuItem(index, "label", value)}
							/>
							<TextControl
								label={__("URL")}
								value={item.url}
								onChange={(value) => updateMenuItem(index, "url", value)}
							/>
							<Button isDestructive onClick={() => removeMenuItem(index)}>
								{__("Remove")}
							</Button>
						</div>
					))}
					<Button variant="primary" onClick={addMenuItem}>
						{__("Add Item")}
					</Button>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div
					className={`st-header__container ${
						isOverlay ? "st-header--overlay" : "st-header--solid"
					}`}
					style={{ color: textColor }}
				>
					{/* Логотип */}
					<a className="st-header__logo" href="/">
						{activeLogo ? (
							<img src={activeLogo} alt="Logo" />
						) : (
							<span className="st-header__logo-placeholder">Logo</span>
						)}
					</a>

					{/* Меню */}
					<nav className="st-header__menu">
						<ul className="st-header__menu-list">
							{menuItems.map((item, index) => (
								<li key={index}>
									<a
										href={item.url}
										style={{
											color: textColor,
											textDecoration: "none",
										}}
									>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</nav>

					{/* Телефон */}
					<a
						className="st-header__phone"
						href={`tel:${phoneNumber.replace(/[^0-9+]/g, "")}`}
						style={{ color: textColor, textDecoration: "none" }}
					>
						{phoneNumber}
					</a>

					{/* Язык */}
					<a
						className="st-header__lang"
						href={languageUrl}
						style={{ color: textColor, textDecoration: "none" }}
					>
						{languageText}
					</a>

					{/* Гамбургер (мобильное меню) */}
					<button
						className="st-header__burger"
						aria-label="Menu"
						data-action="toggle-menu"
						style={{ color: textColor }}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</div>
		</>
	);
}
