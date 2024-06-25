import React, { useState } from 'react';
import './HeaderShDir.css';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '../dialogs/Dialog';

const HeaderShDir = (props) => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };
  return (
    <>
      <Dialog show={isDialogOpen} onClose={closeDialog} />
      <div className="headerShDir-header">
        <div>
          <h3 className="title">{props.title}</h3>
          <p className="description">{props.description} </p>
        </div>
        <button className="add-button" onClick={openDialog}>
          <AddIcon className="add-sh-icon" /> {props.buttonText}
        </button>
      </div>
    </>
  );
};

export default HeaderShDir;
