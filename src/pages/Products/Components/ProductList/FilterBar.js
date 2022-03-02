// FilterBar.js 內容說明：商品主頁左方的篩選

import React from 'react';
// import chroma from 'chroma-js';
// import Select, { StylesConfig } from 'react-select';
// import { ColourOption, colourOptions } from '../../../../data/reactSelect.ts';

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
  } = props;

  // react-select
  // const colourStyles: StylesConfig<ColourOption, true> = {
  //   control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  //   option: (styles, { data, isDisabled, isFocused, isSelected }) => {
  //     const color = chroma(data.color);
  //     return {
  //       ...styles,
  //       backgroundColor: isDisabled
  //         ? undefined
  //         : isSelected
  //         ? data.color
  //         : isFocused
  //         ? color.alpha(0.1).css()
  //         : undefined,
  //       color: isDisabled
  //         ? '#ccc'
  //         : isSelected
  //         ? chroma.contrast(color, 'white') > 2
  //           ? 'white'
  //           : 'black'
  //         : data.color,
  //       cursor: isDisabled ? 'not-allowed' : 'default',

  //       ':active': {
  //         ...styles[':active'],
  //         backgroundColor: !isDisabled
  //           ? isSelected
  //             ? data.color
  //             : color.alpha(0.3).css()
  //           : undefined,
  //       },
  //     };
  //   },
  //   multiValue: (styles, { data }) => {
  //     const color = chroma(data.color);
  //     return {
  //       ...styles,
  //       backgroundColor: color.alpha(0.1).css(),
  //     };
  //   },
  //   multiValueLabel: (styles, { data }) => ({
  //     ...styles,
  //     color: data.color,
  //   }),
  //   multiValueRemove: (styles, { data }) => ({
  //     ...styles,
  //     color: data.color,
  //     ':hover': {
  //       backgroundColor: data.color,
  //       color: 'white',
  //     },
  //   }),
  // };

  return (
    <>
      {/* 篩選 */}
      {/* 價格篩選 */}
      <div className="mt-5">
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
      {/* <Select
        closeMenuOnSelect={false}
        defaultValue={[colourOptions[0], colourOptions[1]]}
        isMulti
        options={colourOptions}
        styles={colourStyles}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      /> */}
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
              setColor2('1');
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
          />
          <label className="form-check-label ms-2" htmlFor="color2">
            黑色
          </label>
        </div>
        {/* 藍 */}
        <div
          className="form-check ms-3"
          onClick={(e) => {
            setColor3('1');
          }}
        >
          <input
            className="form-check-input"
            type="checkbox"
            id="color3"
            name="color3"
            value="color3"
          />
          <label className="form-check-label ms-2" htmlFor="color3">
            藍色
          </label>
        </div>
        {/* 綠 */}
        <div
          className="form-check ms-3"
          onClick={(e) => {
            setColor4('1');
          }}
        >
          <input
            className="form-check-input"
            type="checkbox"
            id="color4"
            name="color4"
            value="color4"
          />
          <label className="form-check-label ms-2" htmlFor="color4">
            綠色
          </label>
        </div>
        {/* 黃 */}
        <div
          className="form-check ms-3"
          onClick={(e) => {
            setColor5('1');
          }}
        >
          <input
            className="form-check-input"
            type="checkbox"
            id="color5"
            name="color5"
            value="color5"
          />
          <label className="form-check-label ms-2" htmlFor="color5">
            黃色
          </label>
        </div>
        {/* 紅 */}
        <div
          className="form-check ms-3"
          onClick={(e) => {
            setColor6('1');
          }}
        >
          <input
            className="form-check-input"
            type="checkbox"
            id="color6"
            name="color6"
            value="color6"
          />
          <label className="form-check-label ms-2" htmlFor="color6">
            紅色
          </label>
        </div>
        {/* 橘 */}
        <div
          className="form-check ms-3"
          onClick={(e) => {
            setColor7('1');
          }}
        >
          <input
            className="form-check-input"
            type="checkbox"
            id="color7"
            name="color7"
            value="color7"
          />
          <label className="form-check-label ms-2" htmlFor="color7">
            橘色
          </label>
        </div>
        {/* 棕 */}
        <div
          className="form-check ms-3"
          onClick={(e) => {
            setColor8('1');
          }}
        >
          <input
            className="form-check-input"
            type="checkbox"
            id="color8"
            name="color8"
            value="color8"
          />
          <label className="form-check-label ms-2" htmlFor="color8">
            棕色
          </label>
        </div>
        {/* 灰 */}
        <div
          className="form-check ms-3"
          onClick={(e) => {
            setColor9('1');
          }}
        >
          <input
            className="form-check-input"
            type="checkbox"
            id="color9"
            name="color9"
            value="color9"
          />
          <label className="form-check-label ms-2" htmlFor="color9">
            灰色
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
          <MdOutlineSurfing size={24} color="#17a8a2" className="me-3" />
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
    </>
  );
}

export default FilterBar;
