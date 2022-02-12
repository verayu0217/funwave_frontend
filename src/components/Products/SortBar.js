import React from 'react';

function SortBar(props) {
  const { sortBy, setSortBy } = props;
  return (
    <>
      <div className="btn-group">
        <select
          className="form-select rounded-pill text-muted"
          aria-label="form-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">以價格排序</option>
          <option value="1">價格 - 由少至多</option>
          <option value="2">價格 - 由多至少</option>
        </select>
      </div>
    </>
  );
}

export default SortBar;

// 複習2022.2.11
