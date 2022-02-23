import axios from 'axios';
import { useState } from 'react';
import { API_URL } from '../../utils/config';

import './CourseCart.scss';

function CourseCart02(props) {
  const { step, setStep } = props;

  const [name, setName] = useState('James');
  const [pid, setId] = useState('J122345678');
  const [sex, setSex] = useState('男生');
  const sexOptions = ['男生', '女生'];
  const [bdDay, setBdDay] = useState('');
  const [phone, setPhone] = useState('0933-456678');

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
      },
    ];
    // console.log(info);

    //TODO:要把課程資料撈出跟個人資料一起
    // 應該是在這頁處理拿出來的localStorage資料再存回去?
    // 才可以提交到後端吧 還是把資料都放在父層 這邊解構?

    // 存進資料庫
    // try {
    //   let response = await axios.post(
    //     `${API_URL}/course/courseOrder`,
    //     dataInfo
    //   );
    //   console.log('有沒有送訂單', response.data);
    // } catch (e) {
    //   console.error('error', e.response.data);
    //   // console.error("測試註冊", ERR_MSG[e.response.data.code]);
    // }

    //TODO:alert換一下樣式
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
                placeholder="身分證字號(第一個英文字母需大寫)"
                pattern="^[A-Z]\d{9}$"
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
                min="1900-01-01"
                max="2016-01-01"
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
