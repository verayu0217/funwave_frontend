import React, { useState, useEffect } from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { Link, Navigate } from 'react-router-dom';

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

// footer用
import FooterMember from '../../components/FooterMember';

function Member() {
  const { auth, setAuth } = useAuth();
  const { member, setMember } = useState();
  const [goTo, setGoTo] = useState(false);
  const [name, setName] = useState('');

  setInterval(() => {
    if (name !== localStorage.getItem('name')) {
      setName(localStorage.getItem('name'));
    }
  }, 500);

  let getAuth = async () => {
    let response = await axios.get(`${API_URL}/member/${auth.member_id}`);
  };
  getAuth();
  useEffect(() => {}, []);
  return (
    <>
      {auth ? (
        <div className="memberWrap mb-5">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className="container tabWrapMember">
              <Col className="tabBarMember" lg={3} md={3}>
                <Nav variant="pills" className="flex-column stickyMember">
                  <Nav.Item>
                    <Nav.Link className="fs-24Member linkWidthMember my-5">
                      您好,
                      <br />
                      {name}
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
                  {/* <Nav.Item>
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
                  </Nav.Item> */}
                  {/* <Nav.Item>
                    <Nav.Link
                      className="fs-24Member linkWidthMember mb-4"
                      eventKey="sixth"
                      as={Link}
                      to="/member/member-order"
                    >
                      我的收藏
                    </Nav.Link>
                  </Nav.Item> */}
                  {/* <Nav.Item>
                    <Nav.Link
                      className="fs-24Member linkWidthMember mb-4"
                      eventKey="seventh"
                    >
                      留言
                    </Nav.Link>
                  </Nav.Item> */}
                </Nav>
              </Col>
              <Col
                className="tabBarMember tabBarPhoneMember fixed-bottom"
                lg={12}
              >
                <Nav justify className="row">
                  <Nav.Item className="col-2">
                    <Nav.Link
                      className="fs-24Member linkWidthMember mb-0"
                      eventKey="first"
                    >
                      <i class="far fa-address-card"></i>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="col-2">
                    <Nav.Link
                      className="fs-24Member linkWidthMember mb-0"
                      eventKey="second"
                    >
                      <i class="fas fa-donate"></i>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="col-2">
                    <Nav.Link
                      className="fs-24Member linkWidthMember mb-0"
                      eventKey="third"
                    >
                      <i class="far fa-list-alt"></i>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="col-2">
                    <Nav.Link
                      className="fs-24Member linkWidthMember mb-0"
                      eventKey="eighth"
                    >
                      <i class="fas fa-chalkboard-teacher"></i>
                    </Nav.Link>
                  </Nav.Item>
                  {/* <Nav.Item>
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
                  </Nav.Item> */}
                  {/* <Nav.Item className="col-2">
                    <Nav.Link
                      className="fs-24Member linkWidthMember mb-0"
                      eventKey="sixth"
                    >
                      <i class="fas fa-heart"></i>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="col-2">
                    <Nav.Link
                      className="fs-24Member linkWidthMember mb-0"
                      eventKey="seventh"
                    >
                      <i class="far fa-comments"></i>
                    </Nav.Link>
                  </Nav.Item> */}
                </Nav>
              </Col>
              <Col className="tabContentMember mx-auto" lg={9} md={8} sm={12}>
                <Tab.Content className="d-flex justify-content-center mt-4">
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
                  {/* <Tab.Pane eventKey="fifth">
                    <MemberCoupon />
                  </Tab.Pane>
                  <Tab.Pane eventKey="sixth">
                    <MemberCollect />
                  </Tab.Pane>
                  <Tab.Pane eventKey="seventh">
                    <MemberMessage />
                  </Tab.Pane> */}
                  <Tab.Pane eventKey="eighth">
                    <MemberCourseOrder />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      ) : (
        <Navigate to="/member"></Navigate>
      )}
      {/* footer用 */}
      <div className="footerBoxMember">
        <FooterMember />
      </div>
    </>
  );
}
export default Member;
