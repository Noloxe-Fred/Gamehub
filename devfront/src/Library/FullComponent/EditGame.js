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

  // handleTitle = evt => {
  //   const { value } = evt.target;
  //   this.props.setTitle(value);
  // }

  // handleContent = evt => {
  //   const { value } = evt.target;
  //   this.props.setContent(value);
  // }

  handleDelete = id => () => {
    const { value } = evt.target;
    this.props.deleteGame(id);
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
      loadSubmitScore,
      loadSubmitComment,
      typeSubScore,
      typeSubComment,
    } = this.props;

    return (
      <Modal trigger={<div className="edit--button"><i className="far fa-edit "></i></div>} closeIcon className="caca">
        <div className="all--parts">
          {loadReqDat && (
            <Segment>
              <Dimmer active inverted>
                <Loader size='medium'>Chargement de vos informations</Loader>
              </Dimmer>

              <Image src='/images/wireframe/paragraph.png' />
            </Segment>
          )}
          {loadReqDat || (
            <div>
              <div className="part--one">
              <Segment className="modal--add--comment">
                <Header icon='gamepad'>Notez et donner votre avis sur {name}</Header>
                <h2>Note:</h2>
                <Form>
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
                  <Button type='submit'>Enregistrer Score</Button>
                </Form>
                <Modal.Actions>
                  <Button color='red' onClick={this.handleDelete(id)} >
                    <Icon name='remove' /> Supprimer le jeu
                  </Button>
                  <Link to={'/game/'+id}>
                    <Button color='green'>
                      <Icon name='checkmark' /> Voir la fiche du jeu
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
                    placeholder='Votre avis' 
                    style={{ minHeight: 200 }} 
                    value={commentContent} 
                    onChange={this.handleChange} 
                    />
                  <Button type="submit">Enregistrer Commentaire</Button>
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
