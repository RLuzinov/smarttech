import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	TextareaControl,
	Button,
	RangeControl,
} from "@wordpress/components";
import { useSelect } from "@wordpress/data";

export default function Edit({ attributes, setAttributes }) {
	const {
		sectionTitle,
		sectionDescription,
		desktopSlides,
		mobileSlides,
		blogLink,
		posts,
	} = attributes;
	const blockProps = useBlockProps();

	// Загружаем последние посты для предпросмотра
	const fetchedPosts = useSelect((select) => {
		return (
			select("core").getEntityRecords("postType", "post", { per_page: 10 }) ||
			[]
		);
	}, []);

	// При загрузке сохраняем их в атрибут, если ещё не сохранены
	if (fetchedPosts.length > 0 && posts.length === 0) {
		setAttributes({ posts: fetchedPosts });
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Заголовок и описание")}>
					<TextControl
						label={__("Заголовок")}
						value={sectionTitle}
						onChange={(v) => setAttributes({ sectionTitle: v })}
					/>
					<TextareaControl
						label={__("Описание")}
						value={sectionDescription}
						onChange={(v) => setAttributes({ sectionDescription: v })}
					/>
				</PanelBody>
				<PanelBody title={__("Настройки карусели")}>
					<RangeControl
						label={__("Карточек на десктопе")}
						value={desktopSlides}
						onChange={(v) => setAttributes({ desktopSlides: v })}
						min={1}
						max={6}
					/>
					<RangeControl
						label={__("Карточек на мобильном")}
						value={mobileSlides}
						onChange={(v) => setAttributes({ mobileSlides: v })}
						min={1}
						max={3}
					/>
				</PanelBody>
				<PanelBody title={__("Кнопка")}>
					<TextControl
						label={__("Ссылка на блог")}
						value={blogLink}
						onChange={(v) => setAttributes({ blogLink: v })}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div className="blog-carousel-scaler" id="blog-carousel-scaler">
					<div className="blog-carousel-block">
						<div className="blog-carousel__header">
							<h2 className="blog-carousel__title">{sectionTitle}</h2>
							<p className="blog-carousel__desc">{sectionDescription}</p>
						</div>

						<div
							className="blog-carousel__slider"
							data-desktop-slides={desktopSlides}
							data-mobile-slides={mobileSlides}
						>
							<div className="blog-carousel__track">
								{(posts.length > 0 ? posts : fetchedPosts).map(
									(post, index) => (
										<div key={index} className="blog-carousel__card">
											{post.featured_media_src_url && (
												<img
													src={post.featured_media_src_url}
													alt=""
													className="blog-carousel__card-image"
												/>
											)}
											<div className="blog-carousel__card-date">
												{new Date(post.date).toLocaleDateString()}
											</div>
											<h3 className="blog-carousel__card-title">
												{post.title.rendered}
											</h3>
											<p className="blog-carousel__card-excerpt">
												{post.excerpt.rendered.replace(/<[^>]+>/g, "")}
											</p>
										</div>
									),
								)}
							</div>
						</div>

						<div className="blog-carousel__footer">
							<a href={blogLink} className="blog-carousel__button">
								Перейти в блог
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
