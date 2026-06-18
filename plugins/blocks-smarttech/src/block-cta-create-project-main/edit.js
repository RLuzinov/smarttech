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
	const {
		backgroundImageUrl,
		sectionTitle,
		cardImageUrl,
		description,
		buttonText,
		buttonUrl,
	} = attributes;
	const blockProps = useBlockProps();

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Фон")}>
					<MediaUpload
						onSelect={(media) =>
							setAttributes({ backgroundImageUrl: media.url })
						}
						allowedTypes={["image"]}
						value={backgroundImageUrl}
						render={({ open }) => (
							<div>
								{backgroundImageUrl && (
									<img
										src={backgroundImageUrl}
										alt=""
										style={{ width: "100%", marginBottom: 8, display: "block" }}
									/>
								)}
								<Button variant="secondary" onClick={open}>
									{backgroundImageUrl ? __("Заменить фон") : __("Выбрать фон")}
								</Button>
							</div>
						)}
					/>
				</PanelBody>
				<PanelBody title={__("Заголовок и описание")}>
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
				<PanelBody title={__("Картинка в карточке")}>
					<MediaUpload
						onSelect={(media) => setAttributes({ cardImageUrl: media.url })}
						allowedTypes={["image"]}
						value={cardImageUrl}
						render={({ open }) => (
							<div>
								{cardImageUrl && (
									<img
										src={cardImageUrl}
										alt=""
										style={{
											width: 150,
											height: 150,
											objectFit: "cover",
											borderRadius: "50%",
											marginBottom: 8,
										}}
									/>
								)}
								<Button variant="secondary" onClick={open}>
									{cardImageUrl
										? __("Заменить картинку")
										: __("Выбрать картинку")}
								</Button>
							</div>
						)}
					/>
				</PanelBody>
				<PanelBody title={__("Кнопка")}>
					<TextControl
						label={__("Текст кнопки")}
						value={buttonText}
						onChange={(v) => setAttributes({ buttonText: v })}
					/>
					<TextControl
						label={__("Ссылка кнопки")}
						value={buttonUrl}
						onChange={(v) => setAttributes({ buttonUrl: v })}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div className="cta-scaler" id="cta-scaler">
					<div
						className="cta-block"
						style={{
							backgroundImage: backgroundImageUrl
								? `url(${backgroundImageUrl})`
								: "none",
						}}
					>
						<div className="cta__card">
							<h2 className="cta__title">{sectionTitle}</h2>
							{cardImageUrl && (
								<img src={cardImageUrl} alt="" className="cta__card-image" />
							)}
							<p className="cta__desc">{description}</p>
							<a href={buttonUrl} className="cta__button">
								{buttonText}
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
