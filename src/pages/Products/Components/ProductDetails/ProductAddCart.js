// ProductAddCart.js 內容說明：商品細節頁右方的加入購物車區

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Figure } from 'react-bootstrap';
import {
  AiFillStar,
  AiOutlineStar,
  AiFillTags,
  AiOutlinePlus,
  AiOutlineMinus,
} from 'react-icons/ai';
import longboard1 from './longboard1.jpg'; // 暫存推薦商品前端假圖片

function ProductAddCart(props) {
  const { product } = props;
  const [count, setCount] = useState(1);
  const [size, setSize] = useState('');
  const [mycart, setMycart] = useState([]);

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

  // 取出主貨號(product_group)中子貨號(product_no)的尺寸
  var sizeArr = [];
  product.map((product_no, i) => {
    return sizeArr.unshift(product[i].size);
  });
  // console.log("sizeArr",sizeArr); // ["6","5","6","5","6","5","6","5"]
  // 去除掉重複的尺寸
  var sizeUnique = sizeArr.filter(function (element, index, arr) {
    return arr.indexOf(element) === index;
  });
  // console.log("sizeUnique",sizeUnique); // ["6","5"]
  // console.log('size', size);

  // 取出主貨號(product_group)中子貨號(product_no)的顏色
  var colorArr = [];
  product.map((product_no, i) => {
    return colorArr.unshift(product[i].color_id);
  });
  // console.log('colorArr', colorArr); // [6, 6, 7, 7, 3, 3, 4, 4]
  // 去除掉重複的顏色
  var colorUnique = colorArr.filter(function (element, index, arr) {
    return arr.indexOf(element) === index;
  });
  // console.log('colorUnique', colorUnique); // [6, 7, 3, 4]

  // cartData資料待存進localStorage
  // let cartData = [
  //   {
  //     product_no: product[0].product_no,
  //     name: product[0].name,
  //     price: product[0].price,
  //     stock: product[0].stock,
  //     size: product[0].size,
  //     color_id: product[0].color_id,
  //     small_cat_id: product[0].small_cat_id,
  //     count: count,
  //   },
  // ];

  // 將cartData存進localStorage
  // localStorage.setItem('商品列表的購物車資料', JSON.stringify(cartData));
  // console.log('商品列表的購物車資料-ProductDetail', cartData);

  const updateCartToLocalStorage = (item) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];

    // find if the product in the localstorage with its id
    // const index = currentCart.findIndex((v) => v.id === item.id);

    // found: index! == -1
    // if (index > -1) {
    //   //currentCart[index].amount++
    //   setProductName('這個商品已經加過了');
    //   handleShow();
    //   return;
    // } else {
    //   currentCart.push(item);
    // }

    currentCart.push(item);
    localStorage.setItem('cart', JSON.stringify(currentCart));
    console.log('商品列表的購物車資料-ProductDetail', currentCart);

    // 設定資料
    setMycart(currentCart);
    // setProductName('產品：' + item.name + '已成功加入購物車');
  };

  return (
    <>
      {/* 商品名稱、品牌、小分類、貨號 */}
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
      {/* 選擇顏色 */}
      <div className="row mt-5 mb-3">
        <div className="col-4 pe-0">
          <div>選擇顏色：</div>
        </div>
        <div className="col-8 p-0">
          <div className="d-flex">
            {colorUnique.map((index, i) => {
              return (
                <div className="me-2">
                  <Figure>
                    <Figure.Image
                      width={75}
                      height={75}
                      alt="1"
                      src={longboard1}
                      className="border border-dark p-1 m-0"
                    />
                  </Figure>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* 選擇尺寸 */}
      <div className="row">
        <div className="col-4 pe-0 mt-1">
          <div>選擇尺寸：</div>
        </div>
        <div className="col-8 p-0">
          <div className="d-flex">
            {sizeUnique.map((index, i) => {
              return (
                <div>
                  <button
                    className="btn btn-dark sizeBtn text-center me-2 d-flex justify-content-center align-items-center"
                    onClick={() => {
                      setSize(index);
                    }}
                  >
                    {index}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* 單價 */}
      <div className="d-flex my-5 align-items-center">
        <h2 className="fw-bolder">NT {product[0].price.toLocaleString()}</h2>
        <AiFillTags size={16} color="#ff7f6a" className="ms-4" />
        <p className="fs-6 text-primary m-0 ms-1">精選優惠！</p>
      </div>
      {/* 加減數量 */}
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
      {/* 加入購物車 */}
      <Link to="/product-cart01">去購物車</Link>
      <button
        className="btn btn-secondary btnAddCart"
        onClick={() => {
          updateCartToLocalStorage({
            product_no: '',
            name: '',
            price: '',
            stock: '',
            size: '',
            color_id: '',
            small_cat_id: '',
            count: '',
          });
        }}
      >
        加入購物車
      </button>
    </>
  );
}

export default ProductAddCart;
