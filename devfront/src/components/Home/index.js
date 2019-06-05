import React, { Component } from 'react';


import Banner from './Banner';
import MainList from 'src/containers/Home/MainList';
import FirstCarousel from 'src/containers/Home/FirstCarousel';
import SecondCarousel from 'src/containers/Home/SecondCarousel';
import TabList from 'src/containers/Home/TabList';
import './home.scss';

class Home extends Component {

  render() {
    return (
      <div id="home">
        <Banner />
        <div className="container">
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </div>
        <MainList />
        <FirstCarousel />
        <SecondCarousel />
        <TabList />
      </div>
    );
  }
}

export default Home;  
