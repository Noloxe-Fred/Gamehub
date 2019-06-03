<?php

namespace App\Api\Controller;

use App\Entity\Category;
use App\Repository\CategoryRepository;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;

class ApiCategoryController extends FOSRestController
{

    /**
     * @Rest\View
     * @Rest\Get(path = "/category/{id}/games", name="category_game_list", requirements = {"id"="\d+"})
     */
    public function getGamesByCategoryAction(Category $category, CategoryRepository $categoryRepository, SerializerInterface $serializer)
    {   

        $request = $categoryRepository->findGamesByCategory($category);

        $gamesByCategory = $serializer->serialize($request, 'json', [
            'groups' => 'category_games',
        ]);

        return JsonResponse::fromJsonString($gamesByCategory);
    }
}
