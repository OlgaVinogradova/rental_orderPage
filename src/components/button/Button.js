import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ children, onClick, className, style }) => {
  const classes = classNames(
    'btn',
    'btn__wraper',
    className
  );
  return (
    <div className='btn__wraper'>
      <button
        className={classes}
        onClick={onClick}
        style={style}
      >
        {children}
      </button>
    </div>
  );
};
Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.shape({
    background: PropTypes.string,
  })
};

Button.defaultProps = {
  children: 'default',
  onClick: () => { },
  className: '',
};
export default Button;