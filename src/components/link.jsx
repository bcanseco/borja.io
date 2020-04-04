/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link as InternalLink } from 'react-router-dom';

const Link = ({
  href, primary, children, ...otherProps
}) => {
  const className = classnames('button', { 'button-primary': primary });

  if (href) {
    return <a className={className} href={href} {...otherProps}>{children}</a>;
  }
  return <InternalLink className={className} {...otherProps}>{children}</InternalLink>;
};

Link.propTypes = {
  href: PropTypes.string,
  primary: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Link.defaultProps = {
  href: undefined,
  primary: false,
};

export default Link;
