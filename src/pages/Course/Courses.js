import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import coach01 from '../../data/images/course/coach01.jpg';
import coach02 from '../../data/images/course/coach02.jpg';
import coach03 from '../../data/images/course/coach03.jpg';
import coach04 from '../../data/images/course/coach04.jpg';
import coach05 from '../../data/images/course/coach05.jpg';
import coach06 from '../../data/images/course/coach06.jpg';

// 引用上課地點組件
import CourseSpot from './components/CourseSpot';

import greenTitle from '../../data/images/greenTitle.svg';

import './Courses.scss';

function Courses() {
  return (
    <>
      {/* 主頁大圖區加標題  */}
      <div className="container-fluid">
        <div className="row courseBanner-box">
          <div className="col-md-12 p-0 ">
            <div className="courseBanner d-flex justify-content-center align-items-center">
              <div className="text-center  m-auto align-items-center">
                <p className="h4 white">Let's Learn How to Surf.</p>
                <p className="h1 white">衝浪課程</p>
              </div>
            </div>
          </div>
        </div>

        {/* 課程簡介區  */}
        <div className="row col-10 m-auto course-box shadow-lg">
          <div className="text-secondary mt-5 h1 text-center mb-5">
            <img
              src={greenTitle}
              className="greenTitle me-3"
              alt="greenTitle"
              height="24px"
              weight="64px"
            />
            專業安全的分級衝浪課程
          </div>
          <div className="row d-flex">
            <div className="item col-md-6 col-lg-3 p-3">
              <p className="text-center h2 ">體驗課程</p>
              <p className="text-center gray p-3">
                以休閒衝浪為主題 深入淺出的教學模式 讓你輕鬆學習到衝浪的樂趣
                體驗大海上享受速度的快感
              </p>
            </div>
            <div className="item col-md-6 col-lg-3 p-3">
              <p className="text-center h2 ">初階課程</p>
              <p className="text-center gray p-3">
                有基本的控制能力 可以在白花上直行 能獨自展開衝浪活動
                對衝浪恐懼感降低
              </p>
            </div>
            <div className="item col-md-6 col-lg-3 p-3">
              <p className="text-center h2">中階課程</p>
              <p className="text-center gray p-3">
                掌握初級衝浪者技巧 練習加速減速 控制速度
                轉向並能靠自己判斷追浪下浪 更流暢的動作連貫性
              </p>
            </div>
            <div className="item col-md-6 col-lg-3 p-3">
              <p className="text-center h2">高階課程</p>
              <p className="text-center gray p-3">
                熟悉所有衝浪技巧 能駕馭各種浪況條件浪頭判別與浪板駕乘
                能自由發揮高技術性動作
              </p>
            </div>
          </div>
          <div className=" text-center">
            <Link
              to="/course/course-content"
              className="btn btn-primary text-white mb-5 courseIntroBtn"
            >
              詳細課程內容
              <i className="fas fa-arrow-right text-white ms-2"></i>
            </Link>
          </div>
        </div>

        {/* 上課地點 */}
        <CourseSpot />

        {/* 教練介紹區 */}
        {/* TODO:教練切版 */}
        {/* <div className="row my-5  col-9 m-auto">
          <div className="text-secondary  mt-3 h1 text-center mb-3">
            <img
              src={greenTitle}
              className="greenTitle me-3"
              alt="greenTitle"
              height="24px"
              weight="64px"
            />
            專業用心的教練團隊
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Courses;
