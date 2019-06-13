import axios from 'axios';

import {
  CONNECT,
  SUBSCRIBE,
  CONNECT_SAVED_USER,
  DISCONNECT,
  SUBMIT_SEARCH,
  receivedSubscribe,
  receivedConnect,
  loadingConnection,
  receivedDisconnect,
  errorConnect,
  receivedSubmit,
  loadSearch,
} from 'src/store/reducers/navbarreducer';

const navbarMiddleware = store => next => (action) => {
  switch (action.type) {
    case CONNECT_SAVED_USER:
      store.dispatch(receivedConnect());
      break;

    case CONNECT:
      store.dispatch(loadingConnection());
      // en attente de requete axios
      const email = store.getState().navbarreducer.connectPseudo;
      const password = store.getState().navbarreducer.connectPassword;

      console.log('Connexion', email, password);
      axios.post('http://api.gamehub.com/api/signin', {
        headers: {
          'Content-Type': 'application/json',
        },
        username: email,
        password,
      })
        .then((response) => {
          console.log('Reponse Connexion', response);

          const remember = store.getState().navbarreducer.checkRemember;
          localStorage.setItem('connect', true);
          localStorage.setItem('remember', remember); // if case cochée!
          localStorage.setItem('user', response.data.token);

          store.dispatch(receivedConnect());
        })
        .catch((error) => {
          console.log('Erreur Connexion', error);
          store.dispatch(errorConnect('Erreur Connexion'));
        });
      break;

    case SUBSCRIBE:
      // requete axios: if subscribe ok =
      const subemail = store.getState().navbarreducer.subemail;
      const subpseudo = store.getState().navbarreducer.subpseudo;
      const subpassword = store.getState().navbarreducer.subpassword;
      const subconfirmpassword = store.getState().navbarreducer.subconfirmpassword;

      axios.post('http://api.gamehub.com/api/signup', {
        headers: {
          'Content-Type': 'application/json',
        },
        email: subemail,
        pseudo: subpseudo,
        password: subpassword,
        confirmpassword: subconfirmpassword,
      })
        .then((response) => {
          console.log('Reponse Subscribe', response.data);
          const { email } = response.data;
          if (response.data) {
            store.dispatch(receivedSubscribe('subscribeOk', email));
          }
          else {
            store.dispatch(receivedSubscribe('subscribeError', ''));
          }
        })
        .catch((error) => {
          console.log(error);
        });

      // if subscribe not ok = erreur
      // store.dispatch(receivedSubscribe('subscribeError'));

      // il user already exist:
      // store.dispatch(receivedSubscribe('subscribeAlreadyExist'));

      // il password not conforme:
      // store.dispatch(receivedSubscribe('subscribePassWordNotConforme'));

      // il password not match:
      // store.dispatch(receivedSubscribe('subscribePassNotPareil'));
      break;
    case DISCONNECT:
      localStorage.clear();
      store.dispatch(receivedDisconnect());
      break;
    case SUBMIT_SEARCH:
      store.dispatch(loadSearch());
      const name = store.getState().navbarreducer.inputSearch;

      axios.get('http://api.gamehub.com/api/game/search', {
        headers: {
          'Content-Type': 'application/json',
        },
        name,
      })
        .then((response) => {
          console.log('Reponse Submit Search', response);

          store.dispatch(receivedSubmit(response.data));
        })
        .catch((error) => {
          console.log('Erreur Submit Search', error);
          // store.dispatch();
        });
      break;
    default:
      next(action);
  }
};

export default navbarMiddleware;
