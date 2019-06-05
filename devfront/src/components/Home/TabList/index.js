import React from 'react';
import Proptypes from 'prop-types';
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
            {tabList.map(game => <div><a href={"/game/"+game.id}>{game.name}</a></div>)}
          </div>
          <div className="partOfOneTab">
            <div className="icone bad"><i className="fas fa-thumbs-down"></i></div>
            {tabList.map(game => <div><a href={"/game/"+game.id}>{game.name}</a></div>)}
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
              <i className="fas fa-thumbs-up"></i>
            </div>
            {tabList.map(game => <div><a href={"/game/"+game.id}>{game.name}</a></div>)}
          </div>
          <div className="partOfOneTab">
            <div className="icone bad"><i className="fas fa-thumbs-down"></i></div>
            {tabList.map(game => <div><a href={"/game/"+game.id}>{game.name}</a></div>)}
          </div>
        </div>
      </Tab.Pane>
      )},
      { menuItem: 'Les Tops et Flops de l\'année', render: () => (
      <Tab.Pane>
        <div className="tabContent">
          <div className="partOfOneTab">
            <div className="icone good"><i className="fas fa-thumbs-up"></i></div>
            {tabList.map(game => <div><a href={"/game/"+game.id}>{game.name}</a></div>)}
          </div>
          <div className="partOfOneTab">
            <div className="icone bad"><i className="fas fa-thumbs-down"></i></div>
            {tabList.map(game => <div><a href={"/game/"+game.id}>{game.name}</a></div>)}
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

export default TabList;
