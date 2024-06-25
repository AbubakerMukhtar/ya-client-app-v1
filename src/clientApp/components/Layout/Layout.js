import React, { useState } from 'react';
import Header from '../header/Header';
import LeftSidebar from '../sideNav/LeftSidebar';
import './Layout.css';
import StepperFooter from '../footer/StepperFooter';

function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`layout ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <LeftSidebar isSidebarOpen={isSidebarOpen} />
      <div className="layout-main">
        <header>
          <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        </header>
        <main className="main-content">{children}</main>
        <footer>
          <StepperFooter />
        </footer>
      </div>
    </div>
  );
}

export default Layout;
