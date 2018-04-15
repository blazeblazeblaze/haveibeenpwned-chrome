import React from 'react';
import NotPwned from './NotPwned.js';
import Pwned from './Pwned.js';
import PropTypes from 'prop-types';

const ResultPage = ({isPwned, onStartOver, email}) => {
  return(
    <div>
      {isPwned && <Pwned onStartOver={onStartOver} email={email} />}
      {!isPwned && <NotPwned onStartOver={onStartOver} />}
    </div>
  );
}

ResultPage.propTypes = {
  isPwned: PropTypes.bool.isRequired,
  onStartOver: PropTypes.func.isRequired,
  email: PropTypes.string
};

ResultPage.defaultProps = {
  email: ''
};

export default ResultPage;
