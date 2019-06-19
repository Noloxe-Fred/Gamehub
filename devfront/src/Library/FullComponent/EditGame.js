import React, { Component } from 'react'; 
import { Link, Redirect } from 'react-router-dom';
import { Button, Header, Icon, Modal, Form, TextArea, Label, Segment, Input, Dimmer, Loader, Image } from 'semantic-ui-react';
import { Slider } from "react-semantic-ui-range";

import './editgame.scss';
 
class EditGame extends Component {

  // componentDidUpdate() {
  //   const { receivedSubmit, request, name } = this.props;

  // }

  // requestAfterDelete = () => {
  //   this.props.closeModal();
  //   this.props.request('have');
  // }

  handleRequestDatas = () => {
    console.log(this.props.game.id)
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

  handleReset = () => {
    setTimeout(this.props.reset, 1000);
  }

  render() {
    const { name, cover, id } = this.props.game;
    const { 
      actualScore,
      commentTitle,
      commentContent,
      loadReqDat,
      commentId,
      loadSubmit,
      receivedSubmit,
    } = this.props;
 
    return (
      <Modal trigger={<div className="edit--button"><i className="far fa-edit "></i></div>} onOpen={this.handleRequestDatas} onUnmount={this.handleReset} className="caca">
        <div className="all--parts">
          {loadReqDat && (
            <Segment>
              {/* <Dimmer active inverted>
                <Loader inverted size='medium'>Chargement</Loader>
              </Dimmer> */}

              <Image src='https://image.noelshack.com/fichiers/2019/25/3/1560900974-capture-d-ecran-2019-05-25-a-15-43-01.png' />
            </Segment>
          )}
          {loadReqDat || (
            <div className="lines">
              <div className="part--one">
                <Segment className="modal--add--comment">
                  <Header icon="gamepad" className="header--title">Notez et donnez votre avis sur <span>{name}</span></Header>
                  <p>Vous pouvez changer votre note et votre commentaire à tout moment</p>
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
                    <div className="form--button--all">
                      <Label color="#2C3E50" className="label--note"><p>{actualScore}</p></Label>
                      {!loadSubmit.score ? <Button type='submit' className="button--note">Enregistrer Score</Button> : <Button loading>Loading</Button>}
                      {receivedSubmit.score && <p>Note enregistrée</p>}
                    </div>
                  </Form>
                  {/* <Modal.Actions className="form--actions">
                    {!loadSubmit.deletedGame ? (
                      <Button onClick={this.handleDelete('game', id)} className="button--delete">
                        <Icon name="remove" /> Supprimer le jeu
                      </Button>
                    )
                      : (<Button loading>Loading</Button>)
                    }
                    {receivedSubmit.deletedGame && <p>Votre jeu a été retiré de votre JV'thèque. Vous allez être redirigé vers votre Collection.</p>}
                    <Link to={"/game/" + id}>
                      <Button className="button--see--game">
                        <Icon name="checkmark" /> Voir la fiche du jeu
                      </Button>
                    </Link>
                  </Modal.Actions> */}
                </Segment>
              </div>
              <div className="part--two">
                <Segment className="modal--add--comment">
                  <h2>Commentaire:</h2>
                  <Form onSubmit={this.handleSubmitComment}>
                    <Input
                      name="title"
                      placeholder="Titre"
                      value={commentTitle} 
                      onChange={this.handleChangeComment}
                      className="part--two--title"
                    />
                    <TextArea
                      name="content"
                      placeholder="Votre avis"
                      style={{ minHeight: 200 }}
                      value={commentContent}
                      onChange={this.handleChangeComment}
                      className="part--two--content"
                    />
                    <div className="buttons-comment">
                    {!loadSubmit.comment ? <Button type="submit" className="button--save--comment">Enregistrer le commentaire  {receivedSubmit.comment && <Icon name="check" />}</Button> : <Button loading>Loading</Button>}
                    </div>
                  </Form>
                  <div className="button--delete--center">
                    {!loadSubmit.deletedComment ? <Button onClick={this.handleDelete('comment', commentId)} className="button--delete--comment">Supprimer le commentaire</Button> : <Button loading>Loading</Button>}
                    {receivedSubmit.deletedComment && <p>Votre commentaire à bien été supprimé du site</p>} 
                  </div>
                  
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
