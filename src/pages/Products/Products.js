import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// react-icons
import { RiMoneyDollarCircleFill, RiRulerFill } from 'react-icons/ri';
import { FaThumbsUp } from 'react-icons/fa';
import { IoColorPalette } from 'react-icons/io5';
import { MdOutlineSurfing } from 'react-icons/md';

// FontAwesome 不會用！！！
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import greenwave from '../../data/images/greenwave64x24.png'; // 待釐清圖放src還是放在public
import './Products.scss';

import { Accordion } from 'react-bootstrap';

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
              <Accordion.Header>衝浪板</Accordion.Header>
              <Accordion.Body>
                {/* 1. 短板 2. 快樂板 3. 長板 */}
                <ul className="ulProducts">
                  <li className="liProducts">
                    <Link to="/" title="長板">
                      長板
                    </Link>
                  </li>
                  <li className="liProducts">
                    <Link to="/" title="快樂板">
                      快樂板
                    </Link>
                  </li>
                  <li className="liProducts">
                    <Link to="/" title="短板">
                      短板
                    </Link>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>衝浪板配件</Accordion.Header>
              <Accordion.Body>
                {/* 1. 衝浪舵 2. 腳繩 3. 腳踏墊 */}
                <ul className="ulProducts">
                  <li className="liProducts">
                    <Link to="/" title="衝浪舵">
                      衝浪舵
                    </Link>
                  </li>
                  <li className="liProducts">
                    <Link to="/" title="腳繩s">
                      腳繩
                    </Link>
                  </li>
                  <li className="liProducts">
                    <Link to="/" title="腳踏墊">
                      腳踏墊
                    </Link>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>衝浪相關衣物</Accordion.Header>
              <Accordion.Body>
                {/* 1. 衝浪斗篷毛巾衣 2. 防寒衣 */}
                <ul className="ulProducts">
                  <li className="liProducts">
                    <Link to="/" title="防寒衣物">
                      衝浪斗篷毛巾衣
                    </Link>
                  </li>
                  <li className="liProducts">
                    <Link to="/" title="防寒衣">
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
            <h3 className="d-flex align-items-center filterProducts pb-2">
              <RiMoneyDollarCircleFill
                size={24}
                color="#17a8a2"
                className="me-3"
              />
              價格
            </h3>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="price1"
                name="price1"
                value="price1"
              />
              <label className="form-check-label ms-3" for="price1">
                NT $100 - $200
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="price2"
                name="price2"
                value="price2"
              />
              <label className="form-check-label ms-3" for="price2">
                NT $200 - $300
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="price3"
                name="price3"
                value="price3"
              />
              <label className="form-check-label ms-3" for="price3">
                NT $300 - $400
              </label>
            </div>
          </div>
          {/* 品牌篩選 */}
          <div className="mt-5">
            <h3 className="d-flex align-items-center filterProducts pb-2">
              <FaThumbsUp size={20} color="#17a8a2" className="me-3" />
              品牌
            </h3>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="brand1"
                name="brand1"
                value="brand1"
              />
              <label className="form-check-label ms-3" for="brand1">
                A
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="brand2"
                name="brand2"
                value="brand2"
              />
              <label className="form-check-label ms-3" for="brand2">
                B
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="brand3"
                name="brand3"
                value="brand3"
              />
              <label className="form-check-label ms-3" for="brand3">
                C
              </label>
            </div>
          </div>
          {/* 尺寸篩選 */}
          <div className="mt-5">
            <h3 className="d-flex align-items-center filterProducts pb-2">
              <RiRulerFill size={22} color="#17a8a2" className="me-3" />
              尺寸
            </h3>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="size1"
                name="size1"
                value="size1"
              />
              <label className="form-check-label ms-3" for="size1">
                4' 10''
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="size2"
                name="size2"
                value="size2"
              />
              <label className="form-check-label ms-3" for="size2">
                5' 10''
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="size3"
                name="size3"
                value="size3"
              />
              <label className="form-check-label ms-3" for="size3">
                6' 10''
              </label>
            </div>
          </div>
          {/* 顏色篩選 */}
          <div className="mt-5">
            <h3 className="d-flex align-items-center filterProducts pb-2">
              <IoColorPalette size={22} color="#17a8a2" className="me-3" />
              顏色
            </h3>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="color1"
                name="color1"
                value="color1"
              />
              <label className="form-check-label ms-3" for="color1">
                紅色
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="color2"
                name="color2"
                value="color2"
              />
              <label className="form-check-label ms-3" for="color2">
                橙色
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="color3"
                name="color3"
                value="color3"
              />
              <label className="form-check-label ms-3" for="color3">
                黃色
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="color4"
                name="color4"
                value="color4"
              />
              <label className="form-check-label ms-3" for="color4">
                綠色
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="color5"
                name="color5"
                value="color5"
              />
              <label className="form-check-label ms-3" for="color5">
                藍色
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="color6"
                name="color6"
                value="color6"
              />
              <label className="form-check-label ms-3" for="color6">
                紫色
              </label>
            </div>
          </div>
          {/* 適用衝浪舵篩選 */}
          <div className="mt-5">
            <h3 className="d-flex align-items-center filterProducts pb-2">
              <MdOutlineSurfing size={24} color="#17a8a2" className="me-3" />
              適用的衝浪舵類型
            </h3>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="fin1"
                name="fin1"
                value="fin1"
              />
              <label className="form-check-label ms-3" for="fin1">
                Single
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="fin2"
                name="fin2"
                value="fin2"
              />
              <label className="form-check-label ms-3" for="fin2">
                FCS II
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="fin3"
                name="fin3"
                value="fin3"
              />
              <label className="form-check-label ms-3" for="fin3">
                FCS II Longboard
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="fin4"
                name="fin4"
                value="fin4"
              />
              <label className="form-check-label ms-3" for="fin4">
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
          </header>
        </article>
      </div>
    </>
  );
}

export default Products;

// 手風琴(參考蕃薯) 分類
// Checks and radio 篩選
