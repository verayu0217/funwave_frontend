import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Custom.scss';
import RecommendCard from './RecommendCard';
import Ad from './Ad';
import Step from './Step';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
function Customized() {
  return (
    <>
      <div className="container-fluid bannerCu">
        <div className="titleTopCu">
          <div className="d-flex justify-content-center align-items-end titleTop">
            <h4>Design a Custom Surfboard.</h4>
          </div>
          <div className="d-flex justify-content-center align-items-start titleBottom">
            <h1>客製化衝浪板</h1>
          </div>
        </div>
      </div>
      <Container>
        <h3>麵包屑</h3>
        <div className="d-flex justify-content-center my-5">
          <div className="sectionCu">
            <h3 className="text-center">與浪板一對一對話</h3>
            <p className="text-center gray">
              與衝浪板塑造名人Lai Eddy Red Huang
              Fang合作，打造完美適合您的訂製衝浪板。
              <br />
              每個衝浪板都從一對一的對話開始，由Lai Eddy Red Huang
              Fang親自定製，了解您對優質衝浪板的目標和願望。你有沒有想過你的長度和體積?你應該有V還是沒有V?單凹還是雙凹?所有這些決定都會影響你如何騎乘你的浪板。FUNWAVE是這方面的大師，為數十位世界級衝浪好手訂製過衝浪板。在這裡您可以擁有一個您專屬的靈魂衝浪板。
            </p>
          </div>
        </div>
      </Container>
      <Container fluid className="recommendBg pt-5">
        <Container>
          <h3 className="text-center fw-bold mb-5">
            他們都推薦FUNWAVE的訂製衝浪板
          </h3>
          <Row>
            <Col>
              <RecommendCard />
            </Col>
            <Col>
              <RecommendCard />
            </Col>
            <Col>
              <RecommendCard />
            </Col>
          </Row>
          <Ad />
          <Step />
          <Step1 />
          <Step2 />
          <Step3 />
        </Container>
      </Container>
    </>
  );
}

export default Customized;
