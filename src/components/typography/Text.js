import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Text = ({ children, className }) => {
  const classes = classNames(
    'text',
    'text__wraper',
    className
  );

  return (
    <div className={classes}>{children}</div>
  )
};

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  className: PropTypes.string,
  style: PropTypes.shape({
    background: PropTypes.string,
  })
};

export default Text
