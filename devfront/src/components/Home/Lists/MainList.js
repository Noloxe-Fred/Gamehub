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
        {/* {load && <Loader active inline="centered" />}
        {(!load && displayList.length > 0) && ( */}
          <div>
            <div id="title-main-list">
              <h3>Les prochaines sorties</h3>
              <div id="button-main-list">
                {/* {count > 0 && <Icon name="angle left" size="large" onClick={this.props.decreaseCount}/>}
                {!(count + 7 > gameList.length) && <Icon name="angle right" size="large" onClick={this.props.increaseCount} />} */}
              </div>
            </div> 
            <Grid columns={2} id="grid--prochaines--sorties">
              <Grid.Row columns={1} id="mainCard">
                <Grid.Column computer={16} tablet={16} mobile={16}>
                    <Card>
                      {/* <AddGame gameid={displayList[0].id} />
                      <img src={displayList[0].illustration} alt={displayList[0].name}/> */}
                      <img src="https://images.unsplash.com/photo-1560358170-94e7c900dac7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80" alt="test"/>
                      <Card.Content>
                        <Card.Header>
                          {/* <h2>{displayList[0].name}</h2>  */}
                          <h2>Coucou</h2>
                        </Card.Header>
                        <Card.Description>
                          {/* <h6>{displayList[0].description}</h6> */}
                          <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ipsa quam totam, nesciunt modi veritatis possimus autem architecto. Nulla quod laudantium aut culpa ad distinctio? Nemo consequatur, dolorum molestias, eius fugit corrupti est ad debitis illum hic blanditiis voluptatem sapiente repellendus molestiae dignissimos expedita et omnis atque quasi. Repellat, placeat delectus! Iure aut ut consequuntur quis eos voluptatum impedit quia cum odio ipsam facilis accusamus doloremque officia aspernatur, ullam beatae.</h6>
                        </Card.Description>
                      </Card.Content>
                    </Card>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2} id="secondaryCard">
                <Grid.Column computer={8} tablet={16} mobile={16}>
                  {/* {!displayList[1] && <div></div>}
                  {displayList[1] && ( */}
                    {/* <Link to={"/game/"+displayList[1].id}> */}
                      <Card>
                      {/* <AddGame gameId={displayList[1].id} /> */}
                        {/* <Image src={displayList[1].illustration} alt={displayList[1].name} wrapped /> */}
                        <img src="https://images.unsplash.com/photo-1560345573-9f453083c335?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80" alt="test2"/>
                        <Card.Content>
                          <Card.Header>
                            {/* <h2>{displayList[1].name}</h2> */}
                            <h2>Coucou 2</h2>
                          </Card.Header>
                          <Card.Description>
                            {/* <h6>{displayList[1].description}</h6>                   */}
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quo quisquam maxime impedit doloremque veniam illum asperiores temporibus quasi nihil, tenetur a facilis nam facere ea dolores. In nisi, debitis enim, perspiciatis commodi, sunt iste dolor soluta molestiae provident nam illo! Quae consequuntur eveniet quia laborum soluta tempore obcaecati debitis distinctio ipsa temporibus provident</h6>
                          </Card.Description>
                        </Card.Content>
                      </Card>
                    {/* </Link> */}
                  {/* )} */}
                </Grid.Column>

                  <Grid.Column computer={8} tablet={16} mobile={16} id="four--cards--part">
                    <Grid.Row columns={2} computer={8} tablet={8} mobile={16} id="thirdCard--top--row">
                      <Grid.Column mobile={16} tablet={16} className="other--column">
                        <Card>
                          <Card.Content>
                            <Card.Header>

                            </Card.Header>
                            <Card.Description>

                            </Card.Description>
                          </Card.Content>
                        </Card>
                      </Grid.Column>
                      <Grid.Column mobile={16} tablet={16} className="other--column">
                        <Card>
                          <Card.Content>
                            <Card.Header>

                            </Card.Header>
                            <Card.Description>
                              
                            </Card.Description>
                          </Card.Content>
                        </Card>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2} computer={8} tablet={8} mobile={16} id="thirdCard--bottom--row">
                      <Grid.Column className="other--column">
                        <Card>
                          <Card.Content>
                            <Card.Header>

                            </Card.Header>
                            <Card.Description>
                              
                            </Card.Description>
                          </Card.Content>
                        </Card>
                      </Grid.Column>
                      <Grid.Column className="other--column">
                        <Card>
                          <Card.Content>
                            <Card.Header>

                            </Card.Header>
                            <Card.Description>
                              
                            </Card.Description>
                          </Card.Content>
                        </Card>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid.Column>

                {/* <Grid.Column computer={8} className="partie--bas--droite">
                  <Grid.Row columns={2}>
                    <Grid.Column computer={4} className="haut--gauche">

                    </Grid.Column>
                    <Grid.Column computer={4} className="haut--droite">
                      
                    </Grid.Column>                     
                  </Grid.Row>
                  <Grid.Row columns={2}>
                    <Grid.Column className="bas--gauche">

                    </Grid.Column>
                    <Grid.Column className="bas--droite">
                      
                    </Grid.Column>                     
                  </Grid.Row>
                </Grid.Column> */}
               


                  {/* <Grid className="grid--four--othercards">
                    <Grid.Row columns={2} className="row--other">
                      <Grid.Column computer={8}>
                        {!displayList[2] && <div></div>}
                        {displayList[2] && (
                          <Link to={"/game/"+displayList[2].id}>
                            <Card className="otherCard">
                            <AddGame gameId={displayList[2].id} />
                              <Image src={displayList[2].illustration} alt={displayList[2].name} wrapped />
                              <Card.Content>
                                <Card.Header><h2>{displayList[2].name}</h2></Card.Header>
                                <Card.Description>
                                  <h6>{displayList[2].description}</h6>
                                </Card.Description>
                              </Card.Content>
                            </Card>
                          </Link>
                        )}
                      </Grid.Column>
                      <Grid.Column computer={8}>
                        {!displayList[3] && <div></div>}
                        {displayList[3] && (
                          <Link to={"/game/"+displayList[3].id}>
                            <Card className="otherCard">
                            <AddGame gameId={displayList[3].id} />
                              <Image src={displayList[3].illustration} alt={displayList[3].name} wrapped />
                              <Card.Content>
                                <Card.Header><h2>{displayList[3].name}</h2></Card.Header>
                                <Card.Description>
                                  <h6>{displayList[3].description}</h6>     
                                </Card.Description>
                              </Card.Content>
                            </Card>
                          </Link>
                        )}
                      </Grid.Column>
                    </Grid.Row>

                    
                    <Grid.Row columns={2} className="row--other">
                      <Grid.Column>
                        {!displayList[4] && <div></div>}
                        {displayList[4] && (
                          <Link to={"/game/"+displayList[4].id}>
                            <Card className="otherCard">
                            <AddGame gameId={displayList[4].id} />
                              <Image src={displayList[4].illustration} alt={displayList[4].name} wrapped />
                              <Card.Content>
                                <Card.Header><h2>{displayList[4].name}</h2></Card.Header>
                                <Card.Description>
                                  <h6>{displayList[4].description}</h6>
                                </Card.Description>
                              </Card.Content>
                            </Card>
                          </Link>
                        )}
                      </Grid.Column>
                      <Grid.Column>
                        {!displayList[5] && <div></div>}
                        {displayList[5] && (
                          <Link to={"/game/"+displayList[5].id}>
                            <Card className="otherCard">
                            <AddGame gameId={displayList[5].id} />
                              <Image src={displayList[5].illustration} alt={displayList[5].name} wrapped />
                              <Card.Content>
                                <Card.Header><h2>{displayList[5].name}</h2></Card.Header>
                                <Card.Description>
                                  <h6>{displayList[5].description}</h6>
                                </Card.Description>
                              </Card.Content>
                            </Card>
                          </Link>
                        )}
                      </Grid.Column>
                    </Grid.Row>
                  </Grid> */}
                {/* </Grid.Column> */}
              </Grid.Row>
            </Grid>
          </div>
        {/* )} */}
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
