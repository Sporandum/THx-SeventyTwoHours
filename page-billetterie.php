<?php

use Timber\Post;
use Timber\Timber;

$context = Timber::context();
$context['post'] = new Post();

timber::render('page-billetterie.twig', $context);