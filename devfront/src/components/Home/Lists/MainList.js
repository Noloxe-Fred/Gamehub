import React, { Component } from 'react';
import Proptypes from 'prop-types'
import { Loader, Grid, Image, Icon, Segment, Placeholder  } from 'semantic-ui-react';

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
                    <Image src={displayList[0].illustration} />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    {displayList[1] ? (
                        <Image src={displayList[1].illustration} />
                    )
                      : <div />}
                  </Grid.Column>
                  <Grid.Column>
                    <Grid>
                      <Grid.Row columns={2}>
                        <Grid.Column>
                          {displayList[2] ? (
                              <Image src={displayList[2].illustration} />
                          )
                            : <div />}
                        </Grid.Column>
                        <Grid.Column>
                          {displayList[3] ? (
                              <Image src={displayList[3].illustration} />
                          )
                            : <div />}
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row columns={2}>
                        <Grid.Column>
                          {displayList[4] ? (
                              <Image src={displayList[4].illustration} />
                          )
                            : <div />}
                        </Grid.Column>
                        <Grid.Column>
                          {displayList[5] ? (
                              <Image src={displayList[5].illustration} />
                          )
                            : <div />}
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            {/* {gameList.map(game => (
              <div id={game.name} className="game" style={{ backgroundImage: `url(${game.illustration})`, backgroundSize: 'cover' }}>
                <p>{game.name}</p>
              </div>
            ))} */}
          </div>
        )}
      </div>
    );
  }
}

export default MainList;
