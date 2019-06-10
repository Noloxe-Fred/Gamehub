import { connect } from 'react-redux';
import AddGame from 'src/Library/FullComponent/AddGame';

import {  } from 'src/store/reducers/addGameReducer';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

// L'appel à connect nous renvoie une nouvelle fonction
const composantAEnrichir = connect(mapStateToProps, mapDispatchToProps);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
const AddGameContainer = composantAEnrichir(AddGame);

export default AddGameContainer;
