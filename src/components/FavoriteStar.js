import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/component.scss';

// react-icons
import { MdStar } from 'react-icons/md';

function FavoriteStar() {
  return (
    <>
      <Link to="/collect">
        <div className="favWrap">
          <MdStar size={40} className="favStar" type="button"></MdStar>
          <span className="myFav">我的收藏</span>
        </div>
      </Link>
    </>
  );
}

export default FavoriteStar;
