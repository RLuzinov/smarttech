import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { sectionTitle, tabs } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<div className="profile-tabs__scaler" id="profile-tabs-scaler">
				<div className="profile-tabs">
					<div className="profile-tabs__title">{sectionTitle}</div>
					<div className="profile-tabs__content">
						<div className="profile-tabs__images">
							{tabs.map((tab, index) => (
								<div
									key={index}
									className="profile-tabs__image"
									data-image-index={index}
									style={{
										backgroundImage: tab.imageUrl
											? `url(${tab.imageUrl})`
											: "none",
									}}
								/>
							))}
						</div>
						<div className="profile-tabs__list">
							{tabs.map((tab, index) => (
								<div
									key={index}
									className="profile-tabs__item"
									data-tab-index={index}
								>
									<div className="plrofile-tabs__item-text">
										<h3 className="profile-tabs__item-title">{tab.title}</h3>
										<p className="profile-tabs__item-desc">{tab.description}</p>
									</div>
									<span className="profile-tabs__number">{tab.number}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

{
	/* <div className="plrofile-tabs__item-text">
										<h3 className="profile-tabs__item-title">{tab.title}</h3>
										<p className="profile-tabs__item-desc">{tab.description}</p>
									</div>
									<span className="profile-tabs__number">{tab.number}</span> */
}
