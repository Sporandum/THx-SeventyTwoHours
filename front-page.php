<?php

use Timber\Post;
use Timber\Timber;

$context = Timber::context();
$post = new Post();
$context['post'] = $post;

Timber::render( 'front-page.twig', $context);
