import React from 'react';

function SearchBar(props) {
  const { searchWord, setSearchWord } = props;
  return (
    <>
      <input
        type="text"
        placeholder="  🔍  以商品名稱搜尋"
        className="form-control mt-1 rounded-pill position-absolute top-0 end-0 w-25 text-muted"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      />
    </>
  );
}

export default SearchBar;
