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
        return $this->createQueryBuilder('g')
        ->getQuery()
        ->getResult();
    }

    public function findByGame($game){
        
        return $this->createQueryBuilder('g')
        ->where('g.id = :game')
        ->setParameter('game', $game)
        ->getQuery()
        ->getResult();
    }

    public function findNextMonthGame(){

        $date_start = new DateTime('now');
        $date_end = new DateTime('now + 1 Month');


        return $this->createQueryBuilder('g')
        ->where('g.releasedAt >= :date_start')
        ->setParameter('date_start', $date_start->format('Y m d'))
        ->andWhere('g.releasedAt <= :date_end')
        ->setParameter('date_end', $date_end->format('Y m d'))
        ->getQuery()
        ->getResult()
        ;
    }

    public function  findLastMonthGame(){

        $date_start = new DateTime('now');
        $date_end = new DateTime('now - 1 year');

        return $this->createQueryBuilder('g')
        ->where('g.releasedAt <= :date_start')
        ->setParameter('date_start', $date_start->format('Y m d'))
        ->andWhere('g.releasedAt >= :date_end')
        ->setParameter('date_end', $date_end->format('Y m d'))
        ->getQuery()
        ->getResult()
        ;
    }


    public function findRandomGameList(){

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
