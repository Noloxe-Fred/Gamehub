<?php

namespace App\Api\Controller;

use App\Entity\Game;
use App\Repository\GameRepository;
use Symfony\Component\HttpFoundation\Request;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Category;

class ApiGameController extends FOSRestController
{
    /**
     * @Rest\View
     * @Rest\Get(path = "/games", name="get_games_action")
     */
    public function getGamesAction(GameRepository $gameRepository, SerializerInterface $serializer)
    {   
        
        $games = $gameRepository->findAllGames();

        $json = $serializer->serialize($games, 'json', [
            'groups' => 'game_read',
        ]);
    
       return JsonResponse::fromJsonString($json);
    }

    /**
     * @Rest\View
     * @Rest\Get(path = "/game/{id}", name="get_game_action", requirements = {"id"="\d+"})
     */
    public function getGameAction(Game $game, GameRepository $gameRepository, SerializerInterface $serializer)
    {   

        $showGame = $gameRepository->findByGame($game);
        $json = $serializer->serialize($showGame, 'json', [
            'groups' => 'game_read',
        ]);
        return JsonResponse::fromJsonString($json);

    }
    /**
     * @Rest\View
     * @Rest\Post(path = "/game", name="game_create")
     */
    public function createGameAction(Request $request, SerializerInterface $serializer, EntityManagerInterface $em)
    {
        
        $data = $request->getContent();

        $post = $serializer->deserialize($data, Game::class, 'json');
        
        $em->persist($post);
        $em->flush();

        return new JsonResponse('', JsonResponse::HTTP_CREATED);
    }

    /**
     * @Rest\View
     * @Rest\Get(path = "/game/list/release_date/nextmonth", name="next_month_release")
     */
    public function getNextMonthGameAction(GameRepository $gameRepository, SerializerInterface $serializer)
    {
    $qbNextMonthGame = $gameRepository->findNextMonthGame();
    $NextMonthGame = $serializer->serialize($qbNextMonthGame, 'json', [
        'groups' => 'game_read',
    ]);

    return JsonResponse::fromJsonString($NextMonthGame);
    }

    /**
     * @Rest\View
     * @Rest\Get(path = "/game/list/release_date/lastmonth", name="last_month_release")
     */
    public function getLastMonthGameAction(GameRepository $gameRepository, SerializerInterface $serializer)
    {
        $qbLastMonthGame = $gameRepository->findLastMonthGame();
        $LastMonthGame = $serializer->serialize($qbLastMonthGame, 'json', [
            'groups' => 'game_read',
        ]);
        return JsonResponse::fromJsonString($LastMonthGame);
    }

    /**
     * @Rest\View
     * @Rest\Get(path = "/game/list/random", name="random_game_list")
     */ 
    public function getRandomGameList(GameRepository $gameRepository, SerializerInterface $serializer){

        $qbRandomGameList = $gameRepository->findRandomGameList();

        $RandomGameList = $serializer->serialize($qbRandomGameList, 'json', [
            'groups' => 'game_read',
        ]);
        return JsonResponse::fromJsonString($RandomGameList);
    }
}
