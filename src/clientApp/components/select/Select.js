import React from 'react';
import './Select.css';

const Select = (props) => {
  return (
    <>
      <select
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        className="Select-field"
      >
        {props.placeholder && (
          <option value="" disabled>
            {props.placeholder}
          </option>
        )}
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
