import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import error from '../data/images/404.png';

function NotFound() {
  return (
    <Container>
      <Row>
        <Col>
          <img src={error} alt="404" className="notFound" />
        </Col>
        <Col>
          <p className="fs-1 errorword">此網頁不存在</p>
          <a href="/home" className="fs-2" id="home">
            回首頁
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
