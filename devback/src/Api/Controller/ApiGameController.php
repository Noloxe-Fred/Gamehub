<?php

namespace App\Api\Controller;

use App\Entity\Game;
use App\Repository\GameRepository;
use Symfony\Component\HttpFoundation\Request;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;

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


    /**
     * @Rest\View
     * @Rest\Post(path = "/game", name="game_create")
     */
    public function createGameAction(Request $request, SerializerInterface $serializer)
    {
        
        $data = $request->getContent();

        $post = $serializer->deserialize($data, Game::class, 'json');
        
        

        $em = $this->getDoctrine()->getManager();
        $em->persist($post);
        $em->flush();

        return new JsonResponse('', JsonResponse::HTTP_CREATED);
    }

}
