import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// 引用課程評價
import CourseEvaluate from './components/CourseEvaluate';

// 手風琴
import { Accordion } from 'react-bootstrap';
//星星icon

// 大標題綠色波浪
import greenTitle from '../../data/images/greenTitle.svg';
// 6大特色圖片
import landcoach from '../../data/images/course/icon-landcoach.png';
import surfwithu from '../../data/images/course/icon-surfwithu.png';
import freeboard from '../../data/images/course/icon-freeboard.png';
import tools from '../../data/images/course/icon-tools.png';
import memory from '../../data/images/course/icon-memory.png';
import lifeguard from '../../data/images/course/icon-lifeguard.png';

import './CourseContent.scss';

function CourseContent() {
  // 選擇課程
  const [course, setCourse] = useState('');
  // 選擇地點
  const [courseSpot, setCourseSpot] = useState('');
  // 預約日期
  const [courseDate, setCourseDate] = useState('');
  // 課程時間
  const [courseTime, setCourseTime] = useState('');
  const timeOptions = ['上午', '下午'];

  async function handleSubmit(e) {
    let data = [
      {
        course: course,
        courseSpot: courseSpot,
        courseDate: courseDate,
        courseTime: courseTime,
      },
    ];
    console.log(data);
    e.preventDefault();
    try {
      let response = await axios.post('http://localhost:3002/api/course', data);
      console.log(response.data);
    } catch (e) {
      // console.error('error', e.response.data);
      // console.error('測試註冊', [e.response.data.code]);
    }
  }

  return (
    <>
      {/* 主頁大圖加標題 */}
      <div className="container-fulid  ">
        <div className="row justify-content-center contentBanner ">
          <div className="contentTitle my-5">
            <div className="text-center  d-flex flex-column ">
              <p className="h4">Surf Course Detail.</p>
              <p className="h1">衝浪課程內容</p>
            </div>
          </div>

          {/* 6大特色大標題*/}
          <div className="row">
            <div className="text-secondary my-3 h1 text-center ">
              <img
                src={greenTitle}
                className="greenTitle me-3"
                alt="greenTitle"
                height="24px"
                weight="64px"
              />
              FUNWAVE課程6大特色
            </div>

            {/* 6特色內容及小圖 */}
            <div
              className="col-sm-8 col-md-7 col-lg-6 
             p-3 row m-auto bg-white"
            >
              <div className="col-12 col-md-6 col-lg-4">
                <div className="d-flex justify-content-center">
                  <img src={landcoach} className="cover-fit" alt="" />
                </div>
                <div className="text-center">
                  <p>陸上指導課程</p>
                  <p>
                    30分鐘路上課程、衝浪前必備的海洋知識、衝浪前必知的海上安全觀念、衝浪地形解析
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="d-flex justify-content-center">
                  <img src={surfwithu} className="cover-fit" alt="" />
                </div>
                <div className="text-center">
                  <p>下水陪衝課程</p>
                  <p>
                    衝浪基本動作講解與示範、認識浪頭、認識洋流、基礎划水、基礎越浪、練習起乘基本動作，教練陪同
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="d-flex justify-content-center">
                  <img src={freeboard} className="cover-fit" alt="" />
                </div>
                <div className="text-center">
                  <p>衝浪板免費使用</p>
                  <p>1次衝浪新手練習板免費使用</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="d-flex justify-content-center">
                  <img src={tools} className="cover-fit" alt="" />
                </div>
                <div className="text-center">
                  <p>一應俱全的衝浪裝備</p>
                  <p>
                    提供當天所需要的衝浪裝備，包含防磨水母衣、防寒衣、盆洗設備
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="d-flex justify-content-center">
                  <img src={memory} className="cover-fit" alt="" />
                </div>
                <div className="text-center">
                  <p>留下美好回憶</p>
                  <p>
                    第一次站在衝浪板上，是件值得回味一輩子的回憶，我們提供您整堂課程以及你在海上帥氣、美美的衝浪回憶照片唷
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="d-flex justify-content-center">
                  <img src={lifeguard} className="cover-fit" alt="" />
                </div>
                <div className="text-center">
                  <p>為您的安全把關</p>
                  <p>
                    每位來學習衝浪課的學員，除了有水上求生專業的教練為安全把關外，我們也會為學員辦理保險。讓你衝的快樂也衝的安心
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 分級衝浪課程 */}
          <div className="row">
            <div className="col-sm-12 col-md-9 col-lg-10 m-auto my-5">
              <div className="grade-wrap shadow-lg py-3 mt-5">
                <div className="text-secondary  my-5 h1 text-center">
                  <img
                    src={greenTitle}
                    className="greenTitle me-3"
                    alt="greenTitle"
                    height="24px"
                    weight="64px"
                  />
                  分級衝浪課程
                </div>
                <div className="col-10 m-auto">
                  <div className="item">
                    <div className="grade-title ">
                      <p className="h2">體驗課程</p>
                    </div>
                    <div className="row p-3">
                      <div className="col-md-6 ">
                        <ul>
                          <li>
                            提供詳細的衝浪基本動作講解＋教學影片觀摩 <br />
                            （包含划水、轉身、坐板、追浪、起乘、下浪）
                          </li>
                          <li>學習衝浪知識＋如何正確的站在板上</li>
                          <li>體驗下水、趴穩板子、划水的感受</li>
                          <li>教練協助推板，體驗被浪滾跑的滋味</li>
                        </ul>
                      </div>
                      <div className="col-md-6 d-flex flex-column align-items-end">
                        <p className="h2 align-self-start">NT 1,000/人</p>
                        <p className="align-self-start">
                          包含：衝浪板使用、教練費、保險費、盆洗費用
                        </p>

                        <a
                          href="#test"
                          className="btn btn-primary courseBtn mb-3"
                        >
                          立即報名
                          {/* <i className="fas fa-long-arrow-righ"></i> */}
                          <i className="fas fa-arrow-right text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="grade-title">
                      <p className="h2">初階課程</p>
                    </div>
                    <div className="row p-3">
                      <div className="col-md-6">
                        <ul>
                          <li>
                            提供詳細的衝浪基本動作講解＋教學影片觀摩
                            <br />
                            （包含划水、轉身、坐板、追浪、起乘、下浪）
                          </li>
                          <li>學習衝浪知識＋如何正確的站在板上</li>
                          <li>改善您的海上定位以追到更多浪</li>
                          <li>學習加速或減速的基礎知識</li>
                          <li>斜追浪並在起乘後向左或向右跑</li>
                        </ul>
                      </div>
                      <div className="col-md-6 d-flex flex-column align-items-end">
                        <p className="h2 align-self-start">NT 1,000/人</p>
                        <p className="align-self-start">
                          包含：衝浪板使用、教練費、保險費、盆洗費用
                        </p>

                        <a
                          href="#test"
                          className="btn btn-primary courseBtn mb-3"
                        >
                          立即報名
                          {/* <i className="fas fa-long-arrow-righ"></i> */}
                          <i className="fas fa-arrow-right text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="grade-title">
                      <p className="h2">中階課程</p>
                    </div>
                    <div className="row p-3">
                      <div className="col-md-6">
                        <ul>
                          <li>學習越浪的方式、如何判斷浪型以及應對海流狀況</li>
                          <li>練習成功到起浪區練習基本動作</li>
                          <li>在起浪區自行判斷浪況，試著成功追到浪站起來</li>
                          <li>強化海上應變能力</li>
                          <li>延續衝浪動作、板頭駕乘、走板或更進階動作</li>
                        </ul>
                      </div>
                      <div className="col-md-6 d-flex flex-column align-items-end">
                        <p className="h2 align-self-start">NT 1,000/人</p>
                        <p className="align-self-start">
                          包含：衝浪板使用、教練費、保險費、盆洗費用
                        </p>

                        <a
                          href="#test"
                          className="btn btn-primary courseBtn mb-3"
                        >
                          立即報名
                          {/* <i className="fas fa-long-arrow-righ"></i> */}
                          <i className="fas fa-arrow-right text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="grade-title">
                      <p className="h2">高階課程</p>
                    </div>
                    <div className="row p-3">
                      <div className="col-md-6">
                        <ul>
                          <li>熟練掌握並運用所有衝浪動作</li>
                          <li>深入掌握衝浪知識和理論</li>
                          <li>精準判斷波浪速度、破碎位置、啟乘時機</li>
                          <li>禮讓和幫助低階衝浪者</li>
                        </ul>
                      </div>
                      <div className="col-md-6 d-flex flex-column align-items-end">
                        <p className="h2 align-self-start">NT 1,000/人</p>
                        <p className="align-self-start">
                          包含：衝浪板使用、教練費、保險費、盆洗費用
                        </p>

                        <a
                          href="#test"
                          className="btn btn-primary courseBtn mb-3"
                        >
                          立即報名
                          {/* <i className="fas fa-long-arrow-righ"></i> */}
                          <i className="fas fa-arrow-right text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* QA問答  要引用react手風琴*/}
          <div className="row">
            <div className="col-sm-12 col-md-9 col-lg-10 m-auto">
              <div className="qawrap">
                <div className="text-secondary  my-5 h1 text-center">
                  <img
                    src={greenTitle}
                    className="greenTitle me-3"
                    alt="greenTitle"
                    height="24px"
                    weight="64px"
                  />
                  QA問答
                </div>

                <Accordion defaultActiveKey="">
                  <div className="my-3">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Q1.學習衝浪安全嗎？</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                  <div className="my-3">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        Q2.從來沒有衝過浪適合參加衝浪課程嗎？
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>

                  <div className="my-3">
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        Q3.上衝浪課我需要準備哪些東西？
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>

                  <div className="my-3">
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        Q4.別家衝浪教學價格都不一樣，怎麼選衝浪教學課程？
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                </Accordion>
              </div>
            </div>
          </div>

          {/* 課程體驗評價  */}
          <CourseEvaluate />

          {/* 課程報名 */}
          <div className="row">
            <div className="col-sm-12 col-md-9 col-lg-10 m-auto">
              <div className="text-center mt-5">
                <p className="h3">給自己一個不一樣的回憶</p>
                <p className="h1 text-primary">立即報名開心體驗衝浪!</p>
              </div>

              {/* 報名表單 */}
              <div className="form-wrap  p-3 shadow-lg" id="test">
                <div className="col-12  col-md-8 col-lg-7 m-auto">
                  <div className="text-secondary  my-5 h1 text-center">
                    <img
                      src={greenTitle}
                      className="greenTitle me-3"
                      alt="greenTitle"
                      height="24px"
                      weight="64px"
                    />
                    課程報名
                  </div>

                  <form action="/course/course-cart01" onSubmit={handleSubmit}>
                    <div className="p-2 m-0">
                      <label htmlFor="course">選擇課程</label>
                      <select
                        required
                        className="form-select course"
                        aria-label="Default select example"
                        value={course}
                        onChange={(e) => {
                          setCourse(e.target.value);
                        }}
                      >
                        <option value="">選擇課程</option>
                        <option value="體驗課程">體驗課程</option>
                        <option value="初階課程">初階課程</option>
                        <option value="中階課程">中階課程</option>
                        <option value="高階課程">高階課程</option>
                      </select>
                    </div>

                    <div className="p-2 m-0">
                      <p>選擇地點</p>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        value={courseSpot}
                        onChange={(e) => {
                          setCourseSpot(e.target.value);
                        }}
                        required
                      >
                        <option value="">選擇地點</option>
                        <option value="白沙灣">白沙灣</option>
                        <option value="烏石港">烏石港</option>
                        <option value="金樽">金樽</option>
                        <option value="福隆">福隆</option>
                      </select>
                    </div>

                    <div className="p-2 m-0">
                      <p>預約日期</p>
                      <label
                        htmlFor="phone"
                        className="visually-hidden"
                      ></label>
                      <input
                        type="date"
                        className="form-control"
                        id="date"
                        placeholder="date"
                        value={courseDate}
                        onChange={(e) => {
                          setCourseDate(e.target.value);
                        }}
                        required
                      />
                    </div>

                    <div className="d-flex align-items-center ">
                      <p className="p-2 m-0 ">選擇時段</p>
                      {timeOptions.map((v, i) => {
                        return (
                          <div key={i}>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="morning"
                                id="morning"
                                value={v}
                                checked={v === courseTime}
                                onChange={(e) => {
                                  setCourseTime(e.target.value);
                                }}
                                required
                              />
                              <label className="form-check-label" htmlFor={v}>
                                {v}
                              </label>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div>
                      <button
                        className="btn btn-primary text-white formBtn "
                        type="submit"
                      >
                        立即報名
                        <i className="fas fa-arrow-right text-white"></i>
                      </button>

                      <a href="/course/course-cart01" className="text-center">
                        送出表單同時跳轉到加入購物車
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseContent;
