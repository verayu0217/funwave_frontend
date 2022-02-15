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
              <div className="col-12">
                <div class="form-floating">
                  <textarea
                    class="form-control textareaMember"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                  ></textarea>
                  <label for="floatingTextarea2">輸入訊息</label>
                </div>
                <div className="d-flex justify-content-between mt-3">
                  <button className="btn deepblueBtnMember">
                    &ensp;加入圖片
                  </button>
                  <button className="btn deepblueBtnMember">傳送</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberMessage;
