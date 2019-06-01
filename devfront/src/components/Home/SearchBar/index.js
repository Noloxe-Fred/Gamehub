import React from 'react';
import { Icon, Input } from 'semantic-ui-react';

import './searchBar.scss';

const SearchBar = () => (
  <Input 
    icon={<Icon name='search' link color="yellow" />} 
    placeholder="Rechercher un jeu" 
    className="searchBar"
  />
)


export default SearchBar;
