// == Import : npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

// == Import : local
import './app.scss';
import Navbar from 'src/components/Navbar';

// == Composant
const App = () => (
  <div id="app">
    <Navbar />
  </div>
);

// == Export
export default App;
