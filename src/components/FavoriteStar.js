import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/component.scss';

// react-icons
import { MdStar } from 'react-icons/md';

function FavoriteStar() {
  return (
    <>
      <Link to="/collect">
        <div className="favWrap d-flex">
          <MdStar size={40} className="favStar" type="button"></MdStar>
          <div className="myFav">我的收藏</div>
        </div>
      </Link>
    </>
  );
}

export default FavoriteStar;
