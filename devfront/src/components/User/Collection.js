import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Progress, Button, Header, Icon, Image, Menu, Segment, Sidebar, SidebarPushable, Grid  } from 'semantic-ui-react';


import './user.scss';

const Collection = ({
  listAdd,
  listWant,
  listWish,
  request,
  displayedProfile,
  displayProfile,
}) => {
  const handleShowClick = () => {
    displayProfile();
  };
  return (
    <div>
          <Button visible={displayProfile} onClick={handleShowClick}>
            vv Profile vv
          </Button>

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
            <h1 id="collection-title">MA COLLECTION</h1>
              <div id="mycollection">
                <List name="listAdd" listDatas={listAdd} request={request} />
                <List name="listWant" listDatas={listWant} request={request} />
                <List name="listWish" listDatas={listWish} request={request} />
              </div>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
    </div>
  );
};

class List extends Component {
  componentDidMount() {
    const { request, name } = this.props;
    request(name);
  }

  render() {
    const { list, load, title } = this.props.listDatas;
    const shortList = list.slice(0, 12);
    const percent = 70;
    return (
      <div className="collection">
        <h2>{title}:</h2>
        {load && <p>Loading</p>}
        {!load && (
          <div className="list">
            {shortList.map(game => (
              <div id={game.id} className="game">
                <img src={game.cover} alt="cover game" />
                <div className="game-score"><Progress percent={percent} indicating /></div>
              </div>
            ))}
          </div>
        )}
        {list.length > 11 && <NavLink to={`/full-collection-list`}>Voir la liste complète...</NavLink>}
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
