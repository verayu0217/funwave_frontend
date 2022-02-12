import React from 'react';
import PriceRangeRadio from './PriceRangeRadio';
// import TagCheckbox from './TagCheckbox';

// react-icons
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
// import { FaThumbsUp } from 'react-icons/fa';
// import { IoColorPalette } from 'react-icons/io5';
// import { MdOutlineSurfing } from 'react-icons/md';

function FilterBar(props) {
  const { priceRangeTypes, priceRange, setPriceRange } = props;

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
    </>
  );
}

export default FilterBar;
