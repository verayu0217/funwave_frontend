import React, { useState, useEffect } from 'react';
import { Figure } from 'react-bootstrap';
import './Cart.scss';
import longboard1 from './longboard1.jpg'; // 待釐清圖放src還是放在public

function CartPreOrder() {
  return (
    <>
      <div className="container">
        <header className="m-5 py-2 px-5">
          <div className="d-flex justify-content-evenly">
            <div className="d-flex align-items-center shadow py-2 cartStepsSigns borderRadius">
              <div className="fs-1 w-25 text-center">01</div>
              <div className="w-75">
                確認清單及選擇付款、運送方式
                <br />
                Cart & Check out
              </div>
            </div>
            <div className="d-flex justify-content-evenly align-items-center shadow py-2 cartStepsSigns borderRadius">
              <div className="fs-1 w-25 text-center">02</div>
              <div className="w-75">
                填寫訂購資料
                <br />
                Cart & Check out
              </div>
            </div>
            <div className="d-flex justify-content-evenly align-items-center shadow py-2 cartStepsSigns borderRadius">
              <div className="fs-1 w-25 text-center">03</div>
              <div className="w-75">
                購物完成！
                <br />
                Order completed
              </div>
            </div>
          </div>
        </header>
        <article>
          <div className="row mx-5 px-3 d-flex justify-content-center">
            {/* 購物車 */}
            <div className="col-6 borderRadius p-5 me-4 shadow">
              <h1>購物車</h1>
              <Figure className="mt-4 position-relative">
                <Figure.Image
                  width={75}
                  // height={350}
                  alt="longboard1"
                  src={longboard1}
                />
                <Figure.Caption className="d-flex justify-content-center">
                  <p className="mb-0 mt-2">長板1</p>
                </Figure.Caption>
                <Figure.Caption className="d-flex justify-content-center">
                  <p className="mb-2">長板</p>
                </Figure.Caption>
                <Figure.Caption className="d-flex justify-content-center">
                  <p className="text-dark fw-bold">NT 12,300</p>
                </Figure.Caption>
              </Figure>
            </div>
            {/* 付款及運送方式 */}
            <div className="col-5 borderRadius p-5 ms-4 shadow">
              <h1>付款及運送方式</h1>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default CartPreOrder;
