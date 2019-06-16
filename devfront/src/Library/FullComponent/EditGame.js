import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import { Button, Header, Icon, Modal, Form, TextArea, Label, Segment, Input, Dimmer, Loader, Image } from 'semantic-ui-react';
import { Slider } from "react-semantic-ui-range";

import './editgame.scss';

class EditGame extends Component {
  componentDidMount() {
    this.props.reqUserGameDatas(this.props.game.id);
  }

  handleChange = evt => {
    const { value, name } = evt.target;
    this.props.setInput(name, value);
  }

  handleChangeScore = evt => {
    this.props.setInput('score', evt);
  }

  handleSubmitScore = (evt) => {
    evt.preventDefault();
    this.props.onSubmitScore(this.props.game.id);
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
      <Modal trigger={<div className="edit--button"><i className="far fa-edit "></i></div>} closeIcon className="caca">
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
                  <Header icon="gamepad">Notez et donner votre avis sur {name}</Header>
                  <h2>Note:</h2>
                  <Form submit={this.handleSubmitScore()}>
                    <Slider
                      name="score"
                      color="#FFFDD8"
                      inverted={false}
                      settings={{
                        start: actualScore,
                        min: 0,
                        max: 100,
                        step: 1,
                        onChange: this.handleChangeScore,
                      }}
                    />
                    <Label color="#2C3E50">{actualScore}</Label>
                    {loadSubmit.score ? <Button type='submit'>Enregistrer Score</Button> : <Button loading>Loading</Button>}
                  </Form>
                  <Modal.Actions>
                    {loadSubmit.deletedGame ? (
                      <Button color="red" onClick={this.handleDelete('game', id)}>
                        <Icon name="remove" /> Supprimer le jeu
                      </Button>
                    )
                      : (<Button loading>Loading</Button>)
                    }
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
                  <Form>
                    <Input
                      name="title"
                      placeholder="Titre"
                      value={commentTitle} 
                      onChange={this.handleChange}
                    />
                    <TextArea
                      name="comment"
                      placeholder="Votre avis"
                      style={{ minHeight: 200 }}
                      value={commentContent}
                      onChange={this.handleChange}
                    />
                    {loadSubmit.comment ? <Button type="submit">Enregistrer Commentaire</Button> : <Button loading>Loading</Button>}
                    {loadSubmit.deletedComment ? <Button onClick={this.handleDelete('comment', commentId)}>Supprimer Commentaire</Button> : <Button loading>Loading</Button>}
                  </Form>
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
