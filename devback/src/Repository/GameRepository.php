<?php

namespace App\Repository;

use DateTime;
use App\Entity\Game;
use Doctrine\ORM\Query;
use App\Api\Acme\DemoBundle\DQL\RandFunction;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @method Game|null find($id, $lockMode = null, $lockVersion = null)
 * @method Game|null findOneBy(array $criteria, array $orderBy = null)
 * @method Game[]    findAll()
 * @method Game[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GameRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Game::class);
    }

    public function findAllGames()
    {

        $qb = $this->createQueryBuilder('g') 

        ->andWhere('g.id = :field1')  
        ->andWhere('g.id = :field2')
        ->setParameters(array('field1' => '58', 'field2' => '59'))
        ->getQuery()
        ->getArrayResult(Query::HYDRATE_SCALAR);
        return $qb;
    }

    public function findByGame($game){
        
        $qb = $this->createQueryBuilder('g')
        ->where('g.id = :game')
        ->setParameter('game', $game)
        ->getQuery()
        ->getResult();

        return $qb;
    }

    public function findNextMonthGames(){

        $dateStart = new DateTime('now');
        $dateEnd = new DateTime('now + 1 month');

        $qb = $this->createQueryBuilder('g')
        ->where('g.releasedAt >= :dateStart')
        ->andWhere('g.releasedAt <= :dateEnd')
        ->setParameter('dateStart', $dateStart->format('Y m d'))
        ->setParameter('dateEnd', $dateEnd->format('Y m d'))
        ->getQuery()
        ->getResult();

        return $qb;
    }

    public function  findLastMonthGames(){

        $dateStart = new DateTime('now');
        $dateEnd = new DateTime('now - 1 month');

        $qb = $this->createQueryBuilder('g')
        ->where('g.releasedAt <= :dateStart')
        ->andWhere('g.releasedAt >= :dateEnd')
        ->setParameter('dateStart', $dateStart->format('Y m d'))
        ->setParameter('dateEnd', $dateEnd->format('Y m d'))
        ->getQuery()
        ->getResult();

        return $qb;
    }

    public function findRandomGamesList($count = 10){

        $qb = $this->createQueryBuilder('g')
        ->addSelect('RAND() as HIDDEN rand')
        ->orderBy('rand')
        ->setMaxResults($count)
        ->getQuery()
        ->getResult();

        return $qb;
    }

    // public function findGamesByBestScore(){

    //     $qb = $this->createQueryBuilder('g')
    //         ->orderBy('g.score', 'ASC')
    //         ->setMaxResults(18)
    //         ->getQuery();

    //     return $qb;
    // }

    // public function findGamesByWorstScore(){

    //     $qb = $this->createQueryBuilder('g')
    //         ->orderBy('g.score', 'DESC')
    //         ->setMaxResults(18)
    //         ->getQuery();

    //     return $qb;
    // }
}
