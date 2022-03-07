import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import greenTitle from '../../data/images/greenTitle.svg';
import Step2Board from './Step2Board';
import Swal from 'sweetalert2';

function Step3(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { step, setStep, surfingBoard, setSurfingBoard } = props;
  const [count, setCount] = useState(1);
  const [board, setBoard] = useState({});

  const typeToSize = ['5', '6', '7', '9'];

  // const [mycart, setMycart] = useState([]); // 要存進localStorage的資料
  useEffect(() => {
    console.log(surfingBoard);
    if (surfingBoard.size === 1) setBoard({ text: '魚板' });
    if (surfingBoard.size === 2) setBoard({ text: '快樂板' });
    if (surfingBoard.size === 3) setBoard({ text: '槍板' });
    if (surfingBoard.size === 4) setBoard({ text: '長板' });
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
          className="btn btn-secondary my-2 position-absolute start-0 display"
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
          width="64px"
        />
        STEP 3加入購物車
      </div>
      {/* 手機版btn */}
      <div className="d-flex mb-1 disappear">
        <button
          className="btn btn-secondary m-auto"
          onClick={() => {
            setStep({ ...step, step2: true, step3: '' });
          }}
        >
          上一步
        </button>
      </div>
      <hr className="mb-3 mt-0" />
      <Row>
        {/* 左邊板子 */}
        <Step2Board
          surfingBoard={surfingBoard}
          setSurfingBoard={setSurfingBoard}
        />

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
                    front: '#ffffff',
                    back: '#ffffff',
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
                    product_no: 'CB-0001-10-0',
                    name: `客製化${board.text}`,
                    price: amount,
                    image1: 'test.jpg',
                    color_id: 10,
                    size: typeToSize[surfingBoard.size - 1],
                    small_cat_id: 9,
                    stock: 1,
                    count: count,
                    style: `${surfingBoard.front} + ${surfingBoard.frontpattern} & ${surfingBoard.back} + ${surfingBoard.backpattern}`,
                  });

                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: '已加入購物車！',
                    showConfirmButton: false,
                    timer: 1500,
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
