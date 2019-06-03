<?php

namespace App\Api\Controller;

use App\Entity\Score;

use App\Repository\GameRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

class ApiScoreController extends FOSRestController
{

    public static function averageScore($numberVotes, $currentScore, $newValue)
    {   
        if ($numberVotes === 0) {
            
            $newScore = intval($newValue);

            return $newScore;
        }

        $sum =  intval($currentScore) + intval($newValue);

        $newScore = $sum / intval($numberVotes + 1);

        return $newScore;
    }

   /**
     * @Rest\View
     * @Rest\Post(path = "/score/new", name="score_new")
     * @ParamConverter("score", converter="fos_rest.request_body")
     */
    public function newScoreAction(Request $request, Score $score, EntityManagerInterface $em, GameRepository $gameRepository, UserRepository $userRepository)
    {
        $info = $request->request->all();
        $user = $userRepository->findOneBy(['id' => $info["user"]["id"]]);
        $game = $gameRepository->findOneBy(['id' => $info["game"]["id"]]);

        $score = new Score();

        $score->setValue($request->request->get('value'));
        $score->setUser($user);
        $score->setGame($game);

        $em->persist($score);
        $em->flush();

        return new JsonResponse('', JsonResponse::HTTP_CREATED);
    }
}
