import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <>
    <header>
      <h1>Borja Canseco</h1>
    </header>
    <main className="six columns offset-by-three">
      {children}
    </main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
