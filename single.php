<?php

use Timber\Post;
use Timber\PostQuery;
use Timber\Timber;

$context = Timber::context();
$context['post'] = new Post();
$template = 'single.twig';

// Post pagination
if ($nextPost = get_next_post()) {
	$context['next_post'] = new Post($nextPost->ID);
}
if ($prevPost = get_previous_post()) {
	$context['prev_post'] = new Post($prevPost->ID);
}

if ($context['post']->post_type === 'contests') {
	$template = 'single-contests.twig';
}

Timber::render($template , $context);