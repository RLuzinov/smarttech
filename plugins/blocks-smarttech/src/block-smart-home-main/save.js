import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { sectionTitle, sectionDescription, rows } = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className="smart-home-scaler" id="smart-home-scaler">
				<div className="smart-home-block">
					{rows.map((row, rowIndex) => {
						if (row.layout === "first") {
							// Первая строка: две колонки — текст + слайдер
							return (
								<div
									key={rowIndex}
									className="smart-home__row smart-home__row--first"
								>
									<div className="smart-home__text-col">
										<h2 className="smart-home__title">{sectionTitle}</h2>
										<p className="smart-home__description">
											{sectionDescription}
										</p>
									</div>
									{row.columns.map((col, colIndex) => (
										<div
											key={colIndex}
											className={`smart-home__col smart-home__col--w${col.width}`}
										>
											<div
												className="smart-home__slider"
												data-slider-id={`slider-${rowIndex}-${colIndex}`}
											>
												<div className="smart-home__slider-viewport">
													{col.media.map((slide, slideIndex) => (
														<div
															key={slideIndex}
															className="smart-home__slide"
															data-slide-index={slideIndex}
															style={{
																display: slideIndex === 0 ? "block" : "none",
															}}
														>
															{slide.type === "video" ? (
																<div className="smart-home__video-block">
																	{slide.poster && (
																		<img
																			src={slide.poster}
																			alt=""
																			className="smart-home__video-poster"
																		/>
																	)}
																	<video
																		className="smart-home__video-element"
																		style={{ display: "none" }}
																		controls
																	>
																		<source src={slide.url} type="video/mp4" />
																	</video>
																	<div className="smart-home__play-icon">
																		<svg
																			width="30"
																			height="21"
																			viewBox="0 0 30 21"
																			fill="none"
																		>
																			<path
																				fillRule="evenodd"
																				clipRule="evenodd"
																				d="M19.3131 10.9002L12.5578 14.6051C12.2643 14.7639 12 14.5512 12 14.2178V6.6123C12 6.27422 12.2725 6.06211 12.5666 6.2291L19.3682 10.1291C19.6688 10.3008 19.6178 10.735 19.3131 10.9002ZM30 6.53086C30 2.92383 27.0762 0 23.4697 0H6.53086C2.92441 0 0 2.92383 0 6.53086V14.4691C0 18.0762 2.92441 21 6.53086 21H23.4697C27.0762 21 30 18.0762 30 14.4691V6.53086Z"
																				fill="white"
																			/>
																		</svg>
																	</div>
																	{slide.rotatingText && (
																		<div className="smart-home__rotating-text">
																			<svg
																				viewBox="0 0 200 200"
																				className="smart-home__rotating-svg"
																			>
																				<defs>
																					<path
																						id={`rotating-path-${rowIndex}-${colIndex}`}
																						d="M100,40 a60,60 0 1,1 -0.1,0"
																					/>
																				</defs>
																				<text
																					fontSize="14"
																					fill="white"
																					fontWeight="bold"
																				>
																					<textPath
																						href={`#rotating-path-${rowIndex}-${colIndex}`}
																						startOffset="0%"
																					>
																						{slide.rotatingText}
																					</textPath>
																				</text>
																			</svg>
																		</div>
																	)}
																</div>
															) : (
																slide.url && (
																	<img
																		src={slide.url}
																		alt=""
																		className="smart-home__slide-image"
																	/>
																)
															)}
														</div>
													))}
												</div>
												{col.media.length > 1 && (
													<div className="smart-home__slider-arrows">
														<button
															className="smart-home__arrow smart-home__arrow--left"
															data-action="prev"
														>
															<svg
																width="7"
																height="12"
																viewBox="0 0 7 12"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	d="M6.06445 0.353516L0.707311 5.71066L6.06445 11.0678"
																	stroke="#262626"
																/>
															</svg>
														</button>
														<button
															className="smart-home__arrow smart-home__arrow--right"
															data-action="next"
														>
															<svg
																width="7"
																height="12"
																viewBox="0 0 7 12"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	d="M0.353516 0.353516L5.71066 5.71066L0.353516 11.0678"
																	stroke="#262626"
																/>
															</svg>
														</button>
													</div>
												)}
											</div>
											<div className="smart-home__card-info">
												<h3 className="smart-home__card-title">{col.title}</h3>
												<a
													href={col.buttonUrl}
													className="black-button card-button"
												>
													{col.buttonText}
												</a>
											</div>
										</div>
									))}
								</div>
							);
						} else {
							// Вторая и третья строки
							return (
								<div
									key={rowIndex}
									className={`smart-home__row smart-home__row--${row.layout}`}
								>
									{row.columns.map((col, colIndex) => (
										<div
											key={colIndex}
											className={`smart-home__col smart-home__col--w${col.width}`}
										>
											<div
												className="smart-home__slider"
												data-slider-id={`slider-${rowIndex}-${colIndex}`}
											>
												<div className="smart-home__slider-viewport">
													{col.media.map((slide, slideIndex) => (
														<div
															key={slideIndex}
															className="smart-home__slide"
															data-slide-index={slideIndex}
															style={{
																display: slideIndex === 0 ? "block" : "none",
															}}
														>
															{slide.type === "video" ? (
																<div className="smart-home__video-block">
																	{slide.poster && (
																		<img
																			src={slide.poster}
																			alt=""
																			className="smart-home__video-poster"
																		/>
																	)}
																	<video
																		className="smart-home__video-element"
																		style={{ display: "none" }}
																		controls
																	>
																		<source src={slide.url} type="video/mp4" />
																	</video>
																	<div className="smart-home__play-icon">
																		<svg
																			width="30"
																			height="21"
																			viewBox="0 0 30 21"
																			fill="none"
																		>
																			<path
																				fillRule="evenodd"
																				clipRule="evenodd"
																				d="M19.3131 10.9002L12.5578 14.6051C12.2643 14.7639 12 14.5512 12 14.2178V6.6123C12 6.27422 12.2725 6.06211 12.5666 6.2291L19.3682 10.1291C19.6688 10.3008 19.6178 10.735 19.3131 10.9002ZM30 6.53086C30 2.92383 27.0762 0 23.4697 0H6.53086C2.92441 0 0 2.92383 0 6.53086V14.4691C0 18.0762 2.92441 21 6.53086 21H23.4697C27.0762 21 30 18.0762 30 14.4691V6.53086Z"
																				fill="white"
																			/>
																		</svg>
																	</div>
																	{slide.rotatingText && (
																		<div className="smart-home__rotating-text">
																			<svg
																				viewBox="0 0 200 200"
																				className="smart-home__rotating-svg"
																			>
																				<defs>
																					<path
																						id={`rotating-path-${rowIndex}-${colIndex}`}
																						d="M100,40 a60,60 0 1,1 -0.1,0"
																					/>
																				</defs>
																				<text
																					fontSize="14"
																					fill="white"
																					fontWeight="bold"
																				>
																					<textPath
																						href={`#rotating-path-${rowIndex}-${colIndex}`}
																						startOffset="0%"
																					>
																						{slide.rotatingText}
																					</textPath>
																				</text>
																			</svg>
																		</div>
																	)}
																</div>
															) : (
																slide.url && (
																	<img
																		src={slide.url}
																		alt=""
																		className="smart-home__slide-image"
																	/>
																)
															)}
														</div>
													))}
												</div>
												{col.media.length > 1 && (
													<div className="smart-home__slider-arrows">
														<button
															className="smart-home__arrow smart-home__arrow--left"
															data-action="prev"
														>
															<svg
																width="7"
																height="12"
																viewBox="0 0 7 12"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	d="M6.06445 0.353516L0.707311 5.71066L6.06445 11.0678"
																	stroke="#262626"
																/>
															</svg>
														</button>
														<button
															className="smart-home__arrow smart-home__arrow--right"
															data-action="next"
														>
															<svg
																width="7"
																height="12"
																viewBox="0 0 7 12"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	d="M0.353516 0.353516L5.71066 5.71066L0.353516 11.0678"
																	stroke="#262626"
																/>
															</svg>
														</button>
													</div>
												)}
											</div>
											<div className="smart-home__card-info">
												<h3 className="smart-home__card-title">{col.title}</h3>
												<a
													href={col.buttonUrl}
													className="black-button card-button"
												>
													{col.buttonText}
												</a>
											</div>
										</div>
									))}
								</div>
							);
						}
					})}
				</div>
			</div>
		</div>
	);
}
