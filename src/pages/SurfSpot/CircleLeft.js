import React from 'react';
import './circleLeft.scss';

function CircleLeft(props) {
  const { level, setLevel } = props;

  return (
    <>
      <div className="leftCirclePos">
        <svg
          id="圖層_1"
          data-name="圖層 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 422.75 410.25"
          className="leftCircle svg"
        >
          <defs></defs>
          <circle className="cls-1 bgCircle" cx="200.12" cy="200.12" r="200" />
        </svg>
        <div className="level1Radio">
          <input
            className="input"
            type="checkbox"
            name="tag"
            id="level1"
            value="1"
            checked={level === '1'}
            onChange={(e) => {
              setLevel(e.target.value);
            }}
          />
          <label className="fw-bold label" htmlFor="level1">
            初階浪點
          </label>
        </div>
        <div className="level2Radio">
          <input
            className="input"
            type="checkbox"
            name="tag"
            id="level2"
            value="2"
            checked={level === '2'}
            onChange={(e) => {
              setLevel(e.target.value);
            }}
          />
          <label className="fw-bold label" htmlFor="level2">
            中階浪點
          </label>
        </div>
        <div className="level3Radio">
          <input
            className="input"
            type="checkbox"
            name="tag"
            id="level3"
            value="3"
            checked={level === '3'}
            onChange={(e) => {
              setLevel(e.target.value);
            }}
          />
          <label className="fw-bold label" htmlFor="level3">
            高階浪點
          </label>
        </div>
      </div>
    </>
  );
}

export default CircleLeft;
