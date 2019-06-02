<?php

namespace App\Repository;

use DateTime;
use App\Entity\Game;
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
        ->getQuery()
        ->getResult();

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


    public function findRandomGamesList(){

        //compte du nombre de ligne dans la DB
        $countgame = $this->createQueryBuilder('g')
            ->select('count(g.id)')
            ->getQuery()
            ->getSingleScalarResult();
        ///////////////////////////////////////////////////////////////////////


        //Random pour determiner si pair ou impair et donc si sign + ou - 
        //Je sais pas encore comment je vais m'en servir mais on sait jamais
        $rand = rand(1, 2);
        if ($rand%2) {
            $sign = '+';
        } else {
            $sign = '-';
        }
        ///////////////////////////////////////////////////////////////////////



        //Requete à construire
        //il manque surement d'autre element pour génerer un rand convenable mais on verra
        $randomGameList = $this->createQueryBuilder('g')
        
        ->getQuery()
        ->getResult()
        ;

    }
    
}
