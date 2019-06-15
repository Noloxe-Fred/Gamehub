import { connect } from 'react-redux';
import EditGame from 'src/Library/FullComponent/EditGame';

import { reqUserGameDatas, setInput, deleteGame } from 'src/store/reducers/editGameReducer';

const mapStateToProps = state => ({
  actualScore: state.editGameRed.score,
  commentTitle: state.editGameRed.title,
  commentContent: state.editGameRed.content,
  typeSubScore: state.editGameRed.typeSubScore,
  typeSubComment: state.editGameRed.typeSubComment,
  loadSubmitScore: state.editGameRed.loadSubmitScore,
  loadSubmitComment: state.editGameRed.loadSubmitComment,
  loadReqDat: state.editGameRed.loadRequestDatas,
  scoreId: state.editGameRed.scoreId,
  commentId: state.editGameRed.commentId,
});

const mapDispatchToProps = dispatch => ({
  reqUserGameDatas: (gameId) => {
    dispatch(reqUserGameDatas(gameId));
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
