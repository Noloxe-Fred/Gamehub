<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190529132552 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE state ADD game_id INT DEFAULT NULL, ADD user_id INT DEFAULT NULL, CHANGE status status ENUM(\'have\', \'want\', \'would_like\')');
        $this->addSql('ALTER TABLE state ADD CONSTRAINT FK_A393D2FBE48FD905 FOREIGN KEY (game_id) REFERENCES game (id)');
        $this->addSql('ALTER TABLE state ADD CONSTRAINT FK_A393D2FBA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_A393D2FBE48FD905 ON state (game_id)');
        $this->addSql('CREATE INDEX IDX_A393D2FBA76ED395 ON state (user_id)');
        $this->addSql('ALTER TABLE score ADD user_id INT DEFAULT NULL, ADD game_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE score ADD CONSTRAINT FK_32993751A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE score ADD CONSTRAINT FK_32993751E48FD905 FOREIGN KEY (game_id) REFERENCES game (id)');
        $this->addSql('CREATE INDEX IDX_32993751A76ED395 ON score (user_id)');
        $this->addSql('CREATE INDEX IDX_32993751E48FD905 ON score (game_id)');
        $this->addSql('ALTER TABLE comment_like ADD comment_id INT DEFAULT NULL, ADD user_id INT DEFAULT NULL, CHANGE value value ENUM(\'like\', \'dislike\')');
        $this->addSql('ALTER TABLE comment_like ADD CONSTRAINT FK_8A55E25FF8697D13 FOREIGN KEY (comment_id) REFERENCES comment (id)');
        $this->addSql('ALTER TABLE comment_like ADD CONSTRAINT FK_8A55E25FA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_8A55E25FF8697D13 ON comment_like (comment_id)');
        $this->addSql('CREATE INDEX IDX_8A55E25FA76ED395 ON comment_like (user_id)');
        $this->addSql('ALTER TABLE comment ADD game_id INT DEFAULT NULL, ADD user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526CE48FD905 FOREIGN KEY (game_id) REFERENCES game (id)');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526CA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_9474526CE48FD905 ON comment (game_id)');
        $this->addSql('CREATE INDEX IDX_9474526CA76ED395 ON comment (user_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE comment DROP FOREIGN KEY FK_9474526CE48FD905');
        $this->addSql('ALTER TABLE comment DROP FOREIGN KEY FK_9474526CA76ED395');
        $this->addSql('DROP INDEX IDX_9474526CE48FD905 ON comment');
        $this->addSql('DROP INDEX IDX_9474526CA76ED395 ON comment');
        $this->addSql('ALTER TABLE comment DROP game_id, DROP user_id');
        $this->addSql('ALTER TABLE comment_like DROP FOREIGN KEY FK_8A55E25FF8697D13');
        $this->addSql('ALTER TABLE comment_like DROP FOREIGN KEY FK_8A55E25FA76ED395');
        $this->addSql('DROP INDEX IDX_8A55E25FF8697D13 ON comment_like');
        $this->addSql('DROP INDEX IDX_8A55E25FA76ED395 ON comment_like');
        $this->addSql('ALTER TABLE comment_like DROP comment_id, DROP user_id, CHANGE value value VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE score DROP FOREIGN KEY FK_32993751A76ED395');
        $this->addSql('ALTER TABLE score DROP FOREIGN KEY FK_32993751E48FD905');
        $this->addSql('DROP INDEX IDX_32993751A76ED395 ON score');
        $this->addSql('DROP INDEX IDX_32993751E48FD905 ON score');
        $this->addSql('ALTER TABLE score DROP user_id, DROP game_id');
        $this->addSql('ALTER TABLE state DROP FOREIGN KEY FK_A393D2FBE48FD905');
        $this->addSql('ALTER TABLE state DROP FOREIGN KEY FK_A393D2FBA76ED395');
        $this->addSql('DROP INDEX IDX_A393D2FBE48FD905 ON state');
        $this->addSql('DROP INDEX IDX_A393D2FBA76ED395 ON state');
        $this->addSql('ALTER TABLE state DROP game_id, DROP user_id, CHANGE status status VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci');
    }
}
