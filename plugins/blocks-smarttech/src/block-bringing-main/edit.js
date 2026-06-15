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

export default function Edit({ attributes, setAttributes }) {
	const { sectionTitle, description, columns } = attributes;
	const blockProps = useBlockProps();

	const addImage = (colIndex) => {
		const newColumns = columns.map((col, i) =>
			i === colIndex ? { ...col, images: [...col.images, { url: "" }] } : col,
		);
		setAttributes({ columns: newColumns });
	};

	const updateImage = (colIndex, imgIndex, url) => {
		const newColumns = columns.map((col, i) => {
			if (i === colIndex) {
				const newImages = col.images.map((img, j) =>
					j === imgIndex ? { url } : img,
				);
				return { ...col, images: newImages };
			}
			return col;
		});
		setAttributes({ columns: newColumns });
	};

	const removeImage = (colIndex, imgIndex) => {
		const newColumns = columns.map((col, i) =>
			i === colIndex
				? { ...col, images: col.images.filter((_, j) => j !== imgIndex) }
				: col,
		);
		setAttributes({ columns: newColumns });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Тексты")}>
					<TextControl
						label={__("Заголовок")}
						value={sectionTitle}
						onChange={(v) => setAttributes({ sectionTitle: v })}
					/>
					<TextareaControl
						label={__("Описание")}
						value={description}
						onChange={(v) => setAttributes({ description: v })}
					/>
				</PanelBody>
				<PanelBody title={__("Колонки с картинками")}>
					{columns.map((col, colIndex) => (
						<div
							key={colIndex}
							style={{
								marginBottom: 20,
								borderBottom: "1px solid #ccc",
								paddingBottom: 10,
							}}
						>
							<h4>
								Колонка {colIndex + 1} ({colIndex % 2 === 0 ? "вниз" : "вверх"})
							</h4>
							{col.images.map((img, imgIndex) => (
								<div key={imgIndex} style={{ marginBottom: 10 }}>
									<MediaUpload
										onSelect={(media) =>
											updateImage(colIndex, imgIndex, media.url)
										}
										allowedTypes={["image"]}
										value={img.url}
										render={({ open }) => (
											<Button variant="secondary" onClick={open}>
												{img.url ? __("Заменить") : __("Добавить картинку")}
											</Button>
										)}
									/>
									<Button
										isDestructive
										onClick={() => removeImage(colIndex, imgIndex)}
										style={{ marginLeft: 10 }}
									>
										{__("Удалить")}
									</Button>
								</div>
							))}
							<Button variant="primary" onClick={() => addImage(colIndex)}>
								{__("Добавить картинку")}
							</Button>
						</div>
					))}
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div className="projects-scaler" id="projects-scaler">
					<div className="projects-block">
						{/* Декоративные линии */}
						<div className="projects__line projects__line--top" />
						<div className="projects__line projects__line--title" />
						<div className="projects__line projects__line--bottom" />
						<div className="projects__vertical-line projects__vertical-line--left" />
						<div className="projects__vertical-line projects__vertical-line--right" />

						<h2 className="projects__title">{sectionTitle}</h2>
						<p className="projects__description">{description}</p>

						<div className="projects__cards-row">
							{columns.map((col, colIndex) => (
								<div
									key={colIndex}
									className={`projects__card${
										colIndex % 2 === 0
											? " projects__card--odd"
											: " projects__card--even"
									}`}
								>
									{col.images.map((img, imgIndex) => (
										<img
											key={imgIndex}
											src={img.url}
											alt=""
											className="projects__card-image"
										/>
									))}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
