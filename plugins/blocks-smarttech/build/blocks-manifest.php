<?php
// This file is generated. Do not modify it manually.
return array(
	'block-about-main' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-smarttech/block-about-main',
		'version' => '0.1.0',
		'title' => 'Block about fot main page',
		'category' => 'smarttech',
		'icon' => 'smiley',
		'description' => 'Block about fot main page',
		'example' => array(
			
		),
		'attributes' => array(
			'sectionLabel' => array(
				'type' => 'string',
				'default' => '/ О компании /'
			),
			'sectionTitle' => array(
				'type' => 'string',
				'default' => 'SmartTech Development®'
			),
			'mainText' => array(
				'type' => 'string',
				'default' => 'Мы создаём девелоперские проекты нового поколения, объединяя технологии, стратегию и креативность. В нашей команде — эксперты мирового уровня в архитектуре, дизайне, BIM-проектировании, маркетинге, аналитике, digital и продуктовом менеджменте.'
			),
			'column2Texts' => array(
				'type' => 'array',
				'default' => array(
					'Наш фокус — не просто квадратные метры, а устойчивые бизнес-модели, инвестиционная эффективность и долгосрочная ценность для клиентов, партнеров и территорий',
					'Мы используем AI, Big Data и международные стандарты LEED / BREEAM, чтобы создавать девелоперские проекты, которые задают тренды в отрасли и формируют новое качество жизни и отдыха. Превращаем идеи в высоколиквидные девелоперские проекты',
					'Мы верим, что девелопмент — это не метры, а экосистемы для жизни и бизнеса. SmartTech Development создает проекты, которые формируют будущее территорий и сообществ'
				)
			),
			'videoUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'videoType' => array(
				'type' => 'string',
				'default' => 'url'
			),
			'videoPlaceholderUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'philosophyVideoUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'philosophyVideoType' => array(
				'type' => 'string',
				'default' => 'url'
			),
			'philosophyImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'philosophyLabel' => array(
				'type' => 'string',
				'default' => 'наша философия'
			),
			'metrics' => array(
				'type' => 'array',
				'default' => array(
					array(
						'label' => 'Реализованных проектов в отельной сфере за 2023–2025 гг.',
						'number' => '1000+',
						'unit' => '/проектов'
					),
					array(
						'label' => 'Опыта в продуктовом девелопменте жилой и отельной недвижимости',
						'number' => '15',
						'unit' => '/лет'
					),
					array(
						'label' => 'In-house экспертов и более 400 партнеров по всему миру — от архитекторов до аналитиков',
						'number' => '+50',
						'unit' => '/экспертов'
					),
					array(
						'label' => 'Россия, СНГ, Азия, Восток',
						'number' => '5',
						'unit' => '/офисов'
					),
					array(
						'label' => 'Архитектурных наград и премий',
						'number' => '+50',
						'unit' => '/наград'
					)
				)
			),
			'certificationTitle' => array(
				'type' => 'string',
				'default' => 'LEED Accredited'
			),
			'certificationText' => array(
				'type' => 'string',
				'default' => 'Работаем по международным стандартам LEED Accredited Professionals/BREEAM Assessors'
			),
			'awards' => array(
				'type' => 'array',
				'default' => array(
					array(
						'text' => '1-е место в номинации «Лучший кемпинг Innovation до 150 м²»',
						'imageUrl' => ''
					),
					array(
						'text' => '1-е место в номинации «Красивые дома. Интерьер»',
						'imageUrl' => ''
					),
					array(
						'text' => '1-е место в номинации «Объект 2020 года»',
						'imageUrl' => ''
					),
					array(
						'text' => '1-е место в номинации «Загородная недвижимость»',
						'imageUrl' => ''
					),
					array(
						'text' => 'Гран-при в номинации «Архитектура жилых зданий»',
						'imageUrl' => ''
					),
					array(
						'text' => '1-е место в номинации «Лучшей объект культуры Innovation»',
						'imageUrl' => ''
					)
				)
			)
		),
		'supports' => array(
			'html' => false
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'block-blog-carusel-main' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-smarttech/block-blog-carusel-main',
		'version' => '0.1.0',
		'title' => 'Block Blog Carusel for Main page',
		'category' => 'smarttech',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'attributes' => array(
			'sectionTitle' => array(
				'type' => 'string',
				'default' => 'Блог компании'
			),
			'sectionDescription' => array(
				'type' => 'string',
				'default' => 'следите за нами в соцмедиа'
			),
			'desktopSlides' => array(
				'type' => 'number',
				'default' => 4
			),
			'mobileSlides' => array(
				'type' => 'number',
				'default' => 1
			),
			'blogLink' => array(
				'type' => 'string',
				'default' => '/blog'
			),
			'posts' => array(
				'type' => 'array',
				'default' => array(
					
				)
			)
		),
		'supports' => array(
			'html' => false
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'editorStyle' => 'file:./index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'block-bringing-main' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-smarttech/block-bringing-main',
		'version' => '0.1.0',
		'title' => 'Block bringing for main page',
		'category' => 'smarttech',
		'icon' => 'smiley',
		'description' => 'Block width tabs fot main page',
		'example' => array(
			
		),
		'attributes' => array(
			'sectionTitle' => array(
				'type' => 'string',
				'default' => 'Выводим на рынок знаковые проекты'
			),
			'description' => array(
				'type' => 'string',
				'default' => 'Мы реализовали сотни крутых идей и объектов в разных уголках страны, от концепции, проектирования до строительства и продажи последнего квадратного метра'
			),
			'columns' => array(
				'type' => 'array',
				'default' => array(
					array(
						'images' => array(
							
						)
					),
					array(
						'images' => array(
							
						)
					),
					array(
						'images' => array(
							
						)
					),
					array(
						'images' => array(
							
						)
					),
					array(
						'images' => array(
							
						)
					),
					array(
						'images' => array(
							
						)
					),
					array(
						'images' => array(
							
						)
					)
				)
			)
		),
		'supports' => array(
			'html' => false
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'block-cta-create-project-main' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-smarttech/block-cta-create-project-main',
		'version' => '0.1.0',
		'title' => 'Block CTA Create Project for Main page',
		'category' => 'smarttech',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'attributes' => array(
			'backgroundImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'sectionTitle' => array(
				'type' => 'string',
				'default' => 'Давайте создадим ваш девелоперский-проект мечты'
			),
			'cardImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'description' => array(
				'type' => 'string',
				'default' => 'Расскажите о своей идее — и мы покажем, как превратить её в прибыльный спа-комплекс с гарантированной окупаемостью'
			),
			'buttonText' => array(
				'type' => 'string',
				'default' => 'Обсудить проект'
			),
			'buttonUrl' => array(
				'type' => 'string',
				'default' => '#popup:myform-consult'
			)
		),
		'supports' => array(
			'html' => false
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
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
		'title' => 'Block Header for Main page',
		'category' => 'smarttech',
		'icon' => 'smiley',
		'description' => 'Header block with scale and letter‑by‑letter animation.',
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
			'mobileMenuBgImage' => array(
				'type' => 'string',
				'default' => ''
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
	'block-our-expertise-main' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-smarttech/block-our-expertise-main',
		'version' => '0.1.0',
		'title' => 'Block Our Expertise for Main page',
		'category' => 'smarttech',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'attributes' => array(
			'sectionTitle' => array(
				'type' => 'string',
				'default' => 'Наша экспертиза'
			),
			'categories' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Стратегия & капитал',
						'metricNumber' => '297',
						'metricLabel' => 'проектов реализовано',
						'cards' => array(
							array(
								'iconCount' => 3,
								'title' => 'ESG и зеленая сертификация (LEED/BREEAM)',
								'description' => 'Разрабатываем ESG-стратегию и сопровождаем в получении сертификатов LEED/BREEAM для повышения инвестиционной привлекательности вашего проекта',
								'buttonText' => 'Рассчитать ESG-эффект',
								'buttonUrl' => '#popup:myform-consult'
							),
							array(
								'iconCount' => 3,
								'title' => 'Инвестиционный брокеридж и финтех',
								'description' => 'Привлекаем проектное финансирование и частный капитал, в том числе через выпуск Цифровых Финансовых Активов (ЦФА) на блокчейне',
								'buttonText' => 'Привлечь финансирование',
								'buttonUrl' => '#popup:myform-consult'
							),
							array(
								'iconCount' => 3,
								'title' => 'Аналитика и стратегия развития территорий',
								'description' => 'Анализируем потенциал земельного актива. Разрабатываем стратегию Best Use и финансовую модель, превращая ваш участок в высокодоходный проект',
								'buttonText' => 'Оценить потенциал участка',
								'buttonUrl' => '#popup:myform-consult'
							)
						)
					),
					array(
						'title' => 'Продукт & проектирование',
						'metricNumber' => '308',
						'metricLabel' => 'отельных концепций по всему миру',
						'cards' => array(
							array(
								'iconCount' => 3,
								'title' => 'Продуктовый девелопмент и брендинг',
								'description' => 'Создаем уникальную концепцию, архитектурный облик и сильный бренд проекта, который будет востребован рынком и отстроен от конкурентов',
								'buttonText' => 'Создать сильный бренд',
								'buttonUrl' => '#popup:myform-consult'
							),
							array(
								'iconCount' => 3,
								'title' => 'Архитектура и BIM-проектирование с AI',
								'description' => 'Применяем искусственный интеллект в BIM-проектировании для оптимизации бюджета, сроков и создания эффективных проектных решений',
								'buttonText' => 'Оптимизировать ваш проект',
								'buttonUrl' => '#popup:myform-consult'
							),
							array(
								'iconCount' => 3,
								'title' => 'Экспертиза в индустрии гостеприимства',
								'description' => 'Создаем успешные гостиничные проекты: от выбора международного оператора до управления операционной доходностью и Asset Management',
								'buttonText' => 'Выбрать лучшего оператора',
								'buttonUrl' => '#popup:myform-consult'
							)
						)
					),
					array(
						'title' => 'Маркетинг & продажи',
						'metricNumber' => '',
						'metricLabel' => '',
						'cards' => array(
							array(
								'iconCount' => 4,
								'title' => 'Digital-маркетинг и AI-стратегии',
								'description' => 'Разрабатываем маркетинговые стратегии на базе AI и генерируем целевой поток лидов через все digital-каналы',
								'buttonText' => 'Запустить digital-продвижение',
								'buttonUrl' => '#popup:myform-consult'
							),
							array(
								'iconCount' => 4,
								'title' => 'Упаковка проекта к старту продаж',
								'description' => 'Создаем бренд, айдентику и материалы для вывода проекта на рынок с максимальным эффектом',
								'buttonText' => 'Получить бренд-кит',
								'buttonUrl' => '#popup:myform-consult'
							),
							array(
								'iconCount' => 4,
								'title' => 'VR/AR/360 иммерсивные решения',
								'description' => 'Создаем впечатляющие VR/AR-инструменты для эмоциональной и максимально эффективной презентации вашего будущего проекта',
								'buttonText' => 'Визуализировать будущий проект',
								'buttonUrl' => '#popup:myform-consult'
							),
							array(
								'iconCount' => 4,
								'title' => 'Организация продаж и предиктивная аналитика',
								'description' => 'Строим отдел продаж «под ключ» и используем предиктивную аналитику AVM для прогнозирования темпов продаж и ценообразования',
								'buttonText' => 'Спрогнозировать темпы продаж',
								'buttonUrl' => '#popup:myform-consult'
							)
						)
					),
					array(
						'title' => 'Реализация & управление',
						'metricNumber' => '11',
						'metricLabel' => 'проектов ведем в realtime',
						'cards' => array(
							array(
								'iconCount' => 3,
								'title' => 'Pre-девелопмент и реализация проекта',
								'description' => 'Осуществляем комплексное управление проектом: от due diligence и GR-сопровождения до контроля строительства и ввода объекта в эксплуатацию',
								'buttonText' => 'Реализовать ваш проект',
								'buttonUrl' => '#popup:myform-consult'
							),
							array(
								'iconCount' => 3,
								'title' => 'Умные здания и AI-интеграция',
								'description' => 'Проектируем и внедряем интеллектуальные системы управления зданием (BMS) на базе AI для автоматизации эксплуатации, экономии и безопасности',
								'buttonText' => 'Внедрить умные системы',
								'buttonUrl' => '#popup:myform-consult'
							),
							array(
								'iconCount' => 3,
								'title' => 'Управление активами и AI-эксплуатация',
								'description' => 'Обеспечиваем доходность готового объекта, подключая оператора и внедряя AI-решения для оптимизации процессов эксплуатации и сервиса',
								'buttonText' => 'Повысить доходность объекта',
								'buttonUrl' => '#popup:myform-consult'
							)
						)
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
	),
	'block-our-komand-main' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-smarttech/block-our-komand-main',
		'version' => '0.1.0',
		'title' => 'Block Our Komand for Main page',
		'category' => 'smarttech',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'attributes' => array(
			'sectionTitle' => array(
				'type' => 'string',
				'default' => 'Команда'
			),
			'sectionDescription' => array(
				'type' => 'string',
				'default' => 'Мы нацелены строить долгосрочные, честные и надёжные партнёрские отношения'
			),
			'teamRows' => array(
				'type' => 'array',
				'default' => array(
					array(
						array(
							'imageUrl' => '',
							'name' => 'Сергей Майоров',
							'position' => 'руководитель отдела Horeca',
							'doubleWidth' => false
						),
						array(
							'imageUrl' => '',
							'name' => 'Мария Курицына',
							'position' => 'руководитель отдела развития',
							'doubleWidth' => false
						),
						array(
							'imageUrl' => '',
							'name' => 'Михаил Кузин',
							'position' => 'руководитель отдела продаж B2B',
							'doubleWidth' => false
						),
						array(
							'imageUrl' => '',
							'name' => 'Евгений Синдер',
							'position' => 'руководитель PR-отдела',
							'doubleWidth' => false
						),
						array(
							'imageUrl' => '',
							'name' => 'Василий Матафанов',
							'position' => 'искусство в городской среде',
							'doubleWidth' => false
						),
						array(
							'imageUrl' => '',
							'name' => 'Андрей Соколов',
							'position' => 'упаковка проекта к старту продаж',
							'doubleWidth' => false
						),
						array(
							'imageUrl' => '',
							'name' => 'Роман Войтов',
							'position' => 'продуктолог',
							'doubleWidth' => false
						),
						array(
							'imageUrl' => '',
							'name' => 'Дмитрий Анцупов',
							'position' => 'руководитель отдела Horeca',
							'doubleWidth' => false
						),
						array(
							'imageUrl' => '',
							'name' => 'Алена Неймова',
							'position' => 'архитектор',
							'doubleWidth' => false
						),
						array(
							'imageUrl' => '',
							'name' => 'Тотов Денис',
							'position' => 'финансовый аналитик',
							'doubleWidth' => false
						)
					),
					array(
						array(
							'imageUrl' => '',
							'name' => 'Анастасия Пересада',
							'position' => 'бренд-стратег',
							'doubleWidth' => false
						),
						array(
							'imageUrl' => '',
							'name' => 'Елена Губанова',
							'position' => 'руководитель отдела продаж',
							'doubleWidth' => false
						),
						array(
							'imageUrl' => '',
							'name' => 'Денис Нырков',
							'position' => 'руководитель отдела GR',
							'doubleWidth' => false
						),
						array(
							'imageUrl' => '',
							'name' => 'Роман Василенко',
							'position' => 'руководитель отдела технадзора',
							'doubleWidth' => false
						),
						array(
							'imageUrl' => '',
							'name' => 'Екатерина Шмиртонова',
							'position' => 'руководитель отдела smm',
							'doubleWidth' => false
						),
						array(
							'imageUrl' => '',
							'name' => 'Оганес Байбуртян',
							'position' => 'бренд-стратег',
							'doubleWidth' => false
						),
						array(
							'imageUrl' => '',
							'name' => 'Александр',
							'position' => '',
							'doubleWidth' => false
						)
					),
					array(
						array(
							'imageUrl' => '',
							'name' => 'Артем Мальцев',
							'position' => 'руководитель отдела продаж международные рынки',
							'doubleWidth' => false
						),
						array(
							'imageUrl' => '',
							'name' => 'Роман Старостин',
							'position' => 'продуктолог',
							'doubleWidth' => false
						),
						array(
							'imageUrl' => '',
							'name' => 'Мария Руз',
							'position' => 'бренд-стратегия, бренд-платформа',
							'doubleWidth' => false
						),
						array(
							'imageUrl' => '',
							'name' => 'Андрей Сафронов',
							'position' => 'руководитель отдела проектирования',
							'doubleWidth' => false
						),
						array(
							'imageUrl' => '',
							'name' => 'Павел Железный',
							'position' => 'руководитель отдела prefab-разработок',
							'doubleWidth' => false
						),
						array(
							'imageUrl' => '',
							'name' => 'Лилия Искандарова',
							'position' => 'руководитель отдела по работе с кредитными организациями',
							'doubleWidth' => false
						),
						array(
							'imageUrl' => '',
							'name' => 'Евгений Тюнцев',
							'position' => 'руководитель аналитического отдела',
							'doubleWidth' => false
						),
						array(
							'imageUrl' => '',
							'name' => 'Михаил Пурасов',
							'position' => 'руководитель отдела коллективных инвестиций',
							'doubleWidth' => false
						),
						array(
							'imageUrl' => '',
							'name' => 'Евгений Сафронов',
							'position' => 'руководитель продуктового отдела',
							'doubleWidth' => false
						)
					)
				)
			)
		),
		'supports' => array(
			'html' => false
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'block-our-partners-main' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-smarttech/block-our-partners-main',
		'version' => '0.1.0',
		'title' => 'Block Our Partners for Main page',
		'category' => 'smarttech',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'attributes' => array(
			'sectionTitle' => array(
				'type' => 'string',
				'default' => 'Клиенты и партнеры'
			),
			'sectionDescription' => array(
				'type' => 'string',
				'default' => 'SmartTech Development — партнер, которому доверяют мировые лидеры индустрии'
			),
			'tabButtons' => array(
				'type' => 'array',
				'default' => array(
					'СНГ',
					'Мир'
				)
			),
			'tabs' => array(
				'type' => 'array',
				'default' => array(
					array(
						'logos' => array(
							
						)
					),
					array(
						'logos' => array(
							
						)
					)
				)
			)
		),
		'supports' => array(
			'html' => false
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'block-partner-prog-main' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-smarttech/block-partner-prog-main',
		'version' => '0.1.0',
		'title' => 'Block Partner Programs for Main page',
		'category' => 'smarttech',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'attributes' => array(
			'sectionTitle' => array(
				'type' => 'string',
				'default' => 'Партнерская программа
SmartTech Development®'
			),
			'sectionDescription' => array(
				'type' => 'string',
				'default' => 'Мы сотрудничаем с девелоперами, государственными структурами, подрядчиками, агентствами, консультантами и отельными операторами. Наша цель — реализовывать эффективные проекты любого масштаба вместе с сильными партнёрами'
			),
			'topCards' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Для девелоперов',
						'description' => 'Полный цикл продуктового девелопмента: от анализа рынка до реализации и продаж:

• единый центр компетенций;
• экономия времени и снижение рисков;
• максимальная инвестиционная эффективность'
					),
					array(
						'title' => 'Для агентств',
						'description' => 'Продвижение и совместные продажи:

• комиссия до 10%;
• совместные маркетинговые кампании;
• обучение партнеров'
					),
					array(
						'title' => 'Для отельных операторов',
						'description' => 'Совместное развитие объектов и брендов:

• внедрение международных стандартов сервиса;
• оптимизация бизнес-модели и доходности;
• участие в проектах от бутик-отелей до курортов'
					),
					array(
						'title' => 'Для государственных структур',
						'description' => 'Развитие регионов и качества жизни:

• туризм и социальная инфраструктура;
• опыт федеральных и международных проектов'
					)
				)
			),
			'videoUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'videoType' => array(
				'type' => 'string',
				'default' => 'url'
			),
			'videoPlaceholderUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'videoRotatingText' => array(
				'type' => 'string',
				'default' => 'смотреть видео • смотреть видео • смотреть видео •'
			),
			'bottomCards' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Для консультантов',
						'description' => 'Синергия экспертизы и идей:

• реферальная программа;
• совместные исследования и мероприятия'
					),
					array(
						'title' => 'Для подрядчиков',
						'description' => 'Надёжные партнёрства и долгосрочные контракты:

• прогнозируемый объем работ;
• совместные инновационные проекты'
					)
				)
			),
			'ctaText' => array(
				'type' => 'string',
				'default' => 'Оставьте контакты — и мы предложим индивидуальные условия сотрудничества.
Запросите презентацию партнёрской программы, чтобы узнать больше'
			),
			'buttonText' => array(
				'type' => 'string',
				'default' => 'Презентация партнерской программы'
			),
			'buttonUrl' => array(
				'type' => 'string',
				'default' => '#popup:myform-consult'
			)
		),
		'supports' => array(
			'html' => false
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'block-smart-home-main' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-smarttech/block-smart-home-main',
		'version' => '0.1.0',
		'title' => 'Block Smart Home for Main page',
		'category' => 'smarttech',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'attributes' => array(
			'sectionTitle' => array(
				'type' => 'string',
				'default' => 'SmartHome'
			),
			'sectionDescription' => array(
				'type' => 'string',
				'default' => 'Разрабатываем концепции, проектируем и производим модульные дома по prefab-технологии для загородных отелей и клубных коттеджных поселков'
			),
			'rows' => array(
				'type' => 'array',
				'default' => array(
					array(
						'layout' => 'first',
						'columns' => array(
							array(
								'width' => 560,
								'media' => array(
									array(
										'type' => 'image',
										'url' => '',
										'poster' => '',
										'rotatingText' => ''
									)
								),
								'title' => 'GLASS VILLA',
								'buttonText' => 'Подробнее',
								'buttonUrl' => '#'
							)
						)
					),
					array(
						'layout' => 'second',
						'columns' => array(
							array(
								'width' => 560,
								'media' => array(
									
								),
								'title' => 'GLASS VILLA XL',
								'buttonText' => 'Подробнее',
								'buttonUrl' => '#'
							),
							array(
								'width' => 270,
								'media' => array(
									
								),
								'title' => 'Отель HELTON',
								'buttonText' => 'Подробнее',
								'buttonUrl' => '#'
							)
						)
					),
					array(
						'layout' => 'third',
						'columns' => array(
							array(
								'width' => 560,
								'media' => array(
									
								),
								'title' => 'Модель X GREY GLASS',
								'buttonText' => 'Подробнее',
								'buttonUrl' => '#'
							),
							array(
								'width' => 270,
								'media' => array(
									
								),
								'title' => 'Дом, 125 м2',
								'buttonText' => 'Подробнее',
								'buttonUrl' => '#'
							)
						)
					)
				)
			)
		),
		'supports' => array(
			'html' => false
		),
		'editorScript' => 'file:./index.js',
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
