import React from 'react';
import ProductItem from './ProductItem';
import { Figure } from 'react-bootstrap';

// react-icons
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
// import { BsStarHalf } from 'react-icons/bs'; 半星星
import { FiHeart } from 'react-icons/fi';

function ProductList(props) {
  const { products } = props;

  return (
    <>
      <div className="table-responsive">
        <table className="table table-hover">
          <tbody>
            {products.map((productItem, i) => {
              return <ProductItem key={i} product={productItem} />;
            })}
          </tbody>
        </table>
      </div>
      <Figure className="mt-5 position-relative">
        <Figure.Image
          width={300}
          height={350}
          alt="longboard1"
          src={longboard1}
        />
        <FiHeart
          size={18}
          color="#ff7f6a"
          className="float-end position-absolute top-0 end-0"
        />
        <div className="d-flex justify-content-center mt-2">
          <AiFillStar size={20} color="#ff7f6a" />
          <AiFillStar size={20} color="#ff7f6a" />
          <AiFillStar size={20} color="#ff7f6a" />
          <AiFillStar size={20} color="#ff7f6a" />
          <AiOutlineStar size={20} color="#ff7f6a" />
        </div>
        <Figure.Caption className="d-flex justify-content-center">
          <p className="fs-6 mb-0 mt-2">Catch Surf Odysea 9'0"</p>
        </Figure.Caption>
        <Figure.Caption className="d-flex justify-content-center">
          <p className="fs-6 mb-2">Log x Evan Rossell 衝浪板</p>
        </Figure.Caption>
        <Figure.Caption className="d-flex justify-content-center">
          <p className="fs-6 text-dark fw-bold">NT 1,200</p>
        </Figure.Caption>
      </Figure>
    </>
  );
}

export default ProductList;

// 複習2022.2.11
