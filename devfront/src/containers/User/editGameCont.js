import { connect } from 'react-redux';
import EditGame from 'src/Library/FullComponent/EditGame';

import { reqUserGameData, setInput deleteGame } from 'src/store/reducers/editGameReducer';

const mapStateToProps = state => ({
  actualScore: state.editGameRed.actualScore,
  commentTitle: state.editGameRed.commentTitle,
  commentContent: state.editGameRed.commentContent,
});

const mapDispatchToProps = dispatch => ({
  reqUserGameData: (gameId) => {
    dispatch(reqUserGameData(gameId));
  },
  setInput: (name, value) => {
    dispatch(setInput(name, value));
  },
  // setTitle: (title) => {
  //   dispatch(setTitle(title));
  // },
  // setContent: (content) => {
  //   dispatch(setContent(content));
  // },
  deleteGame: (id) => {
    dispatch(deleteGame(id));
  },
});


const composantAEnrichir = connect(mapStateToProps, mapDispatchToProps);

const EditGameContainer = composantAEnrichir(EditGame);

export default EditGameContainer;
