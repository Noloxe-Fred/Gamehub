import React from 'react';
import { Grid } from 'semantic-ui-react';


import './search.scss';

class Search extends React.Component {

  componentDidMount() {
    this.props.requestCategories();
  }

  render() {
    const { loading, categoriesDatas } = this.props;

    const types = categoriesDatas.filter(category => category.type.id === 1);
    const players = categoriesDatas.filter(category => category.type.id === 2);
    const tags = categoriesDatas.filter(category => category.type.id === 3);
    
    return (
      <Grid className="grid--advanced--search">
        <Grid.Row columns={3} divided>
          {loading && <div>PROUUUUUUT</div>}
          {!loading && (
            <React.Fragment>
              <Grid.Column as="div" mobile={16} tablet={16} computer={8} className="left--part">
                <div className="column--left--style">
                  {
                    types.map((type, id) => {
                    return (
                      <div className="one--checkbox">
                        <input type="checkbox" key={id} />
                        {type.name}
                      </div>  
                    )})
                  }
                </div>
              </Grid.Column>  
              <Grid.Column as="div" mobile={16} tablet={16} computer={8}>
                <Grid.Row className="row--players">
                  <div className="column--central--style">
                    {
                      players.map((player, id) => {
                      return (
                        <div className="one--central--button">
                          <button key={id}>{player.name}</button>
                        </div>
                      )})
                    }
                    </div>
                </Grid.Row>
                <Grid.Row>
                  <div className="column--right--style">
                    {
                      tags.map((tag, id) => {
                      return (
                        <div className="one--right--button">
                          <button key={id}>{tag.name}</button>
                        </div>
                      )})
                    }
                  </div>
                </Grid.Row>
              </Grid.Column>
            </React.Fragment>
          )
        }
      </Grid.Row>
    </Grid>
    )
  }
};

export default Search;
