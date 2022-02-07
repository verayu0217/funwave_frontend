import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

// 要使用能有active css效果的NavLink元件
import { Link, NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <>
      <Navbar bg="light" expand="lg" className="myNavbarNew" fixed="top">
        <Container>
          <Navbar.Brand className="navLogoWrap">
            <Link to="/">
              <img src={`../data/images/logo.png`} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mx-auto">
              <NavDropdown title="衝浪商品" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/products/?cate=1&page=1">衝浪板</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/products/?cate=2&page=1">止滑墊</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/products/?cate=3&page=1">衝浪衣</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/products/?cate=0&page=1">全部商品</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink>
                <Link to="/customize">客製化衝浪板</Link>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
