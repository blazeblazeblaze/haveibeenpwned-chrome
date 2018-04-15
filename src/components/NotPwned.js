import React from 'react';
import RestartLink from './RestartLink';

const NotPwned = ({onStartOver}) => {
  return (
    <div>
      <p>
        <strong>Happy days!</strong> It looks like you've never been pwned!
      </p>
      <RestartLink onStartOver={onStartOver} />
    </div>
  );
}

export default NotPwned;
