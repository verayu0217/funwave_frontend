import React, { useState } from 'react';
import './circleLeft.scss';

function CircleLeft(props) {
  const { level, setLevel } = props;
  // const [tags, setTags] = useState([]);
  // const tagTypes = ['初階', '中階', '高階'];

  // const handleFilter = (e) => {
  //   const value = e.target.value;
  //   if (!tags.includes(tagTypes)) return setTags([...tags, value]);
  //   if (tags.includes(tagTypes)) {
  //     const newTags = tags.filter((v) => v !== value);
  //     setTags(newTags);
  //   }
  // };

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
            type="radio"
            name="tag"
            id="level1"
            value="1"
            checked={level === '1'}
            onClick={(e) => {
              setLevel(e.target.value);
            }}
          />
          <label className="ms-2 fw-bold label" for="level1">
            初階浪點
          </label>
        </div>
        <div className="level2Radio">
          <input
            className="input"
            type="radio"
            name="tag"
            id="level2"
            value="2"
            checked={level === '2'}
            onClick={(e) => {
              setLevel(e.target.value);
            }}
          />
          <label className="ms-2 fw-bold label" for="level2">
            中階浪點
          </label>
        </div>
        <div className="level3Radio">
          <input
            className="input"
            type="radio"
            name="tag"
            id="level3"
            value="3"
            checked={level === '3'}
            onClick={(e) => {
              setLevel(e.target.value);
            }}
          />
          <label className="ms-2 fw-bold label" for="level3">
            高階浪點
          </label>
        </div>
      </div>
    </>
  );
}

export default CircleLeft;
