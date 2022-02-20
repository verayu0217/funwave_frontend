import React, { useEffect, useState } from 'react';
import StepList from './StepList';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

function CustomizedDetails() {
  const [surfingBoard, setSurfingBoard] = useState({
    front: 'yellow',
    back: 'green',
    frontpattern: '',
    backpattern: '',
    size: '',
  });
  useEffect(() => {});
  return (
    <>
      <div className="recommendBg">
        <StepList />
        <Step1 surfingBoard={surfingBoard} setSurfingBoard={setSurfingBoard} />
        <Step2 surfingBoard={surfingBoard} setSurfingBoard={setSurfingBoard} />
        <Step3 surfingBoard={surfingBoard} setSurfingBoard={setSurfingBoard} />
      </div>
    </>
  );
}

export default CustomizedDetails;
