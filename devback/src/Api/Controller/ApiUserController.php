<?php

namespace App\Api\Controller;

use App\Entity\User;
use App\Form\API\UserType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Validator\Validation;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
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
     * @Rest\Post(path = "signup", name="user_create")
     * @ParamConverter(
     *      "user",
     *      converter = "fos_rest.request_body",
     *      options = {
     *          "validator" = {"groups" = "create"}
     *      }
     * )
     */
    public function createUserAction(Request $request, EntityManagerInterface $em, User $user, ConstraintViolationList $violations, UserPasswordEncoderInterface $encoder)
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
     * @Rest\Put(path = "user/{id}/edit", name="user_edit")
     */
    public function editUserAction($id , Request $request, EntityManagerInterface $em, UserRepository $userRepository, UserPasswordEncoderInterface $encoder)
    {   
        
        $user = $userRepository->find($id);

        $form = $this->createForm(UserType::class, $user);
        
        $form->submit($request->request->all());
        $hash = $encoder->encodePassword($user, $request->request->get('password'));
        $user->setPassword($hash);

        $em->flush();

        return $this->view($user, Response::HTTP_OK, [
            
            ]);
    }
}
