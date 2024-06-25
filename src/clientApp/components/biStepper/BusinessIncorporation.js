

import React, { useState } from 'react';
import './BusinessIncorporation.css'
import HStepper from './HStepper';
import StepperFooter from './StepperFooter';
import Shareholder from "../../components/shareholder/Shareholder";
import Summary from "../../components/summary/Summary";
import Welcome from "../../components/welcome/Welcome";
import CorporateInformation from "../../components/corporateInformation/CorporateInformation";

const BusinessIncorporation = () => {
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

  const [activeStep, setActiveStep] = useState(0);

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
    <div>
      <HStepper currentStep={activeStep} numberOfSteps={steps.length} />
      <div className="render-component">
      <StepperFooter className="mt-32"
        activeStep={activeStep}
        steps={steps}
        onNext={handleNext}
        onBack={handleBack}
        onGetStarted={handleGetStarted}
      />
      <Welcome />
          <br />
          <CorporateInformation />
          <br />
          <Shareholder />
          <br />
          <Summary />
      </div>
      
    </div>
  );
};

export default BusinessIncorporation;

