import React, { useRef } from 'react';
import SignUp from './SignUp';
import '../../styles/component.scss';
import { ImCross } from 'react-icons/im';

function Modal(props) {
  const { showModal, setshowModal } = props;
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setshowModal(false);
    }
  };
  return (
    <>
      {showModal ? (
        <div
          className=" wrap container-fluid animate__fadeIn animate__slow	20s animate__delay-2s	2s"
          onClick={closeModal}
          ref={modalRef}
        >
          <div className="background col-md-6 col-sm-12">
            <div
              className="d-flex justify-content-end mt-4 pe-5 pt-4"
              onClick={() => {
                setshowModal((prev) => !prev);
              }}
            >
              <ImCross className="cross " />
            </div>

            <SignUp />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal;

// (<>{showModal ? <div
//   className=" wrap container-fluid animate__fadeIn animate__slow	20s animate__delay-2s	2s"
//   onClick={closeModal}
//   ref={modalRef}
// >
// <div/> : null}</>);
