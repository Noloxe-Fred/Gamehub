import { connect } from 'react-redux';
import App from 'src/components/App';

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
 
});

// L'appel à connect nous renvoie une nouvelle fonction
const composantAEnrichir = connect(mapStateToProps, mapDispatchToProps);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
const AppContainer = composantAEnrichir(App);

export default AppContainer;
