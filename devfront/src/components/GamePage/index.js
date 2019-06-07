import React, { Component } from 'react';
import Proptypes from 'prop-types';

import './gamepage.scss';

import GameHeader from 'src/containers/GamePage/gameHeaderContainer';
import GameComments from 'src/containers/GamePage/gameCommentsContainer';
import GameAllComments from 'src/containers/GamePage/gameAllCommentsContainer';



// dans cette classe des props vont etre accessible par le container qui sont loading et request game 
class GamePage extends Component {
  // Lancement de la fonction request game avec Component did mount 
  componentDidMount() {
    this.props.requestGame();
  }

  // lancer le request game quand le composant et finit de charger 
  render() {
    const { loading, background } = this.props; 
    // dans ce return on va mettre des conditions

    const backgroundStyle = {
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
    };

    return (
      <div>
        {loading && <div>Chargement</div>}
        {!loading && (
          <div id="gamepage" style={backgroundStyle}>
            <GameHeader />
            <GameComments />
            <GameAllComments />
          </div>
        )}
      </div>
    );
  }
}

GamePage.propTypes = {
  requestGame: Proptypes.func.isRequired,
  loading: Proptypes.bool.isRequired,
};

export default GamePage;
