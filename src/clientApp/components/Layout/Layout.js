import React, { useState } from 'react';
import Header from '../header/Header';
import LeftSidebar from '../sideNav/LeftSidebar';
import './Layout.css';
import StepperFooter from '../biStepper/StepperFooter';

const steps = [
  'Welcome',
  'Corporate Information',
  'Company Questionnaire',
  'Company Name',
  'Shareholder',
  'Director',
  'Officer',
  'Summary'
];

function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeStep, setActiveStep] = useState(0);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(prev => prev - 1);
    }
  };

  const handleGetStarted = () => {
    // Your get started logic here
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
          <StepperFooter
            activeStep={activeStep}
            steps={steps}
            onNext={handleNext}
            onBack={handleBack}
            onGetStarted={handleGetStarted}
          />
        </footer>
      </div>
    </div>
  );
}

export default Layout;
