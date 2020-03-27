<?php

use Timber\Menu;
use Timber\Timber;

$timber = new Timber;

/**
 * Sets the directories (inside your theme) to find .twig files
 */
Timber::$dirname = array('views');

/**
 * Add menus to Timber
 */
function add_menus_to_context($context) {

	$context['header_menu_left'] = new Menu('header_menu_left');
	$context['header_menu_top'] = new Menu('header_menu_top');
	$context['header_menu_right'] = new Menu('header_menu_right');

	$context['privacy_url'] = get_privacy_policy_url();
	$context['privacy_title'] = get_the_title((int) get_option('wp_page_for_privacy_policy'));

	return $context;

}
add_filter('timber/context', 'add_menus_to_context');


// custom main query parameters
function my_home_query($query)
{
	if ($query->is_main_query() && !is_admin() && is_home()) {
		$query->set('posts_per_page', 3);
	}
}
add_action('pre_get_posts', 'my_home_query');
