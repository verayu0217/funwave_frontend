import { Link } from 'react-router-dom';

import './CourseCart.scss';

function CourseCart03() {
  return (
    <>
      <div className="col-sm-10 col-lg-10 m-auto">
        <div className="col-8 successBox border m-auto p-3 py-5">
          <p className="text-center text-white align-items-center fw-bold fs-1">
            報名成功，感謝您！
          </p>
        </div>
      </div>
      <div className=" text-center mt-5">
        <Link
          to="/home"
          className="btn btn-primary text-white mb-5 courseIntroBtn"
        >
          回首頁
          <i className="fas fa-arrow-right text-white"></i>
        </Link>
      </div>
      <div className="row border  infoBg bg m-5">
        <p className="border-bottom border-1 border-dark h3 p-3 ">注意事項</p>
        <div className="col-sm-12 col-lg-6 p-3 py-0">
          <div className="list-item">
            <p>1. 衝浪中消耗大量體力，喝水永遠不嫌少，建議多備飲用水</p>
            <p>
              2.本體驗提供保險，為了您的保險權益，完成付款後請儘速完成填寫《參加者資料》
            </p>
            <p>3.建議穿著泳裝，並適時塗抹防曬用品</p>
            <p>
              4.水中活動每日需多準備一套帶衣物以便現場更換，另請自備毛巾用於淋浴後使用
            </p>
            <p>5.不會游泳請自行斟酌是否則適應海水</p>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6 p-3 py-0">
          <div className="list-item">
            <p>6.身體狀況請隨時和教練聯繫</p>
            <p>7.疫情特殊期間請配合防疫措施</p>
            <p>
              8.天候影響：一般下雨日不取消行程，如因氣候因素由主辦單位通知延期
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseCart03;
