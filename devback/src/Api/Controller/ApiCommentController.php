<?php

namespace App\Api\Controller;

use App\Entity\Comment;
use App\Form\Api\CommentType;
use App\Repository\CommentRepository;
use App\Repository\GameRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Validator\ConstraintViolationList;

class ApiCommentController extends FOSRestController
{

    /**
     * @Rest\View
     * @Rest\Post(path = "comment/create", name="comment_create")
     * @ParamConverter("comment", converter = "fos_rest.request_body", options = {"validator" = {"groups" = "create"}})
     */
    public function createCommentAction(Comment $comment, UserRepository $userRepository, GameRepository $gameRepository, Request $request, EntityManagerInterface $em, ConstraintViolationList $violations)
    {   
        if(count($violations)){
            
            return $this->view($violations, Response::HTTP_BAD_REQUEST);
        }

        $user = $userRepository->findOneById($request->request->get('user', 'id'));
        $game = $gameRepository->findOneById($request->request->get('game', 'id'));

        $comment = new Comment();
        $comment->setUser($user);
        $comment->setGame($game);

        $form = $this->createForm(CommentType::class, $comment);
        $form->submit($request->request->all());

        $em->persist($comment);
        $em->flush();

        return $this->view('', Response::HTTP_CREATED, [
            
            ]);
    }

    /**
     * @Rest\View
     * @Rest\Put(path = "comment/edit", name="comment_edit")
     * @ParamConverter("comment", converter = "fos_rest.request_body", options = {"validator" = {"groups" = "edit"}})
     */
    public function editCommentAction(Comment $comment, CommentRepository $commentRepository ,UserRepository $userRepository, GameRepository $gameRepository, Request $request, EntityManagerInterface $em, ConstraintViolationList $violations)
    {   
        if(count($violations)){
            
            return $this->view($violations, Response::HTTP_BAD_REQUEST);
        }

        $user = $userRepository->findOneById($request->request->get('user', 'id'));
        $game = $gameRepository->findOneById($request->request->get('game', 'id'));
        $comment = $commentRepository->findOneById($request->request->get('id'));

        if($comment->getUser() != $user || $comment->getGame() != $game){

            return $this->view("Tu es un vilain toi !", Response::HTTP_FORBIDDEN);
        }

        $form = $this->createForm(CommentType::class, $comment);
        $form->submit($request->request->all());

        $em->flush();

        return $this->view('', Response::HTTP_CREATED, [
            
            ]);
    }

    /**
     * @Rest\View
     * @Rest\Delete(path = "comment/delete", name="comment_delete")
     */
    public function deleteCommentAction(CommentRepository $commentRepository ,UserRepository $userRepository, GameRepository $gameRepository, Request $request, EntityManagerInterface $em)
    {   

        $user = $userRepository->findOneById($request->request->get('user', 'id'));
        $game = $gameRepository->findOneById($request->request->get('game', 'id'));
        $comment = $commentRepository->findOneById($request->request->get('id'));

        if($comment->getUser() != $user || $comment->getGame() != $game){

            return $this->view("Tu es un vilain toi !", Response::HTTP_FORBIDDEN);
        }

        $em->remove($comment);
        $em->flush();

        return $this->view('', Response::HTTP_CREATED, [
            
            ]);
    }
}