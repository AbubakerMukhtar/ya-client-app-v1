import React from 'react';
import Stepper from './Stepper';
import './BusinessIncorporation.css';
import StepperFooter from '../footer/StepperFooter';

const BusinessIncorporation = () => {
  return (
    <>
      <div className="h-full flex flex-col justify-between mt-32">
        <div className="p-28 bg-white rounded-16">
          <h1>Business Incorporation</h1>
          <Stepper />
        </div>
        {/* <StepperFooter /> */}
      </div>
    </>
  );
};

export default BusinessIncorporation;
