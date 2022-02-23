import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import StepList from './StepList';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

function CustomizedDetails() {
  const [surfingBoard, setSurfingBoard] = useState({
    front: '#ffffff',
    back: '#ffffff',
    frontpattern: '',
    backpattern: '',
    size: '',
  });

  const [step, setStep] = useState({
    step1: true,
    step2: '',
    step3: '',
  });

  const [pattern, setPattern] = useState([]);

  useEffect(() => {
    //取後端資料
    let getPattern = async () => {
      let response = await axios.get(`${API_URL}/customized`);
      console.log('responsePattern', response);
      setPattern(response.data);
    };
    getPattern();
  }, []);

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
            pattern={pattern}
            setPattern={setPattern}
          />
        )}
        {step.step3 && (
          <Step3
            step={step}
            setStep={setStep}
            surfingBoard={surfingBoard}
            setSurfingBoard={setSurfingBoard}
            pattern={pattern}
            setPattern={setPattern}
          />
        )}
      </div>
    </>
  );
}

export default CustomizedDetails;
