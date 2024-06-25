import React from 'react';
import { Add } from '@mui/icons-material';
import UserMenu from './UserMenu';
import './Header.css';
import CompaniesDropdown from './CompaniesDropdown';
import theme from '../../assets/theme';

const { icons } = theme;
const Header = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div className={`header ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <div className="header-left">
        <div className="header-left-border">
          <button onClick={toggleSidebar} className="toggle-button">
            <img src={icons.menu} alt="toggle" />
          </button>
        </div>
        <div className="header-left-border">
          <CompaniesDropdown />
        </div>
        <button className="company-button">
          <Add style={{ fontSize: '20px', marginRight: '2px' }} /> <span>Company</span>
        </button>
      </div>
      <div className="header-right">
        <UserMenu />
      </div>
    </div>
  );
};

export default Header;
