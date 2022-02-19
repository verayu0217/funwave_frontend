import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Cart.scss';
import greenTitle from '../../../data/images/greenTitle.svg';

function CartManage() {
  return (
    <>
      <div className="container">
        <header className="m-5 py-2 px-5">
          <div className="text-secondary fw-bold h1 text-center mb-5">
            <img
              src={greenTitle}
              className="greenTitle me-3"
              alt="greenTitle"
              height="24px"
              weight="64px"
            />
            衝浪商品購物車
          </div>
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
          <div className="row mx-5 px-3 borderRadius shadow">
            <h1 className="text-center">請填寫個人資料</h1>
            <form>
              <div className="py-2">
                <p>姓名</p>
                <label for="name" className="visually-hidden">
                  電話
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="姓名"
                />
              </div>

              <div className="py-2">
                <p>身份證字號</p>
                <label for="id" className="visually-hidden"></label>
                <input
                  type="text"
                  className="form-control"
                  id="id"
                  placeholder="身分證字號"
                />
              </div>

              <div className="py-2">
                <p>性別</p>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label className="form-check-label" for="inlineRadio1">
                    男生
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label className="form-check-label" for="inlineRadio1">
                    女生
                  </label>
                </div>
              </div>

              <div className="py-2">
                <p>出生年月日</p>
                <label for="birthday" className="visually-hidden"></label>
                <input
                  type="birthday"
                  className="form-control"
                  id="birthday"
                  placeholder="出生年月日"
                />
              </div>

              <div className="py-2">
                <p>電話</p>
                <label for="phone" className="visually-hidden"></label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="電話"
                />
              </div>
              <div className="py-2">
                <p>監護人</p>
                <label for="guardian" className="visually-hidden"></label>
                <input
                  type="text"
                  className="form-control"
                  id="guardian"
                  placeholder="監護人姓名"
                />
              </div>

              <div className="">
                <Link
                  to="/course/course-cart03"
                  type="submit"
                  className="btn btn-info mb-3"
                >
                  送出資料
                </Link>
              </div>
            </form>
          </div>
        </article>
      </div>
    </>
  );
}

export default CartManage;
