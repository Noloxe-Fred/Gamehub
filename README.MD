## Que voulez-vous faire ?

### Description

*La proposition de jeu d'aventure en ligne étant déjà faite ( https://github.com/O-clock-Quantum/Projects/issues/8 ), je vous propose un autre projet perso qui me tient à coeur, et si l'équipe est motivée et investie, nous pourrions envisager une mise en production après la formation*

Pour un résumé rapide, le projet serait une sorte d'outils de gestion et de suivi de jeux-vidéos, que ce soit pour "gérer" les jeux que l'on possèdent, suivre l'actualité de ceux qui nous intéressent spécifiquement, publier des commentaires/tests sur les jeux que l'on a fait, et trouvr des compagnons de jeux pour ceux ayant une composante multijoueur.

Face à la multiplication de plateforme de vente de jeux, il est aujourd'hui difficile de s'y retrouver, de savoir ce qui va sortir, ou est sorti récemment, d'avoir une vue d'ensemble de ce qui existe et est disponible, sans passer par des sites d'actualités pur, dont le but premier n'est pas celui là (l'aspect gestion de sa "jeuvideotheque"). 
Dans l'idée, on se rapproche plus d'un site comme www.senscritique.com (excellent site au passage). Mais étant donné qu'il propose tout types de médias (films, livres, jeux, musique), la gestion propre à chaque catégorie n'est pas très poussée.

Le projet est encore assez vague, et l'on pourra décider ensemble des fonctionnalités à implanter ou à éviter. Dans l'idée, voici ce qu'on pourrait trouver:

- __Un accueil, proposant__ :
    => **trois listes de jeux** (sous forme de jaquettes) classés selon ces critères: "*Futures sorties*", "*Sortis du mois*", "*Déjà Dispo*". Des liens sur ces listes enverraient vers une version plus longue.
    => Une liste **des derniers commentaires d'utilisateurs** (classés par date, ou popularité)
    => Des onglets proposant de **trier les jeux par genre** (garder les trois listes, mais n'afficher que les jeux de gestion, etc...)
    => Un onglet de recherche

- __La fiche d'un jeu__ :
    => Description complète du jeu
    => Note des utilisateurs
    => Lien vers différents site (éditeurs, developpeurs, commu officiel, etc...)
    => Fil d'actu propre au jeu
    => Listes des DLC/Extensions du jeu
    => Commentaires des utilisateurs sur ce jeu

- __Une partie utilisateur__ :
    - **Gestion de ses jeux vidéos** en trois parties:
        => **Ceux possédés**, toute platefrome confondus, à consulter quand on a envie de lancer un nouveau jeu, mais qu'on ne sait pas lequel, ou qu'on a oublié ceux qu'on possède (trop de plateforme où ils sont enregistrés!!!)
        => **Ceux que l'on ne possèdent pas**, mais qui sont sortis (afin de pouvoir taper dans cette liste quand on veut s'acheter un jeu)
        => **Ceux qui ne sont pas sorties**, mais qui nous intéressent (et qui permettrait à l'utilisateur de se débloquer un fil d'actualité ne regroupant que les infos des jeux qu'il suit).
        => Possibilité de trier tout ça par plateforme de jeu (PC, console, Smartphone, etc...)

- __Une partie communautaire__ :
    - **Possibilité de mettre un avis** sur les jeux que l'on a fait:
        => Ces commentaires seront accessibles sur la fiche d'un jeu
        => Les autres utilisateurs pourront les noter et/ou y répondre
    - **Possibilité de noter un jeu qu'on a fait**:
        => la note moyenne de tous les utilisateurs sera affiché sur la fiche du jeu
    - Possibilité de **communiquer entre utilisateurs**:
        => Système de messagerie privée et/ou forum de discussion (oldschool!!!)
    - Possibilité de **"suivre" les utilisateurs** dont les commentaires parraissent pertinents, ou parce qu'ils sont trop cool!
    - Proposer un __**outil de recherche de joueur**__ par affinités, qui jouent aux mêmes jeux multijoueurs que nous, afin de trouver des compagnons de jeu.
        => Un outil poussé? Avec des filtres par types de jeux (combat, coop, etc...), état d'esprit (hardcore gamer, casual gamer, beaucoup de dispo, peu de dispo, etc...)
    - Une __section type Instagram__ version jeu-vidéo, avec **publication de screenshots**, haut-faits, etc....

Le projet est encore à approfondir, mais vous voyez l'idée. Il faut trouver un bon mix entre outil complet, mais en même temps accessible. 

###  V1 (Apothéose)
Fonctionnalités: 
    - Accueil avec les listes de jeux triés au hasard, et fil d'actu généraliste
    - Création de page d'un jeu "simplifié": description, liens, trois boutons d'ajout à son compte ("J'ai", "Je veux l'acheter", "Je l'attends")
    - Gestion du compte utilisateur, avec possibilité d'enregistrer les jeux qu'on possède, et ceux qu'on ne possède pas mais qu'on veut suivre.
    - Consultation d'un fil d'actualité spécifique aux jeux enregistrés sur son compte
    - Outil de tri de ses jeux (par catégorie, possédé ou non possédé, sorti ou non sorti)

###  V2 (Apothéose si on a le temps)
Fonctionnalités: 
    - Possibilité de mettre note et commentaires à ses jeux.
    - Publication de ces infos sur la fiche du jeu
    - Liste des extensions/DLC du jeu, et fil d'actu propre

###  V3 (Après formation)
Fonctionnalités: 
    - Outil de communication entre utilisateur (messagerie privée)
    - Outil de gestion de ses "amis"

###  V4 (les bonus, un jour peut être)
Fonctionnalités: 
    - Galerie perso de screenshots des jeux, et possibilité de partager avec les autres utilisateurs
    - Outil pour trouver des utilisateurs jouant aux mêmes jeux que nous
    - Outil de recherche de joueurs géographiquement??
    - Appli Mobile?

Et toutes vos idées!!!!!

### Opportunités

C'est un projet assez lourd, qui au final ira taper un peu dans tout ce qu'on a vu jusqu'ici. Reste peut être à définir ensemble quelles seront les priorités en fonction du temps imparti.
Et comme précisé plus haut, j'aimerai que ce soit un projet suivi qui ira jusqu'à la mise en ligne :)

## Quelles seront/pourraient être les technologies utilisées ?

- API JV: GiantBomb, IGDB, etc.... (à voir)
- Semantic Ui React
- MySQL
- Symfony
- React/redux (mais j'attends la suite de la spé pour voir les possibilités)

## Avez-vous une idée de l'équipe qui conviendrait à ce projet ?

Deux Front React minimum
Une ou deux personnes en Back (Symfony)