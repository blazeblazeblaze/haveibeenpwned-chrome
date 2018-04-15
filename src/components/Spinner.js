import React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({src}) => {
  return(
    <div className='spinner-wrapper'>
      <img src={src} className="spinner" alt="spinner" />
    </div>
  )
};

Spinner.propTypes = {
  src: PropTypes.string.isRequired
};

Spinner.defaultProps = {
  src: 'src.png'
};

export default Spinner;
