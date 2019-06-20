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

import { requestProfile } from 'src/store/reducers/userPagesReducer';

const navbarMiddleware = store => next => (action) => {
  switch (action.type) {
    case CONNECT_SAVED_USER:
      store.dispatch(receivedConnect());
      store.dispatch(requestProfile());
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
          console.log('Local Storage', localStorage, 'Reponse connexion', response.data)

          const remember = store.getState().navbarreducer.checkRemember;
          console.log('Check Remember',store.getState().navbarreducer, remember)
          localStorage.setItem('connect', true);
          localStorage.setItem('remember', true); // if case cochée!
          localStorage.setItem('user', response.data.token);
          localStorage.setItem('resfresh', response.data.refresh_token);

          store.dispatch(requestProfile());
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
          console.log('Reponse Subscribe Ok', response.data);
          const { email } = response.data;
          if (response.data) {
            store.dispatch(receivedSubscribe('subscribeOk', email));
          }
          else {
            store.dispatch(receivedSubscribe('subscribeError', ''));
          }
        })
        .catch((error) => {
          console.log('Reponse subscribe error', error.response);
          if (error.response.data.detail === "password: Mot de passe non valide.") {
            store.dispatch(receivedSubscribe('subscribePassWordNotConforme', ''))
          }
          else if (error.response.data.detail === "email: L'email n'est pas valide.") {
            store.dispatch(receivedSubscribe('subscribeEmailInvalid', ''));
          }
          else if (error.response.data === "L'email est déjà prit.") {
            store.dispatch(receivedSubscribe('subscribeEmailExist', ''));
          }
          else if (error.response.data === "Mot de passe différent.") {
            store.dispatch(receivedSubscribe('subscribePassNotPareil', ''));
          }
          else if (error.response.data === "Le pseudo est déjà prit.") {
            store.dispatch(receivedSubscribe("subscribePseudoExist", ''));
          }
          else { store.dispatch(receivedSubscribe('subscribeError', '')) }
        });

      // if subscribe not ok = erreur
      // store.dispatch(receivedSubscribe('subscribeError'));

      // il user already exist:
      // store.dispatch(receivedSubscribe('subscribeAlreadyExist'));

      // il password not conforme:
      // store.dispatch(receivedSubscribe('subscribePassWordNotConforme'));

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
        params: {name},
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
