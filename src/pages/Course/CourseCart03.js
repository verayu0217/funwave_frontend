import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

// 大標題綠色波浪
import greenTitle from '../../data/images/greenTitle.svg';

import './CourseCart.scss';

function CourseCart03() {
  return (
    <>
      <div class="container">
        <div class="row">
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

          <div class="col-8 box border bg m-auto p-3 py-5">
            <p class="text-center align-items-center fs-1">
              報名成功，感謝您！
            </p>
          </div>
        </div>
        <div class="row border bg m-5">
          <h4 class="border-bottom border-3 border-secondary">注意事項</h4>
          <div class="col-sm-12 col-lg-6 p-3 py-0">
            <ul class="list-item">
              <li>1. 衝浪中消耗大量體力，喝水永遠不嫌少，建議多備飲用水</li>
              <li>
                2.本體驗提供保險，為了您的保險權益，完成付款後請儘速完成填寫《參加者資料》
              </li>
              <li>3.建議穿著泳裝，並適時塗抹防曬用品</li>
              <li>
                4.水中活動每日需多準備一套帶衣物以便現場更換，另請自備毛巾用於淋浴後使用
              </li>
              <li>5.不會游泳請自行斟酌是否則適應海水</li>
            </ul>
          </div>
          <div class="col-sm-12 col-lg-6 p-3 py-0">
            <ul class="list-item">
              <li>6.身體狀況請隨時和教練聯繫</li>
              <li>7.疫情特殊期間請配合防疫措施</li>
              <li>
                8.天候影響：一般下雨日不取消行程，如因氣候因素由主辦單位通知延期
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseCart03;
