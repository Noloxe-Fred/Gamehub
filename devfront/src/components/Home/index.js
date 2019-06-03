import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

import Banner from './Banner';
import MainList from 'src/containers/Home/MainList';
import CarouselAlice from 'src/Library/FullComponent/CarouselAlice';
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
        <CarouselAlice />
      </div>
    );
  }
}

export default Home; 
