import axios from 'axios';

import {
  VERIFY_HAVE,
  SUBMIT,
  checkedVerify,
  loadVerify,
  receivedSubmit,
} from 'src/store/reducers/addGameReducer';

const addGameMiddleware = store => next => (action) => {
  switch (action.type) {
    case VERIFY_HAVE:
      store.dispatch(loadVerify());
      const { gameId } = action;
      const user = localStorage.getItem('user');
      // requete axios avec token (localstorage)
      axios.get('http://api.gamehub.com/api/user/game/verify', {
        headers: {
          'Content-Type': 'application/json',
        },
        game: {
          id: gameId,
        },
      })
        .then((response) => {
          console.log('Reponse verify have', response);
          const { available, status, title, content, score } = response.data;
          const alreadyHave = status === '' ? false : status;

          store.dispatch(checkedVerify(alreadyHave, available, title, content, score));
        })
        .catch((error) => {
          console.log('Erreur Connexion', error);
          store.dispatch(errorConnect('Erreur Connexion'));
        });
      break;
    case SUBMIT:
      store.dispatch(loadSubmit());
      const game = action.gameId;
      const {wichList, score, commentTitle, commentContent } = store.getState().addGameReducer;

      // 1ere requete: ajout du jeu en bibliotheque
      axios.post('http://api.gamehub.com/api/game/state/add', {
        headers: {
          'Content-Type': 'application/json',
        },
        user,
        game: {
          id: game,
        },
        status: wichList,
      })
        .then((response) => {
          console.log('Reponse submit add', response);
          
          // 2eme requete: ajout du commentaire, une fois que le jeu est bien ajouté en bibliotheque
          axios.post('http://api.gamehub.com/api/comment/new', {
            headers: {
              'Content-Type': 'application/json',
            },
            'game':{
              'id': game,
            },
            'title': commentTitle,
            'content': commentContent,
          })
            .then((response) => {
              console.log('Reponse submit add', response);
              
              // 3eme requete: ajout du score, une fois le commentaire bien ajouté, puis envoi de l'info au state
              axios.post('http://api.gamehub.com/api/score/new', {
                headers: {
                  'Content-Type': 'application/json',
                },
                'game':{
                  'id': game,
                },
                'value': score,
              })
                .then((response) => {
                  console.log('Reponse submit add', response);
        
                  store.dispatch(receivedSubmit(true));
                })
                .catch((error) => {
                  console.log('Erreur Ajout Score', error);
                  store.dispatch(receivedSubmit(false));
                });
            })
            .catch((error) => {
              console.log('Erreur Ajout Commentaire', error);
              store.dispatch(receivedSubmit(false));
            });
        })
        .catch((error) => {
          console.log('Erreur Ajout Jeu', error);
          store.dispatch(receivedSubmit(false));
        });

      break;
    default:
      next(action);
  }
};

export default addGameMiddleware;
