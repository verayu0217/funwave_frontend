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
    size: '',
  });

  const [step, setStep] = useState({
    step1: true,
    step2: '',
    step3: '',
  });
  // const [step1, setStep1] = useState(false);
  // const [step2, setStep2] = useState(false);
  // const [step3, setStep3] = useState(true);
  // {(()=>{if (step1) {
  //   return <step1 />;
  // } else if (step2) {
  //   return <step2 />;
  // } else {
  //   return <step3 />;
  // })()}

  return (
    <>
      <div className="recommendBg">
        <StepList />
        {(() => {
          if (step.step1 === true) {
            return <Step1 step={step} setStep={setStep} />;
          } else if (step.step2 === true) {
            return <Step2 step={step} setStep={setStep} />;
          } else {
            return <Step3 step={step} setStep={setStep} />;
          }
        })()}
      </div>
    </>
  );
}

export default CustomizedDetails;
