import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { sectionTitle, sectionDescription, teamRows } = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className="team-scaler" id="team-scaler">
				<div className="team-block">
					<h2 className="team__title">{sectionTitle}</h2>
					<div className="team__description">{sectionDescription}</div>

					{teamRows.map((row, rowIndex) => (
						<div key={rowIndex} className="team__marquee">
							<div className="team__track">
								<div className="team__card-set">
									{row.map((card, i) => (
										<div
											key={i}
											className={`team__card${
												card.doubleWidth ? " team__card--double" : ""
											}`}
										>
											{card.imageUrl && (
												<img
													src={card.imageUrl}
													alt=""
													className="team__card-image"
												/>
											)}
											<div className="team__card-info">
												<div className="team__card-name">{card.name}</div>
												<div className="team__card-position">
													{card.position}
												</div>
											</div>
										</div>
									))}
								</div>
								<div className="team__card-set">
									{row.map((card, i) => (
										<div
											key={`copy-${i}`}
											className={`team__card${
												card.doubleWidth ? " team__card--double" : ""
											}`}
										>
											{card.imageUrl && (
												<img
													src={card.imageUrl}
													alt=""
													className="team__card-image"
												/>
											)}
											<div className="team__card-info">
												<div className="team__card-name">{card.name}</div>
												<div className="team__card-position">
													{card.position}
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
