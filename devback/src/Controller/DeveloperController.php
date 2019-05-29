<?php

namespace App\Controller;

use App\Entity\Developer;
use App\Form\DeveloperType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/developer/", name="developer_")
 */
class DeveloperController extends AbstractController
{
    /**
     * @Route("new", name="new", methods={"GET" ,"POST"})
     */
    public function new(Request $request, EntityManagerInterface $em)
    {
        
        $developer = new Developer();

        $form = $this->createForm(DeveloperType::class, $developer);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {

            $em->persist($developer);
            $em->flush();
        }

        return $this->render('developer/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
