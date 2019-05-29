<?php

namespace App\Controller;

use App\Entity\Game;
use App\Form\GameType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/game/", name="game_")
 */
class GameController extends AbstractController
{
    /**
     * @Route("new", name="new", methods={"GET" ,"POST"})
     */
    public function new(Request $request, EntityManagerInterface $em)
    {
        
        $game = new Game();

        $form = $this->createForm(GameType::class, $game);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {

            $em->persist($game);
            $em->flush();
        }

        return $this->render('game/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}