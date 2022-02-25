import React from 'react';
import { useAuth } from '../../context/auth';
import './Home.scss';
import logoPicW from '../../data/images/logoPicW.svg';
import greenTitle from '../../data/images/greenTitle.svg';

import { Figure } from 'react-bootstrap';
// react-icons
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
// import { BsStarHalf } from 'react-icons/bs'; // 半星星
import { BiHeart } from 'react-icons/bi';
// import { FaHeart } from 'react-icons/fa'; // 全愛心

function Home() {
  const { auth, setAuth } = useAuth();
  console.log('authHome', auth);
  return (
    <>
      {/* 首圖 */}
      <div className="container-fluid heroSectionHome">
        {/* 首頁logo */}
        <div className="d-flex justify-content-center align-items-end logoPicHome">
          <img
            src={logoPicW}
            className="logoPicW ratio ratio-1x1"
            alt="logoPicW"
            height=""
          ></img>
        </div>
        {/* 首頁slogan */}
        <div className="d-flex justify-content-center text-center sloganHome px-5">
          <h4>Let’s have FUN and WAVE !</h4>
        </div>
      </div>{' '}
      {/* container-fluid */}
      {/* 關於 */}
      <div className="container-fluid aboutSectionHome">
        <div className="container aboutContainerHome">
          <div className="row justify-content-center pb-3">
            {/* 大標題 */}
            <div className="d-flex justify-content-center align-items-center titleHome">
              <img
                src={greenTitle}
                className="me-3"
                alt="greenTitle"
                height="24px"
                weight="64px"
              />
              <h1 className="m-0">FUNWAVE · FUN浪</h1>
            </div>
          </div>
          {/* 副標題 */}
          <div className="text-center pb-3">
            <h3 className="m-0">一群衝浪愛好者建立的浪友集散地</h3>
          </div>
          {/* 關於介紹內容 */}
          <div className="text-center aboutContentHome pb-5 px-5 gray">
            <h5 className="m-0 text-center">
              在這裡，你可以找到精選衝浪商品、專業各式課程、浪點即時資訊、最新衝浪資訊。
              <br />
              讓我們一起FUN，一起浪！
            </h5>
          </div>
          {/* 四大特色介紹 */}
          <div className="row row-cols-xs-2 row-cols-sm-2 row-cols-md-4 d-flex justify-content-center align-items-center aboutCircleHome mt-4">
            {/* 介紹一 */}
            <div className="col-6 col-md-3 m-0 px-3 pb-3">
              {/* 圓圖 */}
              <div className="selectProductAboutCircleItemHome shadow ratio ratio-1x1 mx-auto mb-2"></div>
              {/* 圓圖配字 */}
              <div className="text-center">
                <h3>精選衝浪商品</h3>
              </div>
            </div>
            {/* 介紹二 */}
            <div className="col-6 col-md-3 m-0 px-3 pb-3">
              <div className="teachClassAboutCircleItemHome shadow ratio ratio-1x1 mx-auto mb-2"></div>
              <div className="text-center">
                <h3>專業各式課程</h3>
              </div>
            </div>
            {/* 介紹三 */}
            <div className="col-6 col-md-3 m-0 px-3 pb-3">
              <div className="surfSpotInfoAboutCircleItemHome shadow ratio ratio-1x1 mx-auto mb-2"></div>
              <div className="text-center">
                <h3>浪點即時資訊</h3>
              </div>
            </div>
            {/* 介紹四 */}
            <div className="col-6 col-md-3 m-0 px-3 pb-3">
              <div className="newInfoAboutCircleItemHome shadow ratio ratio-1x1 mx-auto mb-2"></div>
              <div className="text-center">
                <h3>最新衝浪資訊</h3>
              </div>
            </div>
          </div>{' '}
          {/* row */}
        </div>{' '}
        {/* container */}
      </div>{' '}
      {/* container-fluid */}
      {/* 商店 */}
      <div className="conatainer shopSectionHome">
        {/* 商店標頭 */}
        <div className="row justify-content-center pb-3">
          <div className="d-flex justify-content-center align-items-center titleHome">
            <img
              src={greenTitle}
              className="me-3"
              alt="greenTitle"
              height="24px"
              weight="64px"
            />
            <h1 className="m-0">FUN商店 · 精選衝浪商品 </h1>
          </div>
        </div>{' '}
        {/* row */}
      </div>{' '}
      {/* container */}
      {/* 客製化 */}
      <div className="container-fluid costumSectionHome"></div>{' '}
      {/* container */}
    </>
  );
}

export default Home;
