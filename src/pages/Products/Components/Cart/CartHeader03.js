// CartHeader01.js 內容說明：購物車三步驟的進度條

import React from 'react';
import greenTitle from '../../../../data/images/greenTitle.svg';

function ProductAddCart(props) {
  // 清除購物車的localStorage
  localStorage.removeItem('productCart');
  localStorage.removeItem('productCartDisplay');

  return (
    <>
      <header className="rwdMargin5 py-2 rwdPaddingX5">
        <div className="text-secondary fw-bold h1 text-center mb-5">
          <img
            src={greenTitle}
            className="greenTitle me-3"
            alt="greenTitle"
            height="24px"
            width="64px"
          />
          衝浪商品購物車
        </div>
        <div className="d-flex justify-content-evenly">
          <div className="d-flex align-items-center shadow py-2 cartStepsSigns borderRadius">
            <div className="fs-1 w-25 text-center">01</div>
            <div className="w-75">
              確認清單 & 付款及配送方式
              <br />
              Cart & Check out
            </div>
          </div>
          <div className="d-flex justify-content-evenly align-items-center shadow py-2 cartStepsSigns borderRadius">
            <div className="fs-1 w-25 text-center">02</div>
            <div className="w-75">
              填寫訂購資料
              <br />
              Shipping & Billing Info
            </div>
          </div>
          <div className="d-flex justify-content-evenly align-items-center shadow py-2 cartStepsSigns cartStepsSignsOrange borderRadius">
            <div className="fs-1 w-25 text-center">03</div>
            <div className="w-75">
              購物完成！
              <br />
              Order completed
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default ProductAddCart;
