import React from 'react';

// 購物車三步驟
function CourseStep(props) {
  const { step, setStep } = props;
  return (
    <>
      <header className="py-5 px-5">
        <div className="courseCartSteps">
          <div
            className={
              step.step1
                ? 'bg-primary col-sm-12 col-md-3 m-2 d-flex align-items-center shadow py-2 cartStepsSigns borderRadius whiteBg'
                : 'd-flex col-sm-12 col-md-3 m-2 align-items-center shadow py-2 cartStepsSigns borderRadius whiteBg'
            }
          >
            <div className="fs-1 w-25 text-center">01</div>
            <div className="w-75">
              確認課程明細
              <br />
              Cart & Check out
            </div>
          </div>
          <div
            className={
              step.step2
                ? 'bg-primary col-sm-12 col-md-3 m-2 d-flex align-items-center shadow py-2 cartStepsSigns borderRadius whiteBg'
                : 'd-flex col-sm-12 col-md-3 m-2 align-items-center shadow py-2 cartStepsSigns borderRadius whiteBg'
            }
          >
            <div className="fs-1 w-25 text-center">02</div>
            <div className="w-75">
              填寫訂購資料及付款方式
              <br />
              Cart & Check out
            </div>
          </div>
          <div
            className={
              step.step3
                ? 'bg-primary col-sm-12 col-md-3 m-2 d-flex align-items-center shadow py-2 cartStepsSigns borderRadius whiteBg'
                : 'd-flex col-sm-12 col-md-3 m-2 align-items-center shadow py-2 cartStepsSigns borderRadius whiteBg'
            }
          >
            <div className="fs-1 w-25 text-center">03</div>
            <div className="w-75">
              報名完成！
              <br />
              Order completed
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default CourseStep;
