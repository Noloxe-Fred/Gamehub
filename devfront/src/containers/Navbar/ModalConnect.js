import { connect } from 'react-redux';
import ModalConnect from 'src/components/Navbar/ModalConnect';

import {
  setInput, 
  connectUser,
  openModalConnect,
  closeModal,
  checkRemember,
} from 'src/store/reducers/navbarreducer';

const mapStateToProps = state => ({
  loadingConnect: state.navbarreducer.loadingConnect,
  openConnect: state.navbarreducer.openConnect,
  connectPseudo: state.navbarreducer.connectPseudo,
  connectPassword: state.navbarreducer.connectPassword,
  errorMessage: state.navbarreducer.errorConnect,
});

const mapDispatchToProps = dispatch => ({
  changeInput: (value, name) => {
    dispatch(setInput(value, name));
  },
  submitForm: () => {
    dispatch(connectUser());
  },
  openModalConnect: () => {
    dispatch(openModalConnect());
  },
  closeModal: () => {
    dispatch(closeModal());
  },
  checkRemember: () => {
    dispatch(checkRemember());
  },
});

// L'appel à connect nous renvoie une nouvelle fonction
const ModalConnectContainer = connect(mapStateToProps, mapDispatchToProps)(ModalConnect);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
// const ModalConnectContainer = composantAEnrichir;

export default ModalConnectContainer;
