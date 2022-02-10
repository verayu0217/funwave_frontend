import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import greenwave from '../../data/images/greenwave64x24.png'; // 待釐清圖放src還是放在public
import './Products.scss';

import { Accordion } from 'react-bootstrap';

function Products(props) {
  return (
    <>
      {/* title、banner */}
      <div className="container-fluid banner">
        <div className="d-flex justify-content-center align-items-end titleTop">
          <h4>FUN SHOP</h4>
        </div>
        <div className="d-flex justify-content-center align-items-start titleBottom">
          <h1>FUN 商店</h1>
        </div>
      </div>

      <div className="container">
        <h1>Breadcrumb</h1>
        <aside className="float-start">
          {/* 大分類 */}
          <Accordion defaultActiveKey="0" flush alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>衝浪板</Accordion.Header>
              <Accordion.Body>
                {/* 1. 短板 2. 快樂板 3. 長板 */}
                <ul>
                  <li>
                    <Link to="/" title="長板">
                      長板
                    </Link>
                  </li>
                  <li>
                    <Link to="/" title="快樂板">
                      快樂板
                    </Link>
                  </li>
                  <li>
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
                <ul>
                  <li>
                    <Link to="/" title="衝浪舵">
                      衝浪舵
                    </Link>
                  </li>
                  <li>
                    <Link to="/" title="腳繩s">
                      腳繩
                    </Link>
                  </li>
                  <li>
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
                <ul>
                  <li>
                    <Link to="/" title="防寒衣物">
                      衝浪斗篷毛巾衣
                    </Link>
                  </li>
                  <li>
                    <Link to="/" title="防寒衣">
                      防寒衣
                    </Link>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          {/* <ul>
            <li>
              <Link to="/" title="衝浪板">
                衝浪板
              </Link>
              <ul>
                <li>
                  <Link to="/" title="長板">
                    長板
                  </Link>
                </li>
                <li>
                  <Link to="/" title="快樂板">
                    快樂板
                  </Link>
                </li>
                <li>
                  <Link to="/" title="短板">
                    短板
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/" title="衝浪板配件">
                衝浪板配件
              </Link>
              <ul>
                <li>
                  <Link to="/" title="衝浪舵">
                    衝浪舵
                  </Link>
                </li>
                <li>
                  <Link to="/" title="腳繩s">
                    腳繩
                  </Link>
                </li>
                <li>
                  <Link to="/" title="腳踏墊">
                    腳踏墊
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/" title="防寒衣物">
                防寒衣物
              </Link>
              <ul>
                <li>
                  <Link to="/" title="防寒衣物">
                    衝浪斗篷毛巾衣
                  </Link>
                </li>
                <li>
                  <Link to="/" title="防寒衣">
                    防寒衣
                  </Link>
                </li>
              </ul>
            </li>
          </ul> */}
          {/* 篩選 */}
        </aside>
        <article className="float-end">
          <header className="position-relative">
            <div className="d-flex justify-content-center">
              <img src={greenwave} alt="greenwave" title="greenwave" />
              <h1>短板</h1>
            </div>
            {/* 搜尋   待搜尋icon */}
            <input
              value="Search "
              className="form-control mt-1 rounded-pill search text-muted"
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

// 手風琴(參考蕃薯)、下拉選單 分類
// Checks and radio 篩選
