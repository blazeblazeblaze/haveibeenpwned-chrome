import React from 'react';
import PropTypes from 'prop-types';

import ResultPage  from './ResultPage';
import EmailForm from './EmailForm';

const StatusPage = ({email, isPwned, onSubmit, onStartOver}) => {
  return(
    <div>
      {email && <ResultPage email={email} isPwned={isPwned} onStartOver={onStartOver} />}
      {!email && <EmailForm onSubmit={onSubmit} />}
    </div>
  )
}

StatusPage.propTypes = {
  isPwned: PropTypes.bool,
  email: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onStartOver: PropTypes.func.isRequired
};

export default StatusPage;
