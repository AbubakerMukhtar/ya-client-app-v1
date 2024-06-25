import React from 'react';
import './PersonCard.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const PersonCard = (props) => {
  return (
    <>
      <div className="card">
        <div className="moreicon">
          <MoreVertIcon className="moreVertIcon" />
        </div>
        <div className="card-detail">
          <img className="person-pic" src={props.person} width="" height="" alt="person" />
          <h5 className="person-name">{props.name}</h5>
          <p className="person-detail">
            {props.email}
            <br />
            {props.phone}
            <br />
            {props.resident}
          </p>
          <p className="person-address">{props.address}</p>
        </div>
      </div>
    </>
  );
};

export default PersonCard;
