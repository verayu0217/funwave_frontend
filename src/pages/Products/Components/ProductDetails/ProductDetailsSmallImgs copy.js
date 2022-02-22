import React from 'react';
import { Figure } from 'react-bootstrap';
import { IMAGE_URL } from '../../../../utils/config';

function ProductDetailsSmallImgs(props) {
  const { product_id, name, image1, price, small_cat_id } = props.product;

  return (
    <>
      <Figure className="mt-4 position-relative">
        <Figure.Image
          width={268}
          height={350}
          alt={`${image1}`}
          src={`${IMAGE_URL}/products/${image1}`}
        />
        <BiHeart
          size={21}
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
          <p className="mb-0 mt-2">{name}</p>
        </Figure.Caption>
        <Figure.Caption className="d-flex justify-content-center">
          <p className="mb-2">{smallCatTypes[small_cat_id - 1]}</p>
        </Figure.Caption>
        <Figure.Caption className="d-flex justify-content-center">
          <p className="fw-bold">NT {price}</p>
        </Figure.Caption>
      </Figure>
    </>
  );
}

export default ProductDetailsSmallImgs;
