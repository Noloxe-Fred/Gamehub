<?php

namespace App\Api\Controller;

use App\Entity\User;
use App\Form\Api\UserType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\Validator\ConstraintViolationList;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class ApiUserController extends FOSRestController
{

    /**
     * @Rest\View
     * @Rest\Post(path = "signup", name="user_create")
     * @ParamConverter("user", converter = "fos_rest.request_body", options = {"validator" = {"groups" = "create"}})
     */
    public function createUserAction(User $user, Request $request, EntityManagerInterface $em, ConstraintViolationList $violations, UserPasswordEncoderInterface $encoder)
    {   
        if(count($violations)){
            
            return $this->view($violations, Response::HTTP_BAD_REQUEST);
        }

        $user = new User();

        $form = $this->createForm(UserType::class, $user);
        
        $form->submit($request->request->all());
        $hash = $encoder->encodePassword($user, $request->request->get('password'));
        $user->setPassword($hash);

        $em->persist($user);
        $em->flush();

        return $this->view($user, Response::HTTP_CREATED, [
            
            ]);
    }

    /**
     * @Rest\View
     * @Rest\Put(path = "user/edit", name="user_edit")
     * @ParamConverter("user", converter = "fos_rest.request_body", options = {"validator" = {"groups" = "edit"}})
     */
    public function editUserAction(User $user, UserRepository $userRepository, Request $request, EntityManagerInterface $em, ConstraintViolationList $violations, UserPasswordEncoderInterface $encoder)
    {   
        if(count($violations)){
            
            return $this->view($violations, Response::HTTP_BAD_REQUEST);
        }
        
        $user = $userRepository->findOneById($request->request->get('id'));

        $form = $this->createForm(UserType::class, $user);
        $form->submit($request->request->all());

        $user->setPassword($request->request->get('password'));
        $user->setUpdatedAt(new \DateTime());

        $em->flush();

        return $this->view('', Response::HTTP_OK, [
            
            ]);
    }
}
