<?php

namespace App\Api\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Validator\Validation;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\ConstraintViolationList;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;


class ApiUserController extends FOSRestController
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
        {
            $this->passwordEncoder = $passwordEncoder;
        }

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
    public function newUserAction(Request $request, EntityManagerInterface $em, User $user, ConstraintViolationList $violations, UserPasswordEncoderInterface $passwordEncoder)
    {   
        if(count($violations)){
            
            return $this->view($violations, Response::HTTP_BAD_REQUEST);
        }
        

        $user = new User();
        $clearpassword =$request->request->get('password');
        $hash = $this->passwordEncoder->encodePassword($user, $clearpassword);
        $user->setEmail($request->request->get('email'));
        $user->setPassword($hash);
        $user->setPseudo($request->request->get('pseudo'));
        
        $em->persist($user);
        $em->flush();
        
        return $this->view(['email' => $user->getEmail()], Response::HTTP_CREATED, [          
            ]);
    }
}
