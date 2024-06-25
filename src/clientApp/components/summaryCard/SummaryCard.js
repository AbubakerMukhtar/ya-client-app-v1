import React from 'react';
import './SummaryCard.css';

const SummaryCard = ({ companyTitle, children }) => {
  return (
    <>
      <div className="summary-card">
        <div className="card-title">
          <h5>{companyTitle}</h5>
        </div>
        <div className="company-detail">{children}</div>
      </div>
    </>
  );
};

export default SummaryCard;
