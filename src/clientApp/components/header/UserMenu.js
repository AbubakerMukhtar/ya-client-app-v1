import { ListItemIcon, ListItemText, MenuItem, Popover } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import theme from '../../assets/theme';
import './UserMenu.css';

const { icons } = theme;

function UserMenu() {
  const [userMenu, setUserMenu] = useState(null);

  const userMenuClick = (event) => {
    setUserMenu(event.currentTarget);
  };

  const userMenuClose = () => {
    localStorage.removeItem('selectedCompany');
    localStorage.removeItem('isExistingCompany');
    localStorage.removeItem('activeStep');
    localStorage.removeItem('currentIncorporationPath');
    setUserMenu(null);
  };

  return (
    <>
      <div className="user-menu-container">
        <button className="icon-button">
          <div className="icon-container">
            <img src={icons.search} alt="search" />
          </div>
        </button>
        <button className="icon-button">
          <div className="icon-container">
            <img src={icons.bell} alt="notification" />
          </div>
        </button>
        <button className="user-button" onClick={userMenuClick}>
          <div className="user-info">
            <div className="avatar-container">
              <span className="avatar-initial">A</span>
            </div>
            <span className="user-name">AbuBaker Mukhtar</span>
            <img src={icons.downArrow} alt="open" className="down-arrow" />
          </div>
        </button>
      </div>
      <Popover
        open={Boolean(userMenu)}
        anchorEl={userMenu}
        onClose={userMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        classes={{
          paper: 'popover-paper'
        }}
      >
        <MenuItem component={NavLink} to="apps/businessIncorporation/ProfileSettings">
          <ListItemIcon className="menu-item-icon">
            {/* <FuseSvgIcon>heroicons-outline:cog</FuseSvgIcon> */}
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </MenuItem>
        <MenuItem
          component={NavLink}
          to="/sign-out"
          onClick={() => {
            userMenuClose();
          }}
        >
          <ListItemIcon className="menu-item-icon">
            {/* <FuseSvgIcon>heroicons-outline:logout</FuseSvgIcon> */}
          </ListItemIcon>
          <ListItemText primary="Sign out" />
        </MenuItem>
      </Popover>
    </>
  );
}

export default UserMenu;
