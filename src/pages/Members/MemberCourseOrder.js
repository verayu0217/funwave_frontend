import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import './Member.scss';
import { useAuth } from '../../context/auth';
import titleImgMember from '../../data/images/greenwave64x24.png';

const MemberCourseOrder = () => {
  const [data, setData] = useState([]);
  const { auth, setAuth } = useAuth();
  // 為了處理網址
  let navigate = useNavigate();

  async function handleDelete(id) {
    let response = await axios.post(
      `${API_URL}/member/member-courseorder/${id}/delete`
    );
    console.log(response.data);
    if (response.data.isDeleted) {
      setData(data.filter((course) => course.id !== id));
    }
  }

  useEffect(() => {
    async function getMemberCourseOrderList() {
      let response = await axios.get(
        `${API_URL}/member/member-courseorder/${auth.member_id}`
      );

      let courses = [];
      response.data.forEach(function (courseData) {
        courses.push(courseData);
      });

      setData(courses);
    }

    getMemberCourseOrderList();
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
                      <td>{course_order.amount}</td>
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
                        <span
                          className="deleteIconMember orange"
                          onClick={() => {
                            handleDelete(course_order.id);
                          }}
                        >
                          <i className="fas fa-trash-alt"></i>
                        </span>
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
