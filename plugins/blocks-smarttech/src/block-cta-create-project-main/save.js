import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		backgroundImageUrl,
		sectionTitle,
		cardImageUrl,
		description,
		buttonText,
		buttonUrl,
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
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
	);
}
