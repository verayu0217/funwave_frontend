import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Form, Button, InputGroup, Spinner } from 'react-bootstrap';
import axios from 'axios';
import _ from 'lodash';

import './Cart.scss';
import CartHeader from '../Components/Cart/CartHeader02.js';
import CartMemberInfo from '../Components/Cart/CartMemberInfo.js';
import CartReceiverInfo from '../Components/Cart/CartReceiverInfo.js';
import CartShipping from '../Components/Cart/CartShipping.js';
import { useAuth } from '../../../context/auth'; // 從useContext拿會員資料
import { API_URL } from '../../../utils/config';

function ProductCart02() {
  // 會員資料傳入useContext
  const { auth, setAuth } = useAuth();
  console.log('auth', auth);

  // 表單元素 (要存進order-list、order_details資料表)
  const [order, setOrder] = useState({
    member_id: 0,
    amount: 0,
    payment: 'a',
    payment_status: '未付款',
    delivery: '',
    receiver: '',
    receiver_phone: '',
    address: '',
    convenient_store: '',
    status: '訂單處理中',
    order_details: [],
  });

  // 表單元素 (可同步會員資料)
  const [memberName, setMemberName] = useState('');
  const [memberPhone, setMemberPhone] = useState('');
  const [memberAddress, setMemberAddress] = useState('');

  // 訂購人資訊勾選同步更新會員資料
  const [memberSync, setMemberSync] = useState(false); // true代表訂購人資訊勾選同步更新會員資料

  // 收件人資訊勾選同訂購人資訊
  const [receiverSync, setReceiverSync] = useState(false); // true代表收件人資訊勾選同訂購人資訊

  // 配送資訊勾選同訂購人地址
  const [addressSync, setAddressSync] = useState(false); // true代表配送資訊勾選同訂購人地址

  // 訂單完成
  const [orderDone, setOrderDone] = useState(false);

  const [validated, setValidated] = useState(false);

  // 拿取前一頁Cart01儲存在localStorage的購物車品項、付款方式、運送方式、總金額
  useEffect(() => {
    let localStoragePayment = JSON.parse(
      localStorage.getItem('payment') || '[]'
    );
    let localStorageDelivery = JSON.parse(
      localStorage.getItem('delivery') || '[]'
    );
    let localStorageAmount = JSON.parse(localStorage.getItem('amount')) || 0;
    console.log('localStorageAmount', localStorageAmount);

    const localStorageOrderCart = JSON.parse(
      localStorage.getItem('productCartDisplay') || '[]'
    );

    // 處理購物車品項欄位剩下product_no、count
    let orderDetails = localStorageOrderCart.map((x) =>
      _.pick(x, 'product_no', 'count', 'style')
    );
    console.log('orderDetails', orderDetails);

    setOrder({
      ...order,
      amount: localStorageAmount,
      payment: localStoragePayment,
      delivery: localStorageDelivery,
      order_details: orderDetails,
    });
  }, []);

  useEffect(() => {
    console.log(order);
  }, [order]);

  // 會員資料帶入訂購人資訊 (member_id、memberName、memberPhone、memberAddress，從useContext帶入)
  useEffect(() => {
    // 這裡條件還是無法阻擋重整auth為null而壞掉的情況！
    if (auth) {
      setOrder({
        ...order,
        member_id: auth?.member_id,
      });

      setMemberName(auth?.member_name);
      setMemberPhone(auth?.member_phone);
      setMemberAddress(auth?.member_address);
    } else {
    }
  }, [auth]);

  useEffect(() => {
    // 收件人資訊勾選同訂購人資訊
    if (receiverSync === true) {
      setOrder({
        ...order,
        receiver: memberName,
        receiver_phone: memberPhone,
      });
    } else {
    }

    // 收件人資訊勾選同訂購人資訊
    if (addressSync === true) {
      setOrder({
        ...order,
        address: memberAddress,
      });
    } else {
    }
  }, [receiverSync, addressSync]);

  // // 收件人資訊勾選同訂購人資訊
  // useEffect(() => {
  //   if (addressSync === true) {
  //     setOrder({
  //       ...order,
  //       address: memberAddress,
  //     });
  //   } else {
  //   }
  // }, [addressSync]);

  async function handleSubmit(e) {
    // 送出資料前的驗證
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      try {
        let response = await axios.post(`${API_URL}/cartProducts`, order);
        console.log(response.data);
        setOrderDone(true);
      } catch (e) {
        console.error('error', e.response.data);
      }
    }
    setValidated(true);
  }

  // 訂購完成才能到Cart03
  if (orderDone) {
    return <Navigate to="/product-cart03"></Navigate>;
  }

  console.log('memberName', memberName);
  console.log('memberPhone', memberPhone);
  console.log('memberAddress', memberAddress);
  console.log('memberSync', memberSync);
  console.log('receiverSync', receiverSync);
  console.log('addressSync', addressSync);

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
                  訂購資訊{order.member_id}
                  {order.payment}
                  {order.delivery}
                  {order.amount}
                </h1>
              </div>
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                method="post"
              >
                {/* 訂購人資訊 */}
                <CartMemberInfo
                  order={order}
                  setOrder={setOrder}
                  memberName={memberName}
                  setMemberName={setMemberName}
                  memberPhone={memberPhone}
                  setMemberPhone={setMemberPhone}
                  memberAddress={memberAddress}
                  setMemberAddress={setMemberAddress}
                  memberSync={memberSync}
                  setMemberSync={setMemberSync}
                />
                {/* 收件人資訊 */}
                <CartReceiverInfo
                  order={order}
                  setOrder={setOrder}
                  receiverSync={receiverSync}
                  setReceiverSync={setReceiverSync}
                />
                {/* 配送資訊 */}
                <CartShipping
                  order={order}
                  setOrder={setOrder}
                  addressSync={addressSync}
                  setAddressSync={setAddressSync}
                />

                {/* 發票資訊，目前無作用！ */}

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
                    <Link to={`/product-cart01`}>
                      <button className="btn btn-secondary text-white">
                        上一步
                      </button>
                    </Link>
                    <Button
                      type="submit"
                      // onClick={() => {
                      //   if (order.convenient_store === '') {
                      //     alert('請選擇門市');
                      //   }
                      // }}
                    >
                      完成訂購！
                    </Button>
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
