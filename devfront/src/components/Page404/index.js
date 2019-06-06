import React from 'react';
import { Link } from 'react-router-dom';

import './404.scss';

const NotFound = () => (
  <div>
    <h1>404</h1>
    <h2> bah alors, tu es perdu mon petit !? </h2>
    <div className="image">  <img src="http://fr.web.img3.acsta.net/r_640_360/newsv7/19/06/05/13/12/3751725.jpg" alt="depardieux" />
    </div>
    <Link to="/">Retourner à l'accueil</Link>
    
  </div>
);

export default NotFound;
