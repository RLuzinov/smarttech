import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		sectionLabel,
		sectionTitle,
		mainText,
		column2Texts,
		videoUrl,
		videoPlaceholderUrl,
		philosophyVideoUrl,
		philosophyImageUrl,
		philosophyLabel,
		metrics,
		certificationTitle,
		certificationText,
		awards,
	} = attributes;

	const isYouTube = (url) =>
		url && (url.includes("youtube.com") || url.includes("youtu.be"));

	const RotatingTextCompany = (
		<svg viewBox="0 0 200 200" className="about__rotating-svg">
			<defs>
				<path id="text-path-company" d="M100,40 a60,60 0 1,1 -0.1,0" />
			</defs>
			<text
				fontSize="14"
				fill="white"
				fontWeight="medium"
				textTransform="uppercase"
			>
				<textPath href="#text-path-company" startOffset="0%">
					О КОМПАНИИ О КОМПАНИИ О КОМПАНИИ О КОМПАНИИ
				</textPath>
			</text>
		</svg>
	);

	const RotatingTextPhilosophy = (
		<svg viewBox="0 0 200 200" className="about__rotating-svg">
			<defs>
				<path id="text-path-philosophy" d="M100,40 a60,60 0 1,1 -0.1,0" />
			</defs>
			<text
				fontSize="14"
				fill="white"
				fontWeight="medium"
				textTransform="uppercase"
			>
				<textPath href="#text-path-philosophy" startOffset="0%">
					НАША ФИЛОСОФИЯ НАША ФИЛОСОФИЯ НАША ФИЛОСОФИЯ
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

	// Универсальный видео-блок.
	// Ключевая идея: placeholder лежит поверх видео через z-index (не display:none на видео).
	// При клике view.js убирает placeholder — видео оказывается видимым без манипуляций с display.
	const VideoBlock = ({
		videoSrc,
		placeholderSrc,
		playClass,
		rotatingText,
	}) => (
		<div className="about__video-block" data-video-src={videoSrc || ""}>
			{/* Видео / iframe-контейнер — всегда в DOM, позиция absolute под placeholder */}
			{videoSrc && isYouTube(videoSrc) && (
				<div className="about__youtube-container"></div>
			)}
			{videoSrc && !isYouTube(videoSrc) && (
				<video className="about__video-element" controls>
					<source src={videoSrc} type="video/mp4" />
				</video>
			)}

			{/* Placeholder — поверх видео через z-index, убирается по клику в view.js */}
			{placeholderSrc && (
				<img src={placeholderSrc} alt="" className="about__video-placeholder" />
			)}

			{/* Кнопка play + вращающийся текст */}
			{videoSrc && (
				<>
					<div className={playClass}>
						<PlayIcon />
					</div>
					<div className="about__rotating-text">{rotatingText}</div>
				</>
			)}
		</div>
	);

	return (
		<div {...useBlockProps.save()}>
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
								playClass="about__play-icon"
								rotatingText={RotatingTextCompany}
							/>
						</div>
					</div>
					<div className="about__philosophy-row">
						<div className="about__philosophy-card">
							<VideoBlock
								videoSrc={philosophyVideoUrl}
								placeholderSrc={philosophyImageUrl}
								playClass="about__philosophy-play"
								rotatingText={RotatingTextPhilosophy}
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
						</div>
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
	);
}
