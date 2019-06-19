// import oneGame from 'src/data/oneGame';
import axios from 'axios';

// Import de Request_Game depuis GamepageReducer
import { REQUEST_GAME, REQUEST_COMMENT, receivedGame, receivedComments, loadGame, loadComment, errorRequest } from 'src/store/reducers/gamePageReducer';

// on fait un switch (permet une ou plusieurs conditions comme les IF,else if ect )
const gamePageMiddleware = store => next => (action) => {
  switch (action.type) {
    case REQUEST_GAME:
      store.dispatch(loadGame());
      // requete axios en attente!
      const id = action.gameId;

      const instance = axios.create({
        baseURL: 'http://api.gamehub.com/api/',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      instance.get(`/comment/last`, {
        params: {
          game_id: action.gameId,
        },
      })
      .then((response) => {
          // console.log('reponse ap commentaire', response);
          const comments = response.data;

          axios.get(`http://api.gamehub.com/api/game/${id}`, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((response) => {
              // console.log('Request One Game ok', response);
              const game = response.data;
              const date = new Date(response.data.releasedAt);
    
              console.log('date', date.toLocaleDateString())
              const gameDatas = {
                comments: comments,
                id: game.id,
                name: game.name,
                cover: game.cover,
                desc: game.description,
                score: game.score,
                developer: game.developers,
                editor: game.editors,
                released: date.toLocaleDateString(),
                website: game.website,
                categories: game.categories,
              };
              const background = game.illustration;
              store.dispatch(receivedGame(gameDatas, background));
            })
            .catch((error) => {
              console.log('request one game', error);
              store.dispatch(errorRequest());
            });    
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
    case REQUEST_COMMENT:
      // store.dispatch(loadComment());

      // const request = axios.get(`http://api.gamehub.com/api/comment/last`, {
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   params: {
      //     game_id: action.gameId,
      //   },
      // })
      // .then((response) => {
      //     console.log('reponse ap commentaire', response);
      //     const comments = response.data;
      //     store.dispatch(receivedComments(comments));
      //   })
      //   .catch((error) => {
      //     console.log('request one game', error);
      //     store.dispatch(errorRequest());
      //   });
      break;
    default:
      next(action);
  }
};

export default gamePageMiddleware;
