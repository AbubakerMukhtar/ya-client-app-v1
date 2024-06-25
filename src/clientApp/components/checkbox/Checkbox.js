import React from "react";
import "./Checkbox.css";

const Checkbox = (props) => {
  return (
    <>
      <div className="checkbox-field">
        <input
          className="checkbox"
          type={props.type}
          id={props.id}
          name={props.name}
        />
        <label className="checkbox-label" for={props.name}>
          {props.label}
        </label>
      </div>
    </>
  );
};

export default Checkbox;
