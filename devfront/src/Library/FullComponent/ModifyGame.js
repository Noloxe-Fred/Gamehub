import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, Popup, Button } from 'semantic-ui-react';

import './modifygame.scss';

import EditGame from 'src/containers/User/editGameCont';

class ModifyGame extends Component { 

  componentDidUpdate() {
    const { receivedChangeList, receivedDelete, request, resetSubmit } = this.props;
    if (receivedDelete) {
      console.log(receivedDelete);
      resetSubmit();
      request('have');
      request('want');
      request('waiting');
    }
    if (receivedChangeList) {
      request('have');
      request('want');
    }
    
  }

  handleDelete = () => {
    const { deleteGame, statusId } = this.props;
    deleteGame('want&waiting', statusId )
  }

  handleChange = () => {
    this.props.changeList('have', this.props.statusId)
  };

  render() {
    const { loadSubmitChange, name, loadDeletedGame, game } = this.props;

    const stylePopup = {
      opacity: 0.8,
      textAlign: 'center',
    };

    return (
      <div className="change--list">
        <Popup trigger={<i className="far fa-list-alt" />} hoverable basic className="popup--change">
          {name === 'want' && (
            <div>
              {loadSubmitChange ? <Button loading>Loading</Button> : <Button onClick={this.handleChange} className="popup--button--have">Je l'ai</Button>}
            </div>
          )}
          {loadDeletedGame ? <Button loading>Loading</Button> : <Button onClick={this.handleDelete} className="popup--button--delete">Supprimer</Button> }
          <Link to={`/game/${game.id}`}><Button className="popup--button--see">Voir le jeu</Button></Link>
        </Popup>
      </div>
    )
  }
};
// ({ statusId, changeList })
export default ModifyGame;
 