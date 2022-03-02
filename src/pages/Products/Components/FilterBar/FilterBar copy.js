import React from 'react';
import PriceRangeRadio from './PriceRangeRadio';
import SizeCheckbox from './SizeCheckbox';

// react-icons
import { RiMoneyDollarCircleFill, RiRulerFill } from 'react-icons/ri';
// import { FaThumbsUp } from 'react-icons/fa';
// import { IoColorPalette } from 'react-icons/io5';
// import { MdOutlineSurfing } from 'react-icons/md';

function FilterBar(props) {
  const {
    priceRangeTypes,
    priceRange,
    setPriceRange,
    sizeTypes,
    size,
    setSize,
  } = props;

  const handleChecked = (e) => {
    const value = e.target.value;
    if (!size.includes(value)) return setSize([...size, value]);

    if (size.includes(value)) {
      const newTags = size.filter((v) => v !== value);
      setSize(newTags);
    }
  };

  return (
    <>
      <div className="mt-5">
        <h3 className="d-flex align-items-center filterProducts pb-2 ps-3">
          <RiMoneyDollarCircleFill size={24} color="#17a8a2" className="me-3" />
          價格
        </h3>
        {priceRangeTypes.map((value, i) => (
          <PriceRangeRadio
            key={i}
            value={value}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
        ))}
      </div>

      <div className="mt-5">
        <h3 className="d-flex align-items-center filterProducts pb-2 ps-3">
          <RiRulerFill size={22} color="#17a8a2" className="me-3" />
          尺寸
        </h3>
        {sizeTypes.map((value, i) => (
          <SizeCheckbox
            value={value}
            key={i}
            size={size}
            handleChecked={handleChecked}
          />
        ))}
      </div>
    </>
  );
}

export default FilterBar;
