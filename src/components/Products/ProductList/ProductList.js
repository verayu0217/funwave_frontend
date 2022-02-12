import React from 'react';
import ProductItem from './ProductItem';

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
          return <ProductItem key={i} product={productItem} />;
        })}
      </div>
    </>
  );
}

export default ProductList;

// 複習2022.2.11
