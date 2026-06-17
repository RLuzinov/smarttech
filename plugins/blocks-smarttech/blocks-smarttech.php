<?php
/**
 * Plugin Name:       Blocks Smarttech
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.8
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blocks-smarttech
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
define('BLOCKS_SMARTTECH_PATCH', plugin_dir_path(__FILE__));
add_filter(
	'block_categories_all',
	function ($categories) {
		return array_merge(
			$categories,
			[
				[
					'slug'  => 'smarttech',
					'title' => 'SmartTech',
				],
			]
		);
	}
);

function create_block_blocks_smarttech_block_init() {
	register_block_type(__DIR__ . '/build/block-header');
	register_block_type(__DIR__ . '/build/block-hero-main');
	register_block_type(__DIR__ . '/build/block-header-main');
	register_block_type(__DIR__ . '/build/block-tabs-main');
	register_block_type(__DIR__ . '/build/block-our-expertise-main');
	register_block_type(__DIR__ . '/build/block-about-main');
	register_block_type(__DIR__ . '/build/block-bringing-main');
	register_block_type(__DIR__ . '/build/block-smart-home-main');
	
}

add_action( 'init', 'create_block_blocks_smarttech_block_init' );
