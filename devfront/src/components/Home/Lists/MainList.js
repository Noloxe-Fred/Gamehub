import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Loader, Grid, Image, Icon, Card  } from 'semantic-ui-react';

import AddGame from 'src/containers/User/addgameContainer';
import './lists.scss';
 
 
class MainList extends Component {
  componentDidMount() {
    this.props.requestComingSoon();
  }
 
  render() {
    const { load, gameList, count } = this.props;

    const displayList = gameList.slice(count, count + 6);

    return (
      <div id="main-list">
        {load && <Loader active inline="centered" />}
        {(!load && displayList.length > 0) && (
          <div>
            <div id="title-main-list">
              <h3><span className="thin">LES </span>PROCHAINES SORTIES</h3>
              {/* <hr/> */}
              <div id="button-main-list">
                {count > 0 && <Icon name="angle left" size="large" onClick={this.props.decreaseCount}/>}
                {!(count + 7 > gameList.length) && <Icon name="angle right" size="large" onClick={this.props.increaseCount} />}
              </div>
            </div>
            <Grid columns={2} id="grid--prochaines--sorties">
              <Grid.Row columns={1} id="mainCard">
                <Grid.Column computer={16} tablet={16} mobile={16}>
                  <Card>
                    <div className="link--img maincard--image">
                      <Link to={"/game/"+displayList[0].id}>
                        <img src={displayList[0].illustration} alt={displayList[0].name}/>
                      </Link>
                    </div>
                    <Card.Content>
                      <Card.Header>
                        <h3>{displayList[0].name}</h3>
                        <AddGame gameId={displayList[0].id} className="add--game--button"/>
                      </Card.Header>
                      <Card.Description>
                        <p>{displayList[0].description}</p>
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2} id="secondaryCard">
                <Grid.Column computer={8} tablet={16} mobile={16}>
                  {!displayList[1] && <div></div>}
                  {displayList[1] && (
                    <Card>
                      <div className="link--img">
                        <Link to={"/game/"+displayList[1].id}>
                          <img src={displayList[1].illustration} alt={displayList[1].name}/>
                        </Link>
                      </div>
                      <Card.Content>
                        <Card.Header>
                          <h3>{displayList[1].name}</h3>
                          <AddGame gameId={displayList[1].id} className="add--game--button"/>
                        </Card.Header>
                        <Card.Description>
                          <p>{displayList[1].description}</p>                  
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  )}
                </Grid.Column>
                  <Grid.Column computer={8} tablet={16} mobile={16} id="four--cards--part">
                    <Grid.Row columns={2} computer={8} tablet={8} mobile={16} id="thirdCard--top--row">
                      <Grid.Column mobile={16} tablet={16} className="other--column">
                      {!displayList[2] && <div></div>}
                      {displayList[2] && (
                          <Card>
                            <div className="link--img">
                              <Link to={"/game/"+displayList[2].id}>
                                <img src={displayList[2].illustration} alt={displayList[2].name}/>
                              </Link>
                            </div>
                            <Card.Content>
                              <Card.Header>
                                <h3>{displayList[2].name}</h3>
                                <AddGame gameId={displayList[2].id} className="add--game--button"/>
                              </Card.Header>
                            </Card.Content>
                          </Card>
                        )}
                      </Grid.Column>
                      <Grid.Column mobile={16} tablet={16} className="other--column">
                        {!displayList[3] && <div></div>}
                        {displayList[3] && (
                          <Card>
                            <div className="link--img">
                              <Link to={"/game/"+displayList[3].id}>
                                <img src={displayList[3].illustration} alt={displayList[3].name}/>
                              </Link>
                            </div>
                            <Card.Content>  
                              <Card.Header>
                                <h3>{displayList[3].name}</h3>
                                <AddGame gameId={displayList[3].id} className="add--game--button"/>
                              </Card.Header>
                            </Card.Content>
                          </Card>
                        )}
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2} computer={8} tablet={8} mobile={16} id="thirdCard--bottom--row">
                      <Grid.Column className="other--column">
                        {!displayList[4] && <div></div>}
                        {displayList[4] && (
                          <Card> 
                          <div className="link--img">
                              <Link to={"/game/"+displayList[4].id}>
                                <img src={displayList[4].illustration} alt={displayList[4].name}/>
                              </Link>
                            </div>
                            <Card.Content>  
                              <Card.Header>
                                <h3>{displayList[4].name}</h3>
                                <AddGame gameId={displayList[4].id} className="add--game--button"/>
                              </Card.Header>
                            </Card.Content>
                          </Card>
                        )}
                      </Grid.Column>
                      <Grid.Column className="other--column">
                        {!displayList[5] && <div></div>}
                        {displayList[5] && (
                          <Card> 
                            <div className="link--img">
                              <Link to={"/game/"+displayList[5].id}>
                                <img src={displayList[5].illustration} alt={displayList[5].name}/>
                              </Link>
                            </div>
                            <Card.Content>
                              <Card.Header>
                                <h3>{displayList[5].name}</h3>
                                <AddGame gameId={displayList[5].id} className="add--game--button"/>
                              </Card.Header>
                            </Card.Content>
                          </Card>
                        )}
                      </Grid.Column>
                    </Grid.Row>
                  </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        )}
      </div>
    );
  }
}

// les prochaines sorties ( avec les fl)
MainList.propTypes = {
  requestComingSoon: PropTypes.func.isRequired,
  load: PropTypes.bool.isRequired,
  gameList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
  count: PropTypes.number.isRequired,
  decreaseCount: PropTypes.func.isRequired,
  increaseCount: PropTypes.func.isRequired,
};

// Composant Card

export default MainList;
