import React from 'react';
import './circleLeft.scss';

function CircleLeft() {
  return (
    <div className="leftCirclePos">
      <svg
        id="圖層_1"
        data-name="圖層 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 422.75 410.25"
        className="leftCircle"
      >
        <defs></defs>
        <circle className="cls-1 bgCircle" cx="200.12" cy="200.12" r="200" />
        <circle className="cls-1 smCircle" cx="333.77" cy="51.34" r="12.5" />
        <circle className="cls-1 smCircle" cx="400.12" cy="200.02" r="12.5" />
        <circle className="cls-1 smCircle" cx="333.77" cy="348.91" r="12.5" />
      </svg>
      <text className="cls-2 h5 fw-bold bsText text-nowrap">初階浪點</text>
      <text className="cls-2 h5 fw-bold mdText text-nowrap">中階浪點</text>
      <text className="cls-2 h5 fw-bold hgText text-nowrap">高階浪點</text>
    </div>
  );
}

export default CircleLeft;
