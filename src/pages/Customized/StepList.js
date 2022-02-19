import React, { useState } from 'react';

function StepList(props) {
  return (
    <>
      <header className="py-2 px-5">
        <div className="d-flex justify-content-evenly">
          <div className="d-flex align-items-center shadow py-2 cartStepsSigns borderRadius whiteBg">
            <div className="fs-1 w-25 text-center">01</div>
            <div className="w-75">
              選擇衝浪板外型
              <br />
              Choose a surfboard shape
            </div>
          </div>
          <div className="d-flex justify-content-evenly align-items-center shadow py-2 cartStepsSigns borderRadius whiteBg">
            <div className="fs-1 w-25 text-center">02</div>
            <div className="w-75">
              選擇顏色及圖案
              <br />
              Choose color & pattern
            </div>
          </div>
          <div className="d-flex justify-content-evenly align-items-center shadow py-2 cartStepsSigns borderRadius whiteBg">
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

/*
<Row>
        <Col>
          <div
            className="d-flex chooseBtn justify-content-around py-3 shadow {btnActive ? 'chooseBtnActive':null}"
            onClick={() => {
              setBtnActive(true);
            }}
          >
            <div className="my-auto fs-1">01</div>
            <div>
              選擇衝浪板外型
              <br />
              Choose a surfboard shape
            </div>
          </div>
        </Col>
        <Col>
          <div className="d-flex chooseBtn justify-content-around py-3 shadow">
            <div className="my-auto fs-1">02</div>
            <div>
              選擇顏色及圖案
              <br />
              Choose color & pattern
            </div>
          </div>
        </Col>
        <Col>
          <div className="d-flex chooseBtn justify-content-around py-3 shadow">
            <div className="my-auto fs-1">03</div>
            <div className="me-3">
              加入購物車
              <br />
              Add to shopping cart
            </div>
          </div>
        </Col>
      </Row>
*/
