import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Accordion, Figure } from 'react-bootstrap';
import axios from 'axios';

// 導引資料、頁面
import './ProductDetails.scss';
import { API_URL, IMAGE_URL } from '../../utils/config';
// import { data } from '../../data/products.js'; // 前端假資料
import longboard1 from './longboard1.jpg'; // 暫存推薦商品前端假圖片
import greenTitle from '../../data/images/greenTitle.svg';
import ProductAddCart from './Components/ProductDetails/ProductAddCart.js';

// react-icons
import { FaThumbsUp } from 'react-icons/fa';
import { IoColorPalette } from 'react-icons/io5';
import { MdOutlineSurfing } from 'react-icons/md';
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineDown,
  AiOutlineUp,
  AiFillLeftCircle,
  AiFillRightCircle,
  AiFillTags,
  AiOutlinePlus,
  AiOutlineMinus,
} from 'react-icons/ai';
// import { BsStarHalf } from 'react-icons/bs'; // 半星星

function ProductDetails(props) {
  // 把前端網址上的參數stockId拿出來，要和App.js的網址參數相同
  const { product_group } = useParams();

  const [product, setProduct] = useState([
    {
      product_id: '',
      product_no: '',
      product_group: '',
      name: '',
      product_detail: '',
      big_cat_id: '',
      small_cat_id: '',
      image1: '',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      brand_id: '',
      color: '',
      size: '',
      material_id: '',
      fin_compatibility_id: '',
      price: '',
      stock: 0,
      create_time: '',
      product_valid: '',
    },
  ]);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);

  // 產品 "小分類、品牌、材質、衝浪板舵" 的id對照名稱
  const smallCatTypes = [
    '衝浪長板',
    '衝浪快樂板',
    '衝浪短板',
    '衝浪板舵',
    '衝浪腳繩',
    '衝浪腳踏墊',
    '衝浪板袋',
    '衝浪斗篷毛巾衣',
    '防寒衣',
  ];
  const brandTypes = ['Catch Surf', 'Solid Surf Co', 'JJF by Pyzel'];
  const materialTypes = ['Polyethylene', 'EPOXY', 'EPS', '碳纖維'];
  const finCompatibilityTypes = ['FCS II Longboard', 'FCS II', 'Single Tab'];

  // 初始化資料-模擬componentDidMount
  useEffect(() => {
    setLoading(true);

    let getProduct = async () => {
      // 取得後端 http://localhost:3002/api/products 資料
      let response = await axios.get(`${API_URL}/products/${product_group}`);
      console.log('response.data', response.data);
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

  console.log('product狀態', product);

  // 長板尺寸對照表
  const displaySizeDetailsLB = (
    <>
      <div className="m-5">
        <h3 className="border-bottom border-dark pb-2 mb-4">
          尺寸對照表 - 長板
        </h3>
        <div className="row">
          <div className="col-3">
            <p className="text-center fw-bold">尺寸 (ft)</p>
            <p className="text-center fw-bold">寬度 (in)</p>
            <p className="text-center fw-bold">厚度 (in)</p>
            <p className="text-center fw-bold">重量 (L)</p>
          </div>
          <div className="col-9">
            <p className="fw-bold">9'0"</p>
            <p>24</p>
            <p>3.5</p>
            <p>98</p>
          </div>
        </div>
      </div>
    </>
  );

  // 快樂板尺寸對照表
  const displaySizeDetailsFB = (
    <>
      <div className="m-5">
        <h3 className="border-bottom border-dark pb-2 mb-4">
          尺寸對照表 - 快樂板
        </h3>
        <div className="row">
          <div className="col-3">
            <p className="text-center fw-bold">尺寸 (ft)</p>
            <p className="text-center fw-bold">寬度 (in)</p>
            <p className="text-center fw-bold">厚度 (in)</p>
            <p className="text-center fw-bold">重量 (L)</p>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-4">
                <p className="fw-bold">7'2"</p>
                <p>21.75</p>
                <p>2.85</p>
                <p>50.6</p>
              </div>
              <div className="col-4">
                <p className="fw-bold">7'6"</p>
                <p>22</p>
                <p>2.95</p>
                <p>55.6</p>
              </div>
              <div className="col-4">
                <p className="fw-bold">7'10"</p>
                <p>22</p>
                <p>3</p>
                <p>59</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  // 短板尺寸對照表
  const displaySizeDetailsSB = (
    <>
      <div className="m-5">
        <h3 className="border-bottom border-dark pb-2 mb-4">
          尺寸對照表 - 短板
        </h3>
        <div className="row">
          <div className="col-3">
            <p className="text-center fw-bold">尺寸 (ft)</p>
            <p className="text-center fw-bold">寬度 (in)</p>
            <p className="text-center fw-bold">厚度 (in)</p>
            <p className="text-center fw-bold">重量 (L)</p>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-4">
                <p className="fw-bold">4'6"</p>
                <p>19</p>
                <p>2.375</p>
                <p>23</p>
              </div>
              <div className="col-4">
                <p className="fw-bold">5'6"</p>
                <p>20.75</p>
                <p>2.875</p>
                <p>36.8</p>
              </div>
              <div className="col-4">
                <p className="fw-bold">6'6"</p>
                <p>22</p>
                <p>7.25</p>
                <p>52.3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  // 中間商品細節區
  const displayDetails = (
    <>
      {/* 大小商品圖 */}
      <div className="d-flex justify-content-evenly">
        <div className="d-flex flex-column align-items-center justify-content-around">
          <AiOutlineUp size={22} color="#333333" className="" />
          <Figure>
            <Figure.Image
              width={75}
              height={75}
              alt={`${product[0].product_no}`}
              src={`${IMAGE_URL}/products/${product[0].image1}`}
              className="border border-dark p-1 m-0"
            />
          </Figure>
          <Figure>
            <Figure.Image
              width={75}
              height={75}
              alt={`${product[0].product_no}`}
              src={`${IMAGE_URL}/products/${product[0].image2}`}
              className="border border-dark p-1 m-0"
            />
          </Figure>
          <Figure>
            <Figure.Image
              width={75}
              height={75}
              alt={`${product[0].product_no}`}
              src={`${IMAGE_URL}/products/${product[0].image3}`}
              className="border border-dark p-1 m-0"
            />
          </Figure>
          <AiOutlineDown size={22} color="#333333" className="" />
        </div>
        <Figure>
          <Figure.Image
            width={450}
            height={450}
            alt={`${product[0].product_no}`}
            src={`${IMAGE_URL}/products/${product[0].image1}`}
          />
        </Figure>
      </div>
      {/* 推薦商品 */}
      <div className="m-5">
        <h3 className="border-bottom border-dark pb-2 mb-4">推薦相似產品</h3>
        <div className="d-flex justify-content-evenly align-items-center">
          <AiFillLeftCircle size={22} color="#17a8a2" className="" />
          <Figure>
            <Figure.Image
              width={115}
              // height={80}
              alt="longboard1"
              src={longboard1}
            />
            <Figure.Caption className="d-flex justify-content-center">
              <p className="mb-0">衝浪板</p>
            </Figure.Caption>
            <Figure.Caption className="d-flex justify-content-center">
              <p className="fw-bold">NT 2,000</p>
            </Figure.Caption>
          </Figure>
          <Figure>
            <Figure.Image
              width={115}
              // height={80}
              alt="longboard1"
              src={longboard1}
            />
            <Figure.Caption className="d-flex justify-content-center">
              <p className="recommendProducts mb-0">衝浪板</p>
            </Figure.Caption>
            <Figure.Caption className="d-flex justify-content-center">
              <p className="fw-bold">NT 2,000</p>
            </Figure.Caption>
          </Figure>
          <Figure>
            <Figure.Image
              width={115}
              // height={80}
              alt="longboard1"
              src={longboard1}
            />
            <Figure.Caption className="d-flex justify-content-center">
              <p className="recommendProducts mb-0">衝浪板</p>
            </Figure.Caption>
            <Figure.Caption className="d-flex justify-content-center">
              <p className="fw-bold">NT 2,000</p>
            </Figure.Caption>
          </Figure>
          <Figure>
            <Figure.Image
              width={115}
              // height={80}
              alt="longboard1"
              src={longboard1}
            />
            <Figure.Caption className="d-flex justify-content-center">
              <p className="recommendProducts mb-0">衝浪板</p>
            </Figure.Caption>
            <Figure.Caption className="d-flex justify-content-center">
              <p className="fw-bold">NT 2,000</p>
            </Figure.Caption>
          </Figure>
          <AiFillRightCircle size={22} color="#17a8a2" className="" />
        </div>
      </div>
      {/* 品牌介紹 */}
      <div className="m-5">
        <h3 className="border-bottom border-dark pb-2 mb-4">品牌介紹</h3>
        <div className="row">
          <div className="col-3">
            <p className="text-center fw-bold">
              {brandTypes[product[0].brand_id - 1]}
            </p>
          </div>
          <div className="col-9">
            <p>
              The JJF by Pyzel Gremlin Surfboard is crafted with a super
              versatile shape and stacked to the brim with some of the most
              advanced surf technology money can buy. From its lightweight Eco
              EPS Construction to its hand sanded rails, this is a grab and go
              good time for beginners and veterans alike.
            </p>
          </div>
        </div>
      </div>
      {/* 產品介紹 */}
      <div className="m-5">
        <h3 className="border-bottom border-dark pb-2 mb-4">產品介紹</h3>
        <div className="row">
          <div className="col-3">
            <p className="text-center fw-bold">
              {smallCatTypes[product[0].small_cat_id - 1]}
            </p>
          </div>
          <div className="col-9">
            <p>
              Apex
              將我們在傳統和高性能長板衝浪方面的所有知識整合到一個精美的包裝中。當我們設計這塊板時，我們打算製造有史以來用途最廣泛的經典長板。一個對於新手來說非常容易上手的滑板，同時也是一個
              Cj
              可以在未來很多年推動他使用的滑板。鼻部凹入以實現令人難以置信的鼻翼提升，臀部像經典的「參與」原木一樣用於樞軸和鞭打，但具有較低的性能風格導軌和尾部的現代邊緣以提高速度和控制力。以現代風格向過去致敬。此板為經典長板設計的「
              頂點 」！
            </p>
          </div>
        </div>
      </div>
      {/* 產品規格 */}
      <div className="m-5">
        <h3 className="border-bottom border-dark pb-2 mb-4">產品規格</h3>
        <div className="row">
          <div className="col-3">
            <p className="text-center fw-bold">材質</p>
            <p className="text-center fw-bold">類型</p>
            <p className="text-center fw-bold">適用板舵類型</p>
          </div>
          <div className="col-9">
            <p>{materialTypes[product[0].material_id - 1]}</p>
            <p>{smallCatTypes[product[0].small_cat_id - 1]}</p>
            <p>{finCompatibilityTypes[product[0].fin_compatibility_id - 1]}</p>
          </div>
        </div>
      </div>
    </>
  );

  // 右邊加入購物車區
  const displayCart =
    product.length === 0 ? (
      <p>商品不存在</p>
    ) : (
      <>
        <h1>{product[0].name}</h1>
        <h2>{brandTypes[product[0].brand_id - 1]}</h2>
        <h2>{smallCatTypes[product[0].small_cat_id - 1]}</h2>
        <h3>{console.log('被渲染內的 product[0]', product[0])}</h3>
        <div className="row">
          <div className="col-5 py-0">
            <AiFillStar size={20} color="#ff7f6a" />
            <AiFillStar size={20} color="#ff7f6a" />
            <AiFillStar size={20} color="#ff7f6a" />
            <AiFillStar size={20} color="#ff7f6a" />
            <AiOutlineStar size={20} color="#ff7f6a" />
          </div>
          <div className="col-7 ps-0 pt-2">
            <p className="fs-6">1則評論</p>
          </div>
        </div>
        <p className="fs-6">#{product[0].product_no}</p>
        <div className="row mt-5 mb-3">
          <div className="col-4 pe-0">
            <div>選擇顏色：</div>
          </div>
          <div className="col-8 p-0">
            <div className="d-flex">
              <div className="colorRadio rounded-circle me-3"></div>
              <div className="colorRadio rounded-circle me-3"></div>
              <div className="colorRadio rounded-circle me-3"></div>
              <div className="colorRadio rounded-circle me-3"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4 pe-0 mt-1">
            <div>選擇尺寸：</div>
          </div>
          <div className="col-8 p-0">
            <div className="d-flex">
              <div className="sizeRadio text-center me-2">4</div>
              <div className="sizeRadio text-center me-2">5</div>
              <div className="sizeRadio text-center me-2">6</div>
              <div className="sizeRadio text-center me-2">7</div>
            </div>
          </div>
        </div>
        <div className="d-flex my-5 align-items-center">
          <h2 className="fw-bolder">NT {product[0].price * count}</h2>
          <AiFillTags size={16} color="#ff7f6a" className="ms-4" />
          <p className="fs-6 text-primary m-0 ms-1">精選優惠！</p>
        </div>
        <div className="d-flex justify-content-center mb-4">
          <button
            type="button"
            className="btn btn-secondary border rounded-circle p-0 btmPlusMinus"
            onClick={() => {
              if (count - 1 >= 1) setCount(count - 1);
            }}
          >
            <AiOutlineMinus size={20} color="#ffffff" className="text-center" />
          </button>
          <input
            type="text"
            value="1"
            className="form-control mx-3 w-25"
            name="quantity"
          />
          <button
            type="button"
            className="btn btn-secondary border rounded-circle p-0 btmPlusMinus"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AiOutlinePlus size={20} color="#ffffff" className="text-center" />
          </button>
        </div>
        <Link to="/product-cart01">
          <button className="btn btn-secondary btnAddCart">加入購物車</button>
        </Link>
      </>
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
          {/* 中間商品細節區、右邊加入購物車區 */}
          <article className="col-10">
            <div className="row">
              {/* 中間商品細節區 */}
              <div className="col-9">
                {/* 大小商品圖 */}
                {displayDetails}
                {(() => {
                  if (product[0].small_cat_id === 1) {
                    return displaySizeDetailsLB;
                  } else if (product[0].small_cat_id === 2) {
                    return displaySizeDetailsFB;
                  } else {
                    return displaySizeDetailsSB;
                  }
                })()}
                {/* 短板尺寸對照表 */}
                {/* {displaySizeDetailsSB} */}
                {/* 快樂板尺寸對照表 */}
                {/* {displaySizeDetailsFB} */}
                {/* 長板尺寸對照表 */}
                {/* {displaySizeDetailsLB} */}
                {/* 商品評價  */}
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
              {/* 右邊加入購物車區 */}
              <div className="col-3 p-0">
                <div className="sticky">{loading ? spinner : displayCart}</div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
