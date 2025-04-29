import React from "react";
import './HStepper.css';

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

export default function HStepper({ currentStep, numberOfSteps }) {
  const activeStepStyle = (index) => currentStep === index ? "active" : "";
  const isFinalStep = (index) => index === numberOfSteps - 1;

  return (
    <div className="horizontal-stepper">
      <div className="steps-row">
        {Array.from({ length: numberOfSteps }).map((_, index) => (
          <React.Fragment key={index}>
            <div className={`step ${activeStepStyle(index)}`}>
              {currentStep === index && <div className="inner-dot"></div>}
            </div>
            {isFinalStep(index) ? null : <div className='step-line'></div>}
          </React.Fragment>
        ))}
      </div>
      <div className="labels-row">
        {Array.from({ length: numberOfSteps }).map((_, index) => (
          <span key={index} className={`step-label ${activeStepStyle(index)}`}>{steps[index]}</span>
        ))}
      </div>
    </div>
  );
}
