import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

// 大標題綠色波浪
import greenTitle from '../../data/images/greenTitle.svg';

import './CourseCart.scss';

function CourseCart(props) {
  let navigate = useNavigate();
  const [count, setCount] = useState(1);

  // 人數
  // 顯示出localStorage的資料
  let data = [];
  if (!localStorage.getItem('報名資料')) {
    return;
  } else {
    data = [...JSON.parse(localStorage.getItem('報名資料'))];
  }

  console.log(data);
  // 總計
  const amount = data[0].coursePrice * count;

  // 刪除購物車資料並導向上一頁
  let deleteCourse = () => {
    localStorage.clear('報名資料');
    window.alert('你的購物車沒有資料');

    // 導回上一頁
    navigate('/course/course-content', { replace: true });
  };

  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class=" col-sm-10 col-lg-10 m-auto">
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

            {/* 明細區塊  */}
            <div>
              {/* 明細電腦版樣式*/}
              <div className="courseDetail">
                <p className="h3">衝浪課程</p>
                <table className="table table-borderless border-bottom border-1 border-dark">
                  <thead className="bg-light text-center">
                    <tr>
                      <th scope="col">名稱</th>
                      <th scope="col">時段</th>
                      <th scope="col">地點</th>
                      <th scope="col">單價</th>
                      <th scope="col">人數</th>
                      <th scope="col">小計</th>
                      <th scope="col">預約日期</th>
                      <th scope="col">操作</th>
                    </tr>
                  </thead>

                  {data.map((v, i) => {
                    return (
                      <tbody className="text-center" key={i}>
                        <tr>
                          <td>{v.course}</td>
                          <td>{v.courseTime}</td>
                          <td>{v.courseSpot}</td>
                          <td>{v.coursePrice}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-secondary border rounded-circle p-0 countButton me-2"
                              onClick={() => {
                                if (count - 1 >= 1) setCount(count - 1);
                              }}
                            >
                              <AiOutlineMinus
                                size={20}
                                color="#ffffff"
                                className="text-center"
                              />
                            </button>

                            {count}
                            <button
                              type="button"
                              className="btn btn-secondary border rounded-circle p-0 countButton ms-2"
                              onClick={() => {
                                setCount(count + 1);
                              }}
                            >
                              <AiOutlinePlus
                                size={20}
                                color="#ffffff"
                                className="text-center"
                              />
                            </button>
                          </td>
                          <td>{amount}</td>
                          <td>{v.courseDate}</td>
                          <td>
                            <i
                              className="fas fa-trash-alt"
                              onClick={deleteCourse}
                            ></i>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>

                {/* 付款方式 */}
                <div className="row d-flex border-bottom border-1 border-dark">
                  <div className="col-sm-12 col-md-2 ">
                    <p className=" h3 me-3 align-self-center">付款方式</p>
                  </div>

                  <div className="col-sm-12 col-md-10 ">
                    <nav aria-label="..." className=" align-self-center">
                      <ul className="pagination pagination-sm">
                        <li className="payItem active" aria-current="page">
                          <a className="pay-link" href="#/">
                            信用卡
                          </a>
                        </li>
                        <li className="payItem">
                          <a className="pay-link" href="#/">
                            匯款
                          </a>
                        </li>
                        <li className="payItem">
                          <a className="pay-link" href="#/">
                            現金
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>

                {/* <總計  */}
                <div className="d-flex justify-content-end">
                  <p className="h3">總計 NT {amount}</p>
                </div>

                {/* 上一頁/下一頁按鈕  */}
                <div className="d-flex justify-content-end ">
                  <div>
                    <Link
                      to="/course/course-content"
                      className="btn btn-secondary text-white backBtn me-3 mt-3"
                    >
                      <i className="fas fa-arrow-left text-white"></i>
                      回上一頁
                    </Link>
                    <Link
                      to="/course/course-cart02"
                      class="btn btn-primary text-white confirmBtn mt-3"
                    >
                      確認資訊
                      <i className="fas fa-arrow-right text-white"></i>
                    </Link>
                  </div>
                </div>
              </div>

              {/* 明細手機版樣式 */}
              <div className="mobile col-9 m-auto">
                <p className="h3">衝浪課程</p>
                <div className="row border  text-center">
                  <p>課程名稱:初階衝浪</p>
                  <p>預約日期:2022-1-24</p>
                  <p>上課地點:白沙灣</p>
                  <p>上課時段:上午</p>
                  <p>人數:- 1 +</p>
                  <p>單價:NT2,000</p>
                </div>

                {/* <總計  */}
                <div className="d-flex justify-content-end border-bottom">
                  <p className="h3">總計 NT 2,000</p>
                </div>

                {/* 付款方式 */}
                <div className="row  d-flex justify-content-center border-1 border-dark ">
                  <p className=" h3">付款方式</p>

                  <nav aria-label="...">
                    <ul className="pagination pagination-sm">
                      <li className="payItem active" aria-current="page">
                        <a className="pay-link" href="#/">
                          信用卡
                        </a>
                      </li>
                      <li className="payItem">
                        <a className="pay-link" href="#/">
                          匯款
                        </a>
                      </li>
                      <li className="payItem">
                        <a className="pay-link" href="#/">
                          現金
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

                {/* 上一頁/下一頁按鈕  */}
                <div className="row mt-5">
                  <Link
                    to="/course/course-content"
                    className="btn btn-secondary text-white backBtn me-2"
                  >
                    <i className="fas fa-arrow-left text-white"></i>
                    回上一頁
                  </Link>
                  <Link
                    to="/course/course-cart02"
                    className="btn btn-primary text-white confirmBtn mt-2 "
                  >
                    確認資訊
                    <i className="fas fa-arrow-right text-white"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* 參加課程須知 */}
            <div className="row  infoBg m-5">
              <p className="border-bottom border-1 border-dark h3 p-3 ">
                參加課程須知
              </p>
              <div className="col-sm-12 col-lg-6 p-3 py-0">
                <div className="list-item">
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
              <div className="col-sm-12 col-lg-6 p-3 py-0">
                <div className="list-item">
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
