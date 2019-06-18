import { connect } from 'react-redux';
import AddGame from 'src/Library/FullComponent/AddGame';

import { verifyHave, submitForm } from 'src/store/reducers/addGameReducer';

const mapStateToProps = state => ({
  loadVerify: state.addGameReducer.loadVerifyHave,
  alreadyHave: state.addGameReducer.alreadyHave,
  available: state.addGameReducer.available,
  loadSubmit: state.addGameReducer.loadSubmit,
  receivedSubmit: state.addGameReducer.receivedSubmit,
  addGameError: state.addGameReducer.addGameError,
  connect: state.navbarreducer.connect,
});

const mapDispatchToProps = dispatch => ({
  verifyHave: (id) => {
    dispatch(verifyHave(id));
  },
  submitForm: (gameId, type) => {
    dispatch(submitForm(gameId, type));
  },
});

// L'appel à connect nous renvoie une nouvelle fonction
const composantAEnrichir = connect(mapStateToProps, mapDispatchToProps);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
const AddGameContainer = composantAEnrichir(AddGame);

export default AddGameContainer;
