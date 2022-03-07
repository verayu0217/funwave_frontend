//  ProductDetailsContent.js 內容說明：商品細節頁中間的商品細節區

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Figure } from 'react-bootstrap';
import { IMAGE_URL, API_URL } from '../../../../utils/config';
import ProductDetailsSmallImgs from './ProductDetailsSmallImgs.js';
import { Link } from 'react-router-dom';

function ProductDetailsContent(props) {
  const {
    product,
    clickSmallImage,
    setClickSmallImage,
    chosenProductOrder,
    setChosenProductOrder,
  } = props;

  // 小分類、品牌、材質、衝浪板舵的id對照名稱
  const smallCatTypes = [
    '衝浪長板',
    '衝浪快樂板',
    '衝浪短板',
    '衝浪板舵',
    '衝浪腳繩',
    '衝浪腳踏墊',
    '衝浪斗篷毛巾衣',
    '防寒衣',
  ];
  const brandTypes = [
    'Catch Surf',
    'Solid Surf Co',
    'JJF by Pyzel',
    'Modern',
    'Softech',
    'Almond Surfboards',
    'Lib Tech',
    'True Ames',
    'Captain Fin',
    'Creatures of Leisure',
    'Roam',
    'Pro-Lite',
    'en.saintjacques',
    'RIPCURL',
    'OCEAN+EARTH',
    'FIREWIRE',
  ];
  const materialTypes = ['Polyethylene', 'EPOXY', 'EPS', '碳纖維'];
  const finCompatibilityTypes = ['FCS II Longboard', 'FCS II', 'Single Tab'];
  //推薦
  const [recommend, setRecommend] = useState([]);
  useEffect(() => {
    let recommend = async () => {
      let response = await axios.get(
        `${API_URL}/recommend?rec=${product[0].small_cat_id}`
      );
      // console.log('recommend', response);
      setRecommend(response.data);
    };
    if (product[0].small_cat_id) recommend();
  }, [product]);
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
            <div className="row">
              <div className="col-4">
                <p className="fw-bold">8'0"</p>
                <p>22</p>
                <p>3</p>
                <p>59</p>
              </div>
              <div className="col-4">
                <p className="fw-bold">9'0"</p>
                <p>24</p>
                <p>3.5</p>
                <p>98</p>
              </div>
            </div>
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
                <p className="fw-bold">6'0"</p>
                <p>21.75</p>
                <p>2.85</p>
                <p>50.6</p>
              </div>
              <div className="col-4">
                <p className="fw-bold">7'0"</p>
                <p>22</p>
                <p>2.95</p>
                <p>55.6</p>
              </div>
              <div className="col-4">
                <p className="fw-bold">8'0"</p>
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
                <p className="fw-bold">4'0"</p>
                <p>19</p>
                <p>2.375</p>
                <p>23</p>
              </div>
              <div className="col-4">
                <p className="fw-bold">5'0"</p>
                <p>20.75</p>
                <p>2.875</p>
                <p>36.8</p>
              </div>
              <div className="col-4">
                <p className="fw-bold">6'0"</p>
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

  return (
    <>
      {/* 大小商品圖 */}
      <div className="d-flex justify-content-evenly">
        <div className="d-flex flex-column align-items-center justify-content-around">
          {/* <AiOutlineUp size={22} color="#333333" className="" /> */}
          {/* 引用ProductDetailsSmallImgs.js */}
          <ProductDetailsSmallImgs
            product={product}
            clickSmallImage={clickSmallImage}
            setClickSmallImage={setClickSmallImage}
            chosenProductOrder={chosenProductOrder}
            setChosenProductOrder={setChosenProductOrder}
          />
          {/* <AiOutlineDown size={22} color="#333333" className="" /> */}
        </div>
        <Figure>
          <Figure.Image
            width={450}
            height={450}
            alt={`${
              product[chosenProductOrder > 0 ? chosenProductOrder : 0]
                .product_no
            }`}
            src={`${IMAGE_URL}/products/${
              product[chosenProductOrder > 0 ? chosenProductOrder : 0][
                clickSmallImage
              ]
            }`}
          />
        </Figure>
      </div>

      {/* 推薦商品 */}

      <div className="m-5">
        <h3 className="border-bottom border-dark pb-2 mb-4">推薦相似產品</h3>
        <div className="d-flex justify-content-evenly align-items-center">
          {recommend.map((v, i) => {
            return (
              <Link
                to={`/products/${v.product_group}`}
                key={v.product_id}
                target="_blank"
              >
                <Figure>
                  <div className="boxRec">
                    <Figure.Image
                      // width={115}
                      // height={80}
                      alt={v.image1}
                      src={`${IMAGE_URL}/products/${v.image1}`}
                      className="cover-fit"
                    />
                  </div>

                  <Figure.Caption className="d-flex justify-content-center">
                    <p className="mb-0">{v.name}</p>
                  </Figure.Caption>
                  <Figure.Caption className="d-flex justify-content-center">
                    <p className="fw-bold">NT {v.price.toLocaleString()}</p>
                  </Figure.Caption>
                </Figure>
              </Link>
            );
          })}
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
              {brandTypes[product[0].brand_id - 1]}是被 Sustainable
              Surf所認證的ECOBOARD（環保衝浪板）製造商。
              <br></br>
              {brandTypes[product[0].brand_id - 1]}
              成為第一個專門採用生物環氧樹脂的全球衝浪板品牌。
              <br></br>
              傳統的製作方式除了使用有毒物質外，使用工業溶劑清理更造成污染，對人體及環境非常傷害。但
              {brandTypes[product[0].brand_id - 1]}
              使用生物樹脂，可以使用柑橘清潔劑作為清理。除了浪板外，他們還製造了由藻類生物所製成的腳踏墊和由回收塑膠罐所製成的腳繩。
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
              {product[0].name}
              系列提供您一系列高性能{smallCatTypes[product[0].small_cat_id - 1]}
              的美好體驗。板由高級材料製成的衝浪板，胸部下方的額外體積使該板槳像一個長板，讓您輕鬆進入任何波浪。我們調整浪板的圓形銷尾，以增加轉彎時的升力並能立即鬆開。適合初學者到需要具有強大槳力的漸進式中長度的經驗豐富的用戶。
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

      {/* 視短板、快樂板、長板顯示其對應之尺寸對照表 */}
      {(() => {
        if (product[0].small_cat_id === 1) {
          return displaySizeDetailsLB;
        } else if (product[0].small_cat_id === 2) {
          return displaySizeDetailsFB;
        } else {
          return displaySizeDetailsSB;
        }
      })()}
    </>
  );
}

export default ProductDetailsContent;
