import React, { useState, useEffect } from 'react';
import greenwave from '../../data/images/greenwave64x24.png'; // 待釐清圖放src還是放在public
import './Products.scss';

function Products(props) {
  const title = 'FUN SHOP<br />FUN 商店';
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
        <aside className="float-start">篩選</aside>
        <article className="float-end">
          <header className="position-relative">
            <div className="d-flex justify-content-center">
              <img src={greenwave} alt="greenwave" title="greenwave" />
              <h1>短板</h1>
            </div>
            {/* 待搜尋icon */}
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

// 手風琴、下拉選單 分類
// Checks and radio 篩選
