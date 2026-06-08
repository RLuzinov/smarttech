<?php
// This file is generated. Do not modify it manually.
return array(
	'block-header' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-smarttech/block-header',
		'version' => '0.1.0',
		'title' => 'Block Header',
		'category' => 'smarttech',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'logoUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'logoUrlDark' => array(
				'type' => 'string',
				'default' => ''
			),
			'phoneNumber' => array(
				'type' => 'string',
				'default' => '+7 (931) 111-95-03'
			),
			'languageText' => array(
				'type' => 'string',
				'default' => 'EN'
			),
			'languageUrl' => array(
				'type' => 'string',
				'default' => '#popup:infoblock'
			),
			'headerStyle' => array(
				'type' => 'string',
				'default' => 'overlay'
			),
			'menuItems' => array(
				'type' => 'array',
				'default' => array(
					array(
						'label' => 'Компания',
						'url' => '/o-kompanii'
					),
					array(
						'label' => 'Услуги',
						'url' => '#submenu:more-uslugi-kompanii'
					),
					array(
						'label' => 'Проекты',
						'url' => '#submenu:more-lokacii'
					),
					array(
						'label' => 'Портфолио',
						'url' => '/portfolio'
					),
					array(
						'label' => 'Блог',
						'url' => '/blog'
					)
				)
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'block-header-main' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-smarttech/block-header-main',
		'version' => '0.1.0',
		'title' => 'Block Header fot main page',
		'category' => 'smarttech',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'logoUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'logoUrlDark' => array(
				'type' => 'string',
				'default' => ''
			),
			'phoneNumber' => array(
				'type' => 'string',
				'default' => '+7 (931) 111 95 03'
			),
			'languageText' => array(
				'type' => 'string',
				'default' => 'EN'
			),
			'languageUrl' => array(
				'type' => 'string',
				'default' => '#popup:infoblock'
			),
			'headerStyle' => array(
				'type' => 'string',
				'default' => 'overlay'
			),
			'menuItems' => array(
				'type' => 'array',
				'default' => array(
					array(
						'label' => 'Компания',
						'url' => '/o-kompanii'
					),
					array(
						'label' => 'Услуги',
						'url' => '#submenu:more-uslugi-kompanii'
					),
					array(
						'label' => 'Проекты',
						'url' => '#submenu:more-lokacii'
					),
					array(
						'label' => 'Портфолио',
						'url' => '/portfolio'
					),
					array(
						'label' => 'Блог',
						'url' => '/blog'
					)
				)
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'block-hero-main' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-smarttech/block-hero-main',
		'version' => '0.1.0',
		'title' => 'Block Hero for Main page',
		'category' => 'smarttech',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'videoUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'title' => array(
				'type' => 'string',
				'default' => 'Разработка концепции, архитектура, проектирование, продуктовый девелопмент отельной недвижимости'
			),
			'buttonText' => array(
				'type' => 'string',
				'default' => 'Заказать консультацию'
			),
			'buttonUrl' => array(
				'type' => 'string',
				'default' => '#popup:infoblock'
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
