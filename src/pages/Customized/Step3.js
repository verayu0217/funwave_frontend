import React, { useState, useEffect } from 'react';
import { Figure, Row, Col } from 'react-bootstrap';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import greenTitle from '../../data/images/greenTitle.svg';
import fishboardHole from '../../data/images/customize/fishboardHole.png';
import funboardHole from '../../data/images/customize/funboardHole.png';
import gunboardHole from '../../data/images/customize/gunboardHole.png';
import longboardHole from '../../data/images/customize/longboardHole.png';
import { IMAGE_URL } from '../../utils/config';

function Step3(props) {
  const { step, setStep, surfingBoard, setSurfingBoard } = props;
  const [count, setCount] = useState(1);
  const [board, setBoard] = useState({});
  const [mycart, setMycart] = useState([]); // 要存進localStorage的資料
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

  const amount = surfingBoard.price * count;

  //localStorage  拿出來getItem 寫進去setItem
  const addToLocal = (item) => {
    // 將key值為productCart的value 取出 把字串轉回物件
    let currentCart = JSON.parse(localStorage.getItem('productCart')) || [];

    currentCart.push(item); // 每一筆資料都加入購物車 更新JS資料
    localStorage.setItem('productCart', JSON.stringify(currentCart)); //更新localstorage資料

    // 設定資料
    // setMycart(currentCart);
    // console.log('localstorage', currentCart);
  };

  return (
    <div className="container">
      <div className="text-secondary h1 text-center position-relative">
        <button
          className="btn btn-secondary my-2 position-absolute start-0"
          onClick={() => {
            setStep({ ...step, step2: true, step3: '' });
          }}
        >
          上一步
        </button>
        <img
          src={greenTitle}
          className="greenTitle me-3"
          alt="greenTitle"
          height="24px"
          weight="64px"
        />
        STEP 3加入購物車
      </div>
      <hr className="mb-3 mt-0" />
      <Row>
        <Col lg="7">
          <Row className="gx-0">
            <Col lg="2">{board.text}</Col>
            <Col lg="5" className="boarder">
              <p className="m-0 text-center">正面</p>
              <Figure
                style={{ backgroundColor: `${surfingBoard.front}` }}
                className="position-relative"
              >
                <Figure.Image
                  alt={board.text}
                  src={board.selected}
                  className="m-0"
                />
                <Figure.Image
                  alt="picture"
                  src={`${IMAGE_URL}/customized/${surfingBoard.frontpattern}`}
                  className="m-0 upperPictureCu position-absolute imgPositionCu"
                />
              </Figure>
            </Col>
            <Col lg="5" className="boarder">
              <p className="m-0 text-center">反面</p>
              <Figure
                style={{ backgroundColor: `${surfingBoard.back}` }}
                className="position-relative"
              >
                <Figure.Image
                  alt={board.text}
                  src={board.selected}
                  className="m-0"
                />
                <Figure.Image
                  alt="picture"
                  src={`${IMAGE_URL}/customized/${surfingBoard.backpattern}`}
                  className="m-0 upperPictureCu position-absolute imgPositionCu"
                />
              </Figure>
            </Col>
          </Row>
        </Col>
        <Col lg="5">
          <Row>
            <Col xs lg="12">
              <div className="d-flex justify-content-between">
                <div className="m-5 h2 fw-bold">價格:</div>
                <div className="m-5 h2 fw-bold">
                  {surfingBoard.price.toLocaleString()}
                </div>
              </div>
            </Col>
            <Col xs lg="12">
              <div className="d-flex justify-content-between">
                <div className="m-5 h2 fw-bold">數量:</div>
                <div className="m-5 h2 d-flex justify-content-between fw-bold">
                  <button
                    type="button"
                    className="btn btn-secondary border rounded-circle p-0 countButton m-auto me-2"
                    onClick={() => {
                      if (count - 1 >= 1) setCount(count - 1);
                    }}
                  >
                    <AiOutlineMinus
                      size={20}
                      color="#ffffff"
                      className="text-center m-auto"
                    />
                  </button>
                  {count}
                  <button
                    type="button"
                    className="btn btn-secondary border rounded-circle p-0 countButton m-auto ms-2"
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    <AiOutlinePlus
                      size={20}
                      color="#ffffff"
                      className="m-auto"
                    />
                  </button>
                </div>
              </div>
              <hr className="my-2" />
            </Col>
            <Col xs lg="12">
              <div className="d-flex justify-content-between">
                <div className="my-3 mx-5 h2 fw-bold">總額:</div>
                <div className="my-3 mx-5 h2 fw-bold">
                  NT{amount.toLocaleString()}
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <button
                className="btn btn-secondary btnCu"
                onClick={() => {
                  setStep({ ...step, step1: true, step3: '' });
                  setSurfingBoard({
                    ...surfingBoard,
                    size: '',
                    frontpattern: 'blank.png',
                    backpattern: 'blank.png',
                  });
                }}
              >
                繼續客製浪板
              </button>
            </Col>
            <Col>
              <button
                className="btn btn-primary btnCu"
                onClick={() => {
                  addToLocal({
                    product_no: 'CB-0001-8-0',
                    name: '客製化浪板',
                    price: amount,
                    image1: null,
                    color_id: '客製化',
                    size: surfingBoard.size,
                    small_cat_id: 10,
                    stock: 1,
                    count: count,
                    image_cu1: '',
                  });
                }}
              >
                加入購物車
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Step3;
