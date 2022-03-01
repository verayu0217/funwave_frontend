import React, { useState, useEffect } from 'react';
import axios from 'axios';

// 導引資料、頁面
import './Products.scss';
import { API_URL } from '../../utils/config';
import ProductList from './Components/ProductList/ProductList.js';
import SortBar from './Components/ProductList/SortBar.js';
import ProductAccordion from './Components/ProductList/ProductAccordion.js';
import FilterBar from './Components/ProductList/FilterBar.js';
import greenTitle from '../../data/images/greenTitle.svg';
import { useNavigate } from 'react-router-dom';

function Products() {
  // 商品列表原始資料
  const [products, setProducts] = useState([]);

  // 商品列表經過排序的資料
  const [displayProducts, setDisplayProducts] = useState([]);

  // 排序
  const [sortBy, setSortBy] = useState('');

  // 手風琴大小分類
  const [bigCatsClick, setBigCatsClick] = useState(0);
  const [smallCatsClick, setSmallCatsClick] = useState(0);

  // 篩選條件 - 價錢區間
  const [priceLowest, setPriceLowest] = useState('all');
  const [priceHighest, setPriceHighest] = useState('all');

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
        `${API_URL}/products?bigCats=${bigCatsClick}&smallCats=${smallCatsClick}&priceLowest=${priceLowest}&priceHighest=${priceHighest}`
      );
      setProducts(response.data);
      setDisplayProducts(response.data);
    };
    getProducts();
  }, [bigCatsClick, smallCatsClick, priceLowest, priceHighest]);

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
  console.log('priceLowest', priceLowest);
  console.log('priceHighest', priceHighest);

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
              <ProductAccordion
                bigCatsClick={bigCatsClick}
                setBigCatsClick={setBigCatsClick}
                smallCatsClick={smallCatsClick}
                setSmallCatsClick={setSmallCatsClick}
              />
              {/* 篩選 */}
              <FilterBar
                priceLowest={priceLowest}
                setPriceLowest={setPriceLowest}
                priceHighest={priceHighest}
                setPriceHighest={setPriceHighest}
              />
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
              <input
                type="text"
                placeholder="  🔍  以商品名稱搜尋"
                className="form-control mt-1 rounded-pill position-absolute top-0 end-0 w-25 text-muted"
                value=""
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
