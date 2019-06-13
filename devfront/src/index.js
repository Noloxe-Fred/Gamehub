
/**
 * NPM import
 */
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

/**
 * Local import
 */
import App from 'src/containers/App';
import store from 'src/store';
import 'semantic-ui-css/semantic.min.css';
/**
 * Code
 */
const rootComponent = (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

render(rootComponent, document.getElementById('root'));
