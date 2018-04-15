import React from 'react';
import PropTypes from 'prop-types';

const Link = ({onClick, className, href, children}) => {
  return (
    <a href={href} onClick={onClick} className={className}>
      {children}
    </a>
  );
}

Link.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  href: PropTypes.string
};

Link.defaultProps = {
  onClick: () => {},
  className: "",
  href: ""
};

export default Link;
