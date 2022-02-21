import React from 'react';
import './circleRight.scss';

function CircleRight(props) {
  const { regional, setRegional } = props;
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
      </svg>
      <div className="regionalERadio">
        <input
          className="input"
          type="radio"
          name="tag"
          id="regionalE"
          value="E"
          checked={regional === 'E'}
          onChange={(e) => {
            setRegional(e.target.value);
          }}
        />
        <label className="fw-bold labelR" htmlFor="regionalE">
          東部
        </label>
      </div>
      <div className="regionalENRadio">
        <input
          className="input"
          type="radio"
          name="tag"
          id="regionalEN"
          value="EN"
          checked={regional === 'EN'}
          onChange={(e) => {
            setRegional(e.target.value);
          }}
        />
        <label className="fw-bold labelR" htmlFor="regionalEN">
          東北部
        </label>
      </div>
      <div className="regionalNRadio">
        <input
          className="input"
          type="radio"
          name="tag"
          id="regionalN"
          value="N"
          checked={regional === 'N'}
          onChange={(e) => {
            setRegional(e.target.value);
          }}
        />
        <label className="fw-bold labelR" htmlFor="regionalN">
          北部
        </label>
      </div>
      <div className="regionalWRadio">
        <input
          className="input"
          type="radio"
          name="tag"
          id="regionalW"
          value="W"
          checked={regional === 'W'}
          onChange={(e) => {
            setRegional(e.target.value);
          }}
        />
        <label className="fw-bold labelR" htmlFor="regionalW">
          西部
        </label>
      </div>
      <div className="regionalSRadio">
        <input
          className="input"
          type="radio"
          name="tag"
          id="regionalS"
          value="S"
          checked={regional === 'S'}
          onChange={(e) => {
            setRegional(e.target.value);
          }}
        />
        <label className="fw-bold labelR" htmlFor="regionalS">
          南部
        </label>
      </div>
      {/* <circle className="cls-1 smCircle" cx="12.63" cy="237.63" r="12.5" />
        <circle className="cls-1 smCircle" cx="141.09" cy="26.64" r="12.5" />
        <circle className="cls-1 smCircle" cx="53.68" cy="105.34" r="12.5" />
        <circle className="cls-1 smCircle" cx="53.68" cy="369.91" r="12.5" />
        <circle className="cls-1 smCircle" cx="141.09" cy="448.79" r="12.5" /> */}

      {/* <span className="cls-2 fw-bold EText text-nowrap">東部</span>
      <span className="cls-2 fw-bold ENText text-nowrap">東北部</span>
      <span className="cls-2 fw-bold NText text-nowrap">北部</span>
      <span className="cls-2 fw-bold WText text-nowrap">西部</span>
      <span className="cls-2 fw-bold SText text-nowrap">南部</span> */}
    </div>
  );
}

export default CircleRight;
