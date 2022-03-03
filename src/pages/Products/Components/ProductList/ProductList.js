import React, { useState } from 'react';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';
import { BiHeart } from 'react-icons/bi'; //空愛心
import { FaHeart } from 'react-icons/fa'; // 全愛心

function ProductList(props) {
  const { products } = props;
  return (
    <>
      <div className="d-flex flex-wrap">
        {products.map((productItem, i) => {
          return (
            <div key={i} className="position-relative">
              <ProductItem product={productItem} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductList;
