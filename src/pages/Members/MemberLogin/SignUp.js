import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import 'animate.css';
import './memberLogin.scss';

function SignUp() {
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
    let response = await axios.post(`${API_URL}/auth/register`, member);
    console.log(response.data);
  }
  return (
    <>
      <form className="d-flex justify-content-center align-items-center">
        <div style={{ width: '60%' }}>
          <div className="text-black fs-2 fw-bold text-center">
            Welcome to Join Us !
          </div>
          <div className="text-center fw-bold mt-3 signupTitle">註冊會員</div>
          <div className="d-flex justify-content-center">
            <ul className="list-unstyled">
              <li className="mt-3">
                <label className="fw-bold">電子信箱</label>
                <input
                  className="form-control signupInput"
                  type="text"
                  name="email"
                  id="email"
                  value={member.email}
                  onChange={handleChange}
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
                />
              </li>
              <li className="mt-3">
                <label className="fw-bold">密碼</label>
                <input
                  className="form-control signupInput"
                  type="text"
                  name="password"
                  id=""
                  value={member.password}
                  onChange={handleChange}
                />
              </li>
              <li className="d-flex justify-content-center m-4">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  name="agree"
                  id="agree"
                />
                <label className="form-check-label agree">
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
