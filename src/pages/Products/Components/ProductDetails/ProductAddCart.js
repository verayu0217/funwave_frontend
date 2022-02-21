// ProductAddCart.js 內容說明：商品細節頁右方的加入購物車區

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// react-icons
import {
  AiFillStar,
  AiOutlineStar,
  AiFillTags,
  AiOutlinePlus,
  AiOutlineMinus,
} from 'react-icons/ai';

function ProductAddCart(props) {
  const { product } = props;
  const [count, setCount] = useState(1);

  // 小分類、品牌的id對照名稱
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

  // cartData資料待存進localStorage
  let cartData = [
    {
      product_no: product[0].product_no,
      name: product[0].name,
      price: product[0].price,
      stock: product[0].stock,
      size: product[0].size,
      color_id: product[0].color_id,
      small_cat_id: product[0].small_cat_id,
      count: count,
    },
  ];

  // 將選擇的資料存進localStorage
  localStorage.setItem('商品列表的購物車資料', JSON.stringify(cartData));
  console.log('商品列表的購物車資料-ProductDetail', cartData);

  return (
    <>
      <h1>{product[0].name}</h1>
      <h2>{brandTypes[product[0].brand_id - 1]}</h2>
      <h2>{smallCatTypes[product[0].small_cat_id - 1]}</h2>
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
      <p className="fs-6">#{product[0].product_no}</p>
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
      <div className="d-flex my-5 align-items-center">
        <h2 className="fw-bolder">NT {product[0].price * count}</h2>
        <AiFillTags size={16} color="#ff7f6a" className="ms-4" />
        <p className="fs-6 text-primary m-0 ms-1">精選優惠！</p>
      </div>
      <div className="d-flex justify-content-center align-items-center mb-4">
        <button
          type="button"
          className="btn btn-secondary border rounded-circle p-0 d-flex justify-content-center align-items-center btnPlusMinus "
          onClick={() => {
            if (count - 1 >= 1) setCount(count - 1);
          }}
        >
          <AiOutlineMinus size={20} color="#ffffff" className="text-center" />
        </button>
        {/* <input
          type="text"
          value={count}
          className="form-control mx-3 w-25"
          name="quantity"
        /> */}
        <div className="fs-3 text-center mx-3">{count}</div>
        <button
          type="button"
          className="btn btn-secondary border rounded-circle p-0 d-flex justify-content-center align-items-center btnPlusMinus"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          <AiOutlinePlus size={20} color="#ffffff" className="text-center" />
        </button>
      </div>
      <Link to="/product-cart01">
        <button className="btn btn-secondary btnAddCart">加入購物車</button>
      </Link>
    </>
  );
}

export default ProductAddCart;
