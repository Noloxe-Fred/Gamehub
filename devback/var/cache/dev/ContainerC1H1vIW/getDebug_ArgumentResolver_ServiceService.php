<?php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.
// Returns the private 'debug.argument_resolver.service' shared service.

include_once $this->targetDirs[3].'/vendor/symfony/http-kernel/Controller/ArgumentValueResolverInterface.php';
include_once $this->targetDirs[3].'/vendor/symfony/http-kernel/Controller/ArgumentResolver/TraceableValueResolver.php';
include_once $this->targetDirs[3].'/vendor/symfony/http-kernel/Controller/ArgumentResolver/ServiceValueResolver.php';

return $this->privates['debug.argument_resolver.service'] = new \Symfony\Component\HttpKernel\Controller\ArgumentResolver\TraceableValueResolver(new \Symfony\Component\HttpKernel\Controller\ArgumentResolver\ServiceValueResolver(new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($this->getService, [
    'App\\Api\\Controller\\ApiGameController::createGameAction' => ['privates', '.service_locator.niLDFWa', 'get_ServiceLocator_NiLDFWaService.php', true],
    'App\\Api\\Controller\\ApiGameController::getGameAction' => ['privates', '.service_locator.kEqZpdg', 'get_ServiceLocator_KEqZpdgService.php', true],
    'App\\Api\\Controller\\ApiGameController::getGamesAction' => ['privates', '.service_locator.znVN4UL', 'get_ServiceLocator_ZnVN4ULService.php', true],
    'App\\Api\\Controller\\ApiGameController::setViewHandler' => ['privates', '.service_locator.l2alLEu', 'get_ServiceLocator_L2alLEuService.php', true],
    'App\\Controller\\CategoryController::new' => ['privates', '.service_locator.pe89cNF', 'get_ServiceLocator_Pe89cNFService.php', true],
    'App\\Controller\\DeveloperController::new' => ['privates', '.service_locator.pe89cNF', 'get_ServiceLocator_Pe89cNFService.php', true],
    'App\\Controller\\EditorController::new' => ['privates', '.service_locator.pe89cNF', 'get_ServiceLocator_Pe89cNFService.php', true],
    'App\\Controller\\GameController::new' => ['privates', '.service_locator.pe89cNF', 'get_ServiceLocator_Pe89cNFService.php', true],
    'App\\Controller\\PlatformController::new' => ['privates', '.service_locator.pe89cNF', 'get_ServiceLocator_Pe89cNFService.php', true],
    'App\\Controller\\TypeController::new' => ['privates', '.service_locator.pe89cNF', 'get_ServiceLocator_Pe89cNFService.php', true],
    'App\\Controller\\UserController::new' => ['privates', '.service_locator.pe89cNF', 'get_ServiceLocator_Pe89cNFService.php', true],
    'App\\Api\\Controller\\ApiGameController:createGameAction' => ['privates', '.service_locator.niLDFWa', 'get_ServiceLocator_NiLDFWaService.php', true],
    'App\\Api\\Controller\\ApiGameController:getGameAction' => ['privates', '.service_locator.kEqZpdg', 'get_ServiceLocator_KEqZpdgService.php', true],
    'App\\Api\\Controller\\ApiGameController:getGamesAction' => ['privates', '.service_locator.znVN4UL', 'get_ServiceLocator_ZnVN4ULService.php', true],
    'App\\Api\\Controller\\ApiGameController:setViewHandler' => ['privates', '.service_locator.l2alLEu', 'get_ServiceLocator_L2alLEuService.php', true],
    'App\\Controller\\CategoryController:new' => ['privates', '.service_locator.pe89cNF', 'get_ServiceLocator_Pe89cNFService.php', true],
    'App\\Controller\\DeveloperController:new' => ['privates', '.service_locator.pe89cNF', 'get_ServiceLocator_Pe89cNFService.php', true],
    'App\\Controller\\EditorController:new' => ['privates', '.service_locator.pe89cNF', 'get_ServiceLocator_Pe89cNFService.php', true],
    'App\\Controller\\GameController:new' => ['privates', '.service_locator.pe89cNF', 'get_ServiceLocator_Pe89cNFService.php', true],
    'App\\Controller\\PlatformController:new' => ['privates', '.service_locator.pe89cNF', 'get_ServiceLocator_Pe89cNFService.php', true],
    'App\\Controller\\TypeController:new' => ['privates', '.service_locator.pe89cNF', 'get_ServiceLocator_Pe89cNFService.php', true],
    'App\\Controller\\UserController:new' => ['privates', '.service_locator.pe89cNF', 'get_ServiceLocator_Pe89cNFService.php', true],
])), ($this->privates['debug.stopwatch'] ?? ($this->privates['debug.stopwatch'] = new \Symfony\Component\Stopwatch\Stopwatch(true))));