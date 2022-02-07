import React from 'react';
import logo from '../../data/images/FunwaveLogo-black2.png';

import '../../styles/component.scss';

function Login(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7 col-sm-12 p-0 leftSignUp">
            <div className="demo vh-100 d-flex align-items-center">
              <div className="ms-5">
                <h3 className="text-white fw-bold fs-5">Welcome to</h3>
                <p className="text-white fw-bold fs-1 mb-0">FUNWAVE</p>
                <p className="text-white fw-light fs-5 mb-5">
                  Have Fun Wave in Simple Life.
                </p>
                <button className="btn btn-info text-white p-3 fs-4 signupBtn">
                  註冊
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-sm-12 vh-100 d-flex align-items-center justify-content-center">
            <img src={logo} alt="funwave" className="logo m-3" />
            <ul className="list-unstyled">
              <li>
                <div className="fs-2 loginTitle">LOGIN</div>
              </li>
              <li>
                <input
                  className="mt-3 p-3"
                  type="text"
                  name="email"
                  id=""
                  placeholder="Email"
                />
              </li>
              <li>
                <input
                  className="mt-3 p-3"
                  type="text"
                  name="password"
                  id=""
                  placeholder="Password"
                />
                <div className="forgot-password d-flex justify-content-end me-3">
                  <a>忘記密碼? </a>
                </div>
              </li>
              <li className="mt-3 d-flex justify-content-center">
                <button className="btn btn-info text-white fs-4 loginBtn">
                  登入
                </button>
              </li>
              <li className="mt-2 me-3 d-flex justify-content-end">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  name="remember"
                  id=""
                />
                <label className="form-check-label">記住我</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
