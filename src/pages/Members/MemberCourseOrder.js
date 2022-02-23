import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import './Member.scss';
import titleImgMember from '../../data/images/greenwave64x24.png';

const MemberCourseOrder = () => {
  const [data, setData] = useState([]);

  // 為了處理網址
  let navigate = useNavigate();

  // 把網址上的 :id 拿出來
  // const { orderId } = useParams();

  useEffect(async () => {
    // http://localhost:3002/api/member
    let response = await axios.get(`${API_URL}/member/member-courseorder`);
    setData(response.data);
  }, []);
  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center px-5">
          <h2 className="mb-5 titleMember text-center">
            <span className="me-2">
              <img src={titleImgMember} className="titleImgMember" />
            </span>
            課程紀錄
          </h2>
          <div className="d-flex mt-3">
            <h3 className="fs-20Member">課程查詢</h3>
          </div>
          <div className="table-wrap mb-5">
            <table className="table table-control align-middle text-center my-3 tableMemberOrder">
              <thead>
                <tr>
                  <th className="fs-20Member text-nowrap">訂單號碼</th>
                  <th className="fs-20Member text-nowrap">訂單日期</th>
                  <th className="fs-20Member text-nowrap">合計</th>
                  {/* <th className="fs-20Member text-nowrap">訂單狀態</th> */}
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.map((course_order) => {
                  return (
                    <tr key={course_order.courseDate}>
                      <td>{course_order.id}</td>
                      <td>{course_order.courseDate}</td>
                      <td>{course_order.coursePrice}</td>
                      {/* <td
                        className={`prepareColorMember ${
                          course_order.status === '訂單已完成' ? 'black' : ''
                        }`}
                      >
                        {course_order.status}
                      </td> */}
                      <td className="text-nowrap">
                        <Link
                          to={`/member/member-courseorder/${course_order.id}`}
                          className="deepblue me-3"
                        >
                          <i className="fas fa-edit"></i>
                        </Link>
                        <Link to="/" className="deleteIconMember orange">
                          <i className="fas fa-trash-alt"></i>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <nav aria-label="pageMember">
            <ul className="d-flex justify-content-center mt-5">
              {/* {getPages()} */}
              {/* <li className="page-item">
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
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MemberCourseOrder;
