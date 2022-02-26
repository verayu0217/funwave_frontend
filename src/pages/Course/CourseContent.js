import React, { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import moment from 'moment';
import { useAuth } from '../../context/auth';

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

function CourseContent(props) {
  const { auth, setAuth } = useAuth();

  // 預約日期調整明天以後才可選
  let today = moment().format('YYYY-MM-DD');
  today = today.split('-');
  today = today[0] + '-' + today[1] + '-' + (Number(today[2]) + 1);

  let navigate = useNavigate();

  // 選擇課程
  const [course, setCourse] = useState('');
  // 選擇地點
  const [courseSpot, setCourseSpot] = useState('');
  // 預約日期
  const [courseDate, setCourseDate] = useState('');
  // 課程時間
  const [courseTime, setCourseTime] = useState('');
  const timeOptions = ['上午', '下午'];

  const [goTo, setGoTo] = useState(false);

  //提交報名資訊將資料帶到下一頁
  function addSubmit(e) {
    e.preventDefault();

    const coursePrice = course === '體驗課程' ? 1000 : 2000;

    let data = [
      {
        course: course,
        courseSpot: courseSpot,
        courseDate: courseDate,
        courseTime: courseTime,
        coursePrice: coursePrice,
      },
    ];

    // 將選擇的資料逐一存進localStorage
    localStorage.setItem('course', JSON.stringify(course));
    localStorage.setItem('courseTime', JSON.stringify(courseTime));
    localStorage.setItem('courseSpot', JSON.stringify(courseSpot));
    localStorage.setItem('courseDate', JSON.stringify(courseDate));
    localStorage.setItem('coursePrice', coursePrice);

    // 如果有登入導向另外一頁
    if (goTo) {
      return navigate('/course/course-cart', { replace: true });
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
                  <img src={landcoach} className="cover-img" alt="" />
                </div>
                <div className="text-center">
                  <p className="text-secondary h3">陸上指導課程</p>
                  <p>
                    30分鐘路上課程、衝浪前必備的海洋知識、衝浪前必知的海上安全觀念、衝浪地形解析
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="d-flex justify-content-center">
                  <img src={surfwithu} className="cover-img" alt="" />
                </div>
                <div className="text-center">
                  <p className="text-secondary h3">下水陪衝課程</p>
                  <p>
                    衝浪基本動作講解與示範、認識浪頭、認識洋流、基礎划水、基礎越浪、練習起乘基本動作，教練陪同
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="d-flex justify-content-center">
                  <img src={freeboard} className="cover-img" alt="" />
                </div>
                <div className="text-center">
                  <p className="text-secondary h3">衝浪板免費使用</p>
                  <p>1次衝浪新手練習板免費使用</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="d-flex justify-content-center">
                  <img src={tools} className="cover-img" alt="" />
                </div>
                <div className="text-center">
                  <p className="text-secondary h3">一應俱全的衝浪裝備</p>
                  <p>
                    提供當天所需要的衝浪裝備，包含防磨水母衣、防寒衣、盆洗設備
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="d-flex justify-content-center">
                  <img src={memory} className="cover-img" alt="" />
                </div>
                <div className="text-center">
                  <p className="text-secondary h3">留下美好回憶</p>
                  <p>
                    第一次站在衝浪板上，是件值得回味一輩子的回憶，我們提供您整堂課程以及你在海上帥氣、美美的衝浪回憶照片唷
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="d-flex justify-content-center">
                  <img src={lifeguard} className="cover-img" alt="" />
                </div>
                <div className="text-center">
                  <p className="text-secondary h3">為您的安全把關</p>
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
                        <p className="h2 align-self-start">NT 2,000/人</p>
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
                        <p className="h2 align-self-start">NT 2,000/人</p>
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
                        <p className="h2 align-self-start">NT 2,000/人</p>
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
                      <Accordion.Header>Q1.衝浪會危險嗎？</Accordion.Header>
                      <Accordion.Body>
                        從事任何一種運動，一定有它的風險
                        ，而衝浪活動跟許多運動比起來或許他稱做極限運動
                        ，然而它比你想像中的還安全
                        ；前提是你必須具備該有的正確觀念，有教練指導與自行摸索，風險是不同的。滑板與衝浪似乎很像，但滑板儘管是在安全的陸地，卻很容易摔傷，衝浪落水是由大海做緩衝，不痛也不容易受傷，讓人容易著迷願意一試再試。
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                  <div className="my-3">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        Q2.不會游泳還是可以學衝浪嗎？
                      </Accordion.Header>
                      <Accordion.Body>
                        可以參與體驗課程，但您必須告知教練你不具備游泳能力。場地的挑選尤其對不會游泳的人格外重要，最適合的是平緩的沙岸，我們曾遇過不會有游泳的人，最後衝浪跟游泳都一起進步，台灣西部幾乎為平緩沙岸，尤其竹南近岸水淺夏季浪緩且小，非常適合初學者。
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>

                  <div className="my-3">
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Q3.衝浪會很累嗎?</Accordion.Header>
                      <Accordion.Body>
                        衝浪所需要運動的肌肉群是你平常沒有在用的，我們不只是需要面對衝浪這個運動，還要應付海浪的衝擊甚至海流。
                        若您期望你的第一堂衝浪課是從容應付的，
                        請你兩個禮拜前做基礎的體力訓練，如：慢跑、走樓梯、瑜伽、伏地挺身都是很好課前的運動。
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>

                  <div className="my-3">
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        Q4.上衝浪課之前需要帶什麼？
                      </Accordion.Header>
                      <Accordion.Body>
                        【衣著】以夏季來說，教學的地方基本上會提供防磨衣，或稱水母衣，防磨衣。
                        【下着部分】男生：是需要 一 件
                        四角泳褲、沙灘褲、或正統的衝浪褲 。
                        女生：泳裝、熱褲、運動排汗長褲皆可。
                        【其餘部分】隱形眼鏡、飲用水、防曬乳。
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                </Accordion>
              </div>
            </div>
          </div>

          {/* 課程體驗評價  */}
          {/* <CourseEvaluate /> */}

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
                  <form onSubmit={addSubmit}>
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

                    <div className="p-2 mt-3">
                      <label>選擇地點</label>
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
                        <option value="沙崙">沙崙</option>
                        <option value="白沙灣">白沙灣</option>
                        <option value="金山">金山</option>
                        <option value="福隆">福隆</option>
                        <option value="烏石港">烏石港</option>
                        <option value="金樽">金樽</option>
                        <option value="南灣">南灣</option>
                        <option value="旗津">旗津</option>
                      </select>
                    </div>

                    <div className="p-2 mt-3">
                      <label>預約日期</label>
                      <input
                        type="date"
                        className="form-control"
                        id="date"
                        placeholder="date"
                        value={courseDate}
                        min={today}
                        onChange={(e) => {
                          setCourseDate(e.target.value);
                        }}
                        required
                      />
                    </div>

                    <div className="d-flex align-items-center my-3 ">
                      <label className="p-2 ">選擇時段</label>
                      {timeOptions.map((v, i) => {
                        return (
                          <div key={i}>
                            <div className="form-check form-check-inline ">
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
                        onClick={() => {
                          if (auth === null) {
                            return alert('請先登入會員');
                          } else {
                            return setGoTo(true);
                          }
                        }}
                      >
                        立即報名
                        <i className="fas fa-arrow-right text-white"></i>
                      </button>
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
