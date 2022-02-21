import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../utils/config';

// 大標題綠色波浪
import greenTitle from '../../data/images/greenTitle.svg';

import './CourseCart.scss';

function CourseCart02() {
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
      console.log('有沒有東西', response.data);
    } catch (e) {
      console.error('error', e.response.data);
      // console.error("測試註冊", ERR_MSG[e.response.data.code]);
    }
    navigate('/course/course-cart03', { replace: true });
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-10 col-lg-10 m-auto">
            {/* 標題 */}
            <div className="text-secondary fw-bold my-5 h1 text-center ">
              <img
                src={greenTitle}
                className="greenTitle me-3"
                alt="greenTitle"
                height="24px"
                weight="64px"
              />
              衝浪課程購物車
            </div>

            {/* 購物車三步驟 */}
            <header className="m-5 py-2 px-5">
              <div className="d-flex justify-content-evenly">
                <div className="d-flex align-items-center shadow py-2 cartStepsSigns borderRadius">
                  <div className="fs-1 w-25 text-center">01</div>
                  <div className="w-75 text-black">
                    確認課程明細及選擇付款方式
                    <br />
                    Cart & Check out
                  </div>
                </div>
                <div className="d-flex justify-content-evenly align-items-center shadow py-2 cartStepsSigns borderRadius">
                  <div className="fs-1 w-25 text-center">02</div>
                  <div className="w-75">
                    填寫個人資料
                    <br />
                    Cart & Check out
                  </div>
                </div>
                <div className="d-flex justify-content-evenly align-items-center shadow py-2 cartStepsSigns borderRadius">
                  <div className="fs-1 w-25 text-center">03</div>
                  <div className="w-75">
                    報名完成！
                    <br />
                    Order completed
                  </div>
                </div>
              </div>
            </header>
            <div className="col-10 m-auto">
              <div className="p-3 infoForm shadow-lg">
                <h1 className="text-center text-secondary">
                  請填寫課程報名資訊
                </h1>
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
                      type="submit"
                      className="btn btn-primary text-white mb-3 sendFormBtn"
                    >
                      送出資料
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseCart02;
