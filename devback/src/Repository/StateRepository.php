<?php

namespace App\Repository;

use App\Entity\State;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method State|null find($id, $lockMode = null, $lockVersion = null)
 * @method State|null findOneBy(array $criteria, array $orderBy = null)
 * @method State[]    findAll()
 * @method State[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StateRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, State::class);
    }

    public function findGamesListByStatus($user, $status){

        $qb = $this->createQueryBuilder('s')
            ->join('s.user', 'u')
            ->orderBy('s.updatedAt', 'DESC')
            ->where('u.id = :user')
            ->andWhere('s.status = :status')
            ->setParameter('user', $user)
            ->setParameter('status', $status)
            ->setMaxResults(18)
            ->getQuery()
            ->getResult();

        return $qb;
    }

    public function findGameInfo($user, $game){

        $qb = $this->createQueryBuilder('s')
            ->join('s.user', 'u')
            ->join('s.game', 'g')
            ->where('u.id = :user')
            ->andWhere('g.id = :game')
            ->setParameter('user', $user)
            ->setParameter('game', $game)
            ->setMaxResults(18)
            ->getQuery()
            ->getResult();

        return $qb;
    }

    public function findGameState($user, $game){

        $qb = $this->createQueryBuilder('s')
        ->join('s.user', 'u')
        ->join('s.game', 'g')
        ->where('u.id = :user')
        ->andWhere('g.id = :game')
        ->setParameter('user', $user)
        ->setParameter('game', $game)
        ->getQuery()
        ->getResult();

        return $qb;
    }
}
