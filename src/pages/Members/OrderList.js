import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import './Member.scss';
import MemberOrder from './MemberOrder';

const OrderList = ({ list, orderlist, setOrderlist }) => {
  const [data, setData] = useState([]);

  const deleteHandler = () => {
    setOrderlist(orderlist.filter((l) => l !== list));
  };

  useEffect(async () => {
    // http://localhost:3002/api/member
    let response = await axios.get(`${API_URL}/member/member-order`);
    setOrderlist(response.data);
  }, []);
  return (
    <>
      {orderlist.map((orderlist) => (
        <tr className="list" key={orderlist.order_time} list={list}>
          <td>{orderlist.id}</td>
          <td>{orderlist.order_time}</td>
          <td>{orderlist.amount}</td>
          <td
            className={`prepareColorMember ${
              orderlist.status === '訂單已完成' ? 'black' : ''
            }`}
          >
            {orderlist.status}
          </td>
          <td className="text-nowrap">
            <Link
              to={`/member/member-order/${orderlist.id}`}
              className="deepblue me-3"
            >
              <i className="fas fa-edit"></i>
            </Link>
            <button onClick={deleteHandler} className="deleteIconMember orange">
              <i className="fas fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default OrderList;
