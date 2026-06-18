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
	RadioControl,
} from "@wordpress/components";
import { useState } from "@wordpress/element";

export default function Edit({ attributes, setAttributes }) {
	const {
		sectionTitle,
		sectionDescription,
		topCards,
		videoUrl,
		videoType,
		videoPlaceholderUrl,
		videoRotatingText,
		bottomCards,
		ctaText,
		buttonText,
		buttonUrl,
	} = attributes;

	const [mainVideoPlaying, setMainVideoPlaying] = useState(false);
	const blockProps = useBlockProps();

	const updateTopCard = (index, key, value) => {
		const newCards = topCards.map((card, i) =>
			i === index ? { ...card, [key]: value } : card,
		);
		setAttributes({ topCards: newCards });
	};

	const updateBottomCard = (index, key, value) => {
		const newCards = bottomCards.map((card, i) =>
			i === index ? { ...card, [key]: value } : card,
		);
		setAttributes({ bottomCards: newCards });
	};

	const isYouTube = (url) =>
		url && (url.includes("youtube.com") || url.includes("youtu.be"));

	const RotatingTextSvg = ({ text }) => (
		<svg viewBox="0 0 200 200" className="partner-prog__rotating-svg">
			<defs>
				<path id="rotating-path" d="M100,40 a60,60 0 1,1 -0.1,0" />
			</defs>
			<text fontSize="14" fill="white" fontWeight="bold">
				<textPath href="#rotating-path" startOffset="0%">
					{text}
				</textPath>
			</text>
		</svg>
	);

	const PlayIcon = () => (
		<svg width="30" height="21" viewBox="0 0 30 21" fill="none">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M19.3131 10.9002L12.5578 14.6051C12.2643 14.7639 12 14.5512 12 14.2178V6.6123C12 6.27422 12.2725 6.06211 12.5666 6.2291L19.3682 10.1291C19.6688 10.3008 19.6178 10.735 19.3131 10.9002ZM30 6.53086C30 2.92383 27.0762 0 23.4697 0H6.53086C2.92441 0 0 2.92383 0 6.53086V14.4691C0 18.0762 2.92441 21 6.53086 21H23.4697C27.0762 21 30 18.0762 30 14.4691V6.53086Z"
				fill="white"
			/>
		</svg>
	);

	const VideoBlock = ({
		videoSrc,
		placeholderSrc,
		isPlaying,
		onPlayClick,
		rotatingText,
	}) => (
		<div className="partner-prog__video-block">
			{!isPlaying && placeholderSrc && (
				<img
					src={placeholderSrc}
					alt=""
					className="partner-prog__video-poster"
				/>
			)}
			{isPlaying && videoSrc && (
				<>
					{isYouTube(videoSrc) ? (
						<iframe
							className="partner-prog__video-element"
							src={
								videoSrc.includes("embed")
									? videoSrc + "?autoplay=1"
									: videoSrc.includes("youtu.be")
									? "https://www.youtube.com/embed/" +
									  videoSrc.split("youtu.be/")[1].split("?")[0] +
									  "?autoplay=1"
									: "https://www.youtube.com/embed/" +
									  new URLSearchParams(videoSrc.split("?")[1]).get("v") +
									  "?autoplay=1"
							}
							allow="autoplay; encrypted-media; fullscreen"
							allowFullScreen
							style={{ border: 0 }}
						/>
					) : (
						<video className="partner-prog__video-element" controls autoPlay>
							<source src={videoSrc} type="video/mp4" />
						</video>
					)}
				</>
			)}
			{videoSrc && !isPlaying && (
				<>
					<div className="partner-prog__play-icon" onClick={onPlayClick}>
						<PlayIcon />
					</div>
					<div className="partner-prog__rotating-text">
						<RotatingTextSvg text={rotatingText} />
					</div>
				</>
			)}
		</div>
	);

	const VideoSourceControls = ({
		urlAttr,
		typeAttr,
		urlKey,
		typeKey,
		label,
	}) => (
		<>
			<RadioControl
				label={__("Источник видео")}
				selected={typeAttr}
				options={[
					{ label: __("Ссылка (YouTube / прямой mp4 URL)"), value: "url" },
					{ label: __("Файл из медиатеки WordPress"), value: "file" },
				]}
				onChange={(v) => setAttributes({ [typeKey]: v, [urlKey]: "" })}
			/>
			{typeAttr === "url" ? (
				<TextControl
					label={__(label)}
					value={urlAttr}
					onChange={(v) => setAttributes({ [urlKey]: v })}
					placeholder="https://youtube.com/watch?v=... или https://example.com/video.mp4"
					help={urlAttr ? "✓ " + urlAttr : ""}
				/>
			) : (
				<MediaUpload
					onSelect={(media) => setAttributes({ [urlKey]: media.url })}
					allowedTypes={["video"]}
					value={urlAttr}
					render={({ open }) => (
						<div>
							<Button variant="secondary" onClick={open}>
								{urlAttr
									? __("Заменить видео")
									: __("Выбрать видео из медиатеки")}
							</Button>
							{urlAttr && (
								<>
									<p
										style={{
											fontSize: 11,
											marginTop: 6,
											marginBottom: 4,
											wordBreak: "break-all",
											color: "#757575",
										}}
									>
										{urlAttr}
									</p>
									<Button
										isDestructive
										variant="link"
										onClick={() => setAttributes({ [urlKey]: "" })}
									>
										{__("Удалить")}
									</Button>
								</>
							)}
						</div>
					)}
				/>
			)}
		</>
	);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Заголовок и описание")}>
					<TextareaControl
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

				<PanelBody title={__("Верхние карточки (4 шт.)")}>
					{topCards.map((card, idx) => (
						<div
							key={idx}
							style={{ marginBottom: 10, border: "1px solid #eee", padding: 8 }}
						>
							<TextControl
								label={__("Заголовок")}
								value={card.title}
								onChange={(v) => updateTopCard(idx, "title", v)}
							/>
							<TextareaControl
								label={__("Описание")}
								value={card.description}
								onChange={(v) => updateTopCard(idx, "description", v)}
							/>
						</div>
					))}
				</PanelBody>

				<PanelBody title={__("Видео")}>
					<VideoSourceControls
						urlAttr={videoUrl}
						typeAttr={videoType}
						urlKey="videoUrl"
						typeKey="videoType"
						label="URL видео"
					/>
					<div style={{ marginTop: 16 }}>
						<p style={{ margin: "0 0 8px", fontWeight: 600 }}>
							{__("Картинка-плейсхолдер")}
						</p>
						<MediaUpload
							onSelect={(media) =>
								setAttributes({ videoPlaceholderUrl: media.url })
							}
							allowedTypes={["image"]}
							value={videoPlaceholderUrl}
							render={({ open }) => (
								<div>
									{videoPlaceholderUrl && (
										<img
											src={videoPlaceholderUrl}
											alt=""
											style={{
												width: "100%",
												marginBottom: 8,
												display: "block",
											}}
										/>
									)}
									<Button variant="secondary" onClick={open}>
										{videoPlaceholderUrl
											? __("Заменить картинку")
											: __("Выбрать картинку")}
									</Button>
									{videoPlaceholderUrl && (
										<Button
											isDestructive
											variant="link"
											style={{ marginLeft: 8 }}
											onClick={() => setAttributes({ videoPlaceholderUrl: "" })}
										>
											{__("Удалить")}
										</Button>
									)}
								</div>
							)}
						/>
					</div>
					<TextControl
						label={__("Вращающийся текст")}
						value={videoRotatingText}
						onChange={(v) => setAttributes({ videoRotatingText: v })}
					/>
				</PanelBody>

				<PanelBody title={__("Нижние карточки (2 шт.)")}>
					{bottomCards.map((card, idx) => (
						<div
							key={idx}
							style={{ marginBottom: 10, border: "1px solid #eee", padding: 8 }}
						>
							<TextControl
								label={__("Заголовок")}
								value={card.title}
								onChange={(v) => updateBottomCard(idx, "title", v)}
							/>
							<TextareaControl
								label={__("Описание")}
								value={card.description}
								onChange={(v) => updateBottomCard(idx, "description", v)}
							/>
						</div>
					))}
				</PanelBody>

				<PanelBody title={__("Текст и кнопка призыва")}>
					<TextareaControl
						label={__("Текст призыва")}
						value={ctaText}
						onChange={(v) => setAttributes({ ctaText: v })}
					/>
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
				<div className="partner-prog-scaler" id="partner-prog-scaler">
					<div className="partner-prog-block">
						<div className="partner-prog__header">
							<h2 className="partner-prog__title">{sectionTitle}</h2>
							<p className="partner-prog__desc">{sectionDescription}</p>
						</div>

						<div className="partner-prog__main-grid">
							<div className="partner-prog__grid-top">
								{topCards.map((card, idx) => (
									<div key={idx} className="partner-prog__card">
										<div className="partner-prog__card-divider" />
										<h3 className="partner-prog__card-title">{card.title}</h3>
										<div className="partner-prog__card-text">
											{card.description}
										</div>
									</div>
								))}
							</div>

							<div className="partner-prog__video">
								<VideoBlock
									videoSrc={videoUrl}
									placeholderSrc={videoPlaceholderUrl}
									isPlaying={mainVideoPlaying}
									onPlayClick={() => setMainVideoPlaying(true)}
									rotatingText={videoRotatingText}
								/>
							</div>

							<div className="partner-prog__grid-bottom">
								{bottomCards.map((card, idx) => (
									<div key={idx} className="partner-prog__card">
										<div className="partner-prog__card-divider" />
										<h3 className="partner-prog__card-title">{card.title}</h3>
										<div className="partner-prog__card-text">
											{card.description}
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Новая секция с текстом и кнопкой */}
						<div className="partner-prog__cta">
							<p className="partner-prog__cta-text">{ctaText}</p>
							<a href={buttonUrl} className="partner-prog__cta-button">
								{buttonText}
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
