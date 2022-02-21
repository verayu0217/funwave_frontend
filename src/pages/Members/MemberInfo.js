import { data } from '../../data/';
import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import './Member.scss';
import titleImgMember from '../../data/images/greenwave64x24.png';

function MemberInfo(props) {
  const [member, setMember] = useState([]);
  const [Date, setDate] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { memberId } = useParams();
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

  // 大頭貼更換
  const changeAvatar = (e) => {
    var avatar = document.getElementsByName('member_photo')[0];
    var previewAvatar = document.getElementById('preview-photo');

    var file = avatar.files[0];
    if (file) {
      previewAvatar.src = URL.createObjectURL(file);
      previewAvatar.classList.remove('d-none');
    }
  };

  const [close, setClose] = useState('fas fa-eye-slash');
  const [type, setType] = useState('password');
  const [validated, setValidated] = useState(false);

  // 空值驗證
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  useEffect(() => {
    let getMemberOrderDetails = async () => {
      let response = await axios.get(`${API_URL}/member/${memberId}`);
      setMember(response.data);
    };
    getMemberOrderDetails();
  }, []);
  return (
    <>
      {/* {
      data.map((item) => {
        return ( */}
      <div className="container mt-5">
        {/* <div className="row d-flex justify-content-around"> */}
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="row d-flex justify-content-around"
        >
          <div className="col-5 d-flex align-content-between justify-content-center flex-wrap">
            <div className="mb-5 d-flex flex-column text-center">
              <h2 className="mb-5 titleMember">
                <span className="me-2">
                  <img src={titleImgMember} className="titleImgMember" />
                </span>
                會員資料
              </h2>
              <div className="avatarMember d-flex justify-content-center">
                <img
                  id="preview-photo"
                  className="photo-img cover-fit d-none"
                />
              </div>
              <h3 className="fs-24Member">歐陽范姜</h3>
              <h5 className="fs-16Member hotMember">衝浪熱愛者</h5>
              <button className="changeImgMember" type="file" id="theFile">
                <i className="fas fa-pen"></i>&ensp;更換大頭貼
              </button>
              <input
                type="file"
                class="form-control"
                id="photo"
                name="member_photo"
                value={member.member_photo}
                onChange={(e) => {
                  changeAvatar(e.target.value);
                }}
              />
            </div>
            <div className="mt-5">
              <h3 className="fs-16Member mb-4 captionMember">
                <i className="fas fa-bullhorn"></i>&ensp;會員等級說明：
              </h3>
              <h5 className="masterMember fs-16Member">衝浪高手者</h5>
              <p>消費$15,000/年 以上的衝浪高手，喜歡更新自己的衝浪配備。</p>
              <h5 className="hotMember fs-16Member">衝浪熱愛者</h5>
              <p>消費$8,000/年以上的衝浪愛好者，衝得小有心得，偶爾更新配備。</p>
              <h5 className="startMember fs-16Member">衝浪入門者</h5>
              <p>
                消費$3,500/年以上的衝浪入門者，初次享受衝浪，慢慢越陷越深...。
              </p>
            </div>
          </div>
          <div className="col-4">
            <div className="">
              <h3 className="fs-24Member">基本資料</h3>
              <Form.Group className="col-12">
                <Form.Label className="col-12 mt-3 mb-1 fs-16Member">
                  姓名
                </Form.Label>
                <Form.Control
                  className="col-12 btn btnMember"
                  type="text"
                  id="name"
                  placeholder=""
                  required
                  defaultValue={data.member_name}
                  onChange={(e) => {
                    setMember(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="col-12">
                <Form.Label className="col-12 mt-3 mb-1 fs-16Member">
                  信箱(帳號)
                </Form.Label>
                <Form.Control
                  className="col-12 btn btnMember"
                  type="email"
                  placeholder=""
                  required
                  defaultValue={member.member_email}
                  onChange={(e) => {
                    setMember(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group
                className="col-12 passwordMember"
                controlId="formPlaintextPassword"
              >
                <Form.Label className="col-12 mt-3 fs-16Member">
                  密碼
                </Form.Label>
                <Form.Control
                  className="col-12 btn btnMember pwControlMember"
                  id="password"
                  type={type}
                  placeholder=""
                  required
                  defaultValue={member.member_password}
                  onChange={(e) => {
                    setMember(e.target.value);
                  }}
                />
                <Form.Label className="passwordImgMember">
                  <i
                    className={`loginEye passwordImgMember ${close}`}
                    onClick={() => {
                      if (type === 'password') {
                        setType('text');
                        setClose('fas fa-eye');
                      } else {
                        setType('password');
                        setClose('fas fa-eye-slash');
                      }
                    }}
                  ></i>
                </Form.Label>
              </Form.Group>
              <Form.Group className="col-12">
                <Form.Label className="col-12 mt-3 mb-1 fs-16Member">
                  手機
                </Form.Label>
                <Form.Control
                  className="col-12 btn btnMember"
                  type="number"
                  id="phone"
                  placeholder=""
                  required
                  defaultValue={member.member_phone}
                  onChange={(e) => {
                    setMember(e.target.value);
                  }}
                />
              </Form.Group>
              <div className="col-12">
                <label htmlFor="phone" className="col-12 mt-3 mb-1 fs-16Member">
                  生日
                </label>
                {/* <select className="col-12 btn btnMember"></select> */}
                <input
                  type="date"
                  className="form-control col-12 btn btnMember"
                  id="date"
                  placeholder="date"
                  value={Date}
                  onChange={(e) => {
                    setMember(e.target.value);
                  }}
                  required
                />
              </div>
              <h3 className="fs-24Member mt-5">送貨地址</h3>
              <Form.Group className="col-12">
                <Form.Label className="col-12 mt-3 mb-1 fs-16Member">
                  收件人姓名
                </Form.Label>
                <Form.Control
                  className="col-12 btn btnMember"
                  type="text"
                  id="name"
                  placeholder=""
                  required
                  defaultValue={data.receiver}
                  onChange={(e) => {
                    setMember(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="col-12">
                <Form.Label className="col-12 mt-3 mb-1 fs-16Member">
                  收件人電話號碼
                </Form.Label>
                <Form.Control
                  className="col-12 btn btnMember"
                  type="number"
                  id="phone"
                  placeholder=""
                  required
                  defaultValue={data.receiver_phone}
                  onChange={(e) => {
                    setMember(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="col-12">
                <Form.Label className="col-12 mt-3 mb-1 fs-16Member">
                  送貨國家
                </Form.Label>
                <Form.Select
                  className="col-12 btn btnMember"
                  aria-label="Default select example"
                  required
                >
                  <option value="1">台灣</option>
                  <option value="2">日本</option>
                  <option value="3">美國</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="d-flex justify-content-between col-12">
                <Form.Group className="col-6">
                  <Form.Label className="col-11 formWidthMember mt-3 mb-1 fs-16Member">
                    城市
                  </Form.Label>
                  <Form.Select
                    className="col-11 formWidthMember btn btnMember"
                    aria-label="Default select example"
                    required
                  >
                    <option value="1">台北市</option>
                    <option value="2">桃園市</option>
                    <option value="3">高雄市</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="col-6 d-flex justify-content-end flex-column">
                  <Form.Label className="col-11 formWidthMember mt-3 mb-1 fs-16Member ms-auto">
                    區域
                  </Form.Label>
                  <Form.Select
                    className="col-11 formWidthMember btn btnMember ms-auto"
                    aria-label="Default select example"
                    required
                  >
                    <option value="1">信義區</option>
                    <option value="2">中壢區</option>
                    <option value="3">左營區</option>
                  </Form.Select>
                </Form.Group>
              </Form.Group>
              <Form.Group className="col-12">
                <Form.Label className="col-12 mt-3 mb-1 fs-16Member">
                  地址
                </Form.Label>
                <Form.Control
                  className="col-12 btn btnMember"
                  type="text"
                  id="phone"
                  placeholder=""
                  required
                  defaultValue={data.address}
                  onChange={(e) => {
                    setMember(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group
                className="col-12 mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="col-12 mt-3 mb-1 fs-16Member">
                  備註
                </Form.Label>
                <Form.Control
                  as="textarea"
                  row={1}
                  className="col-12 btn btnMember"
                />
              </Form.Group>
              <div className="d-flex justify-content-end">
                <Button className="mx-2 btn btnMember cancelMember fs-16Member">
                  取消
                </Button>
                <Button
                  type="submit"
                  className="btn btnMember saveMember fs-16Member"
                >
                  儲存變更
                </Button>
              </div>
            </div>
          </div>
        </Form>
        {/* </div> */}
      </div>
      {/* )
      })
    } */}
      {/* {isLoading ? spinner : display} */}
    </>
  );
}
export default MemberInfo;
