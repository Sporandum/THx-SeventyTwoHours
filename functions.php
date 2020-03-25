<?php

// Require the composer autoload for getting conflict-free access to enqueue
require_once __DIR__ . '/vendor/autoload.php';

// WPACK.IO features init
require get_theme_file_path('/inc/wpack-setup.php');

// Timber
require_once get_theme_file_path('/inc/timber-setup.php');

// Custom Post Types
require get_theme_file_path('/inc/seventytwohours-post-types.php');

// Custom theme's functions
require get_theme_file_path('/inc/seventytwohours-theme-features.php');



if (isset($GLOBALS['pagenow']) && $GLOBALS['pagenow'] ==='wp-login.php' ) {
	if (!empty($_GET['action']) && $_GET['action'] === 'lostpassword') {
		wp_safe_redirect(site_url('/reset-password'));
	}
}