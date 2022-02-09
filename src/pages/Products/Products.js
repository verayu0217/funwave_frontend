import React, { useState, useEffect } from 'react';
// import ProductBanner from '../../data/images/ProductBanner.jpg'; // 待釐清圖放src還是放在public
import './Products.scss';

function Products(props) {
  return (
    <>
      <h1>header</h1>
      <div className="container-fluid banner"></div>
      <div className="banner"></div>

      <div className="container">
        {/* <img
          src={ProductBanner}
          className="img-fluid"
          alt="ProductBanner"
          title="ProductBanner"
        ></img> */}
      </div>
    </>
  );
}

export default Products;
