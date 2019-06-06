<?php

namespace App\Api\Controller;

use App\Entity\Game;
use App\Entity\User;
use App\Entity\Score;
use App\Form\API\ScoreType;
use App\Repository\GameRepository;
use App\Repository\UserRepository;
use App\Repository\ScoreRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\Validator\ConstraintViolationList;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Entity;
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
     * @Rest\Post(path = "score/create", name = "score_create")
     * @ParamConverter("score", converter="fos_rest.request_body")
     */
    public function createScoreAction(Request $request, Score $score, User $user, Game $game, EntityManagerInterface $em, ConstraintViolationList $violations)
    {
        if(count($violations)){
            
            return $this->view($violations, Response::HTTP_BAD_REQUEST);
        }
        
        $score = new Score();

        $form = $this->createForm(ScoreType::class, $score);
        $form->submit($request->request->all());

        $score->setGame($game);
        $score->setUser($user);

        // Données pour la moyenne du score
        $numberVotes = count($game->getScores());
        $currentScore = $game->getScore();
        $newValue = $currentScore + $score->getValue();
        // Calcul de la moyenne du score
        $newAverage = self::averageScore($newValue, $numberVotes);

        // Ajout des valeurs à game
        $game->setScore($newValue);
        $game->setAverageScore($newAverage);

        $em->persist($game);
        $em->persist($score);
        $em->flush();

        return $this->view('', Response::HTTP_CREATED, [

            ]);
    }

    /**
     * @Rest\View
     * @Rest\Put(path = "score/edit", name = "score_edit")
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

        return $this->view('', Response::HTTP_OK, [
            
            ]);
    }

    /**
     * @Rest\View
     * @Rest\Delete(path = "score/delete", name = "score_delete")
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

        return $this->view('', Response::HTTP_OK, [
            
            ]);
    }
}
