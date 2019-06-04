<?php

namespace App\Api\Controller;

use App\Entity\Score;
use App\Repository\GameRepository;
use App\Repository\UserRepository;
use App\Repository\ScoreRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Validator\ConstraintViolationList;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

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
     * @ParamConverter(
     *      "score", 
     *      converter="fos_rest.request_body",
     *      options={
     *          "validator"={"groups"="Create"}
     *      }
     * )
     */
    public function newScoreAction(Request $request, EntityManagerInterface $em, Score $score, GameRepository $gameRepository, UserRepository $userRepository, ConstraintViolationList $violations)
    {
        if(count($violations)){
            
            return $this->view($violations, Response::HTTP_BAD_REQUEST);
        }

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
        $newAverage = self::averageScore($newValue, $numberVotes);

        // Ajout des valeurs à game
        $game->setScore($newValue);
        $game->setAverageScore($newAverage);

        $em->persist($game);
        $em->persist($score);
        $em->flush();

        return new JsonResponse('', JsonResponse::HTTP_CREATED);
    }

    /**
     * @Rest\View
     * @Rest\Put(path = "/score/edit", name="score_edit")
     */
    public function editScoreAction(Request $request, EntityManagerInterface $em, ScoreRepository $scoreRepository, GameRepository $gameRepository, UserRepository $userRepository)
    {

        $user = $userRepository->findOneById($request->request->get('user', 'id'));
        $game = $gameRepository->findOneById($request->request->get('game', 'id'));
        $score = $scoreRepository->findOneById($request->request->get('id'));

        $scoreNewValue = $request->request->get('value');

        // Calcul de la moyenne de la note du jeu
        $numberVotes = count($game->getScores()) - 1;
        $currentScore = $game->getScore();
        $newValue = ($currentScore - $score->getValue()) + $scoreNewValue;

        $newAverage = self::averageScore($newValue, $numberVotes);

        // Modifie les valeurs à game et score
        $score->setValue($scoreNewValue);
        $game->setScore($newValue);
        $game->setAverageScore($newAverage);

        $em->flush();

        return new JsonResponse('', JsonResponse::HTTP_OK);
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
        
        $newAverage = self::averageScore($newValue, $numberVotes);

        // Supprime des valeurs à game
        $game->setScore($newValue);
        $game->setAverageScore($newAverage);

        $em->remove($score);
        $em->flush();

        return new JsonResponse('', JsonResponse::HTTP_OK);
    }
}
