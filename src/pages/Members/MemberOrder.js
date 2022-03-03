import React, { useState, useEffect } from 'react';
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
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import './Member.scss';
import { useAuth } from '../../context/auth';
import titleImgMember from '../../data/images/greenwave64x24.png';
import Swal from 'sweetalert2';

const MemberOrder = () => {
  const [data, setData] = useState([]);
  const { auth, setAuth } = useAuth();
  const [pages, setPages] = useState([]);
  // 為了處理網址
  let navigate = useNavigate();

  async function handleDelete(order_id) {
    const { isConfirmed } = await Swal.fire({
      title: '您確定要刪除訂單紀錄嗎?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ff7f6a',
      cancelButtonColor: '#17a8a2',
      cancelButtonText: '取消',
      confirmButtonText: '確定',
    });
    if (!isConfirmed) {
      return;
    }
    let response = await axios.post(
      `${API_URL}/member/member-order/${order_id}/delete`
    );
    console.log(response.data);
    if (response.data.isDeleted) {
      setData(data.filter((order) => order.id !== order_id));
    }
    // console.log(response.data);
    // if (response.data.isDeleted) {
    //   const updatedOrders = data.map((order) => {
    //     return Object.assign(order, {
    //       status: '訂單已取消',
    //       valid: 2,
    //     });
    //   });
    //   setData(updatedOrders);
    // }
  }

  async function getMemberCourseOrderList(page = 1) {
    let response = await axios.get(
      `${API_URL}/member/member-order/${auth.member_id}?page=${page}`
    );

    let orders = [];
    response.data.data.forEach(function (orderData) {
      orders.push(orderData);
    });

    setData([]);
    setData(orders);
    setPages(response.data.pagination.pages);
  }

  function changePage(page) {
    getMemberCourseOrderList(page);
  }

  useEffect(() => {
    async function getMemberOrderList() {
      let response = await axios.get(
        `${API_URL}/member/member-order/${auth.member_id}`
      );

      let orders = [];
      response.data.forEach(function (orderData) {
        orders.push(orderData);
      });

      setData(orders);
    }

    getMemberOrderList();
  }, []);
  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center px-5">
          <h2 className="mb-5 titleMember text-center">
            <span className="me-2">
              <img src={titleImgMember} className="titleImgMember" />
            </span>
            訂單紀錄
          </h2>
          <div className="d-flex mt-3">
            <h3 className="fs-20Member">訂單查詢</h3>
          </div>
          <div className="">
            {/* <table
              responsive="sm"
              className="table table-control align-middle text-center my-3 tableMemberOrder"
            > */}
            <Table
              responsive="sm"
              hover
              className="table table-control align-middle text-center tableMemberOrderDetails"
            >
              <thead>
                <tr>
                  <th className="fs-20Member text-nowrap">訂單號碼</th>
                  <th
                    className="fs-20Member text-nowrap"
                    style={{ minWidth: '120px' }}
                  >
                    訂單日期
                  </th>
                  <th className="fs-20Member text-nowrap">合計</th>
                  <th className="fs-20Member text-nowrap">訂單狀態</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.map((order_list) => {
                  return (
                    <tr key={order_list.order_time}>
                      <td>{order_list.id}</td>
                      <td>{order_list.order_time}</td>
                      <td>{order_list.amount}</td>
                      <td
                        className={`prepareColorMember ${
                          order_list.status === '訂單已完成' ? 'black' : ''
                        }`}
                      >
                        {order_list.status}
                      </td>
                      <td className="text-nowrap">
                        <Link
                          to={`/member/member-order/${order_list.id}`}
                          className="deepblue me-3"
                        >
                          <i className="fas fa-external-link-alt"></i>
                        </Link>
                        <span
                          className="deleteIconMember orange"
                          onClick={() => {
                            handleDelete(order_list.id);
                          }}
                          // onClick={() => {
                          //   if (order_list.valid !== 2) {
                          //     handleDelete(order_list.id);
                          //   }
                          // }}
                        >
                          <i className="fas fa-trash-alt"></i>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              {/* </table> */}
            </Table>
          </div>
          <nav aria-label="pageMember">
            <ul className="d-flex justify-content-center mt-5">
              {Array.from(Array(pages).keys()).map((p) => {
                return (
                  <li className="page-item">
                    <a
                      className="page-link pageLinkMember"
                      onClick={() => changePage(p + 1)}
                    >
                      {p + 1}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MemberOrder;
