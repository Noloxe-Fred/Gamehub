import React from 'react';
import { Grid, Checkbox, Button } from 'semantic-ui-react';
import './search.scss';

class Search extends React.Component {

  componentWillUnmount() {
    this.props.resetSearch();
  }
 
  handleClick = categoryName => () => {
    const { checkCategories, requestByCategories } = this.props;
    checkCategories(categoryName);
    requestByCategories();
  };

  render() {
    const { loading, checkedCategories, resetSearch } = this.props;

    console.log('Advance search', checkedCategories)

    const types = checkedCategories.filter(category => category.type === 1);
    const players = checkedCategories.filter(category => category.type === 2);
    const tags = checkedCategories.filter(category => category.type === 3);
    
    return (
      <Grid className="grid--advanced--search">
        <Grid.Row columns={3} divided>
          {loading && <div>Chargement</div>}
          {!loading && (
            <React.Fragment>
              <Grid.Column as="div" mobile={16} tablet={16} computer={16} className="left--part">
                <div className="column--left--style">
                  {
                    types.map((type) => {
                    return (
                      <div key={type.id} className="one--checkbox">
                        <Checkbox label={type.name} checked={type.status} onClick={this.handleClick(type.id)} />
                      </div>
                    )})
                  }
                </div>
              </Grid.Column>  
               
                <Grid.Row className="row--players">
                  <Grid.Column mobile={16} tablet={16} computer={16}>
                  <div className="column--central--style">
                    {
                      players.map((player) => {
                      return (
                        <div key={player.id} className="one--central--button">
                          <Button color={player.status ? 'yellow' : ''} inverted basic active={player.status} onClick={this.handleClick(player.id)} className="btn">{player.name}</Button>
                        </div>
                      )})
                    }
                    </div>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column mobile={16} tablet={16} computer={16}>
                    <div className="column--right--style">
                      {
                        tags.map((tag) => {
                        return (
                          <div key={tag.id} className="one--right--button">
                            <Button color={tag.status ? 'yellow' : ''} inverted basic active={tag.status} onClick={this.handleClick(tag.id)} className="btn">{tag.name}</Button>
                          </div>
                        )})
                      }
                    </div>
                  </Grid.Column>
                </Grid.Row>
                <div className="container--button">
                  <Button onClick={resetSearch} className="reset--button">Reset</Button>
                </div>
            </React.Fragment>
          ) 
        }
      </Grid.Row>
    </Grid>
    )
  }
};

export default Search;
