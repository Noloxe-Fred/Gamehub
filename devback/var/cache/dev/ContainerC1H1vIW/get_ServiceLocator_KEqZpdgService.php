<?php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.
// Returns the private '.service_locator.kEqZpdg' shared service.

return $this->privates['.service_locator.kEqZpdg'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($this->getService, [
    'game' => ['privates', '.errored..service_locator.kEqZpdg.App\\Entity\\Game', NULL, 'Cannot autowire service ".service_locator.kEqZpdg": it references class "App\\Entity\\Game" but no such service exists.'],
    'serializer' => ['services', 'serializer', 'getSerializerService', false],
]);