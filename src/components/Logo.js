import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';

const Logo = ({onStartOver}) => {
  return (
    <Link className="logotype" onClick={onStartOver}>
      <span className="logo-wrapper">';--</span>
    </Link>
  );
}

Logo.propTypes = {
  onStartOver: PropTypes.func.isRequired
};

export default Logo;
