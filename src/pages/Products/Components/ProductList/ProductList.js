import React from 'react';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';
import { BiHeart } from 'react-icons/bi';

function ProductList(props) {
  const { products } = props;

  return (
    <>
      <div className="d-flex flex-wrap">
        {products.map((productItem, i) => {
          return (
            <div key={i} className="position-relative">
              <BiHeart
                size={21}
                color="#ff7f6a"
                className="position-absolute top-5"
                // onClick={}
              />
              <Link to={`/products/${productItem.product_group}`}>
                <ProductItem product={productItem} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductList;
