import { connect } from 'react-redux';
import EditGame from 'src/Library/FullComponent/EditGame';

import { reqUserGameDatas, setInput, deleteDatas, onSubmitScore, onSubmitComment } from 'src/store/reducers/editGameReducer';

const mapStateToProps = state => ({
  actualScore: state.editGameRed.score,
  commentTitle: state.editGameRed.title,
  commentContent: state.editGameRed.content,
  loadSubmit: state.editGameRed.loadSubmit,
  loadReqDat: state.editGameRed.loadRequestDatas,
  scoreId: state.editGameRed.scoreId,
  commentId: state.editGameRed.commentId,
  receivedSubmit: state.editGameRed.receivedSubmit,
});

const mapDispatchToProps = dispatch => ({
  reqUserGameDatas: (gameId) => {
    dispatch(reqUserGameDatas(gameId));
  },
  setInput: (name, value) => {
    dispatch(setInput(name, value));
  },
  onSubmitScore: (gameId) => {
    dispatch(onSubmitScore(gameId));
  },
  onSubmitComment: (title, comment, gameId) => {
    dispatch(onSubmitComment(title, comment, gameId));
  },
  deleteDatas: (type, id) => {
    dispatch(deleteDatas(type, id));
  },
});

const composantAEnrichir = connect(mapStateToProps, mapDispatchToProps);

const EditGameContainer = composantAEnrichir(EditGame);

export default EditGameContainer;
