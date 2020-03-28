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


// redirect WP lost password url to Profile Builder Page lost paswword
if (isset($GLOBALS['pagenow']) && $GLOBALS['pagenow'] === 'wp-login.php') {
	if (!empty($_GET['action']) && $_GET['action'] === 'lostpassword') {
		if (get_page_by_path('/reset-password')) {
			wp_safe_redirect(site_url('/reset-password'));
			die;
		}
	}
}

// redirect WP logged out url to Profile Builder Page login
if (isset($GLOBALS['pagenow']) && $GLOBALS['pagenow'] === 'wp-login.php') {
	if (!empty($_GET['loggedout']) && $_GET['loggedout'] === 'true') {
		if (get_page_by_path('/log-in')) {
			wp_safe_redirect(site_url('/log-in?loggedout=true'));
		}
	}
}
// if (isset($GLOBALS['pagenow']) && $GLOBALS['pagenow'] === 'wp-login.php') {
// 	if (!empty($_GET['reauth']) && $_GET['reauth'] == 1) {
// 		if (get_page_by_path('/log-in')) {
// 			wp_safe_redirect(site_url('/log-in'));
// 			die;
// 		}
// 	}
// }

