import React from 'react';

function PriceRangeRadio(props) {
  const { priceRange, setPriceRange, value } = props;

  return (
    <>
      <div className="form-check ms-3">
        <input
          className="form-check-input"
          type="radio"
          id={value}
          value={value}
          checked={priceRange === value}
          onChange={(e) => {
            setPriceRange(e.target.value);
          }}
        />
        <label className="form-check-label ms-2" htmlFor={value}>
          {value}
        </label>
      </div>
    </>
  );
}

export default PriceRangeRadio;
