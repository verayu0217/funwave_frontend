import './Member.scss';
import titleImgMember from '../../data/images/greenwave64x24.png';

function MemberShoppingGold() {
  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center px-5">
          <h2 className="mb-5 titleMember text-center">
            <span className="me-2">
              <img src={titleImgMember} className="titleImgMember" />
            </span>
            我的購物金
          </h2>
          <div class="card cardMember mt-5 mb-3 p-4">
            <div class="row g-0">
              <p className="me-3 m-0 fs-20Member">
                現有購物金&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="orange">200</span>&nbsp;&nbsp;元
              </p>
            </div>
          </div>
          <div className="d-flex mt-4">
            <h3 className="fs-20Member p-0">購物金紀錄</h3>
          </div>
          <div className="table-wrap mb-5 p-0">
            <table className="table table-control align-middle text-center my-3 tableMemberOrder">
              <thead>
                <tr>
                  <th className="fs-20Member">日期</th>
                  <th className="fs-20Member text-nowrap">購物金項目</th>
                  <th className="fs-20Member text-nowrap">購物金款項</th>
                  <th className="fs-20Member">到期日</th>
                  <th className="fs-20Member text-nowrap">購物金餘額</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-nowrap">2022-01-31</td>
                  <td className="text-nowrap">生日購物金</td>
                  <td className="text-nowrap">+200</td>
                  <td className="text-nowrap">2022/12/31</td>
                  <td className="text-nowrap">200</td>
                </tr>
                <tr>
                  <td className="text-nowrap">2022-01-31</td>
                  <td className="text-nowrap">
                    已使用在訂單<span className="blue">2022163341350</span>
                  </td>
                  <td className="text-nowrap">-100</td>
                  <td className="text-nowrap">-</td>
                  <td className="text-nowrap">0</td>
                </tr>
                <tr>
                  <td className="text-nowrap">2022-01-31</td>
                  <td className="text-nowrap">消費NT$7200</td>
                  <td className="text-nowrap">+100</td>
                  <td className="text-nowrap">2022/11/22</td>
                  <td className="text-nowrap">100</td>
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

export default MemberShoppingGold;
