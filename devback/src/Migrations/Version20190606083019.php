<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190606083019 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE comment_like CHANGE value value ENUM(\'like\', \'dislike\')');
        $this->addSql('ALTER TABLE state CHANGE status status ENUM(\'have\', \'want\', \'waiting\')');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_6252FDFFA76ED395E48FD9057B00651C ON state (user_id, game_id, status)');
        $this->addSql('ALTER TABLE state RENAME INDEX idx_a393d2fbe48fd905 TO IDX_6252FDFFE48FD905');
        $this->addSql('ALTER TABLE state RENAME INDEX idx_a393d2fba76ed395 TO IDX_6252FDFFA76ED395');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE comment_like CHANGE value value VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('DROP INDEX UNIQ_6252FDFFA76ED395E48FD9057B00651C ON State');
        $this->addSql('ALTER TABLE State CHANGE status status VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE State RENAME INDEX idx_6252fdffa76ed395 TO IDX_A393D2FBA76ED395');
        $this->addSql('ALTER TABLE State RENAME INDEX idx_6252fdffe48fd905 TO IDX_A393D2FBE48FD905');
    }
}
