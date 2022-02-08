import React, { useRef } from 'react';
import SignUp from './SignUp';
import '../../styles/component.scss';

function Modal(props) {
  const { showModal, setshowModal } = props;
  const modalRef = useRef('');
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
          <SignUp />
        </div>
      ) : null}
      ;
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
