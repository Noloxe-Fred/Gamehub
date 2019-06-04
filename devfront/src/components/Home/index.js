import React, { Component } from 'react';


import Banner from './Banner';
import MainList from 'src/containers/Home/MainList';
import CarouselAlice from 'src/Library/FullComponent/CarouselAlice';
import TabList from 'src/containers/Home/TabList';
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
        <TabList />
      </div>
    );
  }
}

export default Home;  
