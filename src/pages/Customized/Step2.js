import React, { useEffect, useState } from 'react';
import { Figure, Row, Col } from 'react-bootstrap';
import ControlledTabs from './ControlledTabs';
import greenTitle from '../../data/images/greenTitle.svg';
import fishboardHole from '../../data/images/customize/fishboardHole.png';
import funboardHole from '../../data/images/customize/funboardHole.png';
import gunboardHole from '../../data/images/customize/gunboardHole.png';
import longboardHole from '../../data/images/customize/longboardHole.png';
import goodLuck from '../../data/images/customize/surfboardpicture/goodLuck.png';

function Step2(props) {
  const { step, setStep, surfingBoard, setSurfingBoard, pattern, setPattern } =
    props;

  // const [pattern, setPattern] = useState([]);

  const [boardColor, setBoardColor] = useState({ backgroundColor: 'white' });
  const [boardColor2, setBoardColor2] = useState({ backgroundColor: 'white' });

  function changeColor(e) {
    setBoardColor({ backgroundColor: e.target.value });
    setSurfingBoard({ ...surfingBoard, front: e.target.value });
  }
  function changeColor2(e) {
    setBoardColor2({ backgroundColor: e.target.value });
    setSurfingBoard({ ...surfingBoard, back: e.target.value });
  }
  function showPic(n) {
    switch (n) {
      case 1:
        return { fishboardHole };
      case 2:
        return '{ funboardHole }';
      case 3:
        return '{ gunboardHole }';
      case 4:
        return '{ longboardHole }';
      default:
        return null;
    }
  }

  function showText(n) {
    switch (n) {
      case 1:
        return '魚板';
      case 2:
        return '快樂板';
      case 3:
        return '槍板';
      case 4:
        return '長板';
      default:
        return null;
    }
  }

  return (
    <div className="container pb-3">
      <div className="text-secondary h1 text-center position-relative">
        <button
          className="btn btn-secondary my-2 position-absolute start-0"
          onClick={() => {
            setStep({ ...step, step1: true, step2: '' });
          }}
        >
          上一步
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
      {/* 內容 */}
      <Row>
        <Col lg="7">
          <Row className="gx-0">
            <Col lg="2">{showText(surfingBoard.size)}</Col>
            <Col lg="5" className="boarder">
              <p className="m-0 text-center">正面</p>
              {/* 浪板 */}
              <Figure style={boardColor} className="position-relative">
                <Figure.Image
                  alt={showText(surfingBoard.size)}
                  src={showPic(surfingBoard.size)}
                  className="m-0"
                />
                {/* 疊圖 */}
                <Figure.Image
                  alt="goodLuck"
                  src={goodLuck}
                  // `${IMAGE_URL}/customized/${img[0].id}`
                  className="m-0 upperPictureCu position-absolute top-50 start-0"
                />
              </Figure>
            </Col>
            <Col lg="5" className="boarder">
              <p className="m-0 text-center">反面</p>
              <Figure style={boardColor2} className="position-relative">
                <Figure.Image
                  alt="fishboardHole"
                  src={funboardHole}
                  className="m-0"
                />
                {/* 疊圖 */}
                <Figure.Image
                  alt="goodLuck"
                  src={goodLuck}
                  // `${IMAGE_URL}/customized/${img[0].id}`
                  className="m-0 upperPictureCu position-absolute top-50 start-0"
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

            <ControlledTabs pattern={pattern} setPattern={setPattern} />

            <Row className="mt-2">
              <Col>
                <button
                  className="btn btn-secondary btnCu"
                  onClick={() => {
                    setSurfingBoard({
                      ...surfingBoard,
                      front: 'white',
                      back: 'white',
                      frontpattern: '',
                      backpattern: '',
                    });
                  }}
                >
                  清除重填
                </button>
              </Col>
              <Col>
                <button
                  className="btn btn-primary btnCu"
                  onClick={() => {
                    setStep({ ...step, step2: '', step3: true });
                  }}
                >
                  確定
                </button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Step2;
