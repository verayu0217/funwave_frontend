import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import greenwave from '../../data/images/greenwave64x24.png'; // 待釐清圖放src還是放在public

import './Courses.scss';

function Courses() {
  return (
    <>
      {/* 主頁大圖區  */}
      <div className="container-fluid">
        <div className="row courseBanner-box">
          <div className="col-md-12 p-0  ">
            <div className="courseBanner d-flex justify-content-center align-items-center">
              <div className="txt text-center">Let's Learn How to Surf.</div>
            </div>
          </div>
        </div>
      </div>

      {/* 課程簡介區  */}
      <div className="container my-5">
        <div className="row d-flex">
          <div className="col-8 mx-auto course-box shadow-sm">
            <div className="text-secondary fw-bold mt-3 h1 text-center mb-3">
              <img
                src={greenwave}
                alt="greenwave"
                title="greenwave"
                className="me-3 "
              />
              專業安全的分級衝浪課程
            </div>
            <div className="row d-flex mt-5">
              <div className="item col-md-6 col-lg-3">
                <p className="text-center h2 ">體驗課程</p>
                <p className="text-center gray">
                  以休閒衝浪為主題 深入淺出的教學模式 讓你輕鬆學習到衝浪的樂趣
                  體驗大海上享受速度的快感
                </p>
              </div>
              <div className="item col-md-6 col-lg-3">
                <p className="text-center h2 ">初階課程</p>
                <p className="text-center gray">
                  有基本的控制能力 可以在白花上直行 能獨自展開衝浪活動
                  對衝浪恐懼感降低
                </p>
              </div>
              <div className="item col-md-6 col-lg-3">
                <p className="text-center h2">中階課程</p>
                <p className="text-center gray">
                  掌握初級衝浪者技巧 練習加速減速 控制速度
                  轉向並能靠自己判斷追浪下浪 更流暢的動作連貫性
                </p>
              </div>
              <div className="item col-md-6 col-lg-3">
                <p className="text-center h2">高階課程</p>
                <p className="text-center gray">
                  熟悉所有衝浪技巧 能駕馭各種浪況條件浪頭判別與浪板駕乘
                  能自由發揮高技術性動作
                </p>
              </div>
              <div className="text-center p-3">
                <button className="btn btn-primary text-white courseBtn">
                  詳細課程內容
                  {/* <FontAwesomeIcon icon="fa-solid fa-right-long" /> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 課程地點介紹區 */}
      <div className="container my-5">
        <div className="text-secondary fw-bold  h1 text-center mb-5">
          <img
            src={greenwave}
            alt="greenwave"
            title="greenwave"
            className="me-3 "
          />
          優美的課程地點一覽
        </div>

        <div className="row">
          {/* 北部/東北部  */}
          <p className="text-center h2 mb-3">北部/東北部</p>

          <div className="col-md-6 col-lg-3 ">
            <div className="spot-img shadow-sm">
              <img
                src="https://fakeimg.pl/275x150/"
                className="w-100 rounded"
                alt="..."
              />
              <p className="card-text text-center p-2">白沙灣</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="spot-img shadow-sm">
              <img
                src="https://fakeimg.pl/275x150/"
                className="w-100 rounded"
                alt="..."
              />
              <p className="card-text text-center p-2">白沙灣</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="spot-img shadow-sm">
              <img
                src="https://fakeimg.pl/275x150/"
                className="w-100 rounded"
                alt="..."
              />
              <p className="card-text text-center p-2">白沙灣</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="spot-img shadow-sm">
              <img
                src="https://fakeimg.pl/275x150/"
                className="w-100 rounded"
                alt="..."
              />
              <p className="card-text text-center p-2">白沙灣</p>
            </div>
          </div>
        </div>

        {/* 東部/西部/南部  */}
        <div className="row">
          <p className="text-center h2 mt-5 mb-3">東部/西部/南部</p>
          <div className="col-md-6 col-lg-3">
            <div className="spot-img shadow-sm">
              <img
                src="https://fakeimg.pl/275x150/"
                className="w-100 rounded"
                alt="..."
              />
              <p className="card-text text-center p-2">白沙灣</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="spot-img shadow-sm">
              <img
                src="https://fakeimg.pl/275x150/"
                className="w-100 rounded"
                alt="..."
              />
              <p className="card-text text-center p-2">白沙灣</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="spot-img shadow-sm">
              <img
                src="https://fakeimg.pl/275x150/"
                className="w-100 rounded"
                alt="..."
              />
              <p className="card-text text-center p-2">白沙灣</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="spot-img shadow-sm">
              <img
                src="https://fakeimg.pl/275x150/"
                className="w-100 rounded"
                alt="..."
              />
              <p className="card-text text-center p-2">白沙灣</p>
            </div>
          </div>
        </div>
      </div>

      {/* 教練介紹區 */}
      <div className="container my-5">
        <div className="row">
          <div className="text-secondary fw-bold mt-3 h1 text-center mb-3">
            <img
              src={greenwave}
              alt="greenwave"
              title="greenwave"
              className="me-3"
            />
            專業用心的教練團隊
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;

// 手風琴(參考蕃薯) 分類
// Checks and radio 篩選
