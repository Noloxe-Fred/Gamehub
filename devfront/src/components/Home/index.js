import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

import Banner from './Banner';
import MainList from 'src/containers/Home/MainList';
import './home.scss';

class Home extends Component {

  render() {
    return (
      <div id="home">
        <Banner />
        <Icon name='angle double down' size='big' />
        <MainList />
      </div>
    );
  }
}

export default Home;
