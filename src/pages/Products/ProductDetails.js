import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import axios from 'axios';

// react-icons
import { FaThumbsUp } from 'react-icons/fa';
import { IoColorPalette } from 'react-icons/io5';
import { MdOutlineSurfing } from 'react-icons/md';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
// import { BsStarHalf } from 'react-icons/bs'; // 半星星

// 導引資料、頁面
import './ProductDetails.scss';
import { API_URL } from '../../utils/config';
// import { data } from '../../data/products.js'; // 前端假資料
import longboard1 from './longboard1.jpg'; // 暫存推薦商品前端假圖片
import greenTitle from '../../data/images/greenTitle.svg';
import ProductAddCart from './Components/ProductDetails/ProductAddCart.js';
import ProductDetailsContent from './Components/ProductDetails/ProductDetailsContent.js';

function ProductDetails(props) {
  const [product, setProduct] = useState([
    {
      product_id: 0,
      product_no: '',
      product_group: '',
      name: '',
      product_detail: '',
      big_cat_id: 0,
      small_cat_id: 0,
      image1: '',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      brand_id: 0,
      color_id: 0,
      size: '',
      material_id: 0,
      fin_compatibility_id: 0,
      price: 0,
      stock: 0,
      create_time: '',
      product_valid: 0,
    },
  ]);
  const [chosenProductOrder, setChosenProductOrder] = useState(-1); // 點選尺寸、顏色後得出的子貨號(product_no)順序
  const [clickSmallImage, setClickSmallImage] = useState('image1'); // 點選哪張小圖
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1); // 加入購物車的數量
  const [size, setSize] = useState(''); // 點選商品的尺寸
  const [colorId, setColorId] = useState(''); // 點選商品的顏色

  // 把前端網址上的參數product_group拿出來，要和App.js的網址參數相同
  const { product_group } = useParams();

  // 初始化資料-模擬componentDidMount
  useEffect(() => {
    setLoading(true);

    let getProduct = async () => {
      // 取得後端 http://localhost:3002/api/products 資料
      let response = await axios.get(`${API_URL}/products/${product_group}`);
      setProduct(response.data);
    };
    getProduct();

    setTimeout(() => setLoading(false), 0);
  }, []);

  const spinner = (
    <div className="spinner-grow text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );

  return (
    <>
      <div className="container">
        <h3>Breadcrumb</h3>
        <div className="row">
          <aside className="col-2 asideProducts">
            <div className="sticky">
              {/* 大分類 */}
              <Accordion className="mt-4" flush>
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
          {/* 中間的商品細節區、右方的加入購物車區 */}
          <article className="col-10">
            <div className="row">
              {/* 中間商品細節區 */}
              <div className="col-9">
                {loading ? (
                  spinner
                ) : (
                  <ProductDetailsContent
                    product={product}
                    clickSmallImage={clickSmallImage}
                    setClickSmallImage={setClickSmallImage}
                    chosenProductOrder={chosenProductOrder}
                    setChosenProductOrder={setChosenProductOrder}
                  />
                )}
                {/* 評價 */}
                <div className="m-5">
                  <div className="text-secondary my-4 h2 text-center ">
                    <img
                      src={greenTitle}
                      className="me-3"
                      alt="greenTitle"
                      height="12px"
                      weight="32px"
                    />
                    評價
                  </div>
                  <div className="border mt-3 p-4">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle"
                        src="https://fakeimg.pl/50x50/"
                        alt=""
                        height="50px"
                        weight="50px"
                      />
                      <div className="m-3 ">Tony</div>
                      <div className="d-flex justify-content-center ">
                        <AiFillStar size={20} color="#ff7f6a" />
                        <AiFillStar size={20} color="#ff7f6a" />
                        <AiFillStar size={20} color="#ff7f6a" />
                        <AiFillStar size={20} color="#ff7f6a" />
                        <AiOutlineStar size={20} color="#ff7f6a" />
                      </div>

                      <div className="align-self-center ms-auto">
                        2022年2月9日
                      </div>
                    </div>
                    <div className="my-3">
                      <p>
                        出貨速度還好。外袋整潔，內箱產品完整，期待有更優惠的活動供回購。
                        這款似可選剛好的尺寸，最好找店家試穿。
                      </p>
                      <img
                        src={longboard1}
                        width="100"
                        className="mt-3"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* 右方的加入購物車區 */}
              <div className="col-3 p-0">
                <div className="sticky">
                  {loading ? (
                    spinner
                  ) : (
                    <ProductAddCart
                      product={product}
                      count={count}
                      setCount={setCount}
                      size={size}
                      setSize={setSize}
                      colorId={colorId}
                      setColorId={setColorId}
                      chosenProductOrder={chosenProductOrder}
                      setChosenProductOrder={setChosenProductOrder}
                    />
                  )}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
