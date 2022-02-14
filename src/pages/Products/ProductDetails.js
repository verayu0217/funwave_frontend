import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Figure } from 'react-bootstrap';

// 導引資料、頁面
import './ProductDetails.scss';
import longboard1 from './longboard1.jpg'; // 待釐清圖放src還是放在public

// react-icons
import { FaThumbsUp } from 'react-icons/fa';
import { IoColorPalette } from 'react-icons/io5';
import { MdOutlineSurfing } from 'react-icons/md';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
// import { BsStarHalf } from 'react-icons/bs'; // 半星星

function ProductDetails() {
  return (
    <>
      <div className="container">
        <h3>Breadcrumb</h3>
        <div className="row">
          <aside className="col-2 asideProducts">
            {/* 大分類 */}
            <Accordion className="mt-4" flush>
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

          <article className="col-10">
            <div className="row">
              <div className="col-9 left d-flex justify-content-center">
                <Figure>
                  <Figure.Image
                    width={420}
                    height={400}
                    alt="longboard1"
                    src={longboard1}
                  />
                </Figure>
              </div>
              <div className="col-3 right p-0">
                <h1>JJF by Pyzel</h1>
                <h2>AstroFish 衝浪板</h2>
                <div className="row">
                  <div className="col-5 py-0">
                    <AiFillStar size={20} color="#ff7f6a" />
                    <AiFillStar size={20} color="#ff7f6a" />
                    <AiFillStar size={20} color="#ff7f6a" />
                    <AiFillStar size={20} color="#ff7f6a" />
                    <AiOutlineStar size={20} color="#ff7f6a" />
                  </div>
                  <div className="col-7 ps-0 pt-2">
                    <p className="fs-6">1則評論</p>
                  </div>
                </div>
                <p className="fs-6">SKU# 196322</p>
                <div className="row mt-5 mb-3">
                  <div className="col-4 pe-0">
                    <div>選擇顏色：</div>
                  </div>
                  <div className="col-8 p-0">
                    <div className="d-flex">
                      <div className="colorRadio rounded-circle me-3"></div>
                      <div className="colorRadio rounded-circle me-3"></div>
                      <div className="colorRadio rounded-circle me-3"></div>
                      <div className="colorRadio rounded-circle me-3"></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4 pe-0 mt-1">
                    <div>選擇尺寸：</div>
                  </div>
                  <div className="col-8 p-0">
                    <div className="d-flex">
                      <div className="sizeRadio text-center me-2">4</div>
                      <div className="sizeRadio text-center me-2">5</div>
                      <div className="sizeRadio text-center me-2">6</div>
                      <div className="sizeRadio text-center me-2">7</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
