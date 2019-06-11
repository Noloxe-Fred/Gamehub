<?php

namespace App\Repository;

use App\Entity\Category;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Category|null find($id, $lockMode = null, $lockVersion = null)
 * @method Category|null findOneBy(array $criteria, array $orderBy = null)
 * @method Category[]    findAll()
 * @method Category[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CategoryRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Category::class);
    }

    public function findAllCategories()
    {

        $qb = $this->createQueryBuilder('c')
        ->getQuery()
        ->getResult();

        return $qb;
    }

    // public function findGamesByCategory($array = []){

    //     $qb = $this->createQueryBuilder('c')
    //     ->where(':array  = c.id')
    //     ->setParameter('array', $array)
    //     ->getQuery()
    //     ->getResult();
    //     return $qb;
    // }

    public function findGamesByCategory($array){

        $values = array_values($array['id']);

        $qb = $this->createQueryBuilder('c')
        ->join('c.games', 'g')
        ->andWhere('c.id IN(:array)')
        ->setParameter('array', $values)
        ->groupBy('c.id')
        ->getQuery()
        ->getResult();

        return $qb;
    }
}
