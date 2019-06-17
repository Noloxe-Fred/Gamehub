import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Progress, Button, Header, Icon, Image, Menu, Segment, Sidebar, SidebarPushable, Grid, Row, Column, Input, Form  } from 'semantic-ui-react';

import ListFull from 'src/Library/List/ListUser';
import EditGame from 'src/containers/User/editGameCont';
import ModifyGame from 'src/containers/User/modifyGameCont';
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
  const handleShowClick = () => {
    displayProfile();
  };

  const handleFullList = choice => () => {
    displayFullList(choice);
  };
  return (
    <div>
      {!localStorage.getItem('connect') && <Redirect to="/" />}
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
              console.log('collection want', game)
              return (
              <div key={game.game.id} className="behind--game">
                {/* <Link to={"/game/" + game.game.id}> */}
                  <div className="game">
                    <img src={game.game.cover} alt="cover game" />
                    <p>{game.game.name}</p>
                    {name == 'have' && <div className="edit"><EditGame game={game.game} request={request} name={name} /></div>}
                    {name !== 'have' && <div className="edit"><ModifyGame statusId={game.id} name={name} game={game.game} /></div>}
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
