import React, { Component } from 'react'
import { Transition, Icon } from 'semantic-ui-react';

import gameList from 'src/data/gameCarousel';


export default class Carousel extends Component {
  state = {
    animation1: 'fly left',
    animation2: 'fly right',
    duration: 1000,
    stateList: 1,
  }


  forward = () => {
    switch (this.state.stateList) {
      case 1:
        this.setState({
          stateList: 2,
        });
        break;
      case 2:
        this.setState({
          stateList: 3,
        });
        break;
      case 3:
        this.setState({
          stateList: 1,
        });
        break;
      default:
        this.setState({
          stateList: 1,
        });
        break;
    }
  }

  render() {
    const { animation1, animation2, duration, stateList } = this.state;
    // const { list1, list2, list3 } = this.props;
    const list1 = gameList.slice(0, 6);
    const list2 = gameList.slice(6, 12);
    const list3 = gameList.slice(12, 18);

    return (
      <div className="carousel">
        <Icon name="angle left" onClick={this.backward} />
        <Transition.Group animation={stateList === 2 ? animation1 : animation2} duration={duration}>
          {stateList === 1 && <div className="carousel-list">{list1.map(game => <img src={game.cover} className="carousel-img" />)}</div>}
        </Transition.Group>
        <Transition.Group animation={stateList === 3 ? animation1 : animation2} duration={duration}>
          {stateList === 2 && <div className="carousel-list">{list2.map(game => <img src={game.cover} className="carousel-img" />)}</div>}
        </Transition.Group>
        <Transition.Group animation={stateList === 1 ? animation1 : animation2} duration={duration}>
          {stateList === 3 && <div className="carousel-list">{list3.map(game => <img src={game.cover} className="carousel-img" />)}</div>}
        </Transition.Group>
        <Icon name="angle right" onClick={this.forward} />
      </div>
    );
  }
}
