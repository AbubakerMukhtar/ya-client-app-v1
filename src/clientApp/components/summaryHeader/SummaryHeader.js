import React, { useState } from 'react';
import './SummaryHeader.css';
const SummaryHeader = (props) => {
  return (
    <>
      <div className="summay-header">
        <div>
          <h3 className="title">{props.title}</h3>
          <p className="description">{props.description} </p>
        </div>
      </div>
    </>
  );
};

export default SummaryHeader;
