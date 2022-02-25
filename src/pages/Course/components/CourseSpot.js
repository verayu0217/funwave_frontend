import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import greenTitle from '../../../data/images/greenTitle.svg';
import { API_URL, IMAGE_URL } from '../../../utils/config';

import '../Courses.scss';

function CourseSpot() {
  const [error, setError] = useState(null);
  const [north, setNorthSpot] = useState([]);
  const [others, setOtherSpot] = useState([]);

  // 取得資料庫北部上課地點
  useEffect(() => {
    let getNorthSpot = async () => {
      // http://localhost:3002/api/course/courseSpot/north
      let response = await axios.get(`${API_URL}/course/courseSpot/north`);
      setNorthSpot(response.data);
      // console.log(response.data);
    };
    getNorthSpot();
  }, []);

  // 取得資料庫除了北部以外上課地點

  useEffect(() => {
    let getOtherSpot = async () => {
      // http://localhost:3002/api/course/courseSpot/others
      let response = await axios.get(`${API_URL}/course/courseSpot/others`);
      setOtherSpot(response.data);
    };
    getOtherSpot();
  }, []);

  return (
    <>
      {error && <div>{error}</div>}

      {/* 課程地點介紹區 */}
      <div className="container">
        <div className="text-secondary  h1 text-center mb-5">
          <img
            src={greenTitle}
            className="greenTitle me-3"
            alt="greenTitle"
            height="24px"
            weight="64px"
          />
          優美的課程地點一覽
        </div>

        <div className="row">
          {/* 北部/東北部  */}
          <p className="text-center h2 mb-3">北部/東北部</p>
          {north.map((spot) => {
            return (
              <div key={spot.id} className="col-md-6 col-lg-3 ">
                <div className="spot-img shadow-sm mt-3">
                  <img
                    src={`${IMAGE_URL}/course/${spot.image}`}
                    className="w-100 rounded"
                    alt="..."
                  />
                  <p className="card-text text-center pt-2 h3">{spot.name}</p>
                  <p className="card-text text-center pb-2">{spot.location}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 東部/西部/南部  */}
        <div className="row">
          <p className="text-center h2 mt-5 mb-3">東部/西部/南部</p>
          {others.map((spot) => {
            return (
              <div key={spot.id} className="col-md-6 col-lg-3 ">
                <div className="spot-img shadow-sm mt-3">
                  <img
                    src={`${IMAGE_URL}/course/${spot.image}`}
                    className="w-100 rounded"
                    alt="..."
                  />
                  <p className="card-text text-center pt-2 h3">{spot.name}</p>
                  <p className="card-text text-center pb-2">{spot.location}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CourseSpot;
