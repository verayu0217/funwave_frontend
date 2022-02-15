import React, { usestate } from 'react';
import { Figure, Row, Col } from 'react-bootstrap';
import greenTitle from '../../data/images/greenTitle.svg';
import fishboard from '../../data/images/customize/fishboardChoose.png';
import fishboardHole from '../../data/images/customize/fishboardHole.png';
import funboard from '../../data/images/customize/funboardChoose.png';
import funboardHole from '../../data/images/customize/funboardHole.png';
import gunboard from '../../data/images/customize/gunboardChoose.png';
import gunboardHole from '../../data/images/customize/gunboardHole.png';
import longboard from '../../data/images/customize/longboardChoose.png';
import longboardHole from '../../data/images/customize/longboardHole.png';

function Step2() {
  return (
    <div className="container">
      <Row>
        <Col>
          <div className="d-flex chooseBtn justify-content-around py-3 shadow">
            <div className="my-auto fs-1">01</div>
            <div>
              選擇衝浪板外型
              <br />
              Choose a surfboard shape
            </div>
          </div>
        </Col>
        <Col>
          <div className="d-flex chooseBtn justify-content-around py-3 shadow">
            <div className="my-auto fs-1">02</div>
            <div>
              選擇顏色及圖案
              <br />
              Choose color & pattern
            </div>
          </div>
        </Col>
        <Col>
          <div className="d-flex chooseBtn justify-content-around py-3 shadow">
            <div className="my-auto fs-1">03</div>
            <div className="me-3">
              加入購物車
              <br />
              Add to shopping cart
            </div>
          </div>
        </Col>
      </Row>
      <div className="text-secondary h1 text-center mb-3 d-flex justify-content-between">
        <button className="btn btn-secondary my-2">返回</button>
        <div className="">
          <img
            src={greenTitle}
            className="greenTitle me-3"
            alt="greenTitle"
            height="24px"
            weight="64px"
          />
          STEP2 選擇衝浪板顏色及圖案
        </div>

        <button className="btn btn-secondary my-2">下一步</button>
      </div>
      <hr />
      {/* 以下假資料 */}
      <Row>
        <Col lg="7">
          魚板
          <hr />
          <div className="boardCu"></div>
          <div className="boardCu"></div>
        </Col>
        <Col lg="5">
          顏色及圖樣選擇
          <hr />
          <div>
            <p>請選擇顏色</p>
            <hr />
            <p>請選擇圖樣</p>
            <Row>
              <Col>
                <button className="btn btn-secondary btnCu">清除重填</button>
              </Col>
              <Col>
                <button className="btn btn-primary btnCu">確定</button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Step2;
