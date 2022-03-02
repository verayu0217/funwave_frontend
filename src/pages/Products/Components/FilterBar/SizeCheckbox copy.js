import React from 'react';

function SizeCheckbox(props) {
  const { value, handleChecked, size } = props;
  return (
    <>
      <div className="checkbox ms-3">
        <label htmlFor={value}>
          <input
            type="checkbox"
            value={value}
            id={value}
            className="me-3"
            checked={size.includes(value)}
            onChange={handleChecked}
          />
          {value}
        </label>
      </div>
    </>
  );
}

export default SizeCheckbox;
