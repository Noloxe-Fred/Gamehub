import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loader, Grid, Image, Icon, Card  } from 'semantic-ui-react';

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
        {load && <Loader active inline='centered' />}
        {!load && (
          <div id="list">
            <div id="title-main-list">
              <h3>Les prochaines sorties</h3>
              <div id="button-main-list">
                {count > 0 && <Icon name="angle left" size="large" onClick={this.props.decreaseCount}/>}
                {!(count + 7 > gameList.length) && <Icon name="angle right" size="large" onClick={this.props.increaseCount} />}
              </div>
            </div>
            <Grid>
              <Grid.Row columns={1}>
                <Grid.Column>
                  <Card className="mainCard">
                    <img src={displayList[0].illustration} alt={displayList[0].name}/>
                    <Card.Content>
                      <Card.Header>{displayList[0].name}</Card.Header>
                      <Card.Description>
                        {displayList[0].description}
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column>
                  {!displayList[1] && <div></div>}
                  {displayList[1] && (
                  <Card className="secondaryCard">
                    <Image src={displayList[1].illustration} alt={displayList[1].name} wrapped />
                    <Card.Content>
                      <Card.Header>{displayList[1].name}</Card.Header>
                      <Card.Description>
                        {displayList[1].description}
                      </Card.Description>
                    </Card.Content>
                  </Card>
                  )}
                </Grid.Column>
                <Grid.Column>
                  <Grid>
                    <Grid.Row columns={2}>
                      <Grid.Column>
                        {!displayList[2] && <div></div>}
                        {displayList[2] && (
                        <Card className="otherCard">
                          <Image src={displayList[2].illustration} alt={displayList[2].name} wrapped />
                          <Card.Content>
                            <Card.Header>{displayList[2].name}</Card.Header>
                            <Card.Description>
                              {displayList[2].description}
                            </Card.Description>
                          </Card.Content>
                        </Card>
                        )}
                      </Grid.Column>
                      <Grid.Column>
                        {!displayList[3] && <div></div>}
                        {displayList[3] && (
                        <Card className="otherCard">
                          <Image src={displayList[3].illustration} alt={displayList[3].name} wrapped />
                          <Card.Content>
                            <Card.Header>{displayList[3].name}</Card.Header>
                            <Card.Description>
                              {displayList[3].description}
                            </Card.Description>
                          </Card.Content>
                        </Card>
                        )}
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                      <Grid.Column>
                        {!displayList[4] && <div></div>}
                        {displayList[4] && (
                        <Card className="otherCard">
                          <Image src={displayList[4].illustration} alt={displayList[4].name} wrapped />
                          <Card.Content>
                            <Card.Header>{displayList[4].name}</Card.Header>
                            <Card.Description>
                              {displayList[4].description}
                            </Card.Description>
                          </Card.Content>
                        </Card>
                        )}
                      </Grid.Column>
                      <Grid.Column>
                        {!displayList[5] && <div></div>}
                        {displayList[5] && (
                        <Card className="otherCard">
                          <Image src={displayList[5].illustration} alt={displayList[5].name} wrapped />
                          <Card.Content>
                            <Card.Header>{displayList[5].name}</Card.Header>
                            <Card.Description>
                              {displayList[5].description}
                            </Card.Description>
                          </Card.Content>
                        </Card>
                        )}
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        )}
      </div>
    );
  }
}

MainList.propTypes = {
  requestComingSoon: PropTypes.func.isRequired,
  load: PropTypes.bool.isRequired,
  gameList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
  count: PropTypes.number.isRequired,
};

// Composant Card

export default MainList;
