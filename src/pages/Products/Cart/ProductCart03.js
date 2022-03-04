import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

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

function ProductCart03() {
  Swal.fire('報名成功，感謝您！');
  return (
    <>
      <div className=" text-center mt-5">
        <Link
          to="/home"
          className="btn btn-primary text-white mb-5 courseIntroBtn"
        >
          回首頁
          <i className="fas fa-arrow-right text-white"></i>
        </Link>
      </div>
      <div className="row border  infoBg bg m-5">
        <p className="border-bottom border-1 border-dark h3 p-3 ">注意事項</p>
        <div className="col-sm-12 col-lg-6 p-3 py-0">
          <div className="list-item">
            <p>1. 衝浪中消耗大量體力，喝水永遠不嫌少，建議多備飲用水</p>
            <p>
              2.本體驗提供保險，為了您的保險權益，完成付款後請儘速完成填寫《參加者資料》
            </p>
            <p>3.建議穿著泳裝，並適時塗抹防曬用品</p>
            <p>
              4.水中活動每日需多準備一套帶衣物以便現場更換，另請自備毛巾用於淋浴後使用
            </p>
            <p>5.不會游泳請自行斟酌是否則適應海水</p>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6 p-3 py-0">
          <div className="list-item">
            <p>6.身體狀況請隨時和教練聯繫</p>
            <p>7.疫情特殊期間請配合防疫措施</p>
            <p>
              8.天候影響：一般下雨日不取消行程，如因氣候因素由主辦單位通知延期
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCart03;
