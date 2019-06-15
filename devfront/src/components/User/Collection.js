import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Redirect } from 'react-router-dom';
import { Progress, Button, Header, Icon, Image, Menu, Segment, Sidebar, SidebarPushable, Grid  } from 'semantic-ui-react';

import ListFull from 'src/Library/List/ListUser';
import EditGame from 'src/containers/User/editGameCont';
import './user.scss';


const Collection = ({
  listAdd,
  listWant,
  listWaiting,
  request,
  displayedProfile,
  displayProfile,
  fullList,
  displayFullList,
  reqUserGameDatas,
}) => {
  const handleShowClick = () => {
    displayProfile();
  };

  const handleFullList = choice => () => {
    displayFullList(choice);
  };
  return (
    <div>
      {!localStorage.getItem('connect') && <Redirect to="/" />}
      {/* <Button visible={displayProfile} onClick={handleShowClick}>
        vv Profile vv
      </Button> */}
      <Sidebar.Pushable>

        <Sidebar as={Segment} animation="overlay" direction="top" visible={displayedProfile}>
          <Header as='h3'>PROFIL</Header>
          <Grid textAlign='center' className="profile-content">
                <div>
                  <h4>Paramètres</h4>
                  <Segment>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quam quasi tempore laboriosam sapiente, asperiores reiciendis facilis, corrupti cupiditate ratione impedit fugiat adipisci aut hic ipsam vitae beatae? Consequatur, fugiat.</Segment>
                  <Segment>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quam quasi tempore laboriosam sapiente, asperiores reiciendis facilis, corrupti cupiditate ratione impedit fugiat adipisci aut hic ipsam vitae beatae? Consequatur, fugiat.</Segment>
                </div>
                <div>
                  <h4>Stats</h4>
                  <Segment>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quam quasi tempore laboriosam sapiente, asperiores reiciendis facilis, corrupti cupiditate ratione impedit fugiat adipisci aut hic ipsam vitae beatae? Consequatur, fugiat.</Segment>
                </div>
                <div>
                  <h4>Commentaires</h4>
                  <Segment>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quam quasi tempore laboriosam sapiente, asperiores reiciendis facilis, corrupti cupiditate ratione impedit fugiat adipisci aut hic ipsam vitae beatae? Consequatur, fugiat.</Segment>
                  <Segment>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quam quasi tempore laboriosam sapiente, asperiores reiciendis facilis, corrupti cupiditate ratione impedit fugiat adipisci aut hic ipsam vitae beatae? Consequatur, fugiat.</Segment>
                  <Segment>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quam quasi tempore laboriosam sapiente, asperiores reiciendis facilis, corrupti cupiditate ratione impedit fugiat adipisci aut hic ipsam vitae beatae? Consequatur, fugiat.</Segment>
                  <Segment>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quam quasi tempore laboriosam sapiente, asperiores reiciendis facilis, corrupti cupiditate ratione impedit fugiat adipisci aut hic ipsam vitae beatae? Consequatur, fugiat.</Segment>
                </div>
          </Grid>
        </Sidebar>

        <Sidebar.Pusher dimmed={displayedProfile}>
          <Segment basic>
          <h1 className="title--collection" >MA COLLECTION</h1>
            {fullList === 'add' && <div id="fullList"><Button onClick={handleFullList(false)}>Retour Collection</Button><ListFull gamesDatas={listAdd.list} /></div>}
            {fullList === 'want' && <div id="fullList"><Button onClick={handleFullList(false)}>Retour Collection</Button><ListFull gamesDatas={listWant.list} /></div>}
            {fullList === 'waiting' && <div id="fullList"><Button onClick={handleFullList(false)}>Retour Collection</Button><ListFull gamesDatas={listWaiting.list} /></div>}
            {!fullList && (
              <div id="mycollection">
                <ListSmall name="add" listDatas={listAdd} request={request} displayFullList={displayFullList} reqUserGameDatas={reqUserGameDatas} />
                <ListSmall name="want" listDatas={listWant} request={request} displayFullList={displayFullList} reqUserGameDatas={reqUserGameDatas} />
                <ListSmall name="waiting" listDatas={listWaiting} request={request} displayFullList={displayFullList} reqUserGameDatas={reqUserGameDatas} />
              </div>
            )}
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
};

class ListSmall extends Component {
  componentDidMount() {
    const { request, name } = this.props;
    request(name);
  }

  fullList = choice => () => {
    this.props.displayFullList(choice);
  }

  render() {
    const { list, load, title } = this.props.listDatas;
    const {name, reqUserGameData } = this.props;
    const shortList = list.slice(0, 12);
    const percent = 70;
    return (
      <div className="collection">
        <h2>{title}:</h2>
        {list.length > 11 && <Button onClick={this.fullList(name)}>Voir la liste complète</Button>}
        {load && <p>Loading</p>}
        {!load && (
          <div className="list">
            {shortList.map(game => {
              {/* reqUserGameData(game.id); */}
              return (
              <div className="test">
                <div id={game.id} className="game">
                  <img src={game.cover} alt="cover game" />
                  {/* <EditGame game={game} /> */}
                  <div className="game-score"><Progress percent={percent} indicating /></div>
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
