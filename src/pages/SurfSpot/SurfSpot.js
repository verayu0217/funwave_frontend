import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import greenTitle from '../../data/images/greenTitle.svg';
import CircleLeft from './CircleLeft';
import Taiwanmap from './TaiwanMap';
import CircleRight from './CircleRight';
// import { data } from '../../data/surfspot';

import './surfSpot.scss';

function SurfSpot() {
  // const [surfspots, setSurfspots] = useState([]);
  // const [displaySurfspots, setDisplaySurfspots] = useState([]);

  // const [tags, setTags] = useState([]);
  // const tagTypes = [
  //   '初階',
  //   '中階',
  //   '高階',
  //   '東部',
  //   '東北部',
  //   '北部',
  //   '西部',
  //   '南部',
  // ];
  // useEffect(() => {
  //   setSurfspots(data);
  //   setDisplaySurfspots(data);
  // }, []);

  // const handleTags = (surfspots, tags) => {
  //   let newSurfspots = [...surfspots];

  //   if (tags.length > 0) {
  //     newSurfspots = [...newSurfspots].filter((surfspot) => {
  //       let isFound = false;
  //       const surfspotTags = surfspot.tags.split(',');

  //       for (let i = 0; i < tags.length; i++) {
  //         if (surfspotTags.includes(tags[i])) {
  //           isFound = true;
  //           break;
  //         }
  //       }
  //       return isFound;
  //     });
  //   }
  //   return newSurfspots;
  // };

  // useEffect(() => {
  //   let newSurfspots = [];
  //   newSurfspots = handleTags(newSurfspots, tags);
  //   setDisplaySurfspots(newSurfspots);
  // }, [tags]);

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
                <i className="fasAll fas fa-map-marker pe-2"></i>
                全部浪點
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-5 mb-5">
          <div className="d-flex justify-content-center">
            {/* tagTypes={tagTypes} tags={tags} setTags={setTags} */}
            <CircleLeft />
            <CircleRight />
            {/* {displaySurfspots.length > 0 && */}
            <Taiwanmap />
            {/*  surfspots={displaySurfspots}  */}
          </div>
        </div>
      </div>
    </>
  );
}

export default SurfSpot;
