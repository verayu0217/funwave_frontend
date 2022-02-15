import './Member.scss';
import titleImgMember from '../../data/images/greenwave64x24.png';

function MemberOrder() {
  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center px-5">
          <h2 className="mb-5 titleMember text-center">
            <span className="me-2">
              <img src={titleImgMember} className="titleImgMember" />
            </span>
            訂單紀錄
          </h2>
          <div className="d-flex mt-3">
            <h3 className="fs-20Member">訂單查詢</h3>
          </div>
          <div className="table-wrap mb-5">
            <table className="table table-control align-middle text-center my-3 tableMemberOrder">
              <thead>
                <tr>
                  <th className="fs-20Member">訂單號碼</th>
                  <th className="fs-20Member">訂單日期</th>
                  <th className="fs-20Member">合計</th>
                  <th className="fs-20Member">訂單狀態</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>20220131163342500</td>
                  <td>2022-01-31</td>
                  <td>NT$13300</td>
                  <td className="prepareColorMember">準備中</td>
                  <td className="text-nowrap">
                    <a role="button" href="" className="deepblue me-3">
                      <i className="fas fa-edit"></i>
                    </a>
                    <a
                      role="button"
                      href=""
                      className="deleteIconMember orange"
                    >
                      <i className="fas fa-trash-alt"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>20220131163342500</td>
                  <td>2022-01-31</td>
                  <td>NT$13300</td>
                  <td className="prepareColorMember">準備中</td>
                  <td className="text-nowrap">
                    <a role="button" href="" className="deepblue me-3">
                      <i className="fas fa-edit"></i>
                    </a>
                    <a
                      role="button"
                      href=""
                      className="deleteIconMember orange"
                    >
                      <i className="fas fa-trash-alt"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>20220131163342500</td>
                  <td>2022-01-31</td>
                  <td>NT$13300</td>
                  <td>已完成</td>
                  <td className="text-nowrap m-auto">
                    <a role="button" href="" className="deepblue">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <nav aria-label="pageMember">
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
          </nav>
        </div>
      </div>
    </>
  );
}

export default MemberOrder;
