<?php

namespace App\Api\Controller;

use App\Entity\User;
use App\Form\Api\UserType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Validator\ConstraintViolationList;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class ApiUserController extends FOSRestController
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
        {
            $this->passwordEncoder = $passwordEncoder;
        }

    /**
     * @Rest\Post(path = "signup", name="user_new")
     * @ParamConverter("user", converter = "fos_rest.request_body", options = {"validator" = {"groups" = "create"}})
     */
    public function newUserAction(User $user, Request $request, EntityManagerInterface $em, ConstraintViolationList $violations, UserPasswordEncoderInterface $encoder)
    {   
        if(count($violations)){
            
            return $this->view($violations, Response::HTTP_BAD_REQUEST);
        }

        // if($userRepository->findOneByEmail($request->request->get('email'))){

        //     return $this->view("Email déjà utilisé, veuillez en choisir un autre.", Response::HTTP_BAD_REQUEST);

        // } else if ($userRepository->findOneByPseudo($request->request->get('pseudo'))){

        //     return $this->view("Pseudo déjà utilisé, veuillez en choisir un autre.", Response::HTTP_BAD_REQUEST);
        // }

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
     * @Rest\Put(path = "user/edit", name="user_edit")
     */
    public function editUserAction(UserRepository $userRepository, Request $request, EntityManagerInterface $em, UserPasswordEncoderInterface $encoder)
    {   
        
        $user = $userRepository->findOneById($request->request->get('id'));
        $oldPassword = $user->getPassword();

        $form = $this->createForm(UserType::class, $user);
        $form->submit($request->request->all());
        
        if(is_null($user->getPassword())){

            $hash = $oldPassword;

        } else {

            $hash = $encoder->encodePassword($user, $request->request->get('password'));
            $user->setPassword($hash);
        }

        // $user->setPassword($request->request->get('password'));
        $user->setUpdatedAt(new \DateTime());

        $em->flush();

        return $this->view('', Response::HTTP_OK, [
            
            ]);
    }

    // /**
    //  * @Rest\Post(path = "user/profil", name="user")
    //  */
    // public function getUserAction(User $user, UserRepository $userRepository, Request $request)
    // {   
        
    //     $user = $userRepository->findOneById($request->request->get('id'));

    //     return $this->view($user, Response::HTTP_OK, [
            
    //         ]);
    // }
}
