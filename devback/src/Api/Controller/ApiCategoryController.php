<?php

namespace App\Api\Controller;

use App\Repository\CategoryRepository;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;

class ApiCategoryController extends FOSRestController
{

    /**
     * @Rest\Post(path = "/category/search ", name = "category_search")
     */
    public function getGamesByCategoryAction(CategoryRepository $categoryRepository, Request $request, SerializerInterface $serializer)
    {   
    
        $categories = $request->request->all('id');

        $games = $categoryRepository->findGamesByCategory($categories);

        $gamesByCategory = $serializer->serialize($games, 'json', [
            'groups' => 'category_games',
        ]);

        return JsonResponse::fromJsonString($gamesByCategory);
    }

    /**
     * @Rest\Get(path = "category/list", name = "category_list")
     */
    public function getCategoryListAction(CategoryRepository $categoryRepository, SerializerInterface $serializer)
    {   

        $request = $categoryRepository->findAllCategories();

        $gamesByCategory = $serializer->serialize($request, 'json', [
            'groups' => 'category_read',
        ]);

        return JsonResponse::fromJsonString($gamesByCategory);
    }
}