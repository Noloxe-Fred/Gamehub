<?php

namespace App\Controller;

use App\Entity\Game;
use App\Entity\User;
use App\Form\GameType;
use App\Form\UserType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AdminController extends AbstractController
{

    /**
     * @Route("/admin", name="admin_home", methods={"GET" ,"POST"})
     */
    public function home(Request $request, EntityManagerInterface $em)
    {

        $game = new Game();
        $user = new User();
        
        $addGame = $this->createForm(GameType::class, $game);
        $addUser = $this->createForm(UserType::class, $user);

        $addGame->handleRequest($request);
        $addUser->handleRequest($request);

        if($addGame->isSubmitted() && $addGame->isValid()) {

            $em->persist($game);
            $em->flush();
        }

        if($addUser->isSubmitted() && $addUser->isValid()) {

            $em->persist($user);
            $em->flush();
        }

        return $this->render('admin/home.html.twig', [
            'addGame' => $addGame->createView(),
            'addUser' => $addUser->createView(),
        ]);
    }
}
