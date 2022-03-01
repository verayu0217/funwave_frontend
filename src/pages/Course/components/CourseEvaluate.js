import React from 'react';
import greenTitle from '../../../data/images/greenTitle.svg';
import { useState, useEffect, useRef } from 'react';
import { API_URL, IMAGE_URL } from '../../../utils/config';
import axios from 'axios';
import { useAuth } from '../../../context/auth';

import '../CourseContent.scss';
import '../CourseCart.scss';

import Edit from './Edit';
import List from './List';

function CourseEvaluate() {
  const { auth, setAuth } = useAuth();

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    let getEvaluate = async () => {
      // http://localhost:3002/api/course/course-evaluate
      let response = await axios.post(`${API_URL}/course/course-evaluate`);
      setData(response.data);
      // console.log(response.data[0].name);
      // setLastPage(response.data.pagination.lastPage);
    };
    getEvaluate();
  }, []);

  //TODO:取資料庫評價與圖片 有分頁後端先改用get
  // useEffect(() => {
  //   let getEvaluate = async () => {
  //     // http://localhost:3002/api/course/course-evaluate
  //     let response = await axios.get(
  //       `${API_URL}/course/course-evaluate?page=1`
  //     );
  //     setData(response.data.evaluate);
  //     // console.log(response.data[0].name);
  //     // setLastPage(response.data.pagination.lastPage);
  //   };
  //   getEvaluate();
  // }, []);

  const getPages = () => {
    let pages = [];
    for (let i = 1; i <= 5; i++) {
      pages.push(
        <li key={i} className="page-item">
          <a className="page-link" href="#/">
            {i}
          </a>
        </li>
      );
    }
    return pages;
  };

  return (
    <>
      {/* 課程體驗評價  */}
      <div className="row ">
        <div className="col-sm-12 col-md-8 col-lg-9 m-auto">
          <div className="text-secondary my-5 h1 text-center ">
            <img
              src={greenTitle}
              className="greenTitle me-3"
              alt="greenTitle"
              height="24px"
              weight="64px"
            />
            課程體驗評價
          </div>

          <List listData={data} setData={setData} />
          {/* 判斷是會員才顯示可評價否則隱藏 */}
          <div className={auth === null ? 'd-none' : ''}>
            <Edit auth={auth} add={setData} />
          </div>

          {/* TODO:寫分頁 */}
          {/* <!-- 分頁 (Pagination) --> */}
          <nav aria-label="...">
            <ul className="pagination justify-content-center mt-3">
              {getPages()}
              {/* <li className="page-item active" aria-current="page">
                <span className="page-link">1</span>
              </li>
              <li className="page-item">
                <a className="page-link" href="#/">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#/">
                  3
                </a>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default CourseEvaluate;
