import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  Tab,
  Row,
  Col,
  Nav,
  Collapse,
  Button,
  Table,
  Accordion,
} from 'react-bootstrap';
import axios from 'axios';
import './Member.scss';
import { API_URL } from '../../utils/config';
import { useAuth } from '../../context/auth';
import titleImgMember from '../../data/images/greenwave64x24.png';

const MemberPoint = () => {
  const { auth, setAuth } = useAuth();
  const [totalPoints, setTotalPoints] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [pages, setPages] = useState([]);

  // 為了處理網址
  let navigate = useNavigate();

  async function getMemberOrderList(page = 1) {
    let response = await axios.get(
      `${API_URL}/member/member-order/${auth.member_id}?page=${page}`
    );

    let orders = [];
    // response.data.data.forEach(function (orderData) {
    //   orders.push(orderData);
    // });

    response.data.data.forEach(function (orderData, i) {
      orders.push(orderData);
      if (page === 1 && i === 0) {
        setTotalPoints(orderData.cumulative_sum);
      }
    });
    console.log(orders);
    // reverse for display

    setData([]);
    setData(orders);
    setPages(response.data.pagination.pages);
  }

  function changePage(page) {
    setCurrentPage(page);
    getMemberOrderList(page);
  }

  useEffect(() => {
    getMemberOrderList();
  }, []);
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row cardWrapMember d-flex justify-content-center">
          <div className="col-lg-12 col-md-12 col-12 cardContentMember">
            <h2 className="mb-5 titleMember text-center">
              <span className="me-2">
                <img src={titleImgMember} className="titleImgMember" />
              </span>
              會員點數
            </h2>
            <div className="col-12 card cardMember mt-5 mb-3 p-4">
              <div className="row g-0">
                <div className="col-5 d-flex justify-content-center align-items-cente cardLefWrapMember">
                  <div className="d-flex align-items-center cardLeftMember">
                    <div className="d-flex justify-content-center align-items-center bellWrapMember">
                      <i className="fas fa-bell fasMember bellIconMember"></i>
                      <i className="fal fa-usd-circle"></i>
                    </div>
                    {data.map((order_list, i) => {
                      // only last order
                      if (i === 0) {
                        return (
                          <div className="d-flex justify-content-center align-items-center flex-column cardLeftContentMember">
                            <p className="card-text fs-20Member">現有總點數</p>
                            <h3 className="fs-45Member">
                              {totalPoints}
                              <span className="fs-20Member">點</span>
                            </h3>
                            <p className="card-text m-0 fs-20Member">
                              等值&nbsp;NT$
                              {totalPoints}
                            </p>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
                <div className="col-1 lineWrapMember">
                  <div className="lineMember"></div>
                </div>
                <div className="col-lg-6 col-6 d-flex align-items-center cardRightContentMember">
                  <div className="d-flex justify-content-start align-items-center flex-column textBoxMember">
                    <p className="card-text fs-16Member">
                      消費&nbsp;NT$200&nbsp;可累計&nbsp;1&nbsp;點
                      <br />
                      1&nbsp;點可折抵&nbsp;NT$1。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-12 d-flex mt-4">
            <h3 className="fs-20Member p-0">點數紀錄</h3>
          </div>
          <div className="col-lg-12 col-12 table-wrap  mb-3 p-0 table-responsive">
            <Table className="table table-control align-middle text-center my-3 tableMemberOrder tableMemberPoint">
              <thead>
                <tr>
                  <th className="fs-20Member" style={{ minWidth: '120px' }}>
                    日期
                  </th>
                  <th className="fs-20Member text-nowrap">點數更動原因</th>
                  <th className="fs-20Member text-nowrap">獲得點數</th>
                  <th className="fs-20Member text-nowrap">現有總點數</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  return (
                    <tr key={item.order_time}>
                      <td className="">{item.order_time}</td>
                      <td className="text-nowrap">消費NT${item.amount}</td>
                      <td className="text-nowrap">
                        {(item.amount / 200).toFixed()}
                      </td>
                      <td className="text-nowrap">{item.cumulative_sum}</td>
                    </tr>
                  );
                })}
                {/* <tr>
                  <td className="text-nowrap">2022-01-31</td>
                  <td className="text-nowrap">消費NT$7200</td>
                  <td className="text-nowrap">36</td>
                  <td className="text-nowrap">2022/12/31</td>
                  <td className="text-nowrap">57</td>
                </tr>
                <tr>
                  <td className="text-nowrap">2022-01-31</td>
                  <td className="text-nowrap">消費NT$7200</td>
                  <td className="text-nowrap">36</td>
                  <td className="text-nowrap orange">
                    2022/12/31<span className="orange">(已過期)</span>
                  </td>
                  <td className="text-nowrap orange">57</td>
                </tr> */}
              </tbody>
            </Table>
          </div>
          <nav aria-label="pageMember">
            <ul className="d-flex justify-content-center mt-5">
              <li class="page-item">
                <a
                  class="page-link"
                  onClick={() => changePage(1)}
                  href="#/"
                  aria-label="Next"
                >
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              {Array.from(Array(pages).keys()).map((p) => {
                return (
                  <li className="page-item">
                    <a
                      className={
                        currentPage === p + 1
                          ? 'active page-link pageLinkMember'
                          : 'page-link pageLinkMember'
                      }
                      onClick={() => changePage(p + 1)}
                      href="#/"
                    >
                      {p + 1}
                    </a>
                  </li>
                );
              })}
              <li class="page-item">
                <a
                  class="page-link"
                  href="#/"
                  aria-label="Next"
                  onClick={() => changePage(pages)}
                >
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MemberPoint;
