import React, { usestate } from 'react';
import { Figure } from 'react-bootstrap';
import greenTitle from '../../data/images/greenTitle.svg';
import fishboard from '../../data/images/customize/fishboardChoose.png';
import fishboardHole from '../../data/images/customize/fishboardHole.png';
import funboard from '../../data/images/customize/funboardChoose.png';
import funboardHole from '../../data/images/customize/funboardHole.png';
import gunboard from '../../data/images/customize/gunboardChoose.png';
import gunboardHole from '../../data/images/customize/gunboardHole.png';
import longboard from '../../data/images/customize/longboardChoose.png';
import longboardHole from '../../data/images/customize/longboardHole.png';

function Step1() {
  return (
    <div className="vh-100">
      <div className="text-secondary h1 text-center mb-3 position-relative">
        <img
          src={greenTitle}
          className="greenTitle me-3"
          alt="greenTitle"
          height="24px"
          weight="64px"
        />
        STEP1 選擇衝浪板外型
        <button className="btn btn-secondary position-absolute my-2 end-0">
          下一步
        </button>
      </div>
      <hr />
      <div className="d-flex justify-content-evenly chooseBoardCu">
        <Figure className="align-self-end">
          <Figure.Image width={85} alt="126x260" src={fishboard} />
          <Figure.Caption className="text-center text-black fw-bold pt-3">
            魚板
          </Figure.Caption>
        </Figure>
        <Figure className="align-self-end">
          <Figure.Image width={83} alt="80x316" src={funboard} />
          <Figure.Caption className="text-center text-black fw-bold pt-3">
            快樂板
          </Figure.Caption>
        </Figure>
        <Figure className="align-self-end">
          <Figure.Image width={70} alt="64x338" src={gunboard} />
          <Figure.Caption className="text-center text-black fw-bold pt-3">
            槍板
          </Figure.Caption>
        </Figure>
        <Figure className="align-self-end">
          <Figure.Image width={85} alt="93x455" src={longboard} />
          <Figure.Caption className="text-center text-black fw-bold pt-3">
            長板
          </Figure.Caption>
        </Figure>
      </div>
    </div>
  );
}

export default Step1;
