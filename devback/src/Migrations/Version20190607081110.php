<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190607081110 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE refresh_tokens');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_5BC96BF0A76ED395E48FD905 ON comment (user_id, game_id)');
        $this->addSql('ALTER TABLE comment RENAME INDEX idx_9474526ce48fd905 TO IDX_5BC96BF0E48FD905');
        $this->addSql('ALTER TABLE comment RENAME INDEX idx_9474526ca76ed395 TO IDX_5BC96BF0A76ED395');
        $this->addSql('ALTER TABLE comment_like CHANGE value value ENUM(\'like\', \'dislike\')');
        $this->addSql('ALTER TABLE state CHANGE status status ENUM(\'have\', \'want\', \'waiting\')');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE refresh_tokens (id INT AUTO_INCREMENT NOT NULL, refresh_token VARCHAR(128) NOT NULL COLLATE utf8mb4_unicode_ci, username VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, valid DATETIME NOT NULL, UNIQUE INDEX UNIQ_9BACE7E1C74F2195 (refresh_token), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('DROP INDEX UNIQ_5BC96BF0A76ED395E48FD905 ON Comment');
        $this->addSql('ALTER TABLE Comment RENAME INDEX idx_5bc96bf0a76ed395 TO IDX_9474526CA76ED395');
        $this->addSql('ALTER TABLE Comment RENAME INDEX idx_5bc96bf0e48fd905 TO IDX_9474526CE48FD905');
        $this->addSql('ALTER TABLE comment_like CHANGE value value VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE State CHANGE status status VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci');
    }
}
