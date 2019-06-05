<?php

namespace App\Controller;

use App\Entity\Type;
use App\Form\TypeType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("admin/type/", name="type_")
 */
class TypeController extends AbstractController
{
    /**
     * @Route("new", name="new", methods={"GET" ,"POST"})
     */
    public function new(Request $request, EntityManagerInterface $em)
    {
        
        $type = new Type();

        $form = $this->createForm(TypeType::class, $type);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {

            $em->persist($type);
            $em->flush();
        }

        return $this->render('type/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
