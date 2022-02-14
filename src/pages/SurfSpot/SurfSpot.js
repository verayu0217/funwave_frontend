import React from 'react';
import { Link } from 'react-router-dom';
import greenTitle from '../../data/images/greenTitle.svg';
import CircleLeft from './CircleLeft';
import Taiwanmap from './TaiwanMap';
import CircleRight from './CircleRight';

import SurfSpotDetails from './SurfSpotDetails';
import './surfSpot.scss';

function SurfSpot() {
  return (
    <>
      <div className="taiwanMapBg">
        <div className="container">
          <div className="wrapBread">麵包屑</div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="text-center mt-3">
            <img src={greenTitle} className="greenTitle" alt="greenTitle" />
            <div className="text-secondary fw-bold mt-3 h1">
              FUN 浪點 · 即時浪點資訊
            </div>
            <div className="mt-4 me-5 pe-5">
              <Link to="" className="allTitle">
                <i className="fasAll fas fa-map-marker pe-2"></i>全部浪點
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-5 mb-5">
          <div className="d-flex justify-content-center">
            <CircleLeft />
            <Taiwanmap />
            <CircleRight />
          </div>
        </div>
      </div>
      <SurfSpotDetails />
    </>
  );
}

export default SurfSpot;
