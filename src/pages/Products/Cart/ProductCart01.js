import React, { useState, useEffect } from 'react';
import { Figure, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Cart.scss';
import { IMAGE_URL } from '../../../utils/config';
import greenTitle from '../../../data/images/greenTitle.svg';
// react-icons
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { CgTrash } from 'react-icons/cg';

function CartPreOrder() {
  // 將localStorage的資料存為狀態mycart
  const [mycart, setMycart] = useState([]);
  // 整理重複的mycart為mycartDisplay
  const [mycartDisplay, setMycartDisplay] = useState([]);

  // 小分類、顏色的id對照名稱
  const colorTypes = ['白', '黑', '藍', '綠', 'x', '紅', '橘'];
  const smallCatTypes = [
    '衝浪長板',
    '衝浪快樂板',
    '衝浪短板',
    '衝浪板舵',
    '衝浪腳繩',
    '衝浪腳踏墊',
    '衝浪板袋',
    '衝浪斗篷毛巾衣',
    '防寒衣',
  ];

  // 模擬componentDidMount
  // 提取LocalStorage的資料
  function getCartFromLocalStorage() {
    // 如果購物車內沒資料，就給空陣列
    const newCart = JSON.parse(localStorage.getItem('productCart') || '[]');
    console.log('newCart', newCart);
    setMycart(newCart);
  }
  useEffect(() => {
    getCartFromLocalStorage();
  }, []);

  // 模擬componentDidUpdate
  // 整理購物車中product_no相同的品項
  useEffect(() => {
    let newMycartDisplay = [];

    //尋找mycartDisplay中有沒有和mycart[i]同product_no
    for (let i = 0; i < mycart.length; i++) {
      //有找到會返回陣列成員的索引值
      //沒找到會返回-1
      const index = newMycartDisplay.findIndex(
        (value) => value.product_no === mycart[i].product_no
      );
      //有的話就相加其數量
      if (index !== -1) {
        newMycartDisplay[index].count += mycart[i].count;
      } else {
        //沒有的話就把項目加入mycartDisplay
        const newItem = { ...mycart[i] };
        newMycartDisplay = [...newMycartDisplay, newItem];
      }
    }

    console.log('newMycartDisplay', newMycartDisplay);
    setMycartDisplay(newMycartDisplay);
  }, [mycart]);

  // 更新購物車中的商品數量
  const updateCartLocalStorage = (item, isAdded = true) => {
    console.log(item, isAdded);
    const currentCart = JSON.parse(localStorage.getItem('productCart')) || [];

    const index = currentCart.findIndex(
      (v) => v.product_no === item.product_no
    );

    // 排除沒找到的情況 index = -1
    if (index > -1) {
      isAdded ? currentCart[index].count++ : currentCart[index].count--;
    }

    localStorage.setItem('productCart', JSON.stringify(currentCart));
    setMycart(currentCart);
  };

  // 計算總價用的函式
  const sum = (items) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].count * items[i].price;
    }
    return total;
  };
  // localStorage.removeItem('productCart');

  return (
    <>
      <div className="container">
        <header className="m-5 py-2 px-5">
          <div className="text-secondary fw-bold h1 text-center mb-5">
            <img
              src={greenTitle}
              className="greenTitle me-3"
              alt="greenTitle"
              height="24px"
              weight="64px"
            />
            衝浪商品購物車
          </div>
          <div className="d-flex justify-content-evenly">
            <div className="d-flex align-items-center shadow py-2 cartStepsSigns cartStepsSignsOrange borderRadius">
              <div className="fs-1 w-25 text-center">01</div>
              <div className="w-75">
                確認清單及選擇付款、運送方式
                <br />
                Cart & Check out
              </div>
            </div>
            <div className="d-flex justify-content-evenly align-items-center shadow py-2 cartStepsSigns borderRadius">
              <div className="fs-1 w-25 text-center">02</div>
              <div className="w-75">
                填寫訂購資料
                <br />
                Cart & Check out
              </div>
            </div>
            <div className="d-flex justify-content-evenly align-items-center shadow py-2 cartStepsSigns borderRadius">
              <div className="fs-1 w-25 text-center">03</div>
              <div className="w-75">
                購物完成！
                <br />
                Order completed
              </div>
            </div>
          </div>
        </header>
        <article>
          <div className="row mx-5 px-3 d-flex justify-content-center">
            {/* 購物車 */}
            <div className="col-6 borderRadius p-0 me-4 shadow">
              <div className="p-4 border-bottom text-center">
                <h1>購物車</h1>
              </div>
              {/* 購物車內的商品細節 */}
              {mycartDisplay.map((item, index) => {
                return (
                  <>
                    <div className="px-5 p-4 position-relative">
                      <Figure className="d-flex align-items-center">
                        <Figure.Image
                          width={150}
                          height={150}
                          alt={item.product_no}
                          src={`${IMAGE_URL}/products/${item.image1}`}
                          className="m-0 cartImg"
                        />
                        <div className="ps-4 cartDetails">
                          <Figure.Caption>
                            <p className="mb-1 fs-3 fw-bold fontBlack">
                              {item.name}
                            </p>
                          </Figure.Caption>
                          <Figure.Caption>
                            <p className="m-0">{item.product_no}</p>
                            <p className="m-0">
                              {smallCatTypes[item.small_cat_id - 1]}
                            </p>
                            <p className="m-0">
                              顏色：{colorTypes[item.color_id - 1]}
                            </p>
                            <p className="mb-1">尺寸：{item.size} ft</p>
                          </Figure.Caption>
                          <Figure.Caption>
                            <p className="m-0 fw-bold fontBlack">
                              NT {item.price.toLocaleString()}
                            </p>
                          </Figure.Caption>
                        </div>
                        <div className="w-25 d-flex justify-content-start align-items-center">
                          <button
                            type="button"
                            className="btn btn-secondary border rounded-circle p-0 me-3 countButton"
                            onClick={() => {
                              if (item.count === 1) return;
                              updateCartLocalStorage(item, false);
                            }}
                          >
                            <AiOutlineMinus
                              size={18}
                              color="#ffffff"
                              className="text-center"
                            />
                          </button>
                          {item.count}
                          <button
                            type="button"
                            className="btn btn-secondary border rounded-circle p-0 ms-3 countButton"
                            onClick={() => updateCartLocalStorage(item, true)}
                          >
                            <AiOutlinePlus
                              size={18}
                              color="#ffffff"
                              className="text-center"
                            />
                          </button>
                          <CgTrash
                            size={20}
                            className="text-center position-absolute trash"
                          />
                          {/* <i className="fas fa-trash-alt position-absolute trash"></i> */}
                        </div>
                      </Figure>
                    </div>
                  </>
                );
              })}
            </div>
            {/* 付款及運送方式 */}
            <div className="col-5 borderRadius p-0 ms-4 shadow">
              <div className="p-4 border-bottom text-center">
                <h1>付款及運送方式</h1>
              </div>
              <div className="px-5 py-4 cartAmount">
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-5">商品總金額</div>
                  <div className="col-5 text-end">{sum(mycartDisplay)}</div>
                  <div className="col-1"></div>
                </div>
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-5">優惠券</div>
                  <div className="col-5 text-end">0</div>
                  <div className="col-1"></div>
                </div>
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-5">運費</div>
                  <div className="col-5 text-end">
                    -{sum(mycartDisplay) > 20000 ? 0 : 120}
                  </div>
                  <div className="col-1"></div>
                </div>
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-5">購物金</div>
                  <div className="col-5 text-end">- 0</div>
                  <div className="col-1"></div>
                </div>
                <div className="row mt-5">
                  <div className="col-1"></div>
                  <div className="col-5 d-flex justify-content-end align-items-end">
                    總金額：
                  </div>
                  <div className="col-5 text-end h2 m-0">
                    NT {sum(mycartDisplay).toLocaleString()}
                  </div>
                  <div className="col-1"></div>
                </div>
              </div>
              <div className="px-5 py-4">
                <h5>付款方式</h5>
                <Form.Select aria-label="select">
                  <option>付款方式</option>
                  <option value="pay1">信用卡線上付款</option>
                  <option value="pay2">貨到付款(宅配)</option>
                  <option value="pay3">貨到付款(超商)</option>
                </Form.Select>
                <h5 className="mt-4">運送方式</h5>
                <Form.Select aria-label="select">
                  <option>運送方式</option>
                  <option value="ship1">宅配</option>
                  <option value="ship2">超商取貨</option>
                </Form.Select>
              </div>
              <div className="d-flex justify-content-center mt-5 mb-4">
                <Link to="/cart-manage">
                  <div className="btn btn-secondary cartNextBtn">下一步</div>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default CartPreOrder;
