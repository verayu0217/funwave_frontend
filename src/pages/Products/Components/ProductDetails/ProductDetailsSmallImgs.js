import React from 'react';
import { Figure } from 'react-bootstrap';
import { IMAGE_URL } from '../../../../utils/config';

function ProductDetailsSmallImgs(props) {
  const { product } = props;

  const image1 = (
    <>
      <Figure>
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
      <Figure>
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
      <Figure>
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
      <Figure>
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
  const image5 = (
    <>
      <Figure>
        <Figure.Image
          width={75}
          height={75}
          alt={`${product[0].product_no}`}
          src={`${IMAGE_URL}/products/${product[0].image5}`}
          className="border border-dark p-1 m-0"
        />
      </Figure>
    </>
  );
  return (
    <>
      {product[0].image1 !== '0' && image1}
      {product[0].image2 !== '0' && image2}
      {product[0].image3 !== '0' && image3}
      {product[0].image4 !== '0' && image4}
      {/* {product[0].image5 !== '0' && image5} */}
    </>
  );
}

export default ProductDetailsSmallImgs;
