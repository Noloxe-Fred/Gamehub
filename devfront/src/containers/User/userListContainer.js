import { connect } from 'react-redux';
import List from 'src/components/User/Collection';

import {
  request,
} from 'src/store/reducers/userPagesReducer';

const mapStateToProps = state => ({
  listAdd: state.userPagesReducer.listAdd ,
  listWant: state.userPagesReducer.listWant ,
  listWish: state.userPagesReducer.listWish ,
  loadAdd: state.userPagesReducer.loadAdd ,
  loadWant: state.userPagesReducer.loadWant ,
  loadWish: state.userPagesReducer.loadWish ,
});

const mapDispatchToProps = dispatch => ({
  request: () => {
    dispatch(request());
  },
});

// L'appel à connect nous renvoie une nouvelle fonction
const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
// const NavbarContainer = composantAEnrichir;

export default NavbarContainer;
