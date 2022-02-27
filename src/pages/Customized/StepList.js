import React from 'react';

function StepList(props) {
  const { step } = props;
  return (
    <>
      <header className="py-5 px-5">
        <div className="row justify-content-center">
          <div
            className={
              step.step1
                ? 'bg-primary col-sm-12 col-md-3 m-2 d-flex align-items-center shadow py-2 cartStepsSigns borderRadius whiteBg'
                : 'col-sm-12 col-md-3 m-2 d-flex align-items-center shadow py-2 cartStepsSigns borderRadius whiteBg'
            }
          >
            <div className="fs-1 w-25 text-center">01</div>
            <div className="w-75">
              選擇衝浪板外型
              <br />
              Choose a surfboard shape
            </div>
          </div>
          <div
            className={
              step.step2
                ? 'bg-primary col-sm-12 col-md-3 m-2 d-flex align-items-center shadow py-2 cartStepsSigns borderRadius whiteBg'
                : 'col-sm-12 col-md-3 m-2 d-flex align-items-center shadow py-2 cartStepsSigns borderRadius whiteBg'
            }
          >
            <div className="fs-1 w-25 text-center">02</div>
            <div className="w-75">
              選擇顏色及圖案
              <br />
              Choose color & pattern
            </div>
          </div>
          <div
            className={
              step.step3
                ? 'bg-primary col-sm-12 col-md-3 m-2  d-flex align-items-center shadow py-2 cartStepsSigns borderRadius whiteBg'
                : 'col-sm-12 col-md-3 m-2 d-flex align-items-center shadow py-2 cartStepsSigns borderRadius whiteBg'
            }
          >
            <div className="fs-1 w-25 text-center">03</div>
            <div className="w-75">
              加入購物車
              <br />
              Add to shopping cart
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default StepList;
