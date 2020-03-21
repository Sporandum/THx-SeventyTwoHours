<?php

// Theme support
add_action('after_setup_theme', 'seventytwohours_features');
function seventytwohours_features() {

	add_theme_support('title-tag');
	add_theme_support('post-thumbnails');
	add_theme_support('html5', array(
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	));

}

// Remove support editor for front-page
add_action( 'admin_init', 'hide_editor' );
function hide_editor() {

    if($_GET['post'] == get_option('page_on_front')){ 
        remove_post_type_support('page', 'editor');
    }
}

// Remove <p> tag around input in contact form 7 plugin
// add_filter('wpcf7_autop_or_not', '__return_false');

// Remove Web site from comments fields
add_filter('comment_form_default_fields', 'remove_comments_field');
function remove_comments_field($fields) {
	unset($fields['url']);
	return $fields;
}