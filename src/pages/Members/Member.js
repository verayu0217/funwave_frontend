import React, { useState, useEffect } from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import axios from 'axios';
import { API_URL } from '../../utils/config';

import './Member.scss';

import MemberInfo from './MemberInfo';
import MemberOrder from './MemberOrder';
import MemberOrderDetails from './MemberOrderDetails';
import MemberPoint from './MemberPoint';
import MemberShoppingGold from './MemberShoppingGold';
import MemberCoupon from './MemberCoupon';
import MemberMessage from './MemberMessage';
import MemberCollect from './MemberCollect';
import MemberCourseOrder from './MemberCourseOrder';
import { useAuth } from '../../context/auth';

function Member() {
  const { auth, setAuth } = useAuth();
  const { member, setMember } = useState();

  let getAuth = async () => {
    let response = await axios.get(`${API_URL}/member/${auth.member_id}`);
  };
  getAuth();
  useEffect(() => {}, []);
  return (
    <>
      {auth ? (
        <div className="memberWrap">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className="container tabWrapMember">
              <Col className="tabBarMember sticky-top" lg={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link className="fs-24Member linkWidthMember my-5">
                      您好,
                      <br />
                      {auth.member_name}
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="fs-24Member linkWidthMember mb-4"
                      eventKey="first"
                    >
                      會員資料
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="fs-24Member linkWidthMember mb-4"
                      eventKey="second"
                    >
                      會員點數
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="fs-24Member linkWidthMember mb-4"
                      eventKey="third"
                    >
                      訂單查詢
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="fs-24Member linkWidthMember mb-4"
                      eventKey="eighth"
                    >
                      課程查詢
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="fs-24Member linkWidthMember mb-4"
                      eventKey="fourth"
                    >
                      我的購物金
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="fs-24Member linkWidthMember mb-4"
                      eventKey="fifth"
                    >
                      我的優惠券
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="fs-24Member linkWidthMember mb-4"
                      eventKey="sixth"
                    >
                      我的收藏
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="fs-24Member linkWidthMember mb-4"
                      eventKey="seventh"
                    >
                      留言
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col className="tabContentMember" lg={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <MemberInfo />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <MemberPoint />
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <MemberOrder />
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <MemberShoppingGold />
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth">
                    <MemberCoupon />
                  </Tab.Pane>
                  <Tab.Pane eventKey="sixth">
                    <MemberCollect />
                  </Tab.Pane>
                  <Tab.Pane eventKey="seventh">
                    <MemberMessage />
                  </Tab.Pane>
                  <Tab.Pane eventKey="eighth">
                    <MemberCourseOrder />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      ) : (
        ''
      )}
    </>
  );
}
export default Member;
