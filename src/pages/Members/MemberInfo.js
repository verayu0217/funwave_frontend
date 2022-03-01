import { data } from '../../data/';
import React, { useState, useEffect, useContext } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import './Member.scss';
import titleImgMember from '../../data/images/greenwave64x24.png';
import { useAuth } from '../../context/auth';

const MemberLevel1 = '衝浪入門者';
const MemberLevel2 = '衝浪熱愛者';
const MemberLevel3 = '衝浪高手者';

function MemberInfo(props) {
  const { auth, setAuth } = useAuth();
  const [photo, setPhoto] = useState([]);
  const [memberClassName, setMemberClassName] = useState('');
  const [member, setMember] = useState({
    photo: '',
    member_name: '',
    member_email: '',
    password: '',
    member_address: '',
    member_phone: '',
    receiver_name: '',
    receiver_phone: '',
    receiver_address: '',
    remark: '',
    level: '',
  });

  function handleChange(e) {
    member[e.target.id] = e.target.value;
    setMember(member);
  }

  async function memberSubmit(e) {
    e.preventDefault();

    let msgData = new FormData();
    console.log(41, JSON.stringify(member));
    msgData.append('data', JSON.stringify(member));
    if (photo) msgData.append('photo', photo);

    let response = await axios.post(
      `${API_URL}/member/${member.member_id}`,
      msgData
    );
    console.log(response);
  }

  // 大頭貼更換
  const changeAvatar = (e) => {
    var avatar = document.getElementsByName('member_photo')[0];
    var previewAvatar = document.getElementById('preview-photo');

    var file = avatar.files[0];
    setPhoto(file);
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
    axios.get(`${API_URL}/member/${auth.member_id}`).then((response) => {
      if (response.data.length > 0) {
        const member = response.data[0];
        const amount = Number(response.data[0].amount);
        switch (true) {
          case amount >= 15000: {
            member.level = MemberLevel3;
            setMemberClassName('masterMember');
            break;
          }
          case amount >= 8000: {
            member.level = MemberLevel2;
            setMemberClassName('hotMember');
            break;
          }
          default: {
            member.level = MemberLevel1;
            setMemberClassName('startMember');
          }
        }
        setMember(member);
      }
    });
  }, []);
  return (
    <>
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
                  className="photo-img cover-fit"
                  src={`http://localhost:3002${member.member_photo}`}
                />
              </div>
              <h3 className="fs-24Member">{member.member_name}</h3>
              <h5 className={`fs-16Membe ${memberClassName}`}>
                {member.level}
              </h5>
              <button className="changeImgMember" type="file" id="theFile">
                <i className="fas fa-pen"></i>&ensp;更換大頭貼
              </button>
              <input
                type="file"
                class="form-control"
                id="photo"
                name="member_photo"
                value={member.photo}
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
              <p>初次享受衝浪的衝浪入門者，慢慢越陷越深...。</p>
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
                  id="member_name"
                  placeholder=""
                  required
                  defaultValue={member.member_name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="col-12">
                <Form.Label className="col-12 mt-3 mb-1 fs-16Member">
                  信箱(帳號)
                </Form.Label>
                <Form.Control
                  className="col-12 btn btnMember"
                  id="member_email"
                  type="email"
                  placeholder=""
                  required
                  defaultValue={member.member_email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="col-12 passwordMember"
                controlId="formPlaintextPassword"
              >
                <Form.Label className="col-12 mt-3 fs-16Member">
                  密碼(*必填)
                </Form.Label>
                <Form.Control
                  className="col-12 btn btnMember pwControlMember"
                  id="password"
                  type={type}
                  placeholder=""
                  required
                  defaultValue=""
                  onChange={handleChange}
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
                  id="member_phone"
                  placeholder=""
                  required
                  defaultValue={member.member_phone}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="col-12">
                <Form.Label className="col-12 mt-3 mb-1 fs-16Member">
                  地址
                </Form.Label>
                <Form.Control
                  className="col-12 btn btnMember"
                  type="text"
                  id="member_address"
                  placeholder=""
                  defaultValue={member.member_address}
                  onChange={handleChange}
                />
              </Form.Group>
              <h3 className="fs-24Member mt-5">送貨地址</h3>
              <Form.Group className="col-12">
                <Form.Label className="col-12 mt-3 mb-1 fs-16Member">
                  收件人姓名
                </Form.Label>
                <Form.Control
                  className="col-12 btn btnMember"
                  type="text"
                  id="receiver_name"
                  placeholder=""
                  defaultValue={member.receiver_name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="col-12">
                <Form.Label className="col-12 mt-3 mb-1 fs-16Member">
                  收件人電話號碼
                </Form.Label>
                <Form.Control
                  className="col-12 btn btnMember"
                  type="number"
                  id="receiver_phone"
                  placeholder=""
                  defaultValue={member.receiver_phone}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="col-12">
                <Form.Label className="col-12 mt-3 mb-1 fs-16Member">
                  收件人地址
                </Form.Label>
                <Form.Control
                  className="col-12 btn btnMember"
                  type="text"
                  id="receiver_address"
                  placeholder=""
                  defaultValue={member.receiver_address}
                  onChange={handleChange}
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
                  type="text"
                  id="remark"
                  row={1}
                  defaultValue={member.remark}
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
                  onClick={memberSubmit}
                >
                  儲存變更
                </Button>
              </div>
            </div>
          </div>
        </Form>
        {/* </div> */}
      </div>
    </>
  );
}
export default MemberInfo;
