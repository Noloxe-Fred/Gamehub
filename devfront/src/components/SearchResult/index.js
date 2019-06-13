import React, { Component } from 'react';

import './searchresult.scss';

import List from 'src/Library/List';

class SearchResult extends Component {
  componentDidMount() {
    this.props.cancelRedirect();
  }

  render() {
    return (
      <div id="result--search">
        <h3>Résultat de votre recherche:</h3>
        <List gamesDatas={this.props.searchList} />
      </div>
    );
  }
}

export default SearchResult;
