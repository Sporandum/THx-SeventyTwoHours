<?php

use Timber\PostQuery;
use Timber\Timber;

$context = Timber::context();
$context['posts'] = new PostQuery();

// Don't exist YET
$template = 'archive.twig';

if ($context['wp_title'] === 'Contests') {
	$context['wp_title'] = 'Nos Contests';

	$template = 'archive-contests.twig';
}

Timber::render($template , $context);

// var_dump($context);
// var_dump($context['posts']);
