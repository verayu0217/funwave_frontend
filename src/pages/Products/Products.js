import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';

// axios前端、後端(爬蟲)都可用
// 先安裝 npm i axios
// 再引用 axios
import axios from 'axios';

import { API_URL } from '../../utils/config';

// 導引資料、頁面
import './Products.scss';
// import { data } from '../../data/products.js'; // 前端假資料
import ProductList from './Components/ProductList/ProductList.js';
import SearchBar from './Components/SearchBar.js';
import SortBar from './Components/SortBar.js';
import FilterBar from './Components/FilterBar/FilterBar.js';
import greenTitle from '../../data/images/greenTitle.svg';

// react-icons
import { FaThumbsUp } from 'react-icons/fa';
import { IoColorPalette } from 'react-icons/io5';
import { MdOutlineSurfing } from 'react-icons/md';

function Products() {
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);

  // 下面四個狀態是對應到四種不同的表單元素
  const [searchWord, setSearchWord] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const priceRangeTypes = [
    'NT 5,000以下',
    'NT 5,000 - 10,000',
    'NT 10,000 - 15,000',
    'NT 15,000以上',
  ];
  const [size, setSize] = useState([]);
  const sizeTypes = ['4', '5', '6'];

  const [isLoading, setIsLoading] = useState(false);

  // 載入中spinner
  //x秒後自動關掉spinner(設定isLoading為false)
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 0);
    }
  }, [isLoading]);

  // 前端透過axios從後端撈資料!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // 初始化資料-模擬componentDidMount
  useEffect(() => {
    // 先開起載入指示器
    setIsLoading(true);

    let getProducts = async () => {
      // 欲取得後端 http://localhost:3002/api/products 資料
      let response = await axios.get(`${API_URL}/products`);
      // console.log(response);
      setProducts(response.data);
      setDisplayProducts(response.data);
    };
    getProducts();
  }, []);

  // 前端假資料     可刪除，暫留供看看～～～
  // 初始化資料-模擬componentDidMount
  // useEffect(() => {
  //   // 先開起載入指示器
  //   setIsLoading(true);

  //   // 模擬和伺服器要資料
  //   // 最後設定到狀態中
  //   setProducts(data);
  //   setDisplayProducts(data);
  // }, []);

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

  // 四個表單元素的處理方法
  const handleSearch = (products, searchWord) => {
    let newProducts = [...products];

    if (searchWord.length) {
      newProducts = products.filter((product) => {
        return product.name.includes(searchWord);
      });
    }
    return newProducts;
  };

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

  const handlePriceRange = (products, priceRange) => {
    let newProducts = [...products];

    // 處理價格區間選項
    switch (priceRange) {
      case 'NT 5,000以下':
        newProducts = products.filter((p) => {
          return p.price <= 5000;
        });
        break;
      case 'NT 5,000 - 10,000':
        newProducts = products.filter((p) => {
          return p.price >= 5000 && p.price <= 10000;
        });
        break;
      case 'NT 10,000 - 15,000':
        newProducts = products.filter((p) => {
          return p.price >= 10000 && p.price <= 15000;
        });
        break;
      case 'NT 15,000以上':
        newProducts = products.filter((p) => {
          return p.price >= 15000;
        });
        break;
      // 指所有的產品都出現
      default:
        break;
    }

    return newProducts;
  };

  const handlesize = (products, size) => {
    let newProducts = [...products];

    // 處理勾選標記(多選是or)
    if (size.length > 0) {
      newProducts = [...newProducts].filter((product) => {
        let isFound = false;

        // 原本資料裡的size字串轉為陣列，一個商品可以有多種size
        const productsize = product.size.split(',');

        // 用目前使用者勾選的標籤用迴圈找，有找到就回傳true
        for (let i = 0; i < size.length; i++) {
          if (productsize.includes(size[i])) {
            isFound = true; // 找到設為true
            break; // 找到一個就可以，中斷迴圈
          }
        }
        return isFound;
      });
    }

    return newProducts;
  };

  // 當四個過濾表單元素有更動時
  // 模擬componentDidMount、componentDidUpdate
  // ps. 一開始也會載入
  useEffect(() => {
    // 搜尋字串太少不需要搜尋
    if (searchWord.length < 2 && searchWord.length !== 0) return;

    // 先開起載入指示器
    setIsLoading(true);

    let newProducts = [];

    // 處理搜尋
    newProducts = handleSearch(products, searchWord);

    // 處理排序
    newProducts = handleSort(newProducts, sortBy);

    // 處理勾選標記
    newProducts = handlesize(newProducts, size);

    // 處理價格區間選項
    newProducts = handlePriceRange(newProducts, priceRange);

    setDisplayProducts(newProducts);
  }, [searchWord, products, sortBy, size, priceRange]);

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
      <Link to="/product-details">購物商城</Link>
      <br />
      <Link to="/cart-pre-order">購物車</Link>
      <div className="container">
        <h3>Breadcrumb</h3>
        <div className="row">
          <aside className="col-2 asideProducts">
            <div className="sticky">
              {/* 大分類 */}
              <Accordion className="mt-4" defaultActiveKey="0" flush alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="accordionTitle">
                    <h3>衝浪板</h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="ulProducts">
                      <li className="liProducts">
                        <Link to="/" title="長板" className="linkProducts">
                          長板
                        </Link>
                      </li>
                      <li className="liProducts">
                        <Link to="/" title="快樂板" className="linkProducts">
                          快樂板
                        </Link>
                      </li>
                      <li className="liProducts">
                        <Link to="/" title="短板" className="linkProducts">
                          短板
                        </Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <h3>衝浪板配件</h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="ulProducts">
                      <li className="liProducts">
                        <Link to="/" title="衝浪板舵" className="linkProducts">
                          衝浪板舵
                        </Link>
                      </li>
                      <li className="liProducts">
                        <Link to="/" title="腳繩" className="linkProducts">
                          腳繩
                        </Link>
                      </li>
                      <li className="liProducts">
                        <Link to="/" title="腳踏墊" className="linkProducts">
                          腳踏墊
                        </Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <h3>衝浪相關衣物</h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="ulProducts">
                      <li className="liProducts">
                        <Link to="/" title="防寒衣物" className="linkProducts">
                          衝浪斗篷毛巾衣
                        </Link>
                      </li>
                      <li className="liProducts">
                        <Link to="/" title="防寒衣" className="linkProducts">
                          防寒衣
                        </Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              {/* 篩選 */}
              <FilterBar
                priceRangeTypes={priceRangeTypes}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                sizeTypes={sizeTypes}
                size={size}
                setSize={setSize}
              />
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
                  <label className="form-check-label ms-3" htmlFor="brand1">
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
                  <label className="form-check-label ms-3" htmlFor="brand2">
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
                  <label className="form-check-label ms-3" htmlFor="brand3">
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
                  <label className="form-check-label ms-3" htmlFor="color1">
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
                  <label className="form-check-label ms-3" htmlFor="color2">
                    橙色
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
                  <label className="form-check-label ms-3" htmlFor="color3">
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
                  <label className="form-check-label ms-3" htmlFor="color4">
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
                  <label className="form-check-label ms-3" htmlFor="color5">
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
                  <label className="form-check-label ms-3" htmlFor="color6">
                    紫色
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
                  <label className="form-check-label ms-3" htmlFor="fin1">
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
                  <label className="form-check-label ms-3" htmlFor="fin2">
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
                  <label className="form-check-label ms-3" htmlFor="fin3">
                    FCS II Longboard
                  </label>
                </div>
                <div className="form-check ms-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="fin4"
                    name="fin4"
                    value="fin4"
                  />
                  <label className="form-check-label ms-3" htmlFor="fin4">
                    Longboard
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
              <SearchBar
                searchWord={searchWord}
                setSearchWord={setSearchWord}
              />
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
