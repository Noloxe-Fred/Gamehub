<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190530084739 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE state CHANGE status status ENUM(\'have\', \'want\', \'would_like\')');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_3952D0CB5E237E06 ON platform (name)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_64C19C15E237E06 ON category (name)');
        $this->addSql('ALTER TABLE comment_like CHANGE value value ENUM(\'like\', \'dislike\')');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D64986CC499D ON user (pseudo)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_CCF1F1BA5E237E06 ON editor (name)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_65FB8B9A5E237E06 ON developer (name)');
        $this->addSql('ALTER TABLE game CHANGE score score SMALLINT UNSIGNED DEFAULT NULL, CHANGE pegi pegi SMALLINT UNSIGNED DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP INDEX UNIQ_64C19C15E237E06 ON category');
        $this->addSql('ALTER TABLE comment_like CHANGE value value VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('DROP INDEX UNIQ_65FB8B9A5E237E06 ON developer');
        $this->addSql('DROP INDEX UNIQ_CCF1F1BA5E237E06 ON editor');
        $this->addSql('ALTER TABLE game CHANGE score score SMALLINT DEFAULT NULL, CHANGE pegi pegi SMALLINT DEFAULT NULL');
        $this->addSql('DROP INDEX UNIQ_3952D0CB5E237E06 ON platform');
        $this->addSql('ALTER TABLE state CHANGE status status VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('DROP INDEX UNIQ_8D93D64986CC499D ON user');
    }
}
