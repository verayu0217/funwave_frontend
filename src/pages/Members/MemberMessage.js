import { Form, Row, Col, Button } from 'react-bootstrap';
import './Member.scss';
import titleImgMember from '../../data/images/greenwave64x24.png';

function MemberMessage() {
  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center px-5">
          <h2 className="mb-5 titleMember text-center">
            <span className="me-2">
              <img src={titleImgMember} className="titleImgMember" />
            </span>
            留言
          </h2>
          <div class="card text-center mt-5 p-0 rounded-0">
            <div class="card-header p-3 fs-26Member">TO FUNWAVE</div>
            <div class="card-body">
              <p class="card-text p-4 fs-20Member">目前尚未收到新訊息！</p>
              <Form>
                <Form.Group
                  className="col-12 mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    row={3}
                    className="col-12"
                    placeholder="輸入訊息"
                  />
                </Form.Group>
                <div className="d-flex justify-content-between mt-3">
                  <Button className="mx-2 btn btnMember deepblueBtnMember fs-16Member">
                    加入圖片
                  </Button>
                  <Button
                    type="submit"
                    className="btn btnMember deepblueBtnMember fs-16Member"
                  >
                    傳送
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberMessage;
