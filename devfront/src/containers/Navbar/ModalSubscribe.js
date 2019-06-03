import { connect } from 'react-redux';
import ModalSubscribe from 'src/components/Navbar/ModalSubscribe';

import {
  setInput, 
  connectUser,
} from 'src/store/reducers/navbarreducer';

const mapStateToProps = state => ({
  subfirstname: state.subfirstname,
  sublastname: state.sublastname,
  subemail: state.subemail,
  subpassword: state.subpassword,
  subconfirmpassword: state.subconfirmpassword,
});

const mapDispatchToProps = dispatch => ({
  changeInput: (value, name) => {
    dispatch(setInput(value, name));
  },
  submitForm: () => {
    dispatch(connectUser());
  },
});

// L'appel à connect nous renvoie une nouvelle fonction
const ModalSubscribeContainer = connect(mapStateToProps, mapDispatchToProps)(ModalSubscribe);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
// const ModalConnectContainer = composantAEnrichir;

export default ModalSubscribeContainer;
