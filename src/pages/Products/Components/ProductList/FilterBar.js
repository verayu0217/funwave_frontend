// FilterBar.js 內容說明：商品主頁左方的篩選

import React from 'react';
import { Button } from 'react-bootstrap';

// react-icons
import { FaThumbsUp } from 'react-icons/fa';
import { IoColorPalette } from 'react-icons/io5';
import { MdOutlineSurfing } from 'react-icons/md';
import { RiMoneyDollarCircleFill, RiRulerFill } from 'react-icons/ri';

function FilterBar(props) {
  const {
    priceLowest,
    setPriceLowest,
    priceHighest,
    setPriceHighest,
    brand,
    setBrand,
    color1,
    setColor1,
    color2,
    setColor2,
    color3,
    setColor3,
    color4,
    setColor4,
    color5,
    setColor5,
    color6,
    setColor6,
    color7,
    setColor7,
    color8,
    setColor8,
    color9,
    setColor9,
    fin1,
    setFin1,
    fin2,
    setFin2,
    fin3,
    setFin3,
  } = props;

  return (
    <>
      <Button
        variant="outline-light"
        size="sm"
        className="ms-3 mt-5"
        onClick={(e) => {
          setPriceLowest('all');
          setPriceHighest('all');
          setBrand('all');
          setColor1('0');
          setColor2('0');
          setColor3('0');
          setColor4('0');
          setColor5('0');
          setColor6('0');
          setColor7('0');
          setColor8('0');
          setColor9('0');
          setFin1('0');
          setFin2('0');
          setFin3('0');
        }}
      >
        清除所有篩選
      </Button>
      {/* 篩選 */}
      {/* 價格篩選 */}
      <div className="mt-3">
        <h3 className="d-flex align-items-center filterProducts pb-2 ps-3">
          <RiMoneyDollarCircleFill size={24} color="#17a8a2" className="me-3" />
          價格
        </h3>
        {/* NT 5,000以下 */}
        <div
          className="form-check ms-3"
          onClick={(e) => {
            setPriceLowest('1');
            setPriceHighest('5000');
          }}
        >
          <input
            className="form-check-input"
            type="radio"
            id="price1"
            name="price"
            value="price1"
            checked={priceHighest === '5000'}
          />
          <label className="form-check-label ms-2" htmlFor="price1">
            NT 5,000以下
          </label>
        </div>
        {/* NT 5,000 - 15,000 */}
        <div
          className="form-check ms-3"
          onClick={(e) => {
            setPriceLowest('5000');
            setPriceHighest('15000');
          }}
        >
          <input
            className="form-check-input"
            type="radio"
            id="price2"
            name="price"
            value="price2"
            checked={priceHighest === '15000'}
          />
          <label className="form-check-label ms-2" htmlFor="price2">
            NT 5,000 - 15,000
          </label>
        </div>
        {/* NT 15,000 - 25,000 */}
        <div
          className="form-check ms-3"
          onClick={(e) => {
            setPriceLowest('15000');
            setPriceHighest('25000');
          }}
        >
          <input
            className="form-check-input"
            type="radio"
            id="price3"
            name="price"
            value="price3"
            checked={priceHighest === '25000'}
          />
          <label className="form-check-label ms-2" htmlFor="price3">
            NT 15,000 - 25,000
          </label>
        </div>
        {/* NT 25,000以上 */}
        <div
          className="form-check ms-3"
          onClick={(e) => {
            setPriceLowest('25000');
            setPriceHighest('1000000');
          }}
        >
          <input
            className="form-check-input"
            type="radio"
            id="price4"
            name="price"
            value="price4"
            checked={priceHighest === '1000000'}
          />
          <label className="form-check-label ms-2" htmlFor="price4">
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
        <select
          className="form-select"
          aria-label="Default select example"
          value={brand}
          onChange={(e) => {
            setBrand(e.target.value);
          }}
        >
          <option selected>請選擇品牌</option>
          <option value="6">Almond Surfboards</option>
          <option value="1">Catch Surf</option>
          <option value="9">Captain Fin</option>
          <option value="10">Creatures of Leisure</option>
          <option value="13">en.saintjacques</option>
          <option value="3">JJF by Pyzel</option>
          <option value="7">Lib Tech</option>
          <option value="4">Modern</option>
          <option value="12">Pro-Lite</option>
          <option value="11">Roam</option>
          <option value="5">Softech</option>
          <option value="2">Solid Surf Co</option>
          <option value="8">True Ames</option>
        </select>
      </div>
      {/* 顏色篩選 */}
      <div className="mt-5">
        <h3 className="d-flex align-items-center filterProducts pb-2 ps-3">
          <IoColorPalette size={22} color="#17a8a2" className="me-3" />
          顏色
        </h3>
        {/* 白 */}
        <div
          className="form-check ms-3"
          onChange={(e) => {
            if (color1 === '0') {
              setColor1('1');
            } else {
              setColor1('0');
            }
          }}
        >
          <input
            className="form-check-input"
            type="checkbox"
            id="color1"
            name="color1"
            value="color1"
            checked={color1 === '1'}
          />
          <label className="form-check-label ms-2" htmlFor="color1">
            白色
          </label>
        </div>
        {/* 黑 */}
        <div
          className="form-check ms-3"
          onChange={(e) => {
            if (color2 === '0') {
              setColor2('2');
            } else {
              setColor2('0');
            }
          }}
        >
          <input
            className="form-check-input"
            type="checkbox"
            id="color2"
            name="color2"
            value="color2"
            checked={color2 === '2'}
          />
          <label className="form-check-label ms-2" htmlFor="color2">
            黑色
          </label>
        </div>
        {/* 藍 */}
        <div
          className="form-check ms-3"
          onChange={(e) => {
            if (color3 === '0') {
              setColor3('3');
            } else {
              setColor3('0');
            }
          }}
        >
          <input
            className="form-check-input"
            type="checkbox"
            id="color3"
            name="color3"
            value="color3"
            checked={color3 === '3'}
          />
          <label className="form-check-label ms-2" htmlFor="color3">
            藍色
          </label>
        </div>
        {/* 綠 */}
        <div
          className="form-check ms-3"
          onChange={(e) => {
            if (color4 === '0') {
              setColor4('4');
            } else {
              setColor4('0');
            }
          }}
        >
          <input
            className="form-check-input"
            type="checkbox"
            id="color4"
            name="color4"
            value="color4"
            checked={color4 === '4'}
          />
          <label className="form-check-label ms-2" htmlFor="color4">
            綠色
          </label>
        </div>
        {/* 黃 */}
        <div
          className="form-check ms-3"
          onChange={(e) => {
            if (color5 === '0') {
              setColor5('5');
            } else {
              setColor5('0');
            }
          }}
        >
          <input
            className="form-check-input"
            type="checkbox"
            id="color5"
            name="color5"
            value="color5"
            checked={color5 === '5'}
          />
          <label className="form-check-label ms-2" htmlFor="color5">
            黃色
          </label>
        </div>
        {/* 紅 */}
        <div
          className="form-check ms-3"
          onChange={(e) => {
            if (color6 === '0') {
              setColor6('6');
            } else {
              setColor6('0');
            }
          }}
        >
          <input
            className="form-check-input"
            type="checkbox"
            id="color6"
            name="color6"
            value="color6"
            checked={color6 === '6'}
          />
          <label className="form-check-label ms-2" htmlFor="color6">
            紅色
          </label>
        </div>
        {/* 橘 */}
        <div
          className="form-check ms-3"
          onChange={(e) => {
            if (color7 === '0') {
              setColor7('7');
            } else {
              setColor7('0');
            }
          }}
        >
          <input
            className="form-check-input"
            type="checkbox"
            id="color7"
            name="color7"
            value="color7"
            checked={color7 === '7'}
          />
          <label className="form-check-label ms-2" htmlFor="color7">
            橘色
          </label>
        </div>
        {/* 棕 */}
        <div
          className="form-check ms-3"
          onChange={(e) => {
            if (color8 === '0') {
              setColor8('8');
            } else {
              setColor8('0');
            }
          }}
        >
          <input
            className="form-check-input"
            type="checkbox"
            id="color8"
            name="color8"
            value="color8"
            checked={color8 === '8'}
          />
          <label className="form-check-label ms-2" htmlFor="color8">
            棕色
          </label>
        </div>
        {/* 灰 */}
        <div
          className="form-check ms-3"
          onChange={(e) => {
            if (color9 === '0') {
              setColor9('9');
            } else {
              setColor9('0');
            }
          }}
        >
          <input
            className="form-check-input"
            type="checkbox"
            id="color9"
            name="color9"
            value="color9"
            checked={color9 === '9'}
          />
          <label className="form-check-label ms-2" htmlFor="color9">
            灰色
          </label>
        </div>
      </div>
      {/* 適用衝浪舵篩選 */}
      <div className="mt-5">
        <h3 className="d-flex align-items-center filterProducts pb-2 ps-3">
          <MdOutlineSurfing size={24} color="#17a8a2" className="me-3" />
          適用衝浪舵類型
        </h3>
        <div
          className="form-check ms-3"
          onChange={(e) => {
            if (fin1 === '0') {
              setFin1('1');
            } else {
              setFin1('0');
            }
          }}
        >
          <input
            className="form-check-input"
            type="checkbox"
            id="fin1"
            name="fin1"
            value="fin1"
            checked={fin1 === '1'}
          />
          <label className="form-check-label ms-2" htmlFor="fin1">
            Single Tab
          </label>
        </div>
        <div
          className="form-check ms-3"
          onChange={(e) => {
            if (fin2 === '0') {
              setFin2('2');
            } else {
              setFin2('0');
            }
          }}
        >
          <input
            className="form-check-input"
            type="checkbox"
            id="fin2"
            name="fin2"
            value="fin2"
            checked={fin2 === '2'}
          />
          <label className="form-check-label ms-2" htmlFor="fin2">
            FCS II
          </label>
        </div>
        <div
          className="form-check ms-3"
          onChange={(e) => {
            if (fin3 === '0') {
              setFin3('3');
            } else {
              setFin3('0');
            }
          }}
        >
          <input
            className="form-check-input"
            type="checkbox"
            id="fin3"
            name="fin3"
            value="fin3"
            checked={fin3 === '3'}
          />
          <label className="form-check-label ms-2" htmlFor="fin3">
            FCS II Longboard
          </label>
        </div>
      </div>
    </>
  );
}

export default FilterBar;
