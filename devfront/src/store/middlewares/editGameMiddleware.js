import axios from 'axios';

import {
 REQ_US_GA_DA,
 ON_SUBMIT_SCORE,
 ON_SUBMIT_COMMENT,
 DELETE_DATAS,
 CHANGE_LIST,
 loadRequestDatas,
 recUserGamesDatas,
 loadSubmit,
 receivedSubmit,
 resetInput,
 reqUserGameDatas,
} from 'src/store/reducers/editGameReducer';


const editGameMiddleware = store => next => (action) => {

  const user = localStorage.getItem('user');

  const instance = axios.create({
    baseURL: 'http://api.gamehub.com/api/',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+user
    },
  });

  switch (action.type) {
    case REQ_US_GA_DA:
      store.dispatch(loadRequestDatas());

      const { gameId } = action;
      // requete axios avec token (localstorage)
      console.log('Requete Verif Edit Game', user)
      instance.get(`/game/${gameId}/edit`)
      .then((response) => {
        console.log('Request User Game Data', response.data);


        const { comment, score } = response.data.info;

        const statusId = response.data.info.state[0].id; // pour la suppression du jeu

        const typeSubScore = score ? 'edit' : 'new';
        const typeSubComment = comment != null ? 'edit' : 'new';

        const scoreValue = score != null ? score[0].value : 0;
        const commentTitle = comment != null ? comment[0].title : '';
        const commentContent = comment != null ? comment[0].content : '';
        const scoreId = score != null ? score[0].id : '';
        const commentId = comment != null ? comment[0].id : '';
        store.dispatch(recUserGamesDatas(scoreValue, commentTitle, commentContent, scoreId, commentId, typeSubScore, typeSubComment, statusId));
      })
      .catch((error) => {
        console.log('Verify Have error', error);
      });

      break;
    case ON_SUBMIT_SCORE:
      store.dispatch(loadSubmit('score'));

      if (store.getState().editGameRed.typeSubScore === 'new') {
        instance.post('/score/new', {
          game: {
            id: action.gameId,
          },
          value: store.getState().editGameRed.score,

        })
          .then((response) => {
            console.log(response.data);

            store.dispatch(reqUserGameDatas(action.gameId));
            store.dispatch(receivedSubmit('score', true));
          })
          .catch((error) => {
            console.log(error);
          });
      }

      if (store.getState().editGameRed.typeSubScore === 'edit') {
        instance.put('/score/edit', {
          game: {
            id: action.gameId,
          },
          id: store.getState().editGameRed.scoreId,
          value: store.getState().editGameRed.score,
        })
          .then((response) => {
            console.log(response.data);

            store.dispatch(receivedSubmit('score', true));
          })
          .catch((error) => {
            console.log(error);
          });
      }
      break;

    case ON_SUBMIT_COMMENT:
      store.dispatch(loadSubmit('comment'));

      if (store.getState().editGameRed.typeSubComment === 'new') {
        instance.post('/comment/new', {
          game: {
            id: action.gameId,
          },
          title: store.getState().editGameRed.title,
          content: store.getState().editGameRed.content,
        })
          .then((response) => {
            console.log(response.data);

            store.dispatch(reqUserGameDatas(action.gameId));
            store.dispatch(receivedSubmit('comment', true));
          })
          .catch((error) => {
            console.log(error);
          });
      }

      if (store.getState().editGameRed.typeSubComment === 'edit') {
        instance.put('/comment/edit', {
          game: {
            id: action.gameId,
          },
          id: store.getState().editGameRed.commentId,
          title: store.getState().editGameRed.title,
          content: store.getState().editGameRed.content,
        })
          .then((response) => {
            console.log(response.data);

            store.dispatch(receivedSubmit('comment', true));
          })
          .catch((error) => {
            console.log(error);
          });
      }
      break;
    case DELETE_DATAS:
      console.log('Statusid',store.getState().editGameRed.statusId)

      // const id = 
      if (action.name === 'game') {
        instance.delete('/game/state/delete', {
          data: {
            id: store.getState().editGameRed.statusId,
          },
        })
          .then((response) => {
            console.log(response.data);
            store.dispatch(receivedSubmit('deletedGame', true));
          })
          .catch((error) => {
            console.log(error);
          });
      }
      if (action.name === 'want&waiting') {
        console.log('Delete from full list', action.id)
        instance.delete('/game/state/delete', {
          data: {
            id: action.id,
          },
        })
          .then((response) => {
            console.log(response.data);
            store.dispatch(receivedSubmit('deletedGame', true));
          })
          .catch((error) => {
            console.log(error);
          });
      }
      if (action.name === 'comment') {
        instance.delete('/comment/delete', {
          data: {
            id: store.getState().editGameRed.commentId,
          },
        })
          .then((response) => {
            console.log(response.data);
            store.dispatch(resetInput());
            store.dispatch(receivedSubmit('deletedComment', true));
          })
          .catch((error) => {
            console.log(error);
          });
      }
      break;
    case CHANGE_LIST:
      store.dispatch(loadSubmit('changeList', true));

      instance.put('/game/state/edit', {
        id: action.id,
        status: action.nameList,
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(receivedSubmit('changeList', true));
        })
        .catch((error) => {
          console.log(error);
        });

      break;
    default:
      next(action);
  }
};

export default editGameMiddleware;
