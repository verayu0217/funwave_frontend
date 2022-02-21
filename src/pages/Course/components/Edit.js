import { useState } from 'react';

// props拿出add
const Edit = ({ add }) => {
  const [msg, setMsg] = useState('');
  function msgChange(e) {
    setMsg(e.target.value);
  }

  // 綁定button的onClick方法
  function addMsg() {
    // 從父層傳下來的set方法
    add(function (prevData) {
      return [
        ...prevData,
        {
          msg,
        },
      ];
    });
  }
  // console.log(msg);
  // console.log(now);

  return (
    <div className="d-flex   flex-column">
      <label className="h3">評價留言</label>
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
