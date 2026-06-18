// edit.js – активный второй таб (индекс 1)
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
} from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	TextareaControl,
	Button,
} from "@wordpress/components";
import { useState } from "@wordpress/element";

export default function Edit({ attributes, setAttributes }) {
	const { sectionTitle, sectionDescription, tabButtons, tabs } = attributes;
	const [activeTab, setActiveTab] = useState(1); // <-- теперь 1
	const blockProps = useBlockProps();

	const updateTabButton = (index, value) => {
		const newButtons = tabButtons.map((btn, i) => (i === index ? value : btn));
		setAttributes({ tabButtons: newButtons });
	};

	const addLogo = (tabIndex) => {
		const newTabs = tabs.map((tab, i) =>
			i === tabIndex ? { ...tab, logos: [...tab.logos, { url: "" }] } : tab,
		);
		setAttributes({ tabs: newTabs });
	};

	const updateLogo = (tabIndex, logoIndex, url) => {
		const newTabs = tabs.map((tab, i) => {
			if (i === tabIndex) {
				const newLogos = tab.logos.map((logo, j) =>
					j === logoIndex ? { url } : logo,
				);
				return { ...tab, logos: newLogos };
			}
			return tab;
		});
		setAttributes({ tabs: newTabs });
	};

	const removeLogo = (tabIndex, logoIndex) => {
		const newTabs = tabs.map((tab, i) =>
			i === tabIndex
				? { ...tab, logos: tab.logos.filter((_, j) => j !== logoIndex) }
				: tab,
		);
		setAttributes({ tabs: newTabs });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Текст блока")}>
					<TextControl
						label={__("Заголовок")}
						value={sectionTitle}
						onChange={(v) => setAttributes({ sectionTitle: v })}
					/>
					<TextareaControl
						label={__("Описание")}
						value={sectionDescription}
						onChange={(v) => setAttributes({ sectionDescription: v })}
					/>
				</PanelBody>
				<PanelBody title={__("Кнопки вкладок")}>
					{tabButtons.map((btn, idx) => (
						<TextControl
							key={idx}
							label={`Кнопка ${idx + 1}`}
							value={btn}
							onChange={(v) => updateTabButton(idx, v)}
						/>
					))}
				</PanelBody>
				{tabs.map((tab, tabIndex) => (
					<PanelBody
						key={tabIndex}
						title={`Вкладка "${tabButtons[tabIndex]}"`}
						initialOpen={false}
					>
						{tab.logos.map((logo, logoIndex) => (
							<div
								key={logoIndex}
								style={{
									marginBottom: 10,
									border: "1px solid #eee",
									padding: 8,
								}}
							>
								{logo.url && (
									<img
										src={logo.url}
										alt=""
										style={{
											width: "100%",
											maxHeight: 100,
											objectFit: "contain",
											marginBottom: 8,
										}}
									/>
								)}
								<MediaUpload
									onSelect={(media) =>
										updateLogo(tabIndex, logoIndex, media.url)
									}
									allowedTypes={["image"]}
									value={logo.url}
									render={({ open }) => (
										<Button variant="secondary" onClick={open}>
											{logo.url ? __("Заменить SVG") : __("Добавить SVG")}
										</Button>
									)}
								/>
								<Button
									isDestructive
									onClick={() => removeLogo(tabIndex, logoIndex)}
								>
									{__("Удалить")}
								</Button>
							</div>
						))}
						<Button variant="primary" onClick={() => addLogo(tabIndex)}>
							{__("Добавить логотип")}
						</Button>
					</PanelBody>
				))}
			</InspectorControls>

			<div {...blockProps}>
				<div className="partner-scaler" id="partner-scaler">
					<div className="partner-block">
						<div className="partner__header">
							<div className="partner__text">
								<h2 className="partner__title">{sectionTitle}</h2>
								<p className="partner__desc">{sectionDescription}</p>
							</div>
							<div className="partner__tabs-buttons">
								{tabButtons.map((btn, idx) => (
									<button
										key={idx}
										className={`partner__tab-btn${
											activeTab === idx ? " partner__tab-btn--active" : ""
										}`}
										onClick={() => setActiveTab(idx)}
									>
										{btn}
									</button>
								))}
							</div>
						</div>

						<div className="partner__tabs-content">
							{tabs.map((tab, tabIndex) => (
								<div
									key={tabIndex}
									className={`partner__tab-panel${
										activeTab === tabIndex ? " partner__tab-panel--active" : ""
									}`}
									style={{ display: activeTab === tabIndex ? "block" : "none" }}
								>
									<div className="partner__logos-grid">
										<div className="partner__lines-container">
											<div className="partner__h-line partner__h-line--top" />
											<div className="partner__v-line partner__v-line--top-left" />
											<div className="partner__v-line partner__v-line--top-right" />
											<div className="partner__h-line partner__h-line--bottom" />
											<div className="partner__v-line partner__v-line--bottom-left" />
											<div className="partner__v-line partner__v-line--bottom-right" />
										</div>
										{tab.logos.map((logo, logoIndex) => (
											<div key={logoIndex} className="partner__logo-item">
												{logo.url && <img src={logo.url} alt="" />}
											</div>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
