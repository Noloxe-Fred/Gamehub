<?php

namespace App\Controller;

use App\Entity\Platform;
use App\Form\PlatformType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/platform/", name="platform_")
 */
class PlatformController extends AbstractController
{
    /**
     * @Route("new", name="new", methods={"GET" ,"POST"})
     */
    public function new(Request $request, EntityManagerInterface $em)
    {
        
        $platform = new Platform();

        $form = $this->createForm(PlatformType::class, $platform);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {

            $em->persist($platform);
            $em->flush();
        }

        return $this->render('platform/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
