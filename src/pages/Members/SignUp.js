import React from 'react';
// import Login from './LogIn';

function SignUp() {
  return (
    <form className="d-flex justify-content-center align-items-center mt-5">
      <div style={{ width: '50%' }}>
        <div className="d-flex justify-content-center">
          <p>Welcome to Join Us !</p>
        </div>
        <label>E-mail</label>
        <input
          type="text"
          placeholder="Enter your email"
          className="form-control "
        />
        <label>姓名</label>
        <input
          type="text"
          placeholder="Enter your account"
          className="form-control"
        />
        <label>密碼</label>
        <input
          type="text"
          placeholder="Enter your password"
          className="form-control"
        />
        <input type="checkbox" name="remember" id="" />
        我同意<span>服務條款</span>與<span>隱私政策</span>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary" style={{ width: '80px' }}>
            註冊
          </button>
        </div>
      </div>
    </form>
  );
}

export default SignUp;
