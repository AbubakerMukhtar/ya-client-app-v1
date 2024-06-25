import React from 'react';
import './Input.css';

const Input = (props) => {
  return (
    <>
      <input
        className="Input-field"
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default Input;
