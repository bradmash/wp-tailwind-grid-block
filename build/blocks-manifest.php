<?php
// This file is generated. Do not modify it manually.
return array(
	'grid-column' => array(
		'name' => 'bmashblocks/grid-column',
		'parent' => array(
			'bmashblocks/tailwind-grid-block'
		),
		'title' => 'Grid Column (bmashblocks)',
		'category' => 'layout',
		'supports' => array(
			'html' => false,
			'innerBlocks' => true
		),
		'attributes' => array(
			'layout' => array(
				'type' => 'string',
				'default' => 'grid'
			),
			'tagName' => array(
				'type' => 'string',
				'default' => 'div'
			),
			'ariaType' => array(
				'type' => 'string',
				'default' => 'aria-label'
			),
			'ariaValue' => array(
				'type' => 'string',
				'default' => ''
			),
			'role' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css'
	),
	'tailwind-grid-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'bmashblocks/tailwind-grid-block',
		'version' => '1.0.0',
		'title' => 'Tailwind Grid Block (bmashblocks)',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => '(Tailwind Grid Block Container) A responsive, accessible grid layout block powered by Tailwind CSS.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'innerBlocks' => true
		),
		'attributes' => array(
			'tagName' => array(
				'type' => 'string',
				'default' => 'div'
			),
			'role' => array(
				'type' => 'string',
				'default' => ''
			),
			'ariaType' => array(
				'type' => 'string',
				'default' => 'aria-label'
			),
			'ariaValue' => array(
				'type' => 'string',
				'default' => ''
			),
			'layout' => array(
				'type' => 'string',
				'default' => 'grid'
			),
			'columns' => array(
				'type' => 'number',
				'default' => 3
			),
			'columnsSm' => array(
				'type' => 'number',
				'default' => null
			),
			'columnsMd' => array(
				'type' => 'number',
				'default' => null
			),
			'columnsLg' => array(
				'type' => 'number',
				'default' => null
			),
			'columnsXl' => array(
				'type' => 'number',
				'default' => null
			),
			'columns2Xl' => array(
				'type' => 'number',
				'default' => null
			),
			'gap' => array(
				'type' => 'string',
				'default' => 'gap-4'
			),
			'gapSm' => array(
				'type' => 'string',
				'default' => null
			),
			'gapMd' => array(
				'type' => 'string',
				'default' => null
			),
			'gapLg' => array(
				'type' => 'string',
				'default' => null
			),
			'gapXl' => array(
				'type' => 'string',
				'default' => null
			),
			'gap2Xl' => array(
				'type' => 'string',
				'default' => null
			)
		),
		'textdomain' => 'tailwind-grid-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css'
	)
);
