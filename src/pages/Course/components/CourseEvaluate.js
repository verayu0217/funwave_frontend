import React from 'react';
import greenTitle from '../../../data/images/greenTitle.svg';
import { useState, useEffect, useRef } from 'react';
import { API_URL, IMAGE_URL } from '../../../utils/config';
import axios from 'axios';

import '../CourseContent.scss';
import '../CourseCart.scss';

import Edit from './Edit';
import List from './List';

function CourseEvaluate() {
  const [data, setData] = useState([]);
  const submitState = useRef(false);

  //TODO:取資料庫評價 ,怎麼把評完的內容帶出來
  useEffect(() => {
    let getEvaluate = async () => {
      // http://localhost:3002/api/還沒取
      let response = await axios.get(`${API_URL}/course/course-evaluate`);
      setData(response.data);
      console.log('這是取到的資料', response.data[0].message);
    };
    getEvaluate();
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

          <List listData={data} deleteData={setData} setData={setData} />
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
