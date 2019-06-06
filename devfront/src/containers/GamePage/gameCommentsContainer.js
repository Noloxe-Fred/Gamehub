import { connect } from 'react-redux';
import GameComments from 'src/components/GamePage/GameComments';

const mapStateToProps = state => ({
  datas: state.gamePageReducer.commentsDatas,
});

const mapDispatchToProps = dispatch => ({

});

// L'GameCommentsel à connect nous renvoie une nouvelle fonction
const composantAEnrichir = connect(mapStateToProps, mapDispatchToProps);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
const GameCommentsContainer = composantAEnrichir(GameComments);

export default GameCommentsContainer;
