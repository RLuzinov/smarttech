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
	),
	'block-tabs-main' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-smarttech/block-tabs-main',
		'version' => '0.1.0',
		'title' => 'Block width tabs fot main page',
		'category' => 'smarttech',
		'icon' => 'smiley',
		'description' => 'Block width tabs fot main page',
		'example' => array(
			
		),
		'attributes' => array(
			'sectionTitle' => array(
				'type' => 'string',
				'default' => '/ Наш профиль /'
			),
			'tabs' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Отели',
						'description' => 'курортные / городские / загородные / эвент / mice',
						'number' => '/01/',
						'imageUrl' => 'https://static.tildacdn.com/tild6162-3337-4934-a330-363834646664/image_984_1.jpg'
					),
					array(
						'title' => 'Недвижимость',
						'description' => 'апарт / коммерческая / логистическая / horeca',
						'number' => '/02/',
						'imageUrl' => 'https://static.tildacdn.com/tild3733-3164-4864-b761-303966393135/image_986_1.jpg'
					),
					array(
						'title' => 'Загородные поселки',
						'description' => 'коттеджные поселки / resort-поселки / яхт, гольф, падл деревни',
						'number' => '/03/',
						'imageUrl' => 'https://static.tildacdn.com/tild3965-3563-4366-b937-353437613234/fasad-doma-melehovo_.jpg'
					),
					array(
						'title' => 'Туристические кластеры',
						'description' => 'агротуризм / wellness туризм / иммерсивный туризм',
						'number' => '/04/',
						'imageUrl' => 'https://static.tildacdn.com/tild6265-3137-4038-b833-323935663961/12_3_10_1.jpg'
					),
					array(
						'title' => 'Технологические кластеры',
						'description' => 'it-кластеры / агрокластеры / логистические кластеры',
						'number' => '/05/',
						'imageUrl' => 'https://static.tildacdn.com/tild6234-3431-4666-a535-353835383735/dom_2.jpg'
					),
					array(
						'title' => 'Wellness и мед. комплексы',
						'description' => 'примитивная медицина / санатории 2.0 / спа-комплексы / термы',
						'number' => '/06/',
						'imageUrl' => 'https://static.tildacdn.com/tild6438-6132-4465-a366-303461316664/render_otelia.png'
					),
					array(
						'title' => 'Редевелопмент',
						'description' => 'эффективное перепрофилирование туристических объектов',
						'number' => '/07/',
						'imageUrl' => 'https://static.tildacdn.com/tild3231-3636-4438-b533-613464336663/12_3_2.png'
					)
				)
			)
		),
		'supports' => array(
			'align' => false,
			'html' => false
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
