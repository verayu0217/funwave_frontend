// CartShipping.js 內容說明：ProductCart02.js中的配送資訊

import React, { useState, useEffect } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

function CartShipping(props) {
  const {
    order,
    setOrder,
    delivery,
    setDelivery,
    addressSync,
    setAddressSync,
  } = props;

  // "便利商店取貨"的縣市儲存為狀態，僅用於此子元件
  const [convenientStoreCounty, setConvenientStoreCounty] =
    useState('請選擇縣市');
  // "便利商店取貨"的門市儲存為狀態，僅用於此子元件
  const [convenientStore, setConvenientStore] = useState('請選擇縣市');

  // 表單中的onchange事件 (限order物件內的欄位)
  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  // 縣市
  const counties = [
    '請選擇縣市',
    '台北市',
    '新北市',
    '桃園市',
    '台中市',
    '台南市',
    '高雄市',
    '基隆市',
    '新竹市',
    '新竹縣',
    '彰化縣',
    '苗栗縣',
    '南投縣',
    '雲林縣',
    '嘉義市',
    '嘉義縣',
    '屏東縣',
    '台東縣',
    '花蓮縣',
    '宜蘭縣',
  ];

  // function 輸入縣市會產出對應超商的陣列
  const countiesToConvenientStore = (chosenCounty) => {
    let a = countiesConvenientStore.filter(
      (item) => item.county === chosenCounty
    );
    return a[0].convenientStore;
  };

  console.log('convenientStoreCounty', convenientStoreCounty);
  console.log('convenientStore', convenientStore);

  return (
    <>
      <div className="px-5 py-4 border-top">
        <div className="d-flex justify-content-between">
          <h3>配送資訊{order.address}</h3>
          {delivery === '宅配到府' ? (
            <div className="form-check">
              <input
                className="form-check-input mt-2"
                type="checkbox"
                value=""
                id="check"
                onClick={() => {
                  if (addressSync === false) {
                    setAddressSync(true);
                  } else {
                    setAddressSync(false);
                  }
                }}
              />
              <label className="form-check-label mt-2 fs-6" htmlFor="check">
                同訂購人地址
              </label>
            </div>
          ) : (
            ''
          )}
        </div>
        {/* 依據運送方式顯現地址or收件超商門市 */}
        {delivery === '宅配到府' ? (
          <div className="mb-3">
            <Form.Group controlId="validationCustom03">
              <Form.Label>詳細地址</Form.Label>
              <Form.Control
                type="text"
                placeholder="請輸入地址"
                name="address"
                value={order.address}
                required
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                請填寫詳細地址
              </Form.Control.Feedback>
            </Form.Group>
          </div>
        ) : (
          <div className="row mb-3">
            <div className="col-4">
              <Form.Label>縣市</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={convenientStoreCounty}
                onChange={(e) => {
                  setConvenientStoreCounty(e.target.value);
                }}
              >
                {counties.map((x, i) => (
                  <option value={x} key={i}>
                    {x}
                  </option>
                ))}
              </Form.Select>
            </div>
            <div className="col-8">
              <Form.Label>
                超商門市{countiesToConvenientStore(convenientStoreCounty)}
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={convenientStore}
                onChange={(e) => {
                  setConvenientStore(e.target.value);
                }}
              >
                {countiesToConvenientStore(convenientStoreCounty).map(
                  (x, i) => (
                    <option value={x} key={i}>
                      {x}
                    </option>
                  )
                )}
                {/* <option>請選擇門市</option>
                <option
                  value="1"
                  name="convenient_store"
                  onChange={handleChange}
                >
                  台北門市
                </option>
                <option
                  value="2"
                  name="convenient_store"
                  onChange={handleChange}
                >
                  新北門市
                </option>
                <option
                  value="3"
                  name="convenient_store"
                  onChange={handleChange}
                >
                  桃園門市
                </option>
                <option
                  value="4"
                  name="convenient_store"
                  onChange={handleChange}
                >
                  台中門市
                </option>
                <option
                  value="5"
                  name="convenient_store"
                  onChange={handleChange}
                >
                  台南門市
                </option> */}
              </Form.Select>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CartShipping;
