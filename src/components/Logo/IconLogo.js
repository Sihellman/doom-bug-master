import React from 'react';
import PropTypes from 'prop-types';

// prettier-ignore
const IconLogo = props => {
  const { className, format, ...rest } = props;

  if (format === 'desktop') {
    return (
        <img src="/static/icons/logo.svg" style={{width:'60px'}}/>
    );
  }

  return (
      <img src="/static/icons/logo.svg" style={{width:'80px'}}/>
  );
};

const { string } = PropTypes;

IconLogo.defaultProps = {
  className: null,
};

IconLogo.propTypes = {
  className: string,
};

export default IconLogo;
