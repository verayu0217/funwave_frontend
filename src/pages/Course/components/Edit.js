import { useState } from 'react';

import StarRating from './StarRating';

// props拿出add
const Edit = ({ add }) => {
  const [msg, setMsg] = useState('');
  const [rating, setRating] = useState('');
  function msgChange(e) {
    setMsg(e.target.value);
  }

  // 綁定button的onClick方法
  function addMsg() {
    // 從父層傳下來的set方法
    add(function (prevData) {
      // 調換順序讓新留言在最上面
      return [
        {
          msg,
          rating,
        },
        ...prevData,
      ];
    });

    // 將留言暫存進localStorage 使用展開運算子=push
    let perMsg = JSON.parse(localStorage.getItem('totalMsg')) || [];
    let totalMsg = [
      {
        msg,
        rating,
        ...perMsg,
      },
    ];
    //TODO:將留言存進資料庫
    localStorage.setItem('totalMsg', JSON.stringify(totalMsg));
  }

  return (
    <div className="d-flex   flex-column">
      <label className="h3 mt-5">評價留言</label>
      {/* 放星星 */}
      <div>
        <StarRating setRating={setRating} />
      </div>
      <textarea
        name=""
        rows="4"
        cols="50"
        value={msg}
        onChange={msgChange}
      ></textarea>
      <input
        className="mt-2"
        type="file"
        id="photo"
        name="photo"
        onChange={(e) => {
          // 圖片儲存的方式不太一樣
          // setPhoto({ ...member, photo: e.target.files[0] });
        }}
      ></input>
      <button onClick={addMsg} className="editBtn btn btn-primary mt-2">
        送出留言
      </button>
    </div>
  );
};
export default Edit;
