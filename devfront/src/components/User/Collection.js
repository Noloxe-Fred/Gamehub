import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Progress, Button, Header, Icon, Image, Menu, Segment, Sidebar, SidebarPushable, Grid, Row, Column, Input, Form  } from 'semantic-ui-react';

import ListFull from 'src/Library/List/ListUser';
import EditGame from 'src/containers/User/editGameCont';
import ModifyGame from 'src/containers/User/modifyGameCont';
import Footer from 'src/components/Footer';

import './user.scss';


const Collection = ({
  listHave,
  listWant,
  listWaiting,
  request,
  fullList,
  displayFullList,
  reqUserGameDatas,
  changeList,
}) => {

  const handleFullList = choice => () => {
    displayFullList(choice);
  };
  return (
    <div>
      {!localStorage.getItem('connect') && <Redirect to="/" />}

      {/* <Button visible={displayProfile} onClick={handleShowClick}>
        vv Profile vv
      </Button> */}
      {/* <Sidebar.Pushable> */}
{/* 
        <Sidebar as={Segment} animation="overlay" direction="top" visible={displayedProfile}>
          
          <Grid textAlign='center' className="profile-content">
                <div>
                  <h4>Paramètres</h4>
                  <h6>Vos informations</h6>
                  <Segment>
                    <p>Votre pseudo:</p><Button>Modifier votre pseudo</Button>
                    <p>Votre email:</p>
                  </Segment>
                  <Segment>
                    <h6>Changer votre mot de passe</h6>
                    <Form>
                      <Input
                        placeholder="Ancien mot de passe"
                      />
                      <Input
                        placeholder="Nouveau mot de passe"
                      />
                      <Input
                        placeholder="Confirmation nouveau mot de passe"
                      />
                      <Button type="submit">Modifier</Button>
                    </Form>
                  </Segment>
                </div>
                <div>
                  <h4>Stats</h4>
                  <h6>Votre collection</h6>
                  <Segment>
                    <p>Vous avez 37 jeux en votre possession</p>
                    <p>Vous avez 12 jeux en liste d'achats</p>
                    <p>Vous suivez 12 jeux</p>
                  </Segment>
                </div>
                <div>
                  <h4>Commentaires</h4>
                  <Segment>Commentaire 1</Segment>
                  <Segment>Commentaire 2</Segment>
                  <Segment>Commentaire 3</Segment>
                  <Segment>Commentaire 4</Segment>
                </div>
          </Grid>
        </Sidebar> */}

        {/* <Sidebar.Pusher dimmed={displayedProfile}> */}

          <Segment basic>
          <h1 className="title--collection" ><span><hr></hr></span><span><i class="fas fa-dot-circle"></i></span>MA COLLECTION<span><i class="fas fa-dot-circle"></i></span><span><hr></hr></span></h1>
  
            {fullList === 'have' && <div id="fullList"><Button onClick={handleFullList(false)} className="back--button">Retour Collection</Button><ListFull gamesDatas={listHave.list} /></div>}
            {fullList === 'want' && <div id="fullList"><Button onClick={handleFullList(false)} className="back--button">Retour Collection</Button><ListFull gamesDatas={listWant.list} /></div>}
            {fullList === 'waiting' && <div id="fullList"><Button onClick={handleFullList(false)} className="back--button">Retour Collection</Button><ListFull gamesDatas={listWaiting.list} /></div>}
            {!fullList && (
              <Grid columns="three" centered id="mycollection">
                <Grid.Row>
                  <Grid.Column computer={5} tablet={5} mobile={16}>
                    <div><ListSmall name="have" listDatas={listHave} request={request} displayFullList={displayFullList} reqUserGameDatas={reqUserGameDatas} changeList={changeList}/></div>
                  </Grid.Column>
                  <Grid.Column computer={5} tablet={5} mobile={16}>
                    <div><ListSmall name="want" listDatas={listWant} request={request} displayFullList={displayFullList} reqUserGameDatas={reqUserGameDatas} changeList={changeList}/></div>
                  </Grid.Column>
                  <Grid.Column computer={5} tablet={5} mobile={16}>
                    <div><ListSmall name="waiting" listDatas={listWaiting} request={request} displayFullList={displayFullList} reqUserGameDatas={reqUserGameDatas} changeList={changeList}/></div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            )}
          </Segment>
      <Footer />
    </div>
    
  ); 
};

class ListSmall extends Component {
  componentDidMount() {
    const { request, name } = this.props;
    console.log('mount List Small')
    request(name);
  }

  fullList = choice => () => {
    this.props.displayFullList(choice);
  }

  render() {
    const { list, load, title } = this.props.listDatas;
    const {name, reqUserGameData, changeList, request } = this.props;
    const shortList = list.slice(0, 12);
    const percent = 80;
    return (
      <div className="collection">
        <h2>{title}:</h2>
        <Button onClick={this.fullList(name)}>Voir la liste complète</Button>
        {load && <p>Loading</p>}
        {!load && (
          <div className="list">
            {shortList.map(( game ) => {
              console.log('collection', name, game)
              return (
              <div key={game.game.id} className="behind--game">
                {/* <Link to={"/game/" + game.game.id}> */}
                  <div className="game">
                    <img src={game.game.cover} alt="cover game" />
                    <p>{game.game.name}</p>
                    {name == 'have' && <div className="edit"><EditGame game={game.game} request={request} name={name} /></div>}
                    <div className="edit"><ModifyGame statusId={game.id} name={name} game={game.game} /></div>
                  </div>
                {/* </Link> */}
                <div className="game-score-part">
                  <div className="game-score"><Progress percent={percent} size="tiny" indicating /></div>
                </div>
              </div>
            )})}
          </div>
        )}
      </div>
    );
  }
};

Collection.propTypes = {
  listAdd: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
  listWant: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
  listWish: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
  request: PropTypes.func.isRequired,
};

export default Collection;
