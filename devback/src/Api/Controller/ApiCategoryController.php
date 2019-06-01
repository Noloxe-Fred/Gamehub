<?php

namespace App\Api\Controller;

use App\Entity\Category;
use App\Repository\CategoryRepository;
use Symfony\Component\HttpFoundation\Request;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Doctrine\ORM\EntityManagerInterface;

class ApiCategoryController extends FOSRestController
{


    /**
     * @Rest\View
     * @Rest\Get(path = "/category/{id}", name="get_category_action", requirements = {"id"="\d+"})
     */
    public function getGameAction(Category $category, CategoryRepository $categoryRepository, SerializerInterface $serializer)
    {   

        $showCategory = $categoryRepository->findGamesByCategory($category);

        $json = $serializer->serialize($showCategory, 'json', [
            'groups' => 'category_games',
        ]);

        return JsonResponse::fromJsonString($json);
    }
}
