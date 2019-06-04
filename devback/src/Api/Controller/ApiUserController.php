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
use Symfony\Component\Security\Guard\GuardAuthenticatorHandler;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

class ApiUserController extends FOSRestController
{

    /**
     * @Rest\View
     * @Rest\Post(path = "/user/new", name="user_new")
     * @ParamConverter(
     *      "user",
     *      converter="fos_rest.request_body",
     *      options={
     *          "validator"={"groups"="create"}
     *      }
     * )
     */
    public function newUserAction(Request $request, EntityManagerInterface $em, User $user, ConstraintViolationList $violations, TokenAuthenticator $authenticator, GuardAuthenticatorHandler $guardHandler)
    {   

        if(count($violations)){
            
            return $this->view($violations, Response::HTTP_BAD_REQUEST);
        }

        $user = new User();
        $user->setEmail($request->request->get('email'));
        $user->setPassword($request->request->get('password'));
        $user->setPseudo($request->request->get('pseudo'));
        
        $em->persist($user);
        $em->flush();

        return $guardHandler->authenticateUserAndHandleSuccess(
            $user,          // the User object you just created
            $request,
            $authenticator, // authenticator whose onAuthenticationSuccess you want to use
            'main'          // the name of your firewall in security.yaml
        );
    }
}
