<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190604113503 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE category (id INT AUTO_INCREMENT NOT NULL, type_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, UNIQUE INDEX UNIQ_64C19C15E237E06 (name), INDEX IDX_64C19C1C54C8C93 (type_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE comment (id INT AUTO_INCREMENT NOT NULL, game_id INT DEFAULT NULL, user_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, content LONGTEXT NOT NULL, is_active TINYINT(1) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, INDEX IDX_9474526CE48FD905 (game_id), INDEX IDX_9474526CA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE comment_like (id INT AUTO_INCREMENT NOT NULL, comment_id INT DEFAULT NULL, user_id INT DEFAULT NULL, value ENUM(\'like\', \'dislike\'), created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, INDEX IDX_8A55E25FF8697D13 (comment_id), INDEX IDX_8A55E25FA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE developer (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, website VARCHAR(255) DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, UNIQUE INDEX UNIQ_65FB8B9A5E237E06 (name), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE editor (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, website VARCHAR(255) DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, UNIQUE INDEX UNIQ_CCF1F1BA5E237E06 (name), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE game (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, description LONGTEXT DEFAULT NULL, average_score SMALLINT DEFAULT NULL, score SMALLINT UNSIGNED DEFAULT NULL, cover VARCHAR(255) DEFAULT NULL, illustration VARCHAR(255) DEFAULT NULL, pegi SMALLINT UNSIGNED DEFAULT NULL, website VARCHAR(255) DEFAULT NULL, released_at DATE DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE game_category (game_id INT NOT NULL, category_id INT NOT NULL, INDEX IDX_AD08E6E7E48FD905 (game_id), INDEX IDX_AD08E6E712469DE2 (category_id), PRIMARY KEY(game_id, category_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE game_developer (game_id INT NOT NULL, developer_id INT NOT NULL, INDEX IDX_B75D4A98E48FD905 (game_id), INDEX IDX_B75D4A9864DD9267 (developer_id), PRIMARY KEY(game_id, developer_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE game_editor (game_id INT NOT NULL, editor_id INT NOT NULL, INDEX IDX_B1C45C72E48FD905 (game_id), INDEX IDX_B1C45C726995AC4C (editor_id), PRIMARY KEY(game_id, editor_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE game_platform (game_id INT NOT NULL, platform_id INT NOT NULL, INDEX IDX_92162FEDE48FD905 (game_id), INDEX IDX_92162FEDFFE6496F (platform_id), PRIMARY KEY(game_id, platform_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE platform (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, UNIQUE INDEX UNIQ_3952D0CB5E237E06 (name), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE score (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, game_id INT DEFAULT NULL, value SMALLINT NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, INDEX IDX_32993751A76ED395 (user_id), INDEX IDX_32993751E48FD905 (game_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE state (id INT AUTO_INCREMENT NOT NULL, game_id INT DEFAULT NULL, user_id INT DEFAULT NULL, status ENUM(\'have\', \'want\', \'waiting\'), created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, INDEX IDX_A393D2FBE48FD905 (game_id), INDEX IDX_A393D2FBA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE type (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, UNIQUE INDEX UNIQ_8CDE57295E237E06 (name), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, api_token VARCHAR(255) NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, firstname VARCHAR(255) DEFAULT NULL, lastname VARCHAR(255) DEFAULT NULL, pseudo VARCHAR(255) NOT NULL, photo VARCHAR(255) DEFAULT NULL, birthdate DATE DEFAULT NULL, is_active TINYINT(1) NOT NULL, biography LONGTEXT DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, UNIQUE INDEX UNIQ_8D93D6497BA2F5EB (api_token), UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), UNIQUE INDEX UNIQ_8D93D64986CC499D (pseudo), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE category ADD CONSTRAINT FK_64C19C1C54C8C93 FOREIGN KEY (type_id) REFERENCES type (id)');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526CE48FD905 FOREIGN KEY (game_id) REFERENCES game (id)');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526CA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE comment_like ADD CONSTRAINT FK_8A55E25FF8697D13 FOREIGN KEY (comment_id) REFERENCES comment (id)');
        $this->addSql('ALTER TABLE comment_like ADD CONSTRAINT FK_8A55E25FA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE game_category ADD CONSTRAINT FK_AD08E6E7E48FD905 FOREIGN KEY (game_id) REFERENCES game (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE game_category ADD CONSTRAINT FK_AD08E6E712469DE2 FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE game_developer ADD CONSTRAINT FK_B75D4A98E48FD905 FOREIGN KEY (game_id) REFERENCES game (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE game_developer ADD CONSTRAINT FK_B75D4A9864DD9267 FOREIGN KEY (developer_id) REFERENCES developer (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE game_editor ADD CONSTRAINT FK_B1C45C72E48FD905 FOREIGN KEY (game_id) REFERENCES game (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE game_editor ADD CONSTRAINT FK_B1C45C726995AC4C FOREIGN KEY (editor_id) REFERENCES editor (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE game_platform ADD CONSTRAINT FK_92162FEDE48FD905 FOREIGN KEY (game_id) REFERENCES game (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE game_platform ADD CONSTRAINT FK_92162FEDFFE6496F FOREIGN KEY (platform_id) REFERENCES platform (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE score ADD CONSTRAINT FK_32993751A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE score ADD CONSTRAINT FK_32993751E48FD905 FOREIGN KEY (game_id) REFERENCES game (id)');
        $this->addSql('ALTER TABLE state ADD CONSTRAINT FK_A393D2FBE48FD905 FOREIGN KEY (game_id) REFERENCES game (id)');
        $this->addSql('ALTER TABLE state ADD CONSTRAINT FK_A393D2FBA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE game_category DROP FOREIGN KEY FK_AD08E6E712469DE2');
        $this->addSql('ALTER TABLE comment_like DROP FOREIGN KEY FK_8A55E25FF8697D13');
        $this->addSql('ALTER TABLE game_developer DROP FOREIGN KEY FK_B75D4A9864DD9267');
        $this->addSql('ALTER TABLE game_editor DROP FOREIGN KEY FK_B1C45C726995AC4C');
        $this->addSql('ALTER TABLE comment DROP FOREIGN KEY FK_9474526CE48FD905');
        $this->addSql('ALTER TABLE game_category DROP FOREIGN KEY FK_AD08E6E7E48FD905');
        $this->addSql('ALTER TABLE game_developer DROP FOREIGN KEY FK_B75D4A98E48FD905');
        $this->addSql('ALTER TABLE game_editor DROP FOREIGN KEY FK_B1C45C72E48FD905');
        $this->addSql('ALTER TABLE game_platform DROP FOREIGN KEY FK_92162FEDE48FD905');
        $this->addSql('ALTER TABLE score DROP FOREIGN KEY FK_32993751E48FD905');
        $this->addSql('ALTER TABLE state DROP FOREIGN KEY FK_A393D2FBE48FD905');
        $this->addSql('ALTER TABLE game_platform DROP FOREIGN KEY FK_92162FEDFFE6496F');
        $this->addSql('ALTER TABLE category DROP FOREIGN KEY FK_64C19C1C54C8C93');
        $this->addSql('ALTER TABLE comment DROP FOREIGN KEY FK_9474526CA76ED395');
        $this->addSql('ALTER TABLE comment_like DROP FOREIGN KEY FK_8A55E25FA76ED395');
        $this->addSql('ALTER TABLE score DROP FOREIGN KEY FK_32993751A76ED395');
        $this->addSql('ALTER TABLE state DROP FOREIGN KEY FK_A393D2FBA76ED395');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE comment');
        $this->addSql('DROP TABLE comment_like');
        $this->addSql('DROP TABLE developer');
        $this->addSql('DROP TABLE editor');
        $this->addSql('DROP TABLE game');
        $this->addSql('DROP TABLE game_category');
        $this->addSql('DROP TABLE game_developer');
        $this->addSql('DROP TABLE game_editor');
        $this->addSql('DROP TABLE game_platform');
        $this->addSql('DROP TABLE platform');
        $this->addSql('DROP TABLE score');
        $this->addSql('DROP TABLE state');
        $this->addSql('DROP TABLE type');
        $this->addSql('DROP TABLE user');
    }
}
