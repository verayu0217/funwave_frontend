import React, { useState, usestate } from 'react';
import { Figure, Row, Col } from 'react-bootstrap';
import greenTitle from '../../data/images/greenTitle.svg';
// import fishboardHole from '../../data/images/customize/fishboardHole.png';
// import funboardHole from '../../data/images/customize/funboardHole.png';
// import gunboardHole from '../../data/images/customize/gunboardHole.png';
import longboardHole from '../../data/images/customize/longboardHole.png';
function Step2() {
  const [boardColor, setBoardColor] = useState({
    backgroundColor: 'white',
  });
  const [boardColor2, setBoardColor2] = useState({
    backgroundColor: 'white',
  });

  function changeColor(e) {
    setBoardColor({ backgroundColor: e.target.value });
  }
  function changeColor2(e) {
    setBoardColor2({ backgroundColor: e.target.value });
  }
  return (
    <div className="container pb-3">
      <div className="text-secondary h1 text-center position-relative">
        <button className="btn btn-secondary my-2 position-absolute start-0">
          返回
        </button>
        <div className="text-center">
          <img
            src={greenTitle}
            className="greenTitle me-3"
            alt="greenTitle"
            height="24px"
            weight="64px"
          />
          STEP2 選擇衝浪板顏色及圖案
        </div>
      </div>
      <hr className="mb-3 mt-0" />
      {/* 以下假資料 */}
      <Row>
        <Col lg="7">
          <Row className="gx-0">
            <Col lg="2">魚板</Col>
            <Col lg="5" className="boarderCu">
              <p className="m-0 text-center">正面</p>
              <Figure style={boardColor}>
                <Figure.Image
                  alt="fishboardHole"
                  src={longboardHole}
                  className="m-0"
                />
              </Figure>
            </Col>
            <Col lg="5" className="boarderCu">
              <p className="m-0 text-center">反面</p>
              <Figure style={boardColor2}>
                <Figure.Image
                  alt="fishboardHole"
                  src={longboardHole}
                  className="m-0"
                />
              </Figure>
            </Col>
          </Row>
        </Col>
        {/* 右邊 */}
        <Col lg="5" className="text-center">
          顏色及圖樣選擇
          <hr />
          <div>
            <p>請選擇顏色</p>
            <Row>
              <Col>
                <p>正面</p>
                <input
                  type="color"
                  className="p-0"
                  // value="#ffffff"
                  onChange={changeColor}
                />
              </Col>
              <Col>
                <p>反面</p>
                <input type="color" className="p-0" onChange={changeColor2} />
              </Col>
            </Row>

            <hr />
            <p>請選擇圖樣</p>
            <Row>
              <Col>
                <p>正面</p>
              </Col>
              <Col>
                <p>反面</p>
              </Col>
            </Row>
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
