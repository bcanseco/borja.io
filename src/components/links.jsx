import PropTypes from 'prop-types';
import React from 'react';

const Links = ({ children }) => (
  <div className="links">
    {children}
  </div>
);

Links.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Links;
