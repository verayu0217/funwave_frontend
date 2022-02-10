import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Figure } from 'react-bootstrap';

// react-icons
import { RiMoneyDollarCircleFill, RiRulerFill } from 'react-icons/ri';
import { FaThumbsUp, FaHeart } from 'react-icons/fa';
import { IoColorPalette } from 'react-icons/io5';
import { MdOutlineSurfing } from 'react-icons/md';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
// import { BsStarHalf } from 'react-icons/bs'; 半星星
import { FiHeart } from 'react-icons/fi';

// FontAwesome 不會用！！！
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import greenwave from '../../data/images/greenwave64x24.png'; // 待釐清圖放src還是放在public
import longboard1 from './longboard1.jpg'; // 待釐清圖放src還是放在public
import './Products.scss';

function Products() {
  return (
    <>
      {/* title、banner */}
      <div className="container-fluid bannerProducts">
        <div className="d-flex justify-content-center align-items-end titleTop">
          <h4>FUN SHOP</h4>
        </div>
        <div className="d-flex justify-content-center align-items-start titleBottom">
          <h1>FUN 商店</h1>
        </div>
      </div>

      <div className="container">
        <h3>Breadcrumb</h3>
        <aside className="float-start asideProducts w-25">
          {/* 大分類 */}
          <Accordion className="mt-4" defaultActiveKey="0" flush alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header className="accordionTitle">
                <h3>衝浪板</h3>
              </Accordion.Header>
              <Accordion.Body>
                <ul className="ulProducts">
                  <li className="liProducts">
                    <Link to="/" title="長板" className="linkProducts">
                      長板
                    </Link>
                  </li>
                  <li className="liProducts">
                    <Link to="/" title="快樂板" className="linkProducts">
                      快樂板
                    </Link>
                  </li>
                  <li className="liProducts">
                    <Link to="/" title="短板" className="linkProducts">
                      短板
                    </Link>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h3>衝浪板配件</h3>
              </Accordion.Header>
              <Accordion.Body>
                <ul className="ulProducts">
                  <li className="liProducts">
                    <Link to="/" title="衝浪舵" className="linkProducts">
                      衝浪舵
                    </Link>
                  </li>
                  <li className="liProducts">
                    <Link to="/" title="腳繩" className="linkProducts">
                      腳繩
                    </Link>
                  </li>
                  <li className="liProducts">
                    <Link to="/" title="腳踏墊" className="linkProducts">
                      腳踏墊
                    </Link>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h3>衝浪相關衣物</h3>
              </Accordion.Header>
              <Accordion.Body>
                <ul className="ulProducts">
                  <li className="liProducts">
                    <Link to="/" title="防寒衣物" className="linkProducts">
                      衝浪斗篷毛巾衣
                    </Link>
                  </li>
                  <li className="liProducts">
                    <Link to="/" title="防寒衣" className="linkProducts">
                      防寒衣
                    </Link>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          {/* 篩選 */}
          {/* 價格篩選 */}
          <div className="mt-5">
            <h3 className="d-flex align-items-center filterProducts pb-2 ps-3">
              <RiMoneyDollarCircleFill
                size={24}
                color="#17a8a2"
                className="me-3"
              />
              價格
            </h3>
            <div className="form-check ms-3">
              <input
                className="form-check-input"
                type="radio"
                id="price1"
                name="price1"
                value="price1"
              />
              <label className="form-check-label ms-3" htmlFor="price1">
                NT $100 - $200
              </label>
            </div>
            <div className="form-check ms-3">
              <input
                className="form-check-input"
                type="radio"
                id="price2"
                name="price2"
                value="price2"
              />
              <label className="form-check-label ms-3" htmlFor="price2">
                NT $200 - $300
              </label>
            </div>
            <div className="form-check ms-3">
              <input
                className="form-check-input"
                type="radio"
                id="price3"
                name="price3"
                value="price3"
              />
              <label className="form-check-label ms-3" htmlFor="price3">
                NT $300 - $400
              </label>
            </div>
          </div>
          {/* 品牌篩選 */}
          <div className="mt-5">
            <h3 className="d-flex align-items-center filterProducts pb-2 ps-3">
              <FaThumbsUp size={20} color="#17a8a2" className="me-3" />
              品牌
            </h3>
            <div className="form-check ms-3">
              <input
                className="form-check-input"
                type="radio"
                id="brand1"
                name="brand1"
                value="brand1"
              />
              <label className="form-check-label ms-3" htmlFor="brand1">
                A
              </label>
            </div>
            <div className="form-check ms-3">
              <input
                className="form-check-input"
                type="radio"
                id="brand2"
                name="brand2"
                value="brand2"
              />
              <label className="form-check-label ms-3" htmlFor="brand2">
                B
              </label>
            </div>
            <div className="form-check ms-3">
              <input
                className="form-check-input"
                type="radio"
                id="brand3"
                name="brand3"
                value="brand3"
              />
              <label className="form-check-label ms-3" htmlFor="brand3">
                C
              </label>
            </div>
          </div>
          {/* 尺寸篩選 */}
          <div className="mt-5">
            <h3 className="d-flex align-items-center filterProducts pb-2 ps-3">
              <RiRulerFill size={22} color="#17a8a2" className="me-3" />
              尺寸
            </h3>
            <div className="form-check ms-3">
              <input
                className="form-check-input"
                type="radio"
                id="size1"
                name="size1"
                value="size1"
              />
              <label className="form-check-label ms-3" htmlFor="size1">
                4' 10''
              </label>
            </div>
            <div className="form-check ms-3">
              <input
                className="form-check-input"
                type="radio"
                id="size2"
                name="size2"
                value="size2"
              />
              <label className="form-check-label ms-3" htmlFor="size2">
                5' 10''
              </label>
            </div>
            <div className="form-check ms-3">
              <input
                className="form-check-input"
                type="radio"
                id="size3"
                name="size3"
                value="size3"
              />
              <label className="form-check-label ms-3" htmlFor="size3">
                6' 10''
              </label>
            </div>
          </div>
          {/* 顏色篩選 */}
          <div className="mt-5">
            <h3 className="d-flex align-items-center filterProducts pb-2 ps-3">
              <IoColorPalette size={22} color="#17a8a2" className="me-3" />
              顏色
            </h3>
            <div className="form-check ms-3">
              <input
                className="form-check-input"
                type="radio"
                id="color1"
                name="color1"
                value="color1"
              />
              <label className="form-check-label ms-3" htmlFor="color1">
                紅色
              </label>
            </div>
            <div className="form-check ms-3">
              <input
                className="form-check-input"
                type="radio"
                id="color2"
                name="color2"
                value="color2"
              />
              <label className="form-check-label ms-3" htmlFor="color2">
                橙色
              </label>
            </div>
            <div className="form-check ms-3">
              <input
                className="form-check-input"
                type="radio"
                id="color3"
                name="color3"
                value="color3"
              />
              <label className="form-check-label ms-3" htmlFor="color3">
                黃色
              </label>
            </div>
            <div className="form-check ms-3">
              <input
                className="form-check-input"
                type="radio"
                id="color4"
                name="color4"
                value="color4"
              />
              <label className="form-check-label ms-3" htmlFor="color4">
                綠色
              </label>
            </div>
            <div className="form-check ms-3">
              <input
                className="form-check-input"
                type="radio"
                id="color5"
                name="color5"
                value="color5"
              />
              <label className="form-check-label ms-3" htmlFor="color5">
                藍色
              </label>
            </div>
            <div className="form-check ms-3">
              <input
                className="form-check-input"
                type="radio"
                id="color6"
                name="color6"
                value="color6"
              />
              <label className="form-check-label ms-3" htmlFor="color6">
                紫色
              </label>
            </div>
          </div>
          {/* 適用衝浪舵篩選 */}
          <div className="mt-5">
            <h3 className="d-flex align-items-center filterProducts pb-2 ps-3">
              <MdOutlineSurfing size={24} color="#17a8a2" className="me-3" />
              適用的衝浪舵類型
            </h3>
            <div className="form-check ms-3">
              <input
                className="form-check-input"
                type="radio"
                id="fin1"
                name="fin1"
                value="fin1"
              />
              <label className="form-check-label ms-3" htmlFor="fin1">
                Single
              </label>
            </div>
            <div className="form-check ms-3">
              <input
                className="form-check-input"
                type="radio"
                id="fin2"
                name="fin2"
                value="fin2"
              />
              <label className="form-check-label ms-3" htmlFor="fin2">
                FCS II
              </label>
            </div>
            <div className="form-check ms-3">
              <input
                className="form-check-input"
                type="radio"
                id="fin3"
                name="fin3"
                value="fin3"
              />
              <label className="form-check-label ms-3" htmlFor="fin3">
                FCS II Longboard
              </label>
            </div>
            <div className="form-check ms-3">
              <input
                className="form-check-input"
                type="radio"
                id="fin4"
                name="fin4"
                value="fin4"
              />
              <label className="form-check-label ms-3" htmlFor="fin4">
                Longboard
              </label>
            </div>
          </div>
        </aside>

        <article className="float-end articleProducts w-75">
          <header className="position-relative mt-4">
            <div className="d-flex justify-content-center align-items-center">
              <img
                src={greenwave}
                alt="greenwave"
                title="greenwave"
                className="me-3 imgProducts"
              />
              <h1>短板</h1>
            </div>
            {/* 搜尋   待搜尋icon */}
            <input
              value="Search"
              className="form-control mt-1 rounded-pill position-absolute top-0 end-0 w-25 text-muted"
              type="text"
              name="search"
              // onChange={(e) => setKeyword(e.target.value)}
            />
            {/* form-control會有會有自己的border-radius，好像蓋不掉，待研究！ */}
            <div></div>
          </header>
          <Figure className="mt-4">
            <Figure.Image
              width={300}
              height={350}
              alt="longboard1"
              src={longboard1}
            />
            <FiHeart size={18} color="#ff7f6a" className="float-end" />
            <Figure.Caption className="d-flex justify-content-center">
              <p className="fs-6 mb-0">Catch Surf Odysea 9'0"</p>
            </Figure.Caption>
            <Figure.Caption className="d-flex justify-content-center">
              <p className="fs-6">Log x Evan Rossell 衝浪板</p>
            </Figure.Caption>
            <div className="d-flex justify-content-center">
              <AiFillStar size={20} color="#ff7f6a" />
              <AiFillStar size={20} color="#ff7f6a" />
              <AiFillStar size={20} color="#ff7f6a" />
              <AiFillStar size={20} color="#ff7f6a" />
              <AiOutlineStar size={20} color="#ff7f6a" />
            </div>
          </Figure>

          {/* 星星圖備用 (全、半、空) */}
          {/* <AiFillStar size={22} color="#ff7f6a" className="" />
          <AiOutlineStar size={22} color="#ff7f6a" className="" />
          <BsStarHalf size={18} color="#ff7f6a" className="me-3" /> */}
        </article>
      </div>
    </>
  );
}

export default Products;

// 手風琴(參考蕃薯) 分類
// Checks and radio 篩選
