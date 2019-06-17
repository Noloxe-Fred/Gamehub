import React from 'react';

import MainList from 'src/containers/Home/MainList';
import FirstCarousel from 'src/containers/Home/FirstCarousel';
import SecondCarousel from 'src/containers/Home/SecondCarousel';
import TabList from 'src/containers/Home/TabList';
import Banner from './Banner';
import Footer from 'src/components/Footer';
import './home.scss';

const Home = () => (
  <div id="home">
    <Banner />
    <div className="chevron--all">
      <div className="chevron" />
      <div className="chevron" />
      <div className="chevron" />
    </div>
    <MainList />
    <FirstCarousel />
    <SecondCarousel />
    <TabList />
    <Footer />
  </div>
);

export default Home;
