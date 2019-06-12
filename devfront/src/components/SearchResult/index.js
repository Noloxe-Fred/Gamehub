import React, { Component } from 'react';

import './searchresult.scss';

class SearchResult extends Component {
  componentDidMount() {
    this.props.cancelRedirect();
  }

  render() {
    return (
      <div id="result--search">
        <h2>Résultat de votre recherche:</h2>
      </div>
    );
  }
}

export default SearchResult;
