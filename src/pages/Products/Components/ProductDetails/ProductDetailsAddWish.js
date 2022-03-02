//  ProductDetailsContent.js 內容說明：商品細節頁中間的商品細節區

import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { BiHeart } from 'react-icons/bi';
// import { FaHeart } from 'react-icons/fa'; // 全愛心

function ProductDetailsAddWish(props) {
  const { auth, setAuth, productGroup, setProductGroup } = props;

  // 判斷是否登入，登入才能加入收藏
  const [goToWish, setGoToWish] = useState(false);

  if (goToWish) {
    return <Navigate to="/product-cart01"></Navigate>;
  }

  return (
    <>
      {productGroup}
      {/* {auth} */}
      <BiHeart
        size={28}
        color="#ff7f6a"
        className="position-absolute addWish"
        onClick={() => {
          if (auth === null) {
            return alert('請登入會員');
          } else {
            setGoToWish(true);
          }
        }}
      />
    </>
  );
}

export default ProductDetailsAddWish;
