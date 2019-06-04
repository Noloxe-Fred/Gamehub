import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import gameList from 'src/data/gameCarousel'; 
import './carouselAlice.scss';
 
const CarouselAlice = () => {
  const handleOnDragStart = e => e.preventDefault();

  return (
    <AliceCarousel 
      mouseDragEnabled
      autoPlay={true}
      autoPlayInterval={4000}
      fadeOutAnimation={true}
      buttonsDisabled={true}
      >
    
      <div className="slider">
        <div className="uneImage">
          <a href="#">
            <img src={gameList[0].illustration} onDragStart={handleOnDragStart} className="images" />
          </a>
          <p>{gameList[0].name}</p>
        </div>
        <div className="uneImage">
          <a href="#">
            <img src={gameList[1].illustration} onDragStart={handleOnDragStart} className="images" />
          </a>
          <p>{gameList[1].name}</p>
        </div>
        <div className="uneImage">
          <a href="#">
            <img src={gameList[2].illustration} onDragStart={handleOnDragStart} className="images" />
          </a>
          <p>{gameList[2].name}</p>
        </div>
        <div className="uneImage">
          <a href="#">
            <img src={gameList[3].illustration} onDragStart={handleOnDragStart} className="images" />
          </a>
          <p>{gameList[3].name}</p>
        </div>
        <div className="uneImage">
          <a href="#">
            <img src={gameList[4].illustration} onDragStart={handleOnDragStart} className="images" />
          </a>
          <p>{gameList[4].name}</p>
        </div>
      </div>

      <div className="slider">
        <div className="uneImage">
          <a href="#">
            <img src={gameList[5].illustration} onDragStart={handleOnDragStart} className="images" />
          </a>
          <p>{gameList[5].name}</p>
        </div>
        <div className="uneImage">
          <a href="#">
            <img src={gameList[6].illustration} onDragStart={handleOnDragStart} className="images" />
          </a>
          <p>{gameList[6].name}</p>
        </div>
        <div className="uneImage">
          <a href="#">
            <img src={gameList[7].illustration} onDragStart={handleOnDragStart} className="images" />
          </a>
          <p>{gameList[7].name}</p>
        </div>
        <div className="uneImage">
          <a href="#">
            <img src={gameList[8].illustration} onDragStart={handleOnDragStart} className="images" />
          </a>
          <p>{gameList[8].name}</p>
        </div>
        <div className="uneImage">
          <a href="#">
            <img src={gameList[9].illustration} onDragStart={handleOnDragStart} className="images" />
          </a>
          <p>{gameList[9].name}</p>
        </div>
      </div>

      

    </AliceCarousel>
  )
}

export default CarouselAlice;
