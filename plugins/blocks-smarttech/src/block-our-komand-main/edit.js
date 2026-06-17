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
	ToggleControl,
} from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const { sectionTitle, sectionDescription, teamRows } = attributes;
	const blockProps = useBlockProps();

	const updateRow = (rowIndex, cardIndex, key, value) => {
		const newRows = teamRows.map((row, i) => {
			if (i === rowIndex) {
				return row.map((card, j) =>
					j === cardIndex ? { ...card, [key]: value } : card,
				);
			}
			return row;
		});
		setAttributes({ teamRows: newRows });
	};

	const addCard = (rowIndex) => {
		const newRows = teamRows.map((row, i) =>
			i === rowIndex
				? [...row, { imageUrl: "", name: "", position: "", doubleWidth: false }]
				: row,
		);
		setAttributes({ teamRows: newRows });
	};

	const removeCard = (rowIndex, cardIndex) => {
		const newRows = teamRows.map((row, i) =>
			i === rowIndex ? row.filter((_, j) => j !== cardIndex) : row,
		);
		setAttributes({ teamRows: newRows });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Заголовок и описание")}>
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
				{teamRows.map((row, rowIndex) => (
					<PanelBody
						key={rowIndex}
						title={`Строка ${rowIndex + 1}`}
						initialOpen={false}
					>
						{row.map((card, cardIndex) => (
							<div
								key={cardIndex}
								style={{
									marginBottom: 10,
									border: "1px solid #eee",
									padding: 8,
								}}
							>
								{/* Превью изображения */}
								{card.imageUrl && (
									<img
										src={card.imageUrl}
										alt=""
										style={{
											width: "100%",
											maxHeight: 100,
											objectFit: "cover",
											marginBottom: 8,
										}}
									/>
								)}
								<MediaUpload
									onSelect={(media) =>
										updateRow(rowIndex, cardIndex, "imageUrl", media.url)
									}
									allowedTypes={["image"]}
									value={card.imageUrl}
									render={({ open }) => (
										<Button variant="secondary" onClick={open}>
											{card.imageUrl
												? __("Заменить фото")
												: __("Добавить фото")}
										</Button>
									)}
								/>
								<ToggleControl
									label={__("Двойная ширина (368px)")}
									checked={card.doubleWidth}
									onChange={(v) =>
										updateRow(rowIndex, cardIndex, "doubleWidth", v)
									}
								/>
								<TextControl
									label={__("ФИО")}
									value={card.name}
									onChange={(v) => updateRow(rowIndex, cardIndex, "name", v)}
								/>
								<TextControl
									label={__("Должность")}
									value={card.position}
									onChange={(v) =>
										updateRow(rowIndex, cardIndex, "position", v)
									}
								/>
								<Button
									isDestructive
									onClick={() => removeCard(rowIndex, cardIndex)}
								>
									{__("Удалить")}
								</Button>
							</div>
						))}
						<Button variant="primary" onClick={() => addCard(rowIndex)}>
							{__("Добавить сотрудника")}
						</Button>
					</PanelBody>
				))}
			</InspectorControls>

			<div {...blockProps}>
				<div className="team-scaler" id="team-scaler">
					<div className="team-block">
						<h2 className="team__title">{sectionTitle}</h2>
						<div className="team__description">{sectionDescription}</div>
						{teamRows.map((row, rowIndex) => (
							<div key={rowIndex} className="team__marquee">
								<div className="team__track">
									<div className="team__card-set">
										{row.map((card, i) => (
											<div
												key={i}
												className={`team__card${
													card.doubleWidth ? " team__card--double" : ""
												}`}
												style={{ width: card.doubleWidth ? 368 : 179 }}
											>
												{card.imageUrl && (
													<img
														src={card.imageUrl}
														alt=""
														className="team__card-image"
													/>
												)}
												<div className="team__card-info">
													<div className="team__card-name">{card.name}</div>
													<div className="team__card-position">
														{card.position}
													</div>
												</div>
											</div>
										))}
									</div>
									<div className="team__card-set">
										{row.map((card, i) => (
											<div
												key={`copy-${i}`}
												className={`team__card${
													card.doubleWidth ? " team__card--double" : ""
												}`}
												style={{ width: card.doubleWidth ? 368 : 179 }}
											>
												{card.imageUrl && (
													<img
														src={card.imageUrl}
														alt=""
														className="team__card-image"
													/>
												)}
												<div className="team__card-info">
													<div className="team__card-name">{card.name}</div>
													<div className="team__card-position">
														{card.position}
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
