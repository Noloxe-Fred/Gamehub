import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Progress } from 'semantic-ui-react';


import './user.scss';

const Collection = ({
  listAdd,
  listWant,
  listWish,
  request, 
}) => {
  return (
    <div>
      <h1 id="collection-title">MA COLLECTION</h1>
      <div id="mycollection">
        <List name="listAdd" listDatas={listAdd} request={request} />
        <List name="listWant" listDatas={listWant} request={request} />
        <List name="listWish" listDatas={listWish} request={request} />
      </div>
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
    const shortList = list.slice(0, 12);
    const percent = 70;
    return (
      <div className="collection">
        <h2>{title}:</h2>
        {load && <p>Loading</p>}
        {!load && (
          <div className="list">
            {shortList.map(game => (
              <div id={game.id} className="game">
                <img src={game.cover} alt="cover game" />
                <div className="game-score"><Progress percent={percent} indicating /></div>
              </div>
              ))}
          </div>
        )}
        {list.length > 11 && <NavLink to={`/full-collection-list`}>Voir la liste complète...</NavLink>}
      </div>
    );
  }
};

export default Collection;
