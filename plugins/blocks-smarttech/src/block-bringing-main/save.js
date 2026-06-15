import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { sectionTitle, description, columns } = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className="projects-scaler" id="projects-scaler">
				<div className="projects-block">
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
								<div className="projects__card-inner">
									<div className="projects__card-set">
										{col.images.map((img, imgIndex) => (
											<img
												key={imgIndex}
												src={img.url}
												alt=""
												className="projects__card-image"
											/>
										))}
									</div>
									{/* Дубликат для бесшовного перехода */}
									<div className="projects__card-set">
										{col.images.map((img, imgIndex) => (
											<img
												key={"copy-" + imgIndex}
												src={img.url}
												alt=""
												className="projects__card-image"
											/>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
