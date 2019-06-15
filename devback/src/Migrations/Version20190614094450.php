<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190614094450 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE state CHANGE status status ENUM(\'have\', \'want\', \'waiting\')');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_6252FDFFA76ED395E48FD905 ON state (user_id, game_id)');
        $this->addSql('ALTER TABLE state RENAME INDEX idx_a393d2fbe48fd905 TO IDX_6252FDFFE48FD905');
        $this->addSql('ALTER TABLE state RENAME INDEX idx_a393d2fba76ed395 TO IDX_6252FDFFA76ED395');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_F3581855A76ED395E48FD905 ON score (user_id, game_id)');
        $this->addSql('ALTER TABLE score RENAME INDEX idx_32993751a76ed395 TO IDX_F3581855A76ED395');
        $this->addSql('ALTER TABLE score RENAME INDEX idx_32993751e48fd905 TO IDX_F3581855E48FD905');
        $this->addSql('ALTER TABLE comment_like CHANGE value value ENUM(\'like\', \'dislike\')');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_5BC96BF0A76ED395E48FD905 ON comment (user_id, game_id)');
        $this->addSql('ALTER TABLE comment RENAME INDEX idx_9474526ce48fd905 TO IDX_5BC96BF0E48FD905');
        $this->addSql('ALTER TABLE comment RENAME INDEX idx_9474526ca76ed395 TO IDX_5BC96BF0A76ED395');
        $this->addSql('ALTER TABLE game DROP average_score');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP INDEX UNIQ_5BC96BF0A76ED395E48FD905 ON Comment');
        $this->addSql('ALTER TABLE Comment RENAME INDEX idx_5bc96bf0a76ed395 TO IDX_9474526CA76ED395');
        $this->addSql('ALTER TABLE Comment RENAME INDEX idx_5bc96bf0e48fd905 TO IDX_9474526CE48FD905');
        $this->addSql('ALTER TABLE comment_like CHANGE value value VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE game ADD average_score SMALLINT DEFAULT NULL');
        $this->addSql('DROP INDEX UNIQ_F3581855A76ED395E48FD905 ON Score');
        $this->addSql('ALTER TABLE Score RENAME INDEX idx_f3581855e48fd905 TO IDX_32993751E48FD905');
        $this->addSql('ALTER TABLE Score RENAME INDEX idx_f3581855a76ed395 TO IDX_32993751A76ED395');
        $this->addSql('DROP INDEX UNIQ_6252FDFFA76ED395E48FD905 ON State');
        $this->addSql('ALTER TABLE State CHANGE status status VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE State RENAME INDEX idx_6252fdffa76ed395 TO IDX_A393D2FBA76ED395');
        $this->addSql('ALTER TABLE State RENAME INDEX idx_6252fdffe48fd905 TO IDX_A393D2FBE48FD905');
    }
}
