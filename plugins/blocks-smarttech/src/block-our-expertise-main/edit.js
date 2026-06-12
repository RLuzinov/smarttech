import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	Button,
	ToggleControl,
} from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const { sectionTitle, categories } = attributes;
	const blockProps = useBlockProps();

	const updateCategory = (catIndex, key, value) => {
		const newCategories = categories.map((cat, i) =>
			i === catIndex ? { ...cat, [key]: value } : cat,
		);
		setAttributes({ categories: newCategories });
	};

	const addCard = (catIndex) => {
		const newCard = {
			iconCount: 3,
			title: "Новая услуга",
			description: "Описание",
			buttonText: "Кнопка",
			buttonUrl: "#",
		};
		const newCategories = categories.map((cat, i) =>
			i === catIndex ? { ...cat, cards: [...cat.cards, newCard] } : cat,
		);
		setAttributes({ categories: newCategories });
	};

	const removeCard = (catIndex, cardIndex) => {
		const newCategories = categories.map((cat, i) =>
			i === catIndex
				? { ...cat, cards: cat.cards.filter((_, j) => j !== cardIndex) }
				: cat,
		);
		setAttributes({ categories: newCategories });
	};

	const updateCard = (catIndex, cardIndex, key, value) => {
		const newCategories = categories.map((cat, i) => {
			if (i !== catIndex) return cat;
			const newCards = cat.cards.map((card, j) =>
				j === cardIndex ? { ...card, [key]: value } : card,
			);
			return { ...cat, cards: newCards };
		});
		setAttributes({ categories: newCategories });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Заголовок секции")}>
					<TextControl
						label={__("Заголовок")}
						value={sectionTitle}
						onChange={(value) => setAttributes({ sectionTitle: value })}
					/>
				</PanelBody>
				{categories.map((cat, catIndex) => (
					<PanelBody
						key={catIndex}
						title={cat.title || `Категория ${catIndex + 1}`}
						initialOpen={false}
					>
						<TextControl
							label={__("Название категории")}
							value={cat.title}
							onChange={(value) => updateCategory(catIndex, "title", value)}
						/>
						<ToggleControl
							label={__("Показывать метрику")}
							checked={!!(cat.metricNumber || cat.metricLabel)}
							onChange={(checked) => {
								if (checked) {
									updateCategory(catIndex, "metricNumber", "0");
									updateCategory(catIndex, "metricLabel", "подпись");
								} else {
									updateCategory(catIndex, "metricNumber", "");
									updateCategory(catIndex, "metricLabel", "");
								}
							}}
						/>
						{cat.metricNumber || cat.metricLabel ? (
							<>
								<TextControl
									label={__("Число метрики")}
									value={cat.metricNumber}
									onChange={(value) =>
										updateCategory(catIndex, "metricNumber", value)
									}
								/>
								<TextControl
									label={__("Подпись метрики")}
									value={cat.metricLabel}
									onChange={(value) =>
										updateCategory(catIndex, "metricLabel", value)
									}
								/>
							</>
						) : null}
						<h4>{__("Карточки услуг")}</h4>
						{cat.cards.map((card, cardIndex) => (
							<div
								key={cardIndex}
								style={{
									marginBottom: "12px",
									border: "1px solid #ccc",
									padding: "8px",
								}}
							>
								<TextControl
									label={__("Заголовок карточки")}
									value={card.title}
									onChange={(value) =>
										updateCard(catIndex, cardIndex, "title", value)
									}
								/>
								<TextControl
									label={__("Описание")}
									value={card.description}
									onChange={(value) =>
										updateCard(catIndex, cardIndex, "description", value)
									}
								/>
								<TextControl
									label={__("Текст кнопки")}
									value={card.buttonText}
									onChange={(value) =>
										updateCard(catIndex, cardIndex, "buttonText", value)
									}
								/>
								<TextControl
									label={__("URL кнопки")}
									value={card.buttonUrl}
									onChange={(value) =>
										updateCard(catIndex, cardIndex, "buttonUrl", value)
									}
								/>
								<TextControl
									label={__("Кол-во иконок (квадратов)")}
									type="number"
									value={card.iconCount}
									onChange={(value) =>
										updateCard(
											catIndex,
											cardIndex,
											"iconCount",
											parseInt(value, 10) || 3,
										)
									}
								/>
								<Button
									isDestructive
									onClick={() => removeCard(catIndex, cardIndex)}
								>
									{__("Удалить карточку")}
								</Button>
							</div>
						))}
						<Button variant="secondary" onClick={() => addCard(catIndex)}>
							{__("Добавить карточку")}
						</Button>
					</PanelBody>
				))}
			</InspectorControls>

			<div {...blockProps}>
				<div className="expertise-block block-scaler">
					<h2 className="expertise__title">{sectionTitle}</h2>
					{categories.map((cat, catIndex) => (
						<div key={catIndex} className="expertise__category">
							<div className="expertise__category-header">
								<h3 className="expertise__category-title">{cat.title}</h3>
								{(cat.metricNumber || cat.metricLabel) && (
									<div className="expertise__metric">
										<span className="expertise__metric-number">
											{cat.metricNumber}
										</span>
										<span className="expertise__metric-label">
											{cat.metricLabel}
										</span>
									</div>
								)}
							</div>
							<div className="expertise__cards">
								{cat.cards.map((card, cardIndex) => (
									<div key={cardIndex} className="expertise__card">
										<div className="expertise__card-icons">
											{Array.from({ length: card.iconCount }).map((_, i) => (
												<span key={i} className="expertise__card-icon" />
											))}
										</div>
										<h4 className="expertise__card-title">{card.title}</h4>
										<p className="expertise__card-description">
											{card.description}
										</p>
										<a href={card.buttonUrl} className="expertise__card-button">
											{card.buttonText}
										</a>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
