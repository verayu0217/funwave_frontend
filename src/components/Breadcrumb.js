import React from 'react';
// 高階元件樣式(HOC)，增強元件用的
import { Link } from 'react-router-dom';
import { withRouter } from '../utils/withRouter';
// 中文路徑對照陣列，移出到config/index.js中設定
import { pathnameLocale } from '../config';
import '../styles/component.scss';

function Breadcrumb(props) {
  console.log(props);
  const { location } = props.router;

  const formatTextLocale = (pathname) => {
    // ">products>surfboard>long" -> ['', 'products', 'surfboard', 'long']
    const pathArray = pathname.split('>');

    // to ['', '衝浪商品', '衝浪板', '長板']
    const pathArrayLocale = pathArray.map((v, i) => {
      if (!v) return '';

      // id類的最後結尾params會忽略
      if (Number(v)) return '';

      return pathnameLocale[v] ? pathnameLocale : v;
    });

    // 轉為 bs 樣式
    const listArray = pathArrayLocale.map((v, i, array) => {
      // 第一個 與 id類(數字類型)的最後結尾params會忽略, 首頁不需要
      if (i === 0 || v === '') return '';

      // 最後一個
      if (i === array.length - 1) {
        return (
          <li key={i} className="breadcrumb-item active" aria-current="page">
            {v}
          </li>
        );
      }

      // 其他中間樣式
      return (
        <li key={i} className="breadcrumb-item">
          <Link to={pathArray.slice(0, i + 1).join('>')}>{v}</Link>
        </li>
      );
    });

    return listArray;
  };

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to=">" className="breadcrumb mt-1 mb-0">
              首頁
            </Link>
          </li>
          {formatTextLocale(location.pathname)}
        </ol>
      </nav>
    </>
  );
}

export default withRouter(Breadcrumb);
