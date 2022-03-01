import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import axios from 'axios';

// react-icons
import { FaThumbsUp } from 'react-icons/fa';
import { IoColorPalette } from 'react-icons/io5';
import { MdOutlineSurfing } from 'react-icons/md';
import { RiMoneyDollarCircleFill, RiRulerFill } from 'react-icons/ri';

// 導引資料、頁面
import './Products.scss';
import { API_URL } from '../../utils/config';
import ProductList from './Components/ProductList/ProductList.js';
// import SearchBar from './Components/SearchBar.js';
import SortBar from './Components/SortBar.js';
// import FilterBar from './Components/FilterBar/FilterBar.js';
import greenTitle from '../../data/images/greenTitle.svg';
import { useNavigate } from 'react-router-dom';

function Products() {
  // 商品列表原始資料
  const [products, setProducts] = useState([]);

  // 商品列表經過排序的資料
  const [displayProducts, setDisplayProducts] = useState([]);

  // 排序
  const [sortBy, setSortBy] = useState('');

  // 手風琴大分類
  const [bigCatsClick, setBigCatsClick] = useState(0);
  // 手風琴小分類
  const [smallCatsClick, setSmallCatsClick] = useState(0);

  // 篩選條件
  const [priceRange, setPriceRange] = useState('all');

  // 載入指示器
  const [isLoading, setIsLoading] = useState(false);

  // 為了處理網址
  let navigate = useNavigate();

  // 載入中spinner
  //x秒後自動關掉spinner(設定isLoading為false)
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 0);
    }
  }, [isLoading]);

  // 前端透過axios從後端撈資料
  useEffect(() => {
    // 先開起載入指示器
    setIsLoading(true);

    let getProducts = async () => {
      // 欲取得後端 http://localhost:3002/api/products 資料
      let response = await axios.get(
        `${API_URL}/products?bigCats=${bigCatsClick}`
      );
      setProducts(response.data);
      setDisplayProducts(response.data);
    };
    getProducts();
  }, [bigCatsClick]);

  // 載入指示 spinner動畫
  const spinner = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );

  // 排序方式
  const handleSort = (products, sortBy) => {
    let newProducts = [...products];

    // 以價格排序-由少至多
    if (sortBy === '1') {
      newProducts = [...newProducts].sort((a, b) => a.price - b.price);
    }
    // 以價格排序-由多至少
    if (sortBy === '2') {
      newProducts = [...newProducts].sort((a, b) => b.price - a.price);
    }
    // 預設用id 小至大
    if (sortBy === '' && newProducts.length > 0) {
      newProducts = [...newProducts].sort((a, b) => a.id - b.id);
    }
    return newProducts;
  };

  // 當四個過濾表單元素有更動時
  // 模擬componentDidMount、componentDidUpdate
  // ps. 一開始也會載入
  useEffect(() => {
    // 先開起載入指示器
    setIsLoading(true);

    let newProducts = [];

    // 處理排序
    newProducts = handleSort(products, sortBy);

    setDisplayProducts(newProducts);
  }, [products, sortBy]);
  console.log('bigCatsClick', bigCatsClick);
  console.log('smallCatsClick', smallCatsClick);
  console.log('priceRange', priceRange);

  return (
    <>
      {/* title、banner */}
      <div className="container-fluid bannerProducts">
        <div className="d-flex justify-content-center align-items-end titleTop">
          <h4>FUN SHOP</h4>
        </div>
        <div className="d-flex justify-content-center align-items-start titleBottom">
          <h1>FUN 商店</h1>
        </div>
      </div>
      <div className="container">
        <h3>Breadcrumb</h3>
        <div className="row">
          <aside className="col-2 asideProducts">
            <div className="sticky">
              {/* 大小分類 */}
              <Accordion className="mt-4" defaultActiveKey="0" flush alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header
                    className="accordionTitle"
                    onClick={(e) => {
                      setBigCatsClick(1);
                      navigate(`/products?bigCats=1`);
                    }}
                  >
                    <h3>衝浪板</h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="ulProducts">
                      <li
                        className="liProducts"
                        onClick={(e) => {
                          setSmallCatsClick(1);
                          navigate(`/products?smallCats=1`);
                        }}
                      >
                        長板
                      </li>
                      <li
                        className="liProducts"
                        onClick={(e) => {
                          setSmallCatsClick(2);
                          navigate(`/products?smallCats=2`);
                        }}
                      >
                        快樂板
                      </li>
                      <li
                        className="liProducts"
                        onClick={(e) => {
                          setSmallCatsClick(3);
                          navigate(`/products?smallCats=3`);
                        }}
                      >
                        短板
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header
                    onClick={(e) => {
                      setBigCatsClick(2);
                      navigate(`/products?bigCats=2`);
                    }}
                  >
                    <h3>衝浪板配件</h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="ulProducts">
                      <li
                        className="liProducts"
                        onClick={(e) => {
                          setSmallCatsClick(4);
                          navigate(`/products?smallCats=4`);
                        }}
                      >
                        衝浪板舵
                      </li>
                      <li
                        className="liProducts"
                        onClick={(e) => {
                          setSmallCatsClick(5);
                          navigate(`/products?smallCats=5`);
                        }}
                      >
                        腳繩
                      </li>
                      <li
                        className="liProducts"
                        onClick={(e) => {
                          setSmallCatsClick(6);
                          navigate(`/products?smallCats=6`);
                        }}
                      >
                        腳踏墊
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header
                    onClick={(e) => {
                      setBigCatsClick(3);
                      navigate(`/products?bigCats=3`);
                    }}
                  >
                    <h3>衝浪相關衣物</h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="ulProducts">
                      <li
                        className="liProducts"
                        onClick={(e) => {
                          setSmallCatsClick(7);
                          navigate(`/products?smallCats=7`);
                        }}
                      >
                        衝浪斗篷毛巾衣
                      </li>
                      <li
                        className="liProducts"
                        onClick={(e) => {
                          setSmallCatsClick(8);
                          navigate(`/products?smallCats=8`);
                        }}
                      >
                        防寒衣
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              {/* 篩選 */}
              {/* 價格篩選 */}
              <div className="mt-5">
                <h3 className="d-flex align-items-center filterProducts pb-2 ps-3">
                  <RiMoneyDollarCircleFill
                    size={24}
                    color="#17a8a2"
                    className="me-3"
                  />
                  價格
                </h3>
                <div
                  className="form-check ms-3"
                  // onClick={(e) => {
                  //   setPriceRange('5000');
                  //   navigate({
                  //     pathname: '/products',
                  //     search: `?priceRange=5000`,
                  //   });
                  // }}
                >
                  <input
                    className="form-check-input"
                    type="radio"
                    id="price1"
                    name="price1"
                    value="price1"
                  />
                  <label className="form-check-label ms-2" htmlFor="price1">
                    NT 5,000以下
                  </label>
                </div>
                <div className="form-check ms-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="price2"
                    name="price2"
                    value="price2"
                  />
                  <label className="form-check-label ms-2" htmlFor="price2">
                    NT 5,000 - 15,000
                  </label>
                </div>
                <div className="form-check ms-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="price3"
                    name="price3"
                    value="price3"
                  />
                  <label className="form-check-label ms-2" htmlFor="price3">
                    NT 15,000 - 25,000
                  </label>
                </div>
                <div className="form-check ms-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="price3"
                    name="price3"
                    value="price3"
                  />
                  <label className="form-check-label ms-2" htmlFor="price3">
                    NT 25,000以上
                  </label>
                </div>
              </div>
              {/* 品牌篩選 */}
              <div className="mt-5">
                <h3 className="d-flex align-items-center filterProducts pb-2 ps-3">
                  <FaThumbsUp size={20} color="#17a8a2" className="me-3" />
                  品牌
                </h3>
                <div className="form-check ms-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="brand1"
                    name="brand1"
                    value="brand1"
                  />
                  <label className="form-check-label ms-2" htmlFor="brand1">
                    A
                  </label>
                </div>
                <div className="form-check ms-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="brand2"
                    name="brand2"
                    value="brand2"
                  />
                  <label className="form-check-label ms-2" htmlFor="brand2">
                    B
                  </label>
                </div>
                <div className="form-check ms-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="brand3"
                    name="brand3"
                    value="brand3"
                  />
                  <label className="form-check-label ms-2" htmlFor="brand3">
                    C
                  </label>
                </div>
              </div>
              {/* 顏色篩選 */}
              <div className="mt-5">
                <h3 className="d-flex align-items-center filterProducts pb-2 ps-3">
                  <IoColorPalette size={22} color="#17a8a2" className="me-3" />
                  顏色
                </h3>
                <div className="form-check ms-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="color1"
                    name="color1"
                    value="color1"
                  />
                  <label className="form-check-label ms-2" htmlFor="color1">
                    紅色
                  </label>
                </div>
                <div className="form-check ms-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="color2"
                    name="color2"
                    value="color2"
                  />
                  <label className="form-check-label ms-2" htmlFor="color2">
                    橘色
                  </label>
                </div>
                <div className="form-check ms-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="color3"
                    name="color3"
                    value="color3"
                  />
                  <label className="form-check-label ms-2" htmlFor="color3">
                    黃色
                  </label>
                </div>
                <div className="form-check ms-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="color4"
                    name="color4"
                    value="color4"
                  />
                  <label className="form-check-label ms-2" htmlFor="color4">
                    綠色
                  </label>
                </div>
                <div className="form-check ms-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="color5"
                    name="color5"
                    value="color5"
                  />
                  <label className="form-check-label ms-2" htmlFor="color5">
                    藍色
                  </label>
                </div>
                <div className="form-check ms-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="color6"
                    name="color6"
                    value="color6"
                  />
                  <label className="form-check-label ms-2" htmlFor="color6">
                    黑色
                  </label>
                </div>
                <div className="form-check ms-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="color6"
                    name="color6"
                    value="color6"
                  />
                  <label className="form-check-label ms-2" htmlFor="color6">
                    白色
                  </label>
                </div>
              </div>
              {/* 尺寸篩選 */}
              <div className="mt-5">
                <h3 className="d-flex align-items-center filterProducts pb-2 ps-3">
                  <RiRulerFill size={22} color="#17a8a2" className="me-3" />
                  尺寸
                </h3>
                <div className="form-check ms-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="size1"
                    name="size1"
                    value="size1"
                  />
                  <label className="form-check-label ms-2" htmlFor="size1">
                    5
                  </label>
                </div>
                <div className="form-check ms-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="size2"
                    name="size2"
                    value="size2"
                  />
                  <label className="form-check-label ms-2" htmlFor="size2">
                    6
                  </label>
                </div>
                <div className="form-check ms-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="size3"
                    name="size3"
                    value="size3"
                  />
                  <label className="form-check-label ms-2" htmlFor="size3">
                    7
                  </label>
                </div>
                <div className="form-check ms-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="size3"
                    name="size3"
                    value="size3"
                  />
                  <label className="form-check-label ms-2" htmlFor="size3">
                    8
                  </label>
                </div>
                <div className="form-check ms-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="size3"
                    name="size3"
                    value="size3"
                  />
                  <label className="form-check-label ms-2" htmlFor="size3">
                    9
                  </label>
                </div>
              </div>
              {/* 適用衝浪舵篩選 */}
              <div className="mt-5">
                <h3 className="d-flex align-items-center filterProducts pb-2 ps-3">
                  <MdOutlineSurfing
                    size={24}
                    color="#17a8a2"
                    className="me-3"
                  />
                  適用衝浪舵類型
                </h3>
                <div className="form-check ms-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="fin1"
                    name="fin1"
                    value="fin1"
                  />
                  <label className="form-check-label ms-2" htmlFor="fin1">
                    Single Tab
                  </label>
                </div>
                <div className="form-check ms-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="fin2"
                    name="fin2"
                    value="fin2"
                  />
                  <label className="form-check-label ms-2" htmlFor="fin2">
                    FCS II
                  </label>
                </div>
                <div className="form-check ms-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="fin3"
                    name="fin3"
                    value="fin3"
                  />
                  <label className="form-check-label ms-2" htmlFor="fin3">
                    FCS II Longboard
                  </label>
                </div>
              </div>
            </div>
          </aside>

          <article className="col-10 articleProducts">
            <header className="position-relative mt-5">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={greenTitle}
                  className="me-3"
                  alt="greenTitle"
                  height="24px"
                  weight="64px"
                />
                <h1 className="m-0">短板</h1>
              </div>

              <div className="d-flex justify-content-end mt-2 mb-2">
                <SortBar sortBy={sortBy} setSortBy={setSortBy} />
              </div>
            </header>
            {isLoading ? spinner : <ProductList products={displayProducts} />}

            {/* 星星圖備用 (全、半、空) */}
            {/* <AiFillStar size={22} color="#ff7f6a" className="" />
          <AiOutlineStar size={22} color="#ff7f6a" className="" />
          <BsStarHalf size={18} color="#ff7f6a" className="me-3" /> */}
          </article>
        </div>
      </div>
    </>
  );
}

export default Products;

// 手風琴(參考蕃薯) 分類
// Checks and radio 篩選
