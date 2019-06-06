<?php

use Symfony\Component\Routing\Matcher\Dumper\PhpMatcherTrait;
use Symfony\Component\Routing\RequestContext;

/**
 * This class has been auto-generated
 * by the Symfony Routing Component.
 */
class srcApp_KernelDevDebugContainerUrlMatcher extends Symfony\Bundle\FrameworkBundle\Routing\RedirectableUrlMatcher
{
    use PhpMatcherTrait;

    public function __construct(RequestContext $context)
    {
        $this->context = $context;
        $this->staticRoutes = [
            '/_profiler' => [[['_route' => '_profiler_home', '_controller' => 'web_profiler.controller.profiler::homeAction'], null, null, null, true, false, null]],
            '/_profiler/search' => [[['_route' => '_profiler_search', '_controller' => 'web_profiler.controller.profiler::searchAction'], null, null, null, false, false, null]],
            '/_profiler/search_bar' => [[['_route' => '_profiler_search_bar', '_controller' => 'web_profiler.controller.profiler::searchBarAction'], null, null, null, false, false, null]],
            '/_profiler/phpinfo' => [[['_route' => '_profiler_phpinfo', '_controller' => 'web_profiler.controller.profiler::phpinfoAction'], null, null, null, false, false, null]],
            '/_profiler/open' => [[['_route' => '_profiler_open_file', '_controller' => 'web_profiler.controller.profiler::openAction'], null, null, null, false, false, null]],
            '/admin/category/new' => [[['_route' => 'category_new', '_controller' => 'App\\Controller\\CategoryController::new'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
            '/admin/developer/new' => [[['_route' => 'developer_new', '_controller' => 'App\\Controller\\DeveloperController::new'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
            '/admin/editor/new' => [[['_route' => 'editor_new', '_controller' => 'App\\Controller\\EditorController::new'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
            '/admin/game/new' => [[['_route' => 'game_new', '_controller' => 'App\\Controller\\GameController::new'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
            '/admin/platform/new' => [[['_route' => 'platform_new', '_controller' => 'App\\Controller\\PlatformController::new'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
            '/score' => [[['_route' => 'score_index', '_controller' => 'App\\Controller\\ScoreController::index'], null, ['GET' => 0], null, true, false, null]],
            '/login' => [[['_route' => 'app_login', '_controller' => 'App\\Controller\\SecurityController::login'], null, null, null, false, false, null]],
            '/admin/type/new' => [[['_route' => 'type_new', '_controller' => 'App\\Controller\\TypeController::new'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
            '/api/game/list' => [[['_route' => 'game_list', '_controller' => 'App\\Api\\Controller\\ApiGameController::getGamesAction'], null, ['GET' => 0], null, false, false, null]],
            '/api/game/list/nextmonth' => [[['_route' => 'game_next_month', '_controller' => 'App\\Api\\Controller\\ApiGameController::getNextMonthGamesAction'], null, ['GET' => 0], null, false, false, null]],
            '/api/game/list/lastmonth' => [[['_route' => 'game_last_month', '_controller' => 'App\\Api\\Controller\\ApiGameController::getLastMonthGamesAction'], null, ['GET' => 0], null, false, false, null]],
            '/api/game/list/random' => [[['_route' => 'game_random_list', '_controller' => 'App\\Api\\Controller\\ApiGameController::getRandomGamesList'], null, ['GET' => 0], null, false, false, null]],
            '/api/score/new' => [[['_route' => 'score_new', '_controller' => 'App\\Api\\Controller\\ApiScoreController::newScoreAction'], null, ['POST' => 0], null, false, false, null]],
            '/api/score/edit' => [[['_route' => 'score_edit', '_controller' => 'App\\Api\\Controller\\ApiScoreController::editScoreAction'], null, ['PUT' => 0], null, false, false, null]],
            '/api/score/delete' => [[['_route' => 'score_delete', '_controller' => 'App\\Api\\Controller\\ApiScoreController::deleteScoreAction'], null, ['DELETE' => 0], null, false, false, null]],
            '/api/signup' => [
                [['_route' => 'user_new', '_controller' => 'App\\Api\\Controller\\ApiUserController::newUserAction'], null, ['POST' => 0], null, false, false, null],
                [['_route' => 'api_signup'], null, null, null, false, false, null],
            ],
            '/api/login_check' => [[['_route' => 'login_check'], null, null, null, false, false, null]],
        ];
        $this->regexpList = [
            0 => '{^(?'
                    .'|/_(?'
                        .'|error/(\\d+)(?:\\.([^/]++))?(*:38)'
                        .'|wdt/([^/]++)(*:57)'
                        .'|profiler/([^/]++)(?'
                            .'|/(?'
                                .'|search/results(*:102)'
                                .'|router(*:116)'
                                .'|exception(?'
                                    .'|(*:136)'
                                    .'|\\.css(*:149)'
                                .')'
                            .')'
                            .'|(*:159)'
                        .')'
                    .')'
                    .'|/score/([^/]++)(*:184)'
                    .'|/api/(?'
                        .'|category/(\\d+)/games(*:220)'
                        .'|game/(\\d+)(*:238)'
                    .')'
                .')/?$}sDu',
        ];
        $this->dynamicRoutes = [
            38 => [[['_route' => '_twig_error_test', '_controller' => 'twig.controller.preview_error::previewErrorPageAction', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
            57 => [[['_route' => '_wdt', '_controller' => 'web_profiler.controller.profiler::toolbarAction'], ['token'], null, null, false, true, null]],
            102 => [[['_route' => '_profiler_search_results', '_controller' => 'web_profiler.controller.profiler::searchResultsAction'], ['token'], null, null, false, false, null]],
            116 => [[['_route' => '_profiler_router', '_controller' => 'web_profiler.controller.router::panelAction'], ['token'], null, null, false, false, null]],
            136 => [[['_route' => '_profiler_exception', '_controller' => 'web_profiler.controller.exception::showAction'], ['token'], null, null, false, false, null]],
            149 => [[['_route' => '_profiler_exception_css', '_controller' => 'web_profiler.controller.exception::cssAction'], ['token'], null, null, false, false, null]],
            159 => [[['_route' => '_profiler', '_controller' => 'web_profiler.controller.profiler::panelAction'], ['token'], null, null, false, true, null]],
            184 => [[['_route' => 'score_show', '_controller' => 'App\\Controller\\ScoreController::show'], ['id'], ['GET' => 0], null, false, true, null]],
            220 => [[['_route' => 'category_game_list', '_controller' => 'App\\Api\\Controller\\ApiCategoryController::getGamesByCategoryAction'], ['id'], ['GET' => 0], null, false, false, null]],
            238 => [[['_route' => 'game_show', '_controller' => 'App\\Api\\Controller\\ApiGameController::getGameAction'], ['id'], ['GET' => 0], null, false, true, null]],
        ];
    }
}
