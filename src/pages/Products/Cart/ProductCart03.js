import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import { Link, Navigate } from 'react-router-dom';
import { Form, Button, InputGroup, Spinner } from 'react-bootstrap';
import axios from 'axios';
import _ from 'lodash';

import './Cart.scss';
import CartHeader from '../Components/Cart/CartHeader03.js';
import CartMemberInfo from '../Components/Cart/CartMemberInfo.js';
import CartReceiverInfo from '../Components/Cart/CartReceiverInfo.js';
import CartShipping from '../Components/Cart/CartShipping.js';
import { useAuth } from '../../../context/auth'; // 從useContext拿會員資料
import { API_URL } from '../../../utils/config';

function ProductCart03() {
  return (
    <>
      <div className="container">
        {/* 購物車三步驟進度條 */}
        <CartHeader />
        <article>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8 col-10 m-0 p-0 shadow borderRadius">
              <div className="rwdPadding5 pb-3 border-bottom text-center">
                <h4>Good Things are Coming!</h4>
                <p className="mt-5 lh-lg">
                  我們來自於陸地，心卻向著大海，我們是「浪人」。
                  <br></br>
                  Funwave致力於提供浪人們高品質的衝浪用品。
                </p>
                <p className="lh-lg">
                  <br></br>
                  商品訂購完成！
                  <br></br>
                  歡迎您隨時到站上查詢到貨！
                  <br></br>
                  KEEP SHOPPING
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default ProductCart03;
