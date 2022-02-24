import React, { useState, useEffect } from 'react';
import { Figure, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Cart.scss';
import { IMAGE_URL } from '../../../utils/config';
import greenTitle from '../../../data/images/greenTitle.svg';
// react-icons
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { CgTrash } from 'react-icons/cg';

function ProductCart01() {
  // 將localStorage的資料存為狀態mycart
  const [mycart, setMycart] = useState([]);
  // 整理重複的mycart為mycartDisplay
  const [mycartDisplay, setMycartDisplay] = useState([]);

  // 小分類、顏色的id對照名稱
  const colorTypes = ['白', '黑', '藍', '綠', '黃', '紅', '橘'];
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
    console.log('newCart初始', newCart);
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
    console.log('currentCart', currentCart);

    const index = currentCart.findIndex(
      (v) => v.product_no === item.product_no
    );
    console.log('index', index);

    // 排除沒找到的情況 index = -1
    if (index > -1) {
      isAdded ? currentCart[index].count++ : currentCart[index].count--;
    }

    localStorage.setItem('productCart', JSON.stringify(currentCart));
    setMycart(currentCart);
    console.log('mycart', mycart); // 為何看起來慢一拍？？？
  };

  // 處理項目刪除用
  const cartDelete = (product_no) => {
    //1. 先從原本的陣列(物件)拷貝出一個新陣列(物件)
    //2. 在拷貝出的新陣列(物件)上運算或處理
    let newMycartDisplay = [...mycartDisplay].filter((v, i) => {
      return v.product_no !== product_no;
    });
    //3. 設定回原本的狀態
    setMycartDisplay(newMycartDisplay);
    // console.log('newMycartDisplay', newMycartDisplay);
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
        {/* 購物車三步驟 */}
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
                確認清單 & 付款及配送方式
                <br />
                Cart & Check out
              </div>
            </div>
            <div className="d-flex justify-content-evenly align-items-center shadow py-2 cartStepsSigns borderRadius">
              <div className="fs-1 w-25 text-center">02</div>
              <div className="w-75">
                填寫訂購資料
                <br />
                Shipping & Billing Info
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
        {/* 購物車、付款及運送方式 */}
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
                    <div className="py-4 px-3">
                      {/* 商品圖 */}
                      <Figure className="d-flex align-items-center">
                        <Figure.Image
                          width={150}
                          height={150}
                          alt={item.product_no}
                          src={`${IMAGE_URL}/products/${item.image1}`}
                          className="m-0 cartImg"
                        />
                        {/* 商品資訊 */}
                        <div className="ps-3 cartDetails">
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
                        {/* 加減數量、刪除 */}
                        <div className="w-25 d-flex justify-content-start align-items-center">
                          <button
                            type="button"
                            className="btn btn-secondary border rounded-circle p-0 me-2 countButton"
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
                            className="btn btn-secondary border rounded-circle p-0 ms-2 countButton"
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
                            className="text-center ms-3"
                            onClick={() => cartDelete(item.product_no)}
                          />
                          {/* <i className="fas fa-trash-alt position-absolute trash"></i> */}
                        </div>
                      </Figure>
                    </div>
                  </>
                );
              })}
            </div>
            {/* 付款及送貨方式 */}
            <div className="col-5 borderRadius p-0 ms-4 shadow">
              <div className="p-4 border-bottom text-center">
                <h1>付款及配送方式</h1>
              </div>
              <div className="px-5 py-4 cartAmount">
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-5">商品總金額</div>
                  <div className="col-5 text-end">
                    {sum(mycartDisplay).toLocaleString()}
                  </div>
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
                    {sum(mycartDisplay) > 20000 ? 0 : 120}
                  </div>
                  <div className="col-1"></div>
                </div>
                {sum(mycartDisplay) < 20000 ? (
                  <div className="row">
                    <div className="col-11 text-end fs-6 text-primary">
                      商品消費差NT{' '}
                      {(20000 - sum(mycartDisplay)).toLocaleString()} 即可享滿NT
                      20,000免運優惠
                    </div>
                    <div className="col-1"></div>
                  </div>
                ) : (
                  <div className="row">
                    <div className="col-11 text-end fs-6 text-primary">
                      商品消費滿NT 20,000享免運優惠
                    </div>
                    <div className="col-1"></div>
                  </div>
                )}

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
                    NT{' '}
                    {sum(mycartDisplay) > 20000
                      ? sum(mycartDisplay).toLocaleString()
                      : (sum(mycartDisplay) + 120).toLocaleString()}
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
                <Link to="/product-cart02">
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

export default ProductCart01;
