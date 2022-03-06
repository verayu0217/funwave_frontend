import Cards from 'react-credit-cards';
import React, { useState } from 'react';
import './CreditCard.css';
import 'react-credit-cards/es/styles-compiled.css';
import Swal from 'sweetalert2';
import { Next } from 'react-bootstrap/esm/PageItem';

function CreditCard(props) {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');
  const [nextStep, setNextStep] = useState(false);

  function creditCard(e) {
    e.preventDefault();
    if (number === '' || name === '' || expiry === '' || cvc === '') {
      window.alert('信用卡資訊不完整');
    } else {
      window.alert('交易成功，請填寫報名資訊');
      setNumber('');
      setName('');
      setExpiry('');
      setCvc('');
      setNextStep(true);
    }
  }
  return nextStep ? (
    <p className="h3 text-primary">付款完成</p>
  ) : (
    <div className="App row">
      <p className="h3 text-primary text-start">請輸入您的信用卡資訊</p>

      <div className="col-md-12 col-lg-6">
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
        />
      </div>
      <div className="col-md-12 col-lg-5">
        <form>
          <div className="text-start mt-2">
            <label className="align-self-center ">信用卡號: </label>
            <input
              className="cardInput mx-4 my-1"
              type="tel"
              name="number"
              placeholder="Card Number"
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
          </div>
          <div className="text-start">
            <label className="align-self-center ">持卡人姓名:</label>
            <input
              className="cardInput mx-2 my-1"
              type="text"
              name="name"
              required
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
          </div>
          <div className="text-start">
            <label className="align-self-center ">有效期限:</label>
            <input
              className="cardInput mx-4 my-1"
              type="text"
              required
              name="expiry"
              placeholder="MM/YY Expiry"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
          </div>
          <div className="text-start">
            <label className="align-self-center">卡片末三碼:</label>
            <input
              className="cardInput mx-2 my-1"
              type="tel"
              name="cvc"
              required
              placeholder="CVC"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
          </div>
          <button
            className="btn btn-primary ms-auto "
            onClick={creditCard}
            type="submit"
          >
            確認付款
          </button>
        </form>
      </div>
    </div>
  );
}
export default CreditCard;
