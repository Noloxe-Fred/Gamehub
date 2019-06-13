import { connect } from 'react-redux';
import Navbar from 'src/components/Navbar/';

import {
  disconnectUser,
  cancelRedirect,
} from 'src/store/reducers/navbarreducer';

const mapStateToProps = state => ({
  connect: state.navbarreducer.connect,
  displayInput: state.homeReducer.displayInput,
});

const mapDispatchToProps = dispatch => ({
  disconnectUser: () => {
    dispatch(disconnectUser());
  },
});

// L'appel à connect nous renvoie une nouvelle fonction
const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
// const NavbarContainer = composantAEnrichir;

export default NavbarContainer;
