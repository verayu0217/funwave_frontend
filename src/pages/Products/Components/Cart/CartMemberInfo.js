// CartMemberInfo.js 內容說明：ProductCart02.js中的訂購人資訊

import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

function CartMemberInfo(props) {
  const {
    order,
    setOrder,
    memberName,
    setMemberName,
    memberPhone,
    setMemberPhone,
    memberAddress,
    setMemberAddress,
    memberSync,
    setMemberSync,
  } = props;

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
              onClick={() => {
                if (memberSync === false) {
                  setMemberSync(true);
                } else {
                  setMemberSync(false);
                }
              }}
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
        <div className="mb-3">
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
    </>
  );
}

export default CartMemberInfo;
