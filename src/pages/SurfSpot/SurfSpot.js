import React from 'react';
// import { Link } from 'react-router-dom';
import Taiwanmap from './TaiwanMap';
import vector from '../../data/images/surfSpot/Vector.png';
// import taiwanmap from '../../data/images/surfSpot/taiwanMap3.png';
import './surfSpot.scss';

function SurfSpot() {
  return (
    <>
      <div className="container-fluid taiwanMap">
        <div className="container">
          <div className="wrapBread">麵包屑</div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="text-center mt-3">
            <img src={vector} alt="波浪icon" />
            <div className="text-secondary fw-bold mt-3 h1">
              FUN 浪點 · 即時浪點資訊
            </div>
          </div>
        </div>

        <div className="d-none d-md-block mt-5 mb-5">
          <div className="d-flex justify-content-between">
            <div className="circleLeft">
              <div className="leftSpot1"></div>
              <span className="basicSpot h5 fw-bold">初階浪點</span>
              <div className="leftSpot2"></div>
              <span className="mediumSpot h5 fw-bold">中階浪點</span>
              <div className="leftSpot3"></div>
              <span className="highSpot h5 fw-bold">高階浪點</span>
            </div>
            <div>
              <Taiwanmap />
            </div>
            <div className="circleRight">
              <div className="rightSpot1"></div>
              <span className="eastSpot h5 fw-bold">東部</span>
              <div className="rightSpot2"></div>
              <span className="eastnorthSpot h5 fw-bold">東北部</span>
              <div className="rightSpot3"></div>
              <span className="northSpot h5 fw-bold">北部</span>
              <div className="rightSpot4"></div>
              <span className="middleSpot h5 fw-bold">中部</span>
              <div className="rightSpot5"></div>
              <span className="southSpot h5 fw-bold">南部</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SurfSpot;
