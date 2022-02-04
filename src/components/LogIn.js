import React from 'react';
import logo from '../data/images/FunwaveLogo-black2.png';

import '../styles/global.scss';

function Login() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7 col-sm-12 p-0 leftSignUp vh-100">
            <div className="demo vh-100 d-flex align-items-center">
              <div className="ms-5">
                <h3 className="text-white fw-bold fs-5">Welcome to</h3>
                <p className="text-white fw-bold fs-1 mb-0">FUNWAVE</p>
                <p className="text-white fw-light fs-5 mb-5">
                  Have Fun Wave in Simple Life.
                </p>
                <button className="btn btn-info text-white p-3 signupBtn fs-4">
                  註冊
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-sm-12">
            <img src={logo} alt="funwave" />
            <div>
              <p>LOGIN</p>
              <input type="text" name="email" id="" placeholder="Email" />
              <input type="text" name="password" id="" placeholder="Password" />
              <button>登入</button>
              <input type="checkbox" name="remember" id="" />
              記住我
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
