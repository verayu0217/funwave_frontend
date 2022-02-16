import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import './Member.scss';
import titleImgMember from '../../data/images/greenwave64x24.png';

function MemberInfo() {
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

  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-around">
          <div className="col-5 d-flex align-content-between justify-content-center flex-wrap">
            <div className="mb-5 d-flex flex-column text-center">
              <h2 className="mb-5 titleMember">
                <span className="me-2">
                  <img src={titleImgMember} className="titleImgMember" />
                </span>
                會員資料
              </h2>
              <div className="avatarMember d-flex justify-content-center">
                <img id="image" />
              </div>
              <h3 className="fs-24Member">歐陽范姜</h3>
              <h5 className="fs-16Member hotMember">衝浪熱愛者</h5>
              <button className="changeImgMember" type="file" id="theFile">
                <i className="fas fa-pen"></i>&ensp;更換大頭貼
              </button>
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
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className=""
            >
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
                />
              </Form.Group>
              <div className="col-12">
                <label htmlFor="phone" className="col-12 mt-3 mb-1 fs-16Member">
                  生日
                </label>
                <select className="col-12 btn btnMember"></select>
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
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
export default MemberInfo;
