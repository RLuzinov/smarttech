// save.js – активный второй таб (индекс 1)
import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { sectionTitle, sectionDescription, tabButtons, tabs } = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className="partner-scaler" id="partner-scaler">
				<div className="partner-block">
					<div className="partner__header">
						<div className="partner__text">
							<h2 className="partner__title">{sectionTitle}</h2>
							<p className="partner__desc">{sectionDescription}</p>
						</div>
						<div className="partner__tabs-buttons">
							{tabButtons.map((btn, idx) => (
								<button
									key={idx}
									className={`partner__tab-btn${
										idx === 1 ? " partner__tab-btn--active" : ""
									}`}
									data-tab={idx}
								>
									{btn}
								</button>
							))}
						</div>
					</div>

					<div className="partner__tabs-content">
						{tabs.map((tab, tabIndex) => (
							<div
								key={tabIndex}
								className={`partner__tab-panel${
									tabIndex === 1 ? " partner__tab-panel--active" : ""
								}`}
								data-tab={tabIndex}
							>
								<div className="partner__logos-grid">
									<div className="partner__lines-container">
										<div className="partner__h-line partner__h-line--top" />
										<div className="partner__v-line partner__v-line--top-left" />
										<div className="partner__v-line partner__v-line--top-right" />
										<div className="partner__h-line partner__h-line--bottom" />
										<div className="partner__v-line partner__v-line--bottom-left" />
										<div className="partner__v-line partner__v-line--bottom-right" />
									</div>
									{tab.logos.map((logo, logoIndex) => (
										<div key={logoIndex} className="partner__logo-item">
											{logo.url && <img src={logo.url} alt="" />}
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
