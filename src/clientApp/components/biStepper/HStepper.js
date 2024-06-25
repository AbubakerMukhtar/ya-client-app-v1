// // import * as React from 'react';
// // import Stepper from '@mui/material/Stepper';
// // import Step from '@mui/material/Step';
// // import StepLabel from '@mui/material/StepLabel';
// import './HStepper.css';
// import Step from './Step';

import React from "react";

// const steps = [
//   'Welcome',
//   'Corporate Information',
//   'Company Questionnaire',
//   'Company Name',
//   'Shareholder',
//   'Director',
//   'Officer',
//   'Summary'
// ];

// const HStepper = ({activeStep}) => {
//   return (
//     <div className="horizontal-stepper">
//         {steps.map((label) => (
//           <Step key={label}>
//             {/* <StepLabel>{label}</StepLabel> */}
//           </Step>
//         ))}
//     </div>
//   );
// };

// export default HStepper;

//Stepper.js
export default function HStepper ({currentStep, numberOfSteps}) {
  const activeColor = (index) => currentStep === index ? "bg-blue-500" : "bg-gray-300"
  const isFinalStep = (index) => index === numberOfSteps - 1
 
  return (
    <div className="flex items-center">
      {Array.from({length: numberOfSteps}).map((_, index) => (
        <React.Fragment key={index}>
          <div className={`w-6 h-6 rounded-full ${activeColor(index)}`}></div>
          {isFinalStep(index) ? null : <div className={`w-12 h-1 ${activeColor(index)}`}></div>}
        </React.Fragment>
      ))}
    </div>
  )
}
