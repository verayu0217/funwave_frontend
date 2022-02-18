import React from 'react';
import './circleRight.scss';

function CircleRight() {
  return (
    <div className="rightCirclePos">
      <svg
        id="圖層_1"
        data-name="圖層 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-10 0 487.75 475.25"
        className="rightCircle svg"
      >
        <defs></defs>
        <circle className="cls-1 bgCircle" cx="250.13" cy="237.63" r="237.5" />
        <circle className="cls-1 smCircle" cx="12.63" cy="237.63" r="12.5" />
        <circle className="cls-1 smCircle" cx="141.09" cy="26.64" r="12.5" />
        <circle className="cls-1 smCircle" cx="53.68" cy="105.34" r="12.5" />
        <circle className="cls-1 smCircle" cx="53.68" cy="369.91" r="12.5" />
        <circle className="cls-1 smCircle" cx="141.09" cy="448.79" r="12.5" />
      </svg>
      <span className="cls-2 fw-bold EText text-nowrap">東部</span>
      <span className="cls-2 fw-bold ENText text-nowrap">東北部</span>
      <span className="cls-2 fw-bold NText text-nowrap">北部</span>
      <span className="cls-2 fw-bold WText text-nowrap">西部</span>
      <span className="cls-2 fw-bold SText text-nowrap">南部</span>
    </div>
  );
}

export default CircleRight;
