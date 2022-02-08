import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/component.scss';

function SignUp(showModal, setshowModal) {
  return (
    <>
      {showModal ? (
        <div className="background">
          <form className="d-flex justify-content-center align-items-centermt my-3">
            <div style={{ width: '90%' }}>
              <div className="d-flex justify-content-center">
                <p className="title fs-1 fw-bold">Welcome to Join Us !</p>
              </div>
              <div className="m-5">
                <label>E-mail</label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="form-control "
                />
              </div>
              <div className="m-5">
                <label>姓名</label>
                <input
                  type="text"
                  placeholder="Enter your account"
                  className="form-control"
                />
              </div>
              <div className="m-5">
                <label>密碼</label>
                <input
                  type="text"
                  placeholder="Enter your password"
                  className="form-control"
                />
              </div>
              <div className="m-5">
                <label
                  className="form-check-label"
                  type="checkbox"
                  name="remember"
                  id=""
                />
                我同意<span>服務條款</span>與<span>隱私政策</span>
              </div>

              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-info text-white"
                  style={{ width: '80px' }}
                >
                  註冊
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
}

export default SignUp;
