import React from 'react';
import PropTypes from 'prop-types';
import RestartLink from './RestartLink';

const ErrorPage = ({errors, onStartOver}) => {

  return(
    <div>
      <span className="App-intro">
        <p>
          Oh no! It looks like you've encountered errors.
          {errors.map((error)=> <span key={error}>{error}</span>)}
        </p>
        <RestartLink onStartOver={onStartOver} />
      </span>
    </div>
  )
}

ErrorPage.propTypes = {
  errors: PropTypes.array.isRequired,
  onStartOver: PropTypes.func.isRequired
};

ErrorPage.defaultProps = {
  errors: []
};

export default ErrorPage;
