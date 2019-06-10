import { connect } from 'react-redux';
import AddGame from 'src/Library/FullComponent/AddGame';

import { verifyHave, selectWichList, submitForm } from 'src/store/reducers/addGameReducer';

const mapStateToProps = state => ({
  loadVerify: state.addGameReducer.loadVerifyHave,
  alreadyHave: state.addGameReducer.alreadyhave,
  available: state.addGameReducer.available,
  loadSubmit: state.addGameReducer.loadSubmit,
  openPopover: state.addGameReducer.openPopover,
  receivedSubmit: state.addGameReducer.receivedSubmit,
  messageNotCheck: state.addGameReducer.messageNotCheck,
});

const mapDispatchToProps = dispatch => ({
  verifyHave: (id) => {
    dispatch(verifyHave(id));
  },
  selectWichList: (nameList) => {
    dispatch(selectWichList(nameList));
  },
  submitForm: () => {
    dispatch(submitForm());
  },
});

// L'appel à connect nous renvoie une nouvelle fonction
const composantAEnrichir = connect(mapStateToProps, mapDispatchToProps);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
const AddGameContainer = composantAEnrichir(AddGame);

export default AddGameContainer;
