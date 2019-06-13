import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from 'src/containers/SearchBarContainer';
import './searchBar.scss';

class SearchBarBanner extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.props.display(false);
    if (sessionStorage.getItem('disconnect')) {
      sessionStorage.clear();
    }
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
    const bannerInput = document.querySelector('.banniere');
    const boundingClientRect = bannerInput.getBoundingClientRect();
    const positionTop = boundingClientRect.top;
    //console.log(positionTop);
    // Si jamais la distance qui sépare le haut de ma fenetre du bouton
    // est plus petite que la distance entre le haut et le bas de ma fenetre
    // (plus une marge de sécurité de 300 px)
    // ALORS
    // Le bouton sera bientot visible, il est temps de lancer l'appel au script
    const { displayInput, display } = this.props;
   
    if (positionTop < -340 && !displayInput) {
      display(true);
    }
    else if (positionTop > -340 && displayInput) {
      display(false);
    }
  }

  render() {
    return (
      <SearchBar />
    );
  }
}

SearchBarBanner.propTypes = {
  display: PropTypes.func.isRequired,
  displayInput: PropTypes.bool.isRequired,
};
export default SearchBarBanner;
