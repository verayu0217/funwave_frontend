import React from 'react';

function Login() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-7 ">
            <p>welcme to</p>
            <p>FUNWAVE</p>
            <button className="">註冊</button>
          </div>
          <div className="col-5">
            <img src="../data/images/FunwaveLogo-black 2.png" alt="funwave" />
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
