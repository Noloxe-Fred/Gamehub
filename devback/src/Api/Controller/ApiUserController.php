<?php

namespace App\Api\Controller;

use App\Entity\User;
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
     * @Rest\Post(path = "signup", name="user_new")
     * @ParamConverter(
     *      "user",
     *      converter="fos_rest.request_body",
     *      options={
     *          "validator"={"groups"="create"}
     *      }
     * )
     */
    public function newUserAction(Request $request, EntityManagerInterface $em, User $user, ConstraintViolationList $violations, UserPasswordEncoderInterface $encoder)
    {   
        if(count($violations)){
            
            return $this->view($violations, Response::HTTP_BAD_REQUEST);
        }
        
        $user = new User();
        $user->setEmail($request->request->get('email'));
        $user->setPseudo($request->request->get('pseudo'));
        $hash = $encoder->encodePassword($user, $request->request->get('password'));
        $user->setPassword($hash);
        
        $em->persist($user);
        $em->flush();

        return $this->view($user, Response::HTTP_CREATED, [
            
            ]);
    }
}
