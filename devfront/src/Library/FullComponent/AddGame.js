import React, { Component } from 'react';
import Proptypes from 'prop-types';

import './addgame.scss';
import { verifyHave } from '../../store/reducers/addGameReducer';

class AddGame extends Component {

  componentDidMount() {
    verifyHave(this.props.gameId);
  }

  render() {
    const {
      loadVerify,
      alreadyHave,
      available,
      loadSubmit,
      openPopover,
      receivedSubmit,
      messageNotCheck 
    } = this.props;

    return (
      <div className="add-modal">
        
      </div>
    );
  }
}

AddGame.propTypes = {

};

export default AddGame;
