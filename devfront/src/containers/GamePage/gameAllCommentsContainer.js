import { connect } from 'react-redux';
import GameAllComments from 'src/components/GamePage/GameAllComments';

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({

});

// L'GameCommentsel à connect nous renvoie une nouvelle fonction
const composantAEnrichir = connect(mapStateToProps, mapDispatchToProps);
// Cette nouvelle fonction attend qu'on lui donne un composant à enrichir
const GameAllCommentsContainer = composantAEnrichir(GameAllComments);

export default GameAllCommentsContainer;
