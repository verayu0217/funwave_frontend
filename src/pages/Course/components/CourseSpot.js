import React from 'react';
import { useState, useEffect } from 'react';

import greenTitle from '../../../data/images/greenTitle.svg';

import '../Courses.scss';

function CourseSpot() {
  //先用假資料 先不從後端取
  const [courseSpots, setCourseSpot] = useState([
    {
      id: 1,
      name: '金沙',
      image: 'https://picsum.photos/id/237/275/150',
    },
    {
      id: 2,
      name: '福隆海水浴場',
      image: 'https://picsum.photos/id/237/275/150',
    },
    {
      id: 3,
      name: '頭城',
      image: 'https://picsum.photos/id/237/275/150',
    },
    {
      id: 4,
      name: '白沙灣',
      image: 'https://picsum.photos/id/237/275/150',
    },
  ]);

  // useEffect(() => {
  //   let getCourseSpot = async () => {
  //     // http://localhost:3002/api/還沒取
  //     let response = await axios.get(`${API_URL}/還沒取`);
  //     setCourseSpot(response.data);
  //   };
  //   getCourseSpot();
  // }, []);

  return (
    <>
      {/* 課程地點介紹區 */}
      <div className="container my-5">
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

          {courseSpots.map((spot) => {
            return (
              <div key={spot.id} className="col-md-6 col-lg-3 ">
                <div className="spot-img shadow-sm">
                  <img src={spot.image} className="w-100 rounded" alt="..." />
                  <p className="card-text text-center p-2">{spot.name}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 東部/西部/南部  */}
        <div className="row">
          <p className="text-center h2 mt-5 mb-3">東部/西部/南部</p>

          {courseSpots.map((spot) => {
            return (
              <div key={spot.id} className="col-md-6 col-lg-3 ">
                <div className="spot-img shadow-sm">
                  <img src={spot.image} className="w-100 rounded" alt="..." />
                  <p className="card-text text-center p-2">{spot.name}</p>
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
