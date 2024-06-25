import React, { useState } from 'react';
import './StepperFooter.css';
import theme from '../../assets/theme';

const { icons } = theme;

const StepperFooter = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleGetStartedClick = () => {
    // Handle "Let's Get Started" button click
  };

  const handleBackClick = () => {
    // Handle "Back" button click
  };

  const handleNextClick = () => {
    // Handle "Next" button click
  };

  return (
    <div className="stepper-footer">
      {activeStep === 1 ? (
        <div className="footer-button-centered">
          <button onClick={handleGetStartedClick} className="footer-get-started-button active">
            Let's Get Started <img src={icons.nextArrow} alt="toggle" />
          </button>
        </div>
      ) : (
        <div className="footer-buttons-space-between">
          <button onClick={handleBackClick} className="footer-back-button">
            <img src={icons.backArrow} alt="toggle" /> Back
          </button>
          <button onClick={handleNextClick} className="footer-next-button active">
            Next <img src={icons.nextArrow} alt="toggle" />
          </button>
        </div>
      )}
    </div>
  );
};

export default StepperFooter;
