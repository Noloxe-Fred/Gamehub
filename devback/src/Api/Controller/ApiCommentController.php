<?php

namespace App\Api\Controller;

use App\Entity\Comment;
use App\Form\Api\CommentType;
use App\Repository\GameRepository;
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
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

class ApiCommentController extends FOSRestController
{

    /**
     * @Rest\Post(path = "comment/new", name = "comment_new")
     * @ParamConverter("comment", converter = "fos_rest.request_body", options = {"validator" = {"groups" = "create"}})
     */
    public function newCommentAction(Comment $comment, GameRepository $gameRepository, Request $request, TokenStorageInterface $token, EntityManagerInterface $em, ConstraintViolationList $violations)
    {   
        if(count($violations)){
            
            return $this->view($violations, Response::HTTP_BAD_REQUEST);
        }

        $user = $token->getToken()->getUser();
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
     * @Rest\Put(path = "comment/edit", name = "comment_edit")
     * @ParamConverter("comment", converter = "fos_rest.request_body", options = {"validator" = {"groups" = "edit"}})
     */
    public function editCommentAction(Comment $comment, CommentRepository $commentRepository, Request $request, EntityManagerInterface $em, ConstraintViolationList $violations)
    {   
        if(count($violations)){
            
            return $this->view($violations, Response::HTTP_BAD_REQUEST);
        }

        $comment = $commentRepository->findOneById($request->request->get('id'));
        $comment->setUpdatedAt(new \DateTime());

        $form = $this->createForm(CommentType::class, $comment);
        $form->submit($request->request->all());

        $em->flush();

        return $this->view('', Response::HTTP_CREATED, [
            
            ]);
    }

    /**
     * @Rest\Delete(path = "comment/delete", name = "comment_delete")
     */
    public function deleteCommentAction(CommentRepository $commentRepository, Request $request, EntityManagerInterface $em)
    {   

        $comment = $commentRepository->findOneById($request->request->get('id'));

        $em->remove($comment);
        $em->flush();

        return $this->view('', Response::HTTP_NO_CONTENT, [
            
            ]);
    }

    /**
     * @Rest\Get(path = "comment/last", name = "comments_last")
     */
    public function getlastCommentAction(CommentRepository $commentRepository, SerializerInterface $serializer, Request $request)
    {   

        $comments = $commentRepository->lastComments($request->query->get('game_id'));

        $lastComments = $serializer->serialize($comments, 'json', [
            'groups' => 'comment_read',
        ]);
    
       return JsonResponse::fromJsonString($lastComments);
    }

    // /**
    //  * @Rest\Get(path = "game/{id}/comment", name = "comments_last", requirements = {"id" = "\d+"} )
    //  */
    // public function getCommentAction($id, CommentRepository $commentRepository, SerializerInterface $serializer)
    // {   

    //     $comments = $commentRepository->findCommentsByGame($id);

    //     $commentsByGame = $serializer->serialize($comments, 'json', [
    //         'groups' => 'comment_read',
    //     ]);
    
    //    return JsonResponse::fromJsonString($commentsByGame);
    // }
}