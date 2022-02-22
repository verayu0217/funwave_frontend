import React, { useEffect, useState } from 'react';
import CourseStep from './components/CourseStep';
import CourseCart01 from './CourseCart01';
import CourseCart02 from './CourseCart02';
import CourseCart03 from './CourseCart03';
import greenTitle from '../../data/images/greenTitle.svg';

import './CourseCart.scss';
import './Courses.scss';

// 購物車父層 放三步驟元件 再放三步驟頁面
function CourseCart(props) {
  const [step, setStep] = useState({
    step1: true,
    step2: '',
    step3: '',
  });
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-10 col-lg-10 m-auto">
            {/* 標題 */}
            <div className="text-secondary fw-bold my-5 h1 text-center ">
              <img
                src={greenTitle}
                className="greenTitle me-3"
                alt="greenTitle"
                height="24px"
                weight="64px"
              />
              衝浪課程購物車
            </div>
            <CourseStep step={step} setStep={setStep} />
            {step.step1 && <CourseCart01 step={step} setStep={setStep} />}
            {step.step2 && <CourseCart02 step={step} setStep={setStep} />}
            {step.step3 && <CourseCart03 step={step} setStep={setStep} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseCart;
