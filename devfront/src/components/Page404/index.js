import React from 'react';
import { Link } from 'react-router-dom';

import './404.scss';
import 'src/data/images/404/deadlink.png'

const NotFound = () => (
  <div className="contenu">
    <div className="background">
    <div className="erreur"> 
      <h1>Erreur 404</h1> 
    </div>
    <div className="texte">
    <h2> Hum... tu n'etais pas censé trouver ce link... </h2>
    </div>
    <div className="image"> 
    <img src="src/data/images/404/deadlink.png"> 
    </img>
    </div>
    <div className="ok"> 
    <Link to="/">Retourner à l'accueil</Link>
    </div>
    </div>
     </div>
);


export default NotFound;
