import React from 'react';
import greenTitle from '../../../data/images/greenTitle.svg';
import { useState, useEffect } from 'react';

import '../CourseContent.scss';
import '../CourseCart.scss';

import Edit from './Edit';
import List from './List';

// 暫時先取localStorage的留言
let perMsg = JSON.parse(localStorage.getItem('totalMsg')) || [];

function CourseEvaluate({ totalMsg = perMsg }) {
  const [data, setData] = useState(totalMsg);
  console.log('CourseEvaluate test', data);
  useEffect(() => {
    //TODO:要取資料庫的評價留言
  }, []);

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

          <List listData={data} deleteData={setData} />
          <Edit add={setData} />

          {/* <!-- 分頁 (Pagination) --> */}
          <nav aria-label="...">
            <ul class="pagination justify-content-center mt-3">
              <li class="page-item active" aria-current="page">
                <span class="page-link">1</span>
              </li>
              <li class="page-item">
                <a class="page-link" href="#/">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#/">
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

export default CourseEvaluate;
