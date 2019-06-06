import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

import gameList from 'src/data/gameCarousel'; 
import './carouselBootstrap.scss';

// const list1 = gameList.slice(0, 6);
// const list2 = gameList.slice(6, 12);
// const list3 = gameList.slice(12, 18);

const CarouselBootstrap = () => (
  <Carousel
    interval={2000}
    controls
    slide
    fade={false}
    wrap
    >
    <Carousel.Item>
      <img
        className="d-block w-100 carouselImage"
        src={gameList[0].illustration}
        alt="First slide"
      />
      <img
        className="carouselImage"
        src={gameList[1].illustration}
        alt="First slide"
      />
      <img
        className="carouselImage"
        src={gameList[2].illustration}
        alt="First slide"
      />
      <img
        className="carouselImage"
        src={gameList[3].illustration}
        alt="First slide"
      />
      <img
        className="carouselImage"
        src={gameList[4].illustration}
        alt="First slide"
      />
      <img
        className="carouselImage"
        src={gameList[5].illustration}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 carouselImage"
        src={gameList[6].illustration}
        alt="Second slide"
      />
      <img
        className="carouselImage"
        src={gameList[7].illustration}
        alt="First slide"
      />
      <img
        className="carouselImage"
        src={gameList[8].illustration}
        alt="First slide"
      />
      <img
        className="carouselImage"
        src={gameList[9].illustration}
        alt="First slide"
      />
      <img
        className="carouselImage"
        src={gameList[10].illustration}
        alt="First slide"
      />
      <img
        className="carouselImage"
        src={gameList[11].illustration}
        alt="First slide"
      />
    </Carousel.Item>
  </Carousel>
);

export default CarouselBootstrap;




