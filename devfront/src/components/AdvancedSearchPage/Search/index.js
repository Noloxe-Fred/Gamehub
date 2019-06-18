import React from 'react';
import { Grid, Checkbox, Button } from 'semantic-ui-react';
import './search.scss';

class Search extends React.Component {

  componentDidMount() {
  }
 
  handleClick = categoryName => () => {
    const { checkedCategories, requestByCategories } = this.props;
    checkedCategories(categoryName);
    requestByCategories();
  };

  render() {
    const { loading, categoriesDatas } = this.props;

    console.log('Advance search', categoriesDatas)

    const types = categoriesDatas.filter(category => category.type === 1);
    const players = categoriesDatas.filter(category => category.type === 2);
    const tags = categoriesDatas.filter(category => category.type === 3);
    
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
                          <Button active={player.status} onClick={this.handleClick(player.id)} classname="btn">{player.name}</Button>
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
                            <Button active={tag.status} onClick={this.handleClick(tag.id)} classname="btn">{tag.name}</Button>
                          </div>
                        )})
                      }
                    </div>
                  </Grid.Column>
                </Grid.Row>
            </React.Fragment>
          )
        }
      </Grid.Row>
    </Grid>
    )
  }
};

export default Search;
