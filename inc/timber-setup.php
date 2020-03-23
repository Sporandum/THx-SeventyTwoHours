<?php

use Timber\Timber;

$timber = new Timber;

/**
 * Sets the directories (inside your theme) to find .twig files
 */
Timber::$dirname = array('views');


// custom main query parameters
function my_home_query($query)
{
	if ($query->is_main_query() && !is_admin() && is_home()) {
		$query->set('posts_per_page', 3);
	}
}
add_action('pre_get_posts', 'my_home_query');
