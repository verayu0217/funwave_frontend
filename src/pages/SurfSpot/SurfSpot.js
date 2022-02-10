import React from 'react';
// import { Link } from 'react-router-dom';
import './surfSpot.scss';

function SurfSpot() {
  return (
    <>
      <div className="container-fluid taiwanMap">
        <img src="" alt="底圖" />
        <div className="container">
          <div className="wrapBread">麵包屑</div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="text-center mt-3">
            <img src="" alt="波浪icon" />
            <div className="text-secondary fw-bold mt-3 h1">
              FUN 浪點 · 即時浪點資訊
            </div>
          </div>
        </div>
        <div className="d-none d-md-block mt-5">
          <div className="d-flex justify-content-between">
            <div className="circleLeft">
              <div className="leftSpot1"></div>
            </div>
            <img src="" alt="台灣地圖" />
            <div className="circleRight"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SurfSpot;
