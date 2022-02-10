import './Member.scss';
import titleImgMember from '../../data/images/greenwave64x24.png';
import passwordMember from '../../data/images/eyes-close.png';

function MemberInfo() {
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
                <img src="" alt="" />
              </div>
              <h3 className="fs-24Member">歐陽范姜</h3>
              <h5 className="fs-16Member hotMember">衝浪熱愛者</h5>
              <button className="changeImgMember">
                <i class="fas fa-pen"></i>&ensp;更換大頭貼
              </button>
            </div>
            <div className="mt-5">
              <h3 className="fs-16Member mb-4 captionMember">
                <i class="fas fa-bullhorn"></i>&ensp;會員等級說明：
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
            <form className="">
              <h3 className="fs-24Member">基本資料</h3>
              <div className="col-12">
                <label htmlFor="name" className="col-12 mt-3 mb-1 fs-16Member">
                  姓名
                </label>
                <input
                  className="col-12 btn btnMember"
                  type="text"
                  id="name"
                  name="name"
                />
              </div>
              <div className="col-12">
                <label htmlFor="name" className="col-12 mt-3 mb-1 fs-16Member">
                  信箱(帳號)
                </label>
                <input
                  className="col-12 btn btnMember"
                  type="text"
                  id="email"
                  name="email"
                />
              </div>

              <div className="col-12 passwordMember">
                <label
                  htmlFor="password"
                  className="col-12 mt-3 mb-1 fs-16Member"
                >
                  密碼
                </label>
                <input
                  className="col-12 btn btnMember"
                  type="password"
                  id="password"
                  name="password"
                />
                <label className="passwordImgMember">
                  <img
                    className="passwordImgMember"
                    src={passwordMember}
                    id="eyes"
                  />
                </label>
              </div>
              <div className="col-12">
                <label htmlFor="phone" className="col-12 mt-3 mb-1 fs-16Member">
                  手機
                </label>
                <input
                  className="col-12 btn btnMember"
                  type="number"
                  id="phone"
                  name="phone"
                />
              </div>
              <div className="col-12">
                <label htmlFor="phone" className="col-12 mt-3 mb-1 fs-16Member">
                  生日
                </label>
                <select className="col-12 btn btnMember"></select>
              </div>
              <h3 className="fs-24Member mt-5">送貨地址</h3>
              <div className="col-12">
                <label htmlFor="" className="col-12 mt-3 mb-1 fs-16Member">
                  收件人姓名
                </label>
                <input className="col-12 btn btnMember"></input>
              </div>
              <div className="col-12">
                <label htmlFor="" className="col-12 mt-3 mb-1 fs-16Member">
                  收件人電話號碼
                </label>
                <input className="col-12 btn btnMember"></input>
              </div>
              <div className="col-12">
                <label htmlFor="" className="col-12 mt-3 mb-1 fs-16Member">
                  送貨國家
                </label>
                <select className="col-12 btn btnMember"></select>
              </div>
              <div className="d-flex justify-content-between col-12">
                <div className="col-6">
                  <label htmlFor="" className="col-12 mt-3 mb-1 fs-16Member">
                    城市
                  </label>
                  <select className="col-11 btn btnMember"></select>
                </div>
                <div className="col-6 d-flex justify-content-end flex-column">
                  <label
                    htmlFor=""
                    className="col-12 mt-3 mb-1 fs-16Member pl-12Member"
                  >
                    區域
                  </label>
                  <select className="col-11 btn btnMember ms-auto"></select>
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="" className="col-12 mt-3 mb-1 fs-16Member">
                  地址
                </label>
                <input className="col-12 btn btnMember"></input>
              </div>
              <div className="col-12 mb-3">
                <label htmlFor="" className="col-12 mt-3 mb-1 fs-16Member">
                  備註
                </label>
                <input className="col-12 btn btnMember"></input>
              </div>
              <div className="d-flex justify-content-end">
                <button className="mx-2 btn btnMember cancelMember fs-16Member">
                  取消
                </button>
                <button
                  type="submit"
                  className="btn btnMember saveMember fs-16Member"
                >
                  儲存變更
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default MemberInfo;
