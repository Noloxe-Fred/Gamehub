import { connect } from 'react-redux';
import ModalSubscribe from 'src/components/Navbar/ModalSubscribe';

import {
  setInput, 
  subscribeUser,
  closeModal,
} from 'src/store/reducers/navbarreducer';

const mapStateToProps = state => ({
  subpseudo: state.navbarreducer.subpseudo,
  subemail: state.navbarreducer.subemail,
  subpassword: state.navbarreducer.subpassword,
  subconfirmpassword: state.navbarreducer.subconfirmpassword,
  confirmSubscribe: state.navbarreducer.confirmSubscribe,
});

const mapDispatchToProps = dispatch => ({
  changeInput: (value, name) => {
    dispatch(setInput(value, name));
  },
  submitForm: () => {
    dispatch(subscribeUser());
  },
  closeModal: () => {
    dispatch(closeModal());
  },
});

// L'appel à connect nous renvoie une nouvelle fonction
const ModalSubscribeContainer = connect(mapStateToProps, mapDispatchToProps)(ModalSubscribe);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
// const ModalConnectContainer = composantAEnrichir;

export default ModalSubscribeContainer;
