import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../utils/config';

import './CourseCart.scss';

function CourseCart02(props) {
  const { step, setStep } = props;

  let navigate = useNavigate();

  // 姓名
  const [name, setName] = useState('james');
  // 身份證字號
  const [pid, setId] = useState('j123456789');
  // 性別
  const [sex, setSex] = useState('男生');
  const sexOptions = ['男生', '女生'];

  // 出生日期
  const [bdDay, setBdDay] = useState('');

  // 電話
  const [phone, setPhone] = useState('0912345678');

  // 監護人
  const [guardian, setGuardian] = useState('Mary');

  // 送出資料存進資料庫
  async function handleSubmit(e) {
    e.preventDefault();
    let info = [
      {
        name: name,
        pid: pid,
        sex: sex,
        bdDay: bdDay,
        phone: phone,
        guardian: guardian,
      },
    ];
    // console.log(info);

    // 顯示出localStorage的資料
    let data = [];
    if (!localStorage.getItem('報名資料')) {
      return;
    } else {
      data = [...JSON.parse(localStorage.getItem('報名資料'))];
    }
    // console.log(data);
    // 合併課程報名與個人資料
    let dataInfo = [...data, ...info];
    console.log('here', dataInfo);

    try {
      let response = await axios.post(
        `${API_URL}/course/courseOrder`,
        dataInfo
      );
      console.log('有沒有送訂單', response.data);
    } catch (e) {
      console.error('error', e.response.data);
      // console.error("測試註冊", ERR_MSG[e.response.data.code]);
    }

    window.alert('你已報名完成');
    console.log('yes');
    setStep({ ...step, step2: '', step3: true });
    localStorage.clear('報名資料');
  }
  return (
    <>
      <div className="col-10 m-auto">
        <div className="p-3 infoForm shadow-lg">
          <h1 className="text-center text-secondary">請填寫課程報名資訊</h1>
          <form className="col-8 m-auto" onSubmit={handleSubmit}>
            <div className="py-2 mt-3">
              <label>姓名</label>
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

            <div className="py-2 mt-3">
              <label>身分證字號</label>
              <input
                type="text"
                className="form-control"
                id="pid"
                placeholder="身分證字號"
                name="pid"
                value={pid}
                onChange={(e) => {
                  setId(e.target.value);
                }}
                required
              />
            </div>

            <div className="d-flex align-items-center py-2 mt-3">
              <label className="p-2 ">性別:</label>
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

            <div className="py-2">
              <label>出生年月日</label>
              <input
                type="date"
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
            </div>

            <div className="py-2">
              <label>電話</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="電話"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                required
              />
            </div>
            <div className="py-2">
              <label>監護人</label>
              <input
                type="text"
                className="form-control"
                id="guardian"
                placeholder="監護人姓名"
                value={guardian}
                onChange={(e) => {
                  setGuardian(e.target.value);
                }}
                required
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
                // 加這句雖然跳轉到第三頁但會無法送資料到後端
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
