<?php

namespace App\Repository;

use DateTime;
use App\Entity\Game;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

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

    public function filterGamesByCategory(array $array){

        //BESOIN DE L ID DE LA CATEGORY

        $qb = $this->createQueryBuilder('g')
        ->where(':array MEMBER OF g.categories')
        //->where('expr->eq('g.categories', '?1') MEMBER OF g.categories')
        ->setParameter('array', array_values($array))
        ->getQuery()
        ->getResult();
        return $qb;

    }


    public function findAllGames()
    {

        $qb = $this->createQueryBuilder('g')
        ->getQuery()
        ->getResult();
        return $qb;
    }

    // public function findByGame($game){
        
    //     $qb = $this->createQueryBuilder('g')
    //     ->where('g.id = :game')
    //     ->setParameter('game', $game)
    //     ->getQuery()
    //     ->getResult();

    //     return $qb;
    // }

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

    public function findRandomGamesList($count = 18){

        $qb = $this->createQueryBuilder('g')
        ->addSelect('RAND() as HIDDEN rand')
        ->orderBy('rand')
        ->setMaxResults($count)
        ->getQuery()
        ->getResult();

        return $qb;
    }

    // // /!\ Méthode non terminé /!\ //
    // public function filterGamesByCategory(array $array){

    //     $qb = $this->createQueryBuilder('g')
    //     ->where(':array MEMBER OF g.categories')
    //     //->where('expr->eq('g.categories', '?1') MEMBER OF g.categories')
    //     ->setParameter('array', array_values($array))
    //     ->getQuery()
    //     ->getResult();

    //     return $qb;
    // }

    public function averageScore($game){

        $qb = $this->createQueryBuilder('g')
        ->join('g.scores', 's')
        ->select('avg(s.value), count(s.value)')
        ->where('g.id = :game')
        ->setParameter('game', $game)
        ->getQuery()
        ->getResult();

        return $qb;
    }

    public function findGamesByBestScore(){

        $qb = $this->createQueryBuilder('g')
            ->orderBy('g.score', 'DESC')
            ->setMaxResults(18)
            ->getQuery()
            ->getResult();

        return $qb;
    }

    public function findGamesByWorstScore(){

   

        $qb = $this->createQueryBuilder('g')
            ->orderBy('g.score', 'ASC')
            ->setMaxResults(18)
            ->getQuery()
            ->getResult();

        return $qb;
    }


    public function findGamesByBestMonthScore(){

        $dateStart = new DateTime('now');
        $dateEnd = new DateTime('now - 1 month');

        $qb = $this->createQueryBuilder('g')
            ->where('g.releasedAt <= :dateStart')
            ->andWhere('g.releasedAt >= :dateEnd')
            ->setParameter('dateStart', $dateStart->format('Y m d'))
            ->setParameter('dateEnd', $dateEnd->format('Y m d'))
            ->orderBy('g.score', 'DESC')
            ->setMaxResults(18)
            ->getQuery()
            ->getResult();

        return $qb;
    }

    public function findGamesByWorstMonthScore(){

        $dateStart = new DateTime('now');
        $dateEnd = new DateTime('now - 1 month');

        $qb = $this->createQueryBuilder('g')
            ->where('g.releasedAt <= :dateStart')
            ->andWhere('g.releasedAt >= :dateEnd')
            ->setParameter('dateStart', $dateStart->format('Y m d'))
            ->setParameter('dateEnd', $dateEnd->format('Y m d'))
            ->orderBy('g.score', 'ASC')
            ->setMaxResults(18)
            ->getQuery()
            ->getResult();

        return $qb;
    }
    public function findGamesByBestYearScore(){

        $dateStart = new DateTime('now');
        $dateEnd = new DateTime('now - 1 year');

        $qb = $this->createQueryBuilder('g')
            ->where('g.releasedAt <= :dateStart')
            ->andWhere('g.releasedAt >= :dateEnd')
            ->setParameter('dateStart', $dateStart->format('Y m d'))
            ->setParameter('dateEnd', $dateEnd->format('Y m d'))
            ->orderBy('g.score', 'DESC')
            ->setMaxResults(18)
            ->getQuery()
            ->getResult();

        return $qb;
    }

    public function findGamesByWorstYearScore(){

        $dateStart = new DateTime('now');
        $dateEnd = new DateTime('now - 1 year');

        $qb = $this->createQueryBuilder('g')
            ->where('g.releasedAt <= :dateStart')
            ->andWhere('g.releasedAt >= :dateEnd')
            ->setParameter('dateStart', $dateStart->format('Y m d'))
            ->setParameter('dateEnd', $dateEnd->format('Y m d'))
            ->orderBy('g.score', 'ASC')
            ->setMaxResults(18)
            ->getQuery()
            ->getResult();

        return $qb;
    }


    public function findGamesByBestWeekScore(){

        $dateStart = new DateTime('now');
        $dateEnd = new DateTime('now - 1 week');

        $qb = $this->createQueryBuilder('g')
            ->where('g.releasedAt <= :dateStart')
            ->andWhere('g.releasedAt >= :dateEnd')
            ->setParameter('dateStart', $dateStart->format('Y m d'))
            ->setParameter('dateEnd', $dateEnd->format('Y m d'))
            ->orderBy('g.score', 'DESC')
            ->setMaxResults(18)
            ->getQuery()
            ->getResult();

        return $qb;
    }

    public function findGamesByWorstWeekScore(){

        $dateStart = new DateTime('now');
        $dateEnd = new DateTime('now - 1 week');

        $qb = $this->createQueryBuilder('g')
            ->where('g.releasedAt <= :dateStart')
            ->andWhere('g.releasedAt >= :dateEnd')
            ->setParameter('dateStart', $dateStart->format('Y m d'))
            ->setParameter('dateEnd', $dateEnd->format('Y m d'))
            ->orderBy('g.score', 'ASC')
            ->setMaxResults(18)
            ->getQuery()
            ->getResult();

        return $qb;
    }
}
