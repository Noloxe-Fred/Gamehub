// 1. on importe GamePage from 'src/components/App
import { connect } from 'react-redux';
import GamePage from 'src/components/GamePage';

import { requestGame, requestComment, resetError } from 'src/store/reducers/gamePageReducer';
// 2. On parametre les const pour qu'elle prenne les infos du state (loading ) du gamePageReducer
const mapStateToProps = state => ({
  loadingGame: state.gamePageReducer.loadingGaming,
  background: state.gamePageReducer.background,
  error: state.gamePageReducer.errorRequest,
});

// 3. Au montage du composant on transmet une information / actions au composant
// qui se chargera de lancer le requestGame du reducer
const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps.match.params;

  return {
    requestGame: () => {
      dispatch(requestGame(id));
    },
    requestComment: () => {
      dispatch(requestComment(id));
    },
    resetError: () => {
      dispatch(resetError());
    },
  };
};

// 4 . A NE PAS TOUCHER ^^ mais a RENOMMER par containers ! 
// L'appel à connect nous renvoie une nouvelle fonction
const composantAEnrichir = connect(mapStateToProps, mapDispatchToProps);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
const GamePageContainer = composantAEnrichir(GamePage);

export default GamePageContainer;
