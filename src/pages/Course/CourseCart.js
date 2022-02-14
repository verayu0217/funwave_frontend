import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// 大標題綠色波浪
import greenTitle from '../../data/images/greenTitle.svg';

import './CourseCart.scss';

function CourseCart() {
  return (
    <>
      {/* 購物車進度條 */}
      <div class="container-fluid">
        <div class="row">
          <div class=" col-sm-12 col-lg-10 m-auto">
            {/* 標題 */}
            <div className="text-secondary fw-bold my-3 h1 text-center ">
              <img
                src={greenTitle}
                className="greenTitle me-3"
                alt="greenTitle"
                height="24px"
                weight="64px"
              />
              衝浪課程購物車
            </div>

            {/* 明細區塊  */}
            <div>
              <div class="courseDetail">
                <p class="h3">衝浪課程</p>
                <table class="table table-borderless border-bottom border-1 border-dark">
                  <thead class="bg-light text-center">
                    <tr>
                      <th scope="col">名稱</th>
                      <th scope="col">時段</th>
                      <th scope="col">地點</th>
                      <th scope="col">單價</th>
                      <th scope="col">人數</th>
                      <th scope="col">小計</th>
                      <th scope="col">預約日期</th>
                    </tr>
                  </thead>
                  <tbody class="text-center">
                    <tr>
                      <td>初階衝浪</td>
                      <td>上午</td>
                      <td>白沙灣</td>
                      <td>2000</td>
                      <td>- 1 +</td>
                      <td>NT 2,000</td>
                      <td>2022-1-24</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* 明細 */}

              {/* 手機版樣式 */}
              <div class="mobile">
                <div class=" row col-7 border m-auto text-center">
                  <p class="h3 text-center">衝浪課程</p>
                  <p>初階衝浪</p>
                  <p>上午</p>
                  <p>白沙灣</p>
                  <p>2000</p>
                  <p>- 1 +</p>
                  <p>NT 2,000</p>
                  <p>2022-1-24</p>
                </div>
              </div>

              {/* 付款方式 */}
              <div class="row d-flex border-bottom border-1 border-dark">
                <div class="col-sm-12 col-md-2 ">
                  <p class=" h3 me-3 align-self-center">付款方式</p>
                </div>

                <div class="col-sm-12 col-md-10 ">
                  <nav aria-label="..." class=" align-self-center">
                    <ul class="pagination pagination-sm">
                      <li class="payItem active" aria-current="page">
                        <a class="pay-link" href="#/">
                          信用卡
                        </a>
                      </li>
                      <li class="payItem">
                        <a class="pay-link" href="#/">
                          匯款
                        </a>
                      </li>
                      <li class="payItem">
                        <a class="pay-link" href="#/">
                          現金
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            {/* <總計  */}
            <div class="d-flex justify-content-end">
              <p class="h3">總計 NT 2,000</p>
            </div>
            {/* 上一頁/下一頁按鈕  */}
            <div class="d-flex justify-content-end ">
              <div>
                <button class="btn btn-secondary text-white backBtn me-3 mt-3">
                  <i className="fas fa-arrow-left text-white"></i>
                  回上一頁
                </button>
                <button class="btn btn-primary text-white confirmBtn mt-3">
                  確認資訊
                  <i className="fas fa-arrow-right text-white"></i>
                </button>
              </div>
            </div>

            {/* 參加課程須知 */}
            <div class="row  infoBg m-5">
              <p class="border-bottom border-1 border-dark h3 p-3 ">
                參加課程須知
              </p>
              <div class="col-sm-12 col-lg-6 p-3 py-0">
                <div class="list-item">
                  <p>1.您需要充足的體力，上課前一天需有充足睡眠</p>
                  <p>2.上課前/中請勿飲酒</p>
                  <p>
                    3.如果會暈車或暈船，請在上課前30至60分鐘，吃暈車/船藥，避免暈浪
                  </p>
                  <p>4.如果您有特殊疾病/慢性病 請提早告知教練</p>
                  <p>
                    5.衝浪課程是在開放海域進行教學，請遵守教練的指導與規定，如無法配合請勿參加
                  </p>
                </div>
              </div>
              <div class="col-sm-12 col-lg-6 p-3 py-0">
                <div class="list-item">
                  <p>
                    6.參與衝浪課程，可自備泳衣、泳褲、防磨衣等適合衝浪活動之衣物
                  </p>
                  <p>
                    7.海域屬於大自然，如有颱風、突發狀況、浪況過大
                    ，教練會立即停止本次教學活動，並另外安排時間上課
                  </p>
                  <p>
                    8.本課程需要在水中基本換氣能力，若您水性不佳，也請提前告知教練
                  </p>
                  <p>
                    9.使用本課程提供之設備，若有不當使用造成毀損，需賠償復原損壞之設備
                  </p>
                  <p>
                    10.參與課程前請記得吃飯，避免因血糖過低而導致身體不適及其他意外產生
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseCart;
