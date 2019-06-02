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

class ApiGameController extends FOSRestController
{
    /**
     * @Rest\View
     * @Rest\Get(path = "/game/list", name="game_list")
     */
    public function getGamesAction(GameRepository $gameRepository, SerializerInterface $serializer)
    {   
        
        $request = $gameRepository->findAllGames();

        $allGames = $serializer->serialize($request, 'json', [
            'groups' => 'game_read',
        ]);
    
       return JsonResponse::fromJsonString($allGames);
    }

    /**
     * @Rest\View
     * @Rest\Get(path = "/game/{id}", name="game_show", requirements = {"id"="\d+"})
     */
    public function getGameAction(Game $game, GameRepository $gameRepository, SerializerInterface $serializer)
    {   

        $request = $gameRepository->findByGame($game);

        $showGame = $serializer->serialize($request, 'json', [
            'groups' => 'game_read',
        ]);

        return JsonResponse::fromJsonString($showGame);
    }

    /**
     * @Rest\View
     * @Rest\Get(path = "/game/list/nextmonth", name="game_next_month")
     */
    public function getNextMonthGamesAction(GameRepository $gameRepository, SerializerInterface $serializer)
    {

        $request = $gameRepository->findNextMonthGames();

        $nextMonthGames = $serializer->serialize($request, 'json', [
            'groups' => 'game_read',
        ]);

        return JsonResponse::fromJsonString($nextMonthGames);
    }

    /**
     * @Rest\View
     * @Rest\Get(path = "/game/list/lastmonth", name="game_last_month")
     */
    public function getLastMonthGamesAction(GameRepository $gameRepository, SerializerInterface $serializer)
    {

        $request = $gameRepository->findLastMonthGames();

        $lastMonthGames = $serializer->serialize($request, 'json', [
            'groups' => 'game_read',
        ]);

        return JsonResponse::fromJsonString($lastMonthGames);
    }

    /**
     * @Rest\View
     * @Rest\Get(path = "/game/list/random", name="game_random_list")
     */ 
    public function getRandomGamesList(GameRepository $gameRepository, SerializerInterface $serializer){

        $request = $gameRepository->findRandomGamesList();

        $randomGamesList = $serializer->serialize($request, 'json', [
            'groups' => 'game_read',
        ]);

        return JsonResponse::fromJsonString($randomGamesList);
    }
}

    // /**
    //  * @Rest\View
    //  * @Rest\Post(path = "/game", name="game_create")
    //  */
    // public function createGameAction(Request $request, SerializerInterface $serializer, EntityManagerInterface $em)
    // {
        
    //     $data = $request->getContent();

    //     $post = $serializer->deserialize($data, Game::class, 'json');
        
    //     $em->persist($post);
    //     $em->flush();

    //     return new JsonResponse('', JsonResponse::HTTP_CREATED);
    // }