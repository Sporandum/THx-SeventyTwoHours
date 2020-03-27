<?php

use Timber\Post;
use Timber\Timber;

$context = Timber::context();
$context['post'] = new Post();
$template = 'page.twig';

$currentSlug = $context['post']->slug;
$researchSlugs = ['log-in', 'edit-profile', 'register', 'reset-password'];

if (in_array($currentSlug, $researchSlugs)) {
	$template = 'page-user.twig';
}

Timber::render($template, $context);