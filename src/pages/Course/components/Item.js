import StarRating from './StarRating';

const Item = ({ message, date, rating, photo, name }) => {
  return (
    <div>
      {/* 留言 */}
      <div className="row border m-auto mt-3">
        {/* 第一排抬頭 */}
        <div className="d-flex flex-wrap">
          <div className="mt-2 align-self-center">
            {/*TODO: 會員大頭照  */}

            <img
              className="rounded-circle"
              src={'https://picsum.photos/id/237/50/50'}
              alt=""
              height="50px"
              weight="50px"
            />
          </div>

          {/* 名稱 */}
          <div className="m-3 align-self-center">{name}</div>

          {/* 星星 */}
          <div className="align-self-center">
            <div className="d-flex">
              {/* 放評完價的星星 disable(true)不能讓它點擊 */}
              <StarRating initStarts={rating} disable rating={rating} />
            </div>
          </div>

          <div className="align-self-center ms-auto">
            <div className="date-4 ">{date}</div>
            {/* <button className="date-4 ">刪除</button> */}
          </div>
        </div>
        {/* 第二排 */}
        <div className="m-3">
          {/* 文字 */}
          <p>{message}</p>

          {/* 圖片區  */}
          <div className="mt-3 d-flex justify-space-around">
            {/* 如果沒有圖片就不顯示圖片*/}
            {photo && typeof photo === 'string' ? (
              <img
                src={`http://localhost:3002/${photo}`}
                className={photo === '' ? 'd-none' : 'rounded-3 m-1'}
                alt=""
                height="80px"
                weight="80px"
              />
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Item;
