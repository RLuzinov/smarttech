import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { sectionTitle, categories } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<div className="expertise-scaler" id="expertise-scaler">
				<div className="expertise-block">
					<h2 className="expertise__title">{sectionTitle}</h2>
					{categories.map((cat, catIndex) => {
						const hasMetric = cat.metricNumber || cat.metricLabel;
						const isDark = cat.title === "Маркетинг & продажи";

						return (
							<div
								key={catIndex}
								className={`expertise__category${
									hasMetric ? " expertise__category--has-metric" : ""
								}${isDark ? " expertise__category--dark" : ""}`}
							>
								{/* Горизонтальная линия над категорией */}
								<div className="expertise__divider" />

								{/* Если есть метрика, заголовок внутри метрики, метрика в сетке */}
								{hasMetric ? (
									<div className="expertise__row expertise__row--4">
										<div className="expertise__metric-wrapper">
											<div className="expertise__metric">
												<h3 className="expertise__category-title">
													{cat.title}
												</h3>
												<div>
													<span className="expertise__metric-number">
														{cat.metricNumber}
													</span>
													<span className="expertise__metric-label">
														{cat.metricLabel}
													</span>
												</div>
											</div>
										</div>
										{cat.cards.map((card, idx) => (
											<div key={idx} className="expertise__card">
												{/* карточка без изменений */}
												<div className="expertise__card-icons">
													{Array.from({ length: card.iconCount || 3 }).map(
														(_, i) => (
															<span
																key={i}
																className={`expertise__card-icon${
																	i === 1 ? " expertise__card-icon--active" : ""
																}`}
															/>
														),
													)}
												</div>
												<h4 className="expertise__card-title">{card.title}</h4>
												<p className="expertise__card-description">
													{card.description}
												</p>
												<a
													href={card.buttonUrl}
													className="expertise__card-button"
												>
													{card.buttonText}
												</a>
											</div>
										))}
									</div>
								) : (
									/* Без метрики (Маркетинг & продажи) */
									<>
										{/* Заголовок вынесен над карточками */}
										<div className="expertise__category-header">
											{isDark ? (
												<div className="expertise__category-header-dark">
													<h3 className="expertise__category-title">
														{cat.title}
													</h3>
												</div>
											) : (
												<h3 className="expertise__category-title">
													{cat.title}
												</h3>
											)}
										</div>
										<div className="expertise__row">
											{cat.cards.map((card, idx) => (
												<div key={idx} className="expertise__card">
													{/* карточка без изменений */}
													<div className="expertise__card-icons">
														{Array.from({ length: card.iconCount || 3 }).map(
															(_, i) => (
																<span
																	key={i}
																	className={`expertise__card-icon${
																		i === 1
																			? " expertise__card-icon--active"
																			: ""
																	}`}
																/>
															),
														)}
													</div>
													<h4 className="expertise__card-title">
														{card.title}
													</h4>
													<p className="expertise__card-description">
														{card.description}
													</p>
													<a
														href={card.buttonUrl}
														className="expertise__card-button"
													>
														{card.buttonText}
													</a>
												</div>
											))}
										</div>
									</>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
