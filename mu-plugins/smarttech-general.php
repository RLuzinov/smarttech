<?php

/**  Plugin Name: SmartTech General
 * Description: Core code for SmartTech.
 * Version: 1.0
 * Author: RPereyaslow
 * Author URI: https://kwork.ru/user/romanluzinov
 * License: GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html 
 */


function smarttech_add_svg_mime( $mimes ) {
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
}
add_filter( 'upload_mimes', 'smarttech_add_svg_mime' );

/**
 * 2. Исправить определение типа файла для SVG.
 *    Без этого WP_MIME_Type может не распознать SVG.
 */
function smarttech_fix_svg_mime( $data, $file, $filename, $mimes ) {
	$ext = explode( '.', $filename );
	$ext = end( $ext );
	if ( 'svg' === $ext ) {
		$data['ext']  = 'svg';
		$data['type'] = 'image/svg+xml';
	}
	return $data;
}
add_filter( 'wp_check_filetype_and_ext', 'smarttech_fix_svg_mime', 10, 4 );

/**
 * 3. Показывать SVG в админке (в списке файлов, в редакторе).
 */
function smarttech_enable_svg_display() {
	echo '<style>
		.media-icon img[src$=".svg"],
		img[src$=".svg"].attachment-thumbnail {
			width: 100% !important;
			height: auto !important;
		}
	</style>';
}
add_action( 'admin_head', 'smarttech_enable_svg_display' );

/**
 * 4. (Опционально) Разрешить только администраторам.
 *    Если нужно всем — удалите этот фильтр.
 */
function smarttech_allow_svg_upload( $caps, $cap, $user_id, $args ) {
	if ( 'upload_files' === $cap ) {
		// Разрешить всем (убрать проверку, если нужно)
		// Или разрешить только админам:
		// $user = get_userdata( $user_id );
		// if ( $user && in_array( 'administrator', (array) $user->roles ) ) {
		//    $caps[] = 'upload_files';
		// }
	}
	return $caps;
}

function smarttech_sanitize_svg( $file ) {
	if ( 'image/svg+xml' === $file['type'] ) {
		$svg_content = file_get_contents( $file['tmp_name'] );
		// Удалить теги <script>, <use> с опасными атрибутами, обработчики событий
		$svg_content = preg_replace( '/<script.*?<\/script>/is', '', $svg_content );
		$svg_content = preg_replace( '/on\w+="[^"]*"/i', '', $svg_content );
		$svg_content = preg_replace( '/on\w+=\'[^\']*\'/i', '', $svg_content );
		file_put_contents( $file['tmp_name'], $svg_content );
	}
	return $file;
}