<?php
$section_title  = $attributes['sectionTitle'] ?? 'Блог компании';
$section_desc   = $attributes['sectionDescription'] ?? 'следите за нами в соцмедиа';
$desktop_slides = $attributes['desktopSlides'] ?? 4;
$mobile_slides  = $attributes['mobileSlides'] ?? 1;
$blog_link      = $attributes['blogLink'] ?? '/blog';

// Получаем последние посты
$recent_posts = wp_get_recent_posts([
    'numberposts' => 10,
    'post_status' => 'publish',
]);
?>
<div class="wp-block-blocks-smarttech-blog-carousel-scaler-main">
<div class="blog-carousel-scaler" id="blog-carousel-scaler">
    <div class="blog-carousel-block">
        <div class="blog-carousel__header">
            <h2 class="blog-carousel__title"><?php echo esc_html($section_title); ?></h2>
            <p class="blog-carousel__desc"><?php echo esc_html($section_desc); ?></p>
        </div>

        <div class="blog-carousel__slider"
             data-desktop-slides="<?php echo esc_attr($desktop_slides); ?>"
             data-mobile-slides="<?php echo esc_attr($mobile_slides); ?>">
            <div class="blog-carousel__track">
                <?php foreach ($recent_posts as $post) :
                    $image_url = get_the_post_thumbnail_url($post['ID'], 'medium');
                    $date      = get_the_date('', $post['ID']);
                    $title     = esc_html($post['post_title']);
                    $excerpt   = esc_html(wp_trim_words(get_the_excerpt($post['ID']), 15));
                ?>
                    <div class="blog-carousel__card">
                        <?php if ($image_url) : ?>
                            <img src="<?php echo esc_url($image_url); ?>" alt="" class="blog-carousel__card-image" />
                        <?php endif; ?>
                        <div class="blog-carousel__card-date"><?php echo $date; ?></div>
                        <h3 class="blog-carousel__card-title"><?php echo $title; ?></h3>
                        <p class="blog-carousel__card-excerpt"><?php echo $excerpt; ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>

        <div class="blog-carousel__footer">
            <a href="<?php echo esc_url($blog_link); ?>" class="blog-carousel__button">Перейти в блог</a>
        </div>
    </div>
</div>
</div>