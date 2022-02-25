import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import { API_URL } from '../../../utils/config';

function GoogleLoginFunwave() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );

  const handleLogin = async (googleData) => {
    console.log(googleData);
    let res = await axios.post(`${API_URL}/auth/login/googlelogin`, {
      body: JSON.stringify({
        token: googleData.tokenID,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    setLoginData(data);
    localStorage.setItem('loginData', JSON.stringify(data));
  };
  // console.log(loginData);

  const handleFailure = (result) => {
    alert(result);
  };
  return (
    <>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="google登入"
        onSuccess={handleLogin}
        onFailure={handleFailure}
        cookiePolicy={'single_host_origin'}
      />
    </>
  );
}

export default GoogleLoginFunwave;
