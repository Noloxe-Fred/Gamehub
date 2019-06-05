import React from 'react';
import PropTypes from 'prop-types';

const GameComments = datas => (
  <div>Comments</div>
);

GameComments.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default GameComments;
