# Dictionnaire de données

## User

|Champ|Type|Spécificités|Description|
|--|--|--|--|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de l'utilisateur|
|firstname|VARCHAR|--|prenom de l'utilisateur|
|lastname|VARCHAR|--|nom de l'utilisateur|
|pseudo|VARCHAR|NOT NULL, UNIQUE|pseudo de l'utilisateur|
|photo|VARCHAR|--|lien vers l'avatar de l'utilisateur|
|birthdate|DATE|--|date de naissance de l'utilisateur|
|password|VARCHAR|NOT NULL|mot de pass de l'utilisateur|
|email|VARCHAR|NOT NULL, UNIQUE|email de l'utilisateur|
|is_active|BOOL|NOT NULL, DEFAULT = 1|status de l'utilisateur (actif/bloqué)|
|biography|TEXT|--|biography de l'utilisateur|
|createdAt|datetime|NOT NULL|date de creation de l'utilisateur|
|updatedAt|datetime|NOT NULL|date de mise à jour de l'utilisateur|

## Platform

|Champ|Type|Spécificités|Description|
|--|--|--|--|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de la Platform associée|
|name|VARCHAR|NOT NULL|nom de la Platform associée|
|createdAt|datetime|NOT NULL|date de creation|
|updatedAt|datetime|NOT NULL|date de mise à jour|

## Editor

|Champ|Type|Spécificités|Description|
|--|--|--|--|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de l'Editor associé|
|name|VARCHAR|NOT NULL|nom de l'Editor associé|
|website|VARCHAR|--|nom de l'Editor associé|
|createdAt|datetime|NOT NULL|date de creation|
|updatedAt|datetime|NOT NULL|date de mise à jour|

## Developer

|Champ|Type|Spécificités|Description|
|--|--|--|--|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de l'Editor associé|
|name|VARCHAR|NOT NULL|nom de la société de Developer|
|website|VARCHAR|--|nom de la société de Developer|
|createdAt|datetime|NOT NULL|date de creation|
|updatedAt|datetime|NOT NULL|date de mise à jour|

## Role

|Champ|Type|Spécificités|Description|
|--|--|--|--|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant du role|
|name|VARCHAR|NOT NULL|Nom du role|
|code|VARCHAR|NOT NULL|Code du Role|
|createdAt|datetime|NOT NULL|date de creation|
|updatedAt|datetime|NOT NULL|date de mise à jour|

## Game

|Champ|Type|Spécificités|Description|
|--|--|--|--|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant du Game|
|name|VARCHAR|NOT NULL|nom du Game|
|description|TEXT|--, DEFAULT = "N/C"|description du Game|
|score|TINY INT|--|score du Game|
|cover|VARCHAR|--, DEFAUT = logo du site|lien vers la photo de couverture du Game|
|illustration|VARCHAR|--|lien vers une illustration/screenshot du Game|
|pegi|TINY INT|--|indique l'age minimum requis pour jouer au Game|
|website|VARCHAR|--|indique le site officiel du Game|
|releasedAt|DATE|--|date officiel de commercialisation du Game|
|createdAt|datetime|NOT NULL|date de creation du Game|
|updatedAt|datetime|NOT NULL|date de mise à jour du Game|


## Category

|Champ|Type|Spécificités|Description|
|--|--|--|--|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de la Category|
|name|VARCHAR|NOT NULL|Nom de la Category|
|createdAt|datetime|NOT NULL|date de creation|
|updatedAt|datetime|NOT NULL|date de mise à jour|

## Comment

|Champ|Type|Spécificités|Description|
|--|--|--|--|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant du Comment|
|title|VARCHAR|NOT NULL|titre du Comment|
|content|TEXT|NOT NULL|contenu du Comment|
|is_active|BOOL|NOT NULL, DEFAULT = 1|status du Comment (actif/bloqué)|
|createdAt|datetime|NOT NULL|date de creation|
|updatedAt|datetime|NOT NULL|date de mise à jour|

## Score

|Champ|Type|Spécificités|Description|
|--|--|--|--|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant du Comment|
|value|TINY INT|NOT NULL|score du Comment|
|createdAt|datetime|NOT NULL|date de creation|
|updatedAt|datetime|NOT NULL|date de mise à jour|

## Comment_like

|Champ|Type|Spécificités|Description|
|--|--|--|--|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant du Comment|
|value|ENUM|NOT NULL|like ou dislike du Comment|
|createdAt|datetime|NOT NULL|date de creation|
|updatedAt|datetime|NOT NULL|date de mise à jour|

## State

|Champ|Type|Spécificités|Description|
|--|--|--|--|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant du Status|
|status|VARCHAR|NOT NULL, ENUM|possede, veut posseder ou possedera un jeu|
|createdAt|datetime|NOT NULL|date de creation|
|updatedAt|datetime|NOT NULL|date de mise à jour|
