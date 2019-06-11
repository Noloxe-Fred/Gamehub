import React from 'react';

import Search from 'src/containers/AdvancedSearchPage/Search';
import List from 'src/Library/List';

import './advancedsearchpage.scss';


const AdvancedSearchPage = gamesDatas => (
  <div id="advanced--search">
    <h2 id="titre">Recherche avancée</h2>
    <Search />
    <List result={gamesDatas} />
  </div>
);


export default AdvancedSearchPage;
