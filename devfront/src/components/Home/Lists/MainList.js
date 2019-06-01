import React, { Component } from 'react';
import Proptypes from 'prop-types'
import { Loader } from 'semantic-ui-react';

import './lists.scss';

class MainList extends Component {
  componentDidMount() {
    this.props.requestComingSoon();
  }

  render() {
    const { load, gameList } = this.props;
    console.log(gameList, load);
    return (
      <div id="main-list">
        {load && <Loader active inline='centered' />}
        {!load && (
          <div id="list">
            {gameList.map(game => (
              <div id={game.name} className="game" style={{ backgroundImage: `url(${game.illustration})`, backgroundSize: 'cover' }}>
                <p>{game.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default MainList;
