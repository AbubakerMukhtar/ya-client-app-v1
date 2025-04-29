import React from 'react';
import './StepperFooter.css';
import theme from '../../assets/theme';

const { icons } = theme;

const StepperFooter = ({ activeStep = 0, steps = [], onNext, onBack, onGetStarted }) => {
  return (
    <div className="stepper-footer">
      {activeStep === steps.length - 1 ? (
        <div className="footer-button-centered">
          <button onClick={onGetStarted} className="footer-get-started-button active">
            Let's Get Started <img src={icons.nextArrow} alt="toggle" />
          </button>
        </div>
      ) : (
        <div className="footer-buttons-space-between">
          <button onClick={onBack} className={`footer-back-button ${activeStep === 0 ? '' : 'active'}`}>
            <img src={icons.backArrow} alt="toggle" /> Back
          </button>
          <button onClick={onNext} className="footer-next-button active">
            Next <img src={icons.nextArrow} alt="toggle" />
          </button>
        </div>
      )}
    </div>
  );
};

export default StepperFooter;
