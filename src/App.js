// 使用套件
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { AuthContext } from './context/auth';
import './App.scss';
import './styles/global.scss';
import axios from 'axios';
import { API_URL } from './utils/config';
import { ERR_MSG } from './utils/error';

// 頁面用元件(路由組件)
//首頁
import Home from './pages/Home/';
//scss示範頁
import HomeTry from './pages/HomeTry/';

//資訊
//會員
import LogIn from './pages/Members/MemberLogin/LogIn';
import Member from './pages/Members/Member';
import MemberOrder from './pages/Members/MemberOrder';
import MemberOrderDetails from './pages/Members/MemberOrderDetails';
import MemberCollect from './pages/Members/MemberCollect';
import MemberCoupon from './pages/Members/MemberCoupon';
import MemberInfo from './pages/Members/MemberInfo';
import MemberMessage from './pages/Members/MemberMessage';
import MemberPoint from './pages/Members/MemberPoint';
import MemberShoppingGold from './pages/Members/MemberShoppingGold';
//課程

import CourseCart from './pages/Course/CourseCart';
import CourseCart01 from './pages/Course/CourseCart01';
import CourseCart02 from './pages/Course/CourseCart02';
import CourseCart03 from './pages/Course/CourseCart03';
import CourseContent from './pages/Course/CourseContent';
import Courses from './pages/Course/Courses';

//商城
import ProductDetails from './pages/Products/ProductDetails';
import Products from './pages/Products/Products';
//購物車
import ProductCart01 from './pages/Products/Cart/ProductCart01';
import CartManage from './pages/Products/Cart/CartManage';
// import CartConfimOrder from './pages/Products/Cart/CartConfimOrder';
// import CartComplete from './pages/Products/Cart/CartComplete';
//客製化浪板
import Customized from './pages/Customized/Customized';
import CustomizedDetails from './pages/Customized/CustomizedDetails';
//浪點
import SurfSpot from './pages/SurfSpot/SurfSpot';
// import SurfSpotDetails from './pages/SurfSpot/SurfSpotDetails';

// 組合用元件(一般組件)
// import Breadcrumb from './components/Breadcrumb';
// import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
// import Footer from './components/Footer';
// import MainContent from './components/MainContent';
// import SideBar from './components/SideBar';
// import Notfound from './components/Notfound';
// import axios from 'axios';

function App() {
  const [auth, setAuth] = useState(null);

  async function checklogIn() {
    try {
      let response = await axios.get(`${API_URL}/auth/checklogin`, {
        withCredentials: true,
      });
      setAuth(response.data);
    } catch (e) {
      console.error({ ERR_MSG });
    }
  }
  useEffect(() => {
    checklogIn();
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/home-try" element={<HomeTry />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/surfspot" element={<SurfSpot />} />
          {/* <Route
            path="/surfspot/surfspot-details/:surfspotId"
            element={<SurfSpotDetails />}
          /> */}
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/products/:product_group" element={<ProductDetails />}>
            <Route path=":product_id" element={<ProductDetails />} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/product-cart01" element={<ProductCart01 />} />
          <Route
            path="/customized/customized-details"
            element={<CustomizedDetails />}
          />
          <Route path="/customized" element={<Customized />} />
          <Route
            path="/member/member-order/:orderId"
            element={<MemberOrderDetails />}
          />
          <Route
            path="/member/member-shopping-gold"
            element={<MemberShoppingGold />}
          />
          <Route path="/member/member-collect" element={<MemberCollect />} />
          <Route path="/member/member-message" element={<MemberMessage />} />
          <Route path="/member/member-coupon" element={<MemberCoupon />} />
          <Route path="/member/member-point" element={<MemberPoint />} />
          <Route path="/member/member-info" element={<MemberInfo />} />
          <Route path="/member/member-order" element={<MemberOrder />} />
          <Route path="/member" element={<Member />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/course/course-content" element={<CourseContent />} />
          <Route path="/course/course-cart01" element={<CourseCart01 />} />
          <Route path="/course/course-cart02" element={<CourseCart02 />} />
          <Route path="/course/course-cart03" element={<CourseCart03 />} />
          <Route path="/course/course-cart" element={<CourseCart />} />
        </Routes>
      </AuthContext.Provider>
    </>
  );
}

export default App;
