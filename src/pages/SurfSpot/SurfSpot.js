import React, { useState, useEffect } from 'react';
import greenTitle from '../../data/images/greenTitle.svg';
import CircleLeft from './CircleLeft';
import Taiwanmap from './TaiwanMap';
import CircleRight from './CircleRight';

import './surfSpot.scss';

function SurfSpot() {
  const [level, setLevel] = useState('');
  const [regional, setRegional] = useState('');
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
              <input
                className="input"
                type="checkbox"
                name="tags"
                id="all"
                value="0"
                onClick={() => {
                  setLevel('0');
                  setRegional('0');
                }}
              />

              <label className="allTitle">
                <i value="0" className="fasAll fas fa-map-marker pe-2"></i>
                全部浪點
              </label>
            </div>
          </div>
        </div>
        <div className="mt-5 mb-5">
          <div className="d-flex justify-content-center">
            <CircleLeft level={level} setLevel={setLevel} />
            <CircleRight regional={regional} setRegional={setRegional} />
            <Taiwanmap level={level} regional={regional} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SurfSpot;
