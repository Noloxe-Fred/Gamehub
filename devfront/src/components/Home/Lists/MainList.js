import React, { Component } from 'react';
import Proptypes from 'prop-types'
import { Loader, Grid, Image } from 'semantic-ui-react';

import './lists.scss';

class MainList extends Component {
  componentDidMount() {
    this.props.requestComingSoon();
  }

  render() {
    const { load, gameList } = this.props;


    return (
      <div id="main-list">
        {load && <Loader active inline='centered' />}
        {!load && (
          <div id="list">
            <Grid>
              <Grid.Row columns={1}>
                <Grid.Column>
                  <Image src={gameList[0].illustration} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Image src={gameList[0].illustration} />
                </Grid.Column>
                <Grid.Column>
                  <Grid>
                    <Grid.Row columns={2}>
                      <Grid.Column>
                        <Image src={gameList[0].illustration} />
                      </Grid.Column>
                      <Grid.Column>
                        <Image src={gameList[0].illustration} />
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                      <Grid.Column>
                        <Image src={gameList[0].illustration} />
                      </Grid.Column>
                      <Grid.Column>
                        <Image src={gameList[0].illustration} />
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
