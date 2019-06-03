<?php

namespace App\Api\Controller;

use App\Entity\Game;
use App\Entity\Score;
use App\Repository\GameRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use App\Repository\ScoreRepository;

class ApiScoreController extends FOSRestController
{

    public static function averageScore($newValue, $numberVotes)
    {   
        if ($numberVotes === 0) {
            
            $newScore = $newValue;

            return $newScore;

        } 

        $newScore = $newValue / ($numberVotes + 1);

        return $newScore;
    }

   /**
     * @Rest\View
     * @Rest\Post(path = "/score/new", name="score_new")
     * @ParamConverter("score", converter="fos_rest.request_body")
     */
    public function newScoreAction(Request $request, EntityManagerInterface $em, Score $score, GameRepository $gameRepository, UserRepository $userRepository)
    {

        $user = $userRepository->findOneById($request->request->get('user', 'id'));
        $game = $gameRepository->findOneById($request->request->get('game', 'id'));

        $score = new Score();

        $score->setValue($request->request->get('value'));
        $score->setUser($user);
        $score->setGame($game);
        
        // Calcul de la moyenne de la note du jeu
        $numberVotes = count($game->getScores());
        $currentScore = $game->getScore();
        $newValue = $currentScore + $request->request->get('value');
        $newScore = self::averageScore($newValue, $numberVotes);
        // Ajout des valeurs à game
        $game->setAverageScore($newScore);
        $game->setScore($newValue);

        $em->persist($game);
        $em->persist($score);
        $em->flush();

        return new JsonResponse('', JsonResponse::HTTP_CREATED);
    }

       /**
     * @Rest\View
     * @Rest\Delete(path = "/score/delete", name="score_delete")
     */
    public function deleteScoreAction(Request $request, EntityManagerInterface $em, ScoreRepository $scoreRepository, GameRepository $gameRepository, UserRepository $userRepository)
    {

        $user = $userRepository->findOneById($request->request->get('user', 'id'));
        $game = $gameRepository->findOneById($request->request->get('game', 'id'));
        $score = $scoreRepository->findOneById($request->request->get('id'));
        
        // Calcul de la moyenne de la note du jeu
        $numberVotes = count($game->getScores()) - 2;
        $currentScore = $game->getScore();
        $newValue = $currentScore - $score->getValue();
        $newScore = self::averageScore($newValue, $numberVotes);
        // Supprime des valeurs à game
        $game->setAverageScore($newScore);
        $game->setScore($newValue);

        $em->remove($score);
        $em->flush();

        return new JsonResponse('', JsonResponse::HTTP_OK);
    }
}