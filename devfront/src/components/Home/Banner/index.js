import React from 'react';

import SearchBarBanner from 'src/containers/Home/SearchBarBanner';
import './banner.scss';

const Banner = () => {
  return (
    <div>
      <div className="banniere" />
      <SearchBarBanner className="searchBar" />
    </div>
  );
};

export default Banner;
