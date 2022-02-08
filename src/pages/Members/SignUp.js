import React, { useRef, useEffect, useCallback } from 'react';

import { Link } from 'react-router-dom';

import '../../styles/component.scss';

function SignUp(showModal, setshowModal) {
  const modalRef = React.useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setshowModal(false);
    }
  };
  return (
    <>
      {showModal ? (
        <div
          className=" wrap container-fluid"
          onClick={closeModal}
          ref={modalRef}
        >
          <div className="background col-md-6 col-sm-12">
            <form className="d-flex justify-content-center align-items-center my-3">
              <div style={{ width: '60%' }}>
                <div className="mt-5 text-black fs-2 fw-bold text-center">
                  Welcome to Join Us !
                </div>
                <div className="text-center fw-bold mt-3 signupTitle">
                  註冊會員
                </div>
                <div className="d-flex justify-content-center">
                  <ul className="list-unstyled">
                    <li className="mt-3">
                      <label className="fw-bold">電子信箱</label>
                      <input
                        className="form-control signupInput"
                        type="text"
                        name="email"
                        id=""
                      />
                    </li>
                    <li className="mt-3">
                      <label className="fw-bold">姓名</label>
                      <input
                        className="form-control signupInput"
                        type="text"
                        name="name"
                        id=""
                      />
                    </li>
                    <li className="mt-3">
                      <label className="fw-bold">密碼</label>
                      <input
                        className="form-control signupInput"
                        type="text"
                        name="password"
                        id=""
                      />
                    </li>
                    <li className="d-flex justify-content-center m-4">
                      <input
                        className="form-check-input me-1"
                        type="checkbox"
                        name="agree"
                        id=""
                      />
                      <label className="form-check-label agree">
                        我同意<Link to="/">服務條款</Link>與
                        <Link to="/">隱私政策</Link>
                      </label>
                    </li>
                  </ul>
                </div>

                <div className="d-flex justify-content-center mt-3 mb-5">
                  <button
                    className="btn btn-primary text-white"
                    style={{ width: '280px' }}
                  >
                    註冊
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default SignUp;
