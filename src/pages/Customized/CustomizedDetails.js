import React, { useEffect, useState } from 'react';
import StepList from './StepList';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

function CustomizedDetails() {
  const [surfingBoard, setSurfingBoard] = useState({
    front: 'white',
    back: 'white',
    frontpattern: '',
    backpattern: '',
    size: 1,
  });

  const [step, setStep] = useState({
    step1: true,
    step2: '',
    step3: '',
  });

  return (
    <>
      <div className="recommendBg">
        <StepList step={step} setStep={setStep} />
        {step.step1 && (
          <Step1
            step={step}
            setStep={setStep}
            surfingBoard={surfingBoard}
            setSurfingBoard={setSurfingBoard}
          />
        )}
        {step.step2 && (
          <Step2
            step={step}
            setStep={setStep}
            surfingBoard={surfingBoard}
            setSurfingBoard={setSurfingBoard}
          />
        )}
        {step.step3 && <Step3 step={step} setStep={setStep} />}
      </div>
    </>
  );
}

export default CustomizedDetails;
