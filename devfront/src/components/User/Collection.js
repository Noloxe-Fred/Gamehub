import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


import './user.scss';

const Collection = ({
  listAdd,
  listWant,
  listWish,
  request, 
}) => {
  return (
    <div id="mycollection">
      <List name="listAdd" listDatas={listAdd} request={request} />
      <List name="listWant" listDatas={listWant} request={request} />
      <List name="listWish" listDatas={listWish} request={request} />
    </div>
  );
};

class List extends Component {
  componentDidMount() {
    const { request, name } = this.props;
    request(name);
  }

  render() {
    const { list, load, title } = this.props.listDatas;
    console.log(load, list)
    return (
      <div className="collection">
        <h2>{title}:</h2>
        {load && <p>Loading</p>}
        {!load && (
          <div className="list">
            {list.map(game => (
              <div id={game.id} className="game">
                <img src={game.cover} alt="cover game" />
                <h6>72%</h6>
              </div>
              ))}
          </div>
        )}
      </div>
    );
  }
};

export default Collection;
