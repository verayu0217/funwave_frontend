//  ProductDetailsContent.js 內容說明：商品細節頁中間的商品細節區

import React, { useState } from 'react';
import { Figure } from 'react-bootstrap';
import longboard1 from './longboard1.jpg'; // 暫存推薦商品前端假圖片
import { IMAGE_URL } from '../../../../utils/config';
import ProductDetailsSmallImgs from './ProductDetailsSmallImgs.js';

// react-icons
import {
  AiOutlineDown,
  AiOutlineUp,
  AiFillLeftCircle,
  AiFillRightCircle,
} from 'react-icons/ai';

function ProductDetailsContent(props) {
  const {
    product,
    clickSmallImage,
    setClickSmallImage,
    chosenProductOrder,
    setChosenProductOrder,
  } = props;

  // 小分類、品牌、材質、衝浪板舵的id對照名稱
  const smallCatTypes = [
    '衝浪長板',
    '衝浪快樂板',
    '衝浪短板',
    '衝浪板舵',
    '衝浪腳繩',
    '衝浪腳踏墊',
    '衝浪板袋',
    '衝浪斗篷毛巾衣',
    '防寒衣',
  ];
  const brandTypes = ['Catch Surf', 'Solid Surf Co', 'JJF by Pyzel'];
  const materialTypes = ['Polyethylene', 'EPOXY', 'EPS', '碳纖維'];
  const finCompatibilityTypes = ['FCS II Longboard', 'FCS II', 'Single Tab'];

  // 長板尺寸對照表
  const displaySizeDetailsLB = (
    <>
      <div className="m-5">
        <h3 className="border-bottom border-dark pb-2 mb-4">
          尺寸對照表 - 長板
        </h3>
        <div className="row">
          <div className="col-3">
            <p className="text-center fw-bold">尺寸 (ft)</p>
            <p className="text-center fw-bold">寬度 (in)</p>
            <p className="text-center fw-bold">厚度 (in)</p>
            <p className="text-center fw-bold">重量 (L)</p>
          </div>
          <div className="col-9">
            <p className="fw-bold">9'0"</p>
            <p>24</p>
            <p>3.5</p>
            <p>98</p>
          </div>
        </div>
      </div>
    </>
  );

  // 快樂板尺寸對照表
  const displaySizeDetailsFB = (
    <>
      <div className="m-5">
        <h3 className="border-bottom border-dark pb-2 mb-4">
          尺寸對照表 - 快樂板
        </h3>
        <div className="row">
          <div className="col-3">
            <p className="text-center fw-bold">尺寸 (ft)</p>
            <p className="text-center fw-bold">寬度 (in)</p>
            <p className="text-center fw-bold">厚度 (in)</p>
            <p className="text-center fw-bold">重量 (L)</p>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-4">
                <p className="fw-bold">7'2"</p>
                <p>21.75</p>
                <p>2.85</p>
                <p>50.6</p>
              </div>
              <div className="col-4">
                <p className="fw-bold">7'6"</p>
                <p>22</p>
                <p>2.95</p>
                <p>55.6</p>
              </div>
              <div className="col-4">
                <p className="fw-bold">7'10"</p>
                <p>22</p>
                <p>3</p>
                <p>59</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  // 短板尺寸對照表
  const displaySizeDetailsSB = (
    <>
      <div className="m-5">
        <h3 className="border-bottom border-dark pb-2 mb-4">
          尺寸對照表 - 短板
        </h3>
        <div className="row">
          <div className="col-3">
            <p className="text-center fw-bold">尺寸 (ft)</p>
            <p className="text-center fw-bold">寬度 (in)</p>
            <p className="text-center fw-bold">厚度 (in)</p>
            <p className="text-center fw-bold">重量 (L)</p>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-4">
                <p className="fw-bold">4'6"</p>
                <p>19</p>
                <p>2.375</p>
                <p>23</p>
              </div>
              <div className="col-4">
                <p className="fw-bold">5'6"</p>
                <p>20.75</p>
                <p>2.875</p>
                <p>36.8</p>
              </div>
              <div className="col-4">
                <p className="fw-bold">6'6"</p>
                <p>22</p>
                <p>7.25</p>
                <p>52.3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* 大小商品圖 */}
      <div className="d-flex justify-content-evenly">
        <div className="d-flex flex-column align-items-center justify-content-around">
          <AiOutlineUp size={22} color="#333333" className="" />
          {/* 引用ProductDetailsSmallImgs.js */}
          <ProductDetailsSmallImgs
            product={product}
            clickSmallImage={clickSmallImage}
            setClickSmallImage={setClickSmallImage}
            chosenProductOrder={chosenProductOrder}
            setChosenProductOrder={setChosenProductOrder}
          />
          <AiOutlineDown size={22} color="#333333" className="" />
        </div>
        <Figure>
          <Figure.Image
            width={450}
            height={450}
            alt={`${product[0].product_no}`}
            src={`${IMAGE_URL}/products/${product[0][clickSmallImage]}`}
          />
        </Figure>
      </div>

      {/* 推薦商品 */}
      <div className="m-5">
        <h3 className="border-bottom border-dark pb-2 mb-4">推薦相似產品</h3>
        <div className="d-flex justify-content-evenly align-items-center">
          <AiFillLeftCircle size={22} color="#17a8a2" className="" />
          <Figure>
            <Figure.Image
              width={115}
              // height={80}
              alt="longboard1"
              src={longboard1}
            />
            <Figure.Caption className="d-flex justify-content-center">
              <p className="mb-0">衝浪板</p>
            </Figure.Caption>
            <Figure.Caption className="d-flex justify-content-center">
              <p className="fw-bold">NT 2,000</p>
            </Figure.Caption>
          </Figure>
          <Figure>
            <Figure.Image
              width={115}
              // height={80}
              alt="longboard1"
              src={longboard1}
            />
            <Figure.Caption className="d-flex justify-content-center">
              <p className="recommendProducts mb-0">衝浪板</p>
            </Figure.Caption>
            <Figure.Caption className="d-flex justify-content-center">
              <p className="fw-bold">NT 2,000</p>
            </Figure.Caption>
          </Figure>
          <Figure>
            <Figure.Image
              width={115}
              // height={80}
              alt="longboard1"
              src={longboard1}
            />
            <Figure.Caption className="d-flex justify-content-center">
              <p className="recommendProducts mb-0">衝浪板</p>
            </Figure.Caption>
            <Figure.Caption className="d-flex justify-content-center">
              <p className="fw-bold">NT 2,000</p>
            </Figure.Caption>
          </Figure>
          <Figure>
            <Figure.Image
              width={115}
              // height={80}
              alt="longboard1"
              src={longboard1}
            />
            <Figure.Caption className="d-flex justify-content-center">
              <p className="recommendProducts mb-0">衝浪板</p>
            </Figure.Caption>
            <Figure.Caption className="d-flex justify-content-center">
              <p className="fw-bold">NT 2,000</p>
            </Figure.Caption>
          </Figure>
          <AiFillRightCircle size={22} color="#17a8a2" className="" />
        </div>
      </div>

      {/* 品牌介紹 */}
      <div className="m-5">
        <h3 className="border-bottom border-dark pb-2 mb-4">品牌介紹</h3>
        <div className="row">
          <div className="col-3">
            <p className="text-center fw-bold">
              {brandTypes[product[0].brand_id - 1]}
            </p>
          </div>
          <div className="col-9">
            <p>
              The JJF by Pyzel Gremlin Surfboard is crafted with a super
              versatile shape and stacked to the brim with some of the most
              advanced surf technology money can buy. From its lightweight Eco
              EPS Construction to its hand sanded rails, this is a grab and go
              good time for beginners and veterans alike.
            </p>
          </div>
        </div>
      </div>

      {/* 產品介紹 */}
      <div className="m-5">
        <h3 className="border-bottom border-dark pb-2 mb-4">產品介紹</h3>
        <div className="row">
          <div className="col-3">
            <p className="text-center fw-bold">
              {smallCatTypes[product[0].small_cat_id - 1]}
            </p>
          </div>
          <div className="col-9">
            <p>
              Apex
              將我們在傳統和高性能長板衝浪方面的所有知識整合到一個精美的包裝中。當我們設計這塊板時，我們打算製造有史以來用途最廣泛的經典長板。一個對於新手來說非常容易上手的滑板，同時也是一個
              Cj
              可以在未來很多年推動他使用的滑板。鼻部凹入以實現令人難以置信的鼻翼提升，臀部像經典的「參與」原木一樣用於樞軸和鞭打，但具有較低的性能風格導軌和尾部的現代邊緣以提高速度和控制力。以現代風格向過去致敬。此板為經典長板設計的「
              頂點 」！
            </p>
          </div>
        </div>
      </div>

      {/* 產品規格 */}
      <div className="m-5">
        <h3 className="border-bottom border-dark pb-2 mb-4">產品規格</h3>
        <div className="row">
          <div className="col-3">
            <p className="text-center fw-bold">材質</p>
            <p className="text-center fw-bold">類型</p>
            <p className="text-center fw-bold">適用板舵類型</p>
          </div>
          <div className="col-9">
            <p>{materialTypes[product[0].material_id - 1]}</p>
            <p>{smallCatTypes[product[0].small_cat_id - 1]}</p>
            <p>{finCompatibilityTypes[product[0].fin_compatibility_id - 1]}</p>
          </div>
        </div>
      </div>

      {/* 視短板、快樂板、長板顯示其對應之尺寸對照表 */}
      {(() => {
        if (product[0].small_cat_id === 1) {
          return displaySizeDetailsLB;
        } else if (product[0].small_cat_id === 2) {
          return displaySizeDetailsFB;
        } else {
          return displaySizeDetailsSB;
        }
      })()}
    </>
  );
}

export default ProductDetailsContent;
