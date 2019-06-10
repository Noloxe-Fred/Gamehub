import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Loader } from 'semantic-ui-react';

import './tabList.scss';


class TabList extends React.Component {
  componentDidMount() {
    this.props.requestTabList();
  };

  render() {
    const { tabList, load } = this.props;

    const panes = [
      { menuItem: 'Les Tops et Flops de la semaine', render: () => (
      <Tab.Pane>
        <div className="tabContent">
          <div className="partOfOneTab">
            <div className="icone good"><i className="fas fa-thumbs-up"></i></div>
            {tabList.map(game => <div id={game.id}><a href={"/game/"+game.id}>{game.name}</a></div>)}
          </div>
          <div className="partOfOneTab">
            <div className="icone bad"><i className="fas fa-thumbs-down"></i></div>
            {tabList.map(game => <div id={game.id}><a href={"/game/"+game.id}>{game.name}</a></div>)}
          </div>
        </div>
      </Tab.Pane> 
      )},
      { menuItem: 'Les Tops et Flops du mois',
      render: () => (
        <Tab.Pane>
          <div className="tabContent">
            <div className="partOfOneTab">
              <div className="icone good">
                <i className="fas fa-thumbs-up" />
              </div>
              {tabList.map(game => <div id={game.id}><a href={"/game/"+game.id}>{game.name}</a></div>)}
            </div>
            <div className="partOfOneTab">
              <div className="icone bad"><i className="fas fa-thumbs-down"></i></div>
              {tabList.map(game => <div id={game.id}><a href={"/game/"+game.id}>{game.name}</a></div>)}
            </div>
          </div>
        </Tab.Pane>
        ) },
      { menuItem: 'Les Tops et Flops de l\'année', render: () => (
      <Tab.Pane>
        <div className="tabContent">
          <div className="partOfOneTab">
            <div className="icone good"><i className="fas fa-thumbs-up"></i></div>
            {tabList.map(game => <div id={game.id}><a href={"/game/"+game.id}>{game.name}</a></div>)}
          </div>
          <div className="partOfOneTab">
            <div className="icone bad"><i className="fas fa-thumbs-down"></i></div>
            {tabList.map(game => <div id={game.id}><a href={"/game/"+game.id}>{game.name}</a></div>)}
          </div>
        </div>
      </Tab.Pane>
      )},
    ]

    return (
      <div>
        {load && <Loader active inline='centered' />}
        {!load && (
          <div className="tab">
            <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
          </div>
        )}
      </div>
    );
  };
};

TabList.propTypes = {
  load: PropTypes.bool.isRequired,
  requestTabList: PropTypes.func.isRequired,
  tabList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default TabList;
