import { data } from '../../data/member/memberOrder';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import './Member.scss';
import titleImgMember from '../../data/images/greenwave64x24.png';

const MemberOrder = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // 總共有 lastPage 這麼多頁
  const [lastPage, setLastPage] = useState(1);

  // 為了處理網址
  let navigate = useNavigate();

  // 把網址上的 :id 拿出來
  const { member_id } = useParams();
  const { currentPage } = useParams();
  const [page, setPage] = useState(parseInt(currentPage, 10) || 1);
  console.log('currentPage', currentPage, page);

  // useEffect(() => {
  //   let getPrices = async () => {
  //     let response = await axios.get(`${API_URL}/Member/${id}?page=${page}`);
  //     setData(response.data.data);
  //     setLastPage(response.data.pagination.lastPage);
  //   };
  //   getPrices();
  // }, [page]);

  // const getPages = () => {
  //   let pages = [];
  //   for (let i = 1; i <= lastPage; i++) {
  //     pages.push(
  //       <li
  //         className="page-item"
  //         key={i}
  //         onClick={(e) => {
  //           setPage(i);
  //           navigate(`/Member/${id}/${i}`);
  //         }}
  //       >
  //         <a className="page-link pageLinkMember" href="/">
  //           {i}
  //         </a>
  //       </li>
  //     );
  //   }
  //   return pages;
  // };
  // useEffect(() => {
  //   // 先開起載入指示器
  //   setIsLoading(true);

  //   // 模擬和伺服器要資料
  //   // 最後設定到狀態中
  //   setStudents(data);

  //   // 3秒後關閉指示器
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // }, []);

  useEffect(() => {
    let getMember = async () => {
      // http://localhost:3002/api/
      let response = await axios.get(`${API_URL}/member`);
      setData(response.data);
    };
    getMember();
  }, []);

  // loading
  // const spinner = (
  //   <>
  //     <div className="spinner-grow text-primary" role="status">
  //       <span className="sr-only">Loading...</span>
  //     </div>
  //     <div className="spinner-grow text-secondary" role="status">
  //       <span className="sr-only">Loading...</span>
  //     </div>
  //     <div className="spinner-grow text-success" role="status">
  //       <span className="sr-only">Loading...</span>
  //     </div>
  //   </>
  // );

  // const display = (
  //   <>
  //     <table className="table table-control align-middle text-center my-3 tableMemberOrder">
  //       <thead>
  //         <tr>
  //           <th className="fs-20Member">訂單號碼</th>
  //           <th className="fs-20Member">訂單日期</th>
  //           <th className="fs-20Member">合計</th>
  //           <th className="fs-20Member">訂單狀態</th>
  //           <th></th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {students.map((v, i) => (
  //           <tr key={i}>
  //             <td>{v.order_number}</td>
  //             <td>{v.order_time}</td>
  //             <td>{v.amount}</td>
  //             <td className="prepareColorMember">{v.status}</td>
  //             <td className="text-nowrap">
  //               <a role="button" href="" className="deepblue me-3">
  //                 <i className="fas fa-edit"></i>
  //               </a>
  //               <a role="button" href="" className="deleteIconMember orange">
  //                 <i className="fas fa-trash-alt"></i>
  //               </a>
  //             </td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </>
  // );
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
            {/* {display} */}
            <table className="table table-control align-middle text-center my-3 tableMemberOrder">
              <thead>
                <tr>
                  <th className="fs-20Member text-nowrap">訂單號碼</th>
                  <th className="fs-20Member text-nowrap">訂單日期</th>
                  <th className="fs-20Member text-nowrap">合計</th>
                  <th className="fs-20Member text-nowrap">訂單狀態</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.map((order_list) => {
                  return (
                    <tr key={order_list}>
                      <td>{order_list.id}</td>
                      <td>{order_list.order_time}</td>
                      <td>{order_list.amount}</td>
                      <td
                        className={`prepareColorMember ${
                          order_list.status === '訂單已完成' ? 'black' : ''
                        }`}
                      >
                        {order_list.status}
                      </td>
                      <td className="text-nowrap">
                        <Link
                          to={`/member/member-order/member-order-details/${order_list.member_id}`}
                          className="deepblue me-3"
                        >
                          <i className="fas fa-edit"></i>
                        </Link>
                        <Link to="/" className="deleteIconMember orange">
                          <i className="fas fa-trash-alt"></i>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <nav aria-label="pageMember">
            <ul className="d-flex justify-content-center mt-5">
              {/* {getPages()} */}
              {/* <li className="page-item">
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
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MemberOrder;
