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
		sectionLabel,
		sectionTitle,
		mainText,
		column2Texts,
		videoUrl,
		videoType,
		videoPlaceholderUrl,
		philosophyVideoUrl,
		philosophyVideoType,
		philosophyImageUrl,
		philosophyLabel,
		metrics,
		certificationTitle,
		certificationText,
		awards,
	} = attributes;

	const [mainVideoPlaying, setMainVideoPlaying] = useState(false);
	const [philosophyVideoPlaying, setPhilosophyVideoPlaying] = useState(false);
	const blockProps = useBlockProps();

	const isYouTube = (url) =>
		url && (url.includes("youtube.com") || url.includes("youtu.be"));

	const updateColumn2Text = (index, value) => {
		const newTexts = column2Texts.map((t, i) => (i === index ? value : t));
		setAttributes({ column2Texts: newTexts });
	};
	const updateMetric = (index, key, value) => {
		const newMetrics = metrics.map((m, i) =>
			i === index ? { ...m, [key]: value } : m,
		);
		setAttributes({ metrics: newMetrics });
	};
	const updateAward = (index, key, value) => {
		const newAwards = awards.map((a, i) =>
			i === index ? { ...a, [key]: value } : a,
		);
		setAttributes({ awards: newAwards });
	};
	const addAward = () =>
		setAttributes({ awards: [...awards, { text: "", imageUrl: "" }] });
	const removeAward = (index) =>
		setAttributes({ awards: awards.filter((_, i) => i !== index) });

	const RotatingTextCompany = (
		<svg viewBox="0 0 200 200" className="about__rotating-svg">
			<defs>
				<path id="text-path-company" d="M100,40 a60,60 0 1,1 -0.1,0" />
			</defs>
			<text fontSize="14" fill="white" fontWeight="bold">
				<textPath href="#text-path-company" startOffset="0%">
					О компании • О компании • О компании • О компании •
				</textPath>
			</text>
		</svg>
	);

	const RotatingTextPhilosophy = (
		<svg viewBox="0 0 200 200" className="about__rotating-svg">
			<defs>
				<path id="text-path-philosophy" d="M100,40 a60,60 0 1,1 -0.1,0" />
			</defs>
			<text fontSize="14" fill="white" fontWeight="bold">
				<textPath href="#text-path-philosophy" startOffset="0%">
					наша философия • наша философия • наша философия •
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

	// Компонент видео-блока для редактора
	const VideoBlock = ({
		videoSrc,
		placeholderSrc,
		isPlaying,
		onPlayClick,
		rotatingTextSvg,
		playClass,
	}) => (
		<div className="about__video-block">
			{!isPlaying && placeholderSrc && (
				<img src={placeholderSrc} alt="" className="about__video-placeholder" />
			)}
			{isPlaying && videoSrc && (
				<>
					{isYouTube(videoSrc) ? (
						<iframe
							className="about__video-element"
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
						<video className="about__video-element" controls autoPlay>
							<source src={videoSrc} type="video/mp4" />
						</video>
					)}
				</>
			)}
			{videoSrc && !isPlaying && (
				<>
					<div className={playClass} onClick={onPlayClick}>
						<PlayIcon />
					</div>
					<div className="about__rotating-text">{rotatingTextSvg}</div>
				</>
			)}
		</div>
	);

	// Панель выбора источника видео
	const VideoSourceControls = ({ urlAttr, typeAttr, urlKey, typeKey, label }) => (
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
								{urlAttr ? __("Заменить видео") : __("Выбрать видео из медиатеки")}
							</Button>
							{urlAttr && (
								<>
									<p style={{ fontSize: 11, marginTop: 6, marginBottom: 4, wordBreak: "break-all", color: "#757575" }}>
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
				<PanelBody title={__("Основные заголовки", "blocks-smarttech")}>
					<TextControl
						label={__("Метка секции")}
						value={sectionLabel}
						onChange={(v) => setAttributes({ sectionLabel: v })}
					/>
					<TextControl
						label={__("Заголовок")}
						value={sectionTitle}
						onChange={(v) => setAttributes({ sectionTitle: v })}
					/>
				</PanelBody>

				<PanelBody title={__("Тексты", "blocks-smarttech")}>
					<TextareaControl
						label={__("Основной текст (колонка 1)")}
						value={mainText}
						onChange={(v) => setAttributes({ mainText: v })}
					/>
					<h4>{__("Тексты колонки 2")}</h4>
					{column2Texts.map((text, idx) => (
						<TextareaControl
							key={idx}
							label={`${__("Текст")} ${idx + 1}`}
							value={text}
							onChange={(v) => updateColumn2Text(idx, v)}
						/>
					))}
				</PanelBody>

				<PanelBody title={__("Главное видео", "blocks-smarttech")}>
					<VideoSourceControls
						urlAttr={videoUrl}
						typeAttr={videoType}
						urlKey="videoUrl"
						typeKey="videoType"
						label="URL видео"
					/>
					<div style={{ marginTop: 16 }}>
						<p style={{ margin: "0 0 8px", fontWeight: 600 }}>{__("Картинка-плейсхолдер")}</p>
						<MediaUpload
							onSelect={(media) => setAttributes({ videoPlaceholderUrl: media.url })}
							allowedTypes={["image"]}
							value={videoPlaceholderUrl}
							render={({ open }) => (
								<div>
									{videoPlaceholderUrl && (
										<img
											src={videoPlaceholderUrl}
											alt=""
											style={{ width: "100%", marginBottom: 8, display: "block" }}
										/>
									)}
									<Button variant="secondary" onClick={open}>
										{videoPlaceholderUrl ? __("Заменить картинку") : __("Выбрать картинку")}
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
				</PanelBody>

				<PanelBody title={__("Видео «Философия»", "blocks-smarttech")}>
					<VideoSourceControls
						urlAttr={philosophyVideoUrl}
						typeAttr={philosophyVideoType}
						urlKey="philosophyVideoUrl"
						typeKey="philosophyVideoType"
						label="URL видео"
					/>
					<div style={{ marginTop: 16 }}>
						<p style={{ margin: "0 0 8px", fontWeight: 600 }}>{__("Картинка-плейсхолдер")}</p>
						<MediaUpload
							onSelect={(media) => setAttributes({ philosophyImageUrl: media.url })}
							allowedTypes={["image"]}
							value={philosophyImageUrl}
							render={({ open }) => (
								<div>
									{philosophyImageUrl && (
										<img
											src={philosophyImageUrl}
											alt=""
											style={{ width: "100%", marginBottom: 8, display: "block" }}
										/>
									)}
									<Button variant="secondary" onClick={open}>
										{philosophyImageUrl ? __("Заменить картинку") : __("Выбрать картинку")}
									</Button>
									{philosophyImageUrl && (
										<Button
											isDestructive
											variant="link"
											style={{ marginLeft: 8 }}
											onClick={() => setAttributes({ philosophyImageUrl: "" })}
										>
											{__("Удалить")}
										</Button>
									)}
								</div>
							)}
						/>
					</div>
				</PanelBody>

				<PanelBody title={__("Философия")}>
					<TextControl
						label={__("Подпись")}
						value={philosophyLabel}
						onChange={(v) => setAttributes({ philosophyLabel: v })}
					/>
				</PanelBody>

				<PanelBody title={__("Метрики")}>
					{metrics.map((metric, idx) => (
						<div
							key={idx}
							style={{ marginBottom: 12, borderBottom: "1px solid #eee", paddingBottom: 8 }}
						>
							<TextControl
								label={__("Подпись")}
								value={metric.label}
								onChange={(v) => updateMetric(idx, "label", v)}
							/>
							<TextControl
								label={__("Число")}
								value={metric.number}
								onChange={(v) => updateMetric(idx, "number", v)}
							/>
							<TextControl
								label={__("Единица")}
								value={metric.unit}
								onChange={(v) => updateMetric(idx, "unit", v)}
							/>
						</div>
					))}
				</PanelBody>

				<PanelBody title={__("Сертификация")}>
					<TextControl
						label={__("Заголовок")}
						value={certificationTitle}
						onChange={(v) => setAttributes({ certificationTitle: v })}
					/>
					<TextControl
						label={__("Текст")}
						value={certificationText}
						onChange={(v) => setAttributes({ certificationText: v })}
					/>
				</PanelBody>

				<PanelBody title={__("Награды")}>
					{awards.map((award, idx) => (
						<div
							key={idx}
							style={{ marginBottom: 12, borderBottom: "1px solid #eee", paddingBottom: 8 }}
						>
							<TextControl
								label={__("Текст награды")}
								value={award.text}
								onChange={(v) => updateAward(idx, "text", v)}
							/>
							<MediaUpload
								onSelect={(media) => updateAward(idx, "imageUrl", media.url)}
								allowedTypes={["image"]}
								value={award.imageUrl}
								render={({ open }) => (
									<div>
										{award.imageUrl && (
											<img
												src={award.imageUrl}
												alt=""
												style={{ width: "100%", marginBottom: 6, display: "block" }}
											/>
										)}
										<Button variant="secondary" onClick={open}>
											{award.imageUrl ? __("Заменить иконку") : __("Выбрать иконку")}
										</Button>
									</div>
								)}
							/>
							<Button isDestructive style={{ marginTop: 8 }} onClick={() => removeAward(idx)}>
								{__("Удалить награду")}
							</Button>
						</div>
					))}
					<Button variant="primary" onClick={addAward}>
						{__("Добавить награду")}
					</Button>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div className="about-scaler" id="about-scaler">
					<div className="about-block">
						<div className="about__section-label">{sectionLabel}</div>
						<h2 className="about__title">{sectionTitle}</h2>
						<div className="about__grid-top">
							<div className="about__col-main">{mainText}</div>
							<div className="about__col-texts">
								{column2Texts.map((t, i) => (
									<p key={i}>{t}</p>
								))}
							</div>
							<div className="about__col-video">
								<VideoBlock
									videoSrc={videoUrl}
									placeholderSrc={videoPlaceholderUrl}
									isPlaying={mainVideoPlaying}
									onPlayClick={() => setMainVideoPlaying(true)}
									rotatingTextSvg={RotatingTextCompany}
									playClass="about__play-icon"
								/>
							</div>
						</div>
						<div className="about__philosophy-row">
							<div className="about__philosophy-card">
								<VideoBlock
									videoSrc={philosophyVideoUrl}
									placeholderSrc={philosophyImageUrl}
									isPlaying={philosophyVideoPlaying}
									onPlayClick={() => setPhilosophyVideoPlaying(true)}
									rotatingTextSvg={RotatingTextPhilosophy}
									playClass="about__philosophy-play"
								/>
								<div className="about__philosophy-label">{philosophyLabel}</div>
							</div>
							<div className="about__metrics-grid">
								{metrics.map((m, i) => (
									<div key={i} className="about__metric-item">
										<div className="about__metric-label">{m.label}</div>
										<div className="about__metric-number">{m.number}</div>
										<div className="about__metric-unit">{m.unit}</div>
									</div>
								))}
							</div>
						</div>
						<div className="about__certification">
							<div className="about__certification__title">
								<h3>{certificationTitle}</h3>
								<svg width="13" height="13" viewBox="0 0 13 13" fill="none">
									<path
										d="M4.41 10.548L10.512 0L12.186 0.972L5.382 12.78H3.33L0 7.002L1.782 5.976L4.41 10.548Z"
										fill="#99CC33"
									/>
								</svg>
							</div>
							<span>{certificationText}</span>
						</div>
						<div className="about__awards-grid">
							{awards.map((a, i) => (
								<div key={i} className="about__award-card">
									{a.imageUrl && <img src={a.imageUrl} alt="" />}
									<p>{a.text}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
