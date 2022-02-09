import React, { useState, useEffect } from 'react';
// import ProductBanner from '../../data/images/ProductBanner.jpg'; // 待釐清圖放src還是放在public
import './Products.scss';

function Products(props) {
  const title = 'FUN SHOP<br />FUN 商店';
  return (
    <>
      {/* title、banner */}
      <div className="container-fluid banner">
        <div className="d-flex justify-content-center align-items-end title">
          <h4>FUN SHOP</h4>
        </div>
        <div className="d-flex justify-content-center align-items-start">
          <h1>FUN 商店</h1>
        </div>
      </div>

      <div className="container">
        <h1>Breadcrumb</h1>
        <aside className="float-start">篩選</aside>
        <article className="float-end">商品頁</article>
      </div>
    </>
  );
}

export default Products;

// 手風琴、下拉選單 分類
// Checks and radio 篩選
