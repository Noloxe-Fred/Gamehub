// import oneGame from 'src/data/oneGame';
import axios from 'axios';

// Import de Request_Game depuis GamepageReducer
import { REQUEST_GAME, receivedGame, loadGame, errorRequest } from 'src/store/reducers/gamePageReducer';

// on fait un switch (permet une ou plusieurs conditions comme les IF,else if ect )
const gamePageMiddleware = store => next => (action) => {
  switch (action.type) {
    case REQUEST_GAME:
      store.dispatch(loadGame());
      // requete axios en attente!
      const id = action.gameId;
      axios.post('http://api.gamehub.com/api/game/show', {
        headers: {
          'Content-Type': 'application/json',
        },
        id,
      })
        .then((response) => {
          console.log(response.data);
          const game = response.data;
          const gameDatas = {
            name: game.name,
            cover: game.cover,
            desc: game.description,
            score: game.score,
            developer: game.developer,
            editor: game.editor,
            released: game.released,
            website: game.website,
            categories: game.categories,
          };
          const commentsDatas = game.comments;
          const background = game.illustration;
    
          store.dispatch(receivedGame(gameDatas, commentsDatas, background));
        })
        .catch((error) => {
          console.log('request one game', error);
          store.dispatch(errorRequest());
        });
      // // Pour requete du jeu: id du jeu = action.gameId
      // // scinder datas
      // const gameDatas = {
      //   name: oneGame.name,
      //   cover: oneGame.cover, 
      //   desc: oneGame.description, 
      //   score: oneGame.score, 
      //   developer: oneGame.developer, 
      //   editor: oneGame.editor, 
      //   released: oneGame.released, 
      //   website: oneGame.website, 
      //   categories: oneGame.categories
      // };
      // const commentsDatas = oneGame.comments;
      // const background = oneGame.illustration;

      // store.dispatch(receivedGame(gameDatas, commentsDatas, background));
      break;
    default:
      next(action);
  }
};

export default gamePageMiddleware;
