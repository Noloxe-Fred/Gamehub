import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Icon, Header, Popup, Grid, Loader } from 'semantic-ui-react';

import './addgame.scss';
import { verifyHave } from '../../store/reducers/addGameReducer';


class AddGame extends Component {

  componentDidMount() {
    verifyHave(this.props.gameId);
  }

  addGame = (list) => () => {
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
    } = this.props;

    const stylePopup = {
      opacity: 0.8,
      textAlign: 'center',
    };

    return (
      <div className="plus">
        {loadVerify && <Loader active inline='centered' />}
        {alreadyHave && <i class="fas fa-gamepad" />}
        {!alreadyHave && (
          <Popup trigger={<i class="fas fa-plus-circle" />} flowing hoverable inverted style={stylePopup}>
            <div>
              <Header>Choisissez une liste{receivedSubmit && <p className="confirm-message">Le jeu à bien été ajouté</p>}</Header>
              <div>
                {loadSubmit && <Loader active inline='centered' />}
                {(!loadVerify && !loadSubmit) && (
                  <div>
                    {available && (
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
                    {!available && (
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
          </Popup>
        )}
      </div>
    );
  }
}

AddGame.propTypes = {

};

export default AddGame;
