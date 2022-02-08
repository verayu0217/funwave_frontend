import React from 'react';
import SignUp from './SignUp';
import '../../styles/component.scss';

function Modal(props) {
  const { showModal, setshowModal } = props;

  return <>{showModal ? <SignUp /> : null}</>;
}

export default Modal;
