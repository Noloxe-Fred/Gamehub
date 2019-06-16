<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190616163230 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE score RENAME INDEX idx_f3581855a76ed395 TO IDX_32993751A76ED395');
        $this->addSql('ALTER TABLE score RENAME INDEX idx_f3581855e48fd905 TO IDX_32993751E48FD905');
        $this->addSql('ALTER TABLE score RENAME INDEX uniq_f3581855a76ed395e48fd905 TO UNIQ_32993751A76ED395E48FD905');
        $this->addSql('ALTER TABLE list CHANGE status status ENUM(\'have\', \'want\', \'waiting\')');
        $this->addSql('ALTER TABLE comment_like CHANGE value value ENUM(\'like\', \'dislike\')');
        $this->addSql('ALTER TABLE comment_like ADD CONSTRAINT FK_8A55E25FF8697D13 FOREIGN KEY (comment_id) REFERENCES commentary (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE comment_like DROP FOREIGN KEY FK_8A55E25FF8697D13');
        $this->addSql('ALTER TABLE comment_like CHANGE value value VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE list CHANGE status status VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE score RENAME INDEX idx_32993751e48fd905 TO IDX_F3581855E48FD905');
        $this->addSql('ALTER TABLE score RENAME INDEX uniq_32993751a76ed395e48fd905 TO UNIQ_F3581855A76ED395E48FD905');
        $this->addSql('ALTER TABLE score RENAME INDEX idx_32993751a76ed395 TO IDX_F3581855A76ED395');
    }
}
