// ProductAddCart.js 內容說明：商品細節頁右方的加入購物車區

import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Figure } from 'react-bootstrap';
import { uniqBy } from 'lodash';
import {
  AiFillStar,
  AiOutlineStar,
  AiFillTags,
  AiOutlinePlus,
  AiOutlineMinus,
} from 'react-icons/ai';
import { BiHeart } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa'; // 全愛心
import 'animate.css';
import { useAuth } from '../../../../context/auth';
import { useFav } from '../../../../context/fav';
import { IMAGE_URL } from '../../../../utils/config';

function ProductAddCart(props) {
  // 會員資料傳入useContext
  const { auth, setAuth } = useAuth();
  const { fav, setFav } = useFav();
  console.log('auth', auth);

  const {
    product,
    count,
    setCount,
    size,
    setSize,
    colorId,
    setColorId,
    chosenProductOrder,
    setChosenProductOrder,
  } = props;
  const [mycart, setMycart] = useState([]); // 要存進localStorage的資料

  // 判斷是否登入，登入才能進購物車
  const [goToCart, setGoToCart] = useState(false);

  // 小分類、品牌的id對照名稱
  const smallCatTypes = [
    '衝浪長板',
    '衝浪快樂板',
    '衝浪短板',
    '衝浪板舵',
    '衝浪腳繩',
    '衝浪腳踏墊',
    '衝浪斗篷毛巾衣',
    '防寒衣',
  ];
  const brandTypes = [
    'Catch Surf',
    'Solid Surf Co',
    'JJF by Pyzel',
    'Modern',
    'Softech',
    'Almond Surfboards',
    'Lib Tech',
    'True Ames',
    'Captain Fin',
    'Creatures of Leisure',
    'Roam',
    'Pro-Lite',
    'en.saintjacques',
  ];

  // 讓畫面有尺寸btn的值
  // 取出主貨號(product_group)中子貨號(product_no)的尺寸
  let sizeArr = [];
  product.map((v, i) => {
    return sizeArr.unshift(v.size);
  });
  // 去除掉重複的尺寸
  const sizeUnique = sizeArr.filter(function (element, index, arr) {
    return arr.indexOf(element) === index;
  });
  sizeUnique.sort(function (a, b) {
    return a - b;
  });

  // 讓畫面有顏色btn的值
  // 整理product為顏色不重複的colorProduct
  const colorProduct = uniqBy(product, 'color_id');

  // console.log('ProductAddCart.js - product', product);
  // console.log('ProductAddCart.js - size', size);
  // console.log('ProductAddCart.js - colorId', colorId);

  // 依據尺寸、顏色找到對應的子貨號(product_no)
  useEffect(() => {
    // 還未選尺寸時，預設尺寸為第一個子貨號的尺寸
    if (size === '') {
      setSize(product[0].size);
    } else {
    }

    let chosenProduct = product.filter(
      (object) => (object['color_id'] === colorId) & (object['size'] === size)
    );
    // console.log('chosenProduct', chosenProduct);

    setChosenProductOrder(product.indexOf(chosenProduct[0]));
  }, [colorId, size]);
  console.log('ProductAddCart.js - chosenProductOrder', chosenProductOrder);

  const updateCartToLocalStorage = (item) => {
    let currentCart = JSON.parse(localStorage.getItem('productCart')) || [];
    // 每一筆資料都加入購物車
    currentCart.push(item);
    localStorage.setItem('productCart', JSON.stringify(currentCart));

    // 設定資料
    setMycart(currentCart);
    console.log('ProductAddCart.js - currentCart', currentCart);
    // console.log('ProductAddCart.js - mycart', mycart);
  };

  console.log('goToCart', goToCart);
  // 登入才可以進購物車
  if (goToCart) {
    return <Navigate to="/product-cart01"></Navigate>;
  }

  // 加入/刪除收藏
  const favorite = (item) => {
    let wishProduct = JSON.parse(localStorage.getItem('likeID')) || [];
    wishProduct.push(item);
    localStorage.setItem('likeID', JSON.stringify(wishProduct));
    setFav({ ...fav, wishID: wishProduct });
  };
  const deleteFavorite = (item) => {
    let filterwish = fav.wishID.filter((value) => value !== item);
    setFav({ ...fav, wishID: filterwish });
    localStorage.removeItem('likeID');
    localStorage.setItem('likeID', JSON.stringify(filterwish));
  };

  return (
    <>
      {/* 加入購物車 */}
      <button
        onClick={() => {
          if (auth === null) {
            return alert('請登入會員');
          } else {
            setGoToCart(true);
          }
        }}
      >
        去購物車
      </button>
      {/* 商品名稱、品牌、小分類、貨號 */}
      <div className="d-flex justify-content-between">
        <h1>{product[0].name}</h1>
        {fav.wishID.includes(product[0].product_group) ? (
          <FaHeart
            size={40}
            color="#ff7f6a"
            className="proDetailHeart"
            onClick={(e) => {
              setFav(false);
              deleteFavorite(product[0].product_group);
            }}
          />
        ) : (
          <BiHeart
            size={40}
            color="#ff7f6a"
            className="proDetailHeart"
            type="button"
            onClick={(e) => favorite(product[0].product_group)}
          />
        )}
      </div>

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
      <p className="mb-2">
        #{product[chosenProductOrder > 0 ? chosenProductOrder : 0].product_no}
      </p>
      {/* 選擇顏色 */}
      <div className="row mt-4 mb-3">
        <div className="col-4 pe-0">
          <div>選擇顏色：</div>
        </div>
        <div className="col-8 p-0">
          <div className="d-flex">
            {colorProduct.map((v, i) => {
              return (
                <div
                  key={v.product_no}
                  className="me-2 cursorPointer"
                  onClick={() => {
                    setColorId(v.color_id);
                  }}
                >
                  <Figure>
                    <Figure.Image
                      width={75}
                      height={75}
                      alt={v.name}
                      src={`${IMAGE_URL}/products/${v.image1}`}
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
                <div key={i}>
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
      <div className="d-flex mt-5 mb-3 align-items-center">
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

      <button
        className="btn btn-secondary btnAddCart"
        onClick={() => {
          updateCartToLocalStorage({
            product_no: product[chosenProductOrder].product_no, // undefined!! Bug
            name: product[0].name,
            price: product[0].price,
            image1: product[chosenProductOrder].image1,
            color_id: product[chosenProductOrder].color_id,
            size: product[chosenProductOrder].size,
            small_cat_id: product[0].small_cat_id,
            stock: product[chosenProductOrder].stock,
            count: count,
            style: '',
          });
        }}
      >
        加入購物車
      </button>
    </>
  );
}

export default ProductAddCart;
