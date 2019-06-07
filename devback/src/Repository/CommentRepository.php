<?php

namespace App\Repository;

use App\Entity\Comment;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Comment|null find($id, $lockMode = null, $lockVersion = null)
 * @method Comment|null findOneBy(array $criteria, array $orderBy = null)
 * @method Comment[]    findAll()
 * @method Comment[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CommentRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Comment::class);
    }

    public function lastComments($game){

        $qb = $this->createQueryBuilder('c')
            ->join('c.game', 'g')
            ->orderBy('c.createdAt', 'DESC')
            ->where('g.id = :game')
            ->setParameter('game', $game)
            ->setMaxResults(18)
            ->getQuery()
            ->getResult();

        return $qb;
    }
}
