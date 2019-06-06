<?php

namespace App\Api\Controller;

use App\Entity\Comment;
use App\Repository\GameRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\ConstraintViolationList;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

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

        $comment = new Comment();

        $form = $this->createForm(CommentType::class, $comment);
        
        $form->submit($request->request->all());

        $em->persist($comment);
        $em->flush();

        return $this->view($comment, Response::HTTP_CREATED, [
            
            ]);
    }
}