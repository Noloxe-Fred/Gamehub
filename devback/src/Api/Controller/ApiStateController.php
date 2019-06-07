<?php

namespace App\Api\Controller;

use App\Entity\User;
use App\Entity\State;
use App\Form\Api\StateType;
use App\Repository\GameRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use App\Repository\StateRepository;

class ApiStateController extends FOSRestController
{

    /**
     * @Rest\Post(path = "game/state/add", name="state_add")
     * @ParamConverter("state", converter = "fos_rest.request_body")
     */
    public function addStateGameListAction(State $state, StateRepository $stateRepository, GameRepository $gameRepository, UserRepository $userRepository, Request $request, EntityManagerInterface $em)
    {   
        $game = $gameRepository->findOneById($request->request->get('game', 'id'));
        $user = $userRepository->findOneById($request->request->get('user', 'id'));

        if($stateRepository->findOneByUser($user) != null && $stateRepository->findOneByGame($game) != null){

            return $this->view("Tu es un vilain toi !", Response::HTTP_FORBIDDEN);
        }
        
        $state = new State();
        $state->setGame($game);
        $state->setUser($user);

        $form = $this->createForm(StateType::class, $state);
        $form->submit($request->request->all());

        $em->persist($state);
        $em->flush();

        return $this->view('', Response::HTTP_OK, [
            
            ]);
    }

    /**
     * @Rest\Put(path = "game/state/edit", name="state_edit")
     */
    public function editStateGameListAction(StateRepository $stateRepository, GameRepository $gameRepository, UserRepository $userRepository, Request $request, EntityManagerInterface $em)
    {   
        $game = $gameRepository->findOneById($request->request->get('game', 'id'));
        $user = $userRepository->findOneById($request->request->get('user', 'id'));
        $state = $stateRepository->findOneById($request->request->get('id'));

        if($state->getUser() != $user || $state->getGame() != $game){

            return $this->view("Tu es un vilain toi !", Response::HTTP_FORBIDDEN);
        }

        $form = $this->createForm(StateType::class, $state);
        $form->submit($request->request->all());

        $em->flush();

        return $this->view('', Response::HTTP_OK, [
            
            ]);
    }

    /**
     * @Rest\Delete(path = "game/state/delete", name="state_delete")
     */
    public function deleteStateGameListAction(StateRepository $stateRepository, GameRepository $gameRepository, UserRepository $userRepository, Request $request, EntityManagerInterface $em)
    {   
        $game = $gameRepository->findOneById($request->request->get('game', 'id'));
        $user = $userRepository->findOneById($request->request->get('user', 'id'));
        $state = $stateRepository->findOneById($request->request->get('id'));

        if($state->getUser() != $user || $state->getGame() != $game){

            return $this->view("Tu es un vilain toi !", Response::HTTP_FORBIDDEN);
        }

        $em->remove($state);
        $em->flush();

        return $this->view('', Response::HTTP_OK, [
            
            ]);
    }
}
