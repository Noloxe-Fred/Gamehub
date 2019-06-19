import { connect } from 'react-redux';
import EditGame from 'src/Library/FullComponent/EditGame';

import { reqUserGameDatas, setInput, deleteDatas, onSubmitScore, onSubmitComment, reset, closeModal, openModal } from 'src/store/reducers/editGameReducer';

import { request } from 'src/store/reducers/userPagesReducer';

const mapStateToProps = state => ({
  actualScore: state.editGameRed.score,
  commentTitle: state.editGameRed.title,
  commentContent: state.editGameRed.content,
  loadSubmit: state.editGameRed.loadSubmit,
  loadReqDat: state.editGameRed.loadRequestDatas,
  scoreId: state.editGameRed.scoreId,
  commentId: state.editGameRed.commentId,
  receivedSubmit: state.editGameRed.receivedSubmit,
  openModal: state.editGameRed.openModal,
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
  onSubmitComment: (gameId) => {
    dispatch(onSubmitComment(gameId));
  },
  deleteDatas: (name, id) => {
    dispatch(deleteDatas(name, id));
  },
  reset: () => {
    dispatch(reset());
  },
  closeModal: () => {
    dispatch(closeModal());
  },
  openModalAction: () => {
    dispatch(openModal());
  },
  request: () => {
    dispatch(request('have'));
  },
});

const composantAEnrichir = connect(mapStateToProps, mapDispatchToProps);

const EditGameContainer = composantAEnrichir(EditGame);

export default EditGameContainer;
