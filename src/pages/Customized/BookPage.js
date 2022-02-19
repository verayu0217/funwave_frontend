import React, { useState } from 'react';
import StepList from './StepList';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

function BookPage() {
  return (
    <>
      <StepList />
      {/* <Step1 /> */}
      <Step2 />
      {/* <Step3 /> */}
    </>
  );
}

export default BookPage;
