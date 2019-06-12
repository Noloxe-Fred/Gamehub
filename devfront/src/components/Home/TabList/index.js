import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Loader, Grid } from 'semantic-ui-react';

import './tabList.scss';


class TabList extends React.Component {
  componentDidMount() {
    this.props.requestTabList();
  };

  render() {
    const {
      bestever,
      worstever,
      bestyear,
      worstyear,
      bestmonth,
      worstmonth,
      loadbestever,
      loadworstever,
      loadbestyear,
      loadworstyear,
      loadbestmonth,
      loadworstmonth,
     } = this.props;

    const panes = [
      { menuItem: 'Les Tops et Flops du mois', render: () => (
      <Tab.Pane>
        <div className="tabContent">
          <div className="partOfOneTab">
            <div className="icone good"><i className="fas fa-thumbs-up"></i></div>
            {loadbestmonth && <Loader active inline='centered' /> }
            {!loadbestmonth && bestmonth.map(game => <div id={game.id}><a href={"/game/"+game.id}>{game.name}</a></div>)}
          </div>
          <div className="partOfOneTab">
            <div className="icone bad"><i className="fas fa-thumbs-down"></i></div>
            {loadworstmonth && <Loader active inline='centered' /> }
            {!loadworstmonth && worstmonth.map(game => <div id={game.id}><a href={"/game/"+game.id}>{game.name}</a></div>)}
          </div>
        </div>
      </Tab.Pane> 
      )},
      { menuItem: 'Les Tops et Flops de l\'année',
      render: () => (
        <Tab.Pane>
          <div className="tabContent">
            <div className="partOfOneTab">
              <div className="icone good">
                <i className="fas fa-thumbs-up" />
              </div>
              {loadbestyear && <Loader active inline='centered' /> }
              {!loadbestyear && bestyear.map(game => <div id={game.id}><a href={"/game/"+game.id}>{game.name}</a></div>)}
            </div>
            <div className="partOfOneTab">
              <div className="icone bad"><i className="fas fa-thumbs-down"></i></div>
              {loadworstyear && <Loader active inline='centered' /> }
              {!loadworstyear && worstyear.map(game => <div id={game.id}><a href={"/game/"+game.id}>{game.name}</a></div>)}
            </div>
          </div>
        </Tab.Pane>
        ) },
      { menuItem: 'Les Tops et Flops ever!', render: () => (
      <Tab.Pane>
        <div className="tabContent">
          <div className="partOfOneTab">
            <div className="icone good"><i className="fas fa-thumbs-up"></i></div>
            {loadbestever && <Loader active inline='centered' /> }
            {!loadbestever && bestever.map(game => <div id={game.id}><a href={"/game/"+game.id}>{game.name}</a></div>)}
          </div>
          <div className="partOfOneTab">
            <div className="icone bad"><i className="fas fa-thumbs-down"></i></div>
            {loadworstever && <Loader active inline='centered' /> }
            {!loadworstever && worstever.map(game => <div id={game.id}><a href={"/game/"+game.id}>{game.name}</a></div>)}
          </div>
        </div>
      </Tab.Pane>
      )},
    ]

    return (
      <div>
          <div className="section">
            <Grid columns={2}>
              <div className="tab">
                <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
              </div>
            </Grid>
          </div>
      </div>
    );
  };
};

TabList.propTypes = {
  requestTabList: PropTypes.func.isRequired,
};

export default TabList;
