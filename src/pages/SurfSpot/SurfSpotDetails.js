import React from 'react';
import './surfSpotDetails.scss';

function SurfSpotDetails() {
  return (
    <>
      <div className="container-fluid taiwanMapBgBlack">
        <div className="container d-flex justify-content-center">
          <div className="spotDetailWrap mt-5" style={{ width: '70%' }}>
            <div>風力</div>
            <div>風向</div>
            <div>陣風</div>
            <div>氣溫</div>
            <div>天氣</div>
            <div>UV</div>
            <div>風力</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SurfSpotDetails;
