<?php

namespace App\Api\Controller;

use App\Entity\Game;
use App\Repository\GameRepository;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

class ApiGameController extends FOSRestController
{
    /**
     * @Rest\View
     * @Rest\Get(path = "/games", name="get_games_action")
     */
    public function getGamesAction(GameRepository $gameRepository, SerializerInterface $serializer)
    {   
        
        $games = $gameRepository->findAll();

        $json = $serializer->serialize($games, 'json', [
            'groups' => 'game_read',
        ]);
    
       return JsonResponse::fromJsonString($json);
    }

    /**
     * @Rest\View
     * @Rest\Get(path = "/game/{id}", name="get_game_action", requirements = {"id"="\d+"})
     */
    public function getGameAction(Game $game, SerializerInterface $serializer)
    {   
        
        $json = $serializer->serialize($game, 'json', [
            'groups' => 'game_read',
        ]);

        return JsonResponse::fromJsonString($json);
    }
}
