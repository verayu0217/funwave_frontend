import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/component.scss';

// react-icons
import { BsFillStarFill } from 'react-icons/bs';

function FavoriteStar() {
  return (
    <>
      <Link to="/collect">
        <div className="favWrap">
          <BsFillStarFill
            size={40}
            className="favStar"
            type="button"
            onClick=""
          ></BsFillStarFill>
        </div>
      </Link>
    </>
  );
}

export default FavoriteStar;
