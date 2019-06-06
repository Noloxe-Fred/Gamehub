<?php

use Symfony\Component\Routing\RequestContext;
use Symfony\Component\Routing\Exception\RouteNotFoundException;
use Psr\Log\LoggerInterface;

/**
 * This class has been auto-generated
 * by the Symfony Routing Component.
 */
class srcApp_KernelDevDebugContainerUrlGenerator extends Symfony\Component\Routing\Generator\UrlGenerator
{
    private static $declaredRoutes;
    private $defaultLocale;

    public function __construct(RequestContext $context, LoggerInterface $logger = null, string $defaultLocale = null)
    {
        $this->context = $context;
        $this->logger = $logger;
        $this->defaultLocale = $defaultLocale;
        if (null === self::$declaredRoutes) {
            self::$declaredRoutes = [
        '_twig_error_test' => [['code', '_format'], ['_controller' => 'twig.controller.preview_error::previewErrorPageAction', '_format' => 'html'], ['code' => '\\d+'], [['variable', '.', '[^/]++', '_format', true], ['variable', '/', '\\d+', 'code', true], ['text', '/_error']], [], []],
        '_wdt' => [['token'], ['_controller' => 'web_profiler.controller.profiler::toolbarAction'], [], [['variable', '/', '[^/]++', 'token', true], ['text', '/_wdt']], [], []],
        '_profiler_home' => [[], ['_controller' => 'web_profiler.controller.profiler::homeAction'], [], [['text', '/_profiler/']], [], []],
        '_profiler_search' => [[], ['_controller' => 'web_profiler.controller.profiler::searchAction'], [], [['text', '/_profiler/search']], [], []],
        '_profiler_search_bar' => [[], ['_controller' => 'web_profiler.controller.profiler::searchBarAction'], [], [['text', '/_profiler/search_bar']], [], []],
        '_profiler_phpinfo' => [[], ['_controller' => 'web_profiler.controller.profiler::phpinfoAction'], [], [['text', '/_profiler/phpinfo']], [], []],
        '_profiler_search_results' => [['token'], ['_controller' => 'web_profiler.controller.profiler::searchResultsAction'], [], [['text', '/search/results'], ['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], []],
        '_profiler_open_file' => [[], ['_controller' => 'web_profiler.controller.profiler::openAction'], [], [['text', '/_profiler/open']], [], []],
        '_profiler' => [['token'], ['_controller' => 'web_profiler.controller.profiler::panelAction'], [], [['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], []],
        '_profiler_router' => [['token'], ['_controller' => 'web_profiler.controller.router::panelAction'], [], [['text', '/router'], ['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], []],
        '_profiler_exception' => [['token'], ['_controller' => 'web_profiler.controller.exception::showAction'], [], [['text', '/exception'], ['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], []],
        '_profiler_exception_css' => [['token'], ['_controller' => 'web_profiler.controller.exception::cssAction'], [], [['text', '/exception.css'], ['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], []],
        'category_new' => [[], ['_controller' => 'App\\Controller\\CategoryController::new'], [], [['text', '/admin/category/new']], [], []],
        'developer_new' => [[], ['_controller' => 'App\\Controller\\DeveloperController::new'], [], [['text', '/admin/developer/new']], [], []],
        'editor_new' => [[], ['_controller' => 'App\\Controller\\EditorController::new'], [], [['text', '/admin/editor/new']], [], []],
        'game_new' => [[], ['_controller' => 'App\\Controller\\GameController::new'], [], [['text', '/admin/game/new']], [], []],
        'platform_new' => [[], ['_controller' => 'App\\Controller\\PlatformController::new'], [], [['text', '/admin/platform/new']], [], []],
        'score_index' => [[], ['_controller' => 'App\\Controller\\ScoreController::index'], [], [['text', '/score/']], [], []],
        'score_show' => [['id'], ['_controller' => 'App\\Controller\\ScoreController::show'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/score']], [], []],
        'app_login' => [[], ['_controller' => 'App\\Controller\\SecurityController::login'], [], [['text', '/login']], [], []],
        'type_new' => [[], ['_controller' => 'App\\Controller\\TypeController::new'], [], [['text', '/admin/type/new']], [], []],
        'category_game_list' => [['id'], ['_controller' => 'App\\Api\\Controller\\ApiCategoryController::getGamesByCategoryAction'], ['id' => '\\d+'], [['text', '/games'], ['variable', '/', '\\d+', 'id', true], ['text', '/api/category']], [], []],
        'game_list' => [[], ['_controller' => 'App\\Api\\Controller\\ApiGameController::getGamesAction'], [], [['text', '/api/game/list']], [], []],
        'game_show' => [['id'], ['_controller' => 'App\\Api\\Controller\\ApiGameController::getGameAction'], ['id' => '\\d+'], [['variable', '/', '\\d+', 'id', true], ['text', '/api/game']], [], []],
        'game_next_month' => [[], ['_controller' => 'App\\Api\\Controller\\ApiGameController::getNextMonthGamesAction'], [], [['text', '/api/game/list/nextmonth']], [], []],
        'game_last_month' => [[], ['_controller' => 'App\\Api\\Controller\\ApiGameController::getLastMonthGamesAction'], [], [['text', '/api/game/list/lastmonth']], [], []],
        'game_random_list' => [[], ['_controller' => 'App\\Api\\Controller\\ApiGameController::getRandomGamesList'], [], [['text', '/api/game/list/random']], [], []],
        'score_new' => [[], ['_controller' => 'App\\Api\\Controller\\ApiScoreController::newScoreAction'], [], [['text', '/api/score/new']], [], []],
        'score_edit' => [[], ['_controller' => 'App\\Api\\Controller\\ApiScoreController::editScoreAction'], [], [['text', '/api/score/edit']], [], []],
        'score_delete' => [[], ['_controller' => 'App\\Api\\Controller\\ApiScoreController::deleteScoreAction'], [], [['text', '/api/score/delete']], [], []],
        'user_new' => [[], ['_controller' => 'App\\Api\\Controller\\ApiUserController::newUserAction'], [], [['text', '/api/signup']], [], []],
        'login_check' => [[], [], [], [['text', '/api/login_check']], [], []],
        'api_signup' => [[], [], [], [['text', '/api/signup']], [], []],
    ];
        }
    }

    public function generate($name, $parameters = [], $referenceType = self::ABSOLUTE_PATH)
    {
        $locale = $parameters['_locale']
            ?? $this->context->getParameter('_locale')
            ?: $this->defaultLocale;

        if (null !== $locale && null !== $name) {
            do {
                if ((self::$declaredRoutes[$name.'.'.$locale][1]['_canonical_route'] ?? null) === $name) {
                    unset($parameters['_locale']);
                    $name .= '.'.$locale;
                    break;
                }
            } while (false !== $locale = strstr($locale, '_', true));
        }

        if (!isset(self::$declaredRoutes[$name])) {
            throw new RouteNotFoundException(sprintf('Unable to generate a URL for the named route "%s" as such route does not exist.', $name));
        }

        list($variables, $defaults, $requirements, $tokens, $hostTokens, $requiredSchemes) = self::$declaredRoutes[$name];

        return $this->doGenerate($variables, $defaults, $requirements, $tokens, $parameters, $name, $referenceType, $hostTokens, $requiredSchemes);
    }
}
