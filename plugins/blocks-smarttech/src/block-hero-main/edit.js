import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const { videoUrl, imageUrl, title, buttonText, buttonUrl } = attributes;
	const blockProps = useBlockProps();

	const onSelectImage = (media) => {
		setAttributes({ imageUrl: media.url });
	};

	const onSelectVideo = (media) => {
		setAttributes({ videoUrl: media.url });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Background", "blocks-smarttech")}>
					<MediaUpload
						onSelect={onSelectVideo}
						allowedTypes={["video"]}
						value={videoUrl}
						render={({ open }) => (
							<Button variant="secondary" onClick={open}>
								{__("Choose Background video", "blocks-smarttech")}
							</Button>
						)}
					/>
					<MediaUpload
						onSelect={onSelectImage}
						allowedTypes={["image"]}
						value={imageUrl}
						render={({ open }) => (
							<Button variant="secondary" onClick={open}>
								{__("Choose Background image", "blocks-smarttech")}
							</Button>
						)}
					/>
				</PanelBody>
				<PanelBody title={__("Hero title", "blocks-smarttech")}>
					<TextControl
						label={__("Hero title", "blocks-smarttech")}
						value={title}
						onChange={(value) => setAttributes({ title: value })}
					/>
					<TextControl
						label={__("Button text", "blocks-smarttech")}
						value={buttonText}
						onChange={(value) => setAttributes({ buttonText: value })}
					/>
					<TextControl
						label={__("Button link", "blocks-smarttech")}
						value={buttonUrl}
						onChange={(value) => setAttributes({ buttonUrl: value })}
					/>
				</PanelBody>
			</InspectorControls>

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
								style={{ width: "100%", height: "100%", objectFit: "cover" }}
							/>
						) : (
							<div className="hero-main-placeholder">
								{__("Select background video or image", "blocks-smarttech")}
							</div>
						)}
					</div>
					<div className="hero-main-text-container">
						<h1>{title}</h1>
						<a href={buttonUrl} className="btn">
							{buttonText}
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
