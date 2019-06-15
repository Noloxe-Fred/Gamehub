<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190615111314 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE List CHANGE status status ENUM(\'have\', \'want\', \'waiting\')');
        $this->addSql('ALTER TABLE List RENAME INDEX idx_e4fa5726e48fd905 TO IDX_44C8F818E48FD905');
        $this->addSql('ALTER TABLE List RENAME INDEX idx_e4fa5726a76ed395 TO IDX_44C8F818A76ED395');
        $this->addSql('ALTER TABLE List RENAME INDEX uniq_e4fa5726a76ed395e48fd905 TO UNIQ_44C8F818A76ED395E48FD905');
        $this->addSql('ALTER TABLE comment_like CHANGE value value ENUM(\'like\', \'dislike\')');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE list CHANGE status status VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE list RENAME INDEX idx_44c8f818a76ed395 TO IDX_E4FA5726A76ED395');
        $this->addSql('ALTER TABLE list RENAME INDEX uniq_44c8f818a76ed395e48fd905 TO UNIQ_E4FA5726A76ED395E48FD905');
        $this->addSql('ALTER TABLE list RENAME INDEX idx_44c8f818e48fd905 TO IDX_E4FA5726E48FD905');
        $this->addSql('ALTER TABLE comment_like CHANGE value value VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci');
    }
}
