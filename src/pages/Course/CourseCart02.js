import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

// 大標題綠色波浪
import greenTitle from '../../data/images/greenTitle.svg';

import CourseCart03 from './CourseCart03';
import './CourseCart.scss';

function CourseCart02() {
  return (
    <>
      <div className="container">
        <div className="row">
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

          {/* 購物車三步驟 */}

          <div className="col-8 m-auto">
            <div className="p-3 border">
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
                    to="/Course/CourseCart03"
                    type="submit"
                    className="btn btn-info mb-3"
                  >
                    送出資料
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseCart02;
