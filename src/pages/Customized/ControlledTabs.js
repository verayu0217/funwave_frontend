import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import goodLuck from '../../data/images/customize/surfboardpicture/goodLuck.png';
function ControlledTabs() {
  const [key, setKey] = useState('正面');

  return (
    <>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="正面">
          <div className="boxCu">
            <img className="cover-fit" src={goodLuck} alt="goodLuck" />
          </div>
        </Tab>
        <Tab eventKey="profile" title="反面">
          <div className="boxCu">
            <img className="cover-fit" src={goodLuck} alt="goodLuck" />
          </div>
        </Tab>
      </Tabs>
    </>
  );
}

export default ControlledTabs;
