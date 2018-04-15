import React from 'react';
import PropTypes from 'prop-types';

import Link from './Link';

const RestartLink = ({onStartOver}) => {
  return (
    <Link onClick={onStartOver} className="pure-button pure-button-primary button-small">
      Try with a different email
    </Link>
  );
}

RestartLink.propTypes = {
  onStartOver: PropTypes.func.isRequired
};

export default RestartLink;
