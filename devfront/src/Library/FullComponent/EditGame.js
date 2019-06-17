import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import { Button, Header, Icon, Modal, Form, TextArea, Label, Segment, Input, Dimmer, Loader, Image } from 'semantic-ui-react';
import { Slider } from "react-semantic-ui-range";

import './editgame.scss';
 
class EditGame extends Component {

  handleRequestDatas = () => {
    this.props.reqUserGameDatas(this.props.game.id);
  }

  handleChangeComment = evt => {
    const { value, name } = evt.target;
    this.props.setInput(name, value);
  }

  handleChangeScore = evt => {
    this.props.setInput('score', evt);
  }

  handleSubmitScore = (evt) => {
    evt.preventDefault();
    console.log('Submit Score')
    this.props.onSubmitScore(this.props.game.id);
  }

  handleSubmitComment = evt => {
    evt.preventDefault();
    this.props.onSubmitComment(this.props.game.id);
  }

  handleDelete = (name, id) => () => {
    this.props.deleteDatas(name, id);
  }

  render() {
    
    const { name, cover, id } = this.props.game;
    const { 
      actualScore,
      commentTitle,
      commentContent,
      loadReqDat,
      scoreId,
      commentId,
      loadSubmit,
      receivedSubmit,
    } = this.props;

    return (
      <Modal trigger={<div className="edit--button"><i className="far fa-edit "></i></div>} closeIcon onOpen={this.handleRequestDatas} className="caca">
        <div className="all--parts">
          {loadReqDat && (
            <Segment>
              <Dimmer active inverted>
                <Loader size='medium'>Chargement</Loader>
              </Dimmer>

              <Image src='/images/wireframe/paragraph.png' />
            </Segment>
          )}
          {loadReqDat || (
            <div>
              <div className="part--one">
                <Segment className="modal--add--comment">
                  <Header icon="gamepad" className="header--title">Notez et donnez votre avis sur <span>{name}</span></Header>
                  <h2>Note:</h2>
                  <Form onSubmit={this.handleSubmitScore} className="form--note">
                    <Slider
                      name="score"
                      color="#FFFDD8"
                      inverted={false}
                      className="slider--note"
                      settings={{
                        start: actualScore,
                        min: 0,
                        max: 100,
                        step: 1,
                        onChange: this.handleChangeScore,
                      }}
                    />
                    <Label color="#2C3E50" className="label--note">{actualScore}</Label>
                    {!loadSubmit.score ? <Button type='submit' className="button--note">Enregistrer Score</Button> : <Button loading>Loading</Button>}
                    {receivedSubmit.score && <p>Note enregistré</p>}
                  </Form>
                  <Modal.Actions>
                    {!loadSubmit.deletedGame ? (
                      <Button color="red" onClick={this.handleDelete('game', id)}>
                        <Icon name="remove" /> Supprimer le jeu
                      </Button>
                    )
                      : (<Button loading>Loading</Button>)
                    }
                    {receivedSubmit.deleteGame && <p>Votre jeu a été retiré de votre JV'thèque</p>}
                    <Link to={"/game/" + id}>
                      <Button color="green">
                        <Icon name="checkmark" /> Voir la fiche du jeu
                      </Button>
                    </Link>
                  </Modal.Actions>
                </Segment>
              </div>
              <div className="part--two">
                <Segment className="modal--add--comment">
                  <Form onSubmit={this.handleSubmitComment}>
                    <Input
                      name="title"
                      placeholder="Titre"
                      value={commentTitle} 
                      onChange={this.handleChangeComment}
                    />
                    <TextArea
                      name="content"
                      placeholder="Votre avis"
                      style={{ minHeight: 200 }}
                      value={commentContent}
                      onChange={this.handleChangeComment}
                    />
                    {!loadSubmit.comment ? <Button type="submit">Enregistrer Commentaire</Button> : <Button loading>Loading</Button>}
                  </Form>
                  {!loadSubmit.deletedComment ? <Button onClick={this.handleDelete('comment', commentId)}>Supprimer Commentaire</Button> : <Button loading>Loading</Button>}
                  {receivedSubmit.deletedComment && <p>Votre commentaire à bien été supprimé.</p>}
                </Segment>
              </div>
            </div>
          )}
        </div>
      </Modal>
    );
  }
}

export default EditGame;
