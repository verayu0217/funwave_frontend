import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button, InputGroup } from 'react-bootstrap';
import { AuthContext } from '../../../context/auth';

import './Cart.scss';
import greenTitle from '../../../data/images/greenTitle.svg';

function ProductCart02() {
  const { auth, setAuth } = useState();
  console.log(auth);

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <div className="container">
        {/* 購物車三步驟 */}
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
                確認清單 & 付款及配送方式
                <br />
                Cart & Check out
              </div>
            </div>
            <div className="d-flex justify-content-evenly align-items-center shadow py-2 cartStepsSigns cartStepsSignsOrange borderRadius">
              <div className="fs-1 w-25 text-center">02</div>
              <div className="w-75">
                填寫訂購資料
                <br />
                Shipping & Billing Info
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
          <div className="row d-flex justify-content-center">
            <div className="col-8 m-0 p-0 shadow borderRadius">
              <div className="p-4 border-bottom text-center">
                <h1>訂購資訊</h1>
              </div>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                {/* 訂購人資訊 */}
                <div className="px-5 py-4">
                  <div className="d-flex justify-content-between">
                    <h3>訂購人資訊</h3>
                    <div className="form-check">
                      <input
                        className="form-check-input mt-2"
                        type="checkbox"
                        value=""
                        id="check"
                      />
                      <label
                        className="form-check-label mt-2 fs-6"
                        htmlFor="check"
                      >
                        同步更新我的會員資料
                      </label>
                    </div>
                  </div>

                  {/* 姓名 */}
                  <Form.Group
                    controlId="validationCustomUsername"
                    className="mb-3"
                  >
                    <Form.Label>姓名</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputUsername"
                        defaultValue="嚴以軒"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        email
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group
                    controlId="validationCustomUsername"
                    className="mb-3"
                  >
                    <Form.Label>E-mail (帳號)</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        aria-describedby="inputEmail"
                        defaultValue="gp@gmail.com"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        請填入正確格式的E-mail
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  {/* 手機號碼 */}
                  <Form.Group
                    controlId="validationCustomUsername"
                    className="mb-3"
                  >
                    {/* 要驗證號碼跟長度！！！！！！！ */}
                    <Form.Label>手機號碼</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="text"
                        placeholder="Phone"
                        aria-describedby="inputPhone"
                        defaultValue="0900000000"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        請填寫手機號碼
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  {/* 地址 */}
                  <div className="row mb-3">
                    <div className="col-4">
                      <Form.Label>縣市</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>請選擇縣市</option>
                        <option value="1">台北市</option>
                        <option value="2">新北市</option>
                        <option value="3">桃園市</option>
                        <option value="4">台中市</option>
                        <option value="5">台南市</option>
                        <option value="6">高雄市</option>
                        <option value="7">基隆市</option>
                        <option value="8">新竹市</option>
                        <option value="9">新竹縣</option>
                        <option value="10">彰化縣</option>
                        <option value="11">苗栗縣</option>
                        <option value="12">南投縣</option>
                        <option value="13">雲林縣</option>
                        <option value="14">嘉義市</option>
                        <option value="15">嘉義縣</option>
                        <option value="16">屏東縣</option>
                        <option value="17">台東縣</option>
                        <option value="18">花蓮縣</option>
                        <option value="19">宜蘭縣</option>
                      </Form.Select>
                    </div>
                    <div className="col-8">
                      <Form.Group controlId="validationCustom03">
                        <Form.Label>詳細地址</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Address"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          請填寫詳細地址
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                  </div>
                </div>
                {/* 收件人資訊 */}
                <div className="px-5 py-4 border-top">
                  <div className="d-flex justify-content-between">
                    <h3>收件人資訊</h3>
                    <div className="form-check">
                      <input
                        className="form-check-input mt-2"
                        type="checkbox"
                        value=""
                        id="check"
                      />
                      <label
                        className="form-check-label mt-2 fs-6"
                        htmlFor="check"
                      >
                        同訂購人資訊
                      </label>
                    </div>
                  </div>
                  {/* 姓名 */}
                  <Form.Group
                    controlId="validationCustomUsername"
                    className="mb-3"
                  >
                    <Form.Label>姓名</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputUsername"
                        defaultValue="嚴以軒"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        email
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  {/* <Form.Group controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="First name"
                      defaultValue="p@gmail.com"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group> */}
                  {/* 信箱 */}
                  <Form.Group
                    controlId="validationCustomUsername"
                    className="mb-3"
                  >
                    <Form.Label>E-mail (帳號)</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        aria-describedby="inputEmail"
                        defaultValue="gp@gmail.com"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        請填入正確格式的E-mail
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  {/* 手機號碼 */}
                  <Form.Group
                    controlId="validationCustomUsername"
                    className="mb-3"
                  >
                    {/* 要驗證號碼跟長度！！！！！！！ */}
                    <Form.Label>手機號碼</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="text"
                        placeholder="Phone"
                        aria-describedby="inputPhone"
                        defaultValue="0900000000"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        請填寫手機號碼
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </div>
                {/* 配送資訊 */}
                <div className="px-5 py-4 border-top">
                  <div className="d-flex justify-content-between">
                    <h3>配送資訊</h3>
                    <div className="form-check">
                      <input
                        className="form-check-input mt-2"
                        type="checkbox"
                        value=""
                        id="check"
                      />
                      <label
                        className="form-check-label mt-2 fs-6"
                        htmlFor="check"
                      >
                        同訂購人地址
                      </label>
                    </div>
                  </div>
                  {/* 地址 */}
                  <div className="row mb-3">
                    <div className="col-4">
                      <Form.Label>縣市</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>請選擇縣市</option>
                        <option value="1">台北市</option>
                        <option value="2">新北市</option>
                        <option value="3">桃園市</option>
                        <option value="4">台中市</option>
                        <option value="5">台南市</option>
                        <option value="6">高雄市</option>
                        <option value="7">基隆市</option>
                        <option value="8">新竹市</option>
                        <option value="9">新竹縣</option>
                        <option value="10">彰化縣</option>
                        <option value="11">苗栗縣</option>
                        <option value="12">南投縣</option>
                        <option value="13">雲林縣</option>
                        <option value="14">嘉義市</option>
                        <option value="15">嘉義縣</option>
                        <option value="16">屏東縣</option>
                        <option value="17">台東縣</option>
                        <option value="18">花蓮縣</option>
                        <option value="19">宜蘭縣</option>
                      </Form.Select>
                    </div>
                    <div className="col-8">
                      <Form.Group controlId="validationCustom03">
                        <Form.Label>詳細地址</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Address"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          請填寫詳細地址
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                  </div>
                </div>
                {/* 發票資訊 */}
                <div className="px-5 py-4 border-top border-bottom">
                  <h3>發票資訊</h3>
                  <div className="d-flex">
                    <div className="form-check me-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        // checked
                        // onChange={}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        捐贈發票
                      </label>
                    </div>
                    <div className="form-check me-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        // checked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        紙本發票
                      </label>
                    </div>
                    <div className="form-check me-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        電子發票（手機載具）
                      </label>
                    </div>
                    <div className="form-check me-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        // checked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        公司用發票（三聯式）
                      </label>
                    </div>
                  </div>
                </div>
                <div className="px-5 py-4">
                  {/* 同意接受服務條款及隱私權政策 */}
                  <Form.Group className="mb-3">
                    <Form.Check
                      required
                      label="我同意接受服務條款及隱私權政策。"
                      feedback="請勾選同意接受服務條款及隱私權政策。"
                      feedbackType="invalid"
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-evenly mt-4">
                    <button className="btn btn-secondary text-white">
                      上一步
                    </button>
                    <Button type="submit">完成訂購！</Button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default ProductCart02;
