import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

import Banner from './Banner';
import MainList from 'src/containers/Home/MainList';
import Carousel from 'src/Library/FullComponent/Carousel';
import './home.scss';

class Home extends Component {

  render() {
    return (
      <div id="home">
        <Banner />
        <div class="container">
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="chevron"></div>
        </div>
        <MainList />
        <Carousel />
      </div>
    );
  }
}

export default Home;
