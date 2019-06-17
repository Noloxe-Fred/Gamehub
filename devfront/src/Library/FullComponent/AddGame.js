import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Header, Popup, Grid, Loader } from 'semantic-ui-react';

import './addgame.scss';
import ModalConnect from 'src/containers/Navbar/ModalConnect';

class AddGame extends Component {

  handleVerify = gameId => () => {
    this.props.verifyHave(gameId);
  }

  addGame = list => () => {
    const { submitForm, gameId } = this.props;
    console.log(gameId, list);
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
      gameId,
    } = this.props;

    const stylePopup = {
      opacity: 0.8,
      textAlign: 'center',
    };

    return (
      <div className="plus">
          <Popup trigger={<i className="fas fa-plus-circle" />} flowing hoverable inverted onOpen={this.handleVerify(gameId)} style={stylePopup}>
            {!connect && <div>Veuillez {<ModalConnect text="vous connecter" />} pour ajouter ce jeu à votre collection</div>} 
            {(connect && loadVerify) && <Loader active size="tiny" />}
            {(connect && !loadVerify) && (
              <div>
                {alreadyHave && <p>Ce jeu est déjà dans votre JV'thèque</p>}
                {!alreadyHave && (
                  <div>
                    <Header>Choisissez une liste{receivedSubmit && <div className="confirm-message">Le jeu à bien été ajouté</div>}</Header>
                    <div>
                      {loadSubmit && <Loader active inline='centered' size="tiny" />}
                      {receivedSubmit && <p>Le jeu a bien été ajouté à votre JV'thèque</p>}
                      {(!loadVerify && !loadSubmit && !receivedSubmit) && (
                        <div>
                          {available == 'available' && (
                            <Grid centered columns={2}>
                            <Grid.Column textAlign='center'>
                              <button className="add-button" onClick={this.addGame('have')}>Je l'ai</button>
                            </Grid.Column>
                            <Grid.Column textAlign='center'>
                              <button className="add-button" onClick={this.addGame('want')}>Je le veux</button>
                            </Grid.Column>
                            </Grid>
                          )}
                          {available == 'unavailable' && (
                            <Grid centered columns={1}>
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
            </div>)}
          </Popup>
      </div>
      // <div className="plus">
      //   {alreadyHave && <i class="fas fa-gamepad" />}
      //   {!alreadyHave && !loadVerify && (
      //     <Popup trigger={<i className="fas fa-plus-circle" />} flowing hoverable inverted onOpen={this.handleVerify(gameId)} style={stylePopup}>
      //       {!connect && <div>Veuillez {<ModalConnect text="vous connecter" />} pour ajouter ce jeu à votre collection</div>} 
      //       {loadVerify && <Loader active />}
      //       {connect && !loadVerify && (
      //       <div>
      //         <Header>Choisissez une liste{receivedSubmit && <div className="confirm-message">Le jeu à bien été ajouté</div>}</Header>
      //         <div>
      //           {loadSubmit && <Loader active inline='centered' />}
      //           {(!loadVerify && !loadSubmit) && (
      //             <div>
      //               {available == 'available' && (
      //                 <Grid centered columns={2}>
      //                 <Grid.Column textAlign='center'>
      //                   <button className="add-button" onClick={this.addGame('have')}>Je l'ai</button>
      //                 </Grid.Column>
      //                 <Grid.Column textAlign='center'>
      //                   <button className="add-button" onClick={this.addGame('want')}>Je le veux</button>
      //                 </Grid.Column>
      //                 </Grid>
      //               )}
      //               {available == 'unavailable' && (
      //                 <Grid centered columns={1}>
      //                 <Grid.Column textAlign='center'>
      //                   <button className="add-button" onClick={this.addGame('waiting')}>Je l'attends</button>
      //                 </Grid.Column>
      //                 </Grid>
      //               )}
      //             </div>
      //           )}
      //         </div>
      //       </div>
      //       )}
      //     </Popup>
      //   )}
      // </div>
    );
  }
}

AddGame.propTypes = {

};

export default AddGame;
