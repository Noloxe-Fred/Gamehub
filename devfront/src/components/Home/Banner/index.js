import React from 'react';
import ReactRotatingText from 'react-rotating-text';

import SearchBarBanner from 'src/containers/Home/SearchBarBanner';
import './banner.scss';

const Banner = () => {
  return (
    <div>
      <div className="banniere" />
      <h2><hr/><i class="fas fa-dot-circle"></i>G <i className="fas fa-headset logo" /> M E H U B<i class="fas fa-dot-circle"></i><hr/></h2>
      <SearchBarBanner className="searchBar" />
      {/* <ReactRotatingText items={['BIENVENUE SUR GAMEHUB']} eraseMode='erase' cursor={true} className="typing" /> */}
    </div>
  );
};

export default Banner;
