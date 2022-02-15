import React from 'react';
import { Figure, Row, Col } from 'react-bootstrap';
import greenTitle from '../../data/images/greenTitle.svg';

function Step3() {
  return (
    <d>
      {' '}
      <div className="text-secondary h1 text-center mb-3">
        <img
          src={greenTitle}
          className="greenTitle me-3"
          alt="greenTitle"
          height="24px"
          weight="64px"
        />
        STEP 3加入購物車
      </div>
      <hr />
      <Row>
        <Col lg="7">
          <Figure></Figure>
          <div className="boardCu"></div>
        </Col>
        <Col lg="5">
          <Row>
            <Col xs lg="12">
              價格:
            </Col>
            <Col xs lg="12">
              數量:
            </Col>
            <hr />
            <Col xs lg="12">
              總額:
            </Col>
          </Row>
          <Row>
            <Col>
              <button className="btn btn-secondary btnCu">繼續客製浪板</button>
            </Col>
            <Col>
              <button className="btn btn-primary btnCu">加入購物車</button>
            </Col>
          </Row>
        </Col>
      </Row>
    </d>
  );
}

export default Step3;
