<?php
// Custom post types
function seventytwohours_post_types() {
	// Contest
	register_post_type('contests', array(
		'public' => true,
		'menu_icon' => 'dashicons-visibility',
		'show_in_rest' => true,
		'has_archive' => true, // For use block editor
		'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
		'labels' => array(
			'name' => 'Contests',
			'add_new_item' => 'Ajouter un contest',
			'edit_item' => 'Editer un contest',
			'all_items' => 'Contests',
			'singular_name' => 'Contest'
		)
	));
}

add_action('init', 'seventytwohours_post_types');