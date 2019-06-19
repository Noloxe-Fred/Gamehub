import React from 'react';
import { Grid } from 'semantic-ui-react';


import Search from 'src/containers/AdvancedSearchPage/Search';
import List from 'src/Library/List/List';

import './advancedsearchpage.scss';


class AdvancedSearchPage extends React.Component {
  componentDidMount() {
    this.props.requestByCategories();
  }

  render() {
    const { loading, gamesDatas } = this.props;
    return (
      <div id="advanced--search">
        <Grid>
          <Grid.Row>
            <Grid.Column mobile={16} only="mobile" only="tablet" className="partie--gauche--mobile">
              <h2 id="titre">Recherche avancée</h2>
              <Search />
            </Grid.Column>
          </Grid.Row>
          <Grid.Column computer={5} only="computer" className="partie--gauche">
            <div className="gauche--fixed">
              <h2 id="titre">Recherche avancée</h2>
              <Search />
            </div>
          </Grid.Column>
          <Grid.Column computer={11} className="partie--droite">
            {loading && <div>Chargement</div>}
            {loading || <List gamesDatas={gamesDatas} />}
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

 
export default AdvancedSearchPage; 
