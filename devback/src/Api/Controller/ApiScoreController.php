<?php

namespace App\Api\Controller;

use App\Entity\Score;
use App\Form\Api\ScoreType;
use App\Repository\GameRepository;
use App\Repository\UserRepository;
use App\Repository\ScoreRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\Validator\ConstraintViolationList;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

class ApiScoreController extends FOSRestController
{

   /**
     * @Rest\View
     * @Rest\Post(path = "score/create", name = "score_create")
     * @ParamConverter("score", converter="fos_rest.request_body")
     */
    public function createScoreAction(Request $request, Score $score, UserRepository $userRepository, GameRepository $gameRepository, EntityManagerInterface $em, ConstraintViolationList $violations)
    {
        if(count($violations)){
            
            return $this->view($violations, Response::HTTP_BAD_REQUEST);
        }

        $user = $userRepository->findOneById($request->request->get('user', 'id'));
        $game = $gameRepository->findOneById($request->request->get('game', 'id'));

        $score = new Score();
        $score->setUser($user);
        $score->setGame($game);
        $score->setUpdatedAt(new \DateTime());

        $form = $this->createForm(ScoreType::class, $score);
        $form->submit($request->request->all());

        $average = ((int)$gameRepository->averageScore($game)[0][1]);
        $game->setScore($average);

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

        // $user = $userRepository->findOneById($request->request->get('user', 'id'));
        $game = $gameRepository->findOneById($request->request->get('game', 'id'));
        $score = $scoreRepository->findOneById($request->request->get('id'));
        
        $form = $this->createForm(ScoreType::class, $score);
        $form->submit($request->request->all());
        
        $game->setScore((int)$gameRepository->averageScore($game)[0][1]);

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

        // $user = $userRepository->findOneById($request->request->get('user', 'id'));
        $game = $gameRepository->findOneById($request->request->get('game', 'id'));
        $score = $scoreRepository->findOneById($request->request->get('id'));
        
        $game->setScore((int)$gameRepository->averageScore($game)[0][1]);

        $em->remove($score);
        $em->flush();

        return $this->view('', Response::HTTP_OK, [
            
            ]);
    }
}