import React from 'react';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';

function ProductList(props) {
  const { products } = props;

  return (
    <>
      {/* <div className="table-responsive">
        <table className="table table-hover">
          <tbody>
            {products.map((productItem, i) => {
              return <ProductItem key={i} product={productItem} />;
            })}
          </tbody>
        </table>
      </div> */}
      <div className="d-flex flex-wrap">
        {products.map((productItem, i) => {
          return (
            <Link to={`/products/${productItem.product_group}`} key={i}>
              <ProductItem product={productItem} />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default ProductList;
