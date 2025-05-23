<?php

/**
 * @file
 * Tugboat Drupal settings.
 *
 * This file cannot be edited, but you can add/override Tugboat settings after
 * it has been included in the main settings.php file.
 */

declare(strict_types=1);

if (getenv('TUGBOAT_REPO')) {
  $databases['default']['default'] = array (
    'database' => 'tugboat',
    'username' => 'tugboat',
    'password' => 'tugboat',
    'prefix' => '',
    'host' => 'database',
    'port' => '3306',
    'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
    'driver' => 'mysql',
  );

  $settings['hash_salt'] = hash('sha256', getenv('TUGBOAT_REPO_ID'));

  $settings['trusted_host_patterns'] = [
    '\.tugboatqa\.com$',
  ];
}
