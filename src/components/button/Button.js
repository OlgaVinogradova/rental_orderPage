import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ children, onClick, className, style, disabled, isVisible }) => {
  const classes = classNames(
    'btn',
    'btn__wraper',
    className
  );

  if (!isVisible) {
    return null
  }

  return (
    <div className='btn__wraper'>
      <button
        className={classes}
        onClick={onClick}
        style={style}
        disabled={disabled}
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