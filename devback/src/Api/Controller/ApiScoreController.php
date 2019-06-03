<?php

namespace App\Api\Controller;

use App\Entity\Game;
use App\Entity\User;
use App\Entity\Score;
use App\Repository\ScoreRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

class ApiScoreController extends FOSRestController
{

    public static function averageScore($numberVotes, $currentScore, $newValue)
    {   
        if ($numberVotes === 0) {
            
            $newScore = intval($newValue);

            return $newScore;
        }

        $newScore = intval($currentScore) + intval($newValue) / intval($numberVotes);

        return $newScore;
    }

    /**
     * @Rest\View(StatusCode=201)
     * @Rest\Post(path = "user/{user}/game/{game}/score", name="score_new")
     * @ParamConverter("score", converter="fos_rest.request_body")
     */
    public function newScoreAction(Request $request, Score $score, Game $game, SerializerInterface $serializer, EntityManagerInterface $em)
    {   

        $numberVotes = count($game->getScores());
        dump($numberVotes);
        $currentScore = $game->getScore();
        $newValue = $request->getContent();

        $newScore = self::averageScore($numberVotes, $currentScore, $newValue);
        $game->setScore($newScore);

        $post = $serializer->deserialize($newValue, Score::class, 'json');

        $em->persist($post);
        $em->flush();

        return $score;
    }

    /**
     * @Rest\View(StatusCode=200)
     * @Rest\Get(path = "/score", name="score")
     */
    public function showScoreAction(ScoreRepository $scoreRepository, SerializerInterface $serializer){

        $request = $scoreRepository->findfirstscore();

        $firstscore = $serializer->serialize($request, 'json', [
            'groups' => 'game_read',
        ]);

        return JsonResponse::fromJsonString($firstscore);

    }

    /**
     * @Rest\View
     * @Rest\Post(path = "/score/create", name="score_create")
     */
    public function createScoreAction(Request $request, SerializerInterface $serializer, EntityManagerInterface $em)
    {
        
        $data = $request->getContent();

        dump($data->getUser());
        die;
        
        $post = $serializer->deserialize($data, Score::class, 'json');
        
        $em->persist($post);
        $em->flush();

        return new JsonResponse('', JsonResponse::HTTP_CREATED);
    }
}
    // /**
    //  * @Rest\View
    //  * @Rest\Post(path = "/game", name="game_create")
    //  */
    // public function createGameAction(Request $request, SerializerInterface $serializer, EntityManagerInterface $em)
    // {
        
    //     $data = $request->getContent();

    //     $post = $serializer->deserialize($data, Game::class, 'json');
        
    //     $em->persist($post);
    //     $em->flush();

    //     return new JsonResponse('', JsonResponse::HTTP_CREATED);
    // }