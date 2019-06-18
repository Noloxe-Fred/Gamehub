import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';

import './gamepage.scss';

import GameHeader from 'src/containers/GamePage/gameHeaderContainer';
import GameComments from 'src/containers/GamePage/gameCommentsContainer';

// dans cette classe des props vont etre accessible par le container qui sont loading et request game 
class GamePage extends Component {
  // Lancement de la fonction request game avec Component did mount 
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.requestGame();
    // this.props.requestComment();
  }

  componentWillUnmount() {
    this.props.resetError();
  }

  // lancer le request game quand le composant et finit de charger 
  render() {
    const { loadingGame, background, error } = this.props;
    // dans ce return on va mettre des conditions

    const backgroundStyle = {
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
    };

    return (
      <div id="gamepage" style={backgroundStyle}>
        {error && <Link to="/">Erreur de chargement des données. Cliquez ici pour retourner à l'accueil</Link>}
        {!error && (
          <div>
            {(loadingGame) && <div>Chargement</div>}
            {(!loadingGame) && (
              <div>
                <div className="first">
                  <GameHeader />
                  <GameComments />
                </div>
                {/* Désactivé en attendant le like comments */}
                {/* <div className="second">
                  <GameAllComments />
                </div> */}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

GamePage.propTypes = {
  requestGame: Proptypes.func.isRequired,
  loadingGame: Proptypes.bool.isRequired,
};

export default GamePage;
