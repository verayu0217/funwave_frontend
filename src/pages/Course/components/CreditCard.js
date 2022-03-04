import Cards from 'react-credit-cards';
import React, { useState } from 'react';
import './CreditCard.css';
import 'react-credit-cards/es/styles-compiled.css';

function CreditCard() {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');
  return (
    <div className="App row ">
      <div className="col-md-12 col-lg-6">
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
          className=""
        />
      </div>
      <div className="col-md-12 col-lg-5 ">
        <form className="">
          <div>
            <label>信用卡號:</label>
            <input
              className="cardInput m-1 "
              type="tel"
              name="number"
              placeholder="Card Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
          </div>
          <div>
            <label>持卡人姓名:</label>
            <input
              className="cardInput m-1"
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
          </div>
          <div>
            <label>有效日期:</label>
            <input
              className="cardInput m-1"
              type="text"
              name="expiry"
              placeholder="MM/YY Expiry"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
          </div>
          <div>
            <label>卡片末三碼:</label>
            <input
              className="cardInput m-1"
              type="tel"
              name="cvc"
              placeholder="CVC"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
export default CreditCard;
