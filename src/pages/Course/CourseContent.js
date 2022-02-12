import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// 大標題綠色波浪
import greenTitle from '../../data/images/greenTitle.svg';

// 6大特色圖片
import landcoach from '../../data/images/icon-landcoach.png';
import surfwithu from '../../data/images/icon-surfwithu.png';
import freeboard from '../../data/images/icon-freeboard.png';
import tools from '../../data/images/icon-tools.png';
import memory from '../../data/images/icon-memory.png';
import lifeguard from '../../data/images/icon-lifeguard.png';

import './CourseContent.scss';

function CourseContent() {
  return (
    <>
      {/* 衝浪課程內容6大特色 */}
      <div class="container">
        <div class="row">
          <p class="text-center">Surf Coutse Detail.</p>
          <p class="text-center">衝浪課程內容</p>
          <div className="text-secondary fw-bold mt-3 h1 text-center mb-3">
            <img
              src={greenTitle}
              className="greenTitle me-3"
              alt="greenTitle"
              height="24px"
              weight="64px"
            />
            FUNWAVE課程6大特色
          </div>
          <div class="col-7 border mb-5 p-3 row m-auto">
            <div class="col-12 col-md-6 col-lg-4">
              <div class="d-flex justify-content-center">
                <img src={landcoach} class="cover-fit" alt="" />
              </div>
              <div class="text-center">
                <p>陸上指導課程</p>
                <p>
                  30分鐘路上課程、衝浪前必備的海洋知識、衝浪前必知的海上安全觀念、衝浪地形解析
                </p>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
              <div class="d-flex justify-content-center">
                <img src={surfwithu} class="cover-fit" alt="" />
              </div>
              <div class="text-center">
                <p>下水陪衝課程</p>
                <p>
                  衝浪基本動作講解與示範、認識浪頭、認識洋流、基礎划水、基礎越浪、練習起乘基本動作，教練陪同
                </p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="d-flex justify-content-center">
                <img src={freeboard} class="cover-fit" alt="" />
              </div>
              <div class="text-center">
                <p>衝浪板免費使用</p>
                <p>1次衝浪新手練習板免費使用</p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="d-flex justify-content-center">
                <img src={tools} class="cover-fit" alt="" />
              </div>
              <div class="text-center">
                <p>一應俱全的衝浪裝備</p>
                <p>
                  提供當天所需要的衝浪裝備，包含防磨水母衣、防寒衣、盆洗設備
                </p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="d-flex justify-content-center">
                <img src={memory} class="cover-fit" alt="" />
              </div>
              <div class="text-center">
                <p>留下美好回憶</p>
                <p>
                  第一次站在衝浪板上，是件值得回味一輩子的回憶，我們提供您整堂課程以及你在海上帥氣、美美的衝浪回憶照片唷
                </p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="d-flex justify-content-center">
                <img src={lifeguard} class="cover-fit" alt="" />
              </div>
              <div class="text-center">
                <p>為您的安全把關</p>
                <p>
                  每位來學習衝浪課的學員，除了有水上求生專業的教練為安全把關外，我們也會為學員辦理保險。讓你衝的快樂也衝的安心
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 分級衝浪課程 */}
      <div class="container">
        <div class="row">
          <div class="col"></div>
          <div class="col-10">
            <div class="wrap border">
              <h1 class="text-center">分級衝浪課程</h1>
              <div class="item">
                <div class="title border">
                  <h3>體驗課程</h3>
                </div>
                <div class="row">
                  <div class="col-md-6">
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
                  <div class="col-md-6">
                    <div class="price-item">
                      <h3>$1000/人</h3>
                      <p>包含：衝浪板使用、教練費、保險費、盆洗費用</p>

                      <button class="btn btn-primary text-white courseBtn">
                        立即報名
                        {/* <FontAwesomeIcon icon="fa-solid fa-right-long" /> */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="title border">
                  <h3>初階課程</h3>
                </div>
                <div class="row">
                  <div class="col-md-6">
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
                  <div class="col-md-6">
                    <div class="price-item">
                      <h3>$2000/人</h3>
                      <p>包含：衝浪板使用、教練費、保險費、盆洗費用</p>

                      <button class="btn btn-primary text-white courseBtn">
                        立即報名
                        {/* <FontAwesomeIcon icon="fa-solid fa-right-long" /> */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="title border">
                  <h3>中階課程</h3>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <ul>
                      <li>學習越浪的方式、如何判斷浪型以及應對海流狀況</li>
                      <li>練習成功到起浪區練習基本動作</li>
                      <li>在起浪區自行判斷浪況，試著成功追到浪站起來</li>
                      <li>強化海上應變能力</li>
                      <li>延續衝浪動作、板頭駕乘、走板或更進階動作</li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <div class="price-item">
                      <h3>$2000/人</h3>
                      <p>包含：衝浪板使用、教練費、保險費、盆洗費用</p>

                      <button class="btn btn-primary text-white courseBtn">
                        立即報名
                        {/* <FontAwesomeIcon icon="fa-solid fa-right-long" /> */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="title border">
                  <h3>高階課程</h3>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <ul>
                      <li>熟練掌握並運用所有衝浪動作</li>
                      <li>深入掌握衝浪知識和理論</li>
                      <li>精準判斷波浪速度、破碎位置、啟乘時機</li>
                      <li>禮讓和幫助低階衝浪者</li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <div class="price-item">
                      <h3>$2000/人</h3>
                      <p>包含：衝浪板使用、教練費、保險費、盆洗費用</p>

                      <button class="btn btn-primary text-white courseBtn">
                        立即報名
                        {/* <FontAwesomeIcon icon="fa-solid fa-right-long" /> */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col"></div>
        </div>
      </div>

      {/* QA問答  */}
      <div class="container">
        <div class="row">
          <div class="col"></div>
          <div class="col-10">
            <div class="qawrap">
              <h1 class="text-center">QA問答</h1>

              {/* QA.1 */}
              <div class="accordion" id="accordionExample">
                <div class="accordion-item my-3">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      Q1.學習衝浪安全嗎？
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <strong>This is the second item's accordion body.</strong>
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>

                {/* QA.2  */}
                <div class="accordion-item my-3">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Q2.從來沒有衝過浪適合參加衝浪課程嗎？
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <strong>This is the second item's accordion body.</strong>
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>

                {/* QA.3  */}
                <div class="accordion-item my-3">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Q3.上衝浪課我需要準備哪些東西？
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <strong>This is the third item's accordion body.</strong>{' '}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>

                {/* QA.4  */}
                <div class="accordion-item my-3">
                  <h2 class="accordion-header" id="headingFour">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Q4.別家衝浪教學價格都不一樣，怎麼選衝浪教學課程？
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <strong>This is the second item's accordion body.</strong>
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col"></div>
        </div>
      </div>

      {/* 課程體驗評價  */}
      <div class="container">
        <div class="row col-9 m-auto">
          <div class="evaluate-wrap">
            <h1 class="text-center">課程體驗評價</h1>
            <div class="border p-3">
              {/* 第一個留言 */}
              <div class="border p-3 my-3">
                {/* 第一排抬頭 */}
                <div class="d-flex">
                  {/* 大頭照  */}
                  <figure class="avatar my-auto">
                    <img
                      class="rounded-circle"
                      src="https://fakeimg.pl/50x50/"
                      alt=""
                    />
                  </figure>
                  {/* 名稱 */}
                  <div class="name ms-3 me-5">頭號奈粉</div>
                  {/* 星星 */}
                  <ul class="stars d-flex list-unstyled">
                    <li>★</li>
                    <li>★</li>
                    <li>★</li>
                    <li>★</li>
                    <li>★</li>
                  </ul>
                  <div class="date ms-auto">2022年2月9日</div>
                </div>
                {/* 第二排文字區 */}
                <div class="ps-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  sint dolore tenetur magnam officia ut, aspernatur neque
                  dolorem
                </div>
                <div class="ps-5 my-3">看更多</div>
                {/* 圖片區  */}
                <div class="ps-5">
                  <img
                    src="https://fakeimg.pl/80x80/"
                    class="rounded-3"
                    alt=""
                  />
                </div>
              </div>

              {/* 第二個留言 */}
              <div class="border p-3 my-3">
                {/* 第一排抬頭 */}
                <div class="d-flex">
                  {/* 大頭照  */}
                  <figure class="avatar my-auto">
                    <img
                      class="rounded-circle"
                      src="https://fakeimg.pl/50x50/"
                      alt=""
                    />
                  </figure>
                  {/* 名稱 */}
                  <div class="name ms-3 me-5">頭號奈粉</div>
                  {/* 星星 */}
                  <ul class="stars d-flex list-unstyled">
                    <li>★</li>
                    <li>★</li>
                    <li>★</li>
                    <li>★</li>
                    <li>★</li>
                  </ul>
                  <div class="date ms-auto">2022年2月9日</div>
                </div>
                {/* 第二排文字區 */}
                <div class="ps-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  sint dolore tenetur magnam officia ut, aspernatur neque
                  dolorem
                </div>
                <div class="ps-5 my-3">看更多</div>
                {/* 圖片區 */}
                <div class="ps-5">
                  <img
                    src="https://fakeimg.pl/80x80/"
                    class="rounded-3"
                    alt=""
                  />
                </div>
              </div>

              {/* 第三個留言 */}
              <div class="border p-3 my-3">
                {/* 第一排抬頭 */}
                <div class="d-flex">
                  {/* 大頭照 */}
                  <figure class="avatar my-auto">
                    <img
                      class="rounded-circle"
                      src="https://fakeimg.pl/50x50/"
                      alt=""
                    />
                  </figure>
                  {/* 名稱  */}
                  <div class="name ms-3 me-5">頭號奈粉</div>
                  {/* 星星 */}
                  <ul class="stars d-flex list-unstyled">
                    <li>★</li>
                    <li>★</li>
                    <li>★</li>
                    <li>★</li>
                    <li>★</li>
                  </ul>
                  <div class="date ms-auto">2022年2月9日</div>
                </div>
                {/* 第二排文字區 */}
                <div class="ps-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  sint dolore tenetur magnam officia ut, aspernatur neque
                  dolorem
                </div>
                <div class="ps-5 my-3">看更多</div>
                {/* 圖片區 */}
                <div class="ps-5">
                  <img
                    src="https://fakeimg.pl/80x80/"
                    class="rounded-3"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 報名表單區塊 */}
      <div class="container">
        <div class="row">
          <div class="col-8 m-auto">
            <div class="text-center">
              <p>給自己一個不一樣的回憶</p>
              <p>立即報名開心體驗衝浪</p>
            </div>

            {/* 報名表單 */}
            <div class="p-3 border">
              <h1 class="text-center">課程報名</h1>
              <form action="">
                <div class="p-2 m-0">
                  <p>選擇課程</p>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>選擇課程</option>
                    <option value="1">體驗課程</option>
                    <option value="2">初階課程</option>
                    <option value="3">中階課程</option>
                    <option value="3">高階課程</option>
                  </select>
                </div>

                <div class="p-2 m-0">
                  <p>選擇地點</p>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>選擇地點</option>
                    <option value="1">白沙灣</option>
                    <option value="2">烏石港</option>
                    <option value="3">金樽</option>
                    <option value="3">福隆</option>
                  </select>
                </div>

                <div class="p-2 m-0">
                  <p>預約日期</p>
                  <label for="phone" class="visually-hidden"></label>
                  <input
                    type="date"
                    class="form-control"
                    id="date"
                    placeholder="date"
                  />
                </div>

                <div class="">
                  <p class="p-2 m-0">選擇時段</p>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label class="form-check-label" for="inlineRadio1">
                      上午
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label class="form-check-label" for="inlineRadio2">
                      下午
                    </label>
                  </div>
                </div>

                <div>
                  <button class="btn btn-primary text-white formBtn">
                    立即報名
                    {/* <FontAwesomeIcon icon="fa-solid fa-right-long" /> */}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseContent;
