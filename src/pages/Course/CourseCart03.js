import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// 大標題綠色波浪
import greenTitle from '../../data/images/greenTitle.svg';

import './CourseCart.scss';

function CourseCart03() {
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
          <header className="m-5 py-2 px-5">
            <div className="d-flex justify-content-evenly">
              <div className="d-flex align-items-center shadow py-2 cartStepsSigns borderRadius">
                <div className="fs-1 w-25 text-center">01</div>
                <div className="w-75">
                  確認課程明細及選擇付款方式
                  <br />
                  Cart & Check out
                </div>
              </div>
              <div className="d-flex justify-content-evenly align-items-center shadow py-2 cartStepsSigns borderRadius">
                <div className="fs-1 w-25 text-center">02</div>
                <div className="w-75">
                  填寫個人資料
                  <br />
                  Cart & Check out
                </div>
              </div>
              <div className="d-flex justify-content-evenly align-items-center shadow py-2 cartStepsSigns borderRadius">
                <div className="fs-1 w-25 text-center">03</div>
                <div className="w-75">
                  報名完成！
                  <br />
                  Order completed
                </div>
              </div>
            </div>
          </header>

          <div className="col-8 successBox border m-auto p-3 py-5">
            <p className="text-center text-white align-items-center fw-bold fs-1">
              報名成功，感謝您！
            </p>
          </div>
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
      </div>
    </>
  );
}

export default CourseCart03;
