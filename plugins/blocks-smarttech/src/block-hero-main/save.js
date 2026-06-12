import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { videoUrl, imageUrl, title, buttonText, buttonUrl } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<section {...blockProps}>
			<div className="hero-scaler" id="hero-scaler">
				<div className="hero-main-media-container">
					{videoUrl ? (
						<video
							className="hero-main-video"
							loop
							autoPlay
							muted
							playsInline
							width="100%"
							height="100%"
						>
							<source src={videoUrl} type="video/mp4" />
						</video>
					) : imageUrl ? (
						<img
							className="hero-main-image"
							src={imageUrl}
							alt=""
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
							}}
						/>
					) : null}
				</div>
				<div className="hero-main-text-container">
					<h1>{title}</h1>
					<a href={buttonUrl} className="btn">
						{buttonText}
					</a>
				</div>
			</div>
		</section>
	);
}
