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
          <div className="background col-md-6 col-sm-4">
            <form className="d-flex justify-content-center align-items-center my-3">
              <div style={{ width: '60%' }}>
                <div className="d-flex justify-content-center">
                  <p className="title fs-2 fw-bold">Welcome to Join Us !</p>
                </div>
                <div className="d-flex justify-content-center">
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <label className="me-3">信箱</label>
                      <input
                        className="form-control mt-3 p-3 signupInput"
                        type="text"
                        name="email"
                        id=""
                        placeholder="Email"
                      />
                    </li>
                    <li className="mb-3">
                      <label className="me-3">姓名</label>
                      <input
                        className="form-control mt-3 p-3 signupInput"
                        type="text"
                        name="name"
                        id=""
                        placeholder="name"
                      />
                    </li>
                    <li className="mb-3">
                      <label className="me-3">密碼</label>
                      <input
                        className="form-control mt-3 p-3 signupInput"
                        type="text"
                        name="password"
                        id=""
                        placeholder="password"
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

                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-info text-white p-2"
                    style={{ width: '80px' }}
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
