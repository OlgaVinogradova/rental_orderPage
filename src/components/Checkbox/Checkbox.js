import React from 'react'
import PropTypes from 'prop-types';
import './Checkbox.scss';

const Checkbox = ({ children, onChange, value, checked }) => {

  return (
    <label className="custom-checkbox">
      <input className="hidden-checkbox" type="checkbox"
        onChange={onChange}
        checked={checked}
      />
      <div className="checkbox">
        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 48 48"><path fill="#121212" d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
      </div><div className='checkbox__text'>{children}</div>
    </label>
  );
};
Checkbox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  children: 'default',
  onChange: () => { },
};

export default Checkbox
