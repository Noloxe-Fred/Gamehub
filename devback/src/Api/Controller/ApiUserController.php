<?php

namespace App\Api\Controller;

use App\Entity\User;
use App\Security\TokenAuthenticator;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\ConstraintViolationList;

class ApiUserController extends FOSRestController
{

    /**
     * @Rest\View
     * @Rest\Post(path = "/user/new", name="user_new")
     */
    public function newUserAction(Request $request, EntityManagerInterface $em, SerializerInterface $serializer)
    {   

        $data = $request->getContent();

        $post = $serializer->deserialize($data, User::class, 'json');
        
        $em->persist($post);
        $em->flush();

        return new JsonResponse('', JsonResponse::HTTP_CREATED);
    }
}
