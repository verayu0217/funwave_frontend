import React, { useState, useEffect } from 'react';
import { Figure, Row, Col } from 'react-bootstrap';
import fishboardHole from '../../data/images/customize/fishboardHole.png';
import funboardHole from '../../data/images/customize/funboardHole.png';
import gunboardHole from '../../data/images/customize/gunboardHole.png';
import longboardHole from '../../data/images/customize/longboardHole.png';
import goodLuck from '../../data/images/customize/surfboardpicture/goodLuck.png';

function Step2Board(props) {
  const { surfingBoard, setSurfingBoard, pattern, setPattern } = props;
  const [board, setBoard] = useState({});

  useEffect(() => {
    console.log(surfingBoard);
    if (surfingBoard.size === 1)
      setBoard({ selected: fishboardHole, text: '魚板' });
    if (surfingBoard.size === 2)
      setBoard({ selected: funboardHole, text: '快樂板' });
    if (surfingBoard.size === 3)
      setBoard({ selected: gunboardHole, text: '槍板' });
    if (surfingBoard.size === 4)
      setBoard({ selected: longboardHole, text: '長板' });
  }, [surfingBoard]);
  return (
    <Col lg="7">
      <Row className="gx-0">
        <Col lg="2">{board.text}</Col>
        <Col lg="5" className="boarder">
          <p className="m-0 text-center">正面</p>
          {/* 正面浪板 */}
          <Figure
            style={{ backgroundColor: `${surfingBoard.front}` }}
            className="position-relative"
          >
            <Figure.Image
              alt={board.text}
              src={board.selected}
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
          {/* 反面浪板 */}
          <Figure
            style={{ backgroundColor: `${surfingBoard.back}` }}
            className="position-relative"
          >
            <Figure.Image
              alt={board.text}
              src={board.selected}
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
  );
}

export default Step2Board;
