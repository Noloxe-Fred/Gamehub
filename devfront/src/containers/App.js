import { connect } from 'react-redux';
import App from 'src/components/App';

import { connectSavedUser, disconnectUser } from 'src/store/reducers/navbarreducer';

const mapStateToProps = state => ({
  connect: state.navbarreducer.connect,
});

const mapDispatchToProps = dispatch => ({
  connectSavedUser: () => {
    dispatch(connectSavedUser());
  },
  disconnectUser: () => {
    dispatch(disconnectUser());
  },
});

// L'appel à connect nous renvoie une nouvelle fonction
const composantAEnrichir = connect(mapStateToProps, mapDispatchToProps);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
const AppContainer = composantAEnrichir(App);

export default AppContainer;
