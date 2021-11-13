import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = ({
  id, className, list, placeholder, label, value, onChange, error, ...attrs
}) => {
  const classes = classNames(
    'input',
    className,
    { error },
  );

  return (
    <div className="inputWrapper">
      <div className="labelsWrapper">
        {label
          && <label className="inputLabel" htmlFor={id}>{label}</label>
        }
        {attrs.required
          && <span className="inputRequired">Required</span>
        }
      </div>
      <input
        name={id}
        id={id}
        list={list}
        placeholder={placeholder}
        onChange={onChange}
        className={classes}
        value={value}
        {...attrs}
      />
      {error
        && <span className="inputError">{error}</span>
      }
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  list: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  onChange: () => { },
  className: '',
  label: '',
  error: '',
  id: ''
};

export default Input;