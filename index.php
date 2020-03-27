<?php

use Timber\PostQuery;
use Timber\Timber;

$context = Timber::context();
$context['posts'] = new PostQuery();

Timber::render('base.twig', $context);