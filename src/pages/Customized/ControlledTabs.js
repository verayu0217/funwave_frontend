import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import axios from 'axios';
import { API_URL, IMAGE_URL } from '../../utils/config';

function ControlledTabs(props) {
  const [key, setKey] = useState('positive');
  const { pattern, setPattern } = props;

  return (
    <>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 nav-justified"
      >
        <Tab eventKey="positive" title="正面" className="btnCu">
          <div className="d-flex flex-wrap">
            {pattern.map((v, i) => {
              return (
                <div className="boxCu m-1" key={v.id}>
                  <img
                    alt={v.id}
                    src={`${IMAGE_URL}/customized/${v.pattern}`}
                    className="cover-fit"
                    // onClick={}
                  />
                </div>
              );
            })}
          </div>
          {/* <img className="cover-fit" src={goodLuck} alt="goodLuck" /> */}
        </Tab>
        <Tab eventKey="negative" title="反面" className="btnCu">
          <div className="d-flex flex-wrap justify-content-center">
            {pattern.map((v, i) => {
              return (
                <div className="boxCu m-1" key={v.id}>
                  <img
                    alt={v.id}
                    src={`${IMAGE_URL}/customized/${v.pattern}`}
                    className="cover-fit"
                  />
                </div>
              );
            })}
          </div>
        </Tab>
      </Tabs>
    </>
  );
}

export default ControlledTabs;
