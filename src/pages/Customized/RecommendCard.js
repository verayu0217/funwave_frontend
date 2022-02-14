import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import './Custom.scss';

function RecommendCard() {
  return (
    <>
      <div className="shadow-lg bg-white p-2 mb-5">
        <div className="m-3">
          <p className="gray">
            超推薦他們的衝浪板!超推薦他們的衝浪板!超推薦他們的衝浪板!超推薦他們的衝浪板!超推薦他們的衝浪板!超推薦他們的衝浪板!超推薦他們的衝浪板!超推薦他們的衝浪板!
          </p>
          <div className="d-flex justify-content-between mt-5">
            <p>歐陽范姜</p>
            <div className="d-flex justify-content-center ">
              <AiFillStar size={20} color="#ff7f6a" />
              <AiFillStar size={20} color="#ff7f6a" />
              <AiFillStar size={20} color="#ff7f6a" />
              <AiFillStar size={20} color="#ff7f6a" />
              <AiOutlineStar size={20} color="#ff7f6a" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecommendCard;
