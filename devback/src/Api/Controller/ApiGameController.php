<?php

namespace App\Api\Controller;

use App\Repository\GameRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;

class ApiGameController extends FOSRestController
{

    /**
     * @Rest\Get(path = "game/list", name = "games_list")
     */
    public function showGamesAction(GameRepository $gameRepository, SerializerInterface $serializer)
    {   

        
        $array = [
            'categories1' => '18',
            'categories2' => '19',

            // 'id1' => 59
        ];
        
        $games = $gameRepository->findAllGames();

        $allGames = $serializer->serialize($games, 'json', [
            'groups' => 'game_read',
        ]);
    
       return JsonResponse::fromJsonString($allGames);
    }

    /**
     * @Rest\Post(path = "game/show", name = "game_show")
     */
    public function showGameAction(GameRepository $gameRepository, SerializerInterface $serializer, Request $request)
    {   

        $game = $gameRepository->findOneById($request->request->get('id'));
        // $game = $gameRepository->findByGame($game);

        $showGame = $serializer->serialize($game, 'json', [
            'groups' => 'game_read',
        ]);

        return JsonResponse::fromJsonString($showGame);
    }

    /**
     * @Rest\Get(path = "game/list/nextmonth", name = "games_next_month")
     */
    public function showNextMonthGamesAction(GameRepository $gameRepository, SerializerInterface $serializer)
    {

        $games = $gameRepository->findNextMonthGames();

        $nextMonthGames = $serializer->serialize($games, 'json', [
            'groups' => 'game_read',
        ]);

        return JsonResponse::fromJsonString($nextMonthGames);
    }

    /**
     * @Rest\Get(path = "game/list/lastmonth", name = "games_last_month")
     */
    public function showLastMonthGamesAction(GameRepository $gameRepository, SerializerInterface $serializer)
    {

        $games = $gameRepository->findLastMonthGames();

        $lastMonthGames = $serializer->serialize($games, 'json', [
            'groups' => 'game_read',
        ]);

        return JsonResponse::fromJsonString($lastMonthGames);
    }

    /**
     * @Rest\Get(path = "game/list/random", name = "games_random")
     */ 
    public function showRandomGamesList(GameRepository $gameRepository, SerializerInterface $serializer){

        $games = $gameRepository->findRandomGamesList();

        $randomGamesList = $serializer->serialize($games, 'json', [
            'groups' => 'game_read',
        ]);

        return JsonResponse::fromJsonString($randomGamesList);
    }

    /**
     * @Rest\Get(path = "game/list/bestever", name = "games_best_ever")
     */ 
    public function showBestEverGamesList(GameRepository $gameRepository, SerializerInterface $serializer){

        $games = $gameRepository->findGamesByBestScore();

        $bestEverGamesList = $serializer->serialize($games, 'json', [
            'groups' => 'game_read',
        ]);

        return JsonResponse::fromJsonString($bestEverGamesList);
    }

    /**
     * @Rest\Get(path = "game/list/worstever", name = "games_worst_ever")
     */ 
    public function showWorstEverGamesList(GameRepository $gameRepository, SerializerInterface $serializer){

        $games = $gameRepository->findGamesByWorstScore();

        $worstEverGamesList = $serializer->serialize($games, 'json', [
            'groups' => 'game_read',
        ]);

        return JsonResponse::fromJsonString($worstEverGamesList);
    }


    // /**
    //  * @Rest\Get(path = "game/list/bestlastyear", name = "games_best_last_year")
    //  */ 
    // public function showBestLastYearGamesList(GameRepository $gameRepository, SerializerInterface $serializer){

    //     $games = $gameRepository->findGamesByBestYearScore();


    //     $bestGamesLastYear = $serializer->serialize($games, 'json', [
    //                 'groups' => 'game_read',
    //             ]);

    //             return JsonResponse::fromJsonString($bestGamesLastYear);

    // }

    // /**
    //  * @Rest\Get(path = "game/list/worstlastyear", name = "games_worst_last_year")
    //  */ 
    // public function showWorstLastYearGamesList(GameRepository $gameRepository, SerializerInterface $serializer){

    //     $games = $gameRepository->findGamesByWorstYearScore();


    //     $worstgameslastmonth = $serializer->serialize($games, 'json', [
    //                 'groups' => 'game_read',
    //             ]);

    //             return JsonResponse::fromJsonString($worstgameslastmonth);

    // }


    // /**
    //  * @Rest\Get(path = "game/list/bestlastmonth", name = "games_best_last_month")
    //  */ 
    // public function showBestLastMonthGamesList(GameRepository $gameRepository, SerializerInterface $serializer){

    //     $games = $gameRepository->findGamesByBestMonthScore();


    //     $bestGamesLastMonth = $serializer->serialize($games, 'json', [
    //                 'groups' => 'game_read',
    //             ]);

    //             return JsonResponse::fromJsonString($bestGamesLastMonth);

    // }

    // /**
    //  * @Rest\Get(path = "game/list/worstlastmonth", name = "games_worst_last_month")
    //  */ 
    // public function showWorstLastMonthGamesList(GameRepository $gameRepository, SerializerInterface $serializer){

    //     $games = $gameRepository->findGamesByWorstMonthScore();


    //     $worstGamesLastMonth = $serializer->serialize($games, 'json', [
    //                 'groups' => 'game_read',
    //             ]);

    //             return JsonResponse::fromJsonString($worstGamesLastMonth);

    // }
}