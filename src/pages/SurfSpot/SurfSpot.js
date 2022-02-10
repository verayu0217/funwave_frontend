import React from 'react';
// import { Link } from 'react-router-dom';
import './surfSpot.scss';

function SurfSpot() {
  return (
    <>
      <div className="container-fluid">
        <img src="" alt="底圖" />
        <div>麵包屑</div>
        <hr />
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <img src="" alt="波浪icon" />
            <div className="text-secondary fw-bold">
              FUN 浪點 · 即時浪點資訊
            </div>
          </div>
        </div>
        <div className="d-none d-md-block mt-5">
          <div className="d-flex justify-content-between">
            <div className="circleLeft"></div>
            <div className="circleRight"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SurfSpot;
