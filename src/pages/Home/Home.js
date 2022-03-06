// 引用
import React, { useState, useEffect } from 'react';
import './Home.scss';

// 首頁、關於引用
import logoPicW from '../../data/images/home/logoPicW.png';
import greenTitle from '../../data/images/greenTitle.svg';
import lightGreenTitle from '../../data/images/lightGreenTitle.svg';
import waveVerticalW from '../../data/images/home/waveVerticalW.svg';

import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaLine } from 'react-icons/fa';

// 商店引用
import { Figure, Card, Button } from 'react-bootstrap';
// react-icons
import { AiFillStar } from 'react-icons/ai';
import { FaHeart } from 'react-icons/fa'; // 全愛心
import { RiArrowRightCircleFill } from 'react-icons/ri';
import { RiArrowLeftCircleFill } from 'react-icons/ri';
import { AiFillEye } from 'react-icons/ai';
import { BsFillCartPlusFill } from 'react-icons/bs';

// 客製化引用
import customPic from '../../data/images/home/customPic.png';
import handLove from '../../data/images/home/handLove.png';
import make from '../../data/images/home/make.png';
import yeahStar from '../../data/images/home/yeahStar.png';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { FaCrown } from 'react-icons/fa';

// 課程、教練引用
import coachHome01 from '../../data/images/home/coachHome01.png';
import coachHome02 from '../../data/images/home/coachHome02.png';
import coachHome03 from '../../data/images/home/coachHome03.png';

// 浪點引用
import taiwanHome from '../../data/images/home/taiwanHome.png';
import { MdLocationOn } from 'react-icons/md';

// 資訊引用

// 撈資料引入
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { IMAGE_URL } from '../../utils/config';
import { useNavigate, Link } from "react-router-dom";

// 卡片引用
import HomeSlide from './HomeSlide'; ////////





function Home() {

    // 初始化商品左右按鈕的狀態 
    const [suitBtnState, setSuitBtnState] = useState("1");

    // 初始化商品資料的狀態 
    const [suitData, setSuitData] = useState([]);

    // 初始化卡片文章資料的狀態 
    const [cardInfoData, setCardInfoData] = useState([]);

    // 處理商品右按鈕
    let handleSuitBtnStateRight = (suitBtnState) => {
        let numSuitBtnState = 1;
        let stringSuitBtnState = "1";
        numSuitBtnState = Number(suitBtnState);
        
        if (numSuitBtnState >= 1 && numSuitBtnState <= 5) {
            numSuitBtnState = numSuitBtnState + 1;
        }
        else {
            if (numSuitBtnState >= 6) {
                numSuitBtnState = 1;
            }
            else { // numSuitBtnState < 1
                numSuitBtnState = 6;
            }
        }

        stringSuitBtnState = numSuitBtnState.toString();
        setSuitBtnState(stringSuitBtnState);
        return null;
    }

    // 處理商品左按鈕函式
    let handleSuitBtnStateLeft = (suitBtnState) => {
        let numSuitBtnState = 1;
        let stringSuitBtnState = "1";
        numSuitBtnState = Number(suitBtnState);

        if (numSuitBtnState >= 2 && numSuitBtnState <= 6) {
            numSuitBtnState = numSuitBtnState - 1;
        }
        else {
            if (numSuitBtnState <= 1) {
                numSuitBtnState = 6;
            }
            else { // numSuitBtnState > 6
                numSuitBtnState = 1;
            }
        }

        stringSuitBtnState = numSuitBtnState.toString();
        setSuitBtnState(stringSuitBtnState);
        return null;
    }

    // console.log("在外面suitBtnState為:" + suitBtnState);

    // 處理千分位函式
    function thousand(x) {
        return x.toLocaleString('zh-TW');
    }

    // 載入商品套組didUpdate
    useEffect( () => {  

        // console.log("在useEffect裡suitBtnState為:" + suitBtnState);
    
        switch(suitBtnState) {
        case "1":
            // console.log("switch的case1，suitBtnState為：" + suitBtnState);
            let getSuitOneInfo = async () => {
                // 模擬和伺服器要資料
                let response = await axios.get(`${API_URL}/home/suit-one`);
                //看看response抓到什麼
                // console.log(response);
                // 最後設定到狀態中
                setSuitData(response.data);
            };
            getSuitOneInfo();
            break;
        case "2":
            // console.log("switch的case2，suitBtnState為：" + suitBtnState);
            let getSuitTwoInfo = async () => {
                // 模擬和伺服器要資料
                let response = await axios.get(`${API_URL}/home/suit-two`);
                //看看response抓到什麼
                // console.log(response);
                // 最後設定到狀態中
                setSuitData(response.data);
            };
            getSuitTwoInfo();
            break;
        case "3":
            // console.log("switch的case3，suitBtnState為：" + suitBtnState);
            let getSuitThreeInfo = async () => {
                // 模擬和伺服器要資料
                let response = await axios.get(`${API_URL}/home/suit-three`);
                //看看response抓到什麼
                // console.log(response);
                // 最後設定到狀態中
                setSuitData(response.data);
            };
            getSuitThreeInfo();
            break;
        case "4":
            // console.log("switch的case4，suitBtnState為：" + suitBtnState);
            let getSuitFourInfo = async () => {
                // 模擬和伺服器要資料
                let response = await axios.get(`${API_URL}/home/suit-four`);
                //看看response抓到什麼
                // console.log(response);
                // 最後設定到狀態中
                setSuitData(response.data);
            };
            getSuitFourInfo();
            break;
        case "5":
            // console.log("switch的case5，suitBtnState為：" + suitBtnState);
            let getSuitFiveInfo = async () => {
                // 模擬和伺服器要資料
                let response = await axios.get(`${API_URL}/home/suit-five`);
                //看看response抓到什麼
                // console.log(response);
                // 最後設定到狀態中
                setSuitData(response.data);
            };
            getSuitFiveInfo();
            break;
        case "6":
            // console.log("switch的case6，suitBtnState為：" + suitBtnState);
            let getSuitSixInfo = async () => {
                // 模擬和伺服器要資料
                let response = await axios.get(`${API_URL}/home/suit-six`);
                //看看response抓到什麼
                // console.log(response);
                // 最後設定到狀態中
                setSuitData(response.data);
            };
            getSuitSixInfo();
            break;
        default:
            break;
        }
    }, [suitBtnState]);

    // console.log("現在進入return前的suitData為:");
    // console.log(suitData);

    // 載入卡片文章資料didMount
    useEffect( () => {
        // 先開起載入指示器
        // setIsLoading(true);

            let getCardInfoData = async () => {
                // 模擬和伺服器要資料
                let response = await axios.get(`${API_URL}/home/card-info-home`);
                //看看response抓到什麼
                // console.log(response);
                // 最後設定到狀態中
                setCardInfoData(response.data);
            };
            getCardInfoData();

    }, []);




return (
    <>

    <div> {/* div */}
    <div className="container-fluid outsideBox">
        <div className="container-fluid heroSectionHome">
                {/* 首頁logo */}
                <div className="d-flex justify-content-center align-items-end logoPicHome">
                        <img src={logoPicW} className="logoPicW" alt="logoPicW" height=""></img>
                </div>
                {/* 首頁slogan */}
                <div className="d-flex justify-content-center text-center sloganHome px-5">
                    <h4>Let's have FUN and WAVE !</h4>
                </div>
                <div className="d-flex justify-content-center align-items-center flex-column waveVerticalWBox">
                        <a href="https://twitter.com/funwave_funwave">
                            <BsFacebook
                                href=""
                                className="mb-3"
                                size={24}
                                color="#ffffff"
                            />
                        </a>
                        <a href="https://twitter.com/funwave_funwave">
                            <AiFillInstagram
                                className="mb-3"
                                size={30}
                                color="#ffffff"
                            />
                        </a>                      
                        <a href="https://twitter.com/funwave_funwave">
                            <AiFillTwitterCircle
                                className="mb-3"
                                size={30}
                                color="#ffffff"
                            />
                        </a>
                        <a href="https://line.me/ti/g2/rnd10J2RcMA2iyHV7Z7scWAkX3g-K7m88yfvTg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default">
                            <FaLine
                                className="mb-4"
                                size={30}
                                color="#ffffff"
                            />
                        </a>
                        <img src={waveVerticalW} className="waveVerticalW" alt="waveVerticalW" width="12"></img>
                </div>  
        </div> {/* container-fluid */}


        <div className="container-fluid translateBox">
            {/* 關於 */}
            <div className="container-fluid aboutSectionHome">
                <div className="container mx-auto aboutContainerHome">
                    <div className="row mx-auto pb-4">  
                        {/* 大標題 */}
                        <div className="d-flex justify-content-center align-items-center titleAboutHome">
                            <img src={greenTitle} className="me-3" alt="greenTitle" height="24px" width="64px"/>
                            <h1 className="m-0 fw-bold deepblue">FUNWAVE · FUN浪</h1>
                        </div>
                    </div>
                    {/* 副標題 */}
                    <div className="text-center pb-3">
                        <h3 className="m-0">一群衝浪愛好者建立的浪友集散地</h3>
                    </div>
                    {/* 關於介紹內容 */}
                    <div className="text-center aboutContentHome pb-5 px-5 gray">
                        <h5 className="m-0 text-center">在這裡，你可以找到精選衝浪商品、專業各式課程、浪點即時資訊、最新衝浪資訊。<br/>讓我們一起FUN，一起浪！</h5>
                    </div>

                    {/* 四大特色介紹 */}       
                    <div className="row d-flex justify-content-center align-items-center aboutCircleHome mt-4">
                        {/* 介紹一 */}
                        <div className="col-6 col-md-3 m-0 px-3 pb-3">
                            {/* 圓圖 */}
                            <a href="#shopSectionHome">
                                <div className="productCircleBoxHome mx-auto ratio ratio-1x1 mb-2">
                                    <div className="productCircleItemHome-front shadow mx-auto mb-2"></div>
                                    <div className="productCircleItemHome-back shadow mx-auto mb-2 d-flex justify-content-center align-items-center">
                                        <h5 className="deepblue text-center">直接往下看衝浪商品</h5>
                                    </div>
                                </div>
                                {/* 圓圖配字 */}
                                <div className="wordCircleHome text-center">
                                    <h3>精選衝浪商品</h3>
                                </div>
                            </a>
                        </div>
                        {/* 介紹二 */}
                        <div className="col-6 col-md-3 m-0 px-3 pb-3">
                            {/* 圓圖 */}
                            <a href="#classSectionHome">
                                <div className="teachClassCircleBoxHome mx-auto ratio ratio-1x1 mb-2">
                                    <div className="teachClassCircleItemHome-front shadow mx-auto mb-2"></div>
                                    <div className="teachClassCircleItemHome-back shadow mx-auto mb-2 d-flex justify-content-center align-items-center">
                                    <h5 className="deepblue text-center">直接往下看專業課程</h5>
                                    </div>
                                </div>
                                {/* 圓圖配字 */}
                                <div className="wordCircleHome text-center">
                                    <h3>專業各式課程</h3>
                                </div>
                            </a>
                        </div>

                        {/* 介紹三 */}
                        <div className="col-6 col-md-3 m-0 px-3 pb-3 d-flex flex-column">
                            <a href="#costumSectionHome">
                                <div className="customCircleBoxHome mx-auto ratio ratio-1x1 mb-2">
                                    <div className="customCircleItemHome-front shadow mx-auto"></div>
                                    <div className="customCircleItemHome-back shadow mx-auto d-flex justify-content-center align-items-center">
                                    <h5 className="deepblue text-center">直接往下看客製浪板</h5>
                                    </div>
                                </div>
                                <div className="wordCircleHome text-center">
                                    <h3>客製化衝浪板</h3>
                                </div>
                            </a>
                        </div>
                        {/* 介紹四 */}
                        <div className="col-6 col-md-3 m-0 px-3 pb-3">
                            <a href="#surfPointSectionHome">
                                <div className="surfSpotCircleBoxHome mx-auto ratio ratio-1x1 mb-2">
                                    <div className="surfSpotCircleItemHome-front shadow mx-auto"></div>
                                    <div className="surfSpotCircleItemHome-back shadow mx-auto d-flex justify-content-center align-items-center">
                                    <h5 className="deepblue text-center">直接往下看浪點資訊</h5>
                                    </div>
                                </div>
                                <div className="wordCircleHome text-center">
                                    <h3>浪點即時資訊</h3>
                                </div>
                            </a>
                        </div>

                    </div> {/* row */}

                </div> {/* container */}

            </div> {/* container-fluid */}

            {/* 商店 */}
            <div className="conatainer shopSectionHome">
                {/* 商店標頭 */}
                <div className="row d-flex space-between pb-4">   
                        <div className="d-flex justify-content-center align-items-center titleShopHome">
                            <img src={greenTitle} className="me-3" alt="greenTitle" height="24px" width="64px"/>
                            <h1 id="shopSectionHome" className="m-0 fw-bold deepblue">FUN商店 · 精選衝浪商品 </h1>
                        </div>
                        {/* 商店按鈕 */}
                        {/* <div className="d-flex justify-content-center">
                            <a className="btn btn-primary ps-5" href="/products">來去商店逛逛
                            <FaLongArrowAltRight
                                    className="ps-2 me-5"
                                    size={24}
                                    color="#ffffff"
                            />
                            </a>
                        </div>  */}
                        {/* 商店按鈕-結束 */}
                </div> {/* row */}

                {/* 套組商品-map */}
                {suitData.map( (suitDataItem, i) => {
                    return (
                    <React.Fragment key={i}>

                    {/* 套組商品 */}
                    <div className="row">
                            {/* 左列商品 */}
                            <div className="col-12 col-sm-3 d-flex justify-content-center align-items-center flex-column">
                                {/* 左上商品 */}
                                <Figure className="mt-4 position-relative">
                                    <Figure.Caption className="d-flex justify-content-center">
                                        <h3 className="mb-5 mt-2 fw-bold">衝浪板配件</h3>
                                    </Figure.Caption>
                                    <div className="shopPicLeftRightHome d-flex justify-content-center align-items-center my-auto">
                                        <Figure.Image
                                            width="80%"
                                            alt={suitDataItem.imgB}
                                            src={`${IMAGE_URL}/products/${suitDataItem.imgB}`}
                                            />
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <AiFillStar className="me-2" size={20} color="#ff7f6a" />
                                        <h5 className="my-auto">4.5</h5>
                                    </div>
                                    <Figure.Caption className="d-flex justify-content-center">
                                        <p className="mb-0 mt-2 fw-bold">{suitDataItem.nameB}</p>
                                    </Figure.Caption>
                                    {/* <Figure.Caption className="d-flex justify-content-center">
                                        <p className="mb-2">小分類</p>
                                    </Figure.Caption> */}
                                        <Figure.Caption className="d-flex justify-content-center">
                                        <p className="text-dark">NT {thousand(suitDataItem.priceB)}</p>
                                    </Figure.Caption>
                                    <div className="d-flex justify-content-center mt-0">
                                        {/* <AiFillEye
                                            className="me-2"
                                            size={20}
                                            color="#ff7f6a"
                                        />
                                        <FaHeart
                                            className="me-2"
                                            size={20}
                                            color="#a0a7ac"
                                        /> */}
                                        <Link to={`/products/${suitDataItem.noB.substr( 0 , 7 )}`}>
                                            <BsFillCartPlusFill
                                                className="me-2"
                                                size={30}
                                                color="#17a8a2"
                                            />
                                        </Link>
                                    </div>                        
                                </Figure>
                                {/* 左下商品 */}
                                <Figure className="mt-4 position-relative">
                                    <div className="shopPicLeftRightHome d-flex justify-content-center align-items-center my-auto">
                                        <Figure.Image
                                            width="80%"
                                            alt={suitDataItem.imgC}
                                            src={`${IMAGE_URL}/products/${suitDataItem.imgC}`}
                                        />
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <AiFillStar className="me-2" size={20} color="#ff7f6a" />
                                        <h5 className="my-auto">4.5</h5>
                                    </div>
                                    <Figure.Caption className="d-flex justify-content-center">
                                        <p className="mb-0 mt-2 fw-bold">{suitDataItem.nameC}</p>
                                    </Figure.Caption>
                                    {/* <Figure.Caption className="d-flex justify-content-center">
                                        <p className="mb-2">小分類</p>
                                    </Figure.Caption> */}
                                        <Figure.Caption className="d-flex justify-content-center">
                                        <p className="text-dark">NT {thousand(suitDataItem.priceC)}</p>
                                    </Figure.Caption>
                                    <div className="d-flex justify-content-center mt-0">
                                        {/* <AiFillEye
                                            className="me-2"
                                            size={20}
                                            color="#ff7f6a"
                                        />
                                        <FaHeart
                                            className="me-2"
                                            size={20}
                                            color="#a0a7ac"
                                        /> */}
                                        <Link to={`/products/${suitDataItem.noC.substr( 0 , 7 )}`}>
                                            <BsFillCartPlusFill
                                                className="me-2"
                                                size={30}
                                                color="#17a8a2"
                                            />
                                        </Link>
                                    </div>                        
                                </Figure>
                            </div> {/* 左列商品-結束 */}
                            {/* 左按鈕 嗨*/}
                            <div className="col-1 d-flex justify-content-center align-items-center">
                                <button
                                    type="button"
                                    className="btn rounded-circle p-0"
                                    onClick={() => handleSuitBtnStateLeft(suitBtnState)}
                                >
                                <RiArrowLeftCircleFill size={36} color="#17A8A2" />
                                </button>
                            </div>
                            {/* 中列商品 */}
                            <div className="col-12 col-sm-4 d-flex justify-content-center align-items-center flex-column">
                            <Figure className="mt-4 position-relative">
                                    <Figure.Caption className="d-flex justify-content-center">
                                        <h3 className="mb-5 mt-2 fw-bold">衝浪板</h3>
                                    </Figure.Caption>
                                    <div className="shopPicCenterHome d-flex justify-content-center align-items-center my-auto">
                                        <Figure.Image
                                        width="100%"
                                        alt="longboard1"
                                        src={`${IMAGE_URL}/products/${suitDataItem.imgA}`}
                                        />
                                    </div>
                                    {/* <FaHeart
                                        size={20}
                                        color="#ff7f6a"
                                        className="float-end position-absolute top-0 end-0"
                                    /> */}
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <AiFillStar className="me-2" size={20} color="#ff7f6a" />
                                        <h5 className="my-auto">4.5</h5>
                                    </div>
                                    <Figure.Caption className="d-flex justify-content-center">
                                        <p className="mb-0 mt-2 fw-bold">{suitDataItem.nameA}</p>
                                    </Figure.Caption>
                                    {/* <Figure.Caption className="d-flex justify-content-center">
                                        <p className="mb-2">小分類</p>
                                    </Figure.Caption> */}
                                    <Figure.Caption className="d-flex justify-content-center">
                                        <p className="text-dark">NT {thousand(suitDataItem.priceA)}</p>
                                    </Figure.Caption>
                                    <div className="d-flex justify-content-center mt-0">
                                        {/* <AiFillEye
                                            className="me-2"
                                            size={20}
                                            color="#ff7f6a"
                                        />
                                        <FaHeart
                                            className="me-2"
                                            size={20}
                                            color="#a0a7ac"
                                        /> */}
                                        <Link to={`/products/${suitDataItem.noA.substr( 0 , 7 )}`}>
                                            <BsFillCartPlusFill
                                                className="me-2"
                                                size={30}
                                                color="#17a8a2"
                                            />
                                        </Link>
                                    </div>     
                                </Figure>
                                {/* 商店按鈕 */}
                                <div className="d-flex justify-content-center pt-5">
                                    <a className="btn btn-primary ps-5" href="/products">來去商店逛逛
                                    <FaLongArrowAltRight
                                            className="ps-2 me-5"
                                            size={24}
                                            color="#ffffff"
                                    />
                                    </a>
                                </div> {/* 商店按鈕-結束 */}
                            </div> {/* 中列商品-結束 */}
                            {/* 右按鈕 嗨*/}
                            <div className="col-1 d-flex justify-content-center align-items-center">
                                <button
                                    type="button"
                                    className="btn rounded-circle p-0"
                                    onClick={() => handleSuitBtnStateRight(suitBtnState)}
                                >
                                <RiArrowRightCircleFill size={36} color="#17A8A2" />
                                </button>
                            </div>


                            {/* 右列商品 */}
                            <div className="col-12 col-sm-3 d-flex justify-content-center align-items-center flex-column">
                                {/* 右上商品 */}
                                <Figure className="mt-4 position-relative">
                                    <Figure.Caption className="d-flex justify-content-center">
                                        <h3 className="mb-5 mt-2 fw-bold">衝浪相關衣物</h3>
                                    </Figure.Caption>
                                    <div className="shopPicLeftRightHome d-flex justify-content-center align-items-center my-auto">
                                        <Figure.Image
                                            width="80%"
                                            alt={suitDataItem.imgE}
                                            src={`${IMAGE_URL}/products/${suitDataItem.imgE}`}
                                    />
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <AiFillStar className="me-2" size={20} color="#ff7f6a" />
                                        <h5 className="my-auto">4.5</h5>
                                    </div>
                                    <Figure.Caption className="d-flex justify-content-center">
                                        <p className="mb-0 mt-2 fw-bold">{suitDataItem.nameE}</p>
                                    </Figure.Caption>
                                    {/* <Figure.Caption className="d-flex justify-content-center">
                                        <p className="mb-2">小分類</p>
                                    </Figure.Caption> */}
                                        <Figure.Caption className="d-flex justify-content-center">
                                        <p className="text-dark">NT {thousand(suitDataItem.priceE)}</p>
                                    </Figure.Caption>
                                    <div className="d-flex justify-content-center mt-0">
                                        {/* <AiFillEye
                                            className="me-2"
                                            size={20}
                                            color="#ff7f6a"
                                        />
                                        <FaHeart
                                            className="me-2"
                                            size={20}
                                            color="#a0a7ac"
                                        /> */}
                                        <Link to={`/products/${suitDataItem.noE.substr( 0 , 7 )}`}>
                                            <BsFillCartPlusFill
                                                className="me-2"
                                                size={30}
                                                color="#17a8a2"
                                            />
                                        </Link>
                                    </div>                        
                                </Figure>
                                {/* 右下商品 */}
                                <Figure className="mt-4 position-relative">
                                    <div className="shopPicLeftRightHome d-flex justify-content-center align-items-center my-auto">
                                        <Figure.Image
                                            width="80%"
                                            alt={suitDataItem.imgF}
                                            src={`${IMAGE_URL}/products/${suitDataItem.imgF}`}
                                            />
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <AiFillStar className="me-2" size={20} color="#ff7f6a" />
                                        <h5 className="my-auto">4.5</h5>
                                    </div>
                                    <Figure.Caption className="d-flex justify-content-center">
                                        <p className="mb-0 mt-2 fw-bold">{suitDataItem.nameF}</p>
                                    </Figure.Caption>
                                    {/* <Figure.Caption className="d-flex justify-content-center">
                                        <p className="mb-2">小分類</p>
                                    </Figure.Caption> */}
                                        <Figure.Caption className="d-flex justify-content-center">
                                        <p className="text-dark">NT {thousand(suitDataItem.priceF)}</p>
                                    </Figure.Caption>
                                    <div className="d-flex justify-content-center mt-0">
                                        {/* <AiFillEye
                                            className="me-2"
                                            size={20}
                                            color="#ff7f6a"
                                        />
                                        <FaHeart
                                            className="me-2"
                                            size={20}
                                            color="#a0a7ac"
                                        /> */}
                                        <Link to={`/products/${suitDataItem.noF.substr( 0 , 7 )}`}>
                                            <BsFillCartPlusFill
                                                className="me-2"
                                                size={30}
                                                color="#17a8a2"
                                            />
                                        </Link>
                                    </div>                        
                                </Figure>
                            </div> {/* 右列商品-結束 */} 
                    </div> {/* row */}    

                    </React.Fragment>
                    );
                })} {/* 套組商品 - map */}

            </div> {/* 商店 - container */}

            {/* 客製化 */}
            <div id="costumSectionHome" className="costumPicBoxHome">
            <div className="container costumSectionHome">
                <div className="row py-5">
                    <div className="col-xs-1 col-md-6 col-lg-6 col-xl-6 d-flex align-items-center">
                        <Figure.Image
                            // width={240}
                            className="costumPicHome"
                            width="50%"
                            alt="customPic"
                            src={customPic}
                        />
                    </div> {/* column */}
                    <div className="col-xs-1 col-md-6 col-lg-6 col-xl-6">
                        <div className="row mx-4">  
                            {/* 客製化大標題 */} 
                            <div className="d-flex justify-content-start align-items-center pb-4 titleCustomHome">
                                <img src={greenTitle} className="me-3" alt="greenTitle" height="24px" width="64px"/>
                                <h1 className="m-0 fw-bold deepblue">FUN訂製 · 客製化衝浪板</h1>
                            </div>
                            {/* 客製化描述之一 */} 
                            <div className="row pb-4 d-flex justify-content-start">
                                {/* 客製化icon */}
                                <div className="col-4 col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                                    <Figure.Image
                                        className=""
                                        width="90%"
                                        alt="handLove"
                                        src={handLove}
                                    />
                                </div>
                                {/* 客製化文字 */}
                                <div className="col-8 col-sm-9 col-md-8 col-lg-9">
                                    <Figure.Caption className="d-flex justify-content-start">
                                        <h3 className="mb-1 fw-bold">擁有地表最獨特的衝浪板</h3>
                                    </Figure.Caption>
                                    <Figure.Caption className="d-flex justify-content-start">
                                        <p className="">在這裡，你可以找到精選衝浪商品、專業各式課程、浪點即時資訊、最新衝浪資訊。讓我們一起FUN，一起浪！</p>
                                    </Figure.Caption>
                                </div>
                            </div> {/* 客製化描述之一row-結束 */}
                            {/* 客製化描述之二 */} 
                            <div className="row pb-4 d-flex justify-content-start">
                                {/* 客製化icon */}
                                <div className="col-4 col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                                    <Figure.Image
                                        // width={240}
                                        className=""
                                        width="90%"
                                        alt="make"
                                        src={make}
                                    />
                                </div>
                                {/* 客製化文字 */}
                                <div className="col-8 col-sm-9 col-md-8 col-lg-9">
                                    <Figure.Caption className="d-flex justify-content-start">
                                        <h3 className="mb-1 fw-bold">親手打造的成就感</h3>
                                    </Figure.Caption>
                                    <Figure.Caption className="d-flex justify-content-start">
                                        <p className="">在這裡，你可以找到精選衝浪商品、專業各式課程、浪點即時資訊、最新衝浪資訊。讓我們一起FUN，一起浪！</p>
                                    </Figure.Caption>
                                </div>
                            </div> {/* 客製化描述之二row-結束 */}
                            {/* 客製化描述之三 */} 
                            <div className="row pb-4 d-flex justify-content-start">
                                {/* 客製化icon */}
                                <div className="col-4 col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                                    <Figure.Image
                                        className=""
                                        width="90%"
                                        alt="yeahStar"
                                        src={yeahStar}
                                    />
                                </div>
                                {/* 客製化文字 */}
                                <div className="col-8 col-sm-9 col-md-8 col-lg-9">
                                    <Figure.Caption className="d-flex justify-content-start">
                                        <h3 className="mb-1 fw-bold">不做不會怎樣，做了很不一樣</h3>
                                    </Figure.Caption>
                                    <Figure.Caption className="d-flex justify-content-start">
                                        <p className="">在這裡，你可以找到精選衝浪商品、專業各式課程、浪點即時資訊、最新衝浪資訊。讓我們一起FUN，一起浪！</p>
                                    </Figure.Caption>
                                </div>
                            </div> {/* 客製化描述之三row-結束 */}
                            {/* 客製化按鈕 */}
                            <div className="d-flex justify-content-center">
                                <a className="btn btn-primary ps-5" href="/customized">我要去訂製
                                <FaLongArrowAltRight
                                        className="ps-2 me-5"
                                        size={24}
                                        color="#ffffff"
                                />
                                </a>
                            </div> {/* 客製化按鈕-結束 */}
                        </div> {/* row */}  
                    </div> {/* column */}
                </div> {/* row */}      
            </div> {/* container */}
            </div>

            {/* 課程＆教練 */}
            <div id="classSectionHome" className="classSectionUPHome"></div>
            
            <div className="container-fluid classSectionHome">
                <div className="container classContainerHome">
                    <div className="row">
                        {/* 左半邊-課程 */}           
                        <div className="col-12 col-xl-6 d-flex justify-content-center align-items-center flex-column">
                                {/* 課程大標題 */} 
                                <div className="d-flex justify-content-start align-items-center pb-4 titleCustomHome">
                                    <img src={greenTitle} className="me-3" alt="greenTitle" height="24px" width="64px"/>
                                    <h1 className="m-0 fw-bold deepblue">FUN課程 · 精心規劃安排</h1>
                                </div>
                                <div className="d-flex justify-content-center align-items-center pb-4">
                                    <FaCrown
                                        className="me-1"
                                        size={30}
                                        color="#ff7f6a"
                                    />
                                    <FaCrown
                                        className="me-1"
                                        size={30}
                                        color="#ff7f6a"
                                    />
                                    <FaCrown
                                        className="me-1"
                                        size={30}
                                        color="#ff7f6a"
                                    />
                                    <h3 className="my-auto orange fw-bold me-3"> TOP 1</h3>
                                    <h3 className="my-auto"> [小萌新] 初階衝浪課程</h3>
                                </div>
                                <div className="d-flex justify-content-center align-items-center pb-4">
                                    <FaCrown
                                        className="me-1"
                                        size={30}
                                        color="#f5f5f5"
                                    />
                                    <FaCrown
                                        className="me-1"
                                        size={30}
                                        color="#ff7f6a"
                                    />
                                    <FaCrown
                                        className="me-1"
                                        size={30}
                                        color="#ff7f6a"
                                    />
                                    <h3 className="my-auto orange fw-bold me-3"> TOP 2</h3>
                                    <h3 className="my-auto"> [初體驗] 體驗衝浪課程</h3>
                                </div>
                                <div className="d-flex justify-content-center align-items-center pb-4">
                                    <FaCrown
                                        className="me-1"
                                        size={30}
                                        color="#f5f5f5"
                                    />
                                    <FaCrown
                                        className="me-1"
                                        size={30}
                                        color="#f5f5f5"
                                    />
                                    <FaCrown
                                        className="me-1"
                                        size={30}
                                        color="#ff7f6a"
                                    />
                                    <h3 className="my-auto orange fw-bold me-3"> TOP 3</h3>
                                    <h3 className="my-auto">[辣老薑] 高階衝浪課程</h3>
                                </div>
                                <div className="d-flex justify-content-center align-items-center pb-5">
                                    <FaCrown
                                        className="me-1"
                                        size={30}
                                        color="#f5f5f5"
                                    />
                                    <FaCrown
                                        className="me-1"
                                        size={30}
                                        color="#f5f5f5"
                                    />
                                    <FaCrown
                                        className="me-1"
                                        size={30}
                                        color="#98a0a5"
                                    />
                                    <h3 className="my-auto gray fw-bold me-3"> TOP 4</h3>
                                    <h3 className="my-auto">[穩噠噠] 中階衝浪課程</h3>
                                </div>
                                {/* 課程按鈕 */}
                                <div>
                                    <a className="btn btn-primary ps-5" href="/course">看看課程詳細介紹
                                    <FaLongArrowAltRight
                                            className="ps-2 me-5"
                                            size={24}
                                            color="#ffffff"
                                    />
                                    </a>
                                </div> {/* 課程按鈕-結束 */}
                        </div> {/* row */}
                        {/* 右半邊－教練 */} 
                        <div className="col-12 col-xl-6 d-flex justify-content-center align-items-center flex-column">
                                {/* 教練大標題 */}
                                <div className="d-flex justify-content-center align-items-center flex-row py-5 titleCoachHome">
                                        {/* <img src={greenTitle} className="me-3" alt="greenTitle" height="24px" width="64px"/> */}
                                        <h2 className="m-0 fw-bold black">最FUN心的教練團隊 ， 教學不只用心更專業 ！</h2>
                                </div>
                                {/* 教練01 */}
                                <div className="row d-flex align-items-center pb-4 mx-auto">
                                    <div className="col-6 col-md-3 mx-auto">
                                        <img src={coachHome01} className="pb-3" alt="coachHome01" width="100%"/>
                                    </div>
                                    <div className="col-12 col-md-9 row d-flex flex-row px-0">
                                        <div className="col-5 col-md-4 d-flex justify-content-start align-items-center flex-column">
                                            <div className="d-flex flex-column justify-content-center align-items-center">
                                                <h3>Willy張</h3>
                                                {/* <div className="d-flex align-items-center">
                                                    <AiFillStar className="me-2" size={20} color="#ff7f6a" />
                                                    <h5 className="my-auto">4.5</h5>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="col-7 col-md-8 d-flex justify-content-start align-items-start">
                                            <p className="gray">在這裡，你可以找到精選衝浪商品、專業各式課程、浪點即時資訊、最新衝浪資訊。讓我們一起FUN，一起浪！</p>
                                        </div>
                                    </div>
                                </div> {/* 教練01 -結束 row */}
                                {/* 教練02 */}
                                <div className="row d-flex align-items-center pb-4 mx-auto">
                                    <div className="col-6 col-md-3 mx-auto">
                                        <img src={coachHome02} className="pb-3" alt="coachHome02" width="100%"/>
                                    </div>
                                    <div className="col-12 col-md-9 row d-flex flex-row px-0">
                                        <div className="col-5 col-md-4 d-flex justify-content-start align-items-center flex-column">
                                            <div className="d-flex flex-column justify-content-center align-items-center">
                                                <h3>Dora項</h3>
                                                {/* <div className="d-flex align-items-center">
                                                    <AiFillStar className="me-2" size={20} color="#ff7f6a" />
                                                    <h5 className="my-auto">4.5</h5>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="col-7 col-md-8 d-flex justify-content-start align-items-start">
                                            <p className="gray">在這裡，你可以找到精選衝浪商品、專業各式課程、浪點即時資訊、最新衝浪資訊。讓我們一起FUN，一起浪！</p>
                                        </div>
                                    </div>
                                </div> {/* 教練02 -結束 row */}
                                {/* 教練03 */}
                                <div className="row d-flex align-items-center pb-4 mx-auto">
                                    <div className="col-6 col-md-3 mx-auto">
                                        <img src={coachHome03} className="pb-3" alt="coachHome03" width="100%"/>
                                    </div>
                                    <div className="col-12 col-md-9 row d-flex flex-row px-0">
                                        <div className="col-5 col-md-4 d-flex justify-content-start align-items-center flex-column">
                                            <div className="d-flex flex-column justify-content-center align-items-center">
                                                <h3>Candice游</h3>
                                                {/* <div className="d-flex align-items-center">
                                                    <AiFillStar className="me-2" size={20} color="#ff7f6a" />
                                                    <h5 className="my-auto">4.5</h5>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="col-7 col-md-8 d-flex justify-content-start align-items-start">
                                            <p className="gray">在這裡，你可以找到精選衝浪商品、專業各式課程、浪點即時資訊、最新衝浪資訊。讓我們一起FUN，一起浪！</p>
                                        </div>
                                    </div>
                                </div> {/* 教練03 -結束 row */}
                                {/* 教練按鈕 */}
                                {/* <div>
                                    <a className="btn btn-primary ps-5" href="/course">更多專業教練
                                    <FaLongArrowAltRight
                                            className="ps-2 me-5"
                                            size={24}
                                            color="#ffffff"
                                    />
                                    </a>
                                </div> */}
                                {/* 教練按鈕-結束 */}
                        </div> {/* column */}
                        
                    </div> {/* row */}
                </div> {/* container */}
            </div> {/* container-fluid */}
            {/* <div className="classSectionDOWNHome"></div> */}

            {/* 浪點 */}
            <div className="container-fluid surfPointSectionHome">
                {/* 浪點容器 */}
                <div className="container surfPointContainerHome">
                    {/* 浪點大標題 */}
                    <div id="surfPointSectionHome" className="d-flex justify-content-center align-items-center flex-row pb-4 titleSurfPointHome">
                            <img src={lightGreenTitle} className="me-3" alt="lightGreenTitle" height="24px" width="64px"/>
                            <h1 className="m-0 fw-bold blue">FUN浪點 · 即時浪點資訊</h1>
                    </div>
                    <div className="d-flex justify-content-end align-items-center flex-row">
                        <h1 className="surfIntroTitleHome white lh-lg">衝浪聖地32選</h1>
                        <h5 className="surfIntroWordHome white lh-lg">32個涵蓋北部、東北部、東部、南部、西部等浪點即時資訊整理，一目瞭然又即時！</h5>
                        <img src={taiwanHome} className="ps-5 pb-4" alt="taiwanHome" height="" width="90%"/>
                        <MdLocationOn
                            className="me-2"
                            size={20}
                            color="#a0a7ac"
                        />
                    </div>
                    {/* 浪點按鈕 */}
                    <div className="d-flex justify-content-center align-items-center flex-row py-5">
                        <a className="btn btn-primary ps-5" href="/surfspot">看更多浪點資訊
                        <FaLongArrowAltRight
                                className="ps-2 me-5"
                                size={24}
                                color="#ffffff"
                        />
                        </a>
                    </div> {/* 浪點按鈕-結束 */}

                    
                </div> {/* 浪點容器 container */}

                {/* 資訊容器 container */}
                <div className="container infoContainerHome">
                    {/* 資訊大標題 */}
                    <div className="d-flex justify-content-center align-items-center flex-row pb-4 titleCustomHome">
                            <img src={lightGreenTitle} className="me-3" alt="lightGreenTitle" height="24px" width="64px"/>
                            <h1 className="m-0 fw-bold blue">FUN浪日誌 · 衝浪新知文章</h1>
                    </div>

                    <div>
                        <HomeSlide 
                            cardInfoData={cardInfoData}
                            setCardInfoData={setCardInfoData}
                        />
                    </div>
                    {/* 文章按鈕 */}
                    <div className="d-flex justify-content-center align-items-center flex-row py-5">
                        <a className="btn btn-primary ps-5" href="/information">看更多衝浪文章
                        <FaLongArrowAltRight
                                className="ps-2 me-5"
                                size={24}
                                color="#ffffff"
                        />
                        </a>
                    </div> {/* 文章按鈕-結束 */}

                </div> {/* 資訊容器 container */}
            </div> {/* container-fluid */}


        </div> {/* traslateBox */}
    </div> {/* outSideBox */}
    </div> {/* div */}

    </>
);
}

export default Home;