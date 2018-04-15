import React from 'react';
import PropTypes from 'prop-types';

import Link from './Link';
import RestartLink from './RestartLink';

const Pwned = ({onStartOver, email}) => {
  return (
    <div>
      <p>
        <strong>Oh no!</strong> It looks like {email} has been pwned!
      </p>
      <p>
        <Link
          className='pure-button pure-button-primary button-small'
          href={`https://haveibeenpwned.com/account/${email}`}>
          Read more
        </Link>
        {' '}
        <RestartLink onStartOver={onStartOver}/>
      </p>
    </div>
  );
}

Pwned.propTypes = {
  onStartOver: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired
};

export default Pwned;
