// CartReceiverInfo.js 內容說明：ProductCart02.js中的收件人資訊

import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

function CartReceiverInfo(props) {
  const { order, setOrder, receiverSync, setReceiverSync } = props;

  // 表單中的onchange事件 (限表單元素(狀態order)內的欄位使用)
  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* 收件人資訊 */}
      <div className="px-5 py-4 border-top">
        <div className="d-flex justify-content-between">
          <h3>
            收件人資訊{order.receiver}
            {order.receiver_phone}
          </h3>
          <div className="form-check">
            <input
              className="form-check-input mt-2"
              type="checkbox"
              value=""
              id="check"
              onClick={() => {
                if (receiverSync === false) {
                  setReceiverSync(true);
                } else {
                  setReceiverSync(false);
                }
              }}
            />
            <label className="form-check-label mt-2 fs-6" htmlFor="check">
              同訂購人資訊
            </label>
          </div>
        </div>

        {/* 收件人姓名 */}
        <Form.Group controlId="validationCustomUsername" className="mb-3">
          <Form.Label>姓名</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="請輸入姓名"
              aria-describedby="inputReceiver"
              name="receiver"
              value={order.receiver}
              required
              onChange={handleChange}
            />
          </InputGroup>
        </Form.Group>

        {/* 收件人手機號碼 */}
        <Form.Group controlId="validationCustomUsername" className="mb-3">
          {/* 待驗證號碼跟長度！！！！！！！ */}
          <Form.Label>手機號碼</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="請輸入手機號碼"
              aria-describedby="inputReceiverPhone"
              name="receiver_phone"
              value={order.receiver_phone}
              required
              onChange={handleChange}
            />
          </InputGroup>
        </Form.Group>
      </div>
    </>
  );
}

export default CartReceiverInfo;
