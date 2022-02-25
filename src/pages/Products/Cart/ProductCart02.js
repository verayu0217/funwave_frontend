import React, { useState, useEffect } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import axios from 'axios';

import { useAuth } from '../../../context/auth';
import './Cart.scss';
import greenTitle from '../../../data/images/greenTitle.svg';
import { API_URL } from '../../../utils/config';

function ProductCart02() {
  // 會員資料傳入useContext
  const { auth, setAuth } = useAuth();
  console.log('auth', auth);

  // 表單元素
  // order-list欄位
  const [order, setOrder] = useState({
    member_id: 0,
    amount: 0,
    payment: 'a',
    payment_status: 'a',
    delivery: 'a',
    receiver: 'a',
    receiverPhone: '0',
    address: 'a',
    convenient_store: 'a',
    status: '訂單處理中',
    order_time: '2021-12-13 14:33:56',
  });
  // 同步會員資料的欄位
  const [memberName, setMemberName] = useState('');
  const [memberEmail, setMemberEmail] = useState(''); // 待useContext添此欄位
  const [memberPhone, setMemberPhone] = useState(''); // 待useContext添此欄位
  const [memberAddress, setMemberAddress] = useState(''); // 待useContext添此欄位
  const [receiverEmail, setReceiverEmail] = useState('');

  const [validated, setValidated] = useState(false);

  // 模擬componentDidMount
  // 將會員資料帶入訂購人資訊
  useEffect(() => {
    // member_id
    let newOrder = { ...order };
    newOrder['member_id'] = auth.id;
    setOrder(newOrder);
    // memberName
    let newMemberName = memberName;
    newMemberName = auth.name;
    setMemberName(newMemberName);
    setMemberEmail('member@gmail.com');
    setMemberPhone('0900000000');
    setMemberAddress('會員地址');
  }, []);
  console.log('memberName', memberName);

  const handleChange = (e) => {
    // 1. 從原本的狀態物件上拷貝出一個新物件
    // 2. 在拷貝的新物件上處理
    // "合併"原有物件值的語法
    // 3. 設定回狀態
    let newOrder = { ...order };
    newOrder[e.target.name] = e.target.value;
    console.log('newOrder', newOrder);
    setOrder(newOrder);
  };

  // react-bootstrap原本的
  // const handleSubmit = (e) => {
  //   const form = e.currentTarget;
  //   if (form.checkValidity() === false) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //   }

  //   setValidated(true);
  // };

  async function handleSubmit(e) {
    // 送出資料前的驗證
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    // 這裡有問題！！！
    e.preventDefault(); // 我自己加的

    // 送出資料存進資料庫
    try {
      let response = await axios.post(`${API_URL}/products/cart`, order);
      console.log(response.data);
    } catch (e) {
      console.error('error', e.response.data);
    }
  }

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
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                method="post"
              >
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
                  {/* 訂購人姓名 */}
                  <Form.Group
                    controlId="validationCustomUsername"
                    className="mb-3"
                  >
                    <Form.Label>姓名</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="text"
                        placeholder="請輸入姓名"
                        aria-describedby="inputMemberName"
                        name="memberName"
                        value={memberName}
                        required
                        onChange={(e) => {
                          setMemberName(e.target.value);
                        }}
                      />
                      <Form.Control.Feedback type="invalid">
                        請填寫訂購人姓名
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  {/* 訂購人信箱 */}
                  <Form.Group
                    controlId="validationCustomUsername"
                    className="mb-3"
                  >
                    <Form.Label>E-mail (帳號)</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="email"
                        placeholder="請輸入E-mail"
                        aria-describedby="inputEmail"
                        name="memberEmail"
                        value={memberEmail}
                        required
                        onChange={(e) => {
                          setMemberEmail(e.target.value);
                        }}
                      />
                      <Form.Control.Feedback type="invalid">
                        請填入正確格式的訂購人E-mail
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  {/* 訂購人手機號碼 */}
                  <Form.Group
                    controlId="validationCustomUsername"
                    className="mb-3"
                  >
                    {/* 要驗證號碼跟長度！！！！！！！ */}
                    <Form.Label>手機號碼</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="text"
                        placeholder="請輸入手機號碼"
                        aria-describedby="inputPhone"
                        name="memberPhone"
                        value={memberPhone}
                        required
                        onChange={(e) => {
                          setMemberPhone(e.target.value);
                        }}
                      />
                      <Form.Control.Feedback type="invalid">
                        請填寫訂購人手機號碼
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  {/* 訂購人地址 */}
                  <div className="row mb-3">
                    <div className="col-4">
                      <Form.Label>縣市</Form.Label>
                      <Form.Select aria-label="select">
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
                          placeholder="請輸入地址"
                          name="memberAddress"
                          value={memberAddress}
                          required
                          onChange={(e) => {
                            setMemberAddress(e.target.value);
                          }}
                        />
                        <Form.Control.Feedback type="invalid">
                          請填寫訂購人詳細地址
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
                  {/* 收件人姓名 */}
                  <Form.Group
                    controlId="validationCustomUsername"
                    className="mb-3"
                  >
                    <Form.Label>姓名</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="text"
                        placeholder="請輸入姓名"
                        aria-describedby="inputReceiver"
                        name="receiver"
                        value={order.receiver}
                        required
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        請填寫收件人姓名
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  {/* 收件人手機號碼 */}
                  <Form.Group
                    controlId="validationCustomUsername"
                    className="mb-3"
                  >
                    {/* 要驗證號碼跟長度！！！！！！！ */}
                    <Form.Label>手機號碼</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="text"
                        placeholder="請輸入手機號碼"
                        aria-describedby="inputReceiverPhone"
                        name="receiverPhone"
                        value={order.receiverPhone}
                        required
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        請填寫收件人手機號碼
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
                          placeholder="請輸入地址"
                          name="address"
                          value={order.address}
                          required
                          onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                          請填寫詳細地址
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                  </div>
                  {/* 收件超商門市 */}
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
                      <Form.Label>超商門市</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>請選擇門市</option>
                        <option
                          value="1"
                          name="convenient_store"
                          onChange={handleChange}
                        >
                          台北門市
                        </option>
                        <option
                          value="2"
                          name="convenient_store"
                          onChange={handleChange}
                        >
                          新北門市
                        </option>
                        <option
                          value="3"
                          name="convenient_store"
                          onChange={handleChange}
                        >
                          桃園門市
                        </option>
                        <option
                          value="4"
                          name="convenient_store"
                          onChange={handleChange}
                        >
                          台中門市
                        </option>
                        <option
                          value="5"
                          name="convenient_store"
                          onChange={handleChange}
                        >
                          台南門市
                        </option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
                {/* 發票資訊，目前無作用！ */}
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
