import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Icon, Header, Popup, Grid, Loader } from 'semantic-ui-react';

import './addgame.scss';
import ModalConnect from 'src/containers/Navbar/ModalConnect';

class AddGame extends Component {

  componentDidMount() {
    const {connect, verifyHave, gameId } = this.props;
    if (connect) {
      verifyHave(gameId);
    }
  }

  componentDidUpdate() {
    const {connect, verifyHave, gameId } = this.props;
    if (connect) {
      verifyHave(gameId);
    }
  }

  addGame = list => () => {
    const { submitForm, gameId } = this.props;
    submitForm(gameId, list);
  }

  render() {
    const {
      loadVerify,
      alreadyHave,
      available,
      loadSubmit,
      receivedSubmit,
      connect,
    } = this.props;

    const stylePopup = {
      opacity: 0.8,
      textAlign: 'center',
    };

    return (
      <div className="plus">
        {loadVerify && <Loader className="loader--maincard" active size="small" />}
        {alreadyHave && <i class="fas fa-gamepad" />}
        {!alreadyHave && !loadVerify && (
          <Popup trigger={<i className="fas fa-plus-circle" />} flowing hoverable inverted style={stylePopup}>
          {!connect && <div>Veuillez {<ModalConnect text="vous connecter" />} pour ajouter ce jeu à votre collection</div>} 
          {connect && (
              <div>
                <Header>Choisissez une liste{receivedSubmit && <div className="confirm-message">Le jeu à bien été ajouté</div>}</Header>
                <div>
                  {loadSubmit && <Loader active inline='centered' />}
                  {(!loadVerify && !loadSubmit) && (
                    <div>
                      {available == 'available' && (
                        <Grid centered columns={3}>
                        <Grid.Column textAlign='center'>
                          <button className="add-button" onClick={this.addGame('have')}>Je l'ai</button>
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                          <button className="add-button" onClick={this.addGame('want')}>Je le veux</button>
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                          <button className="not-available add-button">Je l'attends</button>
                        </Grid.Column>
                        </Grid>
                      )}
                      {available == 'unavailable' && (
                        <Grid centered columns={3}>
                        <Grid.Column textAlign='center'>
                          <button className="not-available add-button">Je l'ai</button>
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                          <button className="not-available add-button">Je le veux</button>
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                          <button className="add-button" onClick={this.addGame('waiting')}>Je l'attends</button>
                        </Grid.Column>
                        </Grid>
                      )}
                    </div>
                  )}
                </div>
              </div>
          )}
            
          </Popup>
        )}
      </div>
    );
  }
}

AddGame.propTypes = {

};

export default AddGame;
