import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/auth';
import { API_URL } from '../utils/config';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { RiProfileFill } from 'react-icons/ri';
import Swal from 'sweetalert2';

// 要使用能有active css效果的NavLink元件
import { Link, NavLink, Navigate } from 'react-router-dom';

import '../styles/component.scss';
import logo from '../data/images/FunwaveLogo-black2.png';

function MyNavbar() {
  //加入課程購物車icon加總
  const [courseCart, setCourseCart] = useState(0);
  useEffect(() => {
    function refresh() {
      if (
        JSON.parse(localStorage.getItem('course')) === '體驗課程' ||
        JSON.parse(localStorage.getItem('course')) === '初階課程' ||
        JSON.parse(localStorage.getItem('course')) === '中階課程' ||
        JSON.parse(localStorage.getItem('course')) === '高階課程'
      ) {
        setCourseCart(1);
      } else if (!JSON.parse(localStorage.getItem('course'))) {
        setCourseCart(0);
      }
    }

    const intervalId = setInterval(() => {
      refresh();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [setCourseCart, courseCart]);
  //課程購物車結束

  const { auth, setAuth } = useAuth();
  const [cartCount, setCartCount] = useState(0);
  const [goToCart, setGoToCart] = useState(false);

  setInterval(function () {
    const productCart = localStorage.getItem('productCart');
    if (productCart) {
      setCartCount(JSON.parse(productCart).length);
    }
  }, 500);

  const handleLogout = async () => {
    await axios.get(`${API_URL}/auth/logout`, {
      withCredentials: true,
    });
    setAuth(null);
  };

  // if (goToCart) {
  //   return <Navigate to="/product-cart01"></Navigate>;
  // }
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
              <Nav.Link as={NavLink} to="/products">
                衝浪商品
              </Nav.Link>
              <Nav.Link as={NavLink} to="/customized">
                客製化浪板
              </Nav.Link>
              <Nav.Link as={NavLink} to="/course">
                衝浪課程
              </Nav.Link>
              <Nav.Link as={NavLink} to="/information">
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
            <form className="d-flex btnGroup">
              {/* <input
                className="form-control me-2 searchIpt"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ display: 'none' }}
              />
              <button className="btn iconGroup" type="submit">
                <i className="fas fa-search"></i>
              </button> */}
              {/* <button className="btn" type="submit">
              <i className="fas fa-shopping-cart"></i>
            </button> */}
              <Nav.Link
                className="iconGroup d-flex align-items-center"
                as={NavLink}
                to={cartCount !== 0 && auth !== null ? '/product-cart01' : '/'}
                onClick={() => {
                  if (auth === null) {
                    Swal.fire('請先登入會員');
                  }
                }}
              >
                <i className="fas fa-shopping-cart"></i>
                <span>&ensp;({cartCount})</span>
              </Nav.Link>
              <Nav.Link
                className="iconGroup"
                as={NavLink}
                to={
                  courseCart !== 0 && auth !== null
                    ? '/course/course-cart'
                    : '/'
                }
                onClick={() => {
                  if (auth === null) {
                    Swal.fire('請先登入會員');
                  }
                }}
              >
                <RiProfileFill size={35} />

                <span>&ensp;({courseCart})</span>
              </Nav.Link>
              {/* <button className="btn" type="submit">
              <i className="fas fa-user"></i>
            </button> */}
              <Nav.Link
                className="iconGroup"
                as={NavLink}
                to={auth !== null ? '/member' : '/'}
                onClick={() => {
                  if (auth === null) {
                    Swal.fire('請先登入會員');
                  }
                }}
              >
                <i className="fas fa-user"></i>
              </Nav.Link>
              {/* 登入/登出判斷 */}
              {auth ? (
                <>
                  <div className="d-flex align-items-center">
                    <img
                      className={`headerImgMember cover-fit me-2 ${
                        auth.photo == '' ? 'd-none' : 'd-block'
                      }`}
                      src={`http://localhost:3002${auth.member_photo}`}
                    />
                    <p className="mb-0">{auth.member_name}</p>
                  </div>
                  <Nav.Link
                    className="btnLogin mx-2"
                    as={NavLink}
                    to="/login"
                    onClick={handleLogout}
                  >
                    登出
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link className="btnLogin mx-2" as={NavLink} to="/login">
                  登入/註冊
                </Nav.Link>
              )}
            </form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
