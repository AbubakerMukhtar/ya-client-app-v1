import React from 'react';
import './Summary.css';
import SummaryHeader from '../summaryHeader/SummaryHeader';
import SummaryCard from '../summaryCard/SummaryCard';

const Summary = (props) => {
  return (
    <>
      <div>
        <SummaryHeader
          title="Summary"
          description="Please take a moment to view and verify the information below."
        />
        <div className="summary-content">
          <SummaryCard companyTitle="Numbered">
            <div className="company-detail">
              <p>
                <span>Company Name</span>
              </p>
              <p>
                Jurisdiction: <span> NOT SURE </span>
              </p>
              <p>
                Province: <span> NS </span>
              </p>
              <p>
                Main Business: <span> 123456789 </span>
              </p>
              <p>
                Address: <span> D1 Johar Town, 346, Lahore, NS, Canada </span>
              </p>
            </div>
          </SummaryCard>
          <SummaryCard companyTitle="Directors/Shareholder"></SummaryCard>
        </div>
      </div>
    </>
  );
};

export default Summary;
