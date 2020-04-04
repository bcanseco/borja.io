import PropTypes from 'prop-types';
import React from 'react';

const Details = ({ children }) => (
  <div className="details">
    {children}
  </div>
);

Details.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Details;
