import { connect } from 'react-redux';
import ModalConnect from 'src/components/Navbar/ModalConnect';

import {
  setInput, 
  connectUser,
  openModalConnect,
  closeModal,
} from 'src/store/reducers/navbarreducer';

const mapStateToProps = state => {
  return {
    loadingConnect: state.navbarreducer.loadingConnect,
    openConnect: state.navbarreducer.openConnect,
    connectPseudo: state.navbarreducer.connectPseudo,
    connectPassword: state.navbarreducer.connectPassword,
  }
};

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
  }
});

// L'appel à connect nous renvoie une nouvelle fonction
const ModalConnectContainer = connect(mapStateToProps, mapDispatchToProps)(ModalConnect);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
// const ModalConnectContainer = composantAEnrichir;

export default ModalConnectContainer;
