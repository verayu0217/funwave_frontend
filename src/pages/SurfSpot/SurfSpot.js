import React, { useState, useEffect } from 'react';
import { withRouter } from '../../utils/withRouter';
import Breadcrumb from '../../components/Breadcrumb';
import greenTitle from '../../data/images/greenTitle.svg';
import CircleLeft from './CircleLeft';
import Taiwanmap from './TaiwanMap';
import CircleRight from './CircleRight';

import './surfSpot.scss';

function SurfSpot(props) {
  // console.log(props);
  const [level, setLevel] = useState('');
  const [regional, setRegional] = useState('');
  return (
    <>
      <div className="taiwanMapBg">
        <div className="container">
          <Breadcrumb />
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
                onChange={() => {
                  setLevel('');
                  setRegional('');
                }}
              />
              <label htmlFor="all" className="allTitle">
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

export default withRouter(SurfSpot);
