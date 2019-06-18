import { connect } from 'react-redux';
import ModifyGame from 'src/Library/FullComponent/ModifyGame';

import { changeList, deleteDatas } from 'src/store/reducers/editGameReducer';
import { request } from 'src/store/reducers/userPagesReducer';

const mapStateToProps = state => ({
  receivedChangeList: state.editGameRed.receivedSubmit.changeList,
  receivedDelete: state.editGameRed.receivedSubmit.deletedGame,
  loadSubmitChange: state.editGameRed.loadSubmit.changeList,
  loadDeletedGame: state.editGameRed.loadSubmit.deletedGame,
});

const mapDispatchToProps = dispatch => ({
  changeList: (name, id) => {
    dispatch(changeList(name, id));
  },
  request: (name) => {
    dispatch(request(name));
  },
  deleteGame: (name, id) => {
    dispatch(deleteDatas(name, id));
  },
});

const composantAEnrichir = connect(mapStateToProps, mapDispatchToProps);

const ModifyGameContainer = composantAEnrichir(ModifyGame);

export default ModifyGameContainer;
