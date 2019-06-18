import { connect } from 'react-redux';
import GameComments from 'src/components/GamePage/GameComments';

const mapStateToProps = state => {
  console.log(state.gamePageReducer.commentsDatas);
  return {
  datas: state.gamePageReducer.gameDatas,
  loadingGame: state.gamePageReducer.loadingGaming,
}};

const mapDispatchToProps = dispatch => ({

});

// L'GameCommentsel à connect nous renvoie une nouvelle fonction
const composantAEnrichir = connect(mapStateToProps, mapDispatchToProps);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
const GameCommentsContainer = composantAEnrichir(GameComments);

export default GameCommentsContainer;
