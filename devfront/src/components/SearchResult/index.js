import React, { Component } from 'react';

import './searchresult.scss';

import List from 'src/Library/List/List';

class SearchResult extends Component {
  componentDidMount() {
    console.log('Cancel Redirect');
    this.props.cancelRedirect();
  }

  comonentDidUpdate() {
    this.props.cancelRedirect();
  }

  render() {
    return (
      <div id="result--search">
        <h3>Résultat de votre recherche:</h3>
        <List gamesDatas={this.props.searchList} cancelRedirect={this.props.cancelRedirect} />
        
      </div>
    );
  }
}

export default SearchResult;