import './Member.scss';
import titleImgMember from '../../data/images/greenwave64x24.png';

function MemberCoupon() {
  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center px-5">
          <h2 className="mb-5 titleMember text-center">
            <span className="me-2">
              <img src={titleImgMember} className="titleImgMember" />
            </span>
            我的優惠券
          </h2>
          <div class="card cardMember mt-5 mb-3 p-4">
            <div class="d-flex">
              <div className="me-3">
                <p className="m-0 fs-20Member orange">
                  可使用<span className="orange">(2)</span>
                </p>
              </div>
              <div class="lineWrapMember me-3 d-flex justify-content-center align-items-center">
                <div className="lineMemberCoupon"></div>
              </div>
              <div className="">
                <p className="m-0 fs-20Member">
                  已失效<span className="">(2)</span>
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex mt-4">
            <h3 className="fs-20Member p-0">優惠券紀錄</h3>
          </div>
          <div className="table-wrap mb-5 p-0">
            <table className="table table-control align-middle text-center my-3 tableMemberOrder">
              <thead>
                <tr>
                  <th className="fs-20Member">日期</th>
                  <th className="fs-20Member text-nowrap">優惠券項目</th>
                  <th className="fs-20Member">到期日</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-nowrap">2022-01-31</td>
                  <td className="text-nowrap">
                    冬季衝浪一下&nbsp;-&nbsp;消費滿&nbsp;5000&nbsp;送浪點住宿優惠
                  </td>
                  <td className="text-nowrap">2022/12/31</td>
                </tr>
                <tr>
                  <td className="text-nowrap">2022-01-31</td>
                  <td className="text-nowrap">
                    衝浪達人挑戰賽&nbsp;-&nbsp;買衝浪板送衝浪衣
                  </td>
                  <td className="text-nowrap">2022/12/31</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <nav aria-label="pageMember">
            <ul className="d-flex justify-content-center mt-5">
              <li className="page-item">
                <a className="page-link pageLinkMember" href="/">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link pageLinkMember" href="/">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link pageLinkMember" href="/">
                  3
                </a>
              </li>
            </ul>
          </nav> */}
        </div>
      </div>
    </>
  );
}

export default MemberCoupon;
