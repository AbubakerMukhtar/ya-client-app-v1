import React, { useState } from 'react';
import theme from '../../assets/theme';
import './LeftSidebar.css';

const { images, icons } = theme;

function LeftSidebar({ isSidebarOpen }) {
  const [activeLink, setActiveLink] = useState('dashboard'); // Default active link

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className={`left-sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <div className="left-sidebar-header">
        <img src={images.newlogo} alt="logo" className="logo" />
      </div>
      <ul className="left-sidebar-navigation">
        <li className="navigation-item">
          <button
            className={`navigation-link ${activeLink === 'dashboard' ? 'active' : ''}`}
            onClick={() => handleLinkClick('dashboard')}
          >
            <img src={icons.dahsboard} alt="dashboard" />
            Dashboard
          </button>
        </li>
        <li className="navigation-item">
          <button
            className={`navigation-link ${activeLink === 'company' ? 'active' : ''}`}
            onClick={() => handleLinkClick('company')}
          >
            <img src={icons.officeBuilding} alt="company" />
            My Company
          </button>
        </li>
        <li className="navigation-item">
          <button
            className={`navigation-link ${activeLink === 'admin' ? 'active' : ''}`}
            onClick={() => handleLinkClick('admin')}
          >
            <img src={icons.admin} alt="admin" />
            Admin
          </button>
        </li>
        <li className="navigation-item">
          <button
            className={`navigation-link ${activeLink === 'users' ? 'active' : ''}`}
            onClick={() => handleLinkClick('users')}
          >
            <img src={icons.users} alt="users" />
            Users
          </button>
        </li>
      </ul>
      <div className="left-sidebar-video">
        <p>Video Tutorial</p>
        <img src={icons.video} alt="demo" />
      </div>
      <div className="left-sidebar-footer">
        <span>Powered by</span>
        <img src={icons.footerlogo} alt="logo" />
      </div>
    </div>
  );
}

export default LeftSidebar;
