import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const { sectionTitle, tabs } = attributes;
	const blockProps = useBlockProps();

	const updateTab = (index, key, value) => {
		const newTabs = tabs.map((tab, i) =>
			i === index ? { ...tab, [key]: value } : tab,
		);
		setAttributes({ tabs: newTabs });
	};

	const addTab = () => {
		const newTab = {
			title: "Новый таб",
			description: "Описание",
			number: "/01/",
			imageUrl: "",
		};
		setAttributes({ tabs: [...tabs, newTab] });
	};

	const removeTab = (index) => {
		setAttributes({ tabs: tabs.filter((_, i) => i !== index) });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Section Title")}>
					<TextControl
						label={__("Title")}
						value={sectionTitle}
						onChange={(value) => setAttributes({ sectionTitle: value })}
					/>
				</PanelBody>
				<PanelBody title={__("Tabs")}>
					{tabs.map((tab, index) => (
						<div
							key={index}
							style={{
								marginBottom: "16px",
								borderBottom: "1px solid #ddd",
								paddingBottom: "8px",
							}}
						>
							<TextControl
								label={__("Title")}
								value={tab.title}
								onChange={(value) => updateTab(index, "title", value)}
							/>
							<TextControl
								label={__("Description")}
								value={tab.description}
								onChange={(value) => updateTab(index, "description", value)}
							/>
							<TextControl
								label={__("Number")}
								value={tab.number}
								onChange={(value) => updateTab(index, "number", value)}
							/>
							<MediaUpload
								onSelect={(media) => updateTab(index, "imageUrl", media.url)}
								allowedTypes={["image"]}
								value={tab.imageUrl}
								render={({ open }) => (
									<Button variant="secondary" onClick={open}>
										{tab.imageUrl ? __("Change Image") : __("Choose Image")}
									</Button>
								)}
							/>
							<Button isDestructive onClick={() => removeTab(index)}>
								{__("Remove Tab")}
							</Button>
						</div>
					))}
					<Button variant="primary" onClick={addTab}>
						{__("Add Tab")}
					</Button>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
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
		</>
	);
}
