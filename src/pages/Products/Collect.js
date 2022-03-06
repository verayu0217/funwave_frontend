import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, Figure } from 'react-bootstrap';
import axios from 'axios';
import { API_URL, IMAGE_URL } from '../../utils/config';
import { useFav } from '../../context/fav';

import titleImgMember from '../../data/images/greenwave64x24.png';
import '../Members/Member.scss';
import './Collect.scss';
function Collect() {
  const { fav, setFav } = useFav();
  const [collectProducts, setCollectProducts] = useState([]);

  const delFavorite = (item) => {
    // console.log('b', fav.wishID);
    let filterwish = fav.wishID.filter((value) => value !== item);
    setFav({ ...fav, wishID: filterwish });
    // console.log('bb', filterwish);
    localStorage.removeItem('likeID');
    localStorage.setItem('likeID', JSON.stringify(filterwish));
  };

  useEffect(() => {
    let collectList = async () => {
      let response = await axios.get(
        `${API_URL}/collect?collectdata=${fav.wishID}`
      );
      setCollectProducts(response.data);
    };
    collectList();
  }, [fav]);
  // console.log(collectProducts);
  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center px-5">
          <h1 className="mb-5 titleMember text-center">
            <span className="me-2">
              <img
                src={titleImgMember}
                className="titleImgMember"
                alt="greentitle"
              />
            </span>
            我的收藏
          </h1>
          <Table
            responsive="sm"
            hover
            className="table table-control align-middle text-center tableMemberOrderDetails"
          >
            <thead>
              <tr>
                <th className="text-nowrap">商品圖</th>
                <th className="text-nowrap">商品資訊</th>
                <th className="text-nowrap">價格</th>
                <th className="text-nowrap">詳細資訊</th>
                <th className="text-nowrap">刪除</th>
              </tr>
            </thead>
            <tbody>
              {collectProducts.map((v, i) => {
                return (
                  <tr key={v.product_id}>
                    <td>
                      <Figure.Image
                        width={150}
                        height={150}
                        src={`${IMAGE_URL}/products/${v.image1}`}
                        className="orderImgMember"
                        alt="商品圖"
                      />
                    </td>
                    <td>
                      <div className="d-flex align-items-center flex-column">
                        <p className="fw-bold">{v.name}</p>
                        <p>{v.product_group}</p>
                      </div>
                    </td>
                    <td>
                      <p className=" m-0">NT {v.price.toLocaleString()}</p>
                    </td>
                    <td>
                      <Link
                        to={`/products/${v.product_group}`}
                        className="btnDelFav deepblueBtnMember text-nowrap"
                      >
                        &ensp;商品詳細資料 &ensp;
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    </td>
                    <td>
                      <a
                        role="button"
                        className="deleteBtnMember"
                        onClick={() => {
                          delFavorite(`${v.product_group}`);
                        }}
                      >
                        <i className="far fa-trash-alt"></i>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Collect;
