import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import './Custom.scss';
import { Row, Col } from 'react-bootstrap';

function RecommendCard() {
  return (
    <Row>
      <Col>
        <div className="shadow rounded bg-white p-2 cardMArginCu mb-1">
          <div className="m-3">
            <p className="gray">
              超推薦他們的衝浪板!
              <br />
              超推薦他們的衝浪板!
              <br />
              超推薦他們的衝浪板! <br />
              很重要要講三次!!! 麻瓜世界的最愛商品
            </p>
            <div className="d-flex justify-content-between mt-5">
              <p>格來分多</p>
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
      </Col>
      <Col>
        <div className="shadow rounded bg-white p-2 cardMArginCu mb-1">
          <div className="m-3">
            <p className="gray">唯一認證</p>
            <div className="d-flex justify-content-between mt-5">
              <p>史萊哲林</p>
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
      </Col>
      <Col>
        <div className="shadow rounded bg-white p-2 cardMArginCu mb-1">
          <div className="m-3">
            <p className="gray">
              超推薦他們的衝浪板!超推薦他們的衝浪板!超推薦他們的衝浪板!超推薦他們的衝浪板!超推薦他們的衝浪板!超推薦他們的衝浪板!超推薦他們的衝浪板!超推薦他們的衝浪板!
            </p>
            <div className="d-flex justify-content-between mt-5">
              <p>雷文克勞</p>
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
      </Col>
    </Row>
  );
}

export default RecommendCard;
