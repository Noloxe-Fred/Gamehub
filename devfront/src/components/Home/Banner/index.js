import React from 'react';
import ReactRotatingText from 'react-rotating-text';

import SearchBarBanner from 'src/containers/Home/SearchBarBanner';

import './banner.scss';

const Banner = () => {
  return (
    <div>
      <div className="banniere" />
      <h2><hr/><i className="fas fa-dot-circle"></i>G <i className="fas fa-headset logo" /> M E H U B<i className="fas fa-dot-circle"></i><hr/></h2>
      <div className="type--text">
         <ReactRotatingText items={['Gérez votre collection', 'Suivez vos envies', 'Donnez votre avis']} eraseMode='erase' cursor={true} className="typing" />
      </div>
      <SearchBarBanner className="searchBar" />
    </div>
  );
};

export default Banner;
