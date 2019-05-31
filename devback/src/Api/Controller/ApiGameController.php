<?php

namespace App\Api\Controller;

use App\Entity\Game;
use FOS\RestBundle\View\View;
use App\Repository\GameRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\JsonResponse;

class ApiGameController extends FOSRestController
{
    /**
     * @Rest\View()
     * @Rest\Get("/game/{gameId}")
     */
    public function getGame(GameRepository $gameRepository, $gameId): View
    {
        $game = $gameRepository->findById($gameId);

        return View::create($game, Response::HTTP_OK);
    }
}
