<?php

namespace App\Controller;

use App\Entity\Editor;
use App\Form\EditorType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/editor/", name="editor_")
 */
class EditorController extends AbstractController
{
    /**
     * @Route("new", name="new", methods={"GET" ,"POST"})
     */
    public function new(Request $request, EntityManagerInterface $em)
    {
        
        $editor = new Editor();

        $form = $this->createForm(EditorType::class, $editor);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {

            $em->persist($editor);
            $em->flush();
        }

        return $this->render('editor/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
