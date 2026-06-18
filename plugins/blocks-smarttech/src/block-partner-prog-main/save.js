import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		sectionTitle,
		sectionDescription,
		topCards,
		videoUrl,
		videoPlaceholderUrl,
		videoRotatingText,
		bottomCards,
		ctaText,
		buttonText,
		buttonUrl,
	} = attributes;

	const isYouTube = (url) =>
		url && (url.includes("youtube.com") || url.includes("youtu.be"));

	const RotatingText = ({ text }) => (
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

	const VideoBlock = ({ videoSrc, placeholderSrc, rotatingText }) => (
		<div className="partner-prog__video-block" data-video-src={videoSrc || ""}>
			{videoSrc && isYouTube(videoSrc) && (
				<div className="partner-prog__youtube-container"></div>
			)}
			{videoSrc && !isYouTube(videoSrc) && (
				<video className="partner-prog__video-element" controls>
					<source src={videoSrc} type="video/mp4" />
				</video>
			)}
			{placeholderSrc && (
				<img
					src={placeholderSrc}
					alt=""
					className="partner-prog__video-poster"
				/>
			)}
			{videoSrc && (
				<>
					<div className="partner-prog__play-icon">
						<PlayIcon />
					</div>
					<div className="partner-prog__rotating-text">
						<RotatingText text={rotatingText} />
					</div>
				</>
			)}
		</div>
	);

	return (
		<div {...useBlockProps.save()}>
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

					<div className="partner-prog__cta">
						<p className="partner-prog__cta-text">{ctaText}</p>
						<a href={buttonUrl} className="partner-prog__cta-button">
							{buttonText}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
