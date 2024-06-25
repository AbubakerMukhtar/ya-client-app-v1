import React, { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import theme from '../../assets/theme';
import './CompaniesDropdown.css';

const { icons } = theme;

function CompaniesDropdown() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <button
        className="companies-dropdown-button"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <span className="companies-dropdown-text">
          <img src={icons.officeBuilding} alt="corporate" className="companies-dropdown-icon" />
          Ex Business Incorporation
        </span>
        <img src={icons.downArrow} alt="open" className="companies-dropdown-arrow" />
      </button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Item 1</MenuItem>
        <MenuItem onClick={handleClose}>Item 2</MenuItem>
        <MenuItem onClick={handleClose}>Item 3</MenuItem>
      </Menu>
    </>
  );
}

export default CompaniesDropdown;
