import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { IMAGE_URL } from '../../utils/config';

function ControlledTabs(props) {
  const [key, setKey] = useState('positive');
  const { pattern, setPattern, surfingBoard, setSurfingBoard } = props;

  return (
    <>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 nav-justified"
      >
        <Tab eventKey="positive" title="正面" className="btnCu">
          <div className="d-flex flex-wrap justify-content-center">
            {pattern.map((v, i) => {
              return (
                <div className="boxCu m-1" key={v.id}>
                  <img
                    alt={v.id}
                    src={`${IMAGE_URL}/customized/${v.pattern}`}
                    className="cover-fit"
                    onClick={() => {
                      setSurfingBoard({
                        ...surfingBoard,
                        frontpattern: v.pattern,
                      });
                    }}
                  />
                </div>
              );
            })}
          </div>
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
                    onClick={() => {
                      setSurfingBoard({
                        ...surfingBoard,
                        backpattern: v.pattern,
                      });
                    }}
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
