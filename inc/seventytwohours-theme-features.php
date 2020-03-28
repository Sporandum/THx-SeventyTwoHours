<?php

// Theme supports
add_action('after_setup_theme', 'seventytwohours_features');
function seventytwohours_features()
{

	add_theme_support('title-tag');
	add_theme_support('post-thumbnails');
	add_theme_support('html5', array(
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	));

	add_image_size('contests', 1040, 400, true);

	register_nav_menus(array(
		'header_menu_left' => 'Primary Menu Left',
		'header_menu_top' => 'Primary Menu Top',
		'header_menu_right' => 'primary Menu Right'
	));
}

// Remove support editor for some pages
add_action('admin_init', 'hide_editor');
function hide_editor()
{
	$pages_ID = array(
		get_option('page_on_front'), // Front Page
		get_page_by_path('programme')->ID,
		get_page_by_path('infos-pratiques ')->ID,
	);

	foreach ($pages_ID as $page_ID) {
		if (!empty($_GET['post']) && $_GET['post'] ==  $page_ID) {
			remove_post_type_support('page', 'editor');
		}
	}
}

// ACF Options page
if (function_exists('acf_add_options_page')) {
	acf_add_options_page();
}
