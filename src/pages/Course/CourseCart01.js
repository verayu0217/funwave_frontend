import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';
import Swal from 'sweetalert2';
import { CgTrash } from 'react-icons/cg';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

function CourseCart01(props) {
  const [payMethod, setPayMethod] = useState({
    choosePay: '',
  });

  // 預約日期調整明天以後才可選
  let today = moment().format('YYYY-MM-DD');
  today = today.split('-');
  today = today[0] + '-' + today[1] + '-' + (Number(today[2]) + 1);

  // 宣告count是上課人數初始1先存進localStorage
  const [count, setCount] = useState(1);
  localStorage.setItem('peopleNum', count);

  // 總金額算好也存進localStorage
  const [amount, setAmount] = useState('');
  useEffect(() => {
    const amount = coursePrice * count;
    setAmount(count * coursePrice);
    // console.log('總計', amount);
    localStorage.setItem('amount', amount);
  }, [count, amount]);

  const {
    step,
    setStep,
    course,
    courseSpot,
    courseTime,
    courseDate,
    setCourseDate,
    coursePrice,
  } = props;

  function nextStep() {
    if (payMethod.choosePay === '') {
      setStep({ ...step, step1: true, step2: '' });
      Swal.fire('請選擇付款方式');
    } else {
      setStep({ ...step, step1: '', step2: true });
    }
  }

  let navigate = useNavigate();

  // 刪除購物車資料並導向上一頁
  let deleteCourse = () => {
    Swal.fire({
      title: '您確定要刪除購物車項目嗎?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '確定',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear('course');
        localStorage.clear('courseSpot');
        localStorage.clear('courseDate');
        localStorage.clear('courseTime');
        localStorage.clear('coursePrice');
        localStorage.clear('amount');
        localStorage.clear('count');
        localStorage.clear('payMethod');
        Swal.fire('Deleted!', '你已刪除課程', 'success');

        // 導回上一頁
        navigate('/course/course-content', { replace: true });
      }
    });
  };

  return (
    <>
      {/* 明細區塊  */}
      <div>
        {/* 明細電腦版樣式*/}
        <div className="courseDetail">
          <p className="h3">衝浪課程</p>
          <table className="table table-borderless border-bottom border-1 border-dark">
            <thead className="bg-light text-center">
              <tr>
                <th scope="col">名稱</th>
                <th scope="col">時段</th>
                <th scope="col">地點</th>
                <th scope="col">單價</th>
                <th scope="col">人數</th>
                <th scope="col">小計</th>
                <th scope="col">預約日期</th>
                <th scope="col">操作</th>
              </tr>
            </thead>

            <tbody className="text-center">
              <tr>
                <td>{course}</td>
                <td>{courseTime}</td>
                <td>{courseSpot}</td>
                <td>{coursePrice}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-secondary border rounded-circle p-0 countButton me-2"
                    onClick={() => {
                      if (count - 1 >= 1) {
                        setCount(count - 1);
                        localStorage.setItem('peopleNum', count - 1);
                      }
                    }}
                  >
                    <AiOutlineMinus
                      size={20}
                      color="#ffffff"
                      className="text-center"
                    />
                  </button>

                  {count}
                  <button
                    type="button"
                    className="btn btn-secondary border rounded-circle p-0 countButton ms-2"
                    onClick={() => {
                      setCount(count + 1);
                      localStorage.setItem('peopleNum', count + 1);
                    }}
                  >
                    <AiOutlinePlus
                      size={20}
                      color="#ffffff"
                      className="text-center"
                    />
                  </button>
                </td>
                <td>{amount}</td>
                <td>
                  <input
                    type="date"
                    min={today}
                    value={courseDate}
                    //修改日期完再存回localStorage
                    onChange={(e) => {
                      setCourseDate(e.target.value);
                      localStorage.setItem(
                        'courseDate',
                        JSON.stringify(e.target.value)
                      );
                    }}
                  ></input>
                </td>
                <td>
                  <CgTrash
                    size={20}
                    className="text-center ms-3"
                    onClick={deleteCourse}
                  />
                  {/* <i className="fas fa-trash-alt" onClick={deleteCourse}></i> */}
                </td>
              </tr>
            </tbody>
          </table>

          {/* 付款方式 */}
          <div className="row d-flex border-bottom border-1 border-dark">
            <div className="col-sm-12 col-md-2 ">
              <p className=" h3 me-3 align-self-center">付款方式</p>
            </div>

            <div className="col-sm-12 col-md-10 ">
              <nav aria-label="..." className=" align-self-center">
                <ul className="pagination pagination-sm">
                  <li className="payItem" aria-current="page">
                    <a
                      id="creditCard"
                      className={
                        payMethod.choosePay === '信用卡'
                          ? 'pay-link-on'
                          : 'pay-link-off'
                      }
                      href="#/"
                      onClick={() => {
                        setPayMethod({ choosePay: '信用卡' });
                        localStorage.setItem(
                          'payMethod',
                          JSON.stringify('信用卡')
                        );
                      }}
                    >
                      信用卡
                    </a>
                  </li>
                  <li className="payItem">
                    <a
                      id="transfor"
                      className={
                        payMethod.choosePay === '匯款'
                          ? 'pay-link-on'
                          : 'pay-link-off'
                      }
                      href="#/"
                      onClick={() => {
                        setPayMethod({ choosePay: '匯款' });
                        localStorage.setItem(
                          'payMethod',
                          JSON.stringify('匯款')
                        );
                      }}
                    >
                      匯款
                    </a>
                  </li>
                  <li className="payItem">
                    <a
                      id="cash"
                      className={
                        payMethod.choosePay === '現金'
                          ? 'pay-link-on'
                          : 'pay-link-off'
                      }
                      href="#/"
                      onClick={() => {
                        setPayMethod({ choosePay: '現金' });
                        localStorage.setItem(
                          'payMethod',
                          JSON.stringify('現金')
                        );
                      }}
                    >
                      現金
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* <總計  */}
          <div className="d-flex justify-content-end">
            <p className="h3">總計 NT {amount}</p>
          </div>

          {/* 上一頁/下一頁按鈕  */}
          <div className="d-flex justify-content-end ">
            <div>
              <Link
                to="/course/course-content"
                className="btn btn-secondary text-white backBtn me-3 mt-3"
              >
                <i className="fas fa-arrow-left text-white"></i>
                回上一頁
              </Link>

              <button
                className="btn btn-primary text-white confirmBtn mt-3"
                onClick={nextStep}
              >
                確認資訊
                <i className="fas fa-arrow-right text-white"></i>
              </button>
            </div>
          </div>
        </div>

        {/* 明細手機版樣式 */}
        <div className="mobile col-9 m-auto">
          <p className="h3">衝浪課程</p>
          <div className="row border  text-center">
            <p>課程名稱:{course}</p>
            <p>預約日期:{courseDate}</p>
            <p>上課地點:{courseSpot}</p>
            <p>上課時段:{courseTime}</p>
            <p>
              人數:{' '}
              <button
                type="button"
                className="btn btn-secondary border rounded-circle p-0 countButton me-2"
                onClick={() => {
                  if (count - 1 >= 1) {
                    setCount(count - 1);
                    localStorage.setItem('peopleNum', count - 1);
                  }
                }}
              >
                <AiOutlineMinus
                  size={20}
                  color="#ffffff"
                  className="text-center"
                />
              </button>{' '}
              {count}{' '}
              <button
                type="button"
                className="btn btn-secondary border rounded-circle p-0 countButton ms-2"
                onClick={() => {
                  setCount(count + 1);
                  localStorage.setItem('peopleNum', count + 1);
                }}
              >
                <AiOutlinePlus
                  size={20}
                  color="#ffffff"
                  className="text-center"
                />
              </button>
            </p>
            <p>單價:NT{coursePrice}</p>
            <i className="fas fa-trash-alt mb-3" onClick={deleteCourse}></i>
          </div>

          {/* <總計  */}
          <div className="d-flex justify-content-end border-bottom">
            <p className="h3">總計 NT {amount}</p>
          </div>

          {/* 付款方式 */}
          <div className="row  d-flex justify-content-center border-1 border-dark ">
            <p className=" h3">付款方式</p>

            <nav aria-label="...">
              <ul className="pagination pagination-sm">
                <li className="payItem " aria-current="page">
                  <a
                    className={
                      payMethod.choosePay === '信用卡'
                        ? 'pay-link-on'
                        : 'pay-link-off'
                    }
                    href="#/"
                    onClick={() => {
                      setPayMethod({ choosePay: '信用卡' });
                      localStorage.setItem(
                        'payMethod',
                        JSON.stringify('信用卡')
                      );
                    }}
                  >
                    信用卡
                  </a>
                </li>
                <li className="payItem">
                  <a
                    className={
                      payMethod.choosePay === '匯款'
                        ? 'pay-link-on'
                        : 'pay-link-off'
                    }
                    href="#/"
                    onClick={() => {
                      setPayMethod({ choosePay: '匯款' });
                      localStorage.setItem('payMethod', JSON.stringify('匯款'));
                    }}
                  >
                    匯款
                  </a>
                </li>
                <li className="payItem">
                  <a
                    className={
                      payMethod.choosePay === '現金'
                        ? 'pay-link-on'
                        : 'pay-link-off'
                    }
                    href="#/"
                    onClick={() => {
                      setPayMethod({ choosePay: '現金' });
                      localStorage.setItem('payMethod', JSON.stringify('現金'));
                    }}
                  >
                    現金
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* 上一頁/下一頁按鈕  */}
          <div className="row mt-5">
            <Link
              to="/course/course-content"
              className="btn btn-secondary text-white backBtn me-2"
            >
              <i className="fas fa-arrow-left text-white"></i>
              回上一頁
            </Link>
            <button
              className="btn btn-primary text-white confirmBtn mt-3"
              onClick={() => {
                if (localStorage.getItem('payMethod') == null) {
                  window.alert('請點選付款方式');
                } else {
                  setStep({ ...step, step1: '', step2: true });
                }
              }}
            >
              確認資訊
              <i className="fas fa-arrow-right text-white"></i>
            </button>
          </div>
        </div>
      </div>

      {/* 參加課程須知 */}
      <div className="row  infoBg m-5">
        <p className="border-bottom border-1 border-dark h3 p-3 ">
          參加課程須知
        </p>
        <div className="col-sm-12 col-lg-6 p-3 py-0">
          <div className="list-item">
            <p>1.您需要充足的體力，上課前一天需有充足睡眠</p>
            <p>2.上課前/中請勿飲酒</p>
            <p>
              3.如果會暈車或暈船，請在上課前30至60分鐘，吃暈車/船藥，避免暈浪
            </p>
            <p>4.如果您有特殊疾病/慢性病 請提早告知教練</p>
            <p>
              5.衝浪課程是在開放海域進行教學，請遵守教練的指導與規定，如無法配合請勿參加
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6 p-3 py-0">
          <div className="list-item">
            <p>6.參與衝浪課程，可自備泳衣、泳褲、防磨衣等適合衝浪活動之衣物</p>
            <p>
              7.海域屬於大自然，如有颱風、突發狀況、浪況過大
              ，教練會立即停止本次教學活動，並另外安排時間上課
            </p>
            <p>
              8.本課程需要在水中基本換氣能力，若您水性不佳，也請提前告知教練
            </p>
            <p>
              9.使用本課程提供之設備，若有不當使用造成毀損，需賠償復原損壞之設備
            </p>
            <p>
              10.參與課程前請記得吃飯，避免因血糖過低而導致身體不適及其他意外產生
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseCart01;
