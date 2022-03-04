import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Row, Col, Nav, Collapse, Button, Table } from 'react-bootstrap';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { useFav } from '../../context/fav';

import titleImgMember from '../../data/images/greenwave64x24.png';
import '../Members/Member.scss';

function Collect() {
  const { fav, setFav } = useFav();
  const [collectProducts, setcollectProducts] = useState();

  useEffect(() => {
    let collectList = async () => {
      let response = await axios.get(`${API_URL}/collect`);
      setcollectProducts(response.data);
    };
    collectList();
  });
  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center px-5">
          <h2 className="mb-5 titleMember text-center">
            <span className="me-2">
              <img
                src={titleImgMember}
                className="titleImgMember"
                alt="greentitle"
              />
            </span>
            我的收藏
          </h2>
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
                <th className="text-nowrap text-end">刪除</th>
              </tr>
            </thead>
            <tbody>
              {fav.wishID.map((v, i) => {
                return (
                  <tr>
                    <td className="">
                      <img src="/" className="orderImgMember" />
                    </td>
                    <td>
                      <div className="d-flex align-items-center flex-column">
                        <p>EXTRA SHOT BY RACHAEL TILLY</p>
                      </div>
                    </td>
                    <td>
                      <p className=" m-0">NT$11,900</p>
                    </td>
                    <td className="">
                      <Link
                        to="/products/"
                        className="btn deepblueBtnMember mb-2 text-nowrap"
                      >
                        &ensp;商品詳細資料
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    </td>
                    <td className="text-end">
                      <a role="button" href="" className="deleteBtnMember">
                        <i className="far fa-trash-alt"></i>
                      </a>
                    </td>
                  </tr>
                );
              })}
              {/* 列表 */}
              <tr>
                <td className="">
                  <img src="/" className="orderImgMember" />
                </td>
                <td>
                  <div className="d-flex align-items-center flex-column">
                    <p>EXTRA SHOT BY RACHAEL TILLY</p>
                    <p className="gray">
                      CHECK STORE INVENTORY&ensp;
                      <i className="fas fa-arrow-right"></i>
                    </p>
                  </div>
                </td>
                <td>
                  <p className="text-decoration-line-through m-0">NT$11,900</p>
                  <p className="orange">NT$10,250</p>
                </td>
                <td className="">
                  <button className="btn deepblueBtnMember mb-2 text-nowrap">
                    &ensp;加入購物車
                  </button>
                  <br />
                  <button className="btn blueBtnMember text-nowrap">
                    <i className="fas fa-cart-plus"></i>&ensp;立即購買
                  </button>
                </td>
                <td className="text-end">
                  <a role="button" href="" className="deleteBtnMember">
                    <i className="far fa-trash-alt"></i>
                  </a>
                </td>
              </tr>
              {/* 列表結束 */}
            </tbody>
          </Table>
          <nav aria-label="pageMember">
            <ul className="d-flex justify-content-center mt-5">
              <li className="page-item">
                <a className="page-link pageLinkMember" href="/">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link pageLinkMember" href="/">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link pageLinkMember" href="/">
                  3
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Collect;
