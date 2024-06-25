import React from 'react';
import theme from '../../assets/theme';
import './Stepper.css';

const { icons, images, fonts } = theme;

const Stepper = () => {
  return (
    <div>
      <div className="horzontal-stepper">
      <h1 className="text-3xl text-red-500 font-bold underline">
      Hello world!
    </h1>
      </div>
    </div>
  );
};

export default Stepper;
