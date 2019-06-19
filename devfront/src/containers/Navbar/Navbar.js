import { connect } from 'react-redux';
import Navbar from 'src/components/Navbar/';

import {
  disconnectUser,
  cancelRedirect,
  openModalConnect,
  openModSub,
} from 'src/store/reducers/navbarreducer';

import {
  displayProfile,
} from 'src/store/reducers/userPagesReducer'; 

const mapStateToProps = state => ({
  connect: state.navbarreducer.connect,
  displayInput: state.homeReducer.displayInput,
  displayedProfile: state.userPagesReducer.displayedProfile,
  userProfile: state.userPagesReducer.userProfile,
  loadProfile: state.userPagesReducer.userProfile,
});

const mapDispatchToProps = dispatch => ({
  disconnectUser: () => {
    dispatch(disconnectUser());
  },
  displayProfile: () => {
    dispatch(displayProfile());
  },
  openModalConnect: () => {
    dispatch(openModalConnect());
  },
  openModSub: () => {
    dispatch(openModSub());
  },
});

// L'appel à connect nous renvoie une nouvelle fonction
const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
// const NavbarContainer = composantAEnrichir;

export default NavbarContainer;
