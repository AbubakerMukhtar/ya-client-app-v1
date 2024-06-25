import React from "react";
import "./Summary.css";
import SummaryHeader from "../summaryHeader/SummaryHeader";
import SummaryCard from "../summaryCard/SummaryCard";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

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
          <SummaryCard companyTitle="Directors/Shareholder">
            <div className="company-holders">
              <div className="company-holder">
                <h6>Abubaker Mukhtar</h6>
                <div className="company-holder-actions">
                  <p>Director</p>
                  <a href="" className="editicon">
                    <EditOutlinedIcon className="editIcon" />
                  </a>
                  <a href="" className="editicon">
                    <CloseOutlinedIcon className="editIcon" />
                  </a>
                </div>
              </div>
              <div className="company-holder">
                <h6>Abubaker Mukhtar</h6>
                <div className="company-holder-actions">
                  <p>Director</p>
                  <a href="" className="editicon">
                    <EditOutlinedIcon className="editIcon" />
                  </a>
                  <a href="" className="editicon">
                    <CloseOutlinedIcon className="editIcon" />
                  </a>
                </div>
              </div>
              <div className="company-holder">
                <h6>Abubaker Mukhtar</h6>
                <div className="company-holder-actions">
                  <p>Director</p>
                  <a href="" className="editicon">
                    <EditOutlinedIcon className="editIcon" />
                  </a>
                  <a href="" className="editicon">
                    <CloseOutlinedIcon className="editIcon" />
                  </a>
                </div>
              </div>
              <div className="company-holder">
                <h6>Abubaker Mukhtar</h6>
                <div className="company-holder-actions">
                  <p>Director</p>
                  <a href="" className="editicon">
                    <EditOutlinedIcon className="editIcon" />
                  </a>
                  <a href="" className="editicon">
                    <CloseOutlinedIcon className="editIcon" />
                  </a>
                </div>
              </div>
            </div>
          </SummaryCard>
        </div>
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
          <SummaryCard companyTitle="Directors/Shareholder">
            <div className="company-holders">
              <div className="company-holder">
                <h6>Abubaker Mukhtar</h6>
                <div className="company-holder-actions">
                  <p>Director</p>
                  <a href="" className="editicon">
                    <EditOutlinedIcon className="editIcon" />
                  </a>
                  <a href="" className="editicon">
                    <CloseOutlinedIcon className="editIcon" />
                  </a>
                </div>
              </div>
              <div className="company-holder">
                <h6>Abubaker Mukhtar</h6>
                <div className="company-holder-actions">
                  <p>Director</p>
                  <a href="" className="editicon">
                    <EditOutlinedIcon className="editIcon" />
                  </a>
                  <a href="" className="editicon">
                    <CloseOutlinedIcon className="editIcon" />
                  </a>
                </div>
              </div>
              <div className="company-holder">
                <h6>Abubaker Mukhtar</h6>
                <div className="company-holder-actions">
                  <p>Director</p>
                  <a href="" className="editicon">
                    <EditOutlinedIcon className="editIcon" />
                  </a>
                  <a href="" className="editicon">
                    <CloseOutlinedIcon className="editIcon" />
                  </a>
                </div>
              </div>
              <div className="company-holder">
                <h6>Abubaker Mukhtar</h6>
                <div className="company-holder-actions">
                  <p>Director</p>
                  <a href="" className="editicon">
                    <EditOutlinedIcon className="editIcon" />
                  </a>
                  <a href="" className="editicon">
                    <CloseOutlinedIcon className="editIcon" />
                  </a>
                </div>
              </div>
            </div>
          </SummaryCard>
        </div>
      </div>
    </>
  );
};

export default Summary;
