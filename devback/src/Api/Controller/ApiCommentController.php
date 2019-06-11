<?php

namespace App\Api\Controller;

use App\Entity\Comment;
use App\Form\Api\CommentType;
use App\Repository\GameRepository;
use App\Repository\UserRepository;
use App\Repository\CommentRepository;
use Doctrine\ORM\EntityManagerInterface;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\ConstraintViolationList;

class ApiCommentController extends FOSRestController
{

    /**
     * @Rest\Post(path = "comment/new", name="comment_new")
     * @ParamConverter("comment", converter = "fos_rest.request_body", options = {"validator" = {"groups" = "create"}})
     */
    public function newCommentAction(Comment $comment, CommentRepository $commentRepository, UserRepository $userRepository, GameRepository $gameRepository, Request $request, EntityManagerInterface $em, ConstraintViolationList $violations)
    {   
        if(count($violations)){
            
            return $this->view($violations, Response::HTTP_BAD_REQUEST);
        }

        $user = $userRepository->findOneById($request->request->get('user', 'id'));
        $game = $gameRepository->findOneById($request->request->get('game', 'id'));

        if($commentRepository->findOneByUser($user) != null && $commentRepository->findOneByGame($game) != null){

            return $this->view('', Response::HTTP_FORBIDDEN);
        }

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

            return $this->view('', Response::HTTP_FORBIDDEN);
        }

        $form = $this->createForm(CommentType::class, $comment);
        $form->submit($request->request->all());

        $comment->setUpdatedAt(new \DateTime());

        $em->flush();

        return $this->view('', Response::HTTP_CREATED, [
            
            ]);
    }

    /**
     * @Rest\Delete(path = "comment/delete", name="comment_delete")
     */
    public function deleteCommentAction(CommentRepository $commentRepository ,UserRepository $userRepository, GameRepository $gameRepository, Request $request, EntityManagerInterface $em)
    {   

        $user = $userRepository->findOneById($request->request->get('user', 'id'));
        $game = $gameRepository->findOneById($request->request->get('game', 'id'));
        $comment = $commentRepository->findOneById($request->request->get('id'));

        if($comment->getUser() != $user || $comment->getGame() != $game){

            return $this->view('', Response::HTTP_FORBIDDEN);
        }

        $em->remove($comment);
        $em->flush();

        return $this->view('', Response::HTTP_CREATED, [
            
            ]);
    }

    /**
     * @Rest\Post(path = "comment/last", name="comments_last")
     */
    public function getlastCommentAction(CommentRepository $commentRepository, GameRepository $gameRepository, SerializerInterface $serializer, Request $request, EntityManagerInterface $em)
    {   
        $game = $gameRepository->findOneById($request->request->get('id'));
        $comments = $commentRepository->lastComments($game);

        $lastComments = $serializer->serialize($comments, 'json', [
            'groups' => 'comment_read',
        ]);
    
       return JsonResponse::fromJsonString($lastComments);
    }
}