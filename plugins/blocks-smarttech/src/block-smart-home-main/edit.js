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
	SelectControl,
} from "@wordpress/components";
import { useState } from "@wordpress/element";

export default function Edit({ attributes, setAttributes }) {
	const { sectionTitle, sectionDescription, rows } = attributes;
	const [slideIndices, setSlideIndices] = useState(rows.map(() => 0));

	const blockProps = useBlockProps();

	const updateRow = (rowIndex, key, value) => {
		const newRows = rows.map((row, i) =>
			i === rowIndex ? { ...row, [key]: value } : row,
		);
		setAttributes({ rows: newRows });
	};

	const updateColumn = (rowIndex, colIndex, key, value) => {
		const newRows = rows.map((row, i) => {
			if (i === rowIndex) {
				const newCols = row.columns.map((col, j) =>
					j === colIndex ? { ...col, [key]: value } : col,
				);
				return { ...row, columns: newCols };
			}
			return row;
		});
		setAttributes({ rows: newRows });
	};

	const addSlide = (rowIndex, colIndex) => {
		const newSlide = { type: "image", url: "", poster: "", rotatingText: "" };
		const newRows = rows.map((row, i) => {
			if (i === rowIndex) {
				const newCols = row.columns.map((col, j) =>
					j === colIndex ? { ...col, media: [...col.media, newSlide] } : col,
				);
				return { ...row, columns: newCols };
			}
			return row;
		});
		setAttributes({ rows: newRows });
	};

	const removeSlide = (rowIndex, colIndex, slideIndex) => {
		const newRows = rows.map((row, i) => {
			if (i === rowIndex) {
				const newCols = row.columns.map((col, j) =>
					j === colIndex
						? {
								...col,
								media: col.media.filter((_, k) => k !== slideIndex),
						  }
						: col,
				);
				return { ...row, columns: newCols };
			}
			return row;
		});
		setAttributes({ rows: newRows });
		// сдвигаем индекс текущего слайда, если удалили активный
		const newSlides = rows[rowIndex].columns[colIndex].media.filter(
			(_, k) => k !== slideIndex,
		);
		setSlideIndices((prev) => {
			const newIndices = [...prev];
			if (newIndices[rowIndex] >= newSlides.length) {
				newIndices[rowIndex] = Math.max(0, newSlides.length - 1);
			}
			return newIndices;
		});
	};

	const updateSlide = (rowIndex, colIndex, slideIndex, key, value) => {
		const newRows = rows.map((row, i) => {
			if (i === rowIndex) {
				const newCols = row.columns.map((col, j) =>
					j === colIndex
						? {
								...col,
								media: col.media.map((slide, k) =>
									k === slideIndex ? { ...slide, [key]: value } : slide,
								),
						  }
						: col,
				);
				return { ...row, columns: newCols };
			}
			return row;
		});
		setAttributes({ rows: newRows });
	};

	// Рендер слайдера для редактора (одна колонка)
	const renderSlider = (rowIndex, colIndex, column) => {
		const currentIndex = slideIndices[rowIndex] || 0;
		const slides = column.media || [];
		const currentSlide = slides[currentIndex];

		return (
			<div className="smart-home__slider">
				<div className="smart-home__slider-viewport">
					{currentSlide && (
						<div className="smart-home__slide">
							{currentSlide.type === "video" ? (
								<div className="smart-home__video-block">
									{currentSlide.poster && (
										<img
											src={currentSlide.poster}
											alt=""
											className="smart-home__video-poster"
										/>
									)}
									<div className="smart-home__play-icon">
										<svg width="30" height="21" viewBox="0 0 30 21" fill="none">
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M19.3131 10.9002L12.5578 14.6051C12.2643 14.7639 12 14.5512 12 14.2178V6.6123C12 6.27422 12.2725 6.06211 12.5666 6.2291L19.3682 10.1291C19.6688 10.3008 19.6178 10.735 19.3131 10.9002ZM30 6.53086C30 2.92383 27.0762 0 23.4697 0H6.53086C2.92441 0 0 2.92383 0 6.53086V14.4691C0 18.0762 2.92441 21 6.53086 21H23.4697C27.0762 21 30 18.0762 30 14.4691V6.53086Z"
												fill="white"
											/>
										</svg>
									</div>
									{currentSlide.rotatingText && (
										<div className="smart-home__rotating-text">
											<svg
												viewBox="0 0 200 200"
												className="smart-home__rotating-svg"
											>
												<defs>
													<path
														id={`rotating-path-${rowIndex}-${colIndex}`}
														d="M100,40 a60,60 0 1,1 -0.1,0"
													/>
												</defs>
												<text fontSize="14" fill="white" fontWeight="bold">
													<textPath
														href={`#rotating-path-${rowIndex}-${colIndex}`}
														startOffset="0%"
													>
														{currentSlide.rotatingText}
													</textPath>
												</text>
											</svg>
										</div>
									)}
								</div>
							) : (
								currentSlide.url && (
									<img
										src={currentSlide.url}
										alt=""
										className="smart-home__slide-image"
									/>
								)
							)}
						</div>
					)}
				</div>
				{slides.length > 1 && (
					<div className="smart-home__slider-arrows">
						<button
							className="smart-home__arrow smart-home__arrow--left"
							onClick={() =>
								setSlideIndices((prev) => {
									const newIndices = [...prev];
									newIndices[rowIndex] =
										newIndices[rowIndex] === 0
											? slides.length - 1
											: newIndices[rowIndex] - 1;
									return newIndices;
								})
							}
						>
							‹
						</button>
						<button
							className="smart-home__arrow smart-home__arrow--right"
							onClick={() =>
								setSlideIndices((prev) => {
									const newIndices = [...prev];
									newIndices[rowIndex] =
										newIndices[rowIndex] === slides.length - 1
											? 0
											: newIndices[rowIndex] + 1;
									return newIndices;
								})
							}
						>
							›
						</button>
					</div>
				)}
			</div>
		);
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
				{rows.map((row, rowIndex) => (
					<PanelBody
						key={rowIndex}
						title={`Строка ${rowIndex + 1}`}
						initialOpen={false}
					>
						{row.columns.map((col, colIndex) => (
							<div
								key={colIndex}
								style={{
									marginBottom: 20,
									border: "1px solid #ddd",
									padding: 10,
								}}
							>
								<h4>Колонка {colIndex + 1}</h4>
								<TextControl
									label={__("Название")}
									value={col.title}
									onChange={(v) => updateColumn(rowIndex, colIndex, "title", v)}
								/>
								<TextControl
									label={__("Текст кнопки")}
									value={col.buttonText}
									onChange={(v) =>
										updateColumn(rowIndex, colIndex, "buttonText", v)
									}
								/>
								<TextControl
									label={__("Ссылка кнопки")}
									value={col.buttonUrl}
									onChange={(v) =>
										updateColumn(rowIndex, colIndex, "buttonUrl", v)
									}
								/>
								<h5>Медиа (слайды)</h5>
								{col.media.map((slide, slideIndex) => (
									<div
										key={slideIndex}
										style={{
											marginBottom: 10,
											padding: 8,
											border: "1px solid #eee",
										}}
									>
										<SelectControl
											label={__("Тип")}
											value={slide.type}
											options={[
												{ label: "Изображение", value: "image" },
												{ label: "Видео", value: "video" },
											]}
											onChange={(v) =>
												updateSlide(rowIndex, colIndex, slideIndex, "type", v)
											}
										/>
										<MediaUpload
											onSelect={(media) =>
												updateSlide(
													rowIndex,
													colIndex,
													slideIndex,
													"url",
													media.url,
												)
											}
											allowedTypes={
												slide.type === "video" ? ["video", "image"] : ["image"]
											}
											value={slide.url}
											render={({ open }) => (
												<Button variant="secondary" onClick={open}>
													{slide.url
														? __("Заменить медиа")
														: __("Добавить медиа")}
												</Button>
											)}
										/>
										{slide.type === "video" && (
											<>
												<MediaUpload
													onSelect={(media) =>
														updateSlide(
															rowIndex,
															colIndex,
															slideIndex,
															"poster",
															media.url,
														)
													}
													allowedTypes={["image"]}
													value={slide.poster}
													render={({ open }) => (
														<Button variant="secondary" onClick={open}>
															{slide.poster
																? __("Заменить постер")
																: __("Добавить постер")}
														</Button>
													)}
												/>
												<TextControl
													label={__("Вращающийся текст")}
													value={slide.rotatingText}
													onChange={(v) =>
														updateSlide(
															rowIndex,
															colIndex,
															slideIndex,
															"rotatingText",
															v,
														)
													}
												/>
											</>
										)}
										<Button
											isDestructive
											onClick={() =>
												removeSlide(rowIndex, colIndex, slideIndex)
											}
										>
											{__("Удалить слайд")}
										</Button>
									</div>
								))}
								<Button
									variant="primary"
									onClick={() => addSlide(rowIndex, colIndex)}
								>
									{__("Добавить слайд")}
								</Button>
							</div>
						))}
					</PanelBody>
				))}
			</InspectorControls>

			<div {...blockProps}>
				<div className="smart-home-scaler" id="smart-home-scaler">
					<div className="smart-home-block">
						<h2 className="smart-home__title">{sectionTitle}</h2>
						<p className="smart-home__description">{sectionDescription}</p>

						{rows.map((row, rowIndex) => (
							<div
								key={rowIndex}
								className={`smart-home__row smart-home__row--${row.layout}`}
							>
								{/* Если первая строка – сначала текст, потом колонки */}
								{row.layout === "first" && (
									<div className="smart-home__text-col">
										{/* текст уже вынесен выше, поэтому просто пусто? Нет, в первой строке текст идет отдельно. На самом деле в макете: первая строка: две колонки, левая - текст, правая - слайдер. Поэтому здесь нужно разместить текст внутри первой строки. Переделаем структуру. */}
									</div>
								)}
								{/* Колонки строки */}
								{row.columns.map((col, colIndex) => (
									<div
										key={colIndex}
										className={`smart-home__col smart-home__col--w${col.width}`}
									>
										{renderSlider(rowIndex, colIndex, col)}
										<div className="smart-home__card-info">
											<h3 className="smart-home__card-title">{col.title}</h3>
											<a
												href={col.buttonUrl}
												className="smart-home__card-button"
											>
												{col.buttonText}
											</a>
										</div>
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
