import React, { Component } from 'react';

import './gamepage.scss';
// dans cette classe des props vont etre accessible par le container qui sont loading et request game 
class GamePage extends Component {
    // Lancement de la fonction request game avec Component did mount 
    componentDidMount() {
      this.props.requestGame();
    }
    // lancer le request game quand le composant et finit de charger 
  render() {
		const { loading } = this.props;
// dans ce return on va mettre des conditions
    return (
			<div>
				{loading && <div>Chargement</div>}
				{!loading && <div>infos chargé!</div>}
			</div>
    );
  }
}

export default GamePage;
