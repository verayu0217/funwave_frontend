import axios from 'axios';
import { useState } from 'react';
import { API_URL } from '../../utils/config';

import './CourseCart.scss';

function CourseCart02(props) {
  const { step, setStep } = props;

  const [name, setName] = useState('James');
  // const [pid, setId] = useState('J122345678');
  const [email, setEmail] = useState('test@gmail.com');
  const [sex, setSex] = useState('先生');
  const sexOptions = ['先生', '小姐'];
  // const [bdDay, setBdDay] = useState('');
  const [note, setNote] = useState('');
  const [phone, setPhone] = useState('0933-456678');

  // 送出資料存進資料庫
  async function handleSubmit(e) {
    e.preventDefault();
    let info = [
      {
        name: name,
        // pid: pid,
        email: email,
        sex: sex,
        note: note,
        // bdDay: bdDay,
        phone: phone,
      },
    ];
    // 個人資料不要存進localStorage
    // localStorage.setItem('name', JSON.stringify(name));
    // localStorage.setItem('pid', JSON.stringify(pid));
    // localStorage.setItem('sex', JSON.stringify(sex));
    // localStorage.setItem('birthday', JSON.stringify(bdDay));
    // localStorage.setItem('phoneNum', JSON.stringify(phone));

    let courseOrder = [
      {
        course: JSON.parse(localStorage.getItem('course')),
        courseTime: JSON.parse(localStorage.getItem('courseTime')),
        courseSpot: JSON.parse(localStorage.getItem('courseSpot')),
        courseDate: JSON.parse(localStorage.getItem('courseDate')),
        coursePrice: localStorage.getItem('coursePrice'),
        amount: localStorage.getItem('amount'),
        peopleNum: localStorage.getItem('peopleNum'),
        payMethod: JSON.parse(localStorage.getItem('payMethod')),
      },
      ...info,
    ];
    console.log(courseOrder);

    //把課程資料撈出跟個人資料一起存進資料庫
    try {
      let response = await axios.post(
        `${API_URL}/course/courseOrder`,
        courseOrder
      );
      console.log('有沒有送訂單', response.data);
    } catch (e) {
      console.error('error', e.response.data);
      // console.error("測試註冊", ERR_MSG[e.response.data.code]);
    }

    //TODO:報名完要清除暫存 alert可以拿掉
    window.alert('你已報名完成');
    localStorage.clear('course');
    localStorage.clear('courseSpot');
    localStorage.clear('courseDate');
    localStorage.clear('courseTime');
    localStorage.clear('coursePrice');
    localStorage.clear('amount');
    localStorage.clear('count');
    localStorage.clear('payMethod');
    setStep({ ...step, step2: '', step3: true });
  }
  return (
    <>
      <div className="col-10 m-auto">
        <div className="p-3 infoForm shadow-lg">
          <h1 className="text-center text-secondary">請填寫課程報名資訊</h1>
          <form className="col-8 m-auto" onSubmit={handleSubmit}>
            <div className="py-2 mt-3">
              <label>* 姓名</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="姓名"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>

            {/* <div className="py-2 mt-3">
              <label>身分證字號</label>
              <input
                type="text"
                className="form-control"
                id="pid"
                placeholder="身分證字號(第一個英文字母需大寫)"
                pattern="^[A-Z]\d{9}$"
                name="pid"
                value={pid}
                onChange={(e) => {
                  setId(e.target.value);
                }}
                required
              />
            </div> */}

            <div className="d-flex align-items-center py-2 mt-3">
              <label className="p-2 ">* 性別:</label>
              {sexOptions.map((v, i) => {
                return (
                  <div key={i}>
                    <div className="form-check form-check-inline ">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="1"
                        id="1"
                        value={v}
                        checked={v === sex}
                        onChange={(e) => {
                          setSex(e.target.value);
                        }}
                        required
                      />
                      <label className="form-check-label" htmlFor={v}>
                        {v}
                      </label>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="py-2 mt-3">
              <label>* 信箱</label>
              <input
                className="form-control"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>

            {/* <div className="py-2">
              <label>出生年月日</label>
              <input
                type="date"
                minLength="1900-01-01"
                maxLength="2016-01-01"
                className="form-control"
                id="bdDay"
                placeholder="出生年月日"
                name="bdDay"
                value={bdDay}
                onChange={(e) => {
                  setBdDay(e.target.value);
                }}
                required
              />
            </div> */}

            <div className="py-2">
              <label>* 電話</label>
              <input
                maxlength="11"
                pattern="09\d{2}-\d{6}"
                type="text"
                className="form-control"
                id="phone"
                placeholder="手機號碼(格式:09xx-xxxxxx)"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                required
              />
            </div>
            <div className="py-2">
              <label>備註</label>
              <textarea
                type="textarea"
                className="form-control"
                id=""
                value={note}
                onChange={(e) => {
                  setNote(e.target.value);
                }}
              />
            </div>

            <div className="">
              <button
                className="btn btn-secondary text-white mb-3 sendFormBtn"
                onClick={() => {
                  setStep({ ...step, step1: true, step2: '' });
                }}
              >
                返回，修改訂單
              </button>
              <button
                type="submit"
                className="btn btn-primary text-white mb-3 sendFormBtn"
                // TODO:加這句雖然跳轉到第三頁但會無法送資料到後端
                // onClick={() => {
                //   setStep({ ...step, step2: '', step3: true });
                // }}
              >
                送出資料，去付款
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CourseCart02;
