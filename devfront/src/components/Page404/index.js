import React from 'react';
import { Link } from 'react-router-dom';

import './404.scss';

const NotFound = () => (
  <div className="contenu">
    <div className="Titre"> 
      <h1>Erreur 404</h1> 
    </div>
    <h2> Bah alors, tu es perdu mon petit !? </h2>
    <div className="image"> 
      <img src="http://fr.web.img3.acsta.net/r_640_360/newsv7/19/06/05/13/12/3751725.jpg" alt="depardieux" />
    </div>
    <div className="Ok"> 
    <Link to="/">Retourner à l'accueil</Link>
    </div>
     </div>
);

export default NotFound;
