import React from 'react';
import greenTitle from '../../../data/images/greenTitle.svg';
import { useState, useEffect, useRef } from 'react';
import { API_URL, IMAGE_URL } from '../../../utils/config';
import axios from 'axios';
import { useAuth } from '../../../context/auth';
import { useParams, useNavigate } from 'react-router-dom';

import '../CourseContent.scss';
import '../CourseCart.scss';

import Edit from './Edit';
import List from './List';

function CourseEvaluate() {
  const { auth, setAuth } = useAuth();

  const [data, setData] = useState([]);

  const [flag, setFlag] = useState(false);

  const [lastPage, setLastPage] = useState(1);
  let navigate = useNavigate();
  // App要給:current 的Route
  const { currentPage } = useParams();
  // /course/course-evaluate =>currentPage 是undefined
  // /course/course-evaluate/1=> currentPage 是1
  // page可能是字串===是判斷型別這裡就parseInt
  // page從變數改用狀態並且從三元運算改為或
  const [page, setPage] = useState(parseInt(currentPage, 10) || 1);
  // console.log('currentPage', currentPage);

  // useEffect(() => {
  //   let getEvaluate = async () => {
  //     // http://localhost:3002/api/course/course-evaluate
  //     let response = await axios.post(`${API_URL}/course/course-evaluate`);
  //     setData(response.data);
  //     // console.log(response.data[0].name);

  //   };
  //   getEvaluate();
  // }, []);

  let getEvaluate = async () => {
    // http://localhost:3002/api/course/course-evaluate
    let response = await axios.get(
      `${API_URL}/course/course-evaluate?page=${page}`
    );
    // 因為List裡面的map是陣列方法 分頁後變成物件要再.才能取得
    setData(response.data.evaluate);
    setLastPage(response.data.pagination.lastPage);
  };

  useEffect(() => {
    getEvaluate();
  }, [flag]);

  useEffect(() => {
    getEvaluate();
  }, [page]);

  // 分頁顯示數字用迴圈跑到最後一頁
  // page===分頁時就換樣式
  const getPages = () => {
    let pages = [];
    for (let i = 1; i <= lastPage; i++) {
      pages.push(
        <li key={i} className="page-item">
          <a
            className={
              page === i
                ? 'active bg-secondary text-white page-link'
                : 'page-link'
            }
            href="#/"
            onClick={(e) => {
              setPage(i);
              navigate({ i });
            }}
          >
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
              width="64px"
            />
            課程體驗評價
          </div>

          <List listData={data} setData={setData} auth={auth} />
          {/* 判斷是會員才顯示可評價否則隱藏 */}
          <div className={auth === null ? 'd-none' : ''}>
            <Edit auth={auth} add={setData} setFlag={setFlag} flag={flag} />
          </div>

          {/* <!-- 分頁 (Pagination) --> */}
          <nav aria-label="...">
            <ul className="pagination justify-content-center mt-3">
              {/* 加最前頁 */}
              <li className="page-item">
                <a
                  className="page-link"
                  href="#/"
                  onClick={(e) => {
                    setPage(1);
                    navigate(1);
                  }}
                  aria-label="Previous"
                >
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              {getPages()}
              {/* 加最後頁 */}
              <li className="page-item">
                <a
                  className="page-link"
                  href="#/"
                  onClick={(e) => {
                    setPage(lastPage);
                    navigate({ lastPage });
                  }}
                  aria-label="Next"
                >
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default CourseEvaluate;
