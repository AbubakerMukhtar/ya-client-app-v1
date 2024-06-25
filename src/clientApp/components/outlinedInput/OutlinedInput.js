import React from "react";
import "./OutlinedInput.css";

const OutlinedInput = (props) => {
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

export default OutlinedInput;
