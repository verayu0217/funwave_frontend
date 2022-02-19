import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import goodLuck from '../../data/images/customize/surfboardpicture/goodLuck.png';
function ControlledTabs() {
  const [key, setKey] = useState('positive');

  return (
    <>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 nav-justified"
      >
        <Tab eventKey="positive" title="正面" className="btnCu">
          <div className="boxCu">
            <img className="cover-fit" src={goodLuck} alt="goodLuck" />
          </div>
        </Tab>
        <Tab eventKey="negative" title="反面" className="btnCu">
          <div className="boxCu">
            <img className="cover-fit" src={goodLuck} alt="goodLuck" />
          </div>
        </Tab>
      </Tabs>
    </>
  );
}

export default ControlledTabs;
