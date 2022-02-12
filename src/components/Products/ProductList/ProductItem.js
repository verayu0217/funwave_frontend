import React from 'react';
import { Figure } from 'react-bootstrap';
import longboard1 from './longboard1.jpg'; // 待釐清圖放src還是放在public

// react-icons
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
// import { BsStarHalf } from 'react-icons/bs'; // 半星星
import { BiHeart } from 'react-icons/bi';
// import { FaHeart } from 'react-icons/fa'; // 全愛心

function ProductItem(props) {
  const { id, name, picture, price, tags } = props.product;
  return (
    <>
      {/* <tr>
        <td className="number text-center">{id}</td>
        <td className="image">
          <img src={picture} alt="" />
        </td>
        <td className="product">
          <strong>{name}</strong>
        </td>
        <td className="rate text-right">{tags}</td>
        <td className="price text-right">${price}</td>
      </tr> */}

      <Figure className="mt-4 position-relative">
        <Figure.Image
          width={268}
          height={350}
          alt="longboard1"
          src={longboard1}
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
          <p className="fs-6 mb-0 mt-2">{name}</p>
        </Figure.Caption>
        <Figure.Caption className="d-flex justify-content-center">
          <p className="fs-6 mb-2">{tags}</p>
        </Figure.Caption>
        <Figure.Caption className="d-flex justify-content-center">
          <p className="fs-6 text-dark fw-bold">NT {price}</p>
        </Figure.Caption>
      </Figure>
    </>
  );
}

export default ProductItem;

// 複習2022.2.11
