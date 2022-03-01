import React, { useState, useEffect } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash';

import { useAuth } from '../../../context/auth';
import './Cart.scss';
import CartHeader from '../Components/Cart/CartHeader02.js';
import CartInvoice from '../Components/Cart/CartInvoice.js';
import CartShipping from '../Components/Cart/CartShipping.js';
import { API_URL } from '../../../utils/config';

function ProductCart02() {
  // 會員資料傳入useContext
  const { auth, setAuth } = useAuth();
  console.log('auth', auth);

  // 將localStorage的資料(productCartDisplay)存為狀態orderCart
  const [orderCart, setOrderCart] = useState([]);

  // 將localStorage的付款方式、運送方式存為狀態payment、delivery
  const [payment, setPayment] = useState('信用卡');
  const [delivery, setDelivery] = useState('宅配到府');

  // 子貨號、單價要存進order_details資料表
  const [orderDetails, setOrderDetails] = useState([]);

  // 表單元素 (要存進order-list、order_details資料表)
  const [order, setOrder] = useState({
    member_id: 0,
    amount: 0,
    payment: '信用卡',
    payment_status: '未付款',
    delivery: '宅配到府',
    receiver: '收件人',
    receiver_phone: '0',
    address: 'a',
    convenient_store: 'a',
    status: '訂單處理中',
    order_time: '2021-12-13 14:33:56',
    order_details: [
      { product_no: 12345, count: 30 },
      { product_no: 123456, count: 300 },
    ],
  });

  // 表單元素 (可同步會員資料)
  const [memberName, setMemberName] = useState('');
  const [memberEmail, setMemberEmail] = useState('');
  const [memberPhone, setMemberPhone] = useState('');
  const [memberAddress, setMemberAddress] = useState('');

  const [validated, setValidated] = useState(false);

  // 同步會員資料
  const [updateMember, setUpdateMember] = useState(false);
  const [updateAuth, setUpdateAuth] = useState({
    account: '',
    address: '',
    email: '',
    id: 0,
    name: '',
    phone: '',
  });

  // 縣市
  const counties = [
    '請選擇縣市',
    '台北市',
    '新北市',
    '桃園市',
    '台中市',
    '台南市',
    '高雄市',
    '基隆市',
    '新竹市',
    '新竹縣',
    '彰化縣',
    '苗栗縣',
    '南投縣',
    '雲林縣',
    '嘉義市',
    '嘉義縣',
    '屏東縣',
    '台東縣',
    '花蓮縣',
    '宜蘭縣',
  ];

  // 計算總價用的函式
  const sum = (items) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].count * items[i].price;
    }
    return total;
  };

  // 模擬componentDidMount
  // 提取LocalStorage的資料(productCartDisplay、payment、delivery)
  function getCartFromLocalStorage() {
    // LocalStorage: productCartDisplay
    const newOrderCart = JSON.parse(
      localStorage.getItem('productCartDisplay') || '[]'
    );
    setOrderCart(newOrderCart);

    // LocalStorage: payment
    const newPayment = JSON.parse(localStorage.getItem('payment') || '[]');
    setPayment(newPayment);

    // LocalStorage: delivery
    const newDelivery = JSON.parse(localStorage.getItem('delivery') || '[]');
    setDelivery(newDelivery);
  }
  useEffect(() => {
    getCartFromLocalStorage();
  }, []);

  useEffect(() => {
    let map = orderCart.map((x) => _.pick(x, 'product_no', 'count'));
    setOrderDetails(map);
    console.log('orderDetails', orderDetails);
  }, [orderCart]);

  // 模擬componentDidUpdate
  // 要帶入已知的資料，必須隨者orderDetails, orderCart, auth變動
  useEffect(() => {
    // member_id，從useContext帶入(必須隨auth變動)
    // amount，從localstorage帶入單價、數量，然後再計算(必須隨orderCart變動)
    // order_details，從localstorage帶入單價、數量
    setOrder({
      ...order,
      member_id: auth?.id,
      amount: sum(orderCart),
      order_details: orderDetails,
      payment: payment,
      delivery: delivery,
    });

    // memberName、memberEmail、memberPhone、memberAddress，從useContext帶入
    setMemberName(auth?.name);
    setMemberEmail(auth?.email);
    setMemberPhone(auth?.phone);
    setMemberAddress(auth?.address);
  }, [orderDetails, orderCart, auth]);

  // 表單中的onchange事件 (限order物件內的欄位)
  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  // 表單中的onchange事件 (限updateAuth物件內的欄位)
  // const handleChangeAuth = (e) => {
  //   let newUpdateAuth = {};
  //   newUpdateAuth[e.target.name] = e.target.value;
  //   // setUpdateAuth(newUpdateAuth);
  // };
  useEffect(() => {
    let newUpdateAuth = {};
    newUpdateAuth['account'] = memberName;
    newUpdateAuth['name'] = memberName;
    newUpdateAuth['address'] = memberAddress;
    newUpdateAuth['email'] = memberEmail;
    newUpdateAuth['phone'] = memberPhone;
    console.log('newUpdateAuth', newUpdateAuth);
    setUpdateAuth(newUpdateAuth);
  }, [memberName, memberAddress, memberEmail, memberPhone]);

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
    // withCredentials: true，才會儲存auth cookies，重整才會保有auth資料
    try {
      let response = await axios.post(`${API_URL}/cartProducts`, order, {
        withCredentials: true,
      });
      console.log(response.data);
    } catch (e) {
      console.error('error', e.response.data);
    }
  }

  return (
    <>
      <div className="container">
        {/* 購物車三步驟進度條 */}
        <CartHeader />
        <article>
          <div className="row d-flex justify-content-center">
            <div className="col-8 m-0 p-0 shadow borderRadius">
              <div className="p-4 border-bottom text-center">
                <h1>
                  訂購資訊{order.amount}
                  {order.payment}
                  {order.delivery}
                </h1>
                <h1>
                  a{order.orderDetails}
                  {order.orderCart}
                </h1>
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
                        onClick={() => {
                          if (updateMember === false) {
                            setUpdateMember(true);
                          } else {
                            setUpdateMember(false);
                          }
                        }}
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
                        name="name"
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
                        name="email"
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
                        name="phone"
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
                        {counties.map((x, i) => (
                          <option value={x} key={i}>
                            {x}
                          </option>
                        ))}
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
                        name="receiver_phone"
                        value={order.receiver_phone}
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
                <CartShipping order={order} setOrder={setOrder} />
                {/* 發票資訊 */}
                <CartInvoice />
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
