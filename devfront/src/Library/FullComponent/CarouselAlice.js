import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import { Progress } from 'semantic-ui-react';

import './carouselAlice.scss';

import AddGame from 'src/containers/User/addgameContainer';

const CarouselAlice = ({ gameList }) => {
  const handleOnDragStart = e => e.preventDefault();

  const responsive = {
    0: { items: 2 },
    800: { items: 3 },
    1024: { items: 6 },
  };

  return (

    <AliceCarousel
      mouseDragEnabled
      autoPlay={true}
      autoPlayInterval={4000}
      fadeOutAnimation={true}
      buttonsDisabled={true}
      responsive={responsive}
    >
      {gameList.map(game => (
        <div>
          <div key={game.id} className="slider--test">
            <Link to={`/game/${game.id}`}>
              <img src={game.cover} onDragStart={handleOnDragStart} alt="jaquette" id="test--image"/>
            </Link>
            <p>{game.name}<AddGame gameId={game.id} /></p>
          </div>
          {game.score ? <div className="game-score"><Progress percent={game.score} size="tiny" indicating /></div> : <div className="game-score"><Progress percent='100' size="tiny" /></div>}
        </div>
      ))
      }
    </AliceCarousel>
  
  );
}; 

CarouselAlice.propTypes = {
  gameList: Proptypes.array.isRequired,
};

export default CarouselAlice;



   {/* {CarouselList.map(slicedList => (
        <div id={slicedList[0].id} className="slider">
          {slicedList.map(game => (
            <div id={game.id} className="uneImage">
              
              <Link to={`/game/${game.id}`}>
                <div className="one--effect">
                  <img src={game.cover} onDragStart={handleOnDragStart} className="images" />
                </div>
              </Link>
              <p>{game.name}<AddGame gameId={game.id} /></p>
            </div>
          ))}
        </div>
      ))} */}
