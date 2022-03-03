// CartMemberInfo.js 內容說明：ProductCart02.js中的訂購人資訊

import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

function CartMemberInfo(props) {
  const {
    order,
    setOrder,
    memberName,
    setMemberName,
    memberEmail,
    setMemberEmail,
    memberPhone,
    setMemberPhone,
    memberAddress,
    setMemberAddress,
  } = props;

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

  return (
    <>
      {/* 訂購人資訊 */}
      <div className="px-5 py-4">
        <div className="d-flex justify-content-between">
          <h3>訂購人資訊</h3>
          <div className="form-check">
            <input
              className="form-check-input mt-2"
              type="checkbox"
              value=""
              id="check"
            />
            <label className="form-check-label mt-2 fs-6" htmlFor="check">
              同步更新我的會員資料
            </label>
          </div>
        </div>

        {/* 訂購人姓名 */}
        <Form.Group controlId="validationCustomUsername" className="mb-3">
          <Form.Label>姓名</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="請輸入姓名"
              aria-describedby="inputMemberName"
              name="memberName"
              value={memberName}
              required
              onChange={(e) => {
                setMemberName(e.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              請填寫訂購人姓名
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        {/* 訂購人信箱 */}
        <Form.Group controlId="validationCustomUsername" className="mb-3">
          <Form.Label>E-mail (帳號)</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="email"
              placeholder="請輸入E-mail"
              aria-describedby="inputEmail"
              name="memberEmail"
              value={memberEmail}
              required
              onChange={(e) => {
                setMemberEmail(e.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              請填入正確格式的訂購人E-mail
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        {/* 訂購人手機號碼 */}
        <Form.Group controlId="validationCustomUsername" className="mb-3">
          {/* 要驗證號碼跟長度！！！！！！！ */}
          <Form.Label>手機號碼</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="請輸入手機號碼"
              aria-describedby="inputPhone"
              name="memberPhone"
              value={memberPhone}
              required
              onChange={(e) => {
                setMemberPhone(e.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              請填寫訂購人手機號碼
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        {/* 訂購人地址 */}
        <div className="row mb-3">
          <div className="col-4">
            <Form.Label>縣市</Form.Label>
            <Form.Select aria-label="select">
              {counties.map((x, i) => (
                <option value={x} key={i}>
                  {x}
                </option>
              ))}
            </Form.Select>
          </div>
          <div className="col-8">
            <Form.Group controlId="validationCustom03">
              <Form.Label>詳細地址</Form.Label>
              <Form.Control
                type="text"
                placeholder="請輸入地址"
                name="memberAddress"
                value={memberAddress}
                required
                onChange={(e) => {
                  setMemberAddress(e.target.value);
                }}
              />
              <Form.Control.Feedback type="invalid">
                請填寫訂購人詳細地址
              </Form.Control.Feedback>
            </Form.Group>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartMemberInfo;
