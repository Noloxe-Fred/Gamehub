<?php

namespace App\Controller;

use App\Entity\Category;
use App\Form\CategoryType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/** @Route("admin/category/", name="category_") */
class CategoryController extends AbstractController
{
    /**
     * @Route("new", name="new", methods={"GET" ,"POST"})
     */
    public function new(Request $request, EntityManagerInterface $em)
    {
        
        $category = new Category();

        $form = $this->createForm(CategoryType::class, $category);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {

            $em->persist($category);
            $em->flush();
        }

        return $this->render('category/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
