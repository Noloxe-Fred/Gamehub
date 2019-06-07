<?php

namespace App\Api\Controller;

use App\Repository\GameRepository;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;

class ApiGameController extends FOSRestController
{

    /**
     * @Rest\View
     * @Rest\Get(path = "game/list", name = "games_list")
     */
    public function showGamesAction(GameRepository $gameRepository, SerializerInterface $serializer)
    {   
        
        $games = $gameRepository->findAllGames();

        $allGames = $serializer->serialize($games, 'json', [
            'groups' => 'game_read',
        ]);
    
       return JsonResponse::fromJsonString($allGames);
    }

    /**
     * @Rest\View
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
     * @Rest\View
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
     * @Rest\View
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
     * @Rest\View
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
     * @Rest\View
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
     * @Rest\View
     * @Rest\Get(path = "game/list/worstever", name = "games_worst_ever")
     */ 
    public function showWorstEverGamesList(GameRepository $gameRepository, SerializerInterface $serializer){

        $games = $gameRepository->findGamesByWorstScore();

        $worstEverGamesList = $serializer->serialize($games, 'json', [
            'groups' => 'game_read',
        ]);

        return JsonResponse::fromJsonString($worstEverGamesList);
    }
}