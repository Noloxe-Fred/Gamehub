import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Icon, Header, Popup, Grid, Loader, Button } from 'semantic-ui-react';

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

    return (
      <div>
        {loadVerify && <Loader active inline='centered' />}
        {alreadyHave && <i class="fas fa-gamepad" />}
        {!alreadyHave && (
          <Popup trigger={<i class="fas fa-plus-circle" />} flowing hoverable>
            <div>
              <Header>Choisissez une liste{receivedSubmit && <p className="confirm-message">Le jeu à bien été ajouté</p>}</Header>
              <div>
                {loadSubmit && <Loader active inline='centered' />}
                {(!loadVerify && !loadSubmit) && (
                  <div>
                    {available && (
                      <Grid centered columns={3}>
                      <Grid.Column textAlign='center'>
                        <Button basic color='green' onClick={this.addGame('have')}>Je l'ai</Button>
                      </Grid.Column>
                      <Grid.Column textAlign='center'>
                        <Button basic color='orange' onClick={this.addGame('want')}>Je le veux</Button>
                      </Grid.Column>
                      <Grid.Column textAlign='center'>
                        <Button basic className="not-available">Je l'attends</Button>
                      </Grid.Column>
                      </Grid>
                    )}
                    {!available && (
                      <Grid centered columns={3}>
                      <Grid.Column textAlign='center'>
                        <Button basic className="not-available">Je l'ai</Button>
                      </Grid.Column>
                      <Grid.Column textAlign='center'>
                        <Button basic className="not-available">Je le veux</Button>
                      </Grid.Column>
                      <Grid.Column textAlign='center'>
                        <Button basic color='red' onClick={this.addGame('waiting')}>Je l'attends</Button>
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
