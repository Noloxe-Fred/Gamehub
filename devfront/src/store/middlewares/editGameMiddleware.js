import axios from 'axios';

import {
 REQ_US_GA_DA,
 ON_SUBMIT_SCORE,
 ON_SUBMIT_COMMENT,
 DELETE_DATAS,
 loadRequestDatas,
 recUserGamesDatas,
 loadSubmit,
 receivedSubmit,
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

        const typeSubScore = score != null ? 'edit' : 'new';
        const typeSubComment = comment != null ? 'edit' : 'new';

        const scoreValue = score != null ? score.value : 0;
        const commentTitle = comment != null ? comment.title : '';
        const commentContent = comment != null ? comment.Content : '';
        const scoreId = score != null ? score.id : '';
        const commentId = comment != null ? comment.id : '';
        console.log('Req Us Da Ga', typeSubScore)
        store.dispatch(recUserGamesDatas(scoreValue, commentTitle, commentContent, scoreId, commentId, typeSubScore, typeSubComment));
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
            store.dispatch(receivedSubmit('score', true));
          })
          .catch((error) => {
            console.log(error);
          });
      }

      if (store.getState().editGameRed.typeSubScore === 'edit') {
        instance.put('/score/edit', {
          id: action.gameId,
          score: {
            id: store.getState().editGameRed.scoreId,
            value: store.getState().editGameRed.score,
          },
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
          id: action.gameId,
          comment: {
            title: store.getState().editGameRed.title,
            content: store.getState().editGameRed.content,
          },
        })
          .then((response) => {
            console.log(response.data);
            store.dispatch(receivedSubmit('comment', true));
          })
          .catch((error) => {
            console.log(error);
          });
      }

      if (store.getState().editGameRed.typeSubComment === 'edit') {
        instance.put('/comment/edit', {
          id: action.gameId,
          comment: {
            id: store.getState().editGameRed.commentId,
            title: store.getState().editGameRed.title,
            content: store.getState().editGameRed.content,
          },
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
      if (action.type === 'game') {
        instance.delete('/game/state/delete', {
          game: {
            id: action.id,
            status: store.getState().editGameRed.status,
            // statusId: store.getState().editGameRed.statusId,
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
      if (action.type === 'comment') {
        instance.delete('/comment/delete', {
          game: {
            id: action.id,
          },
          comment: {
            id: store.getState().editGameRed.commentId,
          },
        })
          .then((response) => {
            console.log(response.data);
            store.dispatch(receivedSubmit('deletedComment', true));
          })
          .catch((error) => {
            console.log(error);
          });
      }
      break;
    default:
      next(action);
  }
};

export default editGameMiddleware;
