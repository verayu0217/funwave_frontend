// 使用套件
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import 'animate.css';
import './App.scss';

// 頁面用元件(路由組件)
// import Home from './pages/Home';

//資訊
//會員
import LogIn from './pages/Members/LogIn';
//課程
//商品
//購物車
//客製化浪板
//浪點

// 組合用元件(一般組件)
// import Breadcrumb from './components/Breadcrumb';
// import ScrollToTop from './components/ScrollToTop';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import MainContent from './components/MainContent';
// import SideBar from './components/SideBar';
// import Notfound from './components/Notfound';
// import axios from 'axios';

function App() {
  return (
    <Routes>
      <>
        <Route path="/login" element={<LogIn />} />
      </>
    </Routes>
  );
}

export default App;
