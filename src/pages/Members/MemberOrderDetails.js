import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  Tab,
  Row,
  Col,
  Nav,
  Collapse,
  Button,
  Table,
  Accordion,
  Form,
} from 'react-bootstrap';
import axios from 'axios';
import { API_URL } from '../../utils/config';

import './Member.scss';
import titleImgMember from '../../data/images/greenwave64x24.png';

function MemberOrderDetails() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  // 總共有 lastPage 這麼多頁
  const [lastPage, setLastPage] = useState(1);
  // 為了處理網址
  let navigate = useNavigate();
  // 把網址上的 :stockId 拿出來
  const { member_id } = useParams();
  // const { currentPage } = useParams();

  // const [page, setPage] = useState(parseInt(currentPage, 10) || 1);
  // console.log('currentPage', currentPage, page);

  useEffect(() => {
    let getPrices = async () => {
      let response = await axios.get(
        `${API_URL}/member/member-order/${member_id}`
      );
      setData(response.data.data);
      setLastPage(response.data.pagination.lastPage);
    };
    getPrices();
  }, []);
  {
    // data.map((order_list) => {
    return (
      <>
        <div className="container mt-5 containerDetailsMember">
          <div className="me-5">
            <Link
              className="btn saveMember fs-16Member"
              to={`/member/member-order`}
            >
              <i className="fas fa-arrow-left"></i>&nbsp;回上一頁
            </Link>
          </div>
          <div className="row d-flex justify-content-center">
            <h2 className="mb-5 titleMember text-center">
              {member_id}&nbsp;訂單內容
            </h2>
            <h2 className="text-center gray">合計：NT$10,250</h2>
            {/* <h5 className="text-center gray">購物車(2件)</h5> */}
            <Accordion defaultActiveKey="0" alwaysOpen>
              <Accordion.Item className="border-0 dropdownMember" eventKey="0">
                <Accordion.Header className="accordionMember text-center gray">
                  購物車(2件)
                </Accordion.Header>
                <Accordion.Body>
                  <Table
                    responsive
                    hover
                    className="table table-control align-middle text-center tableMemberOrderDetails"
                  >
                    <thead>
                      <tr>
                        <th className="text-nowrap text-start">商品資訊</th>
                        <th className="text-nowrap">優惠</th>
                        <th className="text-nowrap">單件價格</th>
                        <th className="text-nowrap">數量</th>
                        <th className="text-nowrap text-end">小計</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((data) => {
                        return (
                          <>
                            <tr key={data}>
                              <td className="d-flex">
                                <img src="/" className="orderImgMember" />
                                <div className="d-flex align-items-center flex-column">
                                  <p>{data.products.product_name}</p>
                                  <p className="m-0">SIZE: 6’8</p>
                                </div>
                              </td>
                              <td>
                                <span className="discountHintMember">
                                  優惠促銷
                                </span>
                                <br />
                                <p>
                                  【品牌日】會員符合資格可享折扣，不得與其他優惠同時使用。
                                </p>
                              </td>
                              <td>
                                <p className="m-0">NT$10,250</p>
                                <p className="text-decoration-line-through remarkMember">
                                  NT$11,900
                                </p>
                              </td>
                              <td>1</td>
                              <td>NT$10,250</td>
                            </tr>
                            <tr>
                              <td className="d-flex">
                                <img src="/" className="orderImgMember" />
                                <div>
                                  <p>EXTRA SHOT BY RACHAEL TILLY</p>
                                  <p>SIZE: 6’8</p>
                                </div>
                              </td>
                              <td>
                                <span className="discountHintMember">
                                  優惠促銷
                                </span>
                                <br />
                                <p>
                                  【品牌日】會員符合資格可享折扣，不得與其他優惠同時使用。
                                </p>
                              </td>
                              <td>
                                <p className="m-0">NT$10,250</p>
                                <p className="text-decoration-line-through remarkMember">
                                  NT$11,900
                                </p>
                              </td>
                              <td>1</td>
                              <td>NT$10,250</td>
                            </tr>
                            <tr>
                              <td colSpan={5} className="fw-bold">
                                <p className="text-start">已享用之優惠</p>
                                <br />
                                <div className="d-flex">
                                  <span className="discountHintMember me-3">
                                    優惠促銷
                                  </span>
                                  <p>購買滿NT$2,000，即享有本島宅配免運費。</p>
                                </div>
                              </td>
                            </tr>
                            <tr className="">
                              <td colSpan={5} className="text-end fw-bold">
                                <div className="row">
                                  <div className="col-7"></div>
                                  <div className="col-5">
                                    <div className="row d-flex justify-content-end">
                                      <p className="col-6 text-start">小計：</p>
                                      <p className="col-6">NT$13,400</p>
                                    </div>
                                    <div className="row d-flex justify-content-end">
                                      <p className="col-6 text-start">
                                        折抵購物金：
                                      </p>
                                      <p className="col-6">
                                        -NT$100&ensp;購物金
                                      </p>
                                    </div>
                                    <div className="row d-flex justify-content-end">
                                      <p className="col-6 text-start">
                                        使用點數折現：
                                      </p>
                                      <div className="col-6">
                                        <p className="m-0">-NT$0</p>
                                        <p className="remarkMember">
                                          本次使用&ensp;10&ensp;點
                                        </p>
                                      </div>
                                    </div>
                                    <div className="row d-flex justify-content-end">
                                      <p className="col-6 text-start">運費：</p>
                                      <p className="col-6">NT$0</p>
                                    </div>
                                    <div className="row d-flex justify-content-end">
                                      <p className="col-6 text-start">合計：</p>
                                      <p className="col-6">NT$10,250</p>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="text-end mt-3">
            <Button className="pinkBtnMember">取消訂單</Button>
          </div>
          <Accordion
            className="mt-4 mb-4"
            defaultActiveKey="0"
            flush
            alwaysOpen
          >
            <Accordion.Item className="dropdownMember" eventKey="0">
              <Accordion.Header className="accordionMember"></Accordion.Header>
              <Accordion.Body className="border">
                <div className="row p-5">
                  <div className="col-6">
                    <p className="fw-bold">訂單資訊</p>
                    <br />
                    <p>訂單號碼：</p>
                    <p>訂單信箱：</p>
                    <p>訂單日期：</p>
                    <p>訂單狀態：</p>
                  </div>
                  <div className="col-6">
                    <p className="fw-bold">顧客資訊</p>
                    <br />
                    <p>姓名：</p>
                    <p>電話號碼：</p>
                    <p>生日：</p>
                    <p>手機號碼：</p>
                  </div>
                  <div className="col-6 mt-5">
                    <p className="fw-bold">送貨資訊</p>
                    <br />
                    <p>收件人名稱：</p>
                    <p>收件人電話號碼：</p>
                    <p>送貨方式：</p>
                    <p>送貨狀態：</p>
                    <p>或件追蹤編號：</p>
                    <p>地址：</p>
                  </div>
                  <div className="col-6 mt-5">
                    <p className="fw-bold">付款資訊</p>
                    <br />
                    <p>付款方式：</p>
                    <p>付款狀態：</p>
                    <p>交易序號：</p>
                    <p>發票號碼：</p>
                  </div>
                  <div className="col-12 mt-5">
                    <p className="fw-bold">訂單狀態通知</p>
                    <br />
                  </div>

                  <Form>
                    <Form.Group
                      className="col-12 mt-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label className="fw-bold detailLabelMember">
                        賣家和顧客訂單通訊
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        row={3}
                        className="col-12"
                        placeholder="輸入訊息"
                      />
                    </Form.Group>
                    <div className="d-flex justify-content-between mt-3">
                      <Button className="btn btnMember deepblueBtnMember fs-16Member">
                        &ensp;加入圖片
                      </Button>
                      <Button
                        type="submit"
                        className="btn btnMember pinkBtnMember fs-16Member"
                      >
                        發送
                      </Button>
                    </div>
                  </Form>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </>
    );
    // });
  }
}

export default MemberOrderDetails;
