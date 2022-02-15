import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Step() {
  return (
    <div className="d-flex justify-content-center my-5">
      <div>
        <h3 className="text-center fw-bold mb-5">不做不會怎樣，做了很不一樣</h3>
        <h1 className="text-center orange fw-bold mb-5">
          立即開始您的專屬浪板訂製
        </h1>
        <p className="gray contentCu text-center mb-5 m-auto">
          通過衝浪者填寫您的資料，讓FUNWAVE深入了解您，以利Lai Eddy Red Huang
          Fang設計一個真正適合您和您的衝浪風格的板子，並立即選擇您喜歡的板子顏色及圖文樣式吧
        </p>
        <h3 className="text-center fw-bold my-5 pt-5">
          簡單3步驟，訂製您的夢想衝浪板
        </h3>
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
      </div>
    </div>
  );
}

export default Step;
