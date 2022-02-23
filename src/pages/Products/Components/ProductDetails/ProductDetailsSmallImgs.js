import React, { useState } from 'react';
import { Figure } from 'react-bootstrap';
import { IMAGE_URL } from '../../../../utils/config';

function ProductDetailsSmallImgs(props) {
  const { product, clickSmallImage, setClickSmallImage } = props;

  const image1 = (
    <>
      <Figure
        onClick={() => {
          setClickSmallImage('image1');
        }}
      >
        <Figure.Image
          width={75}
          height={75}
          alt={`${product[0].product_no}`}
          src={`${IMAGE_URL}/products/${product[0].image1}`}
          className="border border-dark p-1 m-0"
        />
      </Figure>
    </>
  );

  const image2 = (
    <>
      <Figure
        onClick={() => {
          setClickSmallImage('image2');
        }}
      >
        <Figure.Image
          width={75}
          height={75}
          alt={`${product[0].product_no}`}
          src={`${IMAGE_URL}/products/${product[0].image2}`}
          className="border border-dark p-1 m-0"
        />
      </Figure>
    </>
  );
  const image3 = (
    <>
      <Figure
        onClick={() => {
          setClickSmallImage('image3');
        }}
      >
        <Figure.Image
          width={75}
          height={75}
          alt={`${product[0].product_no}`}
          src={`${IMAGE_URL}/products/${product[0].image3}`}
          className="border border-dark p-1 m-0"
        />
      </Figure>
    </>
  );
  const image4 = (
    <>
      <Figure
        onClick={() => {
          setClickSmallImage('image4');
        }}
      >
        <Figure.Image
          width={75}
          height={75}
          alt={`${product[0].product_no}`}
          src={`${IMAGE_URL}/products/${product[0].image4}`}
          className="border border-dark p-1 m-0"
        />
      </Figure>
    </>
  );
  // console.log('clickSmallImage', clickSmallImage);

  return (
    <>
      {product[0].image1 !== '0' && image1}
      {product[0].image2 !== '0' && image2}
      {product[0].image3 !== '0' && image3}
      {product[0].image4 !== '0' && image4}
    </>
  );
}

export default ProductDetailsSmallImgs;
