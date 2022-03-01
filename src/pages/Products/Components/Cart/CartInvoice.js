// CartInvoice.js 內容說明：ProductCart02.js中的發票區

import React from 'react';

function CartInvoice(props) {
  return (
    <>
      {/* 發票資訊 */}
      <div className="px-5 py-4 border-top border-bottom">
        <h3>發票資訊</h3>
        <div className="d-flex">
          <div className="form-check me-4">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="radio1"
              // checked
              // onChange={}
            />
            <label className="form-check-label" htmlFor="radio1">
              捐贈發票
            </label>
          </div>
          <div className="form-check me-4">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="radio2"
              // checked
            />
            <label className="form-check-label" htmlFor="radio2">
              紙本發票
            </label>
          </div>
          <div className="form-check me-4">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="radio3"
            />
            <label className="form-check-label" htmlFor="radio3">
              電子發票（手機載具）
            </label>
          </div>
          <div className="form-check me-4">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="radio4"
              // checked
            />
            <label className="form-check-label" htmlFor="radio4">
              公司用發票（三聯式）
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartInvoice;
