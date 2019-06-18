import { connect } from 'react-redux';
import App from 'src/components/App';


import { connectSavedUser, disconnectUser } from 'src/store/reducers/navbarreducer';
import { requestCategories } from 'src/store/reducers/advancedSearchPageReducer';

const mapStateToProps = state => ({
  connect: state.navbarreducer.connect,
  redirectSearch: state.navbarreducer.redirectSearch,
  displayedProfile: state.userPagesReducer.displayedProfile,
});

const mapDispatchToProps = dispatch => ({
  connectSavedUser: () => {
    dispatch(connectSavedUser());
  },
  disconnectUser: () => {
    dispatch(disconnectUser());
  },
  requestCategories: () => {
    dispatch(requestCategories());
  },
});

// L'appel à connect nous renvoie une nouvelle fonction
const composantAEnrichir = connect(mapStateToProps, mapDispatchToProps);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
const AppContainer = composantAEnrichir(App);

export default AppContainer;
