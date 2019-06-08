import React, { Component } from 'react';
import { Icon, Input } from 'semantic-ui-react';

import './searchBar.scss';

class SearchBar extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.props.display(false);
  }

  componentWillUnmount() {
    this.props.display(true);
  }

  handleScroll = () => {
    // const { scrollY, innerHeight } = window;
    // const { offsetHeight } = document.body;
    // if (scrollY + innerHeight >= offsetHeight - 300) {
    //   console.log('Bottom detected');
    //   loadTwitterScript();
    // }
    // Je stocke une référence à mon lien twitter "the old way"
    // const TwitterButton = document.getElementById('twitter-button');
    // Je récupère toutes les infos de taille et de position
    // du bouton twitter
    const bannerInput = document.getElementById('inputbanner');
    const boundingClientRect = bannerInput.getBoundingClientRect();
    const positionTop = boundingClientRect.top;
    //console.log(positionTop);
    // Si jamais la distance qui sépare le haut de ma fenetre du bouton
    // est plus petite que la distance entre le haut et le bas de ma fenetre
    // (plus une marge de sécurité de 300 px)
    // ALORS
    // Le bouton sera bientot visible, il est temps de lancer l'appel au script
    const { displayInput, display } = this.props;
   
    if (positionTop < 0 && !displayInput) {
      display(true);
    }
    else if (positionTop > 0 && displayInput) {
      display(false);
    }
  }

  render() {
    return (
      <Input
        // ref={(laReferenceAMonElementDansLeDom) => {
        //   this.bannerInput = laReferenceAMonElementDansLeDom;
        // }}
        id="inputbanner"
        icon={<Icon name='search' link color="blue" />} 
        placeholder="Rechercher un jeu" 
        className="searchBar"
      />
    );
  }
}


export default SearchBar;
