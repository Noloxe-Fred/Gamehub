import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import Proptypes from 'prop-types';
import './carouselAlice.scss';

const CarouselAlice = ({ gameList }) => {
  const handleOnDragStart = e => e.preventDefault();

  const CarouselList = [
    gameList.slice(0, 6),
    gameList.slice(6, 12),
    gameList.slice(12, 18),
  ];

  return (
    <AliceCarousel
      mouseDragEnabled
      autoPlay={true}
      autoPlayInterval={4000}
      fadeOutAnimation={true}
      buttonsDisabled={true}
    >
      {CarouselList.map(slicedList => (
        <div id={slicedList[0].id} className="slider">
          {slicedList.map(game => (
            <div id={game.id} className="uneImage">
              <a href={"/game/"+game.id}>
                <img src={game.cover} onDragStart={handleOnDragStart} className="images" />
              </a>
              <p>{game.name}</p>
            </div>
          ))}
        </div>
      ))}
    </AliceCarousel>
  );
};

CarouselAlice.propTypes = {
  gameList: Proptypes.array.isRequired,
};

export default CarouselAlice;
