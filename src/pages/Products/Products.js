import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { RiMoneyDollarCircleFill } from '@react-icons/all-files/fa/RiMoneyDollarCircleFill';

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
        <aside className="float-start asideProducts">
          {/* 大分類 */}
          <Accordion defaultActiveKey="0" flush alwaysOpen>
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
          <div className="filterPrice">
            <h3>價格</h3>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="price1"
                name="price1"
                value="price1"
              />
              <label className="form-check-label" for="price1">
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
              <label className="form-check-label" for="price2">
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
                disabled
              />
              <label className="form-check-label" for="price3">
                NT $300 - $400
              </label>
            </div>
          </div>
        </aside>

        <article className="float-end articleProducts">
          <header className="position-relative headerProducts">
            <div className="d-flex justify-content-center">
              <img
                src={greenwave}
                alt="greenwave"
                title="greenwave"
                className="imgProducts"
              />
              <h1>短板</h1>
            </div>
            {/* 搜尋   待搜尋icon */}
            <input
              value="Search "
              className="form-control mt-1 rounded-pill searchProducts text-muted"
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
