import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import Proptypes from 'prop-types';
import './carouselAlice.scss';

import AddGame from 'src/containers/User/addgameContainer';

const CarouselAlice = ({ gameList }) => {
  const handleOnDragStart = e => e.preventDefault();

  const sliceList = (list) => {
    if (list.length > 12) {
      return [list.slice(0, 6), list.slice(6, 12), list.slice(12, 18)];
    }
    if (list.length > 6) {
      return [list.slice(0, 6), list.slice(6, 12)];
    }
    if (list.length <= 6) {
      return [list.slice(0, 6)];
    }
  };
  const CarouselList = sliceList(gameList);

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
              <AddGame gameId={game.id} />
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
