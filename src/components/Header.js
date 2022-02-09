import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

// 要使用能有active css效果的NavLink元件
import { Link, NavLink } from 'react-router-dom';

import '../styles/component.scss';
import logo from '../data/images/FunwaveLogo-black2.png';

function MyNavbar(props) {
  const { auth } = props;
  return (
    <>
      <Navbar expand="lg" className="shadow-sm">
        <Container className="headerWrap">
          <Navbar.Brand href="/home">
            <img src={logo} className="imgLogo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto nav-menu">
              {/* 利用as屬性來作選單link的整合 */}
              {/* 參考：https://react-bootstrap.github.io/components/navs/#nav-link-props */}
              <Nav.Link as={NavLink} to="/Products">
                衝浪商品
              </Nav.Link>
              <Nav.Link as={NavLink} to="/Customized">
                客製化浪板
              </Nav.Link>
              <Nav.Link as={NavLink} to="/Course">
                衝浪課程
              </Nav.Link>
              <Nav.Link as={NavLink} to="/Information">
                文章
              </Nav.Link>
              <Nav.Link as={NavLink} to="/surfspot">
                浪點
              </Nav.Link>
            </Nav>
            {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
            <form class="d-flex btnGroup">
              <input
                class="form-control me-2 searchIpt"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ display: 'none' }}
              />
              <button class="btn iconGroup" type="submit">
                <i class="fas fa-search"></i>
              </button>
              {/* <button class="btn" type="submit">
              <i class="fas fa-shopping-cart"></i>
            </button> */}
              <Nav.Link className="iconGroup" as={NavLink} to="/">
                <i class="fas fa-shopping-cart"></i>
              </Nav.Link>
              {/* <button class="btn" type="submit">
              <i class="fas fa-user"></i>
            </button> */}
              <Nav.Link className="iconGroup" as={NavLink} to="/Member">
                <i class="fas fa-user"></i>
              </Nav.Link>
              <Nav.Link className="btnLogin mx-2" as={NavLink} to="/login">
                登入/註冊
              </Nav.Link>
            </form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
