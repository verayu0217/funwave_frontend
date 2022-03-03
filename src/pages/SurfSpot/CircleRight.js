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
          type="checkbox"
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
          type="checkbox"
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
          type="checkbox"
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
          type="checkbox"
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
          type="checkbox"
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
    </div>
  );
}

export default CircleRight;
