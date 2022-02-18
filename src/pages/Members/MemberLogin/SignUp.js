import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../../utils/config';
import { ERR_MSG } from '../../../utils/error';
import 'animate.css';
import './memberLogin.scss';

function SignUp() {
  const [close, setClose] = useState('fas fa-eye-slash');
  const [type, setType] = useState('password');
  const [member, setMember] = useState({
    email: '',
    name: '',
    password: '',
  });
  function handleChange(e) {
    setMember({ ...member, [e.target.name]: e.target.value });
  }
  async function signUpSubmit(e) {
    e.preventDefault();
    try {
      let response = await axios.post(`${API_URL}/auth/register`, member);
      console.log(response.data);
    } catch (e) {
      // console.error('error', e.response.data);
      console.error(ERR_MSG[e.response.data.code]);
    }
  }
  return (
    <>
      <form
        className="d-flex justify-content-center align-items-center"
        // onSubmit={signUpSubmit}
      >
        <div style={{ width: '60%' }}>
          <h4 className="h1 text-black fw-bold text-center">
            Welcome to Join Us !
          </h4>
          <div className="text-center fw-bold mt-3 signupTitle">註冊會員</div>
          <div className="d-flex justify-content-center">
            <ul className="list-unstyled">
              <li className="mt-3">
                <label className="fw-bold">電子信箱</label>
                <input
                  className="form-control signupInput"
                  type="email"
                  name="email"
                  id="email"
                  value={member.email}
                  onChange={handleChange}
                  // required
                />
              </li>
              <li className="mt-3">
                <label className="fw-bold">姓名</label>
                <input
                  className="form-control signupInput"
                  type="text"
                  name="name"
                  id="name"
                  value={member.name}
                  onChange={handleChange}
                  // required
                />
              </li>
              <li className="mt-3">
                <label className="fw-bold">密碼</label>
                <input
                  className="form-control signupInput"
                  type={type}
                  name="password"
                  id=""
                  value={member.password}
                  onChange={handleChange}
                  // required
                />
                <div className="fasEye">
                  <i
                    className={`signupEye mt-md-3 ml-2 ${close}`}
                    onClick={() => {
                      if (type === 'password') {
                        setType('text');
                        setClose('fas fa-eye');
                      } else {
                        setType('password');
                        setClose('fas fa-eye-slash');
                      }
                    }}
                  ></i>
                </div>
              </li>
              <li className="d-flex justify-content-center m-4">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  name="agree"
                  id="agree"
                  value={member.agree}
                  // required
                />
                <label className="form-check-label agreeSignup">
                  我同意<Link to="/">服務條款</Link>與
                  <Link to="/">隱私政策</Link>
                </label>
              </li>
            </ul>
          </div>

          <div className="d-flex justify-content-center mt-3 mb-4">
            <button
              className="btn btn-primary text-white"
              style={{ width: '280px' }}
              // type="submit"
              onClick={signUpSubmit}
            >
              註冊
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUp;
