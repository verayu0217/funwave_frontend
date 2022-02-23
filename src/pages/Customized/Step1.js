import React, { usestate } from 'react';
import { Figure } from 'react-bootstrap';
import Swal from 'sweetalert2';
// import { Link } from 'react-router-dom';
// import { API_URL, IMAGE_URL } from '../../utils/config';
import greenTitle from '../../data/images/greenTitle.svg';
import fishboard from '../../data/images/customize/fishboardChoose.png';
import funboard from '../../data/images/customize/funboardChoose.png';
import gunboard from '../../data/images/customize/gunboardChoose.png';
import longboard from '../../data/images/customize/longboardChoose.png';

function Step1(props) {
  const { step, setStep, surfingBoard, setSurfingBoard } = props;

  function nextStep() {
    if (surfingBoard.size === '') {
      setStep({ ...step, step1: true, step2: '' });
      Swal.fire('請選擇衝浪板');
    } else {
      setStep({ ...step, step1: '', step2: true });
    }
  }

  return (
    <div className="container mb-0 vh-100">
      <div className="text-secondary h1 text-center position-relative">
        <img
          src={greenTitle}
          className="greenTitle me-3"
          alt="greenTitle"
          height="24px"
          weight="64px"
        />
        STEP1 選擇衝浪板外型
        <button
          className="btn btn-secondary position-absolute my-2 end-0"
          onClick={nextStep}
        >
          下一步
        </button>
      </div>
      <hr className="mb-3 mt-0" />
      <div className="d-flex justify-content-evenly chooseBoardCu">
        {/*魚板 */}
        <div
          className={
            surfingBoard.size === 1
              ? ' boardOrange px-3 pt-1 d-flex'
              : ' borderLightGray px-3 pt-1 d-flex'
          }
          onClick={() => {
            setSurfingBoard({ ...surfingBoard, size: 1 });
          }}
        >
          <Figure className="m-auto">
            <Figure.Image width={85} alt="126x260" src={fishboard} />
            <Figure.Caption className="text-center text-black fw-bold pt-3">
              魚板
            </Figure.Caption>
          </Figure>
        </div>

        {/*快樂板 */}
        <div
          className={
            surfingBoard.size === 2
              ? ' boardOrange px-3 pt-1 d-flex'
              : ' borderLightGray px-3 pt-1 d-flex'
          }
          onClick={() => {
            setSurfingBoard({ ...surfingBoard, size: 2 });
          }}
        >
          <Figure className="m-auto">
            <Figure.Image width={83} alt="80x316" src={funboard} />
            <Figure.Caption className="text-center text-black fw-bold pt-3">
              快樂板
            </Figure.Caption>
          </Figure>
        </div>
        {/* 槍板 */}
        <div
          className={
            surfingBoard.size === 3
              ? ' boardOrange px-3 pt-1 d-flex'
              : ' borderLightGray px-3 pt-1 d-flex'
          }
          onClick={() => {
            setSurfingBoard({ ...surfingBoard, size: 3 });
          }}
        >
          <Figure className="m-auto">
            <Figure.Image width={70} alt="64x338" src={gunboard} />
            <Figure.Caption className="text-center text-black fw-bold pt-3">
              槍板
            </Figure.Caption>
          </Figure>
        </div>
        {/* 長板*/}
        <div
          className={
            surfingBoard.size === 4
              ? ' boardOrange px-3 pt-1 d-flex'
              : ' borderLightGray px-3 pt-1 d-flex'
          }
          onClick={() => {
            setSurfingBoard({ ...surfingBoard, size: 4 });
          }}
        >
          <Figure className="m-auto">
            <Figure.Image width={85} alt="93x455" src={longboard} />
            <Figure.Caption className="text-center text-black fw-bold pt-3">
              長板
            </Figure.Caption>
          </Figure>
        </div>
      </div>
    </div>
  );
}

export default Step1;
