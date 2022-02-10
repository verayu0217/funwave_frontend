import React from 'react';
import heroSection from '../../data/images/customizedSection.png';
import './Custom.scss';
function Customized() {
  return (
    <>
      <div className="container-fluid">
        <img
          src={heroSection}
          alt="客製化
        "
        />
      </div>
    </>
  );
}

export default Customized;
