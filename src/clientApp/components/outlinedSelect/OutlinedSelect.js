import React from "react";
import "./OutlinedSelect.css";

const OutlinedSelect = (props) => {
  return (
    <>
      <select
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        className="Select-field"
        disabled={props.disabled}
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

export default OutlinedSelect;
