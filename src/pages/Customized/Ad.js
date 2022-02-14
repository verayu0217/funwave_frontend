import React from 'react';
import celebrity from '../../data/images/Customize/celebrity.jpg';
import { Container, Row, Col } from 'react-bootstrap';

function Ad() {
  return (
    <>
      <div className="">
        <Row>
          <Col>
            <img src={celebrity} alt="celebrity" className="celebrity" />
          </Col>
          <Col>
            <h3 className="text-center fw-bold">
              與國際浪板塑造名人
              <br />
              Lai Eddy RED Huang Fang 攜手合作
            </h3>
            <p className="text-center px-5 py-3 gray">
              Lai Eddy Red Huang Fang
              是最多產、最有前瞻性的浪板造型師之一，並自2010年起連續11年獲得受矚目的浪板設計獎，他的訂製浪板被世界各國的衝浪好手所擁戴。您將親自或線上與這位大師一起，與數十年的設計經驗的他一起打造適合您的衝浪板。
            </p>
          </Col>
          <Col>
            <img />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Ad;
