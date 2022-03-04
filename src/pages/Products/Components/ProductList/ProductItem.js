import React, { useState } from 'react';
import { Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../../../utils/config';
import { useFav } from '../../../../context/fav';

// react-icons
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
// import { BsStarHalf } from 'react-icons/bs'; // 半星星
import { BiHeart } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa'; // 全愛心

// 文字過長會跑版、後端圖片如何置換

function ProductItem(props) {
  const { name, image1, price, small_cat_id, brand_id, product_group } =
    props.product;
  const { fav, setFav } = useFav();

  const favorite = (item) => {
    let wishProduct = JSON.parse(localStorage.getItem('likeID')) || [];
    wishProduct.push(item);
    localStorage.setItem('likeID', JSON.stringify(wishProduct));
    setFav({ ...fav, wishID: wishProduct });
  };
  const delFavorite = (item) => {
    // console.log('b', fav.wishID);
    let filterwish = fav.wishID.filter((value) => value !== item);
    setFav({ ...fav, wishID: filterwish });
    // console.log('bb', filterwish);
    localStorage.removeItem('likeID');
    localStorage.setItem('likeID', JSON.stringify(filterwish));
  };
  // console.log('a', fav);
  // 小分類、品牌的id對照名稱
  const smallCatTypes = [
    '長板',
    '快樂板',
    '短板',
    '衝浪板舵',
    '腳繩',
    '腳踏墊',
    '衝浪斗篷毛巾衣',
    '防寒衣',
  ];
  const brandTypes = [
    'Catch Surf',
    'Solid Surf Co',
    'JJF by Pyzel',
    'Modern',
    'Softech',
    'Almond Surfboards',
    'Lib Tech',
    'True Ames',
    'Captain Fin',
    'Creatures of Leisure',
    'Roam',
    'Pro-Lite',
    'en.saintjacques',
  ];

  return (
    <>
      {fav.wishID.includes(product_group) ? (
        <FaHeart
          size={21}
          color="#ff7f6a"
          className="position-absolute top-5"
          onClick={(e) => {
            delFavorite(product_group);
          }}
        />
      ) : (
        <BiHeart
          size={21}
          color="#ff7f6a"
          className="position-absolute top-5"
          onClick={(e) => {
            favorite(product_group);
          }}
        />
      )}
      <Link to={`/products/${product_group}`}>
        {/* 商品列表的個別商品 */}
        <Figure className="mt-4 position-relative">
          <Figure.Image
            width={265}
            height={350}
            alt={`${image1}`}
            src={`${IMAGE_URL}/products/${image1}`}
          />
          {/* <BiHeart
          size={21}
          color="#ff7f6a"
          className="float-end position-absolute top-0 end-0"
        /> */}
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
            <p className="mb-0">{brandTypes[brand_id - 1]}</p>
          </Figure.Caption>
          <Figure.Caption className="d-flex justify-content-center">
            <p className="mb-2">{smallCatTypes[small_cat_id - 1]}</p>
          </Figure.Caption>
          <Figure.Caption className="d-flex justify-content-center">
            <p className="fw-bold">NT {price.toLocaleString()}</p>
          </Figure.Caption>
        </Figure>
      </Link>
    </>
  );
}

export default ProductItem;
