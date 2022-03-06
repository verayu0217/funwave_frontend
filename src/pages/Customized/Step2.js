import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Step2Tabs from './Step2Tabs';
import Step2Board from './Step2Board';
import greenTitle from '../../data/images/greenTitle.svg';

function Step2(props) {
  const { step, setStep, surfingBoard, setSurfingBoard, pattern, setPattern } =
    props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container pb-3">
      <div className="text-secondary h1 text-center position-relative">
        <button
          className="btn btn-secondary my-2 position-absolute start-0 display"
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
            width="64px"
          />
          STEP2 選擇衝浪板顏色及圖案
        </div>
      </div>
      {/* 手機版 */}
      <div className="d-flex mb-1 disappear">
        <button
          className="btn btn-secondary m-auto"
          onClick={() => {
            setStep({ ...step, step1: true, step2: '' });
          }}
        >
          上一步
        </button>
      </div>
      <hr className="mb-3 mt-0" />
      {/* 內容 */}
      <Row>
        {/* 板子改變 */}
        <Step2Board
          surfingBoard={surfingBoard}
          setSurfingBoard={setSurfingBoard}
          pattern={pattern}
          setPattern={setPattern}
        />
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
                  value={surfingBoard.front}
                  onChange={(e) => {
                    setSurfingBoard({ ...surfingBoard, front: e.target.value });
                  }}
                />
              </Col>
              <Col>
                <p>反面</p>
                <input
                  type="color"
                  className="p-0"
                  value={surfingBoard.back}
                  onChange={(e) => {
                    setSurfingBoard({ ...surfingBoard, back: e.target.value });
                  }}
                />
              </Col>
            </Row>

            <hr />
            <p>請選擇圖樣</p>

            <Step2Tabs
              pattern={pattern}
              setPattern={setPattern}
              surfingBoard={surfingBoard}
              setSurfingBoard={setSurfingBoard}
            />

            <Row className="mt-2">
              <Col>
                <button
                  className="btn btn-secondary btnCu"
                  onClick={() => {
                    setSurfingBoard({
                      ...surfingBoard,
                      front: '#ffffff',
                      back: '#ffffff',
                      frontpattern: 'blank.png',
                      backpattern: 'blank.png',
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
