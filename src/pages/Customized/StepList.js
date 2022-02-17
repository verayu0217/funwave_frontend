import React from 'react';
import { Row, Col } from 'react-bootstrap';

function StepList() {
  return (
    <>
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
    </>
  );
}

export default StepList;
