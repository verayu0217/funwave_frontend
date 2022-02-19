import React, { useState, useEffect } from 'react';
import { Figure, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Cart.scss';
import longboard1 from './longboard1.jpg'; // 待釐清圖放src還是放在public
import greenTitle from '../../../data/images/greenTitle.svg';

// react-icons
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

function CartPreOrder() {
  return (
    <>
      <div className="container">
        <header className="m-5 py-2 px-5">
          <div className="text-secondary fw-bold h1 text-center mb-5">
            <img
              src={greenTitle}
              className="greenTitle me-3"
              alt="greenTitle"
              height="24px"
              weight="64px"
            />
            衝浪商品購物車
          </div>
          <div className="d-flex justify-content-evenly">
            <div className="d-flex align-items-center shadow py-2 cartStepsSigns borderRadius">
              <div className="fs-1 w-25 text-center">01</div>
              <div className="w-75">
                確認清單及選擇付款、運送方式
                <br />
                Cart & Check out
              </div>
            </div>
            <div className="d-flex justify-content-evenly align-items-center shadow py-2 cartStepsSigns borderRadius">
              <div className="fs-1 w-25 text-center">02</div>
              <div className="w-75">
                填寫訂購資料
                <br />
                Cart & Check out
              </div>
            </div>
            <div className="d-flex justify-content-evenly align-items-center shadow py-2 cartStepsSigns borderRadius">
              <div className="fs-1 w-25 text-center">03</div>
              <div className="w-75">
                購物完成！
                <br />
                Order completed
              </div>
            </div>
          </div>
        </header>
        <article>
          <div className="row mx-5 px-3 d-flex justify-content-center">
            {/* 購物車 */}
            <div className="col-6 borderRadius p-0 me-4 shadow">
              <div className="p-4 border-bottom text-center">
                <h1>購物車</h1>
              </div>
              <div className="px-5 py-4">
                <Figure className="d-flex align-items-center">
                  <Figure.Image
                    width={75}
                    // height={350}
                    alt="longboard1"
                    src={longboard1}
                    className="w-25 m-0"
                  />
                  <div className="w-50">
                    <Figure.Caption>
                      <p className="mb-0">Odysea Log x Evan Rossell</p>
                    </Figure.Caption>
                    <Figure.Caption>
                      <p className="m-0">長板</p>
                      <p className="m-0">顏色：白</p>
                      <p className="mb-1">尺寸：6 ft</p>
                    </Figure.Caption>
                    <Figure.Caption>
                      <p className="m-0 fw-bold">NT 12,300</p>
                    </Figure.Caption>
                  </div>
                  <div className="w-25">
                    <button
                      type="button"
                      className="btn btn-secondary border rounded-circle p-0 countButton me-3"
                    >
                      <AiOutlineMinus
                        size={18}
                        color="#ffffff"
                        className="text-center"
                      />
                    </button>
                    1
                    <button
                      type="button"
                      className="btn btn-secondary border rounded-circle p-0 countButton ms-3"
                    >
                      <AiOutlinePlus
                        size={18}
                        color="#ffffff"
                        className="text-center"
                      />
                    </button>
                  </div>
                </Figure>
              </div>
            </div>
            {/* 付款及運送方式 */}
            <div className="col-5 borderRadius p-0 ms-4 shadow">
              <div className="p-4 border-bottom text-center">
                <h1>付款及運送方式</h1>
              </div>
              <div className="px-5 py-4 cartAmount">
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-5">商品總金額</div>
                  <div className="col-5 text-end">15,000</div>
                  <div className="col-1"></div>
                </div>
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-5">優惠券</div>
                  <div className="col-5 text-end">0</div>
                  <div className="col-1"></div>
                </div>
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-5">運費</div>
                  <div className="col-5 text-end">- 100</div>
                  <div className="col-1"></div>
                </div>
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-5">購物金</div>
                  <div className="col-5 text-end">- 0</div>
                  <div className="col-1"></div>
                </div>
                <div className="row mt-5">
                  <div className="col-1"></div>
                  <div className="col-6 d-flex justify-content-end align-items-end">
                    總金額：
                  </div>
                  <div className="col-4 text-end h2 m-0">NT 15,000</div>
                  <div className="col-1"></div>
                </div>
              </div>
              <div className="px-5 py-4">
                <h5>付款方式</h5>
                <Form.Select aria-label="select">
                  <option>付款方式</option>
                  <option value="pay1">信用卡線上付款</option>
                  <option value="pay2">貨到付款(宅配)</option>
                  <option value="pay3">貨到付款(超商)</option>
                </Form.Select>
                <h5 className="mt-4">運送方式</h5>
                <Form.Select aria-label="select">
                  <option>運送方式</option>
                  <option value="ship1">宅配</option>
                  <option value="ship2">超商取貨</option>
                </Form.Select>
              </div>
              <div className="d-flex justify-content-center mt-5 mb-4">
                <Link to="/cart-manage">
                  <div className="btn btn-secondary cartNextBtn">下一步</div>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default CartPreOrder;
