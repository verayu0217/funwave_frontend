import React from 'react';
import { Row, Col } from 'react-bootstrap';
// react-icons
import { FaLocationArrow } from 'react-icons/fa';
import './surfSpotDetails.scss';

function SurfSpotDetails() {
  return (
    <>
      <div className="container-fluid taiwanMapBgBlack">
        <div className="container d-flex justify-content-center">
          <div className="spotDetailWrap mt-5" style={{ width: '80%' }}>
            <div className="row gx-0 spotDetailWrapBlack">
              <div className="col-md-7 col-sm-12 pt-5">
                <h1 className="ms-5 ps-5 fw-bold">沙崙</h1>
              </div>
              <div className="col-md-5 col-sm-12 py-5">
                <div className="mx-4 mb-2 text-secondary fw-bold d-flex justify-content-start">
                  2022/2/15 星期二 14:00
                </div>
                <div className="spotInfo p-4 mx-4">
                  <Row className="mb-3">
                    <Col className="text-center text-dark fw-bold">風力</Col>
                    <Col className="text-center text-dark fw-bold">風向</Col>
                    <Col className="text-center text-dark fw-bold">風速</Col>
                  </Row>
                  <Row className="mb-4 pb-3 border-bottom">
                    <Col className="align-items-center text-center">7.3m/s</Col>
                    <Col className="text-center">
                      <FaLocationArrow
                        size={20}
                        color="#17a8a2"
                        className="mb-2"
                      />
                    </Col>
                    <Col className="text-center">9.5m/s</Col>
                  </Row>
                  <Row className="mb-3">
                    <Col className="text-center text-dark fw-bold">氣溫</Col>
                    <Col className="text-center text-dark fw-bold">海溫</Col>
                    <Col className="text-center text-dark fw-bold">UV</Col>
                  </Row>
                  <Row className="mb-4 pb-3 border-bottom">
                    <Col className="text-center">18°C</Col>
                    <Col className="text-center">20°C</Col>
                    <Col className="text-center">3</Col>
                  </Row>
                  <Row className="mb-3">
                    <Col className="text-center text-dark fw-bold">乾潮</Col>
                    <Col className="text-center text-dark fw-bold">滿潮</Col>
                    <Col className="text-center text-dark fw-bold">日落</Col>
                  </Row>
                  <Row className="mb-2">
                    <Col className="text-center">
                      00:43
                      <br />
                      12:22
                    </Col>
                    <Col className="text-center">
                      07:28
                      <br />
                      17:38
                    </Col>
                    <Col className="text-center mt-2">17:48</Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SurfSpotDetails;
