import React from 'react';

import SearchBar from 'src/components/Home/SearchBar';
import './banner.scss';

const Banner = () => {
  return (
    <div>
      <div className="banniere" />
      <SearchBar className="searchBar" />
    </div>
  );
};

export default Banner;
